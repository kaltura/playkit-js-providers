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
    this._ks = value;
  }

  get uiConfId(): number {
    return this._uiConfId;
  }

  set uiConfId(value: number): void {
    this._uiConfId = value;
  }

  get env(): ProviderEnvConfig {
    return this._env;
  }

  set env(value: ProviderEnvConfig) {
    this._env = value;
  }

  constructor(partnerId: number) {
    this._partnerId = partnerId;
    this.ks = '';
  }

  toJSON(): ProviderOptionsObject {
    const response: ProviderOptionsObject = {
      partnerId: this.partnerId,
      ks: this.ks
    };
    if (this.uiConfId) response.uiConfId = this.uiConfId;
    if (this.env) response.env = this.env.toJSON();
    return response;
  }
}
