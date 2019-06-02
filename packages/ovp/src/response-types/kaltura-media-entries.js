//@flow
import ServiceResult from '@playkit-js/core-provider/src/base-service-result';
import KalturaMediaEntry from './kaltura-media-entry';

export default class KalturaMediaEntries extends ServiceResult {
  /**
   * @member - The entries
   * @type {Array<KalturaMediaEntry>}
   */
  entries: Array<KalturaMediaEntry>;

  /**
   * @constructor
   * @param {Object} responseObj The json response
   */
  constructor(responseObj: Object) {
    super(responseObj);
    if (!this.hasError) {
      this.entries = [];
      responseObj.map(entry => this.entries.push(new KalturaMediaEntry(entry)));
    }
  }
}
