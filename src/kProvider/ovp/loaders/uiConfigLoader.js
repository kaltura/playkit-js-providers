//@flow
import UiConfService from '../services/uiConfService'
import KalturaUiConfResponse from '../responseTypes/kalturaUIConfResponse'
import BaseLoader from './baseLoader'
import Configuration from '../config'
import RequestBuilder from '../../requestBuilder'

const config = Configuration.get();

export default class UiConfigLoader extends BaseLoader {
  static NAME: string = "uiConf";
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
  constructor(params: Object) {
    super();
    super.setRequests(this.buildRequests(params));
    this.name = UiConfigLoader.NAME;
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
  buildRequests(params: Object): Array<RequestBuilder> {
    let requests: Array<RequestBuilder> = [];
    requests.push(UiConfService.get(config.beUrl, params.ks, params.uiConfId));
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
