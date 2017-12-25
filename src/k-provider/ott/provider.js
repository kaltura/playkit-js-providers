// @flow
import BaseProvider from '../common/base-provider'
import getLogger from '../../util/logger'
import OTTConfiguration from './config'
import OTTProviderMediaInfo from './provider-media-info'
import OTTDataLoaderManager from './loaders/data-loader-manager'
import OTTSessionLoader from './loaders/session-loader'
import OTTAssetLoader from './loaders/asset-loader'
import OTTProviderParser from './provider-parser'
import ProviderOptions from '../common/provider-options'
import ProviderMediaConfig from '../common/provider-media-config'

export default class OTTProvider extends BaseProvider<OTTProviderMediaInfo> {
  /**
   * @constructor
   * @param {ProviderOptions} options - provider options
   * @param {string} playerVersion - player version
   * @param {string} logLevel - log level
   */
  constructor(options: ProviderOptions, playerVersion: string, logLevel?: string) {
    super(options, playerVersion, logLevel);
    this._logger = getLogger("OTTProvider");
    const _options = options.toJSON();
    OTTConfiguration.set(_options.env);
  }

  /**
   * Gets the backend media config.
   * @param {OTTProviderMediaInfo} mediaInfo - ott media info
   * @returns {Promise<ProviderMediaConfig>} - The provider media config
   */
  getMediaConfig(mediaInfo: OTTProviderMediaInfo): Promise<ProviderMediaConfig> {
    const _mediaInfo = mediaInfo.toJSON();
    if (_mediaInfo.ks) {
      this.ks = _mediaInfo.ks;
    }
    this._dataLoader = new OTTDataLoaderManager(this.partnerId, this.ks);
    return new Promise((resolve, reject) => {
      const entryId = _mediaInfo.entryId;
      if (entryId) {
        let ks: string = this.ks;
        if (!ks) {
          ks = "{1:result:ks}";
          this._dataLoader.add(OTTSessionLoader, {partnerId: this.partnerId});
        }
        const playbackContext = {
          mediaProtocol: _mediaInfo.protocol,
          assetFileIds: _mediaInfo.fileIds,
          context: _mediaInfo.contextType
        };
        this._dataLoader.add(OTTAssetLoader, {
          entryId: entryId,
          ks: ks,
          type: _mediaInfo.mediaType,
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

  _parseDataFromResponse(data: Map<string, Function>): ProviderMediaConfig {
    this._logger.debug("Data parsing started");
    const mediaConfig = new ProviderMediaConfig(this.partnerId, this.uiConfId);
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
          mediaConfig.sources = mediaEntry.sources;
          mediaConfig.id = mediaEntry.id;
          mediaConfig.name = mediaEntry.name;
          mediaConfig.duration = mediaEntry.duration;
          mediaConfig.metadata = mediaEntry.metadata;
        }
      }
    }
    this._logger.debug("Data parsing finished", mediaConfig);
    return mediaConfig;
  }
}
