//@flow
import SessionService from '../services/sessionService'
import BaseLoader from './baseLoader'
import Configuration from '../config'

const config = Configuration.get();
/**
 * Media entry loader
 * @classdesc
 */
export default class SessionLoader extends BaseLoader {
  static NAME: string = "session";
  /**
   * @member - session ks
   * @type {string}
   * @public
   */
  ks: string;
  /**
   * @member - partner ID
   * @type {number}
   * @private
   */
  _partnerId: number;

  /**
   * @constructor
   * @param {string} name loader name.
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    super();
    super.setRequests(this.buildRequests(params));
    this.name = SessionLoader.NAME;
    this._partnerId = params.partnerId;
  }

  /**
   * Sets loader data from response
   * @function
   * @param {Object} results
   */
  setData(results: Object) {
    this.ks = results[0].data.ks;
  }

  /**
   * Builds loader requests
   * @function
   * @param params
   * @returns {RequestBuilder}
   * @static
   */
  buildRequests(params: Object): RequestBuilder {
    let requests: Array<RequestBuilder> = [];
    requests.push(SessionService.anonymousSession(config.beUrl, params.partnerId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean}
   */
  isValid(): boolean {
    return !!this._partnerId;
  }
}
