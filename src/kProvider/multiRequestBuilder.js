// @flow

import RequestBuilder from './requestBuilder'
import ServiceResult from './baseServiceResult'
import loggerFactory from "playkit-js/src/util/loggerFactory";

const logger = loggerFactory.getLogger("OvpProvider");

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
    return new Promise((resolve, reject) => {
      this.doHttpRequest().then(data => {
          let multiResult: MultiRequestResult = new MultiRequestResult(true, data);
          data.forEach((result, index) => {
            let serviceName = this.requests[index].service + "." + this.requests[index].action;
            let serviceResult: ServiceResult = new ServiceResult(result);
            if (serviceResult.hasError) {
              logger.error(`${this.requests[index].service}.${this.requests[index].action} returned an error with error code: ${serviceResult.error.code} and message: ${serviceResult.error.message}.`);
              multiResult.success = false;
              return false;
            }
          });
          resolve(multiResult);
        },
        err => {
          let errorText: string = `Error on multiRequest execution, error <${err}>.`;
          reject(errorText);

        });
    });
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

class MultiRequestResult {

  success: boolean;
  data: Object;

  constructor(success: boolean, data: Object) {
    this.success = success;
    this.data = data;
  }

}
