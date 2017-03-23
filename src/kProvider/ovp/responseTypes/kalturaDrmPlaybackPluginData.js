// @flow
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
   * @constructor
   * @param {Object} The json response
   */
  constructor(drm: any) {
    this.scheme = drm.scheme;
    this.licenseURL = drm.licenseURL;
  }
}


