//@flow
import ProviderParser from './providerParser'
import loggerFactory from "playkit-js/src/util/loggerFactory";
import DataLoaderManager from './loaders/dataLoaderManager'
import MediaEntryLoader from './loaders/mediaEntryLoader'
import SessionLoader from './loaders/sessionLoader'
import UiConfigLoader from './loaders/uiConfigLoader'

/**
 * @constant
 */
const logger = loggerFactory.getLogger("OvpProvider");
/**
 * @constant
 */
const SESSION_LOADER_NAME: string = "session";
/**
 * @constant
 */
const MEDIA_LOADER_NAME: string = "media";
/**
 * @constant
 */
const UICONF_LOADER_NAME: string = "uiConf";
type playerConfig = {
  id: string,
  sources: Array,
  duration: number,
  type: string,
  metadata: Object,
  plugins: Object
};

/**
 * Ovp provider
 * @classdesc
 */
export class OvpProvider {
  /**
   * @member - ks
   * @type {string}
   */
  ks: string;
  /**
   * @member - partner ID
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
   * @param {number} partnerID
   * @param {string} [ks=""] - has empty string as default value
   */
  constructor(partnerID: number, ks: string = "") {
    this.partnerID = partnerID;
    this.ks = ks;
    this._isAnonymous = !this.ks;
    this._dataLoader = new DataLoaderManager(this.partnerID, this.ks);
  }

  /**
   * Returns player json configuration
   * @function getConfig
   * @param {string} entryId
   * @param {number} uiConfId
   * @returns {Promise}
   */
  getConfig(entryId?: string, uiConfId?: number): Promise<Object> {
    this._uiConfId = uiConfId;
    this._dataLoader.reset(this.partnerID, this.ks);
    return new Promise((resolve, reject) => {
      if (this.validateParams(entryId, uiConfId)) {
        if (this._isAnonymous) {
          this._dataLoader.add(SESSION_LOADER_NAME, SessionLoader, {partnerId: this.partnerID});
          this.ks = "{1:result:ks}";
        }
        this._dataLoader.add(MEDIA_LOADER_NAME, MediaEntryLoader, {entryId: entryId, ks: this.ks});
        this._dataLoader.add(UICONF_LOADER_NAME, UiConfigLoader, {uiConfId: uiConfId, ks: this.ks});
        this._dataLoader.getData()
          .then(response => {
              resolve(this.parseDataFromResponse(response));
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
   * @param {Map<string,Function>} data
   * @returns {Object}
   */
  parseDataFromResponse(data: Map<string,Function>): Object {
    logger.info("Data parsing started.");
    let config: playerConfig = {
      id: "",
      sources: {},
      duration: 0,
      type: "Unknown",
      metadata: {},
      plugins: {}
    };
    if (data.has(SESSION_LOADER_NAME)) {
      let sessionLoader: SessionLoader = data.get(SESSION_LOADER_NAME);
      this.ks = sessionLoader.ks;
      this._isAnonymous = !this.ks;
    }
    if (data.has(UICONF_LOADER_NAME)) {
      let uiConfLoader: UiConfigLoader = data.get(UICONF_LOADER_NAME);
      let pluginsJson: Object = {};
      if (uiConfLoader.uiConf.config) {
        pluginsJson = JSON.parse(uiConfLoader.uiConf.config).plugins;
      }
      config.plugins = pluginsJson;
    }
    if (data.has(MEDIA_LOADER_NAME)) {
      let mediaLoader: MediaEntryLoader = data.get(MEDIA_LOADER_NAME);
      let mediaEntry: MediaEntry = ProviderParser.getMediaEntry(this.ks, this.partnerID, this._uiConfId,
        {
          entry: mediaLoader.baseEntryList.entries[0],
          playbackContext: mediaLoader.playBackContextResult,
          metadataList: mediaLoader.metadataListResult
        });
      config.id = mediaEntry.id;
      config.sources = mediaEntry.sources;
      config.duration = mediaEntry.duration;
      config.type = mediaEntry.type.name;
      config.metadata = mediaEntry.metaData;
    }
    logger.info(config);
    return (config);
  }

  /**
   * Parametrs validation function
   * @param entryId
   * @param uiConfId
   * @returns {boolean}
   */
  validateParams(entryId: string, uiConfId: number): boolean {
    return entryId || uiConfId;
  }
}

export default OvpProvider;
