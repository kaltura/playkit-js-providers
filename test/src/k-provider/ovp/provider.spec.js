import OVPProvider from '../../../../src/k-provider/ovp/provider';
import * as BE_DATA from './be-data';
import * as MEDIA_CONFIG_DATA from './media-config-data';
import {MultiRequestResult} from '../../../../src/k-provider/common/multi-request-builder';
import MultiRequestBuilder from '../../../../src/k-provider/common/multi-request-builder';
import Error from '../../../../src/util/error/error';

describe('OVPProvider.partnerId:1082342', function () {
  let provider, sandbox;
  const partnerId = 1082342;
  const playerVersion = '1.2.3';
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    provider = new OVPProvider({partnerId: partnerId}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins and without drm data', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfNoDrmData.response)});
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

  it('should apply the request host regex on the source urls', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousMocEntryWithRequestHostRegexAction.response)});
      });
    });
    provider.getMediaConfig({entryId: '1_rsrdfext'}).then(
      mediaConfig => {
        try {
          mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.RegexAppliedSources);
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
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.EntryWithUIConfNoDrmData.response)});
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

  it('should be able to get media config by referenceId', done => {
    provider = new OVPProvider({partnerId: partnerId, uiConfId: 38621471}, playerVersion);
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      this.requests[1].params.filter.referenceIdEqual.should.equal('1_rsrdfext');
      done();
      return new Promise(() => {});
    });
    provider.getMediaConfig({referenceId: '1_rsrdfext'}).then(mediaConfig => {
      try {
        mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.WithPluginsNoDrm);
      } catch (err) {
        done(err);
      }
    });
  });

  it('should return config without plugins and without drm data for audio', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AudioEntryWithoutPlugins.response)});
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

  // currently. the player cannot handle an image (need to add support). So this test is not valid.
  it.skip('should return config without plugins and without drm data for image', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.ImageEntryWithoutPlugins.response)});
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
              type: 1
            },
            messages: [
              {
                message: "Un authorized country\nWe're sorry, this content is only available in certain countries.",
                code: 'COUNTRY_RESTRICTED'
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
});

describe('OVPProvider.partnerId:1068292', function () {
  let provider, sandbox;
  const partnerId = 1068292;
  const ks =
    'NTAwZjViZWZjY2NjNTRkNGEyMjU1MTg4OGE1NmUwNDljZWJkMzk1MXwxMDY4MjkyOzEwNjgyOTI7MTQ5MDE3NjE0NjswOzE0OTAwODk3NDYuMDIyNjswO3ZpZXc6Kix3aWRnZXQ6MTs7';
  const playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    provider = new OVPProvider({partnerId: partnerId, ks: ks}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins with drm data', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfWithDrmData.response)});
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
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise((resolve, reject) => {
        const response = new MultiRequestResult(BE_DATA.WrongEntryIDWithoutUIConf.response);
        if (response.success) {
          resolve({
            response
          });
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
        done();
      }
    );
  });

  it('should return config with plugins and with drm data', done => {
    provider = new OVPProvider({partnerId: partnerId, ks: ks, uiConfId: 38601981}, playerVersion);
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        const response = new MultiRequestResult(BE_DATA.EntryWithUIConfWithDrmData.response);
        resolve({
          response
        });
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
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise((resolve, reject) => {
        const response = new MultiRequestResult(BE_DATA.WrongUiConfID.response);
        if (response.success) {
          resolve({
            response
          });
        } else {
          reject(response);
        }
      });
    });
    provider.getMediaConfig({entryId: '1_rwbj3j0a'}).then(
      mediaConfig => {
        should.fail(mediaConfig);
      },
      err => {
        err.results.should.deep.equal(MEDIA_CONFIG_DATA.WrongUiConfID);
        done();
      }
    );
  });
});

describe('getMediaConfig', function () {
  let provider, sandbox;
  const partnerId = 1068292;
  const widgetId = '_123456';
  const ks =
    'NTAwZjViZWZjY2NjNTRkNGEyMjU1MTg4OGE1NmUwNDljZWJkMzk1MXwxMDY4MjkyOzEwNjgyOTI7MTQ5MDE3NjE0NjswOzE0OTAwODk3NDYuMDIyNjswO3ZpZXc6Kix3aWRnZXQ6MTs7';
  const playerVersion = '1.2.3';

  describe('getMediaConfig with ks', function () {
    beforeEach(() => {
      sandbox = sinon.createSandbox();
      sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
        return new Promise(resolve => {
          resolve({response: new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfWithDrmData.response)});
        });
      });
    });

    afterEach(() => {
      sandbox.restore();
      MultiRequestBuilder.prototype.execute.restore();
    });

    it('should set anonymous to false when given a KS', done => {
      provider = new OVPProvider({partnerId: partnerId}, playerVersion);
      provider.getMediaConfig({entryId: '1_rwbj3j0a', ks: ks}).then(
        mediaConfig => {
          try {
            mediaConfig.session.isAnonymous.should.be.false;
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

    it('should use the response KS on request with widgetId', done => {
      provider = new OVPProvider({partnerId, widgetId}, playerVersion);
      provider.getMediaConfig({entryId: '1_rwbj3j0a', ks: ks}).then(
        () => {
          try {
            provider.ks.should.equal(ks);
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

  describe('getMediaConfig without ks', function () {
    beforeEach(() => {
      sandbox = sinon.createSandbox();
      sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
        return new Promise(resolve => {
          resolve({response: new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfNoDrmData.response)});
        });
      });
    });

    afterEach(() => {
      sandbox.restore();
      MultiRequestBuilder.prototype.execute.restore();
    });

    it('should pass widgetId to the session loader', done => {
      provider = new OVPProvider({partnerId, widgetId}, playerVersion);
      provider.getMediaConfig({entryId: '1_rwbj3j0a'}).then(
        () => {
          try {
            provider._dataLoader._loaders.get('session')._widgetId.should.equal('_123456');
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

    it('should set anonymous to false when given a widgetId', done => {
      provider = new OVPProvider({partnerId, widgetId}, playerVersion);
      provider.getMediaConfig({entryId: '1_rwbj3j0a'}).then(
        () => {
          try {
            provider._isAnonymous.should.be.false;
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

    it('should pass _partnerId to the session loader', done => {
      provider = new OVPProvider({partnerId}, playerVersion);
      provider.getMediaConfig({entryId: '1_rwbj3j0a'}).then(
        () => {
          try {
            provider._dataLoader._loaders.get('session')._widgetId.should.equal('_1068292');
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

    it('should use the response KS on request with widgetId', done => {
      provider = new OVPProvider({partnerId, widgetId}, playerVersion);
      provider.getMediaConfig({entryId: '1_rwbj3j0a'}).then(
        () => {
          try {
            provider.ks.should.equal(BE_DATA.AnonymousMocEntryWithoutUIConfNoDrmData.response[0].ks);
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
  describe('getMediaConfig status check', function () {
    afterEach(() => {
      MultiRequestBuilder.prototype.execute.restore();
    });
    it('should request entryId with status in import', done => {
      sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
        return new Promise(resolve => {
          resolve({response: new MultiRequestResult(BE_DATA.EntryInImport.response)});
        });
      });
      provider = new OVPProvider({partnerId: 2506752}, playerVersion);
      provider.getMediaConfig({entryId: '0_fknc1xml'}).catch(err => {
        try {
          err.severity.should.equal(Error.Severity.CRITICAL);
          err.code.should.equal(Error.Code.MEDIA_STATUS_NOT_READY);
          done();
        } catch (e) {
          done(e);
        }
      });
    });
    it('should request entryId with status in preconvert', done => {
      sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
        return new Promise(resolve => {
          resolve({response: new MultiRequestResult(BE_DATA.EntryInPreConvert.response)});
        });
      });
      provider = new OVPProvider({partnerId: 2506752}, playerVersion);
      provider.getMediaConfig({entryId: '0_fknc1xml'}).catch(err => {
        try {
          err.severity.should.equal(Error.Severity.CRITICAL);
          err.code.should.equal(Error.Code.MEDIA_STATUS_NOT_READY);
          done();
        } catch (e) {
          done(e);
        }
      });
    });
    it('should request entryId with status ready', done => {
      sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
        return new Promise(resolve => {
          resolve({response: new MultiRequestResult(BE_DATA.EntryInReady.response)});
        });
      });
      provider = new OVPProvider({partnerId: 2506752}, playerVersion);
      provider.getMediaConfig({entryId: '0_yp010l8a'}).then(() => {
        done();
      });
    });
  });

  describe('getMediaConfig with bumper', function () {
    let provider, sandbox;
    const partnerId = 1091;
    const ks =
      'YmMzNzUyZWM4ZmVkYjRiMzRlOTBlYTZjMGY2YTI1NzRkZDUwZjZjNnwxMDkxOzEwOTE7MTYwNTcyMjI5NDsyOzE2MDU2MzU4OTQuMTA0MzthdmkuYmFydWNoQGthbHR1cmEuY29tOyosZGlzYWJsZWVudGl0bGVtZW50Ozs';
    const playerVersion = '1.2.3';

    beforeEach(() => {
      sandbox = sinon.createSandbox();
    });

    afterEach(() => {
      sandbox.restore();
      MultiRequestBuilder.prototype.execute.restore();
    });

    it('should set the bumper plugin with no ks', done => {
      sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
        return new Promise(resolve => {
          resolve({response: new MultiRequestResult(BE_DATA.EntryWithBumper.response)});
        });
      });
      provider = new OVPProvider({partnerId: partnerId}, playerVersion);
      provider.getMediaConfig({entryId: '0_wifqaipd'}).then(
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

    it('should set the bumper plugin with ks', done => {
      sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
        return new Promise(resolve => {
          resolve({response: new MultiRequestResult(BE_DATA.EntryWithBumperWithKs.response)});
        });
      });
      provider = new OVPProvider({partnerId: partnerId}, playerVersion);
      provider.getMediaConfig({entryId: '0_wifqaipd', ks}).then(
        mediaConfig => {
          try {
            mediaConfig.should.deep.equal(MEDIA_CONFIG_DATA.EntryWithBumperWithKs);
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
});

describe('getPlaylistConfig', function () {
  let provider, sandbox;
  const partnerId = 1091;
  const ks = 'MDlkOTIzMzRhZmM4MmJmNTIwYzZkYzZhMzc0ZTRiNWI1NTRiZjNhM3wxMDkxOzEwOTE7MTU0NDc5NzcyMjswOzE1NDQ3MTEzMjIuODk2MTswO3ZpZXc6Kix3aWRnZXQ6MTs7';
  const playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    provider = new OVPProvider({partnerId}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should load a playlist by id - anonymous', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousPlaylistById.response)});
      });
    });
    provider.getPlaylistConfig({playlistId: '0_wckoqjnn'}).then(
      playlistConfig => {
        try {
          playlistConfig.id.should.equal('0_wckoqjnn');
          playlistConfig.items.length.should.equal(8);
          playlistConfig.metadata.name.should.equal('Playlist_VOD_Only');
          playlistConfig.metadata.description.should.equal('Playlist_VOD_Only_desc');
          playlistConfig.poster.should.equal('http://cdntesting.qa.mkaltura.com/p/1091/sp/0/thumbnail/entry_id/0_wckoqjnn/version/100162');
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

  it('should load a playlist by id - with KS', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.PlaylistById.response)});
      });
    });
    provider.getPlaylistConfig({playlistId: '0_wckoqjnn', ks}).then(
      playlistConfig => {
        try {
          playlistConfig.id.should.equal('0_wckoqjnn');
          playlistConfig.items.length.should.equal(8);
          playlistConfig.metadata.name.should.equal('Playlist_VOD_Only');
          playlistConfig.metadata.description.should.equal('Playlist_VOD_Only_desc');
          playlistConfig.poster.should.equal('http://cdntesting.qa.mkaltura.com/p/1091/sp/0/thumbnail/entry_id/0_wckoqjnn/version/100162');
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

describe('getEntryListConfig', function () {
  let provider, sandbox;
  const partnerId = 1091;
  const ks = 'MGVjMWI2ZDRkNmUwNTU4ODk5MWQyZmU4NzZlMmU4OGJjYzI5OTFmYnwxMDkxOzEwOTE7MTU0NDc5NDg4NzswOzE1NDQ3MDg0ODcuOTY1OTswO3ZpZXc6Kix3aWRnZXQ6MTs7';
  const playerVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    provider = new OVPProvider({partnerId: partnerId}, playerVersion);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should load a playlist by entry list - anonymous', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousPlaylistByEntryList.response)});
      });
    });
    provider.getEntryListConfig({entries: ['0_nwkp7jtx', {entryId: '0_wifqaipd'}, '0_p8aigvgu']}).then(
      entryListConfig => {
        try {
          entryListConfig.id.should.equal('');
          entryListConfig.items.length.should.equal(3);
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
        resolve({response: new MultiRequestResult(BE_DATA.PlaylistByEntryList.response)});
      });
    });
    provider.getEntryListConfig({entries: ['0_nwkp7jtx', {entryId: '0_wifqaipd'}, '0_p8aigvgu'], ks}).then(
      entryListConfig => {
        try {
          entryListConfig.id.should.equal('');
          entryListConfig.items.length.should.equal(3);
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

describe('getPlaybackContext', () => {
  let provider, sandbox;
  const partnerId = 1068292;
  const ks =
    'NTAwZjViZWZjY2NjNTRkNGEyMjU1MTg4OGE1NmUwNDljZWJkMzk1MXwxMDY4MjkyOzEwNjgyOTI7MTQ5MDE3NjE0NjswOzE0OTAwODk3NDYuMDIyNjswO3ZpZXc6Kix3aWRnZXQ6MTs7';
  const playerVersion = '1.2.3';

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should request entryId token {1:result:objects:0:id} in request with valid KS', done => {
    sandbox = sinon.createSandbox();
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfWithDrmData.response)});
      });
    });
    provider = new OVPProvider({partnerId: partnerId}, playerVersion);
    provider
      .getMediaConfig({entryId: '1_rwbj3j0a', ks: ks})
      .then(() => {
        const getPlaybackContext = provider._dataLoader._multiRequest.requests.find(request => {
          return request.action === 'getPlaybackContext';
        });
        getPlaybackContext.params.entryId.should.equal('{1:result:objects:0:id}');
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it('should request entryId token {2:result:objects:0:id} in request with anonymous KS', done => {
    sinon.stub(MultiRequestBuilder.prototype, 'execute').callsFake(function () {
      return new Promise(resolve => {
        resolve({response: new MultiRequestResult(BE_DATA.AnonymousMocEntryWithoutUIConfNoDrmData.response)});
      });
    });
    provider = new OVPProvider({partnerId: 1082342}, playerVersion);
    provider
      .getMediaConfig({entryId: '1_rsrdfext'})
      .then(() => {
        const getPlaybackContext = provider._dataLoader._multiRequest.requests.find(request => {
          return request.action === 'getPlaybackContext';
        });
        getPlaybackContext.params.entryId.should.equal('{2:result:objects:0:id}');
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
