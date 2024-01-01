import Drm from './drm';
import { ProviderMediaSourceObject } from '../types';

export default class MediaSource {
  /**
   * @member - media source id
   * @type {string}
   */
  public id!: string;
  /**
   * @member - media source url
   * @type {string}
   */
  public url!: string;
  /**
   * @member - media source mimetype
   * @type {string}
   */
  public mimetype!: string;
  /**
   * @member - media source drm data
   * @type {Array<Drm>}
   */
  public drmData?: Array<Drm>;
  /**
   * @member - media source bandwidth
   * @type {number}
   */
  public bandwidth?: number;
  /**
   * @member - media source width
   * @type {number}
   */
  public width?: number;
  /**
   * @member - media source height
   * @type {number}
   */
  public height?: number;
  /**
   * @member - media source label
   * @type {string}
   */
  public label?: string;

  /**
   * Convert class to native js object.
   * @returns {ProviderMediaSourceObject} - The json class object.
   */
  public toJSON(): ProviderMediaSourceObject {
    const response: ProviderMediaSourceObject = {
      id: this.id,
      url: this.url,
      mimetype: this.mimetype
    };
    if (this.bandwidth) response.bandwidth = this.bandwidth;
    if (this.width) response.width = this.width;
    if (this.height) response.height = this.height;
    if (this.label) response.label = this.label;
    if (this.drmData && this.drmData.length > 0) {
      response.drmData = [];
      this.drmData.forEach((d) => {
        if (Array.isArray(response.drmData)) {
          response.drmData.push(d.toJSON());
        }
      });
    }
    return response;
  }
}
