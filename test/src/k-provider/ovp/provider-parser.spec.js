import OVPProviderParser from '../../../../src/k-provider/ovp/provider-parser';
import playbackContext from '../../../../src/k-provider/ovp/response-types/kaltura-playback-context';
import {
  kalturaDashSource,
  kalturaProgressiveSourceNotSecured,
  kalturaProgressiveSourceSecured,
  kalturaProgressive,
  kalturaDashSourceFlavorAssets,
  kalturaSourceProtocolMismatch,
  kalturaSourceProtocolMismatchFlavorAssets
} from './playback-sources-data';
import {youtubeMediaEntryResult, youtubeMediaEntryData} from './provider-parser-data';

describe('provider parser', function() {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });
  describe('_parseAdaptiveSource', () => {
    it('should return a valid adaptive source for a valid input', () => {
      const context = new playbackContext({});
      context.flavorAssets = kalturaDashSourceFlavorAssets;
      const adaptiveSource = OVPProviderParser._parseAdaptiveSource(kalturaDashSource, context, 'myKS', 'myPid', 1234, 1234);
      adaptiveSource.should.exist;
      adaptiveSource.id.should.equal('1234_911,mpegdash');
      adaptiveSource.mimetype.should.equal('application/dash+xml');
      adaptiveSource.url.should.be.a('string');
    });
    it('should return null if play url is empty', () => {
      const context = new playbackContext({});
      context.flavorAssets = kalturaSourceProtocolMismatchFlavorAssets;
      const adaptiveSource = OVPProviderParser._parseAdaptiveSource(kalturaSourceProtocolMismatch, context, 'myKS', 'myPid', 1234, 1234);
      (adaptiveSource === null).should.be.true;
    });
  });
  describe('_parseProgressiveSource', () => {
    it('should return a valid progressive sources when getting separate http/s', () => {
      const context = new playbackContext({});
      context.flavorAssets = kalturaDashSourceFlavorAssets;
      const progressiveSource = OVPProviderParser._getParsedSources(
        [kalturaProgressiveSourceNotSecured, kalturaProgressiveSourceSecured],
        'myKS',
        1234,
        1234,
        {
          id: '1_938734'
        },
        context
      );
      progressiveSource.should.exist;
    });
    it('should return a valid progressive source for a valid input', () => {
      const context = new playbackContext({});
      context.flavorAssets = kalturaDashSourceFlavorAssets;
      const progressiveSource = OVPProviderParser._getParsedSources(
        [kalturaProgressive],
        'myKS',
        1234,
        1234,
        {
          id: '1_938734'
        },
        context
      );
      progressiveSource.should.exist;
    });
  });
  describe('getMediaEntry', () => {
    it('should return a valid youtube source for a valid input', () => {
      const mediaEntry = OVPProviderParser.getMediaEntry(...youtubeMediaEntryData);
      mediaEntry.should.deep.equal(youtubeMediaEntryResult);
    });
  });
});
