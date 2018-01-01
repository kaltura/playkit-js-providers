// @flow
export type ProviderEnvConfigObject = {
  serviceUrl: string,
  cdnUrl?: string
};

export default class ProviderEnvConfig {
  _serviceUrl: string;
  _cdnUrl: string;

  get serviceUrl(): string {
    return this._serviceUrl;
  }

  get cdnUrl(): string {
    return this._cdnUrl;
  }

  set cdnUrl(value: string): void {
    if (typeof value !== 'string') return;
    this._cdnUrl = value;
  }

  constructor(serviceUrl: string | ProviderEnvConfigObject, cdnUrl?: string) {
    validate(serviceUrl);
    if (typeof serviceUrl === 'string') {
      this._serviceUrl = serviceUrl;
      if (cdnUrl) {
        this.cdnUrl = cdnUrl;
      }
    } else if (typeof serviceUrl === 'object') {
      this.fromJSON(serviceUrl);
    }
  }

  fromJSON(json: ProviderEnvConfigObject): void {
    this._serviceUrl = json.serviceUrl;
    if (json.cdnUrl) {
      this.cdnUrl = json.cdnUrl;
    }
  }

  toJSON(): ProviderEnvConfigObject {
    const response: ProviderEnvConfigObject = {
      serviceUrl: this.serviceUrl
    };
    if (this.cdnUrl) response.cdnUrl = this.cdnUrl;
    return response;
  }
}

/**
 * Validate user input
 * @param {string | ProviderEnvConfigObject} param - user input
 * @returns {void}
 */
function validate(param: string | ProviderEnvConfigObject): void {
  if (typeof param === 'string') return;
  if (typeof param === 'object' && typeof param.serviceUrl === 'string') return;
  throw new TypeError('Invalid ProviderEnnConfig: serviceUrl must be provided and be a string');
}
