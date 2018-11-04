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

export default class OVPProvider extends BaseProvider<ProviderMediaInfoObject> {
  _filterOptions: ProviderFilterOptionsObject = {redirectFromEntryId: true};

  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  constructor(options: ProviderOptionsObject, playerVersion: string) {
    super(options, playerVersion);
    this._logger = getLogger('OVPProvider');
    OVPConfiguration.set(options.env);
    this._setFilterOptionsConfig(options);
  }

  /**
   * Gets the backend media config.
   * @param {ProviderMediaInfoObject} mediaInfo - ovp media info
   * @returns {Promise<ProviderMediaConfigObject>} - The provider media config
   */
  getMediaConfig(mediaInfo: ProviderMediaInfoObject): Promise<ProviderMediaConfigObject> {
    if (mediaInfo.ks) {
      this.ks = mediaInfo.ks;
    }
    this._dataLoader = new OVPDataLoaderManager(this.playerVersion, this.partnerId, this.ks);
    return new Promise((resolve, reject) => {
      const entryId = mediaInfo.entryId;
      if (entryId) {
        let ks: string = this.ks;
        if (!ks) {
          ks = '{1:result:ks}';
          this._dataLoader.add(OVPSessionLoader, {partnerId: this.partnerId});
        }
        this._dataLoader.add(OVPMediaEntryLoader, {entryId, ks, filterOptions: this._filterOptions});
        this._dataLoader.fetchData().then(
          response => {
            resolve(this._parseDataFromResponse(response));
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

  _setFilterOptionsConfig(options: ProviderOptionsObject): void {
    if (options.filterOptions && typeof options.filterOptions.redirectFromEntryId === 'boolean') {
      this._filterOptions.redirectFromEntryId = options.filterOptions.redirectFromEntryId;
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
          this.ks = sessionLoader.response;
          mediaConfig.session.ks = this.ks;
        }
      } else {
        mediaConfig.session.ks = this.ks;
      }
      if (data.has(OVPMediaEntryLoader.id)) {
        const mediaLoader = data.get(OVPMediaEntryLoader.id);
        if (mediaLoader && mediaLoader.response) {
          this._validateData(mediaLoader.response);
          const mediaEntry = OVPProviderParser.getMediaEntry(this.isAnonymous ? '' : this.ks, this.partnerId, this.uiConfId, mediaLoader.response);
          Object.assign(mediaConfig.sources, this._getSourcesObject(mediaEntry));
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
    }
    this._dataLoader = new OVPDataLoaderManager(this.playerVersion, this.partnerId, this.ks);
    return new Promise((resolve, reject) => {
      const playlistId = playlistInfo.playlistId;
      if (playlistId) {
        let ks: string = this.ks;
        if (!ks) {
          ks = '{1:result:ks}';
          this._dataLoader.add(OVPSessionLoader, {partnerId: this.partnerId});
        }
        this._dataLoader.add(OVPPlaylistLoader, {playlistId, ks});
        // this._dataLoader.add(OVPMediaEntryLoader, {entryId: '{3:result:0:id}', ks});
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
        this._validateData(playlistLoader.response);
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
    }
    this._dataLoader = new OVPDataLoaderManager(this.playerVersion, this.partnerId, this.ks);
    return new Promise((resolve, reject) => {
      const entries = entryListInfo.entries;
      if (entries && entries.length) {
        let ks: string = this.ks;
        if (!ks) {
          ks = '{1:result:ks}';
          this._dataLoader.add(OVPSessionLoader, {partnerId: this.partnerId});
        }
        this._dataLoader.add(OVPEntryListLoader, {entries, ks, filterOptions: this._filterOptions});
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
    if (data && data.has(OVPPlaylistLoader.id)) {
      const playlistLoader = data.get(OVPPlaylistLoader.id);
      if (playlistLoader && playlistLoader.response) {
        this._validateData(playlistLoader.response);
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

  _validateData(response: any): void {
    const blockedAction = OVPProviderParser.hasBlockActions(response);
    if (blockedAction) {
      const errorMessage = OVPProviderParser.hasErrorMessage(response);
      if (errorMessage) {
        this._logger.error(`Entry is blocked, error message: `, errorMessage);
        throw errorMessage;
      } else {
        this._logger.error(`Entry is blocked, action: `, blockedAction);
        throw blockedAction;
      }
    }
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
    if (mediaEntry.metadata && typeof mediaEntry.metadata.tags === 'string' && mediaEntry.metadata.tags.indexOf('360') > -1) {
      sourcesObject.vr = {};
    }
    Object.assign(sourcesObject.metadata, mediaEntry.metadata);
    return sourcesObject;
  }
}
