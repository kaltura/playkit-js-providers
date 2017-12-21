import OVPProvider from '../../../../src/k-provider/ovp/provider'
import * as BE_DATA from './be-data'
import * as MEDIA_CONFIG_DATA from './media-config-data'
import {MultiRequestResult} from '../../../../src/k-provider/common/multi-request-builder'
import MultiRequestBuilder from '../../../../src/k-provider/common/multi-request-builder'
import OVPProviderMediaInfo from '../../../../src/k-provider/common/provider-media-info'
import ProviderOptions from '../../../../src/k-provider/common/provider-options'

describe('OVPProvider.partnerId:1082342', function () {
  let provider, providerOptions, sandbox;
  let partnerId = 1082342;
  let playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    providerOptions = new ProviderOptions(partnerId);
    provider = new OVPProvider(providerOptions, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins and without drm data', (done) => {
    const entryId = "1_rsrdfext";
    const mediaInfo = new OVPProviderMediaInfo(entryId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfNoDrmData);
          resolve(response);
        });
      }
    );
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
        try {
          const _mediaConfig = mediaConfig.toJSON();
          _mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.NoPluginsNoDrm);
          done();
        }
        catch (err) {
          done(err);
        }
      },
      err => {
        done(err)
      })
  });

  it('should return config with plugins and without drm data', (done) => {
    const entryId = "1_rsrdfext";
    const mediaInfo = new OVPProviderMediaInfo(entryId);
    const uiConfId = 38621471;
    providerOptions = new ProviderOptions(partnerId);
    providerOptions.uiConfId = uiConfId;
    provider = new OVPProvider(providerOptions, playerVersion);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(BE_DATA.EntryWithUIConfNoDrmData);
          resolve(response);
        });
      }
    );
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
        try {
          const _mediaConfig = mediaConfig.toJSON();
          _mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.WithPluginsNoDrm);
          done();
        }
        catch (err) {
          done(err);
        }
      },
      err => {
        done(err)
      })
  });

  it('should return config without plugins and without drm data for audio', (done) => {
    const entryId = "0_vyzw3ceu";
    const mediaInfo = new OVPProviderMediaInfo(entryId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(BE_DATA.AudioEntryWithoutPlugins);
          resolve(response);
        });
      }
    );
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
        try {
          const _mediaConfig = mediaConfig.toJSON();
          _mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.AudioEntryWithoutPlugins);
          done();
        }
        catch (err) {
          done(err);
        }
      },
      err => {
        done(err)
      })
  });

  it('should return config without plugins and without drm data for image', (done) => {
    const entryId = "0_vyzw3ceu";
    const mediaInfo = new OVPProviderMediaInfo(entryId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(BE_DATA.ImageEntryWithoutPlugins);
          resolve(response);
        });
      }
    );
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
        try {
          const _mediaConfig = mediaConfig.toJSON();
          _mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.ImageEntryWithoutPlugins);
          done();
        }
        catch (err) {
          done(err);
        }
      },
      err => {
        done(err)
      })
  });
});

describe('OVPProvider.partnerId:1068292', function () {
  let provider, providerOptions, sandbox;
  let partnerId = 1068292;
  let ks = 'NTAwZjViZWZjY2NjNTRkNGEyMjU1MTg4OGE1NmUwNDljZWJkMzk1MXwxMDY4MjkyOzEwNjgyOTI7MTQ5MDE3NjE0NjswOzE0OTAwODk3NDYuMDIyNjswO3ZpZXc6Kix3aWRnZXQ6MTs7';
  let playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    providerOptions = new ProviderOptions(partnerId);
    providerOptions.ks = ks;
    provider = new OVPProvider(providerOptions, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins with drm data', (done) => {
    const entryId = "1_rwbj3j0a";
    const mediaInfo = new OVPProviderMediaInfo(entryId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfWithDrmData);
          resolve(response);
        });
      }
    );
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
        try {
          const _mediaConfig = mediaConfig.toJSON();
          _mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.NoPluginsWithDrm);
          done();
        }
        catch (err) {
          done(err);
        }
      },
      err => {
        done(err)
      })
  });

  it('should return reject when try to get config with wrong entryId', (done) => {
    const entryId = "1_rwbj3j0affff";
    const mediaInfo = new OVPProviderMediaInfo(entryId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(BE_DATA.WrongEntryIDWithoutUIConf);
          if (response.success) {
            resolve(response);
          }
          else {
            reject(response);
          }

        });
      });
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
        done("Get config should throw error", mediaConfig)
      },
      err => {
        let expectedData = {success: false, results: MEDIA_CONFIG_DATA.entryIDError};
        err.should.deep.equal(expectedData);
        done();
      });
  });

  it('should return config with plugins and with drm data', (done) => {
    const entryId = "1_rwbj3j0a";
    const mediaInfo = new OVPProviderMediaInfo(entryId);
    const uiConfId = 38601981;
    providerOptions = new ProviderOptions(partnerId);
    providerOptions.uiConfId = uiConfId;
    providerOptions.ks = ks;
    provider = new OVPProvider(providerOptions, playerVersion);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(BE_DATA.EntryWithUIConfWithDrmData);
          resolve(response);
        });
      }
    );
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
        try {
          const _mediaConfig = mediaConfig.toJSON();
          _mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.WithPluginsWithDrm);
          done();
        }
        catch (err) {
          done(err);
        }
      },
      err => {
        done(err)
      })
  });

  it('should return reject when try to get config with wrong uiConf ID', (done) => {
    const entryId = "1_rwbj3j0a";
    const mediaInfo = new OVPProviderMediaInfo(entryId);
    const uiConfId = 38601981;
    providerOptions = new ProviderOptions(partnerId);
    providerOptions.uiConfId = uiConfId;
    providerOptions.ks = ks;
    provider = new OVPProvider(providerOptions, playerVersion);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(BE_DATA.WrongUiConfID);
          resolve(response);
        });
      });
    provider.getMediaConfig(mediaInfo).then(mediaConfig => {
        done("Get config should throw error", mediaConfig);
      },
      err => {
        let expectedData = {success: false, results: MEDIA_CONFIG_DATA.WrongUiConfID};
        err.should.deep.equal(expectedData);
        done();
      });
  });
});

describe('logger', () => {
  const partnerId = 1068292;
  const providerOptions = new ProviderOptions(partnerId);
  const playerVersion = '1.2.3';

  it('should return the current log level', () => {
    const provider = new OVPProvider(providerOptions, playerVersion);
    const currentLogLevel = provider.getLogLevel();
    currentLogLevel.should.equal(provider.LogLevel.ERROR);
  });

  it('should enable setting the current log level', () => {
    const provider = new OVPProvider(providerOptions, playerVersion);
    let currentLogLevel = provider.getLogLevel();
    currentLogLevel.should.equal(provider.LogLevel.ERROR);
    provider.setLogLevel(provider.LogLevel.WARN);
    currentLogLevel = provider.getLogLevel();
    currentLogLevel.should.equal(provider.LogLevel.WARN);
  });
});
