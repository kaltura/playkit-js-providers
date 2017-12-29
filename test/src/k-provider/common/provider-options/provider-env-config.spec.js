import ProviderEnvConfig from '../../../../../src/k-provider/common/provider-options/provider-env-config'

describe('ProviderEnvConfig', () => {
  const serviceUrl = 'http://s';
  const cdnUrl = 'http://c';

  it('should create provider env config with only service url', () => {
    const pec = new ProviderEnvConfig(serviceUrl);
    pec.should.be.instanceOf(ProviderEnvConfig);
    pec.serviceUrl.should.equal(serviceUrl);
  });

  it('should throw error when creating provider env config without service url', (done) => {
    try {
      new ProviderEnvConfig();
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating provider env config with wrong type of service url', (done) => {
    try {
      new ProviderEnvConfig(123);
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create provider env config with service url and set other props later', () => {
    const pec = new ProviderEnvConfig(serviceUrl);
    pec.should.be.instanceOf(ProviderEnvConfig);
    pec.serviceUrl.should.equal(serviceUrl);
    pec.cdnUrl = cdnUrl;
    pec.serviceUrl.should.equal(serviceUrl);
    pec.cdnUrl.should.equal(cdnUrl);
  });

  it('should create provider env config by json', () => {
    const pec = new ProviderEnvConfig({serviceUrl: serviceUrl});
    pec.should.be.instanceOf(ProviderEnvConfig);
    pec.serviceUrl.should.equal(serviceUrl);
  });

  it('should throw error when creating provider env config by json without service url', (done) => {
    try {
      new ProviderEnvConfig({});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should throw error when creating provider env config by json with wrong type of service url', (done) => {
    try {
      new ProviderEnvConfig({serviceUrl: 1});
      done(new Error('test failed'));
    } catch (e) {
      done();
    }
  });

  it('should create provider env config by json with service url and set other props later', () => {
    const pec = new ProviderEnvConfig({serviceUrl: serviceUrl});
    pec.should.be.instanceOf(ProviderEnvConfig);
    pec.serviceUrl.should.equal(serviceUrl);
    pec.cdnUrl = cdnUrl;
    pec.serviceUrl.should.equal(serviceUrl);
    pec.cdnUrl.should.equal(cdnUrl);
  });

  it('should create provider env config by json with all params', () => {
    const json = {
      serviceUrl: serviceUrl,
      cdnUrl: cdnUrl
    };
    const pec = new ProviderEnvConfig(json);
    pec.should.be.instanceOf(ProviderEnvConfig);
    pec.serviceUrl.should.equal(serviceUrl);
    pec.cdnUrl.should.equal(cdnUrl);
  });
});
