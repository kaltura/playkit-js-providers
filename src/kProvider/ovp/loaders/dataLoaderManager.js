//@flow
import OvpService from '../services/ovpService'
import {MultiRequestBuilder, MultiRequestResult} from '../../multiRequestBuilder'

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
   * @param {string} name
   * @param {Function} loader
   * @param {Object} params
   */
  add(name: string, loader: Function, params: Object): void {
    let execution_loader = loader.createLoader(name, params);
    if (execution_loader.isValid()) {
      this._loaders.set(name, execution_loader);
      execution_loader.getRequests().forEach((request) => {
        this._multiRequest.add(request);
        if (DataLoaderManager._loadersResponseMap.has(name)) {
          (DataLoaderManager._loadersResponseMap.get(name)).push(this._multiRequest.requests.length - 1)
        }
        else {
          DataLoaderManager._loadersResponseMap.set(name, [this._multiRequest.requests.length - 1])
        }
      });
    }
  }

  /**
   * Get data from all loaders using multi request
   * @function
   * @returns {Promise}
   */
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._multiRequest.execute()
        .then(response => {
            this._multiResponse = response;
            if (!response.success) {
              reject(response);
            }
            else {
              this._loaders.forEach(function (value, key) {
                let loaderDataIndexes = DataLoaderManager._loadersResponseMap.get(key);
                try {
                  value.setData(response.data.slice(loaderDataIndexes[0], loaderDataIndexes[loaderDataIndexes.length]));
                }
                catch (err) {
                  reject({success: false, data: err});
                }
              });
              resolve(this._loaders);
            }
          },
          err => {
            reject(err);
          });
    });
  }

  /**
   * Resets data loader manager
   * @param {number} partnerID
   * @param {string} ks
   */
  reset(partnerID: number, ks: string = ""): void {
    DataLoaderManager._loadersResponseMap = new Map();
    this._loaders = new Map();
    this._multiRequest = OvpService.getMultirequest(ks, partnerID);
    this._multiResponse = {};
  }
}

