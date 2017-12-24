//@flow
import OVPService from './ovp-service'
import RequestBuilder from '../../../util/request-builder'

const SERVICE_NAME: string = "uiconf";

export default class OVPUIConfService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for uiconf.get
   * @function get
   * @param {string} cdnUrl The service base URL
   * @param {string} ks The ks
   * @param {string} uiConfId The uiConf ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static get(cdnUrl: string, ks: string, uiConfId: number) {
    const headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "get";
    request.method = "POST";
    request.url = request.getUrl(cdnUrl);
    request.tag = "uiconf-get";
    const responseProfileParams = {
      fields: "config",
      type: 1
    };
    request.params = {id: uiConfId, responseProfile: responseProfileParams, ks: ks};
    return request;
  }
}
