import OVPService from './ovp-service';
import RequestBuilder from '../../../util/request-builder';

const SERVICE_NAME: string = 'session';

export default class OVPSessionService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} serviceUrl The service base URL
   * @param {string} widgetId The widget ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public static anonymousSession(serviceUrl: string, widgetId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'startWidgetSession';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'session-startWidget';
    request.params = {widgetId};
    return request;
  }
}
