import {
  finalMediaConfigAllSourcesModified,
  finalMediaConfigPlayManifestSourcesModified,
  mediaConfig,
  responseDataFromBE
} from './regex-action-handler-data';
import RegexActionHandler from '../../../../src/k-provider/ovp/regex-action-handler';
import OVPMediaEntryLoader from '../../../../src/k-provider/ovp/loaders/media-entry-loader';
import OVPConfiguration from '../../../../src/k-provider/ovp/config';

describe('handleRegexAction', function () {
  let data = new Map();
  let mediaEntryLoader;
  let mediaConfigForTest = {...mediaConfig};

  before(() => {
    mediaEntryLoader = new OVPMediaEntryLoader({entryId: 'a', ks: 'a', redirectFromEntryId: true});
    mediaEntryLoader.response = responseDataFromBE;
    data.set('media', mediaEntryLoader);
  });

  it('should modify all URLs', done => {
    OVPConfiguration.set({replaceHostOnlyManifestUrls: false});
    mediaConfigForTest = JSON.parse(JSON.stringify({...mediaConfig}));
    RegexActionHandler.handleRegexAction(mediaConfigForTest, data).then(
      mediaConfigRes => {
        try {
          mediaConfigRes.should.deep.eq(finalMediaConfigAllSourcesModified);
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

  it('should modify only the manifest URLs', done => {
    OVPConfiguration.set({replaceHostOnlyManifestUrls: true});
    mediaConfigForTest = JSON.parse(JSON.stringify({...mediaConfig}));
    RegexActionHandler.handleRegexAction(mediaConfigForTest, data).then(
      mediaConfigRes => {
        try {
          mediaConfigRes.should.deep.eq(finalMediaConfigPlayManifestSourcesModified);
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

  it('should not modify the sources URLs', done => {
    mediaConfigForTest = JSON.parse(JSON.stringify({...mediaConfig}));
    RegexActionHandler.handleRegexAction(mediaConfigForTest, data).then(
      mediaConfigRes => {
        try {
          mediaConfigRes.should.deep.eq(mediaConfig);
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
