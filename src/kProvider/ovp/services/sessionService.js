//@flow

import OvpService from './ovpService'
import RequestBuilder from '../../requestBuilder'

const SERVICE_NAME: string = "session";

/**
 * Ovp session service methods
 * @classdesc
 */
export default class SessionService extends OvpService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} baseUrl
   * @param {string} partnerId
   * @returns {RequestBuilder}
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
