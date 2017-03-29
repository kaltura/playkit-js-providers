import OvpProvider from '../../../../src/kProvider/ovp/ovpProvider'
import * as mocData from './BEStubs'
import * as parsedData from './PlayerConfigParsed'

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
    sinon.stub(provider, "getData").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = {success: true, data: mocData.AnonymousMocEntryWithoutUIConfNoDrmData};
          resolve(response);
        });
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
    sinon.stub(provider, "getData").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = {success: true, data: mocData.AnonymousMocEntryWithoutUIConfWithDrmData};
          resolve(response);
        });
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
    sinon.stub(provider, "getData").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = {success: false, data: mocData.WrongEntryIDWithoutUIConf};
        });
      });


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
    sinon.stub(provider, "getData").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = {success: true, data: mocData.EntryWithUIConfNoDrmData};
          resolve(response);
        });
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
    sinon.stub(provider, "getData").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = {success: true, data: mocData.EntryWithUIConfWithDrmData};
          resolve(response);
        });
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
    sinon.stub(provider, "getData").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = {success: false, data: mocData.WrongUiConfID};
        });
      });


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
    sinon.stub(provider, "getData").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = {success: true, data: mocData.AudioEntryWithoutPlugins};
          resolve(response);
        });
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
    sinon.stub(provider, "getData").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = {success: true, data: mocData.ImageEntryWithoutPlugins};
          resolve(response);
        });
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

