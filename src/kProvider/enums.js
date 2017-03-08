// @flow

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
  THUMB_CUE_POINT	: "thumbCuePointMetadata.thumbCuePoint",
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
  IMPORT	: 0,
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
  AUTOMATIC: -1,
  EXTERNAL_MEDIA: "externalMedia.externalMedia",
  MEDIA_CLIP: 1,
  MIX: 2,
  PLAYLIST: 5,
  DATA: 6,
  LIVE_STREAM: 7,
  LIVE_CHANNEL: 8,
  DOCUMENT: 10
});

export class MediaEntryType extends Enum {
}
MediaEntryType.initEnum(['Vod', 'Live', 'Unknown']);






