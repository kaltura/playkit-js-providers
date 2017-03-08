// @flow

import {MediaFormat} from '../../../declarations/mediaFormat'


export default class FormatsHelper {

  static getSupportedFormats(): Map<string,MediaFormat> {
    let supportedFormats: Map<string, MediaFormat> = new Map();
    supportedFormats.set("mpegdash", MediaFormat.dash_clear);
    supportedFormats.set("mpegdash+drm", MediaFormat.dash_drm);
    supportedFormats.set("applehttp", MediaFormat.hls_clear);
    supportedFormats.set("url", MediaFormat.mp4_clear);
    supportedFormats.set("url+drm", MediaFormat.wvm_widevine);
    return supportedFormats;
  }

  static getMediaFormat(format: string, hasDrm: boolean): MediaFormat {
    let supportedFormats:Map<string,MediaFormat> = this.getSupportedFormats();
    switch (format){
      case "mpegdash":
        return hasDrm ? supportedFormats.get("mpegdash+drm") : supportedFormats.get("mpegdash");
      case "url":
        return hasDrm ? supportedFormats.get("url+drm") : supportedFormats.get("url");
      case "applehttp":
        return hasDrm ? null : supportedFormats.get("applehttp");

    }
  }


}

