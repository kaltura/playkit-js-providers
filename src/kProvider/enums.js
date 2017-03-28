//@flow

import {Enum} from 'enumify';

export class Scheme extends Enum {
}
Scheme.initEnum({
  PLAYREADY_CENC: "drm.PLAYREADY_CENC",
  WIDEVINE_CENC: "drm.WIDEVINE_CENC",
  FAIRPLAY: "fairplay.FAIRPLAY",
  PLAYREADY: "playReady.PLAYREADY",
  WIDEVINE: "widevine.WIDEVINE"
});


export class KalturaRuleActionType extends Enum {
}
KalturaRuleActionType.initEnum({
  DRM_POLICY: "drm.DRM_POLICY",
  BLOCK: 1,
  PREVIEW: 2,
  LIMIT_FLAVORS: 3,
  ADD_TO_STORAGE: 4,
  LIMIT_DELIVERY_PROFILES: 5,
  SERVE_FROM_REMOTE_SERVER: 6,
  REQUEST_HOST_REGEX: 7,
  LIMIT_THUMBNAIL_CAPTURE: 8
});

export class Status extends Enum {
}
Status.initEnum({
  ERROR: -1,
  QUEUED: 0,
  CONVERTING: 1,
  READY: 2,
  DELETED: 3,
  NOT_APPLICABLE: 4,
  TEMP: 5,
  WAIT_FOR_CONVERT: 6,
  IMPORTING: 7,
  VALIDATING: 8,
  EXPORTING: 9
});

export class MetadataObjectType extends Enum {
}
MetadataObjectType.initEnum({
  AD_CUE_POINT: "adCuePointMetadata.AdCuePoint",
  ANNOTATION: "annotationMetadata.Annotation",
  CODE_CUE_POINT: "codeCuePointMetadata.CodeCuePoint",
  THUMB_CUE_POINT: "thumbCuePointMetadata.thumbCuePoint",
  ENTRY: 1,
  CATEGORY: 2,
  USER: 3,
  PARTNER: 4,
  DYNAMIC_OBJECT: 5
});

export class MetadataStatus extends Enum {
}
MetadataStatus.initEnum({
  VALID: 1,
  INVALID: 2,
  DELETED: 3
});


export class EntryStatus extends Enum {
}
EntryStatus.initEnum({
  ERROR_IMPORTING: -2,
  ERROR_CONVERTING: -1,
  SCAN_FAILURE: "virusScan.ScanFailure",
  IMPORT: 0,
  INFECTED: "virusScan.Infected",
  PRECONVERT: 1,
  READY: 2,
  DELETED: 3,
  PENDING: 4,
  MODERATE: 5,
  BLOCKED: 6,
  NO_CONTENT: 7
});

export class EntryModerationStatus extends Enum {
}
EntryModerationStatus.initEnum({
  PENDING_MODERATION: 1,
  APPROVED: 2,
  REJECTED: 3,
  FLAGGED_FOR_REVIEW: 4,
  MODERATE: 5,
  AUTO_APPROVED: 6
});

export class EntryType extends Enum {
}
EntryType.initEnum({
  AUTOMATIC: {value: -1},
  EXTERNAL_MEDIA: {value: "externalMedia.externalMedia"},
  MEDIA_CLIP: {value: 1},
  MIX: {value: 2},
  PLAYLIST: {value: 5},
  DATA: {value: 6},
  LIVE_STREAM: {value: 7},
  LIVE_CHANNEL: {value: 8},
  DOCUMENT: {value: 10}
});


export class MediaEntryType extends Enum {
}
MediaEntryType.initEnum(['Vod', 'Live', 'Unknown']);

export class UIConfType extends Enum {
}
UIConfType.initEnum({
  PLAYER: 1,
  CONTRIBUTION_WIZARD: 2,
  SIMPLE_EDITOR: 3,
  ADVANCED_EDITOR: 4,
  PLAYLIST: 5,
  APP_STUDIO: 6,
  KRECORD: 7,
  PLAYER_V3: 8,
  KMC_ACCOUNT: 9,
  KMC_ANALYTICS: 10,
  KMC_CONTENT: 11,
  KMC_DASHBOARD: 12,
  KMC_LOGIN: 13,
  PLAYER_SL: 14,
  CLIENTSIDE_ENCODER: 15,
  KMC_GENERAL: 16,
  KMC_ROLES_AND_PERMISSIONS: 17,
  CLIPPER: 18,
  KSR: 19,
  KUPLOAD: 20,
  WEBCASTING: 21
});

export class UIConfCreationMode extends Enum {
}
UIConfCreationMode.initEnum({
  WIZARD: 2,
  ADVANCED: 3
});






