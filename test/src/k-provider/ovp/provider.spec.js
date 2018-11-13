import OVPProvider from '../../../../src/k-provider/ovp/provider';
import * as BE_DATA from './be-data';
import * as MEDIA_CONFIG_DATA from './media-config-data';
import {MultiRequestResult} from '../../../../src/k-provider/common/multi-request-builder';
import MultiRequestBuilder from '../../../../src/k-provider/common/multi-request-builder';

describe('OVPProvider.partnerId:1082342', function() {
  let provider, sandbox;
  const partnerId = 1082342;
  const playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    provider = new OVPProvider({partnerId: partnerId}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins and without drm data', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function() {
      return new Promise(resolve => {
        const response = new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfNoDrmData);
        resolve(response);
      });
    });
    provider.getMediaConfig({entryId: '1_rsrdfext'}).then(
      mediaConfig => {
        try {
          mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.NoPluginsNoDrm);
          done();
        } catch (err) {
          done(err);
        }
      },
      err => {
        done(err);
      }
    );
  });

  it('should return config with plugins and without drm data', done => {
    provider = new OVPProvider({partnerId: partnerId, uiConfId: 38621471}, playerVersion);
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function() {
      return new Promise(resolve => {
        const response = new MultiRequestResult(BE_DATA.EntryWithUIConfNoDrmData);
        resolve(response);
      });
    });
    provider.getMediaConfig({entryId: '1_rsrdfext'}).then(
      mediaConfig => {
        try {
          mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.WithPluginsNoDrm);
          done();
        } catch (err) {
          done(err);
        }
      },
      err => {
        done(err);
      }
    );
  });

  it('should return config without plugins and without drm data for audio', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function() {
      return new Promise(resolve => {
        const response = new MultiRequestResult(BE_DATA.AudioEntryWithoutPlugins);
        resolve(response);
      });
    });
    provider.getMediaConfig({entryId: '0_vyzw3ceu'}).then(
      mediaConfig => {
        try {
          mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.AudioEntryWithoutPlugins);
          done();
        } catch (err) {
          done(err);
        }
      },
      err => {
        done(err);
      }
    );
  });

  it('should return config without plugins and without drm data for image', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function() {
      return new Promise(resolve => {
        const response = new MultiRequestResult(BE_DATA.ImageEntryWithoutPlugins);
        resolve(response);
      });
    });
    provider.getMediaConfig({entryId: '0_vyzw3ceu'}).then(
      mediaConfig => {
        try {
          mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.ImageEntryWithoutPlugins);
          done();
        } catch (err) {
          done(err);
        }
      },
      err => {
        done(err);
      }
    );
  });
});

describe('OVPProvider.partnerId:1068292', function() {
  let provider, sandbox;
  const partnerId = 1068292;
  const ks =
    'NTAwZjViZWZjY2NjNTRkNGEyMjU1MTg4OGE1NmUwNDljZWJkMzk1MXwxMDY4MjkyOzEwNjgyOTI7MTQ5MDE3NjE0NjswOzE0OTAwODk3NDYuMDIyNjswO3ZpZXc6Kix3aWRnZXQ6MTs7';
  const playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    provider = new OVPProvider({partnerId: partnerId, ks: ks}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins with drm data', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function() {
      return new Promise(resolve => {
        const response = new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfWithDrmData);
        resolve(response);
      });
    });
    provider.getMediaConfig({entryId: '1_rwbj3j0a'}).then(
      mediaConfig => {
        try {
          let data = JSON.parse(JSON.stringify(MEDIA_CONFIG_DATA.NoPluginsWithDrm));
          data.session.isAnonymous = false;
          mediaConfig.should.deep.equal(data);
          done();
        } catch (err) {
          done(err);
        }
      },
      err => {
        done(err);
      }
    );
  });

  it('should return reject when try to get config with wrong entryId', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function() {
      return new Promise((resolve, reject) => {
        const response = new MultiRequestResult(BE_DATA.WrongEntryIDWithoutUIConf);
        if (response.success) {
          resolve(response);
        } else {
          reject(response);
        }
      });
    });
    provider.getMediaConfig({entryId: '1_rwbj3j0affff'}).then(
      mediaConfig => {
        should.fail(mediaConfig);
      },
      err => {
        err.results.should.deep.equal(MEDIA_CONFIG_DATA.entryIDError);
        err.success.should.equal(false);
        err.headers.should.equal(BE_DATA.WrongEntryIDWithoutUIConf.headers);
        done();
      }
    );
  });

  it('should return config with plugins and with drm data', done => {
    provider = new OVPProvider({partnerId: partnerId, ks: ks, uiConfId: 38601981}, playerVersion);
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function() {
      return new Promise(resolve => {
        const response = new MultiRequestResult(BE_DATA.EntryWithUIConfWithDrmData);
        resolve(response);
      });
    });
    provider.getMediaConfig({entryId: '1_rwbj3j0a'}).then(
      mediaConfig => {
        try {
          let data = JSON.parse(JSON.stringify(MEDIA_CONFIG_DATA.WithPluginsWithDrm));
          data.session.isAnonymous = false;
          mediaConfig.should.deep.equal(data);
          done();
        } catch (err) {
          done(err);
        }
      },
      err => {
        done(err);
      }
    );
  });

  it('should return reject when try to get config with wrong uiConf ID', done => {
    provider = new OVPProvider({partnerId: partnerId, ks: ks, uiConfId: 38601981}, playerVersion);
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function() {
      return new Promise(resolve => {
        const response = new MultiRequestResult(BE_DATA.WrongUiConfID);
        resolve(response);
      });
    });
    provider.getMediaConfig({entryId: '1_rwbj3j0a'}).then(
      mediaConfig => {
        should.fail(mediaConfig);
      },
      err => {
        err.data.results.should.deep.equal(MEDIA_CONFIG_DATA.WrongUiConfID);
        err.data.success.should.equal(false);
        err.data.headers.should.equal(BE_DATA.WrongUiConfID.headers);
        done();
      }
    );
  });
});

describe('logger', () => {
  const partnerId = 1068292;
  const playerVersion = '1.2.3';
  const provider = new OVPProvider({partnerId: partnerId}, playerVersion);

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
