//@flow
export class Scheme {
  static PLAYREADY_CENC: string = "drm.PLAYREADY_CENC";
  static WIDEVINE_CENC: string = "drm.WIDEVINE_CENC";
  static FAIRPLAY: string = "fairplay.FAIRPLAY";
  static PLAYREADY: string = "playReady.PLAYREADY";
  static WIDEVINE: string = "widevine.WIDEVINE";
}

export class KalturaRuleActionType {
  static DRM_POLICY: string = "drm.DRM_POLICY";
  static BLOCK: number = 1;
  static PREVIEW: number = 2;
  static LIMIT_FLAVORS: number = 3;
  static ADD_TO_STORAGE: number = 4;
  static LIMIT_DELIVERY_PROFILES: number = 5;
  static SERVE_FROM_REMOTE_SERVER: number = 6;
  static REQUEST_HOST_REGEX: number = 7;
  static LIMIT_THUMBNAIL_CAPTURE: number = 8;
}

export class Status {
  static ERROR: number = -1;
  static QUEUED: number = 0;
  static CONVERTING: number = 1;
  static READY: number = 2;
  static DELETED: number = 3;
  static NOT_APPLICABLE: number = 4;
  static TEMP: number = 5;
  static WAIT_FOR_CONVERT: number = 6;
  static IMPORTING: number = 7;
  static VALIDATING: number = 8;
  static EXPORTING: number = 9;
}

export class MetadataObjectType {
  static AD_CUE_POINT: string = "adCuePointMetadata.AdCuePoint";
  static ANNOTATION: string = "annotationMetadata.Annotation";
  static CODE_CUE_POINT: string = "codeCuePointMetadata.CodeCuePoint";
  static THUMB_CUE_POINT: string = "thumbCuePointMetadata.thumbCuePoint";
  static ENTRY: number = 1;
  static CATEGORY: number = 2;
  static USER: number = 3;
  static PARTNER: number = 4;
  static DYNAMIC_OBJECT: number = 5;
}

export class MetadataStatus {
  static VALID: number = 1;
  static INVALID: number = 2;
  static DELETED: number = 3;
}

export class EntryStatus {
  static ERROR_IMPORTING: number = -2;
  static ERROR_CONVERTING: number = -1;
  static SCAN_FAILURE: string = "virusScan.ScanFailure";
  static IMPORT: number = 0;
  static INFECTED: string = "virusScan.Infected";
  static PRECONVERT: number = 1;
  static READY: number = 2;
  static DELETED: number = 3;
  static PENDING: number = 4;
  static MODERATE: number = 5;
  static BLOCKED: number = 6;
  static NO_CONTENT: number = 7
}

export class EntryModerationStatus {
  static PENDING_MODERATION: number = 1;
  static APPROVED: number = 2;
  static REJECTED: number = 3;
  static FLAGGED_FOR_REVIEW: number = 4;
  static MODERATE: number = 5;
  static AUTO_APPROVED: number = 6
}

export class EntryType {
  static AUTOMATIC: Object = {value: -1};
  static EXTERNAL_MEDIA: Object = {value: "externalMedia.externalMedia"};
  static MEDIA_CLIP: Object = {value: 1};
  static MIX: Object = {value: 2};
  static PLAYLIST: Object = {value: 5};
  static DATA: Object = {value: 6};
  static LIVE_STREAM: Object = {value: 7};
  static LIVE_CHANNEL: Object = {value: 8};
  static DOCUMENT: Object = {value: 10};
}

export class MediaType {
  static VIDEO: Object = {value: 1};
  static IMAGE: Object = {value: 2};
  static AUDIO: Object = {value: 5};
  static LIVE_STREAM_FLASH: Object = {value: 201};
  static LIVE_STREAM_WINDOWS_MEDIA: Object = {value: 202};
  static LIVE_STREAM_REAL_MEDIA: Object = {value: 203};
  static LIVE_STREAM_QUICKTIME: Object = {value: 204};
}

export class MediaEntryType {
  static Vod: string = 'Vod';
  static Live: string = 'Live';
  static Image: string = 'Image';
  static Audio: string = 'Audio';
  static Unknown: string = 'Unknown'
}

export class UIConfType {
  static PLAYER: number = 1;
  static CONTRIBUTION_WIZARD: number = 2;
  static SIMPLE_EDITOR: number = 3;
  static ADVANCED_EDITOR: number = 4;
  static PLAYLIST: number = 5;
  static APP_STUDIO: number = 6;
  static KRECORD: number = 7;
  static PLAYER_V3: number = 8;
  static KMC_ACCOUNT: number = 9;
  static KMC_ANALYTICS: number = 10;
  static KMC_CONTENT: number = 11;
  static KMC_DASHBOARD: number = 12;
  static KMC_LOGIN: number = 13;
  static PLAYER_SL: number = 14;
  static CLIENTSIDE_ENCODER: number = 15;
  static KMC_GENERAL: number = 16;
  static KMC_ROLES_AND_PERMISSIONS: number = 17;
  static CLIPPER: number = 18;
  static KSR: number = 19;
  static KUPLOAD: number = 20;
  static WEBCASTING: number = 21
}

export class UIConfCreationMode {
  static WIZARD: number = 2;
  static ADVANCED: number = 3
}
