import KalturaPlaybackSource from '../../../../src/k-provider/ovp/response-types/kaltura-playback-source';

export const kalturaSourceProtocolMismatch = new KalturaPlaybackSource({
  format: 'applehttp',
  deliveryProfileId: 12345,
  url: 'myUrl',
  protocols: 'http',
  flavorIds: '0_mw390bu0,0_bx6b5i2a,0_ao23nl3z,0_lwxuraqs'
});
export const kalturaSourceProtocolMismatchFlavorAssets = [
  {
    id: '0_mw390bu0',
    flavorParamsId: 487041,
    fileExt: 'mp4',
    bitrate: 474,
    width: 640,
    height: 360,
    frameRate: 30,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  },
  {
    id: '0_bx6b5i2a',
    flavorParamsId: 487051,
    fileExt: 'mp4',
    bitrate: 672,
    width: 854,
    height: 480,
    frameRate: 30,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  },
  {
    id: '0_ao23nl3z',
    flavorParamsId: 487061,
    fileExt: 'mp4',
    bitrate: 964,
    width: 960,
    height: 540,
    frameRate: 30,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  },
  {
    id: '0_lwxuraqs',
    flavorParamsId: 487071,
    fileExt: 'mp4',
    bitrate: 1628,
    width: 1280,
    height: 720,
    frameRate: 30,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  }
];
export const kalturaDashSource = new KalturaPlaybackSource({
  format: 'mpegdash',
  deliveryProfileId: 911,
  url: 'myUrl',
  protocols: 'http,https',
  flavorIds: '0_m131krws,0_5407xm9j,0_xcrwyk2n'
});
export const kalturaDashSourceFlavorAssets = [
  {
    id: '0_ep7yqavp',
    flavorParamsId: 582941,
    fileExt: 'mp4',
    bitrate: 65,
    width: 0,
    height: 0,
    frameRate: 0,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    status: 2,
    language: 'English'
  },
  {
    id: '0_1xcr8gnf',
    flavorParamsId: 583327,
    fileExt: 'mp4',
    bitrate: 65,
    width: 0,
    height: 0,
    frameRate: 0,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    status: 2,
    language: 'Spanish'
  },
  {
    id: '0_h65mfj7f',
    flavorParamsId: 2,
    fileExt: 'mp4',
    bitrate: 469,
    width: 480,
    height: 272,
    frameRate: 25,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  },
  {
    id: '0_3flmvnwc',
    flavorParamsId: 3,
    fileExt: 'mp4',
    bitrate: 670,
    width: 640,
    height: 360,
    frameRate: 25,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  },
  {
    id: '0_m131krws',
    flavorParamsId: 4,
    fileExt: 'mp4',
    bitrate: 964,
    width: 640,
    height: 360,
    frameRate: 25,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  },
  {
    id: '0_5407xm9j',
    flavorParamsId: 5,
    fileExt: 'mp4',
    bitrate: 1628,
    width: 1280,
    height: 720,
    frameRate: 25,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  },
  {
    id: '0_xcrwyk2n',
    flavorParamsId: 6,
    fileExt: 'mp4',
    bitrate: 2628,
    width: 1280,
    height: 720,
    frameRate: 25,
    isOriginal: false,
    isWeb: true,
    containerFormat: 'isom',
    videoCodecId: 'avc1',
    status: 2,
    language: 'Undefined'
  }
];
