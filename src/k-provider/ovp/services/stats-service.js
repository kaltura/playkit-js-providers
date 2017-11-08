//@flow
import OvpService from './ovp-service'
import RequestBuilder from '../../request-builder'
import Configuration from '../config'
import {param} from '../../../util/param'

declare var __VERSION__: string;
declare var __NAME__: string;

const SERVICE_NAME: string = "stats";
/**
 * Ovp stats service methods
 * @classdesc
 */
export default class StatsService extends OvpService {

  /**
   * Creates an instance of RequestBuilder for stats.collect
   * @function collect
   * @param {string} pVersion The player version
   * @param {string} ks - The ks
   * @param {Object} event - The event data
   * @param {string} baseUrl - The service base URL
   * @returns {RequestBuilder} - The request builder
   * @static
   */
  static collect(pVersion: string, ks: string, event: Object, baseUrl: string): RequestBuilder {
    let ovpParams = Configuration.get();
    let serviceParams = {};
    Object.assign(serviceParams, ovpParams.serviceParams, {ks: ks, clientTag: 'html5:v' + pVersion}, event);
    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "collect";
    request.method = "GET";
    request.tag = "stats-collect";
    request.params = serviceParams;
    request.url = baseUrl + '?service=' + request.service + '&action=' + request.action + '&' + param(request.params);
    return request;
  }
}

export {StatsService, Configuration, RequestBuilder};
export {__VERSION__ as VERSION, __NAME__ as NAME + "-stats-service"};
