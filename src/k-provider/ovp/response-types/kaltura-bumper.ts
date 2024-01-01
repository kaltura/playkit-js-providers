import { KalturaPlaybackSource } from './kaltura-playback-source';

export class KalturaBumper {
  /**
   * @member - The bumper entry ID
   * @type {string}
   */
  public entryId: string;
  /**
   * @member - The bumper click through url
   * @type {string}
   */
  public clickThroughUrl: string;
  /**
   * @member - The bumper sources
   * @type {Array<KalturaPlaybackSource>}
   */
  public sources: Array<KalturaPlaybackSource>;

  constructor(data: any) {
    this.entryId = data.entryId;
    this.clickThroughUrl = data.url;
    this.sources = data.sources ? data.sources.map((source) => new KalturaPlaybackSource(source)) : [];
  }
}
