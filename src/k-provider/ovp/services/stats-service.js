//@flow
import OvpService from './ovp-service'
import RequestBuilder from '../../request-builder'
import Configuration from '../config'

const SERVICE_NAME: string = "stats";
/**
 * Ovp stats service methods
 * @classdesc
 */
export default class StatsService extends OvpService {

  /**
   * Creates an instance of RequestBuilder for stats.collect
   * @function collect
   * @param {string} baseUrl The service base URL
   * @param {string} ks The ks
   * @param {Object} event The event data
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static collect(baseUrl: string, ks: string, event: Object): RequestBuilder {
    let ovpParams = Configuration.get();
    let serviceParams = ovpParams.serviceParams;
    Object.assign(serviceParams, {ks: ks});

   // let params =  {format: 1, ks: ks};
    Object.assign(serviceParams, event);
    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "collect";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "stats-collect";
    request.params = JSON.stringify(serviceParams);
    return request;
  }
}

export {StatsService, Configuration, RequestBuilder};
