// @flow

//import MultiRequestBuilder from '../multiRequestBuilder'
import OvpService from './services/ovpService'
import SessionService from './services/sessionService'
import BaseEntryService from './services/baseEntryService'
import MetaDataService from './services/metDataService'
import KalturaPlaybackContext from './responseTypes/kalturaPlaybackContext'
import KalturaMetadataListResponse from './responseTypes/kalturaMetadataListResponse'
import KalturaBaseEntryListResponse from './responseTypes/kalturaBaseEntryListResponse'
import ProviderParser from './providerParser'
import PlayerConfig from '../../../declarations/playerConfig'

export default class OvpProvider {

  ks: string;
  partnerID: number;
  baseUrl: string;
  _isAnonymous: boolean;

  constructor(partnerID: number, ks?: string) {

    this.partnerID = partnerID;
    this.baseUrl = "https://cdnapisec.kaltura.com";
    this.ks = (ks == undefined ? "" : ks);
    this._isAnonymous = !this.ks;

  }


  getMediaEntry(data: any): MediaEntry {

    let responsesIndexMap: Map<string,int>;
    responsesIndexMap = new Map();

    if (data.length > 3) {
      this.ks = data[0].ks;
      responsesIndexMap.set("baseEntryListResponse", 1);
      responsesIndexMap.set("playbackContextResponse", 2);
      responsesIndexMap.set("metaResponse", 3);
    }
    else {
      responsesIndexMap.set("baseEntryListResponse", 0);
      responsesIndexMap.set("playbackContextResponse", 1);
      responsesIndexMap.set("metaResponse", 2);
    }
    let playBackContextResult: KalturaPlaybackContext = new KalturaPlaybackContext(data[responsesIndexMap.get("playbackContextResponse")]);
    let metadataListResult: KalturaMetadataListResponse = new KalturaMetadataListResponse(data[responsesIndexMap.get("metaResponse")]);
    let baseEntryList: KalturaBaseEntryListResponse = new KalturaBaseEntryListResponse(data[responsesIndexMap.get("baseEntryListResponse")]);

    return ProviderParser.getMediaEntry(this.baseUrl, this.ks, this.partnerID, "", baseEntryList.entries[0], playBackContextResult, metadataListResult);

  }


  getConfig(entryId: string): void {

    let BEUrl = "http://www.kaltura.com/api_v3";
    let multiRequest = OvpService.getMultirequest(BEUrl, this.ks, this.partnerID);
    multiRequest.tag = "entry-info-multireq";
    if (this._isAnonymous) {
      multiRequest.add(SessionService.anonymousSession(BEUrl, this.partnerID))
      this.ks = "{1:result:ks}";
    }

    multiRequest.add(BaseEntryService.list(BEUrl, this.ks, entryId));
    multiRequest.add(BaseEntryService.getPlaybackContext(BEUrl, this.ks, entryId));
    multiRequest.add(MetaDataService.list(BEUrl, this.ks, entryId));
    multiRequest.execute(this.callback)
      .then(data => {
          let config:PlayerConfig = new PlayerConfig();
          config.media.mediaEntry = this.getMediaEntry(data);
          window.console.log(config);
        },
        err => {
          window.console.log("err: " + err);
        });

  }


}


