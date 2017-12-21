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

  set cdnUrl(value: string) {
    this._cdnUrl = value;
  }

  constructor(serviceUrl: string, cdnUrl?: string) {
    this._serviceUrl = serviceUrl;
    if (cdnUrl) {
      this._cdnUrl = cdnUrl;
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
