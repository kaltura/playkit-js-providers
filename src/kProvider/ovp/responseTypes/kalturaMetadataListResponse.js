//@flow
import ServiceResult from '../../baseServiceResult'
import KalturaMetadata from './kalturaMetadata'

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
   * @param {Object} The json response
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



