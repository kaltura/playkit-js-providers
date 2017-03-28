//@flow


import MultiRequestBuilder from '../../multiRequestBuilder'
import * as config from '../config'

export default class OttService {


  static getMultirequest(ks: string): MultiRequestBuilder {

    let ottParams = config.SERVICE_CONFIG_PARAMAS;
    Object.assign(ottParams, {ks: ks});
    let multiReq = new MultiRequestBuilder();
    multiReq.method = "POST";
    multiReq.service = "multirequest";
    multiReq.baseUrl = config.BE_URL;
    multiReq.params = ottParams;
    return multiReq;
  }


}
