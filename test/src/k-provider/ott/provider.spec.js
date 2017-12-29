import OTTProvider from '../../../../src/k-provider/ott/provider'
import * as BE_DATA from './be-data'
import * as MEDIA_CONFIG_DATA from './media-config-data'
import {MultiRequestResult} from '../../../../src/k-provider/common/multi-request-builder'
import MultiRequestBuilder from '../../../../src/k-provider/common/multi-request-builder'
import OTTProviderMediaInfo from '../../../../src/k-provider/ott/provider-media-info'
import ProviderOptions from '../../../../src/k-provider/common/provider-options/provider-options'

const partnerId = 198;

describe('OTTProvider.partnerId:198', function () {
  let provider, providerOptions, sandbox;
  const playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    providerOptions = new ProviderOptions(partnerId);
    provider = new OTTProvider(providerOptions, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins and with drm data', (done) => {
    const entryId = 480097;
    const mediaInfo = new OTTProviderMediaInfo(entryId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          const response = new MultiRequestResult(BE_DATA.AnonymousEntryWithoutUIConfWithDrmData);
          resolve(response);
        });
      }
    );
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
      try {
        const _mediaConfig = mediaConfig.toJSON();
        _mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.NoPluginsWithDrm);
        done();
      } catch (err) {
        done(err);
      }
    }, err => {
      done(err)
    })
  });
});

describe('logger', () => {
  const providerOptions = new ProviderOptions(partnerId);
  const playerVersion = '1.2.3';
  const provider = new OTTProvider(providerOptions, playerVersion);

  afterEach(() => {
    provider.setLogLevel(provider.LogLevel.ERROR);
  });

  it('should return the current log level', () => {
    const currentLogLevel = provider.getLogLevel();
    currentLogLevel.should.equal(provider.LogLevel.ERROR);
  });

  it('should enable setting the current log level', () => {
    let currentLogLevel = provider.getLogLevel();
    currentLogLevel.should.equal(provider.LogLevel.ERROR);
    provider.setLogLevel(provider.LogLevel.WARN);
    currentLogLevel = provider.getLogLevel();
    currentLogLevel.should.equal(provider.LogLevel.WARN);
  });
});
