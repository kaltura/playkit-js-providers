//@flow
import KalturaPlaybackSource from './kaltura-playback-source';

export default class KalturaBumper {
  /**
   * @member - The bumper entry ID
   * @type {string}
   */
  entryId: string;
  /**
   * @member - The bumper click through url
   * @type {string}
   */
  clickThroughUrl: string;
  /**
   * @member - The bumper sources
   * @type {Array<KalturaPlaybackSource>}
   */
  sources: Array<KalturaPlaybackSource>;

  constructor(data: any) {
    this.entryId = data.entryId;
    this.clickThroughUrl = data.url;
    this.sources = data.sources ? data.sources.map(source => new KalturaPlaybackSource(source)) : [];
  }
}
