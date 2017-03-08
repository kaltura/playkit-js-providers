// @flow
import {MetadataObjectType, MetadataStatus} from '../../enums'

export default class KalturaMetadata {

  id: number;
  metadataProfileId: number;
  metadataProfileVersion: number;
  metadataObjectType: MetadataObjectType;
  objectId: string;
  version: number;
  created: Date;
  updated: Date;
  status: MetadataStatus;
  xml: string;

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



