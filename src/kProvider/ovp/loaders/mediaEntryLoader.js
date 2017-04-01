//@flow

import RequestBuilder from '../../requestBuilder'
import BaseEntryService from '../services/baseEntryService'
import MetaDataService from '../services/metaDataService'
import KalturaPlaybackContext from '../responseTypes/kalturaPlaybackContext'
import KalturaMetadataListResponse from '../responseTypes/kalturaMetadataListResponse'
import KalturaBaseEntryListResponse from '../responseTypes/kalturaBaseEntryListResponse'
import BaseLoader from './baseLoader'
import * as config from '../config'

/**
 * Media entry loader
 * @classdesc
 */
export default class MediaEntryLoader extends BaseLoader {
  /**
   * @member - entry playback context
   * @type {KalturaPlaybackContext}
   * @public
   */
  playBackContextResult: KalturaPlaybackContext;
  /**
   * @member - entry metadata
   * @type {KalturaMetadataListResponse}
   * @public
   */
  metadataListResult: KalturaMetadataListResponse;
  /**
   * @member - entry data
   * @type {KalturaBaseEntryListResponse}
   * @public
   */
  baseEntryList: KalturaBaseEntryListResponse;
  /**
   * @member - entry id
   * @type {string}
   * @private
   */
  _entryId: string;

  /**
   * @constructor
   * @param {string} name loader name.
   * @param {Object} params loader params
   */
  constructor(name: string, params: Object) {
    super(name,MediaEntryLoader.buildRequests(params));
    this._entryId = params.entryId;
  }

  /**
   * Sets loader data from response
   * @function
   * @param {Object} data
   */
  setData(data: Object): void {
    this.baseEntryList = new KalturaBaseEntryListResponse(data[0]);
    this.playBackContextResult = new KalturaPlaybackContext(data[1]);
    this.metadataListResult = new KalturaMetadataListResponse(data[2]);
  }

  /**
   * Builds loader requests
   * @function
   * @param params
   * @returns {RequestBuilder}
   * @static
   */
  static buildRequests(params: Object): RequestBuilder {
    let requests: Array<RequestBuilder> = [];
    requests.push(BaseEntryService.list(config.BE_URL, params.ks, params.entryId));
    requests.push(BaseEntryService.getPlaybackContext(config.BE_URL, params.ks, params.entryId));
    requests.push(MetaDataService.list(config.BE_URL, params.ks, params.entryId));
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
