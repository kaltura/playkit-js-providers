//@flow
export default class KalturaMediaEntry {
  static EntryType: {[entryType: string]: {value: number | string}} = {
    AUTOMATIC: {value: -1},
    EXTERNAL_MEDIA: {value: 'externalMedia.externalMedia'},
    MEDIA_CLIP: {value: 1},
    MIX: {value: 2},
    PLAYLIST: {value: 5},
    DATA: {value: 6},
    LIVE_STREAM: {value: 7},
    LIVE_CHANNEL: {value: 8},
    DOCUMENT: {value: 10}
  };

  static MediaType: {[mediaType: string]: {value: number}} = {
    VIDEO: {value: 1},
    IMAGE: {value: 2},
    AUDIO: {value: 5},
    LIVE_STREAM_FLASH: {value: 201},
    LIVE_STREAM_WINDOWS_MEDIA: {value: 202},
    LIVE_STREAM_REAL_MEDIA: {value: 203},
    LIVE_STREAM_QUICK_TIME: {value: 204}
  };

  static EntryStatus: {[status: string]: string | number} = {
    ERROR_IMPORTING: -2,
    ERROR_CONVERTING: -1,
    SCAN_FAILURE: 'virusScan.ScanFailure',
    IMPORT: 0,
    INFECTED: 'virusScan.Infected',
    PRECONVERT: 1,
    READY: 2,
    DELETED: 3,
    PENDING: 4,
    MODERATE: 5,
    BLOCKED: 6,
    NO_CONTENT: 7
  };

  static EntryModerationStatus: {[status: string]: number} = {
    PENDING_MODERATION: 1,
    APPROVED: 2,
    REJECTED: 3,
    FLAGGED_FOR_REVIEW: 4,
    MODERATE: 5,
    AUTO_APPROVED: 6
  };

  /**
   * @member - The entry id
   * @type {string}
   */
  id: string;
  /**
   * @member - The entry referenceId
   * @type {string}
   */
  referenceId: string;
  /**
   * @member - The entry externalSourceType
   * @type {string}
   */
  externalSourceType: string;
  /**
   * @member - Entry name (Min 1 chars)
   * @type {string}
   */
  name: string;
  /**
   * @member - Entry description
   * @type {string}
   */
  description: string;
  /**
   * @member - The URL used for playback. This is not the download URL.
   * @type {string}
   */
  dataUrl: string;
  /**
   * @member - Comma separated flavor params ids that exists for this media entry
   * @type {string}
   */
  flavorParamsIds: string;
  /**
   * @member - The entry duration
   * @type {number}
   */
  duration: number;
  /**
   * @member - The type of the entry, this is auto filled by the derived entry object
   * @type {string | number}
   */
  type: string | number;
  /**
   * @member - The type of the entry, this is auto filled by the derived entry object (Image, Audio etc.)
   * @type {number}
   */
  entryType: number;
  /**
   * @member - Entry poster image
   * @type {string}
   */
  poster: string;
  /**
   * @member - DVR status
   * @type {number}
   */
  dvrStatus: number;
  /**
   * @member - Entry tags
   * @type {string}
   */
  tags: string;

  /**
   * @constructor
   * @param {Object} entry The json response
   */
  constructor(entry: Object) {
    this.id = entry.id;
    this.referenceId = entry.referenceId;
    this.externalSourceType = entry.externalSourceType;
    this.name = entry.name;
    this.description = entry.description;
    this.dataUrl = entry.dataUrl;
    this.type = entry.type;
    this.entryType = entry.mediaType;
    this.flavorParamsIds = entry.flavorParamsIds;
    this.duration = entry.duration;
    this.poster = entry.thumbnailUrl;
    this.dvrStatus = entry.dvrStatus;
    this.tags = entry.tags;
  }
}
