import OVPSessionService from '../services/session-service';
import OVPConfiguration from '../config';
import RequestBuilder from '../../../util/request-builder';
import {ILoader} from '../../../types';

export default class OVPSessionLoader implements ILoader {
  private _widgetId: string;
  private _requests!: Array<RequestBuilder>;
  private _response: any = {};

  public static get id(): string {
    return 'session';
  }

  public set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  public get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  public set response(response: any) {
    this._response.ks = response[0].data.ks;
  }

  public get response(): any {
    return this._response.ks;
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: any) {
    this.requests = this.buildRequests(params);
    this._widgetId = params.widgetId;
  }

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public buildRequests(params: any): Array<RequestBuilder> {
    const config = OVPConfiguration.get();
    const requests: Array<RequestBuilder> = [];
    requests.push(OVPSessionService.anonymousSession(config.serviceUrl, params.widgetId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  public isValid(): boolean {
    return !!this._widgetId;
  }
}
