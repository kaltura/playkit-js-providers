import OvpProvider from '../../../../src/k-provider/ovp/ovp-provider'
import * as mocData from './be-stubs'
import * as parsedData from './player-config-parsed'
import {MultiRequestResult} from '../../../../src/k-provider/multi-request-builder'
import MultiRequestBuilder from '../../../../src/k-provider/multi-request-builder'

describe('OvpProvider.partnerId:1082342', function () {

  let provider;
  let sandbox;
  let partnerId = 1082342;
  let pVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    provider = new OvpProvider({pVersion: pVersion, partnerID: partnerId});
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins and without drm data', (done) => {
    let entryID = "1_rsrdfext";
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(mocData.AnonymousMocEntryWithoutUIConfNoDrmData);
          resolve(response);
        });
      }
    );
    provider.getConfig({entryId: entryID}).then(data => {
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
    provider = new OvpProvider({pVersion: pVersion, partnerID: partnerId});
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(mocData.EntryWithUIConfNoDrmData);
          resolve(response);
        });
      }
    );
    provider.getConfig({entryId: entryID, uiConfId: uiConfID}).then(data => {
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
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(mocData.AudioEntryWithoutPlugins);
          resolve(response);
        });
      }
    );
    provider.getConfig({entryId: entryID}).then(data => {
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
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(mocData.ImageEntryWithoutPlugins);
          resolve(response);
        });
      }
    );
    provider.getConfig({entryId: entryID}).then(data => {
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
  let ks = 'NTAwZjViZWZjY2NjNTRkNGEyMjU1MTg4OGE1NmUwNDljZWJkMzk1MXwxMDY4MjkyOzEwNjgyOTI7MTQ5MDE3NjE0NjswOzE0OTAwODk3NDYuMDIyNjswO3ZpZXc6Kix3aWRnZXQ6MTs7';
  let pVersion = '1.2.3';

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    provider = new OvpProvider({pVersion: pVersion, partnerID: partnerId, ks: ks});
  });

  afterEach(() => {
    sandbox.restore();
    MultiRequestBuilder.prototype.execute.restore();
  });

  it('should return config without plugins with drm data', (done) => {

    let entryID = "1_rwbj3j0a";
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(mocData.AnonymousMocEntryWithoutUIConfWithDrmData);
          resolve(response);
        });
      }
    );
    provider.getConfig({entryId: entryID}).then(data => {
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

  it('should return reject when try to get config with wrong entry ID', (done) => {
    let entryID = "1_rwbj3j0affff";
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve, reject) => {
          let response = new MultiRequestResult(mocData.WrongEntryIDWithoutUIConf);
          if (response.success) {
            resolve(response);
          }
          else {
            reject(response);
          }

        });
      });
    provider.getConfig({entryId: entryID}).then(() => {
        done("Get config should throw error")
      },
      err => {
        let expectedData = {success: false, results: parsedData.entryIDError};
        err.should.deep.equal(expectedData);
        done();
      });
  });

  it('should return config with plugins and with drm data', (done) => {
    let entryID = "1_rwbj3j0a";
    let uiConfID = 38601981;
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(mocData.EntryWithUIConfWithDrmData);
          resolve(response);
        });
      }
    );
    provider.getConfig({entryId: entryID, uiConfId: uiConfID}).then(data => {
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

  it('should return reject when try to get config with wrong uiConf ID', (done) => {
    let entryID = "1_rwbj3j0a";
    let uiConfID = 38601981;
    sinon.stub(MultiRequestBuilder.prototype, "execute").callsFake(
      function () {
        return new Promise((resolve) => {
          let response = new MultiRequestResult(mocData.WrongUiConfID);
          resolve(response);
        });
      });
    provider.getConfig({entryId: entryID, uiConfId: uiConfID}).then(() => {
        done("Get config should throw error");
      },
      err => {
        let expectedData = {success: false, results: parsedData.WrongUiConfID};
        err.should.deep.equal(expectedData);
        done();
      });
  });
});

