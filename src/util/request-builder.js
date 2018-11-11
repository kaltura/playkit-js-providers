//@flow

const KALTURA_HEADER_PREFIX: string = '-x';

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
   * @description network retry configuration
   * @memberof RequestBuilder
   * @type {ProviderNetworkRetryParameters}
   */
  retryConfig: ProviderNetworkRetryParameters;

  /**
   * @description number of xhr attempts for the same multi - request.
   * @memberof RequestBuilder
   * @type {number}
   * @private
   */
  _attemptCounter: number = 1;

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
   * @param {string} serviceUrl - The service base URL
   * @returns {string} The service URL
   */
  getUrl(serviceUrl: string): string {
    return serviceUrl + '/service/' + this.service + (this.action ? '/action/' + this.action : '');
  }

  /**
   * Executes service
   * @function doHttpRequest
   * @returns {Promise.<any>} Service response as promise
   */
  doHttpRequest(): Promise<any> {
    if (!this.url) {
      throw new Error('serviceUrl is mandatory for request builder');
    }
    return new Promise((resolve, reject) => {
      return this.createXHR(resolve, reject);
    });
  }

  createXHR(resolve: Promise<*>, reject: Promise<*>): Promise<*> {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          let jsonResponse;
          try {
            jsonResponse = JSON.parse(request.responseText);
          } catch (e) {
            return reject(`${e.message}, ${request.responseText}`);
          }
          if (jsonResponse && typeof jsonResponse === 'object' && jsonResponse.code && jsonResponse.message) {
            return reject(jsonResponse);
          } else {
            return resolve(jsonResponse);
          }
        } else {
          reject(request.responseText);
        }
      }
    };
    request.open(this.method, this.url);
    request.timeout = this.retryConfig.timeout;

    request.ontimeout = error => {
      return this._makeReject(reject, error, request);
    };
    request.onerror = error => {
      if (this._attemptCounter < this.retryConfig.maxAttempts) {
        this.createXHR(resolve, reject);
      } else {
        return this._makeReject(reject, error, request);
      }
      this._attemptCounter++;
    };
    this.headers.forEach((value, key) => {
      request.setRequestHeader(key, value);
    });
    request.send(this.params);
  }

  _getResponseHeaders(request: XMLHttpRequest): void {
    return request
      .getAllResponseHeaders()
      .split('\n')
      .filter(header => header.indexOf(KALTURA_HEADER_PREFIX) === 0);
  }

  _makeReject(reject: Promise<*>, error: Object, request: XMLHttpRequest): Promise<*> {
    const data = {
      error,
      headers: this._getResponseHeaders(request)
    };
    return reject(data);
  }
}
