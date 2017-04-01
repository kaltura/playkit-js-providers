//@flow
import UiConfService from '../services/uiConfService'
import KalturaUiConfResponse from '../responseTypes/kalturaUIConfResponse'
import * as config from '../config'
import BaseLoader from './baseLoader'

export default class UiConfigLoader extends BaseLoader {
  /**
   * @member - UiConf object
   * @type {KalturaUiConfResponse}
   * @private
   */
  uiConf: KalturaUiConfResponse;
  /**
   * @member - uiConf ID
   * @type {number}
   * @private
   */
  _uiConfId: number;

  /**
   * @constructor
   * @param {string} name loader name.
   * @param {Object} params loader params
   */
  constructor(name: string, params: Object) {
    super(name, UiConfigLoader.buildRequests(params));
    this._uiConfId = params.uiConfId;
  }

  /**
   * Sets loader data from response
   * @function
   * @param {Object} results
   */
  setData(results: Object) {
    this.uiConf = new KalturaUiConfResponse(results[0].data);
  }

  /**
   * Builds loader requests
   * @function
   * @param params
   * @returns {RequestBuilder}
   * @static
   */
  static buildRequests(params: Object): RequestBuilder {
    let requests: Array<RequestBuilder> = [];
    requests.push(UiConfService.get(config.BE_URL, params.ks, params.uiConfId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean}
   */
  isValid(): boolean {
    return !!this._uiConfId;
  }
}
