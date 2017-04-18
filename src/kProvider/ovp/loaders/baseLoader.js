//@flow
import RequestBuilder from '../../requestBuilder'

/**
 * Base data loader
 * @classdesc
 */
export default class BaseLoader {
  /**
   * @member - Loader requests
   * @type {Array<RequestBuilder>}
   * @private
   */
  _requests: Array<RequestBuilder> = [];
  /**
   * @member - Loader name
   */
  name: string;

  /**
   * @constructor
   * @param {Array<RequestBuilder>} requests loader requests
   */
  constructor() {
  }

  /**
   * Gets all loader requests
   * @function getRequests
   * @returns {Array<RequestBuilder>}
   */
  getRequests(): Array<RequestBuilder> {
    return this._requests;
  }

  setRequests(requests: Array<RequestBuilder>): void {
    this._requests = requests;
  }

  /**
   * Factory method to create loader
   * @function
   * @param {string} name loader name
   * @param {Object} params loader params
   * @returns {BaseLoader}
   */
  static createLoader(params: Object): BaseLoader {
    return new this(params);
  }

  /**
   * Builds loader requests
   * @function
   * @abstract
   * @returns {RequestBuilder}
   */
  buildRequests(abstractParams: Object): Array<RequestBuilder> {
    throw new Error("Not implimented");
  }

  /**
   * Set loader data from response
   * @function
   * @abstract
   */
  setData(abstractResults: Object): void {
    throw new Error("Not implimented");
  }

  /**
   * Loader validation method
   * @function
   * @abstract
   */
  isValid(): boolean {
    throw new Error("Not implimented");
  }
}
