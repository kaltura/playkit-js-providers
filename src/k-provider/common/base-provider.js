// @flow
import {setLogLevel, getLogLevel, LogLevel} from '../../util/logger'
import DataLoaderManager from './data-loader-manager'
import ProviderOptions from './provider-options'
import ProviderMediaInfo from './provider-media-info'
import ProviderMediaConfig from './provider-media-config'

export default class BaseProvider {
  _partnerId: number;
  _ks: string;
  _uiConfId: ?number;
  _dataLoader: DataLoaderManager;
  _playerVersion: string;
  _logger: any;
  _isAnonymous: boolean;

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
    this._isAnonymous = !this._ks;
  }

  get playerVersion(): string {
    return this._playerVersion;
  }

  get isAnonymous(): boolean {
    return this._isAnonymous;
  }

  constructor(options: ProviderOptions, playerVersion: string, logLevel?: string) {
    this._partnerId = options.partnerId;
    this._uiConfId = options.uiConfId;
    this.ks = options.ks;
    this._playerVersion = playerVersion;
    if (logLevel && this.LogLevel[logLevel]) {
      setLogLevel(this.LogLevel[logLevel]);
    }
  }

  getMediaConfig(mediaInfo: ProviderMediaInfo): Promise<ProviderMediaConfig> { // eslint-disable-line no-unused-vars
    return Promise.resolve(new ProviderMediaConfig(1));
  }

  _parseDataFromResponse(data: Map<string, Function>): ProviderMediaConfig { // eslint-disable-line no-unused-vars
    return new ProviderMediaConfig(1);
  }

  get LogLevel(): { [level: string]: Object } {
    return LogLevel;
  }

  getLogLevel(name?: string): Object {
    return getLogLevel(name);
  }

  setLogLevel(level: Object, name?: string): void {
    setLogLevel(level, name);
  }
}
