import OTTProvider from '../../../../src/k-provider/ott/provider';
import * as BE_DATA from './be-data';
import * as MEDIA_CONFIG_DATA from './media-config-data';
import {MultiRequestResult} from '../../../../src/k-provider/common/multi-request-builder';
import MultiRequestBuilder from '../../../../src/k-provider/common/multi-request-builder';
import KalturaAsset from '../../../../src/k-provider/ott/response-types/kaltura-asset';
import KalturaPlaybackContext from '../../../../src/k-provider/ott/response-types/kaltura-playback-context';
import OTTAssetLoader from '../../../../src/k-provider/ott/loaders/asset-loader';
import Error from '../../../../src/util/error/error';
import OTTConfiguration from '../../../../src/k-provider/ott/config';

const partnerId = 198;
const playerVersion = '1.2.3';

describe('default configuration', () => {
  const defaultConfig = OTTConfiguration.get();

  beforeEach(() => {
    OTTConfiguration.set(defaultConfig);
  });

  afterEach(() => {
    OTTConfiguration.set(defaultConfig);
  });

  it('should use config values if they are set', () => {
    const provider = new OTTProvider({partnerId: partnerId, env: {serviceParams: {apiVersion: '5.2.7'}}}, playerVersion);
    provider.env.serviceParams.apiVersion.should.equal('5.2.7');
  });

  it('should use default values if config values are not set', () => {
    const provider = new OTTProvider({partnerId: partnerId}, playerVersion);
    provider.env.serviceParams.apiVersion.should.equal(defaultConfig.serviceParams.apiVersion);
  });
});

describe('OTTProvider.partnerId:198', function () {
  let provider, sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    provider = new OTTProvider({partnerId: partnerId}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    if (MultiRequestBuilder.prototype.execute.restore) {
      MultiRequestBuilder.prototype.execute.restore();
    }
    if (OTTAssetLoader.prototype.buildRequests.restore) {
      OTTAssetLoader.prototype.buildRequests.restore();
    }
  });

  it('should return config without plugins and with drm data', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousEntryWithoutUIConfWithDrmData.response)});
      });
    });
    provider.getMediaConfig({entryId: 480097}).then(
      mediaConfig => {
        try {
          mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.NoPluginsWithDrm);
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

  it('should return config filtered by device types', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousEntryWithoutUIConfWithDrmData.response)});
      });
    });
    provider
      .getMediaConfig({
        entryId: 480097,
        formats: ['Mobile_Devices_Main_HD_FP', 'Mobile_Devices_Main_SD_FP'],
        mediaType: KalturaAsset.Type.RECORDING
      })
      .then(
        mediaConfig => {
          try {
            mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.FilteredSourcesByDeviceType);
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

  it('should return entry of live type', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.LiveEntryNoDrmData.response)});
      });
    });
    provider.getMediaConfig({entryId: 276507, contextType: KalturaPlaybackContext.Type.START_OVER, mediaType: KalturaAsset.Type.EPG}).then(
      mediaConfig => {
        try {
          mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.LiveEntryNoDrm);
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

  it('should return block error for server block response', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.BlockActionEntry.response)});
      });
    });
    provider.getMediaConfig({entryId: 1234}).then(
      mediaConfig => {
        try {
          throw new Error('no error returned where block action error was expected', mediaConfig);
        } catch (e) {
          done(e);
        }
      },
      err => {
        const expected = {
          severity: 2,
          category: 2,
          code: 2001,
          data: {
            action: {
              type: 'BLOCK'
            },
            messages: [
              {
                message: 'Concurrency limitation',
                code: 'ConcurrencyLimitation'
              }
            ]
          }
        };
        try {
          err.should.deep.equal(expected);
          done();
        } catch (e) {
          done(e);
        }
      }
    );
  });

  it('should return error for invalid KS format', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise((resolve, reject) => {
        reject(
          new Error(Error.Severity.CRITICAL, Error.Category.NETWORK, Error.Code.MULTIREQUEST_API_ERROR, {
            url: 'serviceurl',
            headers: [],
            results: new MultiRequestResult(BE_DATA.InvalidKSFormat.response).results
          })
        );
      });
    });
    provider.getMediaConfig({entryId: 1234}).then(
      mediaConfig => {
        try {
          throw new Error('no error returned where block action error was expected', mediaConfig);
        } catch (e) {
          done(e);
        }
      },
      err => {
        const expected = {
          severity: 2,
          category: 1,
          code: 1006,
          data: {
            headers: [],
            results: [
              {
                error: {
                  code: '500015',
                  message: 'Invalid KS format'
                },
                hasError: true
              }
            ],
            url: 'serviceurl'
          }
        };
        try {
          err.should.deep.equal(expected);
          done();
        } catch (e) {
          done(e);
        }
      }
    );
  });

  it('should pass streamerType and urlType on the playback context object', done => {
    sinon.stub(OTTAssetLoader.prototype, 'buildRequests').callsFake(function (params) {
      try {
        params.playbackContext.streamerType.should.equal('mpegdash');
        params.playbackContext.urlType.should.equal('DIRECT');
        done();
      } catch (e) {
        done(e);
      }
      return [];
    });
    provider.getMediaConfig({entryId: 1234, streamerType: 'mpegdash', urlType: 'DIRECT'});
  });

  it('should pass adapterData on the playback context object', done => {
    const adapterDataConfig = {
      supported_files: {
        objectType: 'KalturaStringValue',
        value: 'HLS_FPS'
      },
      supported_codec: {
        objectType: 'KalturaStringValue',
        value: 'HEVC'
      }
    };
    sinon.stub(OTTAssetLoader.prototype, 'buildRequests').callsFake(function (params) {
      try {
        params.playbackContext.adapterData.should.deep.equal(adapterDataConfig);
        done();
      } catch (e) {
        done(e);
      }
    });
    provider.getMediaConfig({entryId: 1234, adapterData: adapterDataConfig});
  });
});

describe('getEntryListConfig', function () {
  let provider, sandbox;
  const partnerId = 198;
  const ks =
    'djJ8MTk4fCkf82moylM8rVli2azka7KoJea3ITlM8Vh3_dYGU722OoJWDCS7_Pp8cqm1z6QtZAfqjGr36SjPr2GbuNKy1ejIDs7KLFpWd_VCEKKtOcwzaJ11FopaSEspI-uJMGFTvS0AmIBE1f137G36MYjOlMc=';
  const playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    provider = new OTTProvider({partnerId: partnerId}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should load a playlist by entry list - anonymous', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.PlaylistByEntryList.response)});
      });
    });
    provider.getEntryListConfig({entries: ['259153', {entryId: '258459'}]}).then(
      entryListConfig => {
        try {
          entryListConfig.id.should.equal('');
          entryListConfig.items.length.should.equal(2);
          entryListConfig.metadata.name.should.equal('');
          entryListConfig.metadata.description.should.equal('');
          entryListConfig.poster.should.equal('');
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

  it('should load a playlist by entry list - with KS', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousPlaylistByEntryList.response)});
      });
    });
    provider.getEntryListConfig({entries: ['259153', {entryId: '258459'}], ks}).then(
      entryListConfig => {
        try {
          entryListConfig.id.should.equal('');
          entryListConfig.items.length.should.equal(2);
          entryListConfig.metadata.name.should.equal('');
          entryListConfig.metadata.description.should.equal('');
          entryListConfig.poster.should.equal('');
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

  it('should load a partial playlist by entry list if some requests have an error', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({
          response: new MultiRequestResult({
            result: [...BE_DATA.AnonymousPlaylistByEntryList.response.result, BE_DATA.InvalidKSFormat.response.result.error]
          })
        });
      });
    });

    provider.getEntryListConfig({entries: ['259153', {entryId: '258459'}], ks}).then(
      entryListConfig => {
        try {
          entryListConfig.id.should.equal('');
          entryListConfig.items.length.should.equal(2);
          entryListConfig.metadata.name.should.equal('');
          entryListConfig.metadata.description.should.equal('');
          entryListConfig.poster.should.equal('');
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

describe('getEntryWithBumper', function () {
  let provider, sandbox;
  const partnerId = 147;
  const ks = 'ks';
  const playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    provider = new OTTProvider({partnerId: partnerId}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should load the entry with bumper', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.EntryWithBumper.response)});
      });
    });
    provider.getMediaConfig({entryId: '324284', fileIds: '630312', ks}).then(
      mediaConfig => {
        try {
          mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.EntryWithBumper);
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
