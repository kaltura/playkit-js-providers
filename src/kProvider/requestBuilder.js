//@flow
import HttpRequestExecutor from 'playkit-js/src/util/httpRequestExecutor'

/**
 * Request builder
 * @classdesc
 */
export default class RequestBuilder {

  /**
   * @member - Service name
   * @type {string}
   */
  service: string;
  /**
   * @member - Service action
   * @type {string}
   */
  action: string;
  /**
   * @member - Service params
   * @type {any}
   */
  params: any;
  /**
   * @member - Service headers
   * @type {Map<string, string>}
   */
  headers: Map<string, string>;
  /**
   * @member - Service base url
   * @type {Map<string, string>}
   */
  baseUrl: string;
  /**
   * @member - Service method (POST,GET,DELETE etc..)
   * @type {string}
   */
  method: string;
  /**
   * @member - Service tag
   * @type {string}
   */
  tag: string;

  /**
   * @constructor
   */
  constructor(headers: Map<string, string> = new Map()) {
    //this.params = {};
    this.headers = headers;
    this.headers.set("Content-Type", "application/json");
  }

  /**
   * Builds restful service URL
   * @function getUrl
   * @returns {string}
   */
  getUrl(): string {
    if (!this.baseUrl) {
      throw new Error("baseUrl is mandatory for request builder");
    }
    let url = this.baseUrl + '/service/' + this.service + (this.action ? +'/action/' + this.action : '');
    return url;
  }

  /**
   * Executes service
   * @function doHttpRequest
   * @returns {Promise.<any>}
   */
  doHttpRequest(): Promise<any> {
    return HttpRequestExecutor.execute(this.getUrl(), this.params, "POST", this.headers);
  }
}
