import OvpProvider from '../../../../src/kProvider/ovp/ovpProvider'
import * as mocData from './BEStubs'
import * as parsedData from './PlayerConfigParsed'
import {MultiRequestResult} from '../../../../src/kProvider/multiRequestBuilder'
import MultiRequestBuilder from '../../../../src/kProvider/multiRequestBuilder'

describe('OvpProvider.partnerId:1082342', function () {

  let provider;
  let sandbox;
  let partnerId = 1082342;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    provider = new OvpProvider(partnerId);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins and without drm data', (done) => {
    let entryID = "1_rsrdfext";

    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.AnonymousMocEntryWithoutUIConfNoDrmData);
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

  it('should return config with plugins and without drm data', (done) => {
    let entryID = "1_rsrdfext";
    let uiConfID = 38621471;
    provider = new OvpProvider(partnerId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.EntryWithUIConfNoDrmData);
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

  it('should return config without plugins and without drm data for audio', (done) => {
    let entryID = "0_vyzw3ceu";
    provider = new OvpProvider(partnerId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.AudioEntryWithoutPlugins);
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
    let entryID = "0_vyzw3ceu";
    provider = new OvpProvider(partnerId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.ImageEntryWithoutPlugins);
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

describe('OvpProvider.partnerId:1068292', function () {

  let provider;
  let sandbox;
  let partnerId = 1068292;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    provider = new OvpProvider(partnerId);
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins with drm data', (done) => {

    let entryID = "1_rwbj3j0a";
    provider = new OvpProvider(partnerId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.AnonymousMocEntryWithoutUIConfWithDrmData);
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
          done(err);
        }
      },
      err => {
        done(err)
      })
  });

  it('should return reject when try to get config with wrong entry ID', () => {
    let entryID = "1_rwbj3j0affff";
    provider = new OvpProvider(partnerId);
    let exceptionOccurred = false;
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.WrongEntryIDWithoutUIConf);
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

  it('should return config with plugins and with drm data', (done) => {

    let entryID = "1_rwbj3j0a";
    let uiConfID = 38601981;
    provider = new OvpProvider(partnerId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.EntryWithUIConfWithDrmData);
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

    let entryID = "1_rwbj3j0a";
    let uiConfID = 38601981;
    provider = new OvpProvider(partnerId);
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.WrongUiConfID);
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
});

