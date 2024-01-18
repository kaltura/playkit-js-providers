import MediaSource from './media-source';
import {MediaFormat} from './media-format';
import {ImageSource} from './image-source';
import {DocumentSource} from './document-source';
import {PKExternalCaptionObject, ProviderMediaFormatType, ProviderMediaSourcesObject} from '../types';

export default class MediaSources {
  /**
   * Progressive download media sources container.
   * @type {Array<MediaSource>}
   * @public
   */
  public progressive: Array<MediaSource>;
  /**
   * Dash media sources container.
   * @type {Array<MediaSource>}
   * @public
   */
  public dash: Array<MediaSource>;
  /**
   * Hls media sources container.
   * @type {Array<MediaSource>}
   * @public
   */
  public hls: Array<MediaSource>;
  public image: Array<ImageSource>;
  public document: Array<DocumentSource>;
  public captions?: Array<PKExternalCaptionObject>;

  /**
   * @constructor
   */
  constructor() {
    this.progressive = [];
    this.dash = [];
    this.hls = [];
    this.image = [];
    this.document = [];
  }

  /**
   * Maps the source to one of the containers according to his media format.
   * @param {MediaSource} source - The source to add to one of the containers.
   * @param {MediaFormat} mediaFormat - The media format of the source.
   * @returns {void}
   */
  public map(source: MediaSource, mediaFormat?: ProviderMediaFormatType): void {
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
  public toJSON(): ProviderMediaSourcesObject {
    const response: ProviderMediaSourcesObject = {
      progressive: [],
      dash: [],
      hls: [],
      image: [],
      document: []
    };
    this.progressive.forEach(p => response.progressive.push(p.toJSON()));
    this.hls.forEach(h => response.hls.push(h.toJSON()));
    this.dash.forEach(d => response.dash.push(d.toJSON()));
    response.image = this.image;
    response.document = this.document;
    return response;
  }
}
