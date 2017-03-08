

// @flow
import ServiceResult from '../..//baseServiceResult'
import KalturaMediaEntry from '../..//ovp/responseTypes/kalturaMediaEntry'


export default class KalturaBaseEntryListResponse extends ServiceResult {

  totalCount: number;
  entries: Array<KalturaMediaEntry>;

  constructor(responseObj: Object) {
    super(responseObj);
    if (!this.hasError) {
      this.totalCount = responseObj.totalCount;
      if (this.totalCount > 0){
        this.entries = [];
        responseObj.objects.map(entry => this.entries.push(new KalturaMediaEntry(entry)));
      }

    }
  }
}




