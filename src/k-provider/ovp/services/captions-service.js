//@flow
import OVPService from './ovp-service';
import RequestBuilder from '../../../util/request-builder';

const SERVICE_NAME: string = 'caption_captionasset';

export default class OVPCaptionService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for caption_captionasset.list
   * @function post
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @param {string} entryId The uiConf ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static list(serviceUrl: string, ks: string, entryId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'list';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.params = {ks: ks, 'filter:entryIdEqual': entryId};
    return request;
  }
}
