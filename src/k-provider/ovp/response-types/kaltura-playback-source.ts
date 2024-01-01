import { KalturaDrmPlaybackPluginData } from '../../common/response-types/kaltura-drm-playback-plugin-data';

export type OVPKalturaPlaybackSource = KalturaPlaybackSource;

export class KalturaPlaybackSource {
  /**
   * @member - source format according to delivery profile streamer type (applehttp, mpegdash etc.)
   * @type {string}
   */
  public format: string;
  /**
   * @member - delivery profile Id
   * @type {string}
   */
  public deliveryProfileId: string;
  /**
   * @member - The source URL
   * @type {string}
   */
  public url: string;
  /**
   * @member - comma separated string according to deliveryProfile media protocols ('http,https' etc.)
   * @type {string}
   */
  public protocols: string;
  /**
   * @member - comma separated string of flavor ids
   * @type {string}
   */
  public flavorIds: string;
  /**
   * @member - drm data object containing relevant license url ,scheme name and certificate
   * @type {Array<KalturaDrmPlaybackPluginData>}
   */
  public drm: Array<KalturaDrmPlaybackPluginData> = [];

  /**
   * @constructor
   * @param {Object} source The response
   */
  constructor(source: any) {
    this.format = source.format;
    this.deliveryProfileId = source.deliveryProfileId;
    this.url = source.url;
    this.protocols = source.protocols;
    this.flavorIds = source.flavorIds;
    if (source.drm) {
      source.drm.map((drm) => this.drm.push(new KalturaDrmPlaybackPluginData(drm)));
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
   * Checks if source has flavor IDs
   * @function hasFlavorIds
   * @returns {boolean} Is source ha flavor IDs
   */
  public hasFlavorIds(): boolean {
    return !!this.flavorIds && this.flavorIds.length > 0;
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
      protocolsArr.forEach((p) => {
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
