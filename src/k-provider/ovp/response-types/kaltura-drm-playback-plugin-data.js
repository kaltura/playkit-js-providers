//@flow
import {Scheme} from '../../enums'

/**
 * Ovp BE DrmPlaybackPluginData
 * @classdesc
 */
export default class KalturaDrmPlaybackPluginData {
  /**
   * @member - The drm scheme
   * @type {Scheme}
   */
  scheme: Scheme;

  /**
   * @member - The license URL
   * @type {string}
   */
  licenseURL: string;

  /**
   * @member - The drm certificate
   * @type {?string}
   */
  certificate: ?string;

  /**
   * @constructor
   * @param {Object} drm The json response
   */
  constructor(drm: any) {
    this.scheme = drm.scheme;
    this.licenseURL = drm.licenseURL;
    this.certificate = drm.certificate;
  }
}


