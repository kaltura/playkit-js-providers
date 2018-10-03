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

export default class OVPProvider extends BaseProvider<ProviderMediaInfoObject> {
  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  constructor(options: ProviderOptionsObject, playerVersion: string) {
    super(options, playerVersion);
    this._logger = getLogger('OVPProvider');
    OVPConfiguration.set(options.env);
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
        this._dataLoader.add(OVPMediaEntryLoader, {entryId: entryId, ks: ks});
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

  _parseDataFromResponse(data: Map<string, Function>): ProviderMediaConfigObject {
    this._logger.debug('Data parsing started');
    const mediaConfig: ProviderMediaConfigObject = {
      session: {
        isAnonymous: this._isAnonymous,
        partnerId: this.partnerId
      },
      sources: {},
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
          const blockedAction = OVPProviderParser.hasBlockActions(mediaLoader.response);
          if (blockedAction) {
            const errorMessage = OVPProviderParser.hasErrorMessage(mediaLoader.response);
            if (errorMessage) {
              this._logger.error(`Entry is blocked, error message: `, errorMessage);
              throw errorMessage;
            } else {
              this._logger.error(`Entry is blocked, action: `, blockedAction);
              throw blockedAction;
            }
          }
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
   * @returns {Promise<ProviderPlaylistConfigObject>} - The provider playlist config
   */
  getPlaylistConfig(playlistInfo: ProviderPlaylistInfoObject): Promise<ProviderPlaylistConfigObject> {
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
        this._dataLoader.add(OVPPlaylistLoader, {playlistId: playlistId, ks: ks});
        // this._dataLoader.add(OVPMediaEntryLoader, {entryId: '{3:result:0:id}', ks: ks});
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

  _parsePlaylistDataFromResponse(data: Map<string, Function>): ProviderPlaylistConfigObject {
    this._logger.debug('Data parsing started');
    const playlistConfig: ProviderPlaylistConfigObject = {
      session: {
        isAnonymous: this._isAnonymous,
        partnerId: this.partnerId
      },
      playlist: {
        id: '',
        metadata: {
          name: '',
          description: ''
        },
        poster: '',
        items: []
      },
      plugins: {}
    };

    if (this.uiConfId) {
      playlistConfig.session.uiConfId = this.uiConfId;
    }
    if (data) {
      if (data.has(OVPSessionLoader.id)) {
        const sessionLoader = data.get(OVPSessionLoader.id);
        if (sessionLoader && sessionLoader.response) {
          this.ks = sessionLoader.response;
          playlistConfig.session.ks = this.ks;
        }
      } else {
        playlistConfig.session.ks = this.ks;
      }
      if (data.has(OVPPlaylistLoader.id)) {
        const playlistLoader = data.get(OVPPlaylistLoader.id);
        if (playlistLoader && playlistLoader.response) {
          const blockedAction = OVPProviderParser.hasBlockActions(playlistLoader.response);
          if (blockedAction) {
            const errorMessage = OVPProviderParser.hasErrorMessage(playlistLoader.response);
            if (errorMessage) {
              this._logger.error(`Entry is blocked, error message: `, errorMessage);
              throw errorMessage;
            } else {
              this._logger.error(`Entry is blocked, action: `, blockedAction);
              throw blockedAction;
            }
          }
          const playlist = OVPProviderParser.getPlaylist(playlistLoader.response);
          playlistConfig.playlist.id = playlist.id;
          playlistConfig.playlist.poster = playlist.poster;
          playlistConfig.playlist.metadata.name = playlist.name;
          playlistConfig.playlist.metadata.description = playlist.description;
          playlist.items.forEach(i => playlistConfig.playlist.items.push({sources: this._getSourcesObject(i)}));
        }
      }
    }
    this._logger.debug('Data parsing finished', playlistConfig);
    return playlistConfig;
  }

  _getSourcesObject(mediaEntry: MediaEntry) {
    const sourcesObject: ProviderMediaConfigSourcesObject = {
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
      sourcesObject.sources.vr = {};
    }
    Object.assign(sourcesObject.metadata, mediaEntry.metadata);
    return sourcesObject;
  }
}
