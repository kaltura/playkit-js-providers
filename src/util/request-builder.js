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
          } catch (e) {
            return reject(`${e.message}, ${request.responseText}`);
          }
          if (jsonResponse && typeof jsonResponse === 'object' && jsonResponse.code && jsonResponse.message) {
            return reject(
              new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.ERROR_FROM_SERVER, {
                message: jsonResponse.message,
                code: jsonResponse.code,
                headers: this._getResponseHeaders(request)
              })
            );
          } else {
            return resolve(jsonResponse);
          }
        } else {
          return reject(
            new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.BAD_HTTP_STATUS, {
              text: request.responseText,
              headers: this._getResponseHeaders(request)
            })
          );
        }
      }
    };
    request.open(this.method, this.url);
    request.timeout = this.retryConfig.timeout || 0;

    request.ontimeout = error => {
      return reject(
        new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.TIMEOUT, {
          error,
          headers: this._getResponseHeaders(request)
        })
      );
    };
    request.onerror = error => {
      if (this.retryConfig.maxAttempts && this._attemptCounter < this.retryConfig.maxAttempts) {
        this.createXHR(resolve, reject);
      } else {
        return reject(
          new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.HTTP_ERROR, {
            error,
            attemp: this._attemptCounter,
            headers: this._getResponseHeaders(request)
          })
        );
      }
      this._attemptCounter++;
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
}
