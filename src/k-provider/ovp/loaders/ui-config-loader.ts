import OVPUIConfService from '../services/ui-conf-service';
import { KalturaUIConfResponse } from '../response-types';
import OVPConfiguration from '../config';
import RequestBuilder from '../../../util/request-builder';
import { ILoader } from '../../../types';

export default class OVPUIConfigLoader implements ILoader {
  private _uiConfId: number;
  private _requests!: Array<RequestBuilder>;
  private _response: any = {};

  public static get id(): string {
    return 'uiConf';
  }

  public set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  public get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  public set response(response: any) {
    this._response.uiConf = new KalturaUIConfResponse(response[0].data);
  }

  public get response(): any {
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
  constructor(params: any) {
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
  public buildRequests(params: any): Array<RequestBuilder> {
    const config = OVPConfiguration.get();
    const requests: Array<RequestBuilder> = [];
    requests.push(OVPUIConfService.get(config.serviceUrl, params.ks, params.uiConfId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  public isValid(): boolean {
    return !!this._uiConfId;
  }
}
