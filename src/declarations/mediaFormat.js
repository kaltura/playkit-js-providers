// @flow

import {Enum} from 'enumify';

export class MediaFormat extends Enum {

}

MediaFormat.initEnum({
  mp4_clear: {
    get mimeType() {
      return "video/mp4";
    },
    get pathExt() {
      return "mp4";
    }
  },
  dash_clear: {
    get mimeType() {
      return "application/dash+xml";
    },
    get pathExt() {
      return "mpd";
    }
  },
  dash_drm: {
    get mimeType() {
      return "application/dash+xml";
    },
    get pathExt() {
      return "mpd";
    }
  },
  wvm_widevine: {
    get mimeType() {
      return "video/wvm";
    },
    get pathExt() {
      return "wvm";
    }
  },
  hls_clear: {
    get mimeType() {
      return "application/x-mpegURL"
    },
    get pathExt() {
      return "m3u8";
    }
  }
});


