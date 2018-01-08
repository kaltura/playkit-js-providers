//@flow
import OVPSessionService from '../services/session-service'
import OVPConfiguration from '../config'
import RequestBuilder from '../../../util/request-builder'

export default class OVPSessionLoader implements ILoader {
  _partnerId: number;
  _requests: Array<RequestBuilder>;
  _response: any = {};

  static get id(): string {
    return "session";
  }

  set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  set response(response: any) {
    this._response.ks = response[0].data.ks;
  }

  get response(): any {
    return this._response.ks;
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    this.requests = this.buildRequests(params);
    this._partnerId = params.partnerId;
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
    const requests: Array<RequestBuilder> = [];
    requests.push(OVPSessionService.anonymousSession(config.serviceUrl, params.partnerId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  isValid(): boolean {
    return !!this._partnerId;
  }
}
