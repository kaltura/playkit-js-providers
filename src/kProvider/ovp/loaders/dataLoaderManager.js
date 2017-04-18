//@flow
import OvpService from '../services/ovpService'
import MultiRequestBuilder from '../../multiRequestBuilder'
import {MultiRequestResult} from '../../multiRequestBuilder'

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
  static _loadersResponseMap: Map<string,Array<number>> = new Map();
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
  _loaders: Map<string,Function> = new Map();

  /**
   * @constructor
   * @param {string} partnerID
   * @param {string} ks
   */
  constructor(partnerID: number, ks: string = "") {
    this._multiRequest = OvpService.getMultirequest(ks, partnerID);
  }

  /**
   * Add loader too execution loaders map
   * @function
   * @param {Function} loader
   * @param {Object} params
   */
  add(loader: Function, params: Object): void {
    let execution_loader = loader.createLoader(params);
    if (execution_loader.isValid()) {
      this._loaders.set(execution_loader.name, execution_loader);
      execution_loader.getRequests().forEach((request) => {
        this._multiRequest.add(request);
        if (DataLoaderManager._loadersResponseMap.has(execution_loader.name)) {
          let loader = DataLoaderManager._loadersResponseMap.get(execution_loader.name);
          if (loader != null) {
            loader.push(this._multiRequest.requests.length - 1);
          }
        }
        else {
          if (this._multiRequest.requests != null) {
            DataLoaderManager._loadersResponseMap.set(execution_loader.name, [this._multiRequest.requests.length - 1]);
          }
        }
      });
    }
  }

  /**
   * Get data from all loaders using multi request
   * @function
   * @returns {Promise}
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
          loader.setData(response.results.slice(loaderDataIndexes[0], loaderDataIndexes[loaderDataIndexes.length - 1] + 1));
        }
      }
      catch (err) {
        return {success: false, error: err};
      }
    });
    return {success: true, data: this._loaders};
  }
}

