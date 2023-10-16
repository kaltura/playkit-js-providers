const youtubeMediaEntryData = [
  '',
  1740481,
  null,
  {
    entry: {
      id: '1234',
      status: 2,
      referenceId: 'abcdefg',
      externalSourceType: 'YouTube',
      name: 'test youtube entry',
      description: 'youtube description',
      dataUrl: 'https://cdnapisec.kaltura.com/p/1111/sp/1111/playManifest/entryId/1234/format/url/protocol/https',
      type: 'externalMedia.externalMedia',
      entryType: 1,
      duration: 0,
      poster: 'https://cfvod.kaltura.com/p/1111/sp/1111/thumbnail/entry_id/1234/version/100001',
      tags: '',
      downloadUrl: ''
    },
    playBackContextResult: {
      hasError: false,
      data: {
        sources: [],
        playbackCaptions: [
          {
            label: 'Hebrew',
            format: '1',
            language: 'Hebrew',
            webVttUrl:
              'https://cfvod.kaltura.com/api_v3/index.php/service/caption_captionasset/action/serveWebVTT/captionAssetId/1_kwipd4sf/segmentIndex/-1/version/1/captions.vtt',
            url: 'https://cfvod.kaltura.com/api_v3/index.php/service/caption_captionAsset/action/serve/captionAssetId/1_kwipd4sf',
            isDefault: true,
            languageCode: 'he',
            objectType: 'KalturaCaptionPlaybackPluginData'
          }
        ],
        flavorAssets: [],
        actions: [],
        messages: [],
        objectType: 'KalturaPlaybackContext'
      },
      sources: [],
      actions: [],
      messages: [],
      flavorAssets: []
    },
    metadataListResult: {
      hasError: false,
      data: {
        objects: [],
        totalCount: 0,
        objectType: 'KalturaMetadataListResponse'
      },
      totalCount: 0
    }
  }
];

const youtubeMediaEntryResult = {
  id: '1234',
  status: 2,
  sources: {
    progressive: [
      {
        id: '1234_youtube',
        url: 'abcdefg',
        mimetype: 'video/youtube'
      }
    ],
    dash: [],
    hls: [],
    image: []
  },
  duration: 0,
  metadata: {
    entryId: '1234',
    description: 'youtube description',
    name: 'test youtube entry',
    tags: ''
  },
  type: 'Unknown',
  poster: 'https://cfvod.kaltura.com/p/1111/sp/1111/thumbnail/entry_id/1234/version/100001'
};

const liveMediaEntryData = [
  '',
  1740481,
  null,
  {
    entry: {
      id: '1234',
      status: 2,
      referenceId: 'abcdefg',
      name: 'test live entry',
      description: 'live description',
      dataUrl: 'https://cdnapisec.kaltura.com/p/1111/sp/1111/playManifest/entryId/1234/format/url/protocol/https',
      type: 7,
      entryType: 7,
      duration: 0,
      poster: 'https://cfvod.kaltura.com/p/1111/sp/1111/thumbnail/entry_id/1234/version/100001',
      tags: '',
      downloadUrl: ''
    },
    playBackContextResult: {
      hasError: false,
      data: {
        sources: [],
        playbackCaptions: [
          {
            label: 'Hebrew',
            format: '1',
            language: 'Hebrew',
            webVttUrl:
              'https://cfvod.kaltura.com/api_v3/index.php/service/caption_captionasset/action/serveWebVTT/captionAssetId/1_kwipd4sf/segmentIndex/-1/version/1/captions.vtt',
            url: 'https://cfvod.kaltura.com/api_v3/index.php/service/caption_captionAsset/action/serve/captionAssetId/1_kwipd4sf',
            isDefault: true,
            languageCode: 'he',
            objectType: 'KalturaCaptionPlaybackPluginData'
          }
        ],
        flavorAssets: [],
        actions: [],
        messages: [],
        objectType: 'KalturaPlaybackContext'
      },
      sources: [],
      actions: [],
      messages: [],
      flavorAssets: []
    },
    metadataListResult: {
      hasError: false,
      data: {
        objects: [],
        totalCount: 0,
        objectType: 'KalturaMetadataListResponse'
      },
      totalCount: 0
    }
  }
];

export {youtubeMediaEntryData, youtubeMediaEntryResult, liveMediaEntryData};
