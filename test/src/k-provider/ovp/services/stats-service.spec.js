import StatsService from '../../../../../src/k-provider/ovp/services/stats-service'
import RequestBuilder from '../../../../../src/k-provider/request-builder'
import Configuration from '../../../../../src/k-provider/ovp/config'

describe('stats service - collect', function () {
  let ovpParams, ks, event;

  beforeEach(function () {
    ovpParams = Configuration.get();
    ks = '1234';
    event = {a:1};
  });

  it('should be default baseUrl', function () {
    let request = StatsService.collect(ks, event);
    (request instanceof RequestBuilder).should.be.true;
    request.service.should.be.equal('stats');
    request.action.should.be.equal('collect');
    request.method.should.be.equal('POST');
    request.baseUrl.should.be.equal(ovpParams.beUrl);
    request.tag.should.be.equal('stats-collect');
    request.params.should.be.equal(JSON.stringify(Object.assign({}, ovpParams.serviceParams, {ks: ks}, event)));
  });

  it('should be take baseUrl from argument', function () {
    let beUrl = 'some url';
    let request = StatsService.collect(ks, event, beUrl);
    (request instanceof RequestBuilder).should.be.true;
    request.service.should.be.equal('stats');
    request.action.should.be.equal('collect');
    request.method.should.be.equal('POST');
    request.baseUrl.should.be.equal(beUrl);
    request.tag.should.be.equal('stats-collect');
    request.params.should.be.equal(JSON.stringify(Object.assign({}, ovpParams.serviceParams, {ks: ks}, event)));
  });
});
