import ProviderOptions from '../../../../../src/k-provider/common/provider-options/provider-options'
import ProviderEnvConfig from '../../../../../src/k-provider/common/provider-options/provider-env-config'

describe('ProviderOptions', () => {
  const partnerId = 1091;
  const uiConfId = 423345;
  const ks = 'ld2342lfdsfms423423kfsdmv2532fdf';
  const serviceUrl = 'http://s';
  const cdnUrl = 'http://c';
  const logLevel = 'WARN';

  it('should create provider options with only partner id', () => {
    const po = new ProviderOptions(partnerId);
    po.should.be.instanceOf(ProviderOptions);
    po.partnerId.should.equal(partnerId);
    po.ks.should.equal('');
    po.logLevel.should.equal('ERROR');
  });

  it('should throw error when creating provider options without partner id', (done) => {
    try {
      new ProviderOptions();
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating provider options with wrong type of partner id', (done) => {
    try {
      new ProviderOptions(ks);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create provider options with partner id and set other props later', () => {
    const po = new ProviderOptions(partnerId);
    po.should.be.instanceOf(ProviderOptions);
    po.partnerId.should.equal(partnerId);
    po.uiConfId = uiConfId;
    po.ks = ks;
    po.logLevel = logLevel;
    po.env = new ProviderEnvConfig(serviceUrl, cdnUrl);
    po.uiConfId.should.equal(uiConfId);
    po.ks.should.equal(ks);
    po.logLevel.should.equal(logLevel);
    po.env.should.be.instanceOf(ProviderEnvConfig);
    po.env.serviceUrl.should.equal(serviceUrl);
    po.env.cdnUrl.should.equal(cdnUrl);
  });

  it('should create provider options by json', () => {
    const po = new ProviderOptions({partnerId: partnerId});
    po.should.be.instanceOf(ProviderOptions);
    po.partnerId.should.equal(partnerId);
    po.ks.should.equal('');
    po.logLevel.should.equal('ERROR');
  });

  it('should throw error when creating provider options by json without partner id', (done) => {
    try {
      new ProviderOptions({});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating provider options by json with wrong type of partner id', (done) => {
    try {
      new ProviderOptions({partnerId: ks});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create provider options by json with partner id and set other props later', () => {
    const po = new ProviderOptions({partnerId: partnerId});
    po.should.be.instanceOf(ProviderOptions);
    po.partnerId.should.equal(partnerId);
    po.uiConfId = uiConfId;
    po.ks = ks;
    po.logLevel = logLevel;
    po.env = {
      serviceUrl: serviceUrl,
      cdnUrl: cdnUrl
    };
    po.uiConfId.should.equal(uiConfId);
    po.ks.should.equal(ks);
    po.logLevel.should.equal(logLevel);
    po.env.should.be.instanceOf(ProviderEnvConfig);
    po.env.serviceUrl.should.equal(serviceUrl);
    po.env.cdnUrl.should.equal(cdnUrl);
  });

  it('should create provider options by json with all params', () => {
    const json = {
      partnerId: partnerId,
      uiConfId: uiConfId,
      ks: ks,
      logLevel: logLevel,
      env: {
        serviceUrl: serviceUrl,
        cdnUrl: cdnUrl
      }
    };
    const po = new ProviderOptions(json);
    po.should.be.instanceOf(ProviderOptions);
    po.partnerId.should.equal(partnerId);
    po.uiConfId.should.equal(uiConfId);
    po.ks.should.equal(ks);
    po.logLevel.should.equal(logLevel);
    po.env.should.be.instanceOf(ProviderEnvConfig);
    po.env.serviceUrl.should.equal(serviceUrl);
    po.env.cdnUrl.should.equal(cdnUrl);
  });

  it('should get json provider options', () => {
    const json = {
      partnerId: partnerId,
      uiConfId: uiConfId,
      ks: ks,
      logLevel: logLevel,
      env: {
        serviceUrl: serviceUrl,
        cdnUrl: cdnUrl
      }
    };
    const po = new ProviderOptions(json);
    po.should.be.instanceOf(ProviderOptions);
    po.toJSON().should.deep.equal(json);
  });
});
