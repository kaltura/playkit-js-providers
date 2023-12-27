import ServiceResult from '../../common/base-service-result';
import {Poster} from '../../../types';

export default class KalturaAsset extends ServiceResult {
  public static Type: {[type: string]: string} = {
    MEDIA: 'media',
    RECORDING: 'recording',
    EPG: 'epg'
  };

  public static AssetReferenceType: {[type: string]: string} = {
    MEDIA: 'media',
    EPG_INTERNAL: 'epg_internal',
    EPG_EXTERNAL: 'epg_external',
    NPVR: 'nPVR'
  };
  /**
   * @member - The asset id
   * @type {number}
   */
  public id!: number;
  /**
   * @member - The asset createDate - Specifies when was the Asset was created. Date and time represented as epoch
   * @type {number}
   */
  public createDate!: number;
  /**
   * @member - The asset endDate - epoch For VOD: till when the asset be available in the catalog. For EPG/Linear: program end time and date
   * @type {number}
   */
  public endDate!: number;
  /**
   * @member - The asset name
   * @type {string}
   */
  public name: string = '';
  /**
   * @member - The asset name description
   * @type {string}
   */
  public description: string = '';
  /**
   * @member - The asset tags
   * @type {Array<Object>}
   */
  public tags: Array<any> = [];
  /**
   * @member - The asset metas
   * @type {Array<Object>}
   */
  public metas: Array<any> = [];
  /**
   * @member - The asset images
   * @type {Array<any>}
   */
  public pictures: Array<Poster> = [];

  /**
   * @member - Number of plays
   * @type {number}
   */
  public plays!: number;

  /**
   * @member - Number of views
   * @type {number}
   */
  public views!: number;

  /**
   * @constructor
   * @param {Object} response The response
   */
  constructor(response: any) {
    super(response);
    if (!this.hasError) {
      this.id = response.id;
      this.name = response.name;
      this.description = response.description;
      this.createDate = response.createDate;
      this.endDate = response.endDate;
      this.plays = response.plays;
      this.views = response.views;
      this.metas = this._formatTagsMetas(response.metas);
      this.tags = this._formatTagsMetas(response.tags);
      this.pictures = response.images;
    }
  }

  private _formatTagsMetas(objectToParse: any): Array<any> {
    const parsed: { key: string; value: any; }[] = [];
    Object.keys(objectToParse).forEach((key) => {
      if (objectToParse[key].objects) {
        let value = '';
        objectToParse[key].objects.forEach((object) => {
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
