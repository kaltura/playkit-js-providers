import OVPAnalyticsService from '../../../../../src/k-provider/ovp/services/analytics/analytics-service';
import RequestBuilder from '../../../../../src/util/request-builder';
import OVPConfiguration from '../../../../../src/k-provider/ovp/config';
import {param} from '../../../../../src/util/param';

describe('analytics service - trackEvent', function () {
  const ovpParams = OVPConfiguration.get();
  const eventParams = {
    param1: 'param1',
    param2: 'param2',
    param3: 'param3',
    eventType: 1,
    partnerId: 'partnerId',
    entryId: 'entryId',
    sessionId: 'sessionId'
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

  it('should be POST request', function () {
    const serviceUrl = 'http://my/url';
    const request = OVPAnalyticsService.trackEvent(serviceUrl, eventParams, 'POST');
    const {param1, param2, param3} = eventParams;
    const {eventType, partnerId, entryId, sessionId} = eventParams;
    (request instanceof RequestBuilder).should.be.true;
    request.service.should.be.equal('analytics');
    request.action.should.be.equal('trackEvent');
    request.method.should.be.equal('POST');
    request.url.should.be.equal(
      serviceUrl +
        '?service=' +
        request.service +
        '&action=' +
        request.action +
        '&' +
        param({
          eventType,
          partnerId,
          entryId,
          sessionId
        })
    );
    request.tag.should.be.equal('analytics-trackEvent');
    request.params.should.deep.equal(JSON.stringify(Object.assign({}, ovpParams.serviceParams, {param1, param2, param3})));
  });

  it('should be GET request for non POST method', function () {
    const serviceUrl = 'http://my/url';
    const request = OVPAnalyticsService.trackEvent(serviceUrl, eventParams, 'BLA');
    request.method.should.be.equal('GET');
  });
});
