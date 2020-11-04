//@flow
import RequestBuilder from '../../../util/request-builder';
import OVPBaseEntryService from '../services/base-entry-service';
import OVPMetadataService from '../services/meta-data-service';
import OVPConfiguration from '../config';
import KalturaPlaybackContext from '../response-types/kaltura-playback-context';
import KalturaMetadataListResponse from '../response-types/kaltura-metadata-list-response';
import KalturaBaseEntryListResponse from '../response-types/kaltura-base-entry-list-response';
import KalturaMediaEntry from '../response-types/kaltura-media-entry';

type OVPMediaEntryLoaderResponse = {
  entry: KalturaMediaEntry,
  playBackContextResult: KalturaPlaybackContext,
  metadataListResult: KalturaMetadataListResponse
};
export type {OVPMediaEntryLoaderResponse};

export default class OVPMediaEntryLoader implements ILoader {
  _entryId: string;
  _referenceId: string;
  _requests: Array<RequestBuilder>;
  _response: any = {};

  static get id(): string {
    return 'media';
  }

  /**
   * @constructor
   * @param {Object} params loader params
   * @boolean {boolean} useExternalCaptions - if we should add captions request to the multirequests.
   */
  constructor(params: Object) {
    this.requests = this.buildRequests(params);
    this._entryId = params.entryId;
    this._referenceId = params.referenceId;
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

  get response(): OVPMediaEntryLoaderResponse {
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
    requests.push(OVPBaseEntryService.list(config.serviceUrl, params.ks, params.entryId, params.redirectFromEntryId, params.referenceId));
    // Use the entry id from the request result to support loading by referenceId
    const serviceEntryId = params.ks === '{1:result:ks}' ? '{2:result:objects:0:id}' : '{1:result:objects:0:id}';
    requests.push(OVPBaseEntryService.getPlaybackContext(config.serviceUrl, params.ks, serviceEntryId));
    requests.push(OVPMetadataService.list(config.serviceUrl, params.ks, serviceEntryId));
    return requests;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  isValid(): boolean {
    return !!(this._entryId || this._referenceId);
  }
}
