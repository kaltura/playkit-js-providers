//@flow
import Logger from '../../util/logger'
import Configuration from './config'
import {ProviderType, OttAssetType, OttPlaybackType} from '../enums'
import ProviderParser from './provider-parser'
import SessionLoader from './loaders/session-loader'
import AssetLoader from './loaders/asset-loader'
import DataLoaderManager from  '../data-loader-manager'
import MediaEntry from '../../entities/media-entry'
import MediaSources from '../../entities/media-sources'

/**
 * @constant
 */
const logger = Logger.get("OttProvider");

type playerConfig = {
  id: string,
  name: string,
  session: Object,
  sources: MediaSources,
  duration: number,
  dvr: boolean,
  type: string,
  metadata: Object,
  plugins: Object
};

/**
 * Ott provider
 * @classdesc
 */
export class OttProvider {
  /**
   * @member - ks
   * @type {string}
   */
  ks: string;
  /**
   * @member - group ID
   * @type {number}
   */
  partnerID: number;
  /**
   * @member - is anonymous
   * @type {boolean}
   * @private
   */
  _isAnonymous: boolean;
  /**
   * @member - uiConf ID
   * @type {number}
   * @private
   */
  _uiConfId: number;
  /**
   * @member - Data loader
   * @type {DataLoaderManager}
   * @private
   */
  _dataLoader: DataLoaderManager;

  /**
   * @constructor
   * @param {number} partnerID The partner ID
   * @param {string} [ks=""]  The provider ks (has empty string as default value)
   * @param {Object} [config]  The provider config(optional)
   */
  constructor(partnerID: number, ks: string = "", config?: Object) {
    this.partnerID = partnerID;
    this.ks = ks;
    this._isAnonymous = !this.ks;
    Configuration.set(config);
  }

  /**
   * Returns player json configuration
   * @function getConfig
   * @param {Object} options The entry data
   * @returns {Promise} The provider config object as promise
   */
  getConfig(options: {assetId: string, type: OttAssetType, contextType: OttPlaybackType, protocol: string, fileIds: string, uiConfId: number}): Promise<Object> {

    this._dataLoader = new DataLoaderManager(this.partnerID, this.ks, ProviderType.OTT);
    return new Promise((resolve, reject) => {
      if (this.validateParams(options)) {
        let ks: string = this.ks;
        if (!ks) {
          ks = "{1:result:ks}";
          this._dataLoader.add(SessionLoader, {partnerId: this.partnerID});
        }

        let playbackContext = {
          mediaProtocol: options.protocol,
          assetFileIds: options.fileIds,
          context: options.contextType
        }
        this._dataLoader.add(AssetLoader, {
          entryId: options.assetId,
          ks: ks,
          type: options.type,
          playbackContext: playbackContext
        });

        this._dataLoader.fetchData()
          .then(response => {
              try {
                resolve(this.parseDataFromResponse(response));
              }
              catch (err) {
                reject({success: false, data: err});
              }

            },
            err => {
              reject(err);
            });
      }
      else {
        reject({success: false, data: "Missing mandatory parameter"});
      }
    });
  }

  /**
   * Parses BE data to json configuration object
   * @function parseDataFromResponse
   * @param {Map<string,Function>} data The data to parse
   * @returns {Object} The parsed config object
   */
  parseDataFromResponse(data: Map<string, Function>): Object {
    logger.debug("Data parsing started");
    let config: playerConfig = {
      id: "",
      name: "",
      session: {
        partnerID: this.partnerID,
        uiConfID: this._uiConfId,
        ks: this.ks
      },
      sources: new MediaSources(),
      duration: 0,
      type: "Unknown",
      dvr: false,
      metadata: {},
      plugins: {}
    };
    if (data != null) {
      if (data.has(SessionLoader.id)) {
        let sessionLoader = data.get(SessionLoader.id);
        if (sessionLoader != null && sessionLoader.response != null) {
          this.ks = sessionLoader.response;
          config.session.ks = this.ks;
        }
      }
      /*  if (data.has(UiConfigLoader.id)) {
       let uiConfLoader = data.get(UiConfigLoader.id);
       let pluginsJson: Object = {};
       if (uiConfLoader != null) {
       pluginsJson = uiConfLoader.response;
       }
       config.plugins = pluginsJson;
       }*/
      if (data.has(AssetLoader.id)) {
        let assetLoader = data.get(AssetLoader.id);
        if (assetLoader != null && assetLoader.response != null) {
          let blockedAction = ProviderParser.hasBlockActions(assetLoader.response)
          if (ProviderParser.hasBlockActions(assetLoader.response)) {
            let errorMessage = ProviderParser.hasErrorMessage(assetLoader.response);
            if(errorMessage){
              logger.error(`Asset is blocked, error message: ` ,errorMessage);
              throw errorMessage;
            }
            else{
              logger.error(`Asset is blocked, action: ` ,blockedAction);
              throw blockedAction;
            }
          }
          let mediaEntry: MediaEntry = ProviderParser.getMediaEntry(this._isAnonymous ? "" : this.ks, this.partnerID, this._uiConfId, assetLoader.response);
          config.sources = mediaEntry.sources;
          config.id = mediaEntry.id;
          config.name = mediaEntry.name;
          config.duration = mediaEntry.duration;
          config.metadata = mediaEntry.metaData;
        }
      }
    }
    logger.debug("Data parsing finished", config);
    return (config);
  }

  /**
   * Parameters validation function
   * @param {Object} options The entry data
   * @returns {boolean} Is valid params
   */
  validateParams(options: Object): boolean {
    if(options){
      return (!!options.assetId && !!options.type && !!options.contextType) || !!options.uiConfId;
    }
    else{
      return false;
    }
  }

}

export default OttProvider;
