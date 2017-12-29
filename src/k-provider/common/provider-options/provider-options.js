// @flow
import ProviderEnvConfig from './provider-env-config'
import type {ProviderEnvConfigObject} from './provider-env-config'

export type ProviderOptionsObject = {
  partnerId: number,
  ks: string,
  uiConfId?: number,
  env?: ProviderEnvConfigObject
};

export default class ProviderOptions {
  _partnerId: number;
  _ks: string;
  _uiConfId: number;
  _env: ProviderEnvConfig;

  get partnerId(): number {
    return this._partnerId;
  }

  get ks(): string {
    return this._ks;
  }

  set ks(value: string): void {
    if (typeof value !== 'string') return;
    this._ks = value;
  }

  get uiConfId(): number {
    return this._uiConfId;
  }

  set uiConfId(value: number): void {
    if (typeof value !== 'number') return;
    this._uiConfId = value;
  }

  get env(): ProviderEnvConfig | ProviderEnvConfigObject {
    return this._env;
  }

  set env(value: ProviderEnvConfig | ProviderEnvConfigObject) {
    if (value instanceof ProviderEnvConfig) {
      this._env = value;
    } else {
      this._env = new ProviderEnvConfig(value);
    }
  }

  constructor(partnerId: number | ProviderOptionsObject) {
    validate(partnerId);
    if (typeof partnerId === 'number') {
      this._partnerId = partnerId;
      this.ks = '';
    } else if (typeof partnerId === 'object') {
      this.fromJSON(partnerId);
    }
  }

  fromJSON(json: ProviderOptionsObject): ProviderOptions {
    this._partnerId = json.partnerId;
    if (json.ks) {
      this.ks = json.ks;
    }
    if (json.uiConfId) {
      this.uiConfId = json.uiConfId;
    }
    if (json.env) {
      this.env = new ProviderEnvConfig(json.env.serviceUrl, json.env.cdnUrl);
    }
  }

  toJSON(): ProviderOptionsObject {
    const response: ProviderOptionsObject = {
      partnerId: this._partnerId,
      ks: this.ks
    };
    if (this.uiConfId) response.uiConfId = this.uiConfId;
    if (this.env) response.env = this.env.toJSON();
    return response;
  }
}

/**
 * Validate user input
 * @param {number | ProviderOptionsObject} param - user input
 * @returns {void}
 */
function validate(param: number | ProviderOptionsObject): void {
  if (typeof param === 'number') return;
  if (typeof param === 'object' && typeof param.partnerId === 'number') return;
  throw new TypeError('Partner id must be provide and be type of number');
}
