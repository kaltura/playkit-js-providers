//@flow
import {Enum} from 'enumify';

export class MediaFormat extends Enum {
}
MediaFormat.initEnum({
  dash: {
    get mimeType() {
      return "application/dash+xml";
    },
    get pathExt() {
      return "mpd";
    }
  },
  hls: {
    get mimeType() {
      return "application/x-mpegURL";
    },
    get pathExt() {
      return "m3u8";
    }
  },
  wvm: {
    get mimeType() {
      return "video/wvm";
    },
    get pathExt() {
      return "wvm";
    }
  },
  mp4: {
    get mimeType() {
      return "video/mp4";
    },
    get pathExt() {
      return "mp4";
    }
  },
  mp3: {
    get mimeType() {
      return "audio/mpeg";
    },
    get pathExt() {
      return "mp3";
    }
  },
  fairplay: {
    get mimeType() {
      return "application/vnd.apple.mpegurl"
    },
    get pathExt() {
      return "m3u8";
    }
  }
});



