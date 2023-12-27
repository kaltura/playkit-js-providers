import MultiRequestBuilder, {MultiRequestResult} from './multi-request-builder';
import Error from '../../util/error/error';
import {ILoader, ProviderNetworkRetryParameters} from '../../types';

export default class DataLoaderManager {
  /**
   * @member - Loaders response map index
   * @type {Map<string,Array<number>>}
   * @private
   */
  private _loadersResponseMap: Map<string, Array<number>> = new Map();
  /**
   * @member - Loaders multi request
   * @type {MultiRequestBuilder}
   * @protected
   */
  protected _multiRequest!: MultiRequestBuilder;
  /**
   * @member - Loaders multi response
   * @type {MultiRequestResult}
   * @private
   */
  private _multiResponse!: MultiRequestResult;
  /**
   * @member - Loaders to execute
   * @type {Map<string,Function>}
   * @private
   */
  private _loaders: Map<string, ILoader> = new Map();

  private _networkRetryConfig: ProviderNetworkRetryParameters;

  constructor(networkRetryConfig: ProviderNetworkRetryParameters) {
    this._networkRetryConfig = networkRetryConfig;
  }

  /**
   * Add loader to execution loaders map
   * @function
   * @param {Function} loader Loader to add
   * @param {Object} params Loader params
   * @param {string} ks ks
   * @returns {void}
   */
  public add(loader: {new(...params): ILoader, id: string}, params: any, ks?: string): void {
    const execution_loader = new loader(params);
    if (execution_loader.isValid()) {
      this._loaders.set(loader.id, execution_loader);
      // Get the start index from the multiReqeust before adding current execution_loader requests
      const startIndex = this._multiRequest.requests.length;
      // Get the requests
      const requests = execution_loader.requests;
      this._multiRequest.retryConfig = this._networkRetryConfig;
      // Add requests to multiRequest queue
      requests.forEach(request => {
        request.params = request.params || {};
        request.params.ks = request.params.ks || ks;
        this._multiRequest.add(request);
      });
      // Create range array of current execution_loader requests
      const executionLoaderResponseMap = Array.from(new Array(requests.length), (val, index) => index + startIndex);
      // Add to map
      this._loadersResponseMap.set(loader.id, executionLoaderResponseMap);
    }
  }

  /**
   * Get data from all loaders using multi request
   * @param {boolean} requestsMustSucceed whether all of the requests must succeed or not
   * @function
   * @returns {Promise} Promise
   */
  public fetchData(requestsMustSucceed?: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      this._multiRequest.execute(requestsMustSucceed).then(
        data => {
          this._multiResponse = data.response;
          const preparedData: any = this.prepareData(data.response);
          if (preparedData.success) {
            resolve(this._loaders);
          } else {
            reject(
              new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.API_RESPONSE_MISMATCH, {
                headers: data.headers
              })
            );
          }
        },
        err => {
          reject(err);
        }
      );
    });
  }

  /**
   * Prepare fetched data
   * @function
   * @param {MultiRequestResult} response - The multi request result
   * @returns {Object} - The prepared data
   */
  public prepareData(response: MultiRequestResult): any {
    this._loaders.forEach((loader, name) => {
      const loaderDataIndexes = this._loadersResponseMap.get(name);
      try {
        if (loaderDataIndexes && loaderDataIndexes.length > 0) {
          loader.response = response.results.slice(loaderDataIndexes[0], loaderDataIndexes[loaderDataIndexes.length - 1] + 1);
        }
      } catch (err) {
        return {success: false, error: err};
      }
    });
    return {success: true, data: this._loaders};
  }
}
