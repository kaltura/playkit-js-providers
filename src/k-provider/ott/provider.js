// @flow
import BaseProvider from '../common/base-provider';
import getLogger from '../../util/logger';
import OTTConfiguration from './config';
import OTTDataLoaderManager from './loaders/data-loader-manager';
import OTTSessionLoader from './loaders/session-loader';
import OTTAssetLoader from './loaders/asset-loader';
import OTTProviderParser from './provider-parser';
import KalturaAsset from './response-types/kaltura-asset';
import KalturaPlaybackContext from './response-types/kaltura-playback-context';
import MediaEntry from '../../entities/media-entry';

export default class OTTProvider extends BaseProvider<OTTProviderMediaInfoObject> {
  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  constructor(options: ProviderOptionsObject, playerVersion: string) {
    super(options, playerVersion);
    this._logger = getLogger('OTTProvider');
    OTTConfiguration.set(options.env);
  }

  /**
   * Gets the backend media config.
   * @param {OTTProviderMediaInfoObject} mediaInfo - ott media info
   * @returns {Promise<ProviderMediaConfigObject>} - The provider media config
   */
  getMediaConfig(mediaInfo: OTTProviderMediaInfoObject): Promise<ProviderMediaConfigObject> {
    if (mediaInfo.ks) {
      this.ks = mediaInfo.ks;
    }
    this._dataLoader = new OTTDataLoaderManager(this.partnerId, this.ks);
    return new Promise((resolve, reject) => {
      const entryId = mediaInfo.entryId;
      if (entryId) {
        let ks: string = this.ks;
        if (!ks) {
          ks = '{1:result:ks}';
          this._dataLoader.add(OTTSessionLoader, {partnerId: this.partnerId});
        }
        const contextType = mediaInfo.contextType || KalturaPlaybackContext.Type.PLAYBACK;
        const mediaType = mediaInfo.mediaType || KalturaAsset.Type.MEDIA;
        const assetReferenceType = mediaInfo.assetReferenceType || KalturaAsset.AssetReferenceType.MEDIA;
        const playbackContext = {
          mediaProtocol: mediaInfo.protocol,
          assetFileIds: mediaInfo.fileIds,
          context: contextType
        };
        this._dataLoader.add(OTTAssetLoader, {
          entryId: entryId,
          ks: ks,
          type: mediaType,
          playbackContext: playbackContext,
          assetReferenceType: assetReferenceType
        });
        const requestData = {
          contextType: contextType,
          mediaType: mediaType,
          formats: mediaInfo.formats || []
        };
        this._dataLoader.fetchData().then(
          response => {
            try {
              resolve(this._parseDataFromResponse(response, requestData));
            } catch (err) {
              reject({success: false, data: err});
            }
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

  _parseDataFromResponse(data: Map<string, Function>, requestData: Object): ProviderMediaConfigObject {
    this._logger.debug('Data parsing started');
    const mediaConfig: ProviderMediaConfigObject = {
      session: {
        isAnonymous: this._isAnonymous,
        partnerId: this.partnerId
      },
      sources: {
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
          description: ''
        }
      },
      plugins: {}
    };
    if (this.uiConfId) {
      mediaConfig.session.uiConfId = this.uiConfId;
    }
    if (data) {
      if (data.has(OTTSessionLoader.id)) {
        const sessionLoader = data.get(OTTSessionLoader.id);
        if (sessionLoader && sessionLoader.response) {
          this.ks = sessionLoader.response;
          mediaConfig.session.ks = this.ks;
        }
      } else {
        mediaConfig.session.ks = this.ks;
      }
      if (data.has(OTTAssetLoader.id)) {
        const assetLoader = data.get(OTTAssetLoader.id);
        if (assetLoader && assetLoader.response && Object.keys(assetLoader.response).length) {
          const blockedAction = OTTProviderParser.hasBlockActions(assetLoader.response);
          if (blockedAction) {
            const errorMessage = OTTProviderParser.hasErrorMessage(assetLoader.response);
            if (errorMessage) {
              this._logger.error(`Asset is blocked, error message: `, errorMessage);
              throw errorMessage;
            } else {
              this._logger.error(`Asset is blocked, action: `, blockedAction);
              throw blockedAction;
            }
          }
          const mediaEntry = OTTProviderParser.getMediaEntry(assetLoader.response, requestData);
          const mediaSources = mediaEntry.sources.toJSON();
          mediaConfig.sources.hls = mediaSources.hls;
          mediaConfig.sources.dash = mediaSources.dash;
          mediaConfig.sources.progressive = mediaSources.progressive;
          mediaConfig.sources.id = mediaEntry.id;
          mediaConfig.sources.duration = mediaEntry.duration;
          mediaConfig.sources.type = mediaEntry.type;
          mediaConfig.sources.dvr = !!mediaEntry.dvrStatus;
          mediaConfig.sources.poster = mediaEntry.poster;
          if (
            mediaEntry.metadata &&
            mediaEntry.metadata.metas &&
            typeof mediaEntry.metadata.metas.tags === 'string' &&
            mediaEntry.metadata.metas.tags.indexOf('360') > -1
          ) {
            mediaConfig.sources.vr = {};
          }
          Object.assign(mediaConfig.sources.metadata, mediaEntry.metadata);
        }
      }
    }
    this._logger.debug('Data parsing finished', mediaConfig);
    return mediaConfig;
  }
}
