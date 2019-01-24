const youtubeMediaEntryData = [
  '',
  1740481,
  null,
  {
    entry: {
      id: '1234',
      referenceId: 'abcdefg',
      externalSourceType: 'YouTube',
      name: 'test youtube entry',
      description: 'youtube description',
      dataUrl: 'https://cdnapisec.kaltura.com/p/1111/sp/1111/playManifest/entryId/1234/format/url/protocol/https',
      type: 'externalMedia.externalMedia',
      entryType: 1,
      duration: 0,
      poster: 'https://cfvod.kaltura.com/p/1111/sp/1111/thumbnail/entry_id/1234/version/100001',
      tags: ''
    },
    playBackContextResult: {
      hasError: false,
      data: {
        sources: [],
        playbackCaptions: [],
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
    captions: []
  },
  duration: 0,
  metadata: {
    description: 'youtube description',
    name: 'test youtube entry',
    tags: ''
  },
  type: 'Unknown',
  poster: 'https://cfvod.kaltura.com/p/1111/sp/1111/thumbnail/entry_id/1234/version/100001'
};

export {youtubeMediaEntryData, youtubeMediaEntryResult};
