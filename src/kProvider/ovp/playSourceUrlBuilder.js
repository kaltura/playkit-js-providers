// @flow

import {endsWith} from 'playkit-js/src/util/stringUtils'
import * as config from './config'


export default class PlaySourceUrlBuilder {

  static build(urlParams: Object): string {

    let baseUrl: string = config.BASE_URL;
    let partnerId: number = urlParams.partnerId;
    let entryId: string = urlParams.entryId;
    let ks: string = urlParams.ks;
    let uiConfId: string = urlParams.uiConfId;
    let format: string = urlParams.format;
    let protocol: string = urlParams.protocol;
    let extension: string = urlParams.extension;
    let flavorIds: string = urlParams.flavorIds;

    if (baseUrl == "" && partnerId == "" && entryId == "" && extension == "" && format == "") {
      return "";
    }

    let playUrl = baseUrl;
    if (!endsWith(baseUrl, "/"))
      playUrl += "/";
    playUrl += "p/" + partnerId + "/sp/" + partnerId + "00" + "/playManifest/entryId/" + entryId + "/protocol/" + protocol + "/format/" + format;

    if (flavorIds != "")
      playUrl += "/falvorIds/" + flavorIds;
    else if (uiConfId != "")
      playUrl += "/uiConfId/" + uiConfId;

    if (this.ks != "") {
      playUrl += "/ks/" + ks;
    }

    playUrl += "/a." + extension;

    if (uiConfId != "" && flavorIds != "")
      playUrl += "?uiConfId=." + uiConfId;

    return playUrl;

  }

}
