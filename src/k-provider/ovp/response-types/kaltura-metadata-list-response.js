//@flow
import ServiceResult from '../../base-service-result'
import KalturaMetadata from './kaltura-metadata'

/**
 * Ovp BE Metadata list response
 * @classdesc
 */
export default class KalturaMetadataListResponse extends ServiceResult {
  totalCount: number;
  /**
   * @member -The mata data array
   * @type {Array<KalturaMetadata>}
   */
  metas: Array<KalturaMetadata>;

  /**
   * @constructor
   * @param {Object} responseObj The response
   */
  constructor(responseObj: Object) {
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



