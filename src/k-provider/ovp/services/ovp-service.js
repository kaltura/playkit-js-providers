//@flow
import MultiRequestBuilder from '../../multi-request-builder'
import Configuration from '../config'

const config = Configuration.get();
const SERVICE_NAME: string = "multirequest";

/**
 * Base for all ovp services
 * @classdesc
 */
export default class OvpService {
  /**
   * Gets a new instance of MultiRequestBuilder with ovp params
   * @function getMultirequest
   * @param {string} pVersion The player version
   * @param {string} ks The ks
   * @param {string} partnerId The partner ID
   * @returns {MultiRequestBuilder} The multi request builder
   * @static
   */
  static getMultirequest(pVersion: string, ks: string, partnerId?: number): MultiRequestBuilder {
    let ovpParams = config.serviceParams;
    Object.assign(ovpParams, {ks: ks, clientTag: 'html5:v' + pVersion});
    if (partnerId) {
      Object.assign(ovpParams, {partnerId: partnerId});
    }
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    let multiReq = new MultiRequestBuilder(headers);
    multiReq.method = "POST";
    multiReq.service = SERVICE_NAME;
    multiReq.url = multiReq.getUrl(config.serviceUrl);
    multiReq.params = ovpParams;
    return multiReq;
  }
}
