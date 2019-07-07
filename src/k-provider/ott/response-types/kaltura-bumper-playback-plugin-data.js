//@flow
export default class KalturaBumpersPlaybackPluginData {
  static StreamerType: {[type: string]: string} = {
    HLS: 'hls',
    DASH: 'dash',
    PROGRESSIVE: 'progressive'
  };

  /**
   * @member - The streamer type
   * @type {string}
   */
  streamertype: string;
  /**
   * @member - The url
   * @type {string}
   */
  url: string;

  /**
   * @constructor
   * @param {Object} data - The response
   */
  constructor(data: Object) {
    this.streamertype = data.streamertype;
    this.url = data.url;
  }
}
