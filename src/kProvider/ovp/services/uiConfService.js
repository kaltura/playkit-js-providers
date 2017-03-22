// @flow

import OvpService from './ovpService'
import RequestBuilder from '../../requestBuilder'

const SERVICE_NAME: string = "uiconf";

export default class UiConfService extends OvpService {

  static get(baseUrl: string, ks: string, uiConfID: number) {

    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "get";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "session-startWidget";
    request.params = {id: uiConfID, ks: ks};
    return request;

  }

}
