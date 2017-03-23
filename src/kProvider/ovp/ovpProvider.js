// @flow

import OvpService from './services/ovpService';
import SessionService from './services/sessionService'
import BaseEntryService from './services/baseEntryService'
import MetaDataService from './services/metDataService'
import UiConfService from './services/uiConfService'
import KalturaPlaybackContext from './responseTypes/kalturaPlaybackContext'
import KalturaMetadataListResponse from './responseTypes/kalturaMetadataListResponse'
import KalturaBaseEntryListResponse from './responseTypes/kalturaBaseEntryListResponse'
import KalturaUiConfResponse from './responseTypes/kalturaUIConfResponse'
import KalturaMediaEntry from './responseTypes/kalturaMediaEntry'
import ProviderParser from './providerParser'
import * as config from './config'
import loggerFactory from "playkit-js/src/util/loggerFactory";
import PlayerError from 'playkit-js/src/util/PlayerError'
import ServiceResult from '../../kProvider/baseServiceResult'
/**
 * @constant
 */
const logger = loggerFactory.getLogger("OvpProvider");

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
   * @member - should load uiConf data
   * @type {boolean}
   * @private
   */
  _loadUiConf: boolean;

  /**
   * @constructor
   * @param {number} partnerID
   * @param {string} [ks=""] - has empty string as default value
   */
  constructor(partnerID: number, ks: string = "") {
    this.partnerID = partnerID;
    this._isAnonymous = !this.ks;
  }

  /**
   * Returns player json configuration
   * @function getConfig
   * @param {string} entryId
   * @param {number} uiConfId
   * @returns {Promise}
   */
  getConfig(entryId: string, uiConfId?: number): Promise<Object> {
    if (uiConfId && uiConfId > 0)
      this._loadUiConf = true;
    else
      this._loadUiConf = false;
    return new Promise((resolve, reject) => {
      this.getData(entryId, uiConfId)
        .then(response => {
            if (!response.success)
              reject(response);
            else {
              let config: Object = this.parseDataFromResponse(response.data);
              resolve(config);
            }
          },
          err => {
            reject(err);
          });
    });
  }

  /**
   * Gets data from BE
   * @function
   * @param {string} entryId
   * @param {number} [uiConfId]
   * @returns {Promise.<any>}
   */
  getData(entryId: string, uiConfId?: number): Promise<any> {
    let multiRequest = OvpService.getMultirequest(this.ks, this.partnerID);

    multiRequest.tag = "entry-info-multireq";
    if (this._isAnonymous) {
      multiRequest.add(SessionService.anonymousSession(config.BE_URL, this.partnerID))
      this.ks = "{1:result:ks}";
    }

    multiRequest.add(BaseEntryService.list(config.BE_URL, this.ks, entryId));
    multiRequest.add(BaseEntryService.getPlaybackContext(config.BE_URL, this.ks, entryId));
    multiRequest.add(MetaDataService.list(config.BE_URL, this.ks, entryId));
    if (this._loadUiConf)
      multiRequest.add(UiConfService.get(config.BE_URL, this.ks, uiConfId));
    return multiRequest.execute();
  }

  /**
   * Parses BE data to json configuration object
   * @function parseDataFromResponse
   * @param {Object} data
   * @returns {Object}
   */
  parseDataFromResponse(data: Object): Object {
    logger.info("Data parsing started.");
    let responsesIndexMap: Map<string,number> = new Map();

    if (this._isAnonymous) {
      this.ks = data[0].ks;
      responsesIndexMap.set("anonymoussessionResponse", 0);
      responsesIndexMap.set("baseEntryListResponse", 1);
      responsesIndexMap.set("playbackContextResponse", 2);
      responsesIndexMap.set("metaResponse", 3);
      if (data.length > 4 && this._loadUiConf)
        responsesIndexMap.set("uiConfResponse", 4);
    }
    else {
      responsesIndexMap.set("baseEntryListResponse", 0);
      responsesIndexMap.set("playbackContextResponse", 1);
      responsesIndexMap.set("metaResponse", 2);
      if (data.length > 3 && this._loadUiConf)
        responsesIndexMap.set("uiConfResponse", 3);
    }

    let playBackContextResult: KalturaPlaybackContext = new KalturaPlaybackContext(data[responsesIndexMap.get("playbackContextResponse")]);
    let metadataListResult: KalturaMetadataListResponse = new KalturaMetadataListResponse(data[responsesIndexMap.get("metaResponse")]);
    let baseEntryList: KalturaBaseEntryListResponse = new KalturaBaseEntryListResponse(data[responsesIndexMap.get("baseEntryListResponse")]);
    let entry: KalturaMediaEntry;

    let pluginsJson: Object = {};
    if (this._loadUiConf) {
      let uiConf: KalturaUiConfResponse = new KalturaUiConfResponse(data[responsesIndexMap.get("uiConfResponse")]);
      if (uiConf && uiConf.config)
        pluginsJson = JSON.parse(uiConf.config).plugins;
    }

    let mediaEntry: MediaEntry = ProviderParser.getMediaEntry(this.ks, this.partnerID, "", baseEntryList.entries[0], playBackContextResult, metadataListResult);
    let config: Object = {
      id: mediaEntry.id,
      sources: JSON.parse(JSON.stringify(mediaEntry.sources)),
      duration: mediaEntry.duration,
      type: mediaEntry.type.name,
      metadata: mediaEntry.metaData,
      plugins: pluginsJson
    };
    logger.info(config);
    return (config);

  }
}

export default OvpProvider;
