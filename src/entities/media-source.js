//@flow
import Drm from '../entities/drm'

/**
 * Media source
 * @classdesc
 */
export default class MediaSource {
  /**
   * @member - media source ID
   * @type {string}
   */
  id: string;
  /**
   * @member - media source URL
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
   * @constructor
   */
  constructor(){}
}

