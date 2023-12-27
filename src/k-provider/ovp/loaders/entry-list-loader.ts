import RequestBuilder from '../../../util/request-builder';
import OVPConfiguration from '../config';
import OVPBaseEntryService from '../services/base-entry-service';
import {KalturaBaseEntryListResponse} from '../response-types/kaltura-base-entry-list-response';
import {ILoader} from '../../../types';

export default class OVPEntryListLoader implements ILoader {
  private _entries: Array<string>;
  private _requests!: Array<RequestBuilder>;
  private _response: any = {playlistItems: {entries: []}};

  public static get id(): string {
    return 'entry_list';
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
    let mediaEntryResponse: KalturaBaseEntryListResponse;
    response.forEach(item => {
      mediaEntryResponse = new KalturaBaseEntryListResponse(item.data);
      this._response.playlistItems.entries.push(mediaEntryResponse.entries[0]);
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
    const config = OVPConfiguration.get();
    const requests: Array<RequestBuilder> = [];
    params.entries.forEach(entry => {
      requests.push(OVPBaseEntryService.list(config.serviceUrl, params.ks, entry.entryId || entry, params.redirectFromEntryId, entry.referenceId));
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
