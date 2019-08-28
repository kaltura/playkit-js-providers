//@flow
import KalturaDrmPlaybackPluginData from '@playkit-js/core-provider/src/response-types/kaltura-drm-playback-plugin-data';

export type OTTKalturaPlaybackSource = KalturaPlaybackSource;

export default class KalturaPlaybackSource {
  format: string;
  protocols: string;
  drm: Array<KalturaDrmPlaybackPluginData> = [];
  adsPolicy: string;
  adsParam: string;
  duration: number;
  url: string;
  type: string;
  fileId: number;

  /**
   * @constructor
   * @param {Object} source The response
   */
  constructor(source: Object) {
    this.format = source.format;
    this.adsPolicy = source.adsPolicy;
    this.adsParam = source.adsParam;
    this.duration = source.duration;
    this.url = source.url;
    this.type = source.type;
    this.fileId = source.id;
    this.protocols = source.protocols;
    if (source.drm) {
      source.drm.map(drm => this.drm.push(new KalturaDrmPlaybackPluginData(drm)));
    }
  }

  /**
   * Checks if source has DRM data
   * @function hasDrmData
   * @returns {boolean} Is source has DRM
   */
  hasDrmData(): boolean {
    return this.drm && this.drm.length > 0;
  }

  /**
   * Returns source desired protocol if supported
   * @param {string} protocol - the desired protocol for the source (base play url protocol)
   * @returns {string} - protocol if protocol is in the protocols list - if not empty string returned
   */
  getProtocol(protocol: string): string {
    let returnValue: string = '';
    if (this.protocols && this.protocols.length > 0) {
      let protocolsArr: Array<string> = this.protocols.split(',');
      protocolsArr.forEach(p => {
        if (p === protocol) {
          returnValue = p;
        }
      });
    } else if (protocol === 'http') {
      return protocol;
    }
    return returnValue;
  }
}
