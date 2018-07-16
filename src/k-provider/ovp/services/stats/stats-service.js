//@flow
import OVPService from '../ovp-service';
import RequestBuilder from '../../../../util/request-builder';
import OVPConfiguration from '../../config';
import {param} from '../../../../util/param';

const SERVICE_NAME: string = 'stats';

export default class OVPStatsService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for stats.collect
   * @function collect
   * @param {string} serviceUrl - The service base url
   * @param {string} ks - The ks
   * @param {string} playerVersion - The player version
   * @param {Object} event - The event data
   * @returns {RequestBuilder} - The request builder
   * @static
   */
  static collect(serviceUrl: string, ks: string, playerVersion: string, event: Object): RequestBuilder {
    const ovpParams = OVPConfiguration.get();
    const serviceParams = {};
    Object.assign(serviceParams, ovpParams.serviceParams, {ks: ks, clientTag: 'html5:v' + playerVersion}, event);
    const request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = 'collect';
    request.method = 'GET';
    request.tag = 'stats-collect';
    request.params = serviceParams;
    request.url = serviceUrl + '?service=' + request.service + '&action=' + request.action + '&' + param(request.params);
    return request;
  }
}
