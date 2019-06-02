// @flow
import MediaSource from './media-source';
import {MediaFormat} from './media-format';

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
  captions: Array<PKExternalCaptionObject>;

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
  map(source: MediaSource, mediaFormat: ?ProviderMediaFormatType) {
    if (mediaFormat) {
      switch (mediaFormat.name) {
        case MediaFormat.MP4.name:
          this.progressive.push(source);
          break;
        case MediaFormat.DASH.name:
          this.dash.push(source);
          break;
        case MediaFormat.HLS.name:
          this.hls.push(source);
          break;
        default:
          break;
      }
    }
  }

  /**
   * Convert class to native js object.
   * @returns {ProviderMediaSourcesObject} - The json class object.
   */
  toJSON(): ProviderMediaSourcesObject {
    const response: ProviderMediaSourcesObject = {
      progressive: [],
      dash: [],
      hls: []
    };
    this.progressive.forEach(p => response.progressive.push(p.toJSON()));
    this.hls.forEach(h => response.hls.push(h.toJSON()));
    this.dash.forEach(d => response.dash.push(d.toJSON()));
    return response;
  }
}
