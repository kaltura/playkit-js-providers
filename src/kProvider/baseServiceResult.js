// @flow


export default class ServiceResult {


  hasError: boolean = false;
  error: ServiceError;
  _data: any;


  constructor(response: any) {

    if (response.objectType === "KalturaAPIException") {
      this.hasError = true;
      this.error = new ServiceError(response.code, response.message);
    }
    else{
      this._data = response;
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
