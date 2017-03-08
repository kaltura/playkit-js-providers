// @flow
import ServiceResult from '../..//baseServiceResult'
import KalturaMetadata from './kalturaMetadata'

export default class KalturaMetadataListResponse extends ServiceResult {

  totalCount: number;
  metas: Array<KalturaMetadata>;

  constructor(responseObj: Object) {
    super(responseObj);
    if (!this.hasError) {
      this.totalCount = responseObj.totalCount;
      if (this.totalCount > 0){
        this.metas = [];
        responseObj.objects.map(meta => this.metas.push(new KalturaMetadata(meta)));
      }

    }
  }
}



