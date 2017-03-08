// @flow


import MultiRequestBuilder from '../../multiRequestBuilder'

export default class OttService

{

  static getRequestConfigKeys(): Array<string> {
    return ["clientTag", "apiVersion", "format"];
  }

  static getOttConfigParams(): any {
    return {
      clientTag: "playkit-js",
      apiVersion: '3.3.0',
      format: 1
    };
  }

  static getMultirequest(): MultiRequestBuilder {

    let multiReq = new MultiRequestBuilder();

    return multiReq;
  }


}
