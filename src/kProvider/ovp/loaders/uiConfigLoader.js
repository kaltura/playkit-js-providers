//@flow
import UiConfService from '../services/uiConfService'
import KalturaUiConfResponse from '../responseTypes/kalturaUIConfResponse'
import Configuration from '../config'
import RequestBuilder from '../../requestBuilder'

const config = Configuration.get();

export default class UiConfigLoader implements ILoader {
  static get name(): string {
    return "uiConf";
  }

  /**
   * @member - uiConf ID
   * @type {number}
   * @private
   */
  _uiConfId: number;
  _requests: Array<RequestBuilder>;
  _response: any = {};

  /**
   * @constructor
   * @param {string} name loader name.
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    this.requests = this.buildRequests(params);
    this._uiConfId = params.uiConfId;
  }

  set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  set response(response: any) {
    this._response.uiConf = new KalturaUiConfResponse(response[0].data);
  }

  get response(): any {
    if (this._response != null && this._response.uiConf != null && this._response.uiConf.config != null)
      return JSON.parse(this._response.uiConf.config).plugins;
    else
      return null;
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
