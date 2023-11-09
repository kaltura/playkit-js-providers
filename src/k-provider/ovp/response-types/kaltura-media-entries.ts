import ServiceResult from '../../common/base-service-result';
import {KalturaMediaEntry} from './kaltura-media-entry';

export class KalturaMediaEntries extends ServiceResult {
  /**
   * @member - The entries
   * @type {Array<KalturaMediaEntry>}
   */
  public entries!: Array<KalturaMediaEntry>;

  /**
   * @constructor
   * @param {Object} responseObj The json response
   */
  constructor(responseObj: any) {
    super(responseObj);
    if (!this.hasError) {
      this.entries = [];
      responseObj.map(entry => this.entries.push(new KalturaMediaEntry(entry)));
    }
  }
}
