// @flow


import MultiRequestBuilder from '../../multiRequestBuilder'

export default class OvpService {

  static getOvpConfigParams(): any {
    return {
      clientTag: "playkit-js",
      apiVersion: '3.3.0',
      format: 1
    };
  }

  static getMultirequest(baseUrl: string, ks: string, partnerId?: number): MultiRequestBuilder {
    let ovpParams = this.getOvpConfigParams();
    Object.assign(ovpParams, {ks: ks});
    if (partnerId)
      Object.assign(ovpParams, {partnerId: partnerId});
    let multiReq = new MultiRequestBuilder();
    multiReq.method = "POST";
    multiReq.service = "multirequest";
    multiReq.baseUrl = baseUrl;
    multiReq.params = ovpParams;
    return multiReq;
  }


}
