import OTTProvider from '../../../../src/k-provider/ott/provider'
import * as BE_DATA from './be-data'
import * as MEDIA_CONFIG_DATA from './media-config-data'
import {MultiRequestResult} from '../../../../src/k-provider/common/multi-request-builder'
import MultiRequestBuilder from '../../../../src/k-provider/common/multi-request-builder'

const partnerId = 198;
const playerVersion = '1.2.3';

describe('OTTProvider.partnerId:198', function () {
  let provider, sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    provider = new OTTProvider({partnerId: partnerId}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins and with drm data', (done) => {
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          const response = new MultiRequestResult(BE_DATA.AnonymousEntryWithoutUIConfWithDrmData);
          resolve(response);
        });
      }
    );
    provider.getMediaConfig({entryId: 480097}).then(mediaConfig => {
      try {
        mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.NoPluginsWithDrm);
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
  const provider = new OTTProvider({partnerId: partnerId}, playerVersion);

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
