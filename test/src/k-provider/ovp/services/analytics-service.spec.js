import OVPAnalyticsService from '../../../../../src/k-provider/ovp/services/analytics/analytics-service'
import RequestBuilder from '../../../../../src/util/request-builder'
import OVPConfiguration from '../../../../../src/k-provider/ovp/config'
import {param} from '../../../../../src/util/param'

describe('analytics service - trackEvent', function () {
  const ovpParams = OVPConfiguration.get();
  const eventParams = {
    param1: 'param1',
    param2: 'param2',
    param3: 'param3'
  };

  it('should be proper values', function () {
    const serviceUrl = 'http://my/url';
    const request = OVPAnalyticsService.trackEvent(serviceUrl, eventParams);
    (request instanceof RequestBuilder).should.be.true;
    request.service.should.be.equal('analytics');
    request.action.should.be.equal('trackEvent');
    request.method.should.be.equal('GET');
    request.url.should.be.equal(serviceUrl + '?service=' + request.service + '&action=' + request.action + '&' + param(request.params));
    request.tag.should.be.equal('analytics-trackEvent');
    request.params.should.deep.equal(Object.assign({}, ovpParams.serviceParams, eventParams));
  });
});
