//@flow

import OttService from './ott-service'
import RequestBuilder from '../../request-builder'

const SERVICE_NAME: string = "bookmark";

/**
 * ottuser service methods
 * @classdesc
 */
export default class BookMarkService extends OttService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function add
   * @param {string} baseUrl The service base URL
   * @param {string} ks The partner ID
   * @param {Object} bookmark The udid
   * @returns {RequestBuilder} The request builder
   * @static
   */

  static add(baseUrl: string, ks: string, bookmark: Object) {
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    let request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "add";
    request.method = "POST";
    request.url = request.getUrl(baseUrl);
    let playerData: Object = {
      objectType: "KalturaBookmarkPlayerData", action: bookmark.playerData.action,
      averageBitrate: bookmark.playerData.averageBitrate, totalBitrate: bookmark.playerData.totalBitrate,
      currentBitrate: bookmark.playerData.currentBitrate, fileId: bookmark.playerData.fileId,
    };
    let bookMarkServiceParams: Object = {
      objectType: "KalturaBookmark",
      type: bookmark.type,
      id: bookmark.id,
      position: bookmark.position,
      playerData: playerData
    };

    request.params = {bookmark: bookMarkServiceParams};
    return request;
  }
}
