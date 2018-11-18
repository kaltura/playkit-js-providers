//@flow
import Error from './error/error';

const KALTURA_HEADER_PREFIX: string = 'x-';

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
   * @memberof - Service headers
   * @type {Map<string, string>}
   */
  headers: Map<string, string>;
  /**
   * @memberof - Service URL
   * @type {string}
   */
  url: string;
  /**
   * @memberof - Service method (POST,GET,DELETE etc..)
   * @type {string}
   */
  method: string;
  /**
   * @memberof - Service tag
   * @type {string}
   */
  tag: string;
  /**
   * @memberof - the response headers of the arra
   * @type {Array<string>}
   */
  responseHeaders: Array<string>;
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
   * @description hold the promise result of the XHR request(s) - if all tries fails, it rejects with the error.
   * @memberof RequestBuilder
   * @type {Object}
   * @private
   */
  _requestPromise: Object;

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
    const promise = new Promise((resolve, reject) => {
      this._requestPromise = {
        resolve,
        reject
      };
    });
    if (!this.url) {
      this._requestPromise.reject(
        new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.MALFORMED_DATA_URI, {
          url: this.url
        })
      );
    }
    this._createXHR();
    return promise;
  }

  _createXHR(): void {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          try {
            const response = JSON.parse(request.responseText);
            this.responseHeaders = this._getResponseHeaders(request);
            // the promise returns the response for backwards compatibility
            return this._requestPromise.resolve(response);
          } catch (error) {
            this._requestPromise.reject(
              this._createError(request, Error.Code.BAD_SERVER_RESPONSE, {
                text: request.responseText
              })
            );
          }
        }
      }
    };
    request.open(this.method, this.url);
    request.timeout = this.retryConfig.timeout || 0;
    const requestTime = performance.now();
    request.ontimeout = () => {
      this._handleError(request, Error.Code.TIMEOUT, {
        timeout: (performance.now() - requestTime) / 1000,
        statusText: request.statusText
      });
    };
    request.onerror = request.onabort = () => {
      this._handleError(request, Error.Code.HTTP_ERROR, {
        text: request.responseText,
        statusText: request.statusText
      });
    };
    this.headers.forEach((value, key) => {
      request.setRequestHeader(key, value);
    });
    request.send(this.params);
  }

  _getResponseHeaders(request: XMLHttpRequest): Array<string> {
    return request
      .getAllResponseHeaders()
      .split('\n')
      .filter(header => header.toLowerCase().indexOf(KALTURA_HEADER_PREFIX) === 0);
  }

  _handleError(request: XMLHttpRequest, code: number, data: Object): Promise<*> | void {
    const error = this._createError(request, code, data);
    request.onreadystatechange = function() {};
    request.onerror = function() {};
    request.ontimeout = function() {};
    request.onabort = function() {};
    if (this.retryConfig.maxAttempts && this._attemptCounter < this.retryConfig.maxAttempts) {
      this._attemptCounter++;
      this._createXHR();
    } else {
      return this._requestPromise.reject(error);
    }
  }

  _createError(request: XMLHttpRequest, code: number, data: Object): Error {
    Object.assign(data, {
      url: this.url,
      headers: this._getResponseHeaders(request),
      attempt: this._attemptCounter
    });
    return new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, code, data);
  }
}
