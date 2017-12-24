//@flow
import OTTService from './ott-service'
import RequestBuilder from '../../../util/request-builder'

const SERVICE_NAME: string = "ottuser";

export default class OTTUserService extends OTTService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} cdnUrl The service base URL
   * @param {string} partnerId The partner ID
   * @param {string} udid The udid
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static anonymousLogin(cdnUrl: string, partnerId: number, udid?: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "anonymousLogin";
    request.method = "POST";
    request.url = request.getUrl(cdnUrl);
    const params: Object = {partnerId: partnerId};
    if (udid) {
      Object.assign(params, {udid: udid});
    }
    request.params = params;
    return request;
  }
}
