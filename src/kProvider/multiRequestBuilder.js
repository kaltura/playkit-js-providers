// @flow

import RequestBuilder from './requestBuilder'

export default class MultiRequestBuilder extends RequestBuilder {

  requests: Array<RequestBuilder> = [];

  constructor() {
    super();
  }

  add(request: RequestBuilder): MultiRequestBuilder {
    this.requests.push(request);
    return this;
  }

  execute(): Promise<any> {
    Object.assign(this.params, this.buildMultiRequestParams());
    this.params = JSON.stringify(this.params);
    return this.doHttpRequest();
  }

  buildMultiRequestParams(): any {
    let multiParams = {};
    let index = 1;
    this.requests.forEach((request) => {
      let params = {
        "service": request.service,
        "action": request.action
      }
      params = Object.assign(params, request.params);
      multiParams = Object.assign(multiParams, {[index]: params});
      index++;
    });

    return multiParams;
  }


}
