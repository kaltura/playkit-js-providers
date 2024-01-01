export default class KalturaBumpersPlaybackPluginData {
  public static StreamerType: { [type: string]: string } = {
    HLS: 'hls',
    DASH: 'dash',
    PROGRESSIVE: 'progressive'
  };

  /**
   * @member - The streamer type
   * @type {string}
   */
  public streamertype: string;
  /**
   * @member - The url
   * @type {string}
   */
  public url: string;

  /**
   * @constructor
   * @param {Object} data - The response
   */
  constructor(data: any) {
    this.streamertype = data.streamertype;
    this.url = data.url;
  }
}
