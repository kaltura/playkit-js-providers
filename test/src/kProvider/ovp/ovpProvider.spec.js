import OvpProvider from '../../../../src/kProvider/ovp/ovpProvider'
import * as mocData from './BEStubs'
import * as parsedData from './PlayerConfigParsed'
import {MultiRequestResult} from '../../../../src/kProvider/multiRequestBuilder'

describe('OvpProvider', function () {

  let provider;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return config without plugins and without drm data', (done) => {
    let partnerId = 1082342;
    let entryID = "1_rsrdfext";
    provider = new OvpProvider(partnerId);

    sinon.stub(provider._dataLoader._multiRequest, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.AnonymousMocEntryWithoutUIConfNoDrmData);
          resolve(response);
        });
      }
    );
    sinon.stub(provider._dataLoader, "reset").callsFake(
      function () {
      }
    );
    provider.getConfig(entryID).then(data => {
        try {
          data.should.deep.equal(parsedData.NoPluginsNoDrm);
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

  it('should return config without plugins with drm data', (done) => {
    let partnerId = 1068292;
    let entryID = "1_rwbj3j0a";
    provider = new OvpProvider(partnerId);
    sinon.stub(provider._dataLoader._multiRequest, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.AnonymousMocEntryWithoutUIConfWithDrmData);
          resolve(response);
        });
      }
    );
    sinon.stub(provider._dataLoader, "reset").callsFake(
      function () {
      }
    );
    provider.getConfig(entryID).then(data => {
        try {
          data.should.deep.equal(parsedData.NoPluginsWithDrm);
          done();
        }
        catch (err) {
          // done(err);
        }
      },
      err => {
        done(err)
      })
  });

  it('should return reject when try to get config with wrong entry ID', () => {
    let partnerId = 1068292;
    let entryID = "1_rwbj3j0affff";
    provider = new OvpProvider(partnerId);
    let exceptionOccurred = false;
    sinon.stub(provider._dataLoader._multiRequest, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.WrongEntryIDWithoutUIConf);
        });
      });
    sinon.stub(provider._dataLoader, "reset").callsFake(
      function () {
      }
    );
    provider.getConfig(entryID).then(data => {
        done("Get config should throw error")
      },
      err => {
        let expectedData = {success: false, data: mocData.WrongEntryIDWithoutUIConf}
        err.should.deep.equal(expectedData);
        done();

      });
  });

  it('should return config with plugins and without drm data', (done) => {
    let partnerId = 1082342;
    let entryID = "1_rsrdfext";
    let uiConfID = 38621471;
    provider = new OvpProvider(partnerId);
    sinon.stub(provider._dataLoader._multiRequest, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.EntryWithUIConfNoDrmData);
          resolve(response);
        });
      }
    );
    sinon.stub(provider._dataLoader, "reset").callsFake(
      function () {
      }
    );
    provider.getConfig(entryID, uiConfID).then(data => {
        try {
          data.should.deep.equal(parsedData.WithPluginsNoDrm);
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

  it('should return config with plugins and with drm data', (done) => {
    let partnerId = 1068292;
    let entryID = "1_rwbj3j0a";
    let uiConfID = 38601981;
    provider = new OvpProvider(partnerId);
    sinon.stub(provider._dataLoader._multiRequest, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.EntryWithUIConfWithDrmData);
          resolve(response);
        });
      }
    );
    sinon.stub(provider._dataLoader, "reset").callsFake(
      function () {
      }
    );
    provider.getConfig(entryID, uiConfID).then(data => {
        try {
          data.should.deep.equal(parsedData.WithPluginsWithDrm);
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

  it('should return reject when try to get config with wrong uiConf ID', () => {
    let partnerId = 1068292;
    let entryID = "1_rwbj3j0a";
    let uiConfID = 38601981;
    provider = new OvpProvider(partnerId);
    sinon.stub(provider._dataLoader._multiRequest, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.WrongUiConfID);
        });
      });
    sinon.stub(provider._dataLoader, "reset").callsFake(
      function () {
      }
    );
    provider.getConfig(entryID, uiConfID).then(data => {
        done("Get config should throw error");
      },
      err => {
        let expectedData = {success: false, data: mocData.WrongUiConfID}
        err.should.deep.equal(expectedData);
        done();

      });
  });

  it('should return config without plugins and without drm data for audio', (done) => {
    let partnerId = 1082342;
    let entryID = "0_vyzw3ceu";
    provider = new OvpProvider(partnerId);
    sinon.stub(provider._dataLoader._multiRequest, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.AudioEntryWithoutPlugins);
          resolve(response);
        });
      }
    );
    sinon.stub(provider._dataLoader, "reset").callsFake(
      function () {
      }
    );
    provider.getConfig(entryID).then(data => {
        try {
          data.should.deep.equal(parsedData.AudioEntryWithoutPlugins);
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
    let partnerId = 1082342;
    let entryID = "0_vyzw3ceu";
    provider = new OvpProvider(partnerId);
    sinon.stub(provider._dataLoader._multiRequest, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.ImageEntryWithoutPlugins);
          resolve(response);
        });
      }
    );
    sinon.stub(provider._dataLoader, "reset").callsFake(
      function () {
      }
    );
    provider.getConfig(entryID).then(data => {
        try {
          data.should.deep.equal(parsedData.ImageEntryWithoutPlugins);
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

