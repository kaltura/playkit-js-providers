import OVPService from './ovp-service';
import RequestBuilder from '../../../util/request-builder';

const SERVICE_NAME: string = 'user';

export default class OVPUserService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for user.get
   * @function getPlaybackContext
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public static get(serviceUrl: string, ks: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'get';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'user-get';
    request.params = { ks: ks, format: 1 };
    return request;
  }
}
