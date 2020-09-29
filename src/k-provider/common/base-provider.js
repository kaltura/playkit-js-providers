// @flow
import {setLogLevel, getLogLevel, setLogger} from '../../util/logger';
import DataLoaderManager from './data-loader-manager';
import Error from '../../util/error/error';

export default class BaseProvider<MI> {
  _partnerId: number;
  _widgetId: ?string;
  _ks: string;
  _uiConfId: ?number;
  _dataLoader: DataLoaderManager;
  _playerVersion: string;
  _logger: any;
  _isAnonymous: boolean;
  _networkRetryConfig: ProviderNetworkRetryParameters = {
    async: true,
    timeout: 0,
    maxAttempts: 4
  };

  get partnerId(): number {
    return this._partnerId;
  }

  get widgetId(): string {
    return this._widgetId || this.defaultWidgetId;
  }

  get defaultWidgetId(): string {
    return '_' + this._partnerId;
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

  constructor(options: ProviderOptionsObject, playerVersion: string, logger?: function) {
    setLogger(logger);
    this._partnerId = options.partnerId;
    this._widgetId = options.widgetId;
    this._uiConfId = options.uiConfId;
    this._isAnonymous = !options.ks;
    this._ks = options.ks || '';
    this._playerVersion = playerVersion;
  }

  // eslint-disable-next-line no-unused-vars
  getMediaConfig(mediaInfo: MI): Promise<ProviderMediaConfigObject> {
    return Promise.reject(
      new Error(Error.Severity.CRITICAL, Error.Category.PROVIDER, Error.Code.METHOD_NOT_IMPLEMENTED, {
        message: 'getMediaConfig method must be implement by the derived class'
      })
    );
  }

  // eslint-disable-next-line no-unused-vars
  getPlaylistConfig(playlistInfo: ProviderPlaylistInfoObject): Promise<ProviderPlaylistObject> {
    return Promise.reject(
      new Error(Error.Severity.CRITICAL, Error.Category.PROVIDER, Error.Code.METHOD_NOT_IMPLEMENTED, {
        message: 'The provider does not support loading playlist by id'
      })
    );
  }

  // eslint-disable-next-line no-unused-vars
  getEntryListConfig(entryListInfo: ProviderEntryListObject): Promise<ProviderPlaylistObject> {
    return Promise.reject(
      new Error(Error.Severity.CRITICAL, Error.Category.PROVIDER, Error.Code.METHOD_NOT_IMPLEMENTED, {
        message: 'The provider does not support loading entry list'
      })
    );
  }

  _verifyHasSources(sources: ProviderMediaConfigSourcesObject) {
    if (sources.hls.concat(sources.dash, sources.progressive).length === 0) {
      throw new Error(Error.Severity.CRITICAL, Error.Category.SERVICE, Error.Code.MISSING_PLAY_SOURCE, {
        action: '',
        messages: `No play source for entry id: ${sources.id}`
      });
    }
  }

  getLogLevel(name?: string): Object {
    return getLogLevel(name);
  }

  setLogLevel(level: Object, name?: string): void {
    setLogLevel(level, name);
  }
}
