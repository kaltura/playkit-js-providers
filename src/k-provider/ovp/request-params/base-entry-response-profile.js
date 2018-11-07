//@flow
const FIELDS =
  'id,referenceId,name,description,thumbnailUrl,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags,dvrStatus,externalSourceType';

export default class BaseEntryResponseProfile {
  static Type: {[type: string]: number} = {
    INCLUDE_FIELDS: 1,
    EXCLUDE_FIELDS: 2
  };
  /**
   * @member - the response profile type
   * @type {number}
   */
  type: number;
  /**
   * @member - Comma separated fields list to be included or excluded
   * @type {string}
   */
  fields: string;

  /**
   * @constructor
   * @param {Object} responseProfile -
   */
  constructor(responseProfile: Object = {}) {
    this.type = responseProfile.type || BaseEntryResponseProfile.Type.INCLUDE_FIELDS;
    this.fields = responseProfile.fields || FIELDS;
  }
}
