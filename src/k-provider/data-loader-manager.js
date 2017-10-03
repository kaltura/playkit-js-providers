//@flow
import OvpService from './ovp/services/ovp-service'
import OttService from './ott/services/ott-service'
import MultiRequestBuilder from './multi-request-builder'
import {MultiRequestResult} from './multi-request-builder'
import {ProviderType} from  './enums'
/**
 * Data loaders manager
 * @classdesc
 */
export default class DataLoaderManager {
  /**
   * @member - Lodaers response map index
   * @type {Map<string,Array<number>>}
   * @private
   * @static
   */
  static _loadersResponseMap: Map<string, Array<number>> = new Map();
  /**
   * @member - Loaders multi request
   * @type {MultiRequestBuilder}
   * @private
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

  /**
   * @constructor
   * @param {string} pVersion The player version
   * @param {string} partnerID Then partner ID
   * @param {string} ks The ks
   * @param {ProviderType} provider type, ovp or ott
   */
  constructor(pVersion: string, partnerID: number, ks: string = "", provider: ProviderType = ProviderType.OVP) {
    switch (provider) {
      case ProviderType.OVP:
        this._multiRequest = OvpService.getMultirequest(pVersion, ks, partnerID);
        break;
      case ProviderType.OTT:
        this._multiRequest = OttService.getMultirequest(ks, partnerID);
        break;
      default:
        break;
    }
  }

  /**
   * Add loader too execution loaders map
   * @function
   * @param {Function} loader Loader to add
   * @param {Object} params Loader params
   * @returns {void}
   */
  add(loader: Function, params: Object): void {
    let execution_loader = new loader(params);
    if (execution_loader.isValid()) {
      this._loaders.set(loader.id, execution_loader);
      //Get the start index from the multiReqeust before adding current execution_loader requests
      let startIndex = this._multiRequest.requests.length;
      //Get the requests
      let requests = execution_loader.requests;
      //Add requests to muktiRequest queue
      requests.forEach((request) => {
        this._multiRequest.add(request);
      });
      //Create range array of current execution_loader requests
      let executionLoaderResponseMap = Array.from(new Array(requests.length), (val, index) => index + startIndex);
      //Add to map
      DataLoaderManager._loadersResponseMap.set(loader.id, executionLoaderResponseMap);
    }
  }

  /**
   * Get data from all loaders using multi request
   * @function
   * @returns {Promise} Promise
   */
  fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._multiRequest.execute()
        .then(response => {
            this._multiResponse = response;
            if (!response.success) {
              reject(response);
            }
            else {
              let preparedData: Object = this.prepareData(response);
              if (preparedData.success) {
                resolve(this._loaders);
              }
              else {
                reject({success: false, data: preparedData.error});
              }
            }
          },
          err => {
            reject(err);
          });
    });
  }

  prepareData(response: MultiRequestResult): Object {
    this._loaders.forEach(function (loader, name) {
      let loaderDataIndexes = DataLoaderManager._loadersResponseMap.get(name);
      try {
        if (loaderDataIndexes != null) {
          loader.response = (response.results.slice(loaderDataIndexes[0], loaderDataIndexes[loaderDataIndexes.length - 1] + 1));
        }
      }
      catch (err) {
        return {success: false, error: err};
      }
    });
    return {success: true, data: this._loaders};
  }
}

