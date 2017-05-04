//@flow

import {Scheme} from '../k-provider/enums';

/**
 * Drm data
 * @classdesc
 */
export default class Drm {

  /**
   * @member - license URL
   * @type {string}
   */
  licenseUrl: string;
  /**
   * @member - drm scheme
   * @type {Scheme}
   */
  scheme: Scheme;

  /**
   * @constructor
   * @param {string} licenseUrl -
   * @param {Scheme} scheme
   */
  constructor(licenseUrl: string, scheme: Scheme) {
    this.licenseUrl = licenseUrl;
    this.scheme = scheme;
  }
}
