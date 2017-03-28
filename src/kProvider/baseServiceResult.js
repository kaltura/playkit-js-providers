//@flow

/**
 * Base service result
 * @classdesc
 */
export default class ServiceResult {

  /**
   * @member - Is service returned an error
   * @type {boolean}
   */
  hasError: boolean = false;
  /**
   * @member - The service error
   * @type {ServiceError}
   */
  error: ServiceError;

  /**
   * @constructor
   * @param response - Service response
   */
  constructor(response: Object) {
    if (response.objectType === "KalturaAPIException") {
      this.hasError = true;
      this.error = new ServiceError(response.code, response.message);
    }
  }
}

/**
 * Service error
 * @classdesc
 */
class ServiceError {
  /**
   * @member - The error code
   * @type {string}
   */
  code: string;
  /**
   * @member - The error message
   * @type {string}
   */
  message: string;

  /**
   * @constructor
   * @param {string} code
   * @param {string} message
   */
  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}
