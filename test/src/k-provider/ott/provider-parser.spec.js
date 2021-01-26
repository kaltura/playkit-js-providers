import OTTProviderParser from '../../../../src/k-provider/ott/provider-parser';
import {MediaLiveAssetData} from './be-data';

describe('provider parser', function () {
  describe('_getMediaType', () => {
    it('should check KalturaLiveAsset with externalIds returns live with dvr false', done => {
      const typeData = OTTProviderParser._getMediaType(MediaLiveAssetData, 'media', 'PLAYBACK');
      typeData.type.should.equal('Live');
      typeData.dvrStatus.should.equal(0);
      done();
    });
    it('should check KalturaLiveAsset with trickPlay false returns live with dvr false', done => {
      const MediaLiveAssetDataCopy = JSON.parse(JSON.stringify(MediaLiveAssetData));
      MediaLiveAssetDataCopy.externalIds = 0;
      MediaLiveAssetDataCopy.enableTrickPlay = false;
      const typeData = OTTProviderParser._getMediaType(MediaLiveAssetDataCopy, 'media', 'PLAYBACK');
      typeData.type.should.equal('Live');
      typeData.dvrStatus.should.equal(0);
      done();
    });
    it('should check KalturaLiveAsset with trickPlay true returns live with dvr true', done => {
      const MediaLiveAssetDataCopy = JSON.parse(JSON.stringify(MediaLiveAssetData));
      MediaLiveAssetDataCopy.externalIds = 0;
      const typeData = OTTProviderParser._getMediaType(MediaLiveAssetDataCopy, 'media', 'PLAYBACK');
      typeData.type.should.equal('Live');
      typeData.dvrStatus.should.equal(1);
      done();
    });
  });
});
