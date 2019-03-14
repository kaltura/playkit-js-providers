//@flow
import getLogger from '../../util/logger';
import OVPConfiguration from './config';
import OVPProviderParser from './provider-parser';
import OVPMediaEntryLoader from './loaders/media-entry-loader';
import OVPSessionLoader from './loaders/session-loader';
import OVPDataLoaderManager from './loaders/data-loader-manager';
import OVPPlaylistLoader from './loaders/playlist-loader';
import BaseProvider from '../common/base-provider';
import MediaEntry from '../../entities/media-entry';
import OVPEntryListLoader from './loaders/entry-list-loader';
import Error from '../../util/error/error';

export default class OVPProvider extends BaseProvider<OVPProviderMediaInfoObject> {
  _filterOptionsConfig: ProviderFilterOptionsObject = {redirectFromEntryId: true};
  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  constructor(options: ProviderOptionsObject, playerVersion: string) {
    super(options, playerVersion);
    this._logger = getLogger('OVPProvider');
    OVPConfiguration.set(options.env);
    this._setFilterOptionsConfig(options.filterOptions);
    this._networkRetryConfig = Object.assign(this._networkRetryConfig, options.networkRetryParameters);
  }

  /**
   * Gets the backend media config.
   * @param {OVPProviderMediaInfoObject} mediaInfo - ovp media info
   * @returns {Promise<ProviderMediaConfigObject>} - The provider media config
   */
  getMediaConfig(mediaInfo: OVPProviderMediaInfoObject): Promise<ProviderMediaConfigObject> {
    if (mediaInfo.ks) {
      this.ks = mediaInfo.ks;
      this._isAnonymous = false;
    }
    this._dataLoader = new OVPDataLoaderManager(this.playerVersion, this.partnerId, this.ks, this._networkRetryConfig);
    return new Promise((resolve, reject) => {
      const entryId = mediaInfo.entryId;
      if (entryId) {
        let ks: string = this.ks;
        if (!ks) {
          ks = '{1:result:ks}';
          this._dataLoader.add(OVPSessionLoader, {widgetId: this.widgetId});
        }
        const redirectFromEntryId = this._getEntryRedirectFilter(mediaInfo);
        this._dataLoader.add(OVPMediaEntryLoader, {entryId, ks, redirectFromEntryId});
        return this._dataLoader.fetchData().then(
          response => {
            try {
              resolve(this._parseDataFromResponse(response));
            } catch (err) {
              reject(err);
            }
          },
          err => {
            reject(err);
          }
        );
      } else {
        reject(new Error(Error.Severity.CRITICAL, Error.Category.PROVIDER, Error.Code.MISSING_MANDATORY_PARAMS, {message: 'missing entry id'}));
      }
    });
  }

  _getEntryRedirectFilter(mediaInfo: Object): boolean {
    return typeof mediaInfo.redirectFromEntryId === 'boolean'
      ? mediaInfo.redirectFromEntryId
      : typeof this._filterOptionsConfig.redirectFromEntryId === 'boolean'
        ? this._filterOptionsConfig.redirectFromEntryId
        : true;
  }

  _setFilterOptionsConfig(options?: ProviderFilterOptionsObject): void {
    if (options && typeof options.redirectFromEntryId == 'boolean') {
      this._filterOptionsConfig.redirectFromEntryId = options.redirectFromEntryId;
    }
  }

  _parseDataFromResponse(data: Map<string, Function>): ProviderMediaConfigObject {
    this._logger.debug('Data parsing started');
    const mediaConfig: ProviderMediaConfigObject = {
      session: {
        isAnonymous: this._isAnonymous,
        partnerId: this.partnerId
      },
      sources: this._getDefaultSourcesObject(),
      plugins: {}
    };

    if (this.uiConfId) {
      mediaConfig.session.uiConfId = this.uiConfId;
    }
    if (data) {
      if (data.has(OVPSessionLoader.id)) {
        const sessionLoader = data.get(OVPSessionLoader.id);
        if (sessionLoader && sessionLoader.response) {
          mediaConfig.session.ks = sessionLoader.response;
        }
      } else {
        mediaConfig.session.ks = this.ks;
      }
      if (data.has(OVPMediaEntryLoader.id)) {
        const mediaLoader = data.get(OVPMediaEntryLoader.id);
        if (mediaLoader && mediaLoader.response) {
          const response = (mediaLoader: OVPMediaEntryLoader).response;
          if (OVPProviderParser.hasBlockAction(response)) {
            throw new Error(Error.Severity.CRITICAL, Error.Category.SERVICE, Error.Code.BLOCK_ACTION, {
              action: OVPProviderParser.getBlockAction(response),
              messages: OVPProviderParser.getErrorMessages(response)
            });
          }
          const mediaEntry = OVPProviderParser.getMediaEntry(this.isAnonymous ? '' : this.ks, this.partnerId, this.uiConfId, response);
          Object.assign(mediaConfig.sources, this._getSourcesObject(mediaEntry));
          this._verifyHasSources(mediaConfig.sources);
        }
      }
    }
    this._logger.debug('Data parsing finished', mediaConfig);
    return mediaConfig;
  }

  /**
   * Gets the backend playlist config.
   * @param {ProviderPlaylistInfoObject} playlistInfo - ovp playlist info
   * @returns {Promise<ProviderPlaylistObject>} - The provider playlist config
   */
  getPlaylistConfig(playlistInfo: ProviderPlaylistInfoObject): Promise<ProviderPlaylistObject> {
    if (playlistInfo.ks) {
      this.ks = playlistInfo.ks;
      this._isAnonymous = false;
    }
    this._dataLoader = new OVPDataLoaderManager(this.playerVersion, this.partnerId, this.ks, this._networkRetryConfig);
    return new Promise((resolve, reject) => {
      const playlistId = playlistInfo.playlistId;
      if (playlistId) {
        let ks: string = this.ks;
        if (!ks) {
          ks = '{1:result:ks}';
          this._dataLoader.add(OVPSessionLoader, {widgetId: this.widgetId});
        }
        this._dataLoader.add(OVPPlaylistLoader, {playlistId, ks});
        this._dataLoader.fetchData().then(
          response => {
            resolve(this._parsePlaylistDataFromResponse(response));
          },
          err => {
            reject(err);
          }
        );
      } else {
        reject({success: false, data: 'Missing mandatory parameter'});
      }
    });
  }

  _parsePlaylistDataFromResponse(data: Map<string, Function>): ProviderPlaylistObject {
    this._logger.debug('Data parsing started');
    const playlistConfig: ProviderPlaylistObject = this._getPlaylistObject();
    if (data && data.has(OVPPlaylistLoader.id)) {
      const playlistLoader = data.get(OVPPlaylistLoader.id);
      if (playlistLoader && playlistLoader.response) {
        const playlist = OVPProviderParser.getPlaylist(playlistLoader.response);
        playlistConfig.id = playlist.id;
        playlistConfig.poster = playlist.poster;
        playlistConfig.metadata.name = playlist.name;
        playlistConfig.metadata.description = playlist.description;
        playlist.items.forEach(i => playlistConfig.items.push({sources: this._getSourcesObject(i)}));
      }
    }
    this._logger.debug('Data parsing finished', playlistConfig);
    return playlistConfig;
  }

  /**
   * Gets playlist config from entry list.
   * @param {ProviderEntryListObject} entryListInfo - ovp entry list info
   * @returns {Promise<ProviderPlaylistObject>} - The provider playlist config
   */
  getEntryListConfig(entryListInfo: ProviderEntryListObject): Promise<ProviderPlaylistObject> {
    if (entryListInfo.ks) {
      this.ks = entryListInfo.ks;
      this._isAnonymous = false;
    }
    this._dataLoader = new OVPDataLoaderManager(this.playerVersion, this.partnerId, this.ks, this._networkRetryConfig);
    return new Promise((resolve, reject) => {
      const entries = entryListInfo.entries;
      if (entries && entries.length) {
        let ks: string = this.ks;
        if (!ks) {
          ks = '{1:result:ks}';
          this._dataLoader.add(OVPSessionLoader, {widgetId: this.widgetId});
        }
        const redirectFromEntryId = this._getEntryRedirectFilter(entryListInfo);
        this._dataLoader.add(OVPEntryListLoader, {entries, ks, redirectFromEntryId});
        this._dataLoader.fetchData().then(
          response => {
            resolve(this._parseEntryListDataFromResponse(response));
          },
          err => {
            reject(err);
          }
        );
      } else {
        reject({success: false, data: 'Missing mandatory parameter'});
      }
    });
  }

  _parseEntryListDataFromResponse(data: Map<string, Function>): ProviderPlaylistObject {
    this._logger.debug('Data parsing started');
    const playlistConfig: ProviderPlaylistObject = this._getPlaylistObject();
    if (data && data.has(OVPEntryListLoader.id)) {
      const playlistLoader = data.get(OVPEntryListLoader.id);
      if (playlistLoader && playlistLoader.response) {
        const entryList = OVPProviderParser.getEntryList(playlistLoader.response);
        entryList.items.forEach(i => playlistConfig.items.push({sources: this._getSourcesObject(i)}));
      }
    }
    this._logger.debug('Data parsing finished', playlistConfig);
    return playlistConfig;
  }

  _getPlaylistObject(): ProviderPlaylistObject {
    return {
      id: '',
      metadata: {
        name: '',
        description: ''
      },
      poster: '',
      items: []
    };
  }

  _getDefaultSourcesObject(): ProviderMediaConfigSourcesObject {
    return {
      hls: [],
      dash: [],
      progressive: [],
      id: '',
      duration: 0,
      type: MediaEntry.Type.UNKNOWN,
      poster: '',
      dvr: false,
      vr: null,
      metadata: {
        name: '',
        description: '',
        tags: ''
      }
    };
  }

  _getSourcesObject(mediaEntry: MediaEntry) {
    const sourcesObject: ProviderMediaConfigSourcesObject = this._getDefaultSourcesObject();
    const mediaSources = mediaEntry.sources.toJSON();
    sourcesObject.hls = mediaSources.hls;
    sourcesObject.dash = mediaSources.dash;
    sourcesObject.progressive = mediaSources.progressive;
    sourcesObject.id = mediaEntry.id;
    sourcesObject.duration = mediaEntry.duration;
    sourcesObject.type = mediaEntry.type;
    sourcesObject.dvr = !!mediaEntry.dvrStatus;
    sourcesObject.poster = mediaEntry.poster;
    if (mediaEntry.sources.captions) {
      sourcesObject.captions = mediaEntry.sources.captions;
    }
    if (mediaEntry.metadata && typeof mediaEntry.metadata.tags === 'string' && mediaEntry.metadata.tags.indexOf('360') > -1) {
      sourcesObject.vr = {};
    }
    Object.assign(sourcesObject.metadata, mediaEntry.metadata);
    return sourcesObject;
  }
}
