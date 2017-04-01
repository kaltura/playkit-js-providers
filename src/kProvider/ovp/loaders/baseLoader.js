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
   * @param {string} name loader name.
   * @param {Array<RequestBuilder>} requests loader requests
   */
  constructor(name: string, requests: Array<RequestBuilder>) {
    this._requests = requests;
    this.name = name;
  }

  /**
   * Gets all loader requests
   * @function getRequests
   * @returns {Array<RequestBuilder>}
   */
  getRequests(): Array<RequestBuilder> {
    return this._requests;
  }

  /**
   * Factory method to create loader
   * @function
   * @param {string} name loader name
   * @param {Object} params loader params
   * @returns {BaseLoader}
   */
  static createLoader(name: string, params: Object): BaseLoader {
    return new this(name, params);
  }

  /**
   * Builds loader requests
   * @function
   * @abstract
   * @returns {RequestBuilder}
   */
  static buildRequests(): RequestBuilder {
    throw "Not implimented";
  }

  /**
   * Set loader data from response
   * @function
   * @abstract
   */
  setData(): void {
    throw "Not implimented";
  }

  /**
   * Loader validation method
   * @function
   * @abstract
   */
  isValid(): boolean {
    throw "Not implimented";
  }
}
