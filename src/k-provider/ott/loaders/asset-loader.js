//@flow

import OTTAssetService from '../services/ott-asset-service'
import Configuration from '../config'
import RequestBuilder from '../../request-builder'
import KalturaPlaybackContext from  '../response-types/kaltura-playback-context'
import KalturaAsset from  '../response-types/kaltura-asset'

const config = Configuration.get();

/**
 * Asset loader
 * @classdesc
 */
export default class AssetLoader implements ILoader {
  static get id(): string {
    return "asset";
  }

  _entryId: string;
  _requests: Array<RequestBuilder>;
  _response: any = {};

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

  get response(): any {
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
    let requests: Array<RequestBuilder> = [];
    requests.push(OTTAssetService.get(config.beUrl,params.ks, params.entryId))
    requests.push(OTTAssetService.getPlaybackContext(config.beUrl,params.ks, params.entryId, params.type, params.playbackContext));
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
