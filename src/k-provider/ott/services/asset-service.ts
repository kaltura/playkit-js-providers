import OTTService from './ott-service';
import RequestBuilder from '../../../util/request-builder';
import {ProviderPlaybackContextOptions} from '../../../types';

const SERVICE_NAME: string = 'asset';

export default class OTTAssetService extends OTTService {
  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The partner ID
   * @param {string} assetId The asset ID
   * @param {string} type The asset type (media/recording/epg)
   * @param {ProviderPlaybackContextOptions} playbackContextOptions The playbackContextOptions
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public static getPlaybackContext(
    serviceUrl: string,
    ks: string,
    assetId: string,
    type: string,
    playbackContextOptions: ProviderPlaybackContextOptions
  ): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'getPlaybackContext';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    const contextDataParams: any = {objectType: 'KalturaPlaybackContextOptions'};
    Object.assign(contextDataParams, playbackContextOptions);
    request.params = {assetId: assetId, assetType: type, contextDataParams: contextDataParams, ks: ks};
    return request;
  }

  public static get(serviceUrl: string, ks: string, assetId: string, assetReferenceType: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'get';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.params = {id: assetId, assetReferenceType: assetReferenceType, ks: ks};
    return request;
  }
}
