//@flow
import MediaSources from './media-sources';

export default class MediaEntry {
  static Type: {[type: string]: string} = {
    VOD: 'Vod',
    LIVE: 'Live',
    IMAGE: 'Image',
    AUDIO: 'Audio',
    UNKNOWN: 'Unknown'
  };

  /**
   * @member - entry id
   * @type {string}
   */
  id: string;
  /**
   * @member - entry name
   * @type {string}
   */
  name: string;
  /**
   * @member - entry sources
   * @type {MediaSources}
   */
  sources: MediaSources;
  /**
   * @member - entry duration
   * @type {number}
   */
  duration: number;
  /**
   * @member - entry type
   * @type {string}
   */
  type: string;
  /**
   * @member - entry metadata
   * @type {Object}
   */
  metadata: Object;
  /**
   * @member - DVR status
   * @type {number}
   */
  dvrStatus: number;
  /**
   * @member - media poster
   * @type {string | Array<Object>}
   */
  poster: string | Array<Object>;

  /**
   * @member - assetReferenceType
   * @type {string }
   */
  assetReferenceType: string;

  /**
   * @constructor
   */
  constructor() {
    this.metadata = new Map();
    this.sources = new MediaSources();
    this.type = MediaEntry.Type.UNKNOWN;
  }

  /**
   * Convert class to native js object.
   * @returns {ProviderMediaEntryObject} - The json class object.
   */
  toJSON(): ProviderMediaEntryObject {
    return {
      id: this.id,
      name: this.name,
      sources: this.sources.toJSON(),
      duration: this.duration,
      dvrStatus: this.dvrStatus,
      metadata: this.metadata,
      type: this.type,
      poster: this.poster,
      assetReferenceType: this.assetReferenceType
    };
  }
}
