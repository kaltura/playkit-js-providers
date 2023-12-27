export class KalturaAccessControlMessage {
  /**
   * @member - The access control message
   * @type {string}
   */
  public message: string;
  /**
   *  @member - The access control message code
   * @@type {string}
   */
  public code: string;

  /**
   * @constructor
   * @param {Object} data The json response
   */
  constructor(data: any) {
    this.message = data.message;
    this.code = data.code;
  }
}
