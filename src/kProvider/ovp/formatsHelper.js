//@flow
import {MediaFormat} from '../../declarations/mediaFormat'

/**
 * @constant
 * @type {Map<string, MediaFormat>}
 */
const SUPPORTED_FORMATS: Map<string, MediaFormat> = new Map([
  ["mpegdash", MediaFormat.dash],
  ["applehttp", MediaFormat.hls],
  ["fairplay", MediaFormat.fairplay],
  ["url", MediaFormat.mp4],
  ["url+drm", MediaFormat.wvm]
]);

/**
 * Media formats helper
 * @classdesc
 */
export default class FormatsHelper {

  /**
   * Returns media format by given format and DRM existence
   * @function getMediaFormat
   * @param {string} format
   * @param hasDrm
   * @returns {MediaFormat}
   * @static
   */
  static getMediaFormat(format: string, hasDrm: boolean): MediaFormat {
    switch (format) {
      case "mpegdash":
        return SUPPORTED_FORMATS.get("mpegdash");
      case "url":
        return hasDrm ? SUPPORTED_FORMATS.get("url+drm") : SUPPORTED_FORMATS.get("url");
      case "applehttp":
        return hasDrm ? SUPPORTED_FORMATS.get("fairplay") : SUPPORTED_FORMATS.get("applehttp");
    }
  }
}

