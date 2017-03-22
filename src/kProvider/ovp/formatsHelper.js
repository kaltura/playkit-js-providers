// @flow

import {MediaFormat} from '../../declarations/mediaFormat'

const SUPPORTED_FORMATS: Map<string, MediaFormat> = new Map([
  ["mpegdash", MediaFormat.dash_clear],
  ["mpegdash+drm", MediaFormat.dash_drm],
  ["applehttp", MediaFormat.hls_clear],
  ["url", MediaFormat.mp4_clear],
  ["url+drm", MediaFormat.wvm_widevine]
]);

export default class FormatsHelper {

  static getMediaFormat(format: string, hasDrm: boolean): MediaFormat {

    switch (format) {
      case "mpegdash":
        return hasDrm ? SUPPORTED_FORMATS.get("mpegdash+drm") : SUPPORTED_FORMATS.get("mpegdash");
      case "url":
        return hasDrm ? SUPPORTED_FORMATS.get("url+drm") : SUPPORTED_FORMATS.get("url");
      case "applehttp":
        return hasDrm ? null : SUPPORTED_FORMATS.get("applehttp");
    }
  }

}

