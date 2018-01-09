//@flow
import getLogger from '../../util/logger'
import OVPConfiguration from './config'
import OVPProviderParser from './provider-parser'
import OVPMediaEntryLoader from './loaders/media-entry-loader'
import OVPSessionLoader from './loaders/session-loader'
import OVPDataLoaderManager from './loaders/data-loader-manager'
import BaseProvider from '../common/base-provider'
import MediaEntry from '../../entities/media-entry'

export default class OVPProvider extends BaseProvider<ProviderMediaInfoObject> {
  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  constructor(options: ProviderOptionsObject, playerVersion: string) {
    super(options, playerVersion);
    this._logger = getLogger("OVPProvider");
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
          ks = "{1:result:ks}";
          this._dataLoader.add(OVPSessionLoader, {partnerId: this.partnerId});
        }
        this._dataLoader.add(OVPMediaEntryLoader, {entryId: entryId, ks: ks});
        this._dataLoader.fetchData()
          .then(response => {
            resolve(this._parseDataFromResponse(response));
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
          const mediaEntry = OVPProviderParser.getMediaEntry(
            this.isAnonymous ? '' : this.ks,
            this.partnerId,
            this.uiConfId,
            mediaLoader.response
          );
          mediaConfig.id = mediaEntry.id;
          mediaConfig.name = mediaEntry.name;
          mediaConfig.sources = mediaEntry.sources.toJSON();
          mediaConfig.duration = mediaEntry.duration;
          mediaConfig.type = mediaEntry.type;
          mediaConfig.dvr = !!mediaEntry.dvrStatus;
          mediaConfig.metadata = mediaEntry.metadata;
        }
      }
    }
    this._logger.debug("Data parsing finished", mediaConfig);
    return mediaConfig;
  }
}
