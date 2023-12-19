import ServiceResult from '../../common/base-service-result';
import {KalturaUserEntry} from './kaltura-user-entry';

export class KalturaUserEntryListResponse extends ServiceResult {
  /**
   * @member - The total count
   * @type {number}
   */
  private totalCount!: number;
  /**
   * @member - The entries
   * @type {Array<KalturaUserEntry>}
   */
  private entries!: Array<KalturaUserEntry>;

  /**
   * @constructor
   * @param {Object} responseObj The json response
   */
  constructor(responseObj: any) {
    super(responseObj);
    if (!this.hasError) {
      this.totalCount = responseObj.totalCount;
      this.entries = [];
      if (this.totalCount > 0) {
        responseObj.objects.map(entry => this.entries.push(new KalturaUserEntry(entry)));
      }
    }
  }
}
