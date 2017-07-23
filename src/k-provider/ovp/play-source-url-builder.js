//@flow
import Configuration from './config'

const config = Configuration.get();

/**
 * Media source url builder
 * @classdesc
 */
export default class PlaySourceUrlBuilder {

  /**
   * Returns source url by given url params
   * @function build
   * @param {Object} urlParams The params
   * @returns {string} The URL
   * @static
   */
  static build(urlParams: Object): string {
    let baseUrl: string = config.baseUrl;
    let partnerId: string = urlParams.partnerId;
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
    if (!baseUrl.endsWith("/")) {
      playUrl += "/";
    }
    playUrl += "p/" + partnerId + "/sp/" + partnerId + "00" + "/playManifest/entryId/" + entryId + "/protocol/" + protocol + "/format/" + format;

    if (flavorIds != "") {
      playUrl += "/flavorIds/" + flavorIds;
    }
    else if (uiConfId != "") {
      playUrl += "/uiConfId/" + uiConfId;
    }

    if (ks != "") {
      playUrl += "/ks/" + ks;
    }

    playUrl += "/a." + extension;

    if (uiConfId && flavorIds != "") {
      playUrl += "?uiConfId=" + uiConfId;
    }

    return playUrl;
  }
}
