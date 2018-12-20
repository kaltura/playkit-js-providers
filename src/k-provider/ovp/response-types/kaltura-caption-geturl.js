//@flow
import ServiceResult from '../../common/base-service-result';

export default class KalturaCaptionAssetGetUrlResponse extends ServiceResult {
  totalCount: number;
  baseUrl: Array<PKExternalCaptionObject>;

  /**
   * @constructor
   * @param {Object} getUrlResponse The response
   */
  constructor(getUrlResponse: Object) {
    super(getUrlResponse);
    if (!this.hasError) {
      this.totalCount = getUrlResponse.length;
      if (this.totalCount > 0) {
        this.baseUrl = this.data;
      }
    }
  }
}
