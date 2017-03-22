// @flow

import RequestBuilder from './requestBuilder'
import ServiceResult from './baseServiceResult'
import loggerFactory from "playkit-js/src/util/loggerFactory";

const logger = loggerFactory.getLogger("OvpProvider");

export default class MultiRequestBuilder extends RequestBuilder {

  requests: Array<RequestBuilder> = [];
  _params: Object = {};

  constructor() {
    super();
  }

  add(request: RequestBuilder): MultiRequestBuilder {
    this.requests.push(request);

    let serviceDef: Object = {service: request.service, action: request.action};
    this.params = Object.assign(this.params, {[this.requests.length]: Object.assign(serviceDef, request.params)});
    return this;
  }

  execute(): Promise<any> {
    this.params = JSON.stringify(this.params);
    return new Promise((resolve, reject) => {
      this.doHttpRequest().then(data => {
          let multiResult: MultiRequestResult = new MultiRequestResult(data);
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
}

class MultiRequestResult {

  success: boolean;
  data: Object;

  constructor(data: Object) {
    this.success = true;
    this.data = data;
  }

}
