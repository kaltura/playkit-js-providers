//@flow
import OVPService from '../ovp-service';
import RequestBuilder from '@playkit-js/core-provider/src/util/request-builder';
import OVPConfiguration from '../../config';
import {param} from '@playkit-js/core-provider/src/util/param';

const SERVICE_NAME: string = 'analytics';

export default class OVPAnalyticsService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for analytics.trackEvent
   * @function trackEvent
   * @param {string} serviceUrl - The service base url
   * @param {Object} params - The event params
   * @returns {RequestBuilder} - The request builder
   * @static
   */
  static trackEvent(serviceUrl: string, params: Object): RequestBuilder {
    const ovpParams = OVPConfiguration.get();
    const serviceParams = {};
    Object.assign(serviceParams, ovpParams.serviceParams, params);
    const request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = 'trackEvent';
    request.method = 'GET';
    request.tag = 'analytics-trackEvent';
    request.params = serviceParams;
    request.url = serviceUrl + '?service=' + request.service + '&action=' + request.action + '&' + param(request.params);
    return request;
  }
}
