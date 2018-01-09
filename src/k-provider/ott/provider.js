// @flow
import BaseProvider from '../common/base-provider'
import getLogger from '../../util/logger'
import OTTConfiguration from './config'
import OTTDataLoaderManager from './loaders/data-loader-manager'
import OTTSessionLoader from './loaders/session-loader'
import OTTAssetLoader from './loaders/asset-loader'
import OTTProviderParser from './provider-parser'
import KalturaAsset from './response-types/kaltura-asset'
import KalturaPlaybackContext from './response-types/kaltura-playback-context'
import MediaEntry from '../../entities/media-entry'

export default class OTTProvider extends BaseProvider<OTTProviderMediaInfoObject> {
  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  constructor(options: ProviderOptionsObject, playerVersion: string) {
    super(options, playerVersion);
    this._logger = getLogger("OTTProvider");
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
          ks = "{1:result:ks}";
          this._dataLoader.add(OTTSessionLoader, {partnerId: this.partnerId});
        }
        const playbackContext = {
          mediaProtocol: mediaInfo.protocol,
          assetFileIds: mediaInfo.fileIds,
          context: mediaInfo.contextType || KalturaPlaybackContext.Type.PLAYBACK
        };
        this._dataLoader.add(OTTAssetLoader, {
          entryId: entryId,
          ks: ks,
          type: mediaInfo.mediaType || KalturaAsset.Type.MEDIA,
          playbackContext: playbackContext
        });
        this._dataLoader.fetchData()
          .then(response => {
            try {
              resolve(this._parseDataFromResponse(response));
            } catch (err) {
              reject({success: false, data: err});
            }
          }, err => {
            reject(err);
          });
      } else {
        reject({success: false, data: "Missing mandatory parameter"});
      }
    });
  }

  _parseDataFromResponse(data: Map<string, Function>): ProviderMediaConfigObject {
    this._logger.debug("Data parsing started");
    const mediaConfig: ProviderMediaConfigObject = {
      id: '',
      name: '',
      session: {
        partnerId: this.partnerId
      },
      sources: {hls: [], dash: [], progressive: []},
      duration: 0,
      type: MediaEntry.Type.UNKNOWN,
      dvr: false,
      metadata: {},
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
        if (assetLoader && assetLoader.response) {
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
          const mediaEntry = OTTProviderParser.getMediaEntry(assetLoader.response);
          mediaConfig.sources = mediaEntry.sources.toJSON();
          mediaConfig.id = mediaEntry.id;
          mediaConfig.name = mediaEntry.name;
          mediaConfig.duration = mediaEntry.duration;
          mediaConfig.metadata = mediaEntry.metadata;
          mediaConfig.type = mediaEntry.type;
          mediaConfig.dvr = !!mediaEntry.dvrStatus;
        }
      }
    }
    this._logger.debug("Data parsing finished", mediaConfig);
    return mediaConfig;
  }
}
