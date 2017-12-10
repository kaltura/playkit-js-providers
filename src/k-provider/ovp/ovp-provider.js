//@flow
import getLogger, {setLogLevel, getLogLevel, LogLevel} from '../../util/logger'
import ProviderParser from './provider-parser'
import DataLoaderManager from './loaders/data-loader-manager'
import MediaEntryLoader from './loaders/media-entry-loader'
import SessionLoader from './loaders/session-loader'
import UiConfigLoader from './loaders/ui-config-loader'
import Configuration from './config'
import MediaEntry from '../../entities/media-entry'
import MediaSources from '../../entities/media-sources'

/**
 * @constant
 */
const logger = getLogger("OvpProvider");

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

declare var __VERSION__: string;
declare var __NAME__: string;

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
   * @member - pVersion the player version
   * @type {string}
   * @private
   */
  _playerVersion: string;
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
   +   * @member - Does UiConf should be loaded
   +   * @type {boolean}
   +   * @private
   +   */
  _loadUiConf: boolean;

  /**
   * @constructor
   * @param {Object} options  The provider options
   */
  constructor(options: {playerVersion: string, partnerID: number, ks: string, config: Object, loadUiConf: boolean, logLevel?: string} = {}) {
    this._playerVersion = options.playerVersion;
    this.partnerID = options.partnerID;
    this.ks = options.ks;
    this._isAnonymous = !this.ks;
    this._loadUiConf = options.loadUiConf;
    if (options.logLevel && this.LogLevel[options.logLevel]) {
      setLogLevel(this.LogLevel[options.logLevel]);
    }
    Configuration.set(options.config);
  }

  /**
   * Returns player json configuration
   * @function getConfig
   * @param {string} entryId - The entry ID
   * @param {number?} uiConfId - The uiConf ID
   * @returns {Promise} The provider config object as promise
   */
  getConfig(entryId: string, uiConfId?: number): Promise<Object> {
    if (uiConfId !== null && uiConfId !== undefined) {
      this._uiConfId = uiConfId;
    }
    this._dataLoader = new DataLoaderManager(this._playerVersion, this.partnerID, this.ks);
    return new Promise((resolve, reject) => {
      if (entryId) {
        let ks: string = this.ks;
        if (!ks) {
          ks = "{1:result:ks}";
          this._dataLoader.add(SessionLoader, {partnerId: this.partnerID});
        }
        this._dataLoader.add(MediaEntryLoader, {entryId: entryId, ks: ks});
        if (this._loadUiConf) {
          this._dataLoader.add(UiConfigLoader, {uiConfId: uiConfId, ks: ks});
        }
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
  parseDataFromResponse(data: Map<string, Function>): Object {
    logger.debug("Data parsing started");
    let config: playerConfig = {
      id: "",
      name: "",
      session: {
        partnerID: this.partnerID,
        uiConfID: this._uiConfId,
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
      if (data.has(UiConfigLoader.id)) {
        let uiConfLoader = data.get(UiConfigLoader.id);
        let pluginsJson: Object = {};
        if (uiConfLoader != null) {
          pluginsJson = uiConfLoader.response;
        }
        config.plugins = pluginsJson;
      }
      if (data.has(MediaEntryLoader.id)) {
        let mediaLoader = data.get(MediaEntryLoader.id);
        if (mediaLoader != null && mediaLoader.response != null) {
          let mediaEntry: MediaEntry = ProviderParser.getMediaEntry(this._isAnonymous ? "" : this.ks, this.partnerID, this._uiConfId, mediaLoader.response);
          config.id = mediaEntry.id;
          config.name = mediaEntry.name;
          config.sources = mediaEntry.sources;
          config.duration = mediaEntry.duration;
          config.type = mediaEntry.type;
          config.dvr = !!mediaEntry.dvrStatus;
          config.metadata = mediaEntry.metaData;
        }
      }
    }
    logger.debug("Data parsing finished", config);
    return (config);
  }

  /**
   * Get the log levels
   * @returns {Object} - The log levels of the player.
   * @public
   */
  get LogLevel(): { [level: string]: Object } {
    return LogLevel;
  }

  /**
   * get the current log level
   * @param {?string} name - the logger name
   * @returns {Object} - the log level
   */
  getLogLevel(name?: string): Object {
    return getLogLevel(name);
  }

  /**
   * sets the logger level
   * @param {Object} level - the log level
   * @param {?string} name - the logger name
   * @returns {void}
   */
  setLogLevel(level: Object, name?: string) {
    setLogLevel(level, name);
  }
}

export default OvpProvider;
const packageName = __NAME__ + "-ovp";
export {__VERSION__ as VERSION, packageName as NAME};
