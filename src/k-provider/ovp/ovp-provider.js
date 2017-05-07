//@flow
import Logger from '../../util/logger'
import ProviderParser from './providerParser'
import DataLoaderManager from './loaders/data-loader-manager'
import MediaEntryLoader from './loaders/media-entry-loader'
import SessionLoader from './loaders/session-loader'
import UiConfigLoader from './loaders/ui-config-loader'
import Configuration from './config'
import MediaEntry from '../../entities/media-entry'
import MediaSource from '../../entities/media-source'

/**
 * @constant
 */
const logger = Logger.get("OvpProvider");

type playerConfig = {
  id: string,
  sources: Array<MediaSource>,
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
   * @param {string} entryId The entry ID
   * @param {number} uiConfId The uiConf ID
   * @returns {Promise} The provider config object as promise
   */
  getConfig(entryId?: string, uiConfId?: number): Promise<Object> {
    if (uiConfId != null) {
      this._uiConfId = uiConfId;
    }
    this._dataLoader = new DataLoaderManager(this.partnerID, this.ks);
    return new Promise((resolve, reject) => {
      if (this.validateParams(entryId, uiConfId)) {
        let ks: string = this.ks;
        if (this._isAnonymous) {
          ks = "{1:result:ks}";
          this._dataLoader.add(SessionLoader, {partnerId: this.partnerID});
        }

        this._dataLoader.add(MediaEntryLoader, {entryId: entryId, ks: ks});
        this._dataLoader.add(UiConfigLoader, {uiConfId: uiConfId, ks: ks});
        this._dataLoader.fetchData()
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
   * @param {Map<string,Function>} data The data to parse
   * @returns {Object} The parsed config object
   */
  parseDataFromResponse(data: Map<string,Function>): Object {
    logger.info("Data parsing started.");
    let config: playerConfig = {
      id: "",
      sources: [],
      duration: 0,
      type: "Unknown",
      metadata: {},
      plugins: {}
    };
    if (data != null) {
      if (data.has(SessionLoader.name)) {
        let sessionLoader = data.get(SessionLoader.name);
        if (sessionLoader != null && sessionLoader.response != null) {
          this.ks = sessionLoader.response;
          this._isAnonymous = !this.ks;
        }
      }
      if (data.has(UiConfigLoader.name)) {
        let uiConfLoader = data.get(UiConfigLoader.name);
        let pluginsJson: Object = {};
        if (uiConfLoader != null) {
          pluginsJson = uiConfLoader.response;
        }
        config.plugins = pluginsJson;
      }
      if (data.has(MediaEntryLoader.name)) {
        let mediaLoader = data.get(MediaEntryLoader.name);
        if (mediaLoader != null && mediaLoader.response != null) {
          let mediaEntry: MediaEntry = ProviderParser.getMediaEntry(this.ks, this.partnerID, this._uiConfId, mediaLoader.response);
          config.id = mediaEntry.id;
          config.sources = mediaEntry.sources;
          config.duration = mediaEntry.duration;
          config.type = mediaEntry.type.name;
          config.metadata = mediaEntry.metaData;
        }
      }
    }
    logger.info(config);
    return (config);
  }

  /**
   * Parameters validation function
   * @param {string} entryId The entry ID
   * @param {number} uiConfId The uiConfID
   * @returns {boolean} Is valid params
   */
  validateParams(entryId?: string, uiConfId?: number): boolean {
    return !!entryId || !!uiConfId;
  }
}

export default OvpProvider;
