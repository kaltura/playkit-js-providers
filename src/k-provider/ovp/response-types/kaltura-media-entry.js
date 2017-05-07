//@flow
import {EntryType, MediaType} from '../../enums'

/**
 * Ovp BE MediaEntry
 * @classdesc
 */
export default class KalturaMediaEntry {
  /**
   * @member - The entry id
   * @type {string}
   */
  id: string;
  /**
   * @member - Entry name (Min 1 chars)
   * @type {string}
   */
  name: string;
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
   * @type {EntryType}
   */
  type: EntryType;
  /**
   * @member - The type of the entry, this is auto filled by the derived entry object (Image, Audio etc.)
   * @type {MediaType}
   */
  entryType: MediaType;

  /**
   * @constructor
   * @param {Object} entry The json response
   */
  constructor(entry: Object) {
    this.id = entry.id;
    this.name = entry.name;
    this.dataUrl = entry.dataUrl;
    this.type = entry.type;
    this.entryType = entry.mediaType;
    this.flavorParamsIds = entry.flavorParamsIds;
    this.duration = entry.duration;
  }
}





