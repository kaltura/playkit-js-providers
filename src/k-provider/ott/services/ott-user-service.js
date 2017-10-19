//@flow

import OttService from './ott-service'
import RequestBuilder from '../../request-builder'

const SERVICE_NAME: string = "ottuser";

/**
 * ottuser service methods
 * @classdesc
 */
export default class OTTUserService extends OttService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} baseUrl The service base URL
   * @param {string} partnerId The partner ID
   * @param {string} udid The udid
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static anonymousLogin(baseUrl: string, partnerId: number, udid?: string) {
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    let request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "anonymousLogin";
    request.method = "POST";
    request.url = request.getUrl(baseUrl);

    let params = {partnerId: partnerId};
    if (udid) {
      Object.assign(params, {udid: udid});
    }
    request.params = params;
    return request;
  }
}
