//@flow
import RequestBuilder from './requestBuilder'
import ServiceResult from './baseServiceResult'
import Logger from "../util/logger";
/**
 * @constant
 */
const logger = Logger.get("OvpProvider");

/**
 * Multi Request builder
 * @classdesc
 */
export default class MultiRequestBuilder extends RequestBuilder {

  /**
   * @member - Array of requests
   * @type {Array<RequestBuilder>}
   */
  requests: Array<RequestBuilder> = [];

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Adds request to requests array
   * @function add
   * @param {RequestBuilder} request
   * @returns {MultiRequestBuilder}
   */
  add(request: RequestBuilder): MultiRequestBuilder {
    this.requests.push(request);
    let requestParams = {};
    let serviceDef: Object = {service: request.service, action: request.action};
    Object.assign(requestParams, {[this.requests.length]: Object.assign(serviceDef, request.params)});
    Object.assign(requestParams, this.params);
    this.params = requestParams;
    return this;
  }

  /**
   * Executes a multi request
   * @function execute
   * @returns {Promise}
   */
  execute(): Promise<Object> {
    try {
      this.params = JSON.stringify(this.params);
    }
    catch (err) {
      logger.error(`${err.message}`);
    }
    return new Promise((resolve, reject) => {
      this.doHttpRequest().then(data => {
          resolve(new MultiRequestResult(data));
        },
        err => {
          let errorText: string = `Error on multiRequest execution, error <${err}>.`;
          reject(errorText);

        });
    });
  }

}

/**
 * Multi Request result object
 * @classdesc
 */
export class MultiRequestResult {

  /**
   * @member - Is success
   * @type {boolean}
   */
  success: boolean;
  /**
   * @member - Multi request response data
   * @type {Object}
   */
  results: Array<ServiceResult> = [];

  /**
   * @constructor
   * @param {Object}  response data
   */
  constructor(response: Object) {
    this.success = true;
    response.forEach((result) => {
      let serviceResult: ServiceResult = new ServiceResult(result);
      this.results.push(serviceResult);
      if (serviceResult.hasError) {
        logger.error(`Service returned an error with error code: ${serviceResult.error.code} and message: ${serviceResult.error.message}.`);
        this.success = this.success || serviceResult.hasError;
      }
    });
  }
}
