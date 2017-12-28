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

  set serviceUrl(value: string): void {
    if (typeof value !== 'string') return;
    this._serviceUrl = value;
  }

  get cdnUrl(): string {
    return this._cdnUrl;
  }

  set cdnUrl(value: string): void {
    if (typeof value !== 'string') return;
    this._cdnUrl = value;
  }

  constructor(serviceUrl?: string, cdnUrl?: string) {
    if (serviceUrl) {
      this.serviceUrl = serviceUrl;
    }
    if (cdnUrl) {
      this.cdnUrl = cdnUrl;
    }
  }

  fromJSON(json: ProviderEnvConfigObject): void {
    this.serviceUrl = json.serviceUrl || this.serviceUrl;
    this.cdnUrl = json.cdnUrl || this.cdnUrl;
  }

  toJSON(): ProviderEnvConfigObject {
    const response: ProviderEnvConfigObject = {
      serviceUrl: this.serviceUrl
    };
    if (this.cdnUrl) response.cdnUrl = this.cdnUrl;
    return response;
  }
}
