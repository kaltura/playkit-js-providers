//@flow
export default class KalturaDrmPlaybackPluginData {
  static Scheme: {[scheme: string]: string} = {
    'drm.PLAYREADY_CENC': 'com.microsoft.playready',
    'drm.WIDEVINE_CENC': 'com.widevine.alpha',
    'fairplay.FAIRPLAY': 'com.apple.fairplay',
    WIDEVINE_CENC: 'com.widevine.alpha',
    PLAYREADY_CENC: 'com.microsoft.playready',
    FAIRPLAY: 'com.apple.fairplay'
  };

  /**
   * @member - The drm scheme
   * @type {string}
   */
  scheme: string;

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
