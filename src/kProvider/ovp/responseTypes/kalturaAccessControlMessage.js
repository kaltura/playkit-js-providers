// @flow

export default class KalturaAccessControlMessage {

  message: string;
  code: string;

  constructor(data: any) {
    this.message = data.message;
    this.code = data.code
  }
}


