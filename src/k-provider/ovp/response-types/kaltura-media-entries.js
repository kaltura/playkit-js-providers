//@flow
import ServiceResult from '../../common/base-service-result';
import {KalturaMediaEntry} from './kaltura-media-entry';

export class KalturaMediaEntries extends ServiceResult {
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
      responseObj.map(entry => {
        const kalturaMediaEntry = new KalturaMediaEntry(entry);
        if (kalturaMediaEntry.type !== KalturaMediaEntry.EntryType.DOCUMENT.value) {
          // filter out documents
          this.entries.push(kalturaMediaEntry);
        }
      });
    }
  }
}
