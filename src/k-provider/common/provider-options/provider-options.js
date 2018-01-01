// @flow
import ProviderEnvConfig from './provider-env-config'
import type {ProviderEnvConfigObject} from './provider-env-config'
import {LogLevel} from '../../../util/logger'

export type ProviderOptionsObject = {
  partnerId: number,
  logLevel: string,
  ks: string,
  uiConfId?: number,
  env?: ProviderEnvConfigObject
};

export default class ProviderOptions {
  _partnerId: number;
  _logLevel: string = 'ERROR';
  _ks: string = '';
  _uiConfId: number;
  _env: ProviderEnvConfig;

  get partnerId(): number {
    return this._partnerId;
  }

  get logLevel(): string {
    return this._logLevel;
  }

  set logLevel(value: string): void {
    if (typeof value === 'string' && LogLevel[value]) {
      this._logLevel = value;
    }
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

  get env(): ProviderEnvConfig {
    return this._env;
  }

  set env(value: ProviderEnvConfig) {
    if (value instanceof ProviderEnvConfig) {
      this._env = value;
    } else {
      this._env = new ProviderEnvConfig(value);
    }
  }

  constructor(partnerId: number | ProviderOptionsObject, uiConfId?: number) {
    validate(partnerId);
    if (typeof partnerId === 'number') {
      this._partnerId = partnerId;
      if (typeof uiConfId === 'number') {
        this._uiConfId = uiConfId;
      }
    } else if (typeof partnerId === 'object') {
      this.fromJSON(partnerId);
    }
  }

  fromJSON(json: ProviderOptionsObject): void {
    this._partnerId = json.partnerId;
    this.ks = json.ks || this._ks;
    this.logLevel = json.logLevel || this._logLevel;
    if (typeof json.uiConfId === 'number') {
      this._uiConfId = json.uiConfId;
    }
    if (json.env) {
      this.env = new ProviderEnvConfig(json.env.serviceUrl, json.env.cdnUrl);
    }
  }

  toJSON(): ProviderOptionsObject {
    const response: ProviderOptionsObject = {
      partnerId: this.partnerId,
      logLevel: this.logLevel,
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
  throw new TypeError('Invalid ProviderOptions: partnerId must be provided and be a number');
}
