//@flow
import SessionService from '../services/session-service'
import Configuration from '../config'
import RequestBuilder from '../../request-builder'

const config = Configuration.get();
/**
 * Media entry loader
 * @classdesc
 */
export default class SessionLoader implements ILoader {
  static get name(): string {
    return "session";
  }

  /**
   * @member - partner ID
   * @type {number}
   * @private
   */
  _partnerId: number;
  _requests: Array<RequestBuilder>;
  _response: any = {};

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
    let requests: Array<RequestBuilder> = [];
    requests.push(SessionService.anonymousSession(config.beUrl, params.partnerId));
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
