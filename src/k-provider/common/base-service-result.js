//@flow
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
   * @member - The service result data
   * @type {Object}
   */
  data: Object;

  /**
   * @constructor
   * @param {Object} response - Service response
   */
  constructor(response: Object) {
    if (response.objectType === 'KalturaAPIException') {
      this.hasError = true;
      this.error = new ServiceError(response.code, response.message);
    } else if (response.error && response.error.objectType === 'KalturaAPIException') {
      this.hasError = true;
      this.error = new ServiceError(response.error.code, response.error.message);
    } else {
      this.data = response;
    }
  }
}

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
   * @param {string} code - The result code
   * @param {string} message - The result message
   */
  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}
