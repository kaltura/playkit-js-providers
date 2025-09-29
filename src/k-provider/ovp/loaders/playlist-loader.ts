import RequestBuilder from '../../../util/request-builder';
import OVPPlaylistService from '../services/playlist-service';
import OVPConfiguration from '../config';
import {KalturaPlaylist} from '../response-types';
import {KalturaMediaEntries} from '../response-types';
import {ILoader} from '../../../types';
import { KalturaUserEntryListResponse } from '../response-types';

export default class OVPPlaylistLoader implements ILoader {
  private _playlistId: string;
  private _requests!: Array<RequestBuilder>;
  private _response: any = {};

  public static get id(): string {
    return 'playlist';
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: any) {
    this.requests = this.buildRequests(params);
    this._playlistId = params.playlistId;
  }

  public set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  public get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  public set response(response: any) {
    this._response.playlistData = new KalturaPlaylist(response[0].data);
    this._response.playlistItems = new KalturaMediaEntries(response[1].data);
    this._response.playlistUserEntries = new KalturaUserEntryListResponse(response[2].data);
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
    const config = OVPConfiguration.get();
    const requests: Array<RequestBuilder> = [];
    requests.push(OVPPlaylistService.get(config.serviceUrl, params.ks, params.playlistId));
    requests.push(OVPPlaylistService.execute(config.serviceUrl, params.ks, params.playlistId, params.cacheKey));
    requests.push(OVPPlaylistService.getLastEntryId(config.serviceUrl, params.ks, params.playlistId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  public isValid(): boolean {
    return !!this._playlistId;
  }
}
