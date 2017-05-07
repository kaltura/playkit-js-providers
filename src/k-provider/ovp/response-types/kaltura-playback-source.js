//@flow
import KalturaDrmPlaybackPluginData from './kaltura-drm-playback-plugin-data'

/**
 * Ovp BE playback source
 * @classdesc
 */
export default class KalturaPlaybackSource {
  /**
   * @member - source format according to delivery profile streamer type (applehttp, mpegdash etc.)
   * @type {string}
   */
  format: string;
  /**
   * @member - delivery profile Id
   * @type {string}
   */
  deliveryProfileId: string;
  /**
   * @member - The source URL
   * @type {string}
   */
  url: string;
  /**
   * @member - comma separated string according to deliveryProfile media protocols ('http,https' etc.)
   * @type {string}
   */
  protocols: string;
  /**
   * @member - comma separated string of flavor ids
   * @type {string}
   */
  flavorIds: string;
  /**
   * @member - drm data object containing relevant license url ,scheme name and certificate
   * @type {Array<KalturaDrmPlaybackPluginData>}
   */
  drm: Array<KalturaDrmPlaybackPluginData> = [];

  /**
   * @constructor
   * @param {Object} source The response
   */
  constructor(source: Object) {
    this.format = source.format;
    this.deliveryProfileId = source.deliveryProfileId;
    this.url = source.url;
    this.protocols = source.protocols;
    this.flavorIds = source.flavorIds;

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
   * Checks if source has flavor IDs
   * @function hasFlavorIds
   * @returns {boolean} Is source ha flavor IDs
   */
  hasFlavorIds(): boolean {
    return !!this.flavorIds && this.flavorIds.length > 0;
  }

  /**
   * Returns source desired protocol if supported
   * @param {string} protocol - the desired protocol for the source (base play url protocol)
   * @returns {string} - protocol if protocol is in the protocols list - if not empty string returned
   */
  getProtocol(protocol: string): string {
    let returnValue: string = "";
    if (this.protocols && this.protocols.length > 0) {
      let protocolsArr: Array<string> = this.protocols.split(",");
      protocolsArr.forEach((p) => {
        if (p == protocol) {
          returnValue = p;
        }
      });
    }
    else if (protocol == "http") {
      return protocol;
    }
    return returnValue;
  }
}

