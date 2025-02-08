import {getLogLevel, setLogLevel, setLogger, LogLevelType, LogLevel} from '../../util/logger';
import DataLoaderManager from './data-loader-manager';
import Error from '../../util/error/error';
import {
  ProviderEntryListObject,
  ProviderMediaConfigObject,
  ProviderPlaylistInfoObject,
  ProviderMediaConfigSourcesObject,
  ProviderNetworkRetryParameters,
  ProviderOptionsObject,
  ProviderPlaylistObject
} from '../../types';

export default class BaseProvider<MI> {
  private _partnerId: number;
  private _widgetId?: string;
  protected _ks: string;
  private _uiConfId?: number;
  public _dataLoader!: DataLoaderManager;
  private _playerVersion: string;
  public _logger: any;
  public _referrer?: string;
  protected _isAnonymous: boolean | undefined;

  public _networkRetryConfig: ProviderNetworkRetryParameters = {
    async: true,
    timeout: 0,
    maxAttempts: 4
  };

  public get partnerId(): number {
    return this._partnerId;
  }

  public get widgetId(): string {
    return this._widgetId || this.defaultWidgetId;
  }

  public get defaultWidgetId(): string {
    return '_' + this._partnerId;
  }

  public get uiConfId(): number | undefined {
    return this._uiConfId;
  }

  public get ks(): string {
    return this._ks;
  }

  public set ks(value: string) {
    this._ks = value;
  }

  public get playerVersion(): string {
    return this._playerVersion;
  }

  public get isAnonymous(): boolean | undefined {
    return this._isAnonymous;
  }

  constructor(options: ProviderOptionsObject, playerVersion: string) {
    setLogger(options.logger);
    this._partnerId = options.partnerId;
    this._widgetId = options.widgetId;
    this._uiConfId = options.uiConfId;
    this._isAnonymous = !options.ks;
    this._ks = options.ks || '';
    this._playerVersion = playerVersion;
    this._referrer = options.referrer;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getMediaConfig(mediaInfo: MI): Promise<ProviderMediaConfigObject> {
    return Promise.reject(
      new Error(Error.Severity.CRITICAL, Error.Category.PROVIDER, Error.Code.METHOD_NOT_IMPLEMENTED, {
        message: 'getMediaConfig method must be implement by the derived class'
      })
    );
  }

  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  public getPlaylistConfig(playlistInfo: ProviderPlaylistInfoObject): Promise<ProviderPlaylistObject> {
    return Promise.reject(
      new Error(Error.Severity.CRITICAL, Error.Category.PROVIDER, Error.Code.METHOD_NOT_IMPLEMENTED, {
        message: 'The provider does not support loading playlist by id'
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getEntryListConfig(entryListInfo: ProviderEntryListObject): Promise<ProviderPlaylistObject> {
    return Promise.reject(
      new Error(Error.Severity.CRITICAL, Error.Category.PROVIDER, Error.Code.METHOD_NOT_IMPLEMENTED, {
        message: 'The provider does not support loading entry list'
      })
    );
  }

  protected _verifyHasSources(sources: ProviderMediaConfigSourcesObject): void {
    if (sources.hls.concat(sources.dash, sources.progressive, sources.image, sources.document).length === 0) {
      throw new Error(Error.Severity.CRITICAL, Error.Category.SERVICE, Error.Code.MISSING_PLAY_SOURCE, {
        action: '',
        messages: `No play source for entry id: ${sources.id}`
      });
    }
  }

  public get LogLevel(): LogLevelType {
    return LogLevel;
  }

  public getLogLevel(name?: string): any {
    return getLogLevel(name);
  }

  public setLogLevel(level: any, name?: string): void {
    setLogLevel(level, name);
  }
}

export {BaseProvider};
