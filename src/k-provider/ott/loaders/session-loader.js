//@flow
import UserService from '../services/user-service'
import OTTConfiguration from '../config'
import RequestBuilder from '../../../util/request-builder'

const config = OTTConfiguration.get();

export default class OTTSessionLoader implements ILoader {
  _partnerId: number;
  _requests: Array<RequestBuilder>;
  _response: any = {};

  static get id(): string {
    return "session";
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    this.requests = this.buildRequests(params);
    this._partnerId = params.partnerId;
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
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */
  buildRequests(params: Object): Array<RequestBuilder> {
    const requests: Array<RequestBuilder> = [];
    requests.push(UserService.anonymousLogin(config.beUrl, params.partnerId, params.udid));
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
