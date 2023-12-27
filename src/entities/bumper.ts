export default class Bumper {
  /**
   * @member - bumper url
   * @type {string}
   */
  public url: string;
  /**
   * @member - bumper click through url
   * @type {string}
   */
  public clickThroughUrl: string;

  /**
   * @constructor
   * @param {Object} data - The bumper response
   */
  constructor(data: any) {
    this.url = data.url;
    this.clickThroughUrl = data.clickThroughUrl;
  }
}
