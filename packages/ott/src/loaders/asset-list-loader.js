//@flow
import RequestBuilder from '@playkit-js/core-provider/src/util/request-builder';
import OTTConfiguration from '../config';
import OTTAssetService from '../services/asset-service';
import KalturaAsset from '../response-types/kaltura-asset';

export default class OTTAssetListLoader implements ILoader {
  _entries: Array<string>;
  _requests: Array<RequestBuilder>;
  _response: any = {playlistItems: {entries: []}};

  static get id(): string {
    return 'asset_list';
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    this.requests = this.buildRequests(params);
    this._entries = params.entries;
  }

  set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  set response(response: any) {
    response.forEach(item => {
      this._response.playlistItems.entries.push({mediaDataResult: new KalturaAsset(item.data)});
    });
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
    const config = OTTConfiguration.get();
    const requests: Array<RequestBuilder> = [];
    params.entries.forEach(entry => {
      const assetReferenceType = entry.assetReferenceType || KalturaAsset.AssetReferenceType.MEDIA;
      requests.push(OTTAssetService.get(config.serviceUrl, params.ks, entry.entryId || entry, assetReferenceType));
    });
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  isValid(): boolean {
    return !!(this._entries && this._entries.length);
  }
}
