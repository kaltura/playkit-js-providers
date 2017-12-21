//@flow
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
   * @member - Service URL
   * @type {string}
   */
  url: string;
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
   * @param {Map<string, string>} headers The request headers
   */
  constructor(headers: Map<string, string> = new Map()) {
    this.headers = headers;
  }

  /**
   * Builds restful service URL
   * @function getUrl
   * @param {string} baseUrl - The service base URL
   * @returns {string} The service URL
   */
  getUrl(baseUrl: string): string {
    return baseUrl + '/service/' + this.service + (this.action ? '/action/' + this.action : '');
  }

  /**
   * Executes service
   * @function doHttpRequest
   * @returns {Promise.<any>} Service response as promise
   */
  doHttpRequest(): Promise<any> {
    if (!this.url) {
      throw new Error("baseUrl is mandatory for request builder");
    }
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
      request.open(this.method, this.url);
      this.headers.forEach((value, key) => {
        request.setRequestHeader(key, value);
      });
      request.send(this.params);
    });
  }
}
