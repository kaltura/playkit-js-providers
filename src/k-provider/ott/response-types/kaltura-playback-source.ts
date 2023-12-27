import {KalturaDrmPlaybackPluginData} from '../../common/response-types/kaltura-drm-playback-plugin-data';

export type OTTKalturaPlaybackSource = KalturaPlaybackSource;

export default class KalturaPlaybackSource {
  public format: string;
  public protocols: string;
  public drm: Array<KalturaDrmPlaybackPluginData> = [];
  public adsPolicy: string;
  public adsParam: string;
  public duration: number;
  public url: string;
  public type: string;
  public fileId: number;

  /**
   * @constructor
   * @param {Object} source The response
   */
  constructor(source: any) {
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
  public hasDrmData(): boolean {
    return this.drm && this.drm.length > 0;
  }

  /**
   * Returns source desired protocol if supported
   * @param {string} protocol - the desired protocol for the source (base play url protocol)
   * @returns {string} - protocol if protocol is in the protocols list - if not empty string returned
   */
  public getProtocol(protocol: string): string {
    let returnValue: string = '';
    if (this.protocols && this.protocols.length > 0) {
      const protocolsArr: Array<string> = this.protocols.split(',');
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
