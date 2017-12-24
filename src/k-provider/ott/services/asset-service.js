//@flow
import OTTService from './ott-service'
import RequestBuilder from '../../../util/request-builder'

const SERVICE_NAME: string = "asset";

export type PlaybackContextOptions = {
  mediaProtocol: string,
  assetFileIds: string,
  context: string
};

export default class OTTAssetService extends OTTService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} cdnUrl The service base URL
   * @param {string} ks The partner ID
   * @param {string} assetId The asset ID
   * @param {string} type The asset type (media/recording/epg)
   * @param {PlaybackContextOptions} playbackContextOptions The playbackContextOptions
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static getPlaybackContext(cdnUrl: string, ks: string, assetId: string, type: string, playbackContextOptions: PlaybackContextOptions): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "getPlaybackContext";
    request.method = "POST";
    request.url = request.getUrl(cdnUrl);
    const contextDataParams: Object = {objectType: "KalturaPlaybackContextOptions"};
    Object.assign(contextDataParams, playbackContextOptions);
    request.params = {assetId: assetId, assetType: type, contextDataParams: contextDataParams, ks: ks};
    return request;
  }

  static get(cdnUrl: string, ks: string, assetId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "get";
    request.method = "POST";
    request.url = request.getUrl(cdnUrl);
    request.params = {id: assetId, assetReferenceType: "media", ks: ks};
    return request;
  }
}
