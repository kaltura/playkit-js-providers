//@flow
import OVPConfiguration from './config'

const config = OVPConfiguration.get();

export default class PlaySourceUrlBuilder {
  /**
   * Returns source url by given url params
   * @function build
   * @param {Object} urlParams The params
   * @returns {string} The URL
   * @static
   */
  static build(urlParams: Object): string {
    const cdnUrl: string = config.cdnUrl;
    const partnerId: string = urlParams.partnerId;
    const entryId: string = urlParams.entryId;
    const ks: string = urlParams.ks;
    const uiConfId: string = urlParams.uiConfId;
    const format: string = urlParams.format;
    const protocol: string = urlParams.protocol;
    const extension: string = urlParams.extension;
    const flavorIds: string = urlParams.flavorIds;

    if (cdnUrl === "" && partnerId === "" && entryId === "" && extension === "" && format === "") {
      return "";
    }

    let playUrl = cdnUrl;
    if (!cdnUrl.endsWith("/")) {
      playUrl += "/";
    }
    playUrl += "p/" + partnerId + "/sp/" + partnerId + "00" + "/playManifest/entryId/" + entryId + "/protocol/" + protocol + "/format/" + format;

    if (flavorIds !== "") {
      playUrl += "/flavorIds/" + flavorIds;
    }
    else if (uiConfId !== "") {
      playUrl += "/uiConfId/" + uiConfId;
    }

    if (ks !== "") {
      playUrl += "/ks/" + ks;
    }

    playUrl += "/a." + extension;

    if (uiConfId && flavorIds !== "") {
      playUrl += "?uiConfId=" + uiConfId;
    }

    return playUrl;
  }
}
