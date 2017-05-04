//@flow

import RequestBuilder from '../../request-builder'
import BaseEntryService from '../services/base-entry-service'
import MetaDataService from '../services/meta-data-service'
import Configuration from '../config'
import KalturaPlaybackContext from '../response-types/kaltura-playback-context'
import KalturaMetadataListResponse from '../response-types/kaltura-metadata-list-response'
import KalturaBaseEntryListResponse from '../response-types/kaltura-base-entry-list-response'

const config = Configuration.get();

/**
 * Media entry loader
 * @classdesc
 */
export default class MediaEntryLoader implements ILoader {
  static get name(): string {
    return "media";
  }

  _entryId: string;
  _requests: Array<RequestBuilder>;
  _response: any = {};

  /**
   * @constructor
   * @param {string} name loader name.
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
    let mediaEntryResponse: KalturaBaseEntryListResponse = new KalturaBaseEntryListResponse(response[0].data);
    this._response.entry = mediaEntryResponse.entries[0];
    this._response.playBackContextResult = new KalturaPlaybackContext(response[1].data);
    this._response.metadataListResult = new KalturaMetadataListResponse(response[2].data);
  }

  get response(): any {
    return this._response;
  }

  /**
   * Builds loader requests
   * @function
   * @param params
   * @returns {RequestBuilder}
   * @static
   */
  buildRequests(params: Object): Array<RequestBuilder> {
    let requests: Array<RequestBuilder> = [];
    requests.push(BaseEntryService.list(config.beUrl, params.ks, params.entryId));
    requests.push(BaseEntryService.getPlaybackContext(config.beUrl, params.ks, params.entryId));
    requests.push(MetaDataService.list(config.beUrl, params.ks, params.entryId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean}
   */
  isValid(): boolean {
    return !!this._entryId;
  }
}
