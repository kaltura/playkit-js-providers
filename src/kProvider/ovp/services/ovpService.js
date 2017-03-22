// @flow


import MultiRequestBuilder from '../../multiRequestBuilder'
import * as config from '../config'

const SERVICE_NAME: string = "multirequest";

export default class OvpService {

  static getMultirequest(ks: string, partnerId?: number): MultiRequestBuilder {
    let ovpParams = config.SERVICE_CONFIG_PARAMAS;
    Object.assign(ovpParams, {ks: ks});
    if (partnerId)
      Object.assign(ovpParams, {partnerId: partnerId});
    let multiReq = new MultiRequestBuilder();
    multiReq.method = "POST";
    multiReq.service = SERVICE_NAME;
    multiReq.baseUrl = config.BE_URL;
    multiReq.params = ovpParams;
    return multiReq;
  }


}
