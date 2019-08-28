//@flow
export default class KalturaMetadata {
  static ObjectType: {[type: string]: string | number} = {
    AD_CUE_POINT: 'adCuePointMetadata.AdCuePoint',
    ANNOTATION: 'annotationMetadata.Annotation',
    CODE_CUE_POINT: 'codeCuePointMetadata.CodeCuePoint',
    THUMB_CUE_POINT: 'thumbCuePointMetadata.thumbCuePoint',
    ENTRY: 1,
    CATEGORY: 2,
    USER: 3,
    PARTNER: 4,
    DYNAMIC_OBJECT: 5
  };

  static Status: {[status: string]: number} = {
    VALID: 1,
    INVALID: 2,
    DELETED: 3
  };

  id: number;
  metadataProfileId: number;
  metadataProfileVersion: number;
  metadataObjectType: string | number;
  objectId: string;
  version: number;
  created: Date;
  updated: Date;
  status: number;
  xml: string;

  /**
   * @constructor
   * @param {Object} data The response
   */
  constructor(data: Object) {
    this.id = data.id;
    this.metadataProfileId = data.metadataProfileId;
    this.metadataProfileVersion = data.metadataProfileVersion;
    this.metadataProfileId = data.metadataProfileId;
    this.metadataObjectType = data.metadataObjectType;
    this.objectId = data.objectId;
    this.version = data.version;
    this.created = new Date(0);
    this.created.setUTCSeconds(data.createdAt);
    this.updated = new Date(0);
    this.updated.setUTCSeconds(data.updatedAt);
    this.status = data.status;
    this.xml = data.xml;
  }
}
