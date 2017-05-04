//@flow
import ServiceResult from '../../base-service-result'
import KalturaMediaEntry from './kaltura-media-entry'

/**
 * Ovp BE BaseEntryList service response
 * @classdesc
 */
export default class KalturaBaseEntryListResponse extends ServiceResult {
  /**
   * @member - The total count
   * @type {number}
   */
  totalCount: number;
  /**
   * @member - The entries
   * @type {Array<KalturaMediaEntry>}
   */
  entries: Array<KalturaMediaEntry>;

  /**
   * @constructor
   * @param {Object} The json response
   */
  constructor(responseObj: Object) {
    super(responseObj);
    if (!this.hasError) {
      this.totalCount = responseObj.totalCount;
      if (this.totalCount > 0) {
        this.entries = [];
        responseObj.objects.map(entry => this.entries.push(new KalturaMediaEntry(entry)));
      }
    }
  }
}




