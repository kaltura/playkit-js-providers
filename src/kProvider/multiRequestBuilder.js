//@flow

import RequestBuilder from './requestBuilder'
import ServiceResult from './baseServiceResult'
import loggerFactory from "playkit-js/src/util/loggerFactory";
/**
 * @constant
 */
const logger = loggerFactory.getLogger("OvpProvider");

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

    let serviceDef: Object = {service: request.service, action: request.action};
    this.params = Object.assign(this.params, {[this.requests.length]: Object.assign(serviceDef, request.params)});
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
      document.getElementById("demo").innerHTML = err.message;
      logger.error(`${err.message}`);
    }
    return new Promise((resolve, reject) => {
      this.doHttpRequest().then(data => {
          let multiResult: MultiRequestResult = new MultiRequestResult(data);
          data.forEach((result, index) => {
            let serviceResult: ServiceResult = new ServiceResult(result);
            if (serviceResult.hasError) {
              logger.error(`${this.requests[index].service}.${this.requests[index].action} returned an error with error code: ${serviceResult.error.code} and message: ${serviceResult.error.message}.`);
              multiResult.success = false;
              return false;
            }
          });
          resolve(multiResult);
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
class MultiRequestResult {

  /**
   * @member - Is success
   * @type {boolean}
   */
  success: boolean;
  /**
   * @member - Multi request response data
   * @type {Object}
   */
  data: Object;

  /**
   * @constructor
   * @param {Object} data
   */
  constructor(data: Object) {
    this.success = true;
    this.data = data;
  }
}
