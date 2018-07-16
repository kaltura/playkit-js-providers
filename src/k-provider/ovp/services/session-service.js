//@flow
import OVPService from './ovp-service';
import RequestBuilder from '../../../util/request-builder';

const SERVICE_NAME: string = 'session';

export default class OVPSessionService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} serviceUrl The service base URL
   * @param {string} partnerId The partner ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static anonymousSession(serviceUrl: string, partnerId: number): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'startWidgetSession';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'session-startWidget';
    request.params = {widgetId: '_' + partnerId};
    return request;
  }
}
