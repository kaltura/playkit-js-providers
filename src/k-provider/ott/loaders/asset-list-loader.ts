import RequestBuilder from '../../../util/request-builder';
import OTTConfiguration from '../config';
import OTTAssetService from '../services/asset-service';
import KalturaAsset from '../response-types/kaltura-asset';
import {ILoader} from '../../../types';

export default class OTTAssetListLoader implements ILoader {
  private _entries: Array<string>;
  private _requests!: Array<RequestBuilder>;
  private _response: any = {playlistItems: {entries: []}};

  public static get id(): string {
    return 'asset_list';
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: any) {
    this.requests = this.buildRequests(params);
    this._entries = params.entries;
  }

  public set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  public get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  public set response(response: any) {
    response.forEach(item => {
      this._response.playlistItems.entries.push({mediaDataResult: new KalturaAsset(item.data)});
    });
  }

  public get response(): any {
    return this._response;
  }

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public buildRequests(params: any): Array<RequestBuilder> {
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
  public isValid(): boolean {
    return !!(this._entries && this._entries.length);
  }
}
