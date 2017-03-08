// @flow
import {Status} from '../../enums'

export default class KalturaFlavorAsset {

  id: string;
  flavorParamsId: string;
  fileExt: string;
  bitrate: number;
  width: number;
  height: number;
  frameRate: number;
  isOriginal: boolean;
  isWeb: boolean;
  containerFormat: string;
  videoCodecId: string;
  status: Status;
  language: string;
  label: string;

  constructor(data: any) {

    this.id = data.id;
    this.flavorParamsId = data.flavorParamsId;
    this.fileExt = data.fileExt;
    this.bitrate = data.bitrate;
    this.width = data.width;
    this.height = data.height;
    this.id = data.id;
    this.frameRate = data.frameRate;
    this.isOriginal = data.isOriginal;
    this.isWeb = data.isWeb;
    this.containerFormat = data.containerFormat;
    this.videoCodecId = data.videoCodecId;
    this.status = data.status;
    this.language = data.language;
    this.label = data.label;

  }
}


