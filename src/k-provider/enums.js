//@flow
export class Scheme {
  static ['drm.PLAYREADY_CENC']: string = "com.microsoft.playready";
  static ['drm.WIDEVINE_CENC']: string = "com.widevine.alpha";
  static ['fairplay.FAIRPLAY']: string = "com.apple.fairplay";
}

export class KalturaRuleActionTypes {
  static DRM_POLICY: KalturaRuleActionType = "drm.DRM_POLICY";
  static BLOCK: KalturaRuleActionType = 1;
  static PREVIEW: KalturaRuleActionType = 2;
  static LIMIT_FLAVORS: KalturaRuleActionType = 3;
  static ADD_TO_STORAGE: KalturaRuleActionType = 4;
  static LIMIT_DELIVERY_PROFILES: KalturaRuleActionType = 5;
  static SERVE_FROM_REMOTE_SERVER: KalturaRuleActionType = 6;
  static REQUEST_HOST_REGEX: KalturaRuleActionType = 7;
  static LIMIT_THUMBNAIL_CAPTURE: KalturaRuleActionType = 8;
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

export class MetadataObjectTypes {
  static AD_CUE_POINT: MetadataObjectType = "adCuePointMetadata.AdCuePoint";
  static ANNOTATION: MetadataObjectType = "annotationMetadata.Annotation";
  static CODE_CUE_POINT: MetadataObjectType = "codeCuePointMetadata.CodeCuePoint";
  static THUMB_CUE_POINT: MetadataObjectType = "thumbCuePointMetadata.thumbCuePoint";
  static ENTRY: MetadataObjectType = 1;
  static CATEGORY: MetadataObjectType = 2;
  static USER: MetadataObjectType = 3;
  static PARTNER: MetadataObjectType = 4;
  static DYNAMIC_OBJECT: MetadataObjectType = 5;
}

export class MetadataStatuses {
  static VALID: MetadataStatus = 1;
  static INVALID: MetadataStatus = 2;
  static DELETED: MetadataStatus = 3;
}

export class EntryStatuses {
  static ERROR_IMPORTING: EntryStatus = -2;
  static ERROR_CONVERTING: EntryStatus = -1;
  static SCAN_FAILURE: EntryStatus = "virusScan.ScanFailure";
  static IMPORT: EntryStatus = 0;
  static INFECTED: EntryStatus = "virusScan.Infected";
  static PRECONVERT: EntryStatus = 1;
  static READY: EntryStatus = 2;
  static DELETED: EntryStatus = 3;
  static PENDING: EntryStatus = 4;
  static MODERATE: EntryStatus = 5;
  static BLOCKED: EntryStatus = 6;
  static NO_CONTENT: EntryStatus = 7
}

export class EntryModerationStatuses {
  static PENDING_MODERATION: EntryModerationStatus = 1;
  static APPROVED: EntryModerationStatus = 2;
  static REJECTED: EntryModerationStatus = 3;
  static FLAGGED_FOR_REVIEW: EntryModerationStatus = 4;
  static MODERATE: EntryModerationStatus = 5;
  static AUTO_APPROVED: EntryModerationStatus = 6
}

export class EntryTypes {
  static AUTOMATIC: EntryType = {value: -1};
  static EXTERNAL_MEDIA: EntryType = {value: "externalMedia.externalMedia"};
  static MEDIA_CLIP: EntryType = {value: 1};
  static MIX: EntryType = {value: 2};
  static PLAYLIST: EntryType = {value: 5};
  static DATA: EntryType = {value: 6};
  static LIVE_STREAM: EntryType = {value: 7};
  static LIVE_CHANNEL: EntryType = {value: 8};
  static DOCUMENT: EntryType = {value: 10};
}

export class MediaTypes {
  static VIDEO: MediaType = {value: 1};
  static IMAGE: MediaType = {value: 2};
  static AUDIO: MediaType = {value: 5};
  static LIVE_STREAM_FLASH: MediaType = {value: 201};
  static LIVE_STREAM_WINDOWS_MEDIA: MediaType = {value: 202};
  static LIVE_STREAM_REAL_MEDIA: MediaType = {value: 203};
  static LIVE_STREAM_QUICKTIME: MediaType = {value: 204};
}

export class MediaEntryTypes {
  static Vod: MediaEntryType = 'Vod';
  static Live: MediaEntryType = 'Live';
  static Image: MediaEntryType = 'Image';
  static Audio: MediaEntryType = 'Audio';
  static Unknown: MediaEntryType = 'Unknown';
}

export class UIConfTypes {
  static PLAYER: UIConfType = 1;
  static CONTRIBUTION_WIZARD: UIConfType = 2;
  static SIMPLE_EDITOR: UIConfType = 3;
  static ADVANCED_EDITOR: UIConfType = 4;
  static PLAYLIST: UIConfType = 5;
  static APP_STUDIO: UIConfType = 6;
  static KRECORD: UIConfType = 7;
  static PLAYER_V3: UIConfType = 8;
  static KMC_ACCOUNT: UIConfType = 9;
  static KMC_ANALYTICS: UIConfType = 10;
  static KMC_CONTENT: UIConfType = 11;
  static KMC_DASHBOARD: UIConfType = 12;
  static KMC_LOGIN: UIConfType = 13;
  static PLAYER_SL: UIConfType = 14;
  static CLIENTSIDE_ENCODER: UIConfType = 15;
  static KMC_GENERAL: UIConfType = 16;
  static KMC_ROLES_AND_PERMISSIONS: UIConfType = 17;
  static CLIPPER: UIConfType = 18;
  static KSR: UIConfType = 19;
  static KUPLOAD: UIConfType = 20;
  static WEBCASTING: UIConfType = 21
}

export class UIConfCreationModes {
  static WIZARD: UIConfCreationMode = 2;
  static ADVANCED: UIConfCreationMode = 3
}
