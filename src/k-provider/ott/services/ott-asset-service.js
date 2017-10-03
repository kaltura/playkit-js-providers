//@flow

import OttService from './ott-service'
import RequestBuilder from '../../request-builder'
import {OttAssetType, OttPlaybackType} from '../../enums'

const SERVICE_NAME: string = "asset";

/**
 * ottuser service methods
 * @classdesc
 */
export default class OTTAssetService extends OttService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} baseUrl The service base URL
   * @param {string} ks The partner ID
   * @param {string} assetId The asset ID
   * @param {OttAssetType} type The asset type (media/recording/epg)
   * @param {Object} playbackContextOptions The playbackContextOptions { mediaProtocol: string, assetFileIds: string, context: OttPlaybackType}
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static getPlaybackContext(baseUrl: string, ks: string,
                            assetId: string, type: OttAssetType,
                            playbackContextOptions: { mediaProtocol: string, assetFileIds: string, context: OttPlaybackType}) {
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    let request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "getPlaybackContext";
    request.method = "POST";
    request.url = request.getUrl(baseUrl);
    let contextDataParams = {objectType: "KalturaPlaybackContextOptions"};
    Object.assign(contextDataParams, playbackContextOptions);
    request.params = {assetId: assetId, assetType: type, contextDataParams: contextDataParams, ks:ks};

    return request;
  }


  static get(baseUrl: string, ks: string, assetId: string) {
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    let request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "get";
    request.method = "POST";
    request.url = request.getUrl(baseUrl);
    request.params = {id: assetId, assetReferenceType: "media", ks:ks};

    return request;
  }
}
