//@flow

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
    let request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            let jsonResponse = JSON.parse(request.responseText);
            if (jsonResponse && typeof(jsonResponse) === 'object' && jsonResponse.code && jsonResponse.message)
              reject(jsonResponse);
            else
              resolve(jsonResponse);
          } else {
            reject(request.responseText);
          }
        }
      };
      request.open(this.method, this.getUrl());
      this.headers.forEach((value, key) => {
        request.setRequestHeader(key, value);
      });
      request.send(this.params);
    });
  }
}
