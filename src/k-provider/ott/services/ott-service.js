//@flow
import MultiRequestBuilder from '../../multi-request-builder'
import * as config from '../config'

export default class OttService {
  static getMultirequest(ks: string): MultiRequestBuilder {
    let ottParams = config.SERVICE_CONFIG_PARAMAS;
    Object.assign(ottParams, {ks: ks});
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    let multiReq = new MultiRequestBuilder(headers);
    multiReq.method = "POST";
    multiReq.service = "multirequest";
    multiReq.url = multiReq.getUrl(config.BE_URL);
    multiReq.params = ottParams;
    return multiReq;
  }
}
