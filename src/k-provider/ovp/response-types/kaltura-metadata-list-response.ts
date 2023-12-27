import ServiceResult from '../../common/base-service-result';
import {KalturaMetadata} from './kaltura-metadata';

export class KalturaMetadataListResponse extends ServiceResult {
  public totalCount!: number;
  public metas!: Array<KalturaMetadata>;

  /**
   * @constructor
   * @param {Object} responseObj The response
   */
  constructor(responseObj: any) {
    super(responseObj);
    if (!this.hasError) {
      this.totalCount = responseObj.totalCount;
      if (this.totalCount > 0) {
        this.metas = [];
        responseObj.objects.map(meta => this.metas.push(new KalturaMetadata(meta)));
      }
    }
  }
}
