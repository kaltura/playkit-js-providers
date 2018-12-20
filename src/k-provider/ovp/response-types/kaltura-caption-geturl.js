//@flow
import ServiceResult from '../../common/base-service-result';

export default class KalturaCaptionAssetGetUrlResponse extends ServiceResult {
  totalCount: number;
  baseUrl: Object;

  /**
   * @constructor
   * @param {Object} getUrlResponse The response
   */
  constructor(getUrlResponse: Object) {
    super({});
    // As this is a non fatal error, we cannot let this fail all the MultiRequest.
    if (!this.hasError) {
      this.totalCount = getUrlResponse.length;
      if (this.totalCount > 0) {
        this.baseUrl = getUrlResponse;
      }
    }
  }
}
