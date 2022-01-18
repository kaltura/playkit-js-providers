//@flow
import ServiceResult from '../../common/base-service-result';
import {KalturaUserEntry} from './kaltura-user-entry';

export class KalturaUserEntryListResponse extends ServiceResult {
  totalCount: number;
  data: Array<KalturaUserEntry>;

  constructor(responseObj: Object) {
    super(responseObj);
    if (!this.hasError) {
      this.totalCount = responseObj.totalCount;
      if (this.totalCount > 0) {
        this.data = [];
        responseObj.objects.map(userEntry => this.data.push(new KalturaUserEntry(userEntry)));
      }
    }
  }
}
