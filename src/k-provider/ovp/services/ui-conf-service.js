//@flow

import OvpService from './ovp-service'
import RequestBuilder from '../../request-builder'

const SERVICE_NAME: string = "uiconf";

/**
 * Ovp uiconf service methods
 * @classdesc
 */
export default class UiConfService extends OvpService {
  /**
   * Creates an instance of RequestBuilder for uiconf.get
   * @function get
   * @param {string} baseUrl The service base URL
   * @param {string} ks The ks
   * @param {string} uiConfID The uiConf ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static get(baseUrl: string, ks: string, uiConfID: number) {
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    let request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "get";
    request.method = "POST";
    request.url = request.getUrl(baseUrl);
    request.tag = "uiconf-get";
    let responseProfileParams = {
      fields: "config",
      type: 1
    };
    request.params = {id: uiConfID, responseProfile: responseProfileParams, ks: ks};
    return request;
  }
}
