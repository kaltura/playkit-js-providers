//@flow

/**
 * Ovp BE access control message
 * @classdesc
 */
export default class KalturaAccessControlMessage {
  /**
   * @member - The access control message
   * @type {string}
   */
  message: string;
  /**
   *  @member - The access control message code
   * @@type {string}
   */
  code: string;

  /**
   * @constructor
   * @param {Object} The json response
   */
  constructor(data: Object) {
    this.message = data.message;
    this.code = data.code
  }
}


