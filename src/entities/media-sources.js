// @flow
import MediaSource from './media-source'
import {MediaFormat} from './media-format'

/**
 * Container for the media sources aggregated by stream format.
 * @classdesc
 */
export default class MediaSources {
  /**
   * Progressive download media sources container.
   * @type {Array<MediaSource>}
   * @public
   */
  progressive: Array<MediaSource>;
  /**
   * Dash media sources container.
   * @type {Array<MediaSource>}
   * @public
   */
  dash: Array<MediaSource>;
  /**
   * Hls media sources container.
   * @type {Array<MediaSource>}
   * @public
   */
  hls: Array<MediaSource>;

  /**
   * @constructor
   */
  constructor() {
    this.progressive = [];
    this.dash = [];
    this.hls = [];
  }

  /**
   * Maps the source to one of the containers according to his media format.
   * @param {MediaSource} source - The source to add to one of the containers.
   * @param {MediaFormat} mediaFormat - The media format of the source.
   * @returns {void}
   */
  map(source: MediaSource, mediaFormat: ?MediaFormat) {
    if (mediaFormat) {
      switch (mediaFormat.name) {
        case 'mp4':
          this.progressive.push(source);
          break;
        case 'dash':
          this.dash.push(source);
          break;
        case 'hls':
          this.hls.push(source);
          break;
        default:
          break;
      }
    }
  }
}
