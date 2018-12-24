//@flow
import ServiceResult from '../../common/base-service-result';

export default class KalturaCaptionAssetListResponse extends ServiceResult {
  totalCount: number;
  captions: Array<PKExternalCaptionObject>;

  /**
   * @constructor
   * @param {Object} metaDataResponse The response
   * @param {Object} urlObject response of the url
   */
  constructor(metaDataResponse: Object) {
    super(metaDataResponse);
    if (!this.hasError) {
      this.totalCount = metaDataResponse.totalCount;
      this.data = metaDataResponse.objects;
    }
  }
}
