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
import loggerFactory from "PlayKit.js/src/util/loggerFactory";

const logger = loggerFactory.getLogger("OvpProvider");

export class OvpProvider {

  ks: string;
  partnerID: number;
  _isAnonymous: boolean;
  _loadUiConf: boolean;

  constructor(partnerID: number, ks: string = "") {
    this.partnerID = partnerID;
    this._isAnonymous = !this.ks;
  }


  parseDataFromResponse(data: any): Object {
    logger.info("Data parsing started.")
    let responsesIndexMap: Map<string,number>;
    responsesIndexMap = new Map();

    if (this._isAnonymous) {
      this.ks = data[0].ks;
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
    if (playBackContextResult.hasError)
      logger.error(`GetPlaybackContext service returned an error with error code: <${playBackContextResult.error.code}> and message: <${playBackContextResult.error.message}>.`);

    let metadataListResult: KalturaMetadataListResponse = new KalturaMetadataListResponse(data[responsesIndexMap.get("metaResponse")]);
    if (metadataListResult.hasError)
      logger.error(`MetaDataList service returned an error with error code: <${metadataListResult.error.code}> and message: <${metadataListResult.error.message}>.`);

    let baseEntryList: KalturaBaseEntryListResponse = new KalturaBaseEntryListResponse(data[responsesIndexMap.get("baseEntryListResponse")]);
    let entry: KalturaMediaEntry;
    if (baseEntryList.hasError)
      logger.error(`BaseEntryList service returned an error with error code: <${baseEntryList.error.code}> and message: <${baseEntryList.error.message}>.`);

    let pluginsJson: Object = {};
    if (this._loadUiConf) {
      let uiConf: KalturaUiConfResponse = new KalturaUiConfResponse(data[responsesIndexMap.get("uiConfResponse")]);
      if (uiConf.hasError)
        logger.error(`UiConfGet service returned an error with error code: <${uiConf.error.code}> and message: <${uiConf.error.message}>.`);
      else
        pluginsJson = JSON.parse(uiConf.config).plugins;
    }

    if (!baseEntryList.hasError && !playBackContextResult.hasError) {
      let mediaEntry: MediaEntry = ProviderParser.getMediaEntry(this.ks, this.partnerID, "", baseEntryList.entries[0], playBackContextResult, metadataListResult);
      let config: Object = {
        id: mediaEntry.id,
        sources: JSON.parse(JSON.stringify(mediaEntry.sources)),
        duration: mediaEntry.duration,
        type: mediaEntry.type.name,
        metadata: mediaEntry.metaData,
        plugins: pluginsJson
      };

      return (config);
    }
    else {
      throw(`Failed to load entry data`);
    }
  }


  getConfig(entryId: string, uiConfId?: number): Promise<any> {

    let multiRequest = OvpService.getMultirequest(config.BE_URL, this.ks, this.partnerID);
    multiRequest.tag = "entry-info-multireq";
    if (this._isAnonymous) {
      multiRequest.add(SessionService.anonymousSession(config.BE_URL, this.partnerID))
      this.ks = "{1:result:ks}";
    }

    multiRequest.add(BaseEntryService.list(config.BE_URL, this.ks, entryId));
    multiRequest.add(BaseEntryService.getPlaybackContext(config.BE_URL, this.ks, entryId));
    multiRequest.add(MetaDataService.list(config.BE_URL, this.ks, entryId));
    if (uiConfId && uiConfId > 0) {
      this._loadUiConf = true;
      multiRequest.add(UiConfService.get(config.BE_URL, this.ks, uiConfId));
    }
    else
      this._loadUiConf = false;

    multiRequest.execute()
      .then(data => {
          let config: Object = this.parseDataFromResponse(data);
          return new Promise((resolve, reject) => {
              resolve(config);
            }
          )
        },
        err => {
          let errorText: string = `Error on multiRequest execution, error <${err}>.`;
          logger.error(errorText);
          return new Promise((resolve, reject) => {
              reject(errorText);
            }
          )

        });
  }

}


export default OvpProvider;
