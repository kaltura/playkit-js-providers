//@flow
const FIELDS =
  'id,referenceId,name,description,thumbnailUrl,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags,dvrStatus,externalSourceType,status,liveStatus,createdAt,endDate';
const RESPONSE_PROFILE_TYPE = {
  INCLUDE_FIELDS: 1,
  EXCLUDE_FIELDS: 2
};
export class BaseEntryResponseProfile {
  static Type: {[type: string]: number} = RESPONSE_PROFILE_TYPE;
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
