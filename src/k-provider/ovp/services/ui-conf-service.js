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
   * @param {string} baseUrl
   * @param {string} ks
   * @param {string} uiConfID
   * @returns {RequestBuilder}
   * @static
   */
  static get(baseUrl: string, ks: string, uiConfID: number) {
    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "get";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "uiconf-get";
    let responseProfileParams = {
      fields: "config",
      type: 1
    };
    request.params = {id: uiConfID, responseProfile: responseProfileParams, ks: ks};
    return request;
  }
}
