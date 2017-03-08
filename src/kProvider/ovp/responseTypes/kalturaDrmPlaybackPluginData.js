// @flow
import {Scheme} from '../../enums'

export default class KalturaDrmPlaybackPluginData {

  scheme: Scheme;
  licenseURL: string;

  constructor(drm: any) {
    this.scheme = drm.scheme;
    this.licenseURL = drm.licenseURL;
  }
}


