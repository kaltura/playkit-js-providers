//@flow
import MultiRequestBuilder from '../../common/multi-request-builder';
import OVPConfiguration from '../config';

const SERVICE_NAME: string = 'multirequest';

export default class OVPService {
  /**
   * Gets a new instance of MultiRequestBuilder with ovp params
   * @function getMultiRequest
   * @param {string} playerVersion The player version
   * @param {string} ks The ks
   * @param {string} partnerId The partner ID
   * @returns {MultiRequestBuilder} The multi request builder
   * @static
   */
  static getMultiRequest(playerVersion: string, ks: string, partnerId?: number): MultiRequestBuilder {
    const config = OVPConfiguration.get();
    const ovpParams = config.serviceParams;
    Object.assign(ovpParams, {ks: ks, clientTag: 'html5:v' + playerVersion});
    if (partnerId) {
      Object.assign(ovpParams, {partnerId: partnerId});
    }
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const multiReq = new MultiRequestBuilder(headers);
    multiReq.method = 'POST';
    multiReq.service = SERVICE_NAME;
    multiReq.url = multiReq.getUrl(config.serviceUrl);
    multiReq.params = ovpParams;
    return multiReq;
  }
}
