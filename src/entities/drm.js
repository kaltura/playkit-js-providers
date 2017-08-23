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
   * @member - The drm certificate
   * @type {?string}
   */
  certificate: ?string;

  /**
   * @constructor
   * @param {string} licenseUrl - the license URL
   * @param {Scheme} scheme - the drm scheme
   * @param {?string} certificate - the drm certificate
   */
  constructor(licenseUrl: string, scheme: Scheme, certificate: ?string) {
    this.licenseUrl = licenseUrl;
    this.scheme = scheme;
    this.certificate = certificate;
  }
}
