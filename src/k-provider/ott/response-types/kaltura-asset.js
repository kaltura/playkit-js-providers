//@flow
import ServiceResult from '../../base-service-result'


/**
 * OTT BE asset response
 * @classdesc
 */
export default class KalturaAsset extends ServiceResult {
  /**
   * @member - The asset ID
   * @type {number}
   */
  id: number;
  /**
   * @member - The asset name
   * @type {string}
   */
  name: string = "";
  /**
   * @member - The asset name description
   * @type {string}
   */
  description: string = "";
  /**
   * @member - The asset tags
   * @type {Array}
   */
  tags: Array = [];
  /**
   * @member - The asset metas
   * @type {Array}
   */
  metas: Array = [];

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
    }
  }

  _formatTagsMetas(objectToParse): Array{
    let parsed = [];
    var keys = Object.keys(objectToParse);
    keys.forEach(function (key) {
      if(objectToParse[key].objects){
        let value = "";
        objectToParse[key].objects.forEach(function (object) {
          value += object.value + "|";
        });
        parsed[key] = value = value.slice(0, -1);
      }
      else{
        parsed[key] = objectToParse[key].value;
      }

    });
    return parsed;
  }
}

