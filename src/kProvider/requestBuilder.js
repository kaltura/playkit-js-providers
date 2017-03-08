// @flow


export default class RequestBuilder {

  service: string;
  action: string;
  params: any;

  headers: Map<string, string>;
  baseUrl: string;
  method: string;
  tag: string;


  constructor() {
    this.headers = new Map();
    this.headers.set("Content-Type", "application/json");
  }

  getUrl(): string {
    if (!this.baseUrl) {
      throw new Error("baseUrl is mandatory for request builder");
    }
    let url = this.baseUrl + '/service/' + this.service + (this.action ? +'/action/' + this.action : '');
    return url;
  }

  doHttpRequest(): Promise<any> {

    let request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            let jsonResponse = JSON.parse(request.responseText);
            if (jsonResponse && typeof(jsonResponse) === 'object' && jsonResponse.code && jsonResponse.message)
              reject(jsonResponse);
            else
              resolve(jsonResponse);
          } else {
            reject(request.responseText);
          }
        }
      };
      request.open(this.method, this.getUrl());
      request.setRequestHeader("Content-Type", "application/json");
      request.send(this.params);
    });
  }


}
