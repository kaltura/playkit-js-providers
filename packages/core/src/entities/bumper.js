//@flow

export default class Bumper {
  /**
   * @member - bumper url
   * @type {string}
   */
  url: string;

  /**
   * @constructor
   * @param {Object} data - The bumper response
   */
  constructor(data: Object) {
    this.url = data.url;
  }
}
