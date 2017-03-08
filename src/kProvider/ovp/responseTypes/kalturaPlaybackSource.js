// @flow
import KalturaDrmPlaybackPluginData from './kalturaDrmPlaybackPluginData'

export default class KalturaPlaybackSource {

  format: string;
  deliveryProfileId: number;
  url: string;
  protocols: string;
  flavorIds: string;
  drm: Array<KalturaDrmPlaybackPluginData> = [];

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

  hasDrmData(): boolean {
    return this.drm && this.drm.length > 0;
  }

  hasFlavorIds(): boolean {
    return this.flavorIds && this.flavorIds.length > 0;
  }

  getProtocol(protocol: string): string {
    let returnValue: string = "";
    if (this.protocols && this.protocols.length > 0) {
      let protocolsArr: Array<string> = this.protocols.split(",");
      protocolsArr.forEach((p) => {
        if (p == protocol) returnValue = p;
      });
    }
    else if (protocol == "http")
      return protocol;
    return returnValue;
  }

}

