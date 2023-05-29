//@flow
import OVPService from '../ovp-service';
import RequestBuilder from '../../../../util/request-builder';
import OVPConfiguration from '../../config';
import {param} from '../../../../util/param';

const SERVICE_NAME: string = 'analytics';

export default class OVPAnalyticsService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for analytics.trackEvent
   * @function trackEvent
   * @param {string} serviceUrl - The service base url
   * @param {Object} params - The event params
   * @param {string} [requestMethod] - The request method GET or POST
   * @returns {RequestBuilder} - The request builder
   * @static
   */
  static trackEvent(serviceUrl: string, params: Object, requestMethod: ?string): RequestBuilder {
    return requestMethod === 'POST'
      ? OVPAnalyticsService._trackEventByPOST(serviceUrl, params)
      : OVPAnalyticsService._trackEventByGET(serviceUrl, params);
  }

  static _trackEventByGET(serviceUrl: string, params: Object): RequestBuilder {
    const ovpParams = OVPConfiguration.get();
    const serviceParams = {};
    Object.assign(serviceParams, ovpParams.serviceParams, params);
    const request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = 'trackEvent';
    request.method = 'GET';
    request.retryConfig.maxAttempts = 1;
    request.tag = 'analytics-trackEvent';
    request.params = serviceParams;
    request.url = serviceUrl + '?service=' + request.service + '&action=' + request.action + '&' + param(request.params);
    return request;
  }

  static _trackEventByPOST(serviceUrl: string, params: Object): RequestBuilder {
    const ovpParams = OVPConfiguration.get();
    const serviceParams = {};
    Object.assign(serviceParams, ovpParams.serviceParams, params);
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    const {eventType, partnerId, entryId, sessionId} = serviceParams;
    const urlParams = {eventType, partnerId, entryId, sessionId};
    ['eventType', 'partnerId', 'entryId', 'sessionId'].forEach(key => delete serviceParams[key]);
    request.service = SERVICE_NAME;
    request.action = 'trackEvent';
    request.method = 'POST';
    request.retryConfig.maxAttempts = 1;
    request.tag = 'analytics-trackEvent';
    request.params = JSON.stringify(serviceParams);
    request.url = serviceUrl + '?service=' + request.service + '&action=' + request.action + '&' + param(urlParams);
    return request;
  }
}
