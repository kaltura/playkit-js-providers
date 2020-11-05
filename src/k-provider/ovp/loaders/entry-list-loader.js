//@flow
import RequestBuilder from '../../../util/request-builder';
import OVPConfiguration from '../config';
import OVPBaseEntryService from '../services/base-entry-service';
import KalturaBaseEntryListResponse from '../response-types/kaltura-base-entry-list-response';

export default class OVPEntryListLoader implements ILoader {
  _entries: Array<string>;
  _requests: Array<RequestBuilder>;
  _response: any = {playlistItems: {entries: []}};

  static get id(): string {
    return 'entry_list';
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
    let mediaEntryResponse: KalturaBaseEntryListResponse;
    response.forEach(item => {
      mediaEntryResponse = new KalturaBaseEntryListResponse(item.data);
      this._response.playlistItems.entries.push(mediaEntryResponse.entries[0]);
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
    const config = OVPConfiguration.get();
    const requests: Array<RequestBuilder> = [];
    params.entries.forEach(entry => {
      requests.push(
        OVPBaseEntryService.list(
          config.serviceUrl,
          params.ks,
          entry.entryId || (typeof entry === 'string' && entry),
          params.redirectFromEntryId,
          entry.referenceId
        )
      );
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
