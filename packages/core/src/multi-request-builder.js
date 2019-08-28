//@flow
import RequestBuilder from './util/request-builder';
import getLogger from './util/logger';
import ServiceResult from './base-service-result';
import Error from './util/error/error';

export default class MultiRequestBuilder extends RequestBuilder {
  static _logger = getLogger('MultiRequestBuilder');
  /**
   * @memberof - MultiRequestBuilder
   * @type {Array<RequestBuilder>}
   */
  requests: Array<RequestBuilder> = [];
  /**
   * Adds request to requests array
   * @function add
   * @param {RequestBuilder} request The request
   * @returns {MultiRequestBuilder} The multiRequest
   */
  add(request: RequestBuilder): MultiRequestBuilder {
    this.requests.push(request);
    const requestParams = {};
    const serviceDef: Object = {service: request.service, action: request.action};
    Object.assign(requestParams, {[this.requests.length]: Object.assign(serviceDef, request.params)});
    Object.assign(requestParams, this.params);
    this.params = requestParams;
    return this;
  }

  /**
   * Executes a multi request
   * @function execute
   * @returns {Promise} The multirequest execution promise
   */
  execute(): Promise<Object> {
    return new Promise((resolve, reject) => {
      try {
        this.params = JSON.stringify(this.params);
      } catch (err) {
        MultiRequestBuilder._logger.error(`${err.message}`);
        reject(
          new Error(Error.Severity.CRITICAL, Error.Category.PROVIDER, Error.Code.FAILED_PARSING_REQUEST, {
            error: err,
            params: this.params
          })
        );
      }
      this.doHttpRequest().then(
        data => {
          const multiRequestResult = new MultiRequestResult(data);
          if (multiRequestResult.success) {
            resolve({
              headers: this.responseHeaders,
              response: multiRequestResult
            });
          } else {
            reject(
              new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.MULTIREQUEST_API_ERROR, {
                url: this.url,
                headers: this.responseHeaders,
                results: multiRequestResult.results
              })
            );
          }
        },
        err => {
          reject(err);
        }
      );
    });
  }
}

export class MultiRequestResult {
  static _logger = getLogger('MultiRequestResult');
  /**
   * @memberof MultiRequestResult
   * @type {boolean}
   */
  success: boolean;
  /**
   * @memberof MultiRequestResult
   * @type {Object}
   */
  results: Array<ServiceResult> = [];
  /**
   * @constructor
   * @param {Object} response data
   */
  constructor(response: Object) {
    this.success = true;
    const responseArr = response.result ? response.result : response;
    responseArr.forEach(result => {
      const serviceResult: ServiceResult = new ServiceResult(result);
      this.results.push(serviceResult);
      if (serviceResult.hasError) {
        MultiRequestResult._logger.error(
          `Service returned an error with error code: ${serviceResult.error.code} and message: ${serviceResult.error.message}.`
        );
        this.success = false;
        return;
      }
    });
  }
}
