import MediaSources from './media-sources';
import { ProviderMediaEntryObject } from '../types';
import { Poster } from '../types/poster';

export default class MediaEntry {
  public static Type: { [type: string]: string } = {
    VOD: 'Vod',
    LIVE: 'Live',
    IMAGE: 'Image',
    AUDIO: 'Audio',
    UNKNOWN: 'Unknown'
  };
  public static DvrStatus: { [type: string]: number } = {
    ON: 1,
    OFF: 0
  };

  /**
   * @member - entry id
   * @type {string}
   */
  public id?: string;
  /**
   * @member - entry name
   * @type {string}
   */
  public name?: string;
  /**
   * @member - entry sources
   * @type {MediaSources}
   */
  public sources: MediaSources;
  /**
   * @member - entry duration
   * @type {number}
   */
  public duration?: number;
  /**
   * @member - entry type
   * @type {string}
   */
  public type: string;
  /**
   * @member - entry metadata
   * @type {Object}
   */
  public metadata: any;
  /**
   * @member - DVR status
   * @type {number}
   */
  public dvrStatus?: number;
  /**
   * @member - media status
   * @type {number}
   */
  public status?: number;
  /**
   * @member - media poster
   * @type {string | Array<Object>}
   */
  public poster?: string | Poster[];

  /**
   * @member - assetReferenceType
   * @type {string }
   */
  public assetReferenceType?: string;

  /**
   * @member - The download URL of the entry.
   * @type {string}
   */
  public downloadUrl?: string;

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
  public toJSON(): ProviderMediaEntryObject {
    return {
      id: this.id,
      name: this.name,
      sources: this.sources.toJSON(),
      duration: this.duration,
      dvrStatus: this.dvrStatus,
      status: this.status,
      metadata: this.metadata,
      type: this.type,
      poster: this.poster,
      assetReferenceType: this.assetReferenceType,
      downloadUrl: this.downloadUrl
    };
  }
}
