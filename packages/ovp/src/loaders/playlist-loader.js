//@flow
import RequestBuilder from '@playkit-js/core-provider/src/util/request-builder';
import OVPPlaylistService from '../services/playlist-service';
import OVPConfiguration from '../config';
import KalturaPlaylist from '../response-types/kaltura-playlist';
import KalturaMediaEntries from '../response-types/kaltura-media-entries';

export default class OVPPlaylistLoader implements ILoader {
  _playlistId: string;
  _requests: Array<RequestBuilder>;
  _response: any = {};

  static get id(): string {
    return 'playlist';
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    this.requests = this.buildRequests(params);
    this._playlistId = params.playlistId;
  }

  set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  set response(response: any) {
    this._response.playlistData = new KalturaPlaylist(response[0].data);
    this._response.playlistItems = new KalturaMediaEntries(response[1].data);
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
    const config = OVPConfiguration.get();
    const requests: Array<RequestBuilder> = [];
    requests.push(OVPPlaylistService.get(config.serviceUrl, params.ks, params.playlistId));
    requests.push(OVPPlaylistService.execute(config.serviceUrl, params.ks, params.playlistId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  isValid(): boolean {
    return !!this._playlistId;
  }
}
