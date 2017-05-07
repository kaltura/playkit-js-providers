//@flow

import OvpService from './ovp-service'
import RequestBuilder from '../../request-builder'

const SERVICE_NAME: string = "session";

/**
 * Ovp session service methods
 * @classdesc
 */
export default class SessionService extends OvpService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} baseUrl The service base URL
   * @param {string} partnerId The partner ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static anonymousSession(baseUrl: string, partnerId: number) {
    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "startWidgetSession";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "session-startWidget";
    request.params = {widgetId: "_" + partnerId};
    return request;
  }
}
