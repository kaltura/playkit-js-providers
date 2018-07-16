//@flow
export const MediaFormat: {[name: string]: ProviderMediaFormatType} = {
  DASH: {
    name: 'dash',
    mimeType: 'application/dash+xml',
    pathExt: 'mpd'
  },
  HLS: {
    name: 'hls',
    mimeType: 'application/x-mpegURL',
    pathExt: 'm3u8'
  },
  WVM: {
    name: 'wvm',
    mimeType: 'video/wvm',
    pathExt: 'wvm'
  },
  MP4: {
    name: 'mp4',
    mimeType: 'video/mp4',
    pathExt: 'mp4'
  },
  MP3: {
    name: 'mp3',
    mimeType: 'audio/mpeg',
    pathExt: 'mp3'
  }
};

export const SupportedStreamFormat: Map<string, ProviderMediaFormatType> = new Map([
  ['mpegdash', MediaFormat.DASH],
  ['applehttp', MediaFormat.HLS],
  ['url', MediaFormat.MP4]
]);
