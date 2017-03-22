// @flow

export default class ServiceResult {

  hasError: boolean = false;
  error: ServiceError;
  serviceName: string;

  constructor(response: any, logError: boolean = false, name: string = "") {
    this.serviceName = name;
    if (response.objectType === "KalturaAPIException") {
      this.hasError = true;
      this.error = new ServiceError(response.code, response.message);
    }
  }

}

class ServiceError {

  code: string;
  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }

}
