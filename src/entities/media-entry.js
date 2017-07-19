//@flow
import {MediaEntryTypes} from '../k-provider/enums'
import MediaSources from './media-sources'

/**
 * Media entry
 * @classdesc
 */
export default class MediaEntry {

  /**
   * @member - entry ID
   * @type {string}
   */
  id: string;
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
   * @type {MediaEntryType}
   */
  type: MediaEntryType;
  /**
   * @member - entry metadata
   * @type {Map<string,string>}
   */
  metaData: Map<string, string>;

  /**
   * @constructor
   */
  constructor() {
    this.metaData = new Map();
    this.type = MediaEntryTypes.Unknown;
  }
}
