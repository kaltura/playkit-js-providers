//@flow
import ServiceResult from '../../common/base-service-result';

const ASSET_ID_URL_INDEX: number = 10;

export default class KalturaExternalCaptionsList extends ServiceResult {
  totalCount: number;
  captions: Array<PKExternalCaptionObject>;

  /**
   * @constructor
   * @param {Object} metaDataResponse The response
   * @param {Object} urlObject response of the url
   */
  constructor(metaDataResponse: Object, urlObject: Object) {
    super(metaDataResponse);
    if (!this.hasError) {
      this.totalCount = metaDataResponse.totalCount;
      if (this.totalCount > 0) {
        const getUrlServiceResult = new ServiceResult(urlObject);
        // need to check if the second request (getURL) didn't have an error
        if (!getUrlServiceResult.hasError) {
          const templateUrl = getUrlServiceResult.data;
          this.captions = metaDataResponse.objects.map(captionMetadata => {
            return {
              type: captionMetadata.fileExt,
              label: captionMetadata.label,
              language: captionMetadata.languageCode,
              url: this._getAssetUrl(captionMetadata.id, templateUrl)
            };
          });
        }
      }
    }
  }

  /**
   * return the correct asset URL by replacing the assetId in the baseUrl with the correct one
   * @param {string} id - asset id
   * @param {string} baseUrl - base url to be replaced
   * @returns {string} the correct asset captions url
   * @private
   */
  _getAssetUrl(id: string, baseUrl: string): string {
    let assetUrl = baseUrl.split('/');
    assetUrl[ASSET_ID_URL_INDEX] = id;
    return assetUrl.join('/');
  }
}
