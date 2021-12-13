// @flow
import MultiRequestBuilder, {MultiRequestResult} from './multi-request-builder';
import Error from '../../util/error/error';

export default class DataLoaderManager {
  /**
   * @member - Loaders response map index
   * @type {Map<string,Array<number>>}
   * @private
   */
  _loadersResponseMap: Map<string, Array<number>> = new Map();
  /**
   * @member - Loaders multi request
   * @type {MultiRequestBuilder}
   * @protected
   */
  _multiRequest: MultiRequestBuilder;
  /**
   * @member - Loaders multi response
   * @type {MultiRequestResult}
   * @private
   */
  _multiResponse: MultiRequestResult;
  /**
   * @member - Loaders to execute
   * @type {Map<string,Function>}
   * @private
   */
  _loaders: Map<string, ILoader> = new Map();

  _networkRetryConfig: ProviderNetworkRetryParameters;

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
  add(loader: Function, params: Object, ks?: string): void {
    let execution_loader = new loader(params);
    if (execution_loader.isValid()) {
      this._loaders.set(loader.id, execution_loader);
      // Get the start index from the multiReqeust before adding current execution_loader requests
      let startIndex = this._multiRequest.requests.length;
      // Get the requests
      let requests = execution_loader.requests;
      this._multiRequest.retryConfig = this._networkRetryConfig;
      // Add requests to multiRequest queue
      requests.forEach(request => {
        request.params = request.params || {};
        request.params.ks = params.ks || ks;
        this._multiRequest.add(request);
      });
      // Create range array of current execution_loader requests
      let executionLoaderResponseMap = Array.from(new Array(requests.length), (val, index) => index + startIndex);
      // Add to map
      this._loadersResponseMap.set(loader.id, executionLoaderResponseMap);
    }
  }

  /**
   * Get data from all loaders using multi request
   * @function
   * @returns {Promise} Promise
   */
  fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._multiRequest.execute().then(
        data => {
          this._multiResponse = data.response;
          let preparedData: Object = this.prepareData(data.response);
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
  prepareData(response: MultiRequestResult): Object {
    this._loaders.forEach((loader, name) => {
      let loaderDataIndexes = this._loadersResponseMap.get(name);
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
