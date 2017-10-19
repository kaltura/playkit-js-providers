//@flow
import MultiRequestBuilder from '../../multi-request-builder'
import Configuration from '../config'

const config = Configuration.get();
const SERVICE_NAME: string = "multirequest";

/**
 * Base for all ott services
 * @classdesc
 */
export default class OttService {
  /**
   * Gets a new instance of MultiRequestBuilder with ott params
   * @function getMultirequest
   * @param {string} ks The ks
   * @param {string} partnerId The partner ID
   * @returns {MultiRequestBuilder} The multi request builder
   * @static
   */
  static getMultirequest(ks: string, partnerId?: number): MultiRequestBuilder {
    let ottParams = config.serviceParams;
    if(ks)
    {
      Object.assign(ottParams, {ks: ks});
    }
    if (partnerId) {
      Object.assign(ottParams, {partnerId: partnerId});
    }
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    let multiReq = new MultiRequestBuilder(headers);
    multiReq.method = "POST";
    multiReq.service = SERVICE_NAME;
    multiReq.url = multiReq.getUrl(config.beUrl);
    multiReq.params = ottParams;
    return multiReq;
  }
}
