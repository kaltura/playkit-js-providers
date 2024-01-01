import Error from './error/error';
import { ProviderNetworkRetryParameters } from '../types';

const KALTURA_HEADER_PREFIX: string = 'x-';

export default class RequestBuilder {
  /**
   * @member - Service name
   * @type {string}
   */
  public service!: string;
  /**
   * @member - Service action
   * @type {string}
   */
  public action!: string;
  /**
   * @member - Service params
   * @type {any}
   */
  public params: any;
  /**
   * @memberof - Service headers
   * @type {Map<string, string>}
   */
  public headers: Map<string, string>;
  /**
   * @memberof - Service URL
   * @type {string}
   */
  public url!: string;
  /**
   * @memberof - Service method (POST,GET,DELETE etc..)
   * @type {string}
   */
  public method!: string;
  /**
   * @memberof - Service tag
   * @type {string}
   */
  public tag!: string;
  /**
   * @memberof - the response headers of the arra
   * @type {Array<string>}
   */
  public responseHeaders!: Array<string>;
  /**
   * @description network retry configuration
   * @memberof RequestBuilder
   * @type {ProviderNetworkRetryParameters}
   */
  public retryConfig: ProviderNetworkRetryParameters = {
    async: true,
    timeout: 0,
    maxAttempts: 4
  };

  /**
   * @description number of xhr attempts for the same multi - request.
   * @memberof RequestBuilder
   * @type {number}
   * @private
   */
  private _attemptCounter: number = 1;

  /**
   * @description hold the promise result of the XHR request(s) - if all tries fails, it rejects with the error.
   * @memberof RequestBuilder
   * @type {Object}
   * @private
   */
  private _requestPromise: any;

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
  public getUrl(serviceUrl: string): string {
    return serviceUrl + '/service/' + this.service + (this.action ? '/action/' + this.action : '');
  }

  /**
   * Executes service
   * @function doHttpRequest
   * @returns {Promise.<any>} Service response as promise
   */
  public doHttpRequest(): Promise<any> {
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

  private _createXHR(): void {
    const request = new XMLHttpRequest();
    request.onreadystatechange = (): void => {
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
    request.open(this.method, this.url, this.retryConfig.async);
    if (this.retryConfig.async && this.retryConfig.timeout) {
      request.timeout = this.retryConfig.timeout;
    }
    const requestTime = performance.now();
    request.ontimeout = (): void => {
      this._handleError(request, Error.Code.TIMEOUT, {
        timeout: (performance.now() - requestTime) / 1000,
        statusText: request.statusText
      });
    };
    request.onerror = request.onabort = (): void => {
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

  private _getResponseHeaders(request: XMLHttpRequest): Array<string> {
    return request
      .getAllResponseHeaders()
      .split('\n')
      .filter((header) => header.toLowerCase().indexOf(KALTURA_HEADER_PREFIX) === 0);
  }

  private _handleError(request: XMLHttpRequest, code: number, data: any): Promise<void> | void {
    const error = this._createError(request, code, data);
    request.onreadystatechange = function (): void {};
    request.onerror = function (): void {};
    request.ontimeout = function (): void {};
    request.onabort = function (): void {};
    if (this.retryConfig.maxAttempts && this._attemptCounter < this.retryConfig.maxAttempts) {
      this._attemptCounter++;
      this._createXHR();
    } else {
      return this._requestPromise.reject(error);
    }
  }

  private _createError(request: XMLHttpRequest, code: number, data: any): Error {
    Object.assign(data, {
      url: this.url,
      headers: this._getResponseHeaders(request),
      attempt: this._attemptCounter
    });
    return new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, code, data);
  }
}
