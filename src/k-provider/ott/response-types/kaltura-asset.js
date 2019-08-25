//@flow
import ServiceResult from '../../common/base-service-result';

export default class KalturaAsset extends ServiceResult {
  static Type: {[type: string]: string} = {
    MEDIA: 'media',
    RECORDING: 'recording',
    EPG: 'epg'
  };

  static AssetReferenceType: {[type: string]: string} = {
    MEDIA: 'media',
    EPG_INTERNAL: 'epg_internal',
    EPG_EXTERNAL: 'epg_external',
    NPVR: 'nvpr'
  };
  /**
   * @member - The asset id
   * @type {number}
   */
  id: number;
  /**
   * @member - The asset name
   * @type {string}
   */
  name: string = '';
  /**
   * @member - The asset name description
   * @type {string}
   */
  description: string = '';
  /**
   * @member - The asset tags
   * @type {Array<Object>}
   */
  tags: Array<Object> = [];
  /**
   * @member - The asset metas
   * @type {Array<Object>}
   */
  metas: Array<Object> = [];
  /**
   * @member - The asset images
   * @type {Array<any>}
   */
  pictures: Array<any> = [];

  /**
   * @constructor
   * @param {Object} response The response
   */
  constructor(response: Object) {
    super(response);
    if (!this.hasError) {
      this.id = response.id;
      this.name = response.name;
      this.description = response.description;
      this.metas = this._formatTagsMetas(response.metas);
      this.tags = this._formatTagsMetas(response.tags);
      this.pictures = response.images;
    }
  }

  _formatTagsMetas(objectToParse: any): Array<Object> {
    const parsed = [];
    Object.keys(objectToParse).forEach(function(key) {
      if (objectToParse[key].objects) {
        let value = '';
        objectToParse[key].objects.forEach(function(object) {
          value += object.value + '|';
        });
        parsed.push({key: key, value: value});
      } else {
        parsed.push({key: key, value: objectToParse[key].value});
      }
    });
    return parsed;
  }
}
