//@flow
import Drm from './drm'
import type {DrmObject} from './drm'

export type MediaSourceObject = {
  id: string,
  url: string,
  mimetype: string,
  bandwidth?: number,
  width?: number,
  height?: number,
  label?: string,
  drmData?: Array<DrmObject>
};

export default class MediaSource {
  /**
   * @member - media source id
   * @type {string}
   */
  id: string;
  /**
   * @member - media source url
   * @type {string}
   */
  url: string;
  /**
   * @member - media source mimetype
   * @type {string}
   */
  mimetype: string;
  /**
   * @member - media source drm data
   * @type {Array<Drm>}
   */
  drmData: Array<Drm>;
  /**
   * @member - media source bandwidth
   * @type {number}
   */
  bandwidth: number;
  /**
   * @member - media source width
   * @type {number}
   */
  width: number;
  /**
   * @member - media source height
   * @type {number}
   */
  height: number;
  /**
   * @member - media source label
   * @type {string}
   */
  label: string;

  /**
   * Convert class to native js object.
   * @returns {MediaSourceObject} - The json class object.
   */
  toJSON(): MediaSourceObject {
    const response: MediaSourceObject = {
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
      this.drmData.forEach(d => {
        if (Array.isArray(response.drmData)) {
          response.drmData.push(d.toJSON());
        }
      });
    }
    return response;
  }
}
