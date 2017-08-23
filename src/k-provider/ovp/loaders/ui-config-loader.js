//@flow
import UiConfService from '../services/ui-conf-service'
import KalturaUiConfResponse from '../response-types/kaltura-ui-conf-response'
import Configuration from '../config'
import RequestBuilder from '../../request-builder'

const config = Configuration.get();

export default class UiConfigLoader implements ILoader {
  static get id(): string {
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
      try {
        return JSON.parse(this._response.uiConf.config).plugins;
      }
      catch (err) {
        return null;
      }
    else
      return null;
  }

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
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
   * @returns {boolean} Is valid
   */
  isValid(): boolean {
    return !!this._uiConfId;
  }
}
