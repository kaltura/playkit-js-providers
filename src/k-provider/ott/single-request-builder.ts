import { ILoader } from '../../types';
import getLogger from '../../util/logger';
import OTTConfiguration from './config';
import RequestBuilder from '../../util/request-builder';
import ServiceResult from '../common/base-service-result';
import Error from '../../util/error/error';

/**
 * SingleRequestBuilder provides a builder pattern for executing multiple individual requests
 * sequentially, as an alternative to the MultiRequestBuilder which batches them together.
 * @class SingleRequestBuilder
 */
export default class SingleRequestBuilder {
  private _logger = getLogger('SingleRequestBuilder');

  /**
   * Loaders to be executed
   * @type {Map<string, ILoader>}
   * @private
   */
  public loaders: Map<string, ILoader> = new Map();

  /**
   * Global parameters for all requests
   * @type {Record<string, unknown>}
   * @private
   */
  private _globalParams: Record<string, unknown> = { apiVersion: OTTConfiguration.get().serviceParams?.apiVersion };


  /**
   * Add a loader to the builder
   * @function add
   * @param {ILoader} loader The loader to add
   */
  public add(loader: ILoader) {
    this.loaders.set(loader.constructor.name, loader);
  }

  /**
   * Executes a single request
   * @function execute
   * @param {RequestBuilder} request - The request to execute
   * @returns {Promise<ServiceResult>} - Promise with the service result
   */
  private async _executeRequest(
    request: RequestBuilder
  ): Promise<ServiceResult> {
    request.params = JSON.stringify({ ...this._globalParams, ...request.params });
    try {
      const data = await request.doHttpRequest();
      const serviceResult = new ServiceResult(data.result || data);
      if (serviceResult.hasError) {
        const { code, message } = serviceResult.error;
        this._logger.error(
          `Service returned an error with error code: ${code} and message: ${message}.`
        );
      }
      return serviceResult;
    } catch (error) {
      throw new Error(
        Error.Severity.CRITICAL,
        Error.Category.NETWORK,
        Error.Code.API_RESPONSE_MISMATCH,
        { error, request }
      );
    }
  }

  /**
   * Executes multiple requests sequentially
   * @function executeSequence
   * @param {Array<RequestBuilder>} requests - The requests to execute in order
   * @returns {Promise<SingleRequestsResult>} - Promise with the combined results
   */
  private async _executeSequence(
    requests: Array<RequestBuilder>
  ): Promise<SingleRequestsResult> {
    const results: Array<ServiceResult> = [];

    for (const request of requests) {
      const serviceResult = await this._executeRequest(request);
      results.push(serviceResult);
    }

    // Create result object and check for success
    const singleRequestsResult = new SingleRequestsResult(results);
    if (singleRequestsResult.success) {
      return singleRequestsResult;
    } else {
      const errorResult = results.find(result => result.hasError);
      if (errorResult) {
        const { message, code } = errorResult.error;
        throw new Error(
          Error.Severity.CRITICAL,
          Error.Category.NETWORK,
          Error.Code.API_RESPONSE_MISMATCH,
          {
            error: errorResult.error,
            errorMessage: `Request returned an error: ${message} (code: ${code})`
          }
        );
      }
      return singleRequestsResult;
    }
  }

  /**
   * Executes all added loaders as separate requests
   * @function execute
   * @returns {Promise<Map<string, ILoader>>} - Promise with the loaded loaders
   */
  public async execute(): Promise<Map<string, ILoader>> {
    const sessionLoader = this.loaders.get('OTTSessionLoader');
    const assetLoader = this.loaders.get('OTTAssetLoader');
    let ks = '';
    if (sessionLoader) {
      const serviceResult = await this._executeRequest(sessionLoader.requests[0]);
      sessionLoader.response = [{ data: serviceResult.data }];
      ks = serviceResult.data.ks || '';
    }
    if (assetLoader) {
      assetLoader.requests.forEach((request: any) => {
        if (request.params.ks === "{1:result:ks}") {
          request.params.ks = ks;
        }
      });
      const requestsResult = await this._executeSequence(assetLoader.requests);
      assetLoader.response = requestsResult.results;
    }
    return this.loaders;
  }
}

export class SingleRequestsResult {
  private static _logger = getLogger('SingleRequestsResult');
  public success: boolean;
  public results: Array<ServiceResult>;

  constructor(results: Array<ServiceResult>) {
    const requestsMustSucceed = true;
    this.results = [...results];
    const errorResults = this.results.filter(({ hasError }) => hasError);
    for (const serviceResult of errorResults) {
      const { code, message } = serviceResult.error;
      SingleRequestsResult._logger.error(
        `Service returned an error with error code: ${code} and message: ${message}.`
      );
    }
    const allRequestsFailed = errorResults.length === this.results.length;
    const someRequestsFailed = requestsMustSucceed && errorResults.length > 0;

    if (allRequestsFailed || someRequestsFailed) {
      this.success = false;
    } else {
      if (!requestsMustSucceed) {
        this.results = this.results.filter(serviceResult => !serviceResult.hasError);
      }
      this.success = true;
    }
  }
}