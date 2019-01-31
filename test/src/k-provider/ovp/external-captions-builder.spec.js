import {ExternalCaptionsBuilder} from '../../../../src/k-provider/ovp/external-captions-builder';

describe('external captions parser', function() {
  const playbackCaptions = [
    {
      format: '1',
      label: 'Eng',
      language: 'English',
      languageCode: 'EN',
      objectType: 'KalturaCaptionPlaybackPluginData',
      url: 'regularUrl',
      webVttUrl: 'webVttUrl'
    },
    {
      format: '3',
      label: 'FRA',
      language: 'FRENCH',
      languageCode: 'FR',
      objectType: 'KalturaCaptionPlaybackPluginData',
      url: 'regularUrl',
      webVttUrl: 'webVttUrl'
    },
    {
      format: '2',
      label: 'RUS',
      language: 'Russian',
      languageCode: 'RU',
      objectType: 'KalturaCaptionPlaybackPluginData',
      url: 'regularUrl',
      webVttUrl: 'webVttUrl'
    }
  ];

  describe('createConfig', () => {
    it('should return an empty config', () => {
      const captions = ExternalCaptionsBuilder.createConfig([]);
      captions.length.should.equal(0);
    });
    it('should return an array with 3 captions', () => {
      const captions = ExternalCaptionsBuilder.createConfig(playbackCaptions);
      captions.length.should.equal(3);
    });
    it('should return a caption with regular url with srt type', () => {
      const captions = ExternalCaptionsBuilder.createConfig([playbackCaptions[0]]);
      captions[0].url.should.equal('regularUrl');
      captions[0].type.should.equal('srt');
    });
    it('should return a caption with regular url with vtt type', () => {
      const captions = ExternalCaptionsBuilder.createConfig([playbackCaptions[1]]);
      captions[0].url.should.equal('regularUrl');
      captions[0].type.should.equal('vtt');
    });
    it('should return a caption with url : webvtturl with a vtt type', () => {
      const captions = ExternalCaptionsBuilder.createConfig([playbackCaptions[2]]);
      captions[0].url.should.equal('webVttUrl');
      captions[0].type.should.equal('vtt');
    });
  });
});
