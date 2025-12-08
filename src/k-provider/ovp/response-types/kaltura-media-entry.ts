export class KalturaMediaEntry {
  public static EntryType: {[entryType: string]: {value: number | string}} = {
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

  public static MediaType: {[mediaType: string]: {value: number}} = {
    VIDEO: {value: 1},
    IMAGE: {value: 2},
    AUDIO: {value: 5},
    LIVE_STREAM_FLASH: {value: 201},
    LIVE_STREAM_WINDOWS_MEDIA: {value: 202},
    LIVE_STREAM_REAL_MEDIA: {value: 203},
    LIVE_STREAM_QUICK_TIME: {value: 204}
  };

  public static EntryStatus: {[status: string]: string | number} = {
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

  public static EntryModerationStatus: {[status: string]: number} = {
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
  public id: string;
  /**
   * @member - The entry referenceId
   * @type {string}
   */
  public referenceId: string;
  /**
   * @member - The entry externalSourceType
   * @type {string}
   */
  public externalSourceType: string;
  /**
   * @member - Entry name (Min 1 chars)
   * @type {string}
   */
  public name: string;
  /**
   * @member - Entry description
   * @type {string}
   */
  public description: string;
  /**
   * @member - The URL used for playback. This is not the download URL.
   * @type {string}
   */
  public dataUrl: string;
  /**
   * @member - Comma separated flavor params ids that exists for this media entry
   * @type {string}
   */
  public flavorParamsIds: string;
  /**
   * @member - The entry duration
   * @type {number}
   */
  public duration: number;
  /**
   * @member - The type of the entry, this is auto filled by the derived entry object
   * @type {string | number}
   */
  public type: string | number;
  /**
   * @member - The type of the entry, this is auto filled by the derived entry object (Image, Audio etc.)
   * @type {number}
   */
  public entryType: number;
  /**
   * @member - Entry poster image
   * @type {string}
   */
  public poster: string;
  /**
   * @member - DVR status
   * @type {number}
   */
  public dvrStatus: number;
  /**
   * @member - Entry tags
   * @type {string}
   */
  public tags: string;

  /**
   * @member - Entry status
   * @type {number}
   */
  public status: number;

  /**
   * @member - Entry creation date as Unix timestamp (In seconds)
   * @type {number}
   */
  public createdAt: number;

  /**
   * @member - Entry updation date as Unix timestamp (In seconds)
   * @type {number}
   */
  public updatedAt: number;

  /**
   * @member - Entry end date as Unix timestamp (In seconds)
   * @type {number}
   */
  public endDate: number;

  /**
   * @member - Number of plays
   * @type {number}
   */
  public plays: number;

  /**
   * @member - Number of views
   * @type {number}
   */
  public views: number;

  /**
   * @member - The download URL of the entry.
   * @type {string}
   */
  public downloadUrl: string;

  /**
   * @member - ID of entry creator.
   * @type {string}
   */
  public creatorId: string;

  /**
   * @member - ID of entry owner.
   * @type {string}
   */
  public userId: string;

  /**
   * @member - The raw thumbnail URL
   * @type {string}
   */
  public rawThumbnailUrl: string;

  /**
   * @member - The root entry ID
   * @type {string}
   */
  public rootEntryId: string;

  /**
   * @member - The capabilities of the entry
   * @type {string}
   */
  public capabilities: string;

  /**
   * @member - Admin tags
   * @type {string}
   */
  public adminTags: string;

  /**
   * @constructor
   * @param {Object} entry The json response
   */
  constructor(entry: any) {
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
    this.rawThumbnailUrl = entry.thumbnailUrl;
    this.status = entry.status;
    this.dvrStatus = entry.dvrStatus;
    this.tags = entry.tags;
    this.adminTags = entry.adminTags;
    this.createdAt = entry.createdAt;
    this.updatedAt = entry.updatedAt;
    this.creatorId = entry.creatorId;
    this.userId = entry.userId;
    this.endDate = entry.endDate;
    this.plays = entry.plays;
    this.views = entry.views;
    this.downloadUrl = entry.downloadUrl;
    this.rootEntryId = entry.rootEntryId;
    this.capabilities = entry.capabilities;
  }
}
