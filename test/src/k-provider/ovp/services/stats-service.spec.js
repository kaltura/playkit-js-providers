import StatsService from '../../../../../src/k-provider/ovp/services/stats-service'
import RequestBuilder from '../../../../../src/k-provider/request-builder'
import Configuration from '../../../../../src/k-provider/ovp/config'
import {param} from '../../../../../src/util/param'

describe('stats service - collect', function () {
  let ovpParams, ks, event;
  let pVersion = '1.2.3';

  beforeEach(function () {
    ovpParams = Configuration.get();
    ks = '1234';
    event = {a:1};
  });

  it('should be proper values', function () {
    let baseUrl = 'some url';
    let request = StatsService.collect(pVersion, ks, event, baseUrl);
    (request instanceof RequestBuilder).should.be.true;
    request.service.should.be.equal('stats');
    request.action.should.be.equal('collect');
    request.method.should.be.equal('GET');
    request.url.should.be.equal(baseUrl + '?service=' + request.service + '&action=' + request.action + '&' + param(request.params));
    request.tag.should.be.equal('stats-collect');
    request.params.should.deep.equal(Object.assign({}, ovpParams.serviceParams, {ks: ks, clientTag: 'html5:v' + pVersion}, event));
  });
});
