// @flow

import OvpService from './ovpService'
import RequestBuilder from '../../requestBuilder'

export default class SessionService extends OvpService {

  static anonymousSession(baseUrl: string, partnerId: number) {

    let request = new RequestBuilder;
    request.service = "session";
    request.action = "startWidgetSession";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "session-startWidget";
    request.params = {widgetId: "_" + partnerId};
    return request;

  }

}
