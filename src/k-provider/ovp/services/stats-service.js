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
   * @param {string} ks - The ks
   * @param {Object} event - The event data
   * @param {string} [baseUrl=Configuration.beUrl] - The service base URL
   * @returns {RequestBuilder} - The request builder
   * @static
   */
  static collect(ks: string, event: Object, baseUrl: ?string): RequestBuilder {
    let ovpParams = Configuration.get();
    let serviceParams = {};
    Object.assign(serviceParams, ovpParams.serviceParams, {ks: ks}, event);
    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "collect";
    request.method = "POST";
    request.baseUrl = baseUrl || ovpParams.beUrl;
    request.tag = "stats-collect";
    request.params = JSON.stringify(serviceParams);
    return request;
  }
}

export {StatsService, Configuration, RequestBuilder};
