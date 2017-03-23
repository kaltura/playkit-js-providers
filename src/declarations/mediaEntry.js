// @flow

import MediaSource from './mediaSource'
import {MediaEntryType} from '../kProvider/enums'

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
   * @type {Array<MediaSource>}
   */
  sources: Array<MediaSource>;
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
  metaData: Map<string,string>;

  /**
   * @constructor
   */
  constructor() {
    this.metaData = new Map();
    this.type = MediaEntryType.Unknown;
  }


}
