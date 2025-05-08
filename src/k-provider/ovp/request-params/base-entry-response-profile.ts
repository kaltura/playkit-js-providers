const FIELDS =
  'id,referenceId,name,description,thumbnailUrl,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags,dvrStatus,externalSourceType,status,createdAt,updatedAt,endDate,plays,views,downloadUrl,creatorId,rootEntryId,capabilities';
const RESPONSE_PROFILE_TYPE = {
  INCLUDE_FIELDS: 1,
  EXCLUDE_FIELDS: 2
};
export class BaseEntryResponseProfile {
  public static Type: {[type: string]: number} = RESPONSE_PROFILE_TYPE;
  /**
   * @member - the response profile type
   * @type {number}
   */
  public type: number;
  /**
   * @member - Comma separated fields list to be included or excluded
   * @type {string}
   */
  public fields: string;

  /**
   * @constructor
   * @param {Object} responseProfile -
   */
  constructor(responseProfile: any = {}) {
    this.type = responseProfile.type || BaseEntryResponseProfile.Type.INCLUDE_FIELDS;
    this.fields = responseProfile.fields || FIELDS;
  }
}
