//@flow
import Error from './error/error';

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
    return new Promise((resolve, reject) => {
      if (!this.url) {
        return reject(
          new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.MALFORMED_DATA_URI, {
            url: this.url
          })
        );
      }
      return this.createXHR(resolve, reject);
    });
  }

  createXHR(resolve: Function, reject: Function): void {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          let jsonResponse;
          try {
            jsonResponse = JSON.parse(request.responseText);
          } catch (error) {
            this._handleError(resolve, reject, request, Error.Code.HTTP_ERROR, {
              message: error.message,
              responseText: request.responseText
            });
          }
          if (jsonResponse && typeof jsonResponse === 'object' && jsonResponse.code && jsonResponse.message) {
            this._handleError(resolve, reject, request, Error.Code.HTTP_ERROR, {
              message: jsonResponse.message,
              code: jsonResponse.code
            });
          } else {
            return resolve(jsonResponse);
          }
        } else {
          this._handleError(resolve, reject, request, Error.Code.BAD_HTTP_STATUS, {
            text: request.responseText
          });
        }
      }
    };
    request.open(this.method, this.url);
    request.timeout = this.retryConfig.timeout || 0;
    request.ontimeout = error => {
      this._rejectError(resolve, reject, request, Error.Code.TIMEOUT, {
        error
      });
    };
    request.onerror = error => {
      this._handleError(resolve, reject, request, Error.Code.HTTP_ERROR, {
        error
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
      .filter(header => header.indexOf(KALTURA_HEADER_PREFIX) === 0);
  }

  _handleError(resolve: Function, reject: Function, request: XMLHttpRequest, code: number, uniqueData: Object): Promise<*> {
    const data = Object.assign({}, uniqueData, {
      headers: this._getResponseHeaders(request),
      attempt: this._attemptCounter
    });
    request = null;
    const error = new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, code, data);
    if (this.retryConfig.maxAttempts && this._attemptCounter < this.retryConfig.maxAttempts) {
      this._attemptCounter++;
      this.createXHR(resolve, reject);
    } else {
      return reject(error);
    }
  }
}
