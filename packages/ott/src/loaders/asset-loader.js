//@flow
import OTTAssetService from '../services/asset-service';
import OTTConfiguration from '../config';
import RequestBuilder from '@playkit-js/core-provider/src/util/request-builder';
import KalturaPlaybackContext from '../response-types/kaltura-playback-context';
import KalturaAsset from '../response-types/kaltura-asset';

type OTTAssetLoaderResponse = {mediaDataResult: KalturaAsset, playBackContextResult: KalturaPlaybackContext};
export type {OTTAssetLoaderResponse};

export default class OTTAssetLoader implements ILoader {
  _entryId: string;
  _requests: Array<RequestBuilder>;
  _response: any = {};

  static get id(): string {
    return 'asset';
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    this.requests = this.buildRequests(params);
    this._entryId = params.entryId;
  }

  set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  set response(response: any) {
    this._response.mediaDataResult = new KalturaAsset(response[0].data);
    this._response.playBackContextResult = new KalturaPlaybackContext(response[1].data);
  }

  get response(): OTTAssetLoaderResponse {
    return this._response;
  }

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */
  buildRequests(params: Object): Array<RequestBuilder> {
    const config = OTTConfiguration.get();
    const requests: Array<RequestBuilder> = [];
    requests.push(OTTAssetService.get(config.serviceUrl, params.ks, params.entryId, params.assetReferenceType));
    requests.push(OTTAssetService.getPlaybackContext(config.serviceUrl, params.ks, params.entryId, params.type, params.playbackContext));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  isValid(): boolean {
    return !!this._entryId;
  }
}
