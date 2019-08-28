//@flow
import MultiRequestBuilder from '@playkit-js/core-provider/src/multi-request-builder';
import OTTConfiguration from '../config';

const SERVICE_NAME: string = 'multirequest';

export default class OTTService {
  /**
   * Gets a new instance of MultiRequestBuilder with ott params
   * @function getMultiRequest
   * @param {string} ks The ks
   * @param {string} partnerId The partner ID
   * @returns {MultiRequestBuilder} The multi request builder
   * @static
   */
  static getMultiRequest(ks: string, partnerId?: number): MultiRequestBuilder {
    const config = OTTConfiguration.get();
    const ottParams = config.serviceParams;
    if (ks) {
      Object.assign(ottParams, {ks: ks});
    }
    if (partnerId) {
      Object.assign(ottParams, {partnerId: partnerId});
    }
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const multiReq = new MultiRequestBuilder(headers);
    multiReq.method = 'POST';
    multiReq.service = SERVICE_NAME;
    multiReq.url = multiReq.getUrl(config.serviceUrl);
    multiReq.params = ottParams;
    return multiReq;
  }
}
