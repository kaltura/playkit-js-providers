// @flow
import HttpRequestExecutor from 'playkit-js/src/util/httpRequestExecutor'

export default class RequestBuilder {

  service: string;
  action: string;
  params: any;

  headers: Map<string, string>;
  baseUrl: string;
  method: string;
  tag: string;


  constructor() {
    if (this.headers == undefined)
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
    return HttpRequestExecutor.execute(this.getUrl(), this.params, "POST", this.headers);
  }


}
