import {ProviderDrmDataObject} from '../types';

export default class Drm {
  /**
   * @member - license url
   * @type {string}
   */
  public licenseUrl: string;
  /**
   * @member - drm scheme
   * @type {string}
   */
  public scheme: string;

  /**
   * @member - drm certificate
   * @type {string}
   */
  public certificate?: string;

  /**
   * @constructor
   * @param {string} licenseUrl - the license url
   * @param {string} scheme - the drm scheme
   * @param {?string} certificate - the drm certificate
   */
  constructor(licenseUrl: string, scheme: string, certificate?: string) {
    this.licenseUrl = licenseUrl;
    this.scheme = scheme;
    if (certificate) {
      this.certificate = certificate;
    }
  }

  /**
   * Convert class to native js object.
   * @returns {ProviderDrmDataObject} - The json class object.
   */
  public toJSON(): ProviderDrmDataObject {
    const response: ProviderDrmDataObject = {
      licenseUrl: this.licenseUrl,
      scheme: this.scheme
    };
    if (this.certificate) response.certificate = this.certificate;
    return response;
  }
}
