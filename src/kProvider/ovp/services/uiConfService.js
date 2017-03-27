// @flow

import OvpService from './ovpService'
import RequestBuilder from '../../requestBuilder'

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
    request.tag = "session-startWidget";
    request.params = {id: uiConfID, ks: ks};
    return request;
  }
}
