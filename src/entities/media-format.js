//@flow
export class MediaFormats {
  static dash: MediaFormat = {
    name: 'dash',
    mimeType: "application/dash+xml",
    pathExt: "mpd"
  };

  static hls: MediaFormat = {
    name: 'hls',
    mimeType: "application/x-mpegURL",
    pathExt: "m3u8"
  };

  static wvm: MediaFormat = {
    name: 'wvm',
    mimeType: "video/wvm",
    pathExt: "wvm"
  };

  static mp4: MediaFormat = {
    name: 'mp4',
    mimeType: "video/mp4",
    pathExt: "mp4"
  };

  static mp3: MediaFormat = {
    name: 'mp3',
    mimeType: "audio/mpeg",
    pathExt: "mp3"
  };
}
