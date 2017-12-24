//@flow
export type DrmObject = {
  licenseUrl: string,
  scheme: string,
  certificate?: string
};

export default class Drm {
  /**
   * @member - license url
   * @type {string}
   */
  licenseUrl: string;
  /**
   * @member - drm scheme
   * @type {string}
   */
  scheme: string;

  /**
   * @member - drm certificate
   * @type {string}
   */
  certificate: string;

  /**
   * @constructor
   * @param {string} licenseUrl - the license url
   * @param {string} scheme - the drm scheme
   * @param {?string} certificate - the drm certificate
   */
  constructor(licenseUrl: string, scheme: string, certificate: ?string) {
    this.licenseUrl = licenseUrl;
    this.scheme = scheme;
    if (certificate) {
      this.certificate = certificate;
    }
  }

  /**
   * Convert class to native js object.
   * @returns {DrmObject} - The json class object.
   */
  toJSON(): DrmObject {
    const response: DrmObject = {
      licenseUrl: this.licenseUrl,
      scheme: this.scheme
    };
    if (this.certificate) response.certificate = this.certificate;
    return response;
  }
}
