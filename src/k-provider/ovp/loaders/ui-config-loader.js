//@flow
import OVPUIConfService from '../services/ui-conf-service';
import {KalturaUIConfResponse} from '../response-types/kaltura-ui-conf-response';
import OVPConfiguration from '../config';
import RequestBuilder from '../../../util/request-builder';

export default class OVPUIConfigLoader implements ILoader {
  _uiConfId: number;
  _requests: Array<RequestBuilder>;
  _response: any = {};

  static get id(): string {
    return 'uiConf';
  }

  set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  set response(response: any) {
    this._response.uiConf = new KalturaUIConfResponse(response[0].data);
  }

  get response(): any {
    if (this._response && this._response.uiConf && this._response.uiConf.config)
      try {
        return JSON.parse(this._response.uiConf.config).plugins;
      } catch (err) {
        return null;
      }
    else {
      return null;
    }
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    this.requests = this.buildRequests(params);
    this._uiConfId = params.uiConfId;
  }

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */
  buildRequests(params: Object): Array<RequestBuilder> {
    const config = OVPConfiguration.get();
    let requests: Array<RequestBuilder> = [];
    requests.push(OVPUIConfService.get(config.serviceUrl, params.ks, params.uiConfId));
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
