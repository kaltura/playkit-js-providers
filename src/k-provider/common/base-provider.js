// @flow
import {setLogLevel, getLogLevel, LogLevel} from '../../util/logger';
import DataLoaderManager from './data-loader-manager';

export default class BaseProvider<MI> {
  _partnerId: number;
  _ks: string;
  _uiConfId: ?number;
  _dataLoader: DataLoaderManager;
  _playerVersion: string;
  _logger: any;
  _isAnonymous: boolean;
  _networkRetryConfig: ProviderNetworkRetryParameters = {
    timeout: 0,
    maxAttempts: 4
  };

  get partnerId(): number {
    return this._partnerId;
  }

  get uiConfId(): ?number {
    return this._uiConfId;
  }

  get ks(): string {
    return this._ks;
  }

  set ks(value: string): void {
    this._ks = value;
  }

  get playerVersion(): string {
    return this._playerVersion;
  }

  get isAnonymous(): boolean {
    return this._isAnonymous;
  }

  constructor(options: ProviderOptionsObject, playerVersion: string) {
    this._partnerId = options.partnerId;
    this._uiConfId = options.uiConfId;
    this._isAnonymous = !options.ks;
    this._ks = options.ks || '';
    this._playerVersion = playerVersion;
    if (options.logLevel && this.LogLevel[options.logLevel]) {
      setLogLevel(this.LogLevel[options.logLevel]);
    }
  }

  // eslint-disable-next-line no-unused-vars
  getMediaConfig(mediaInfo: MI): Promise<ProviderMediaConfigObject> {
    throw new TypeError(`getMediaConfig method must be implement by the derived class`);
  }

  // eslint-disable-next-line no-unused-vars
  _parseDataFromResponse(data: Map<string, Function>, ...params: any): ProviderMediaConfigObject {
    throw new TypeError(`_parseDataFromResponse method must be implement by the derived class`);
  }

  get LogLevel(): {[level: string]: Object} {
    return LogLevel;
  }

  getLogLevel(name?: string): Object {
    return getLogLevel(name);
  }

  setLogLevel(level: Object, name?: string): void {
    setLogLevel(level, name);
  }
}
