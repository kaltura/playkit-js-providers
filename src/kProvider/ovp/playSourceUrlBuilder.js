// @flow

import {endsWith} from '../../../util/stringUtils'


export default class PlaySourceUrlBuilder {

  baseUrl: string;
  partnerId: string;
  entryId: string;
  ks: string;
  uiConfId: string;
  format: string;
  protocol: string;
  extension: string;
  flavorIds: string;
  sessionId: string;

  constructor() {
    this.baseUrl = "";
    this.partnerId = "";
    this.entryId = "";
    this.ks = "";
    this.uiConfId = "";
    this.format = "";
    this.protocol = "";
    this.extension = "";
    this.flavorIds = "";
    this.sessionId = "";
  }

  validateMandatoryValues(): boolean {
    return this.baseUrl != "" && this.partnerId != "" && this.entryId != "" && this.extension != "" && this.format != "";
  }

  build(): string {

    if (!this.validateMandatoryValues()) {
      return "";
    }
    let playUrl = this.baseUrl;
    if (!endsWith(this.baseUrl, "/"))
      playUrl += "/";
    playUrl += "p/" + this.partnerId + "/sp/" + this.partnerId + "00" + "/playManifest/entryId/" + this.entryId + "/protocol/" + this.protocol + "/format/" + this.format;

    if (this.flavorIds != "")
      playUrl += "/falvorIds/" + this.flavorIds;
    else if (this.uiConfId != "")
      playUrl += "/uiConfId/" + this.uiConfId;

    if (this.ks != "") {
      playUrl += "/ks/" + this.ks;
    }

    playUrl += "/a." + this.extension;

    if (this.uiConfId != "" && this.flavorIds != "")
      playUrl += "?uiConfId=." + this.uiConfId;

    return playUrl;

  }

}
