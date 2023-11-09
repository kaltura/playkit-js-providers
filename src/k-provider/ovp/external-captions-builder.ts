import {addKsToUrl} from './provider-parser';
import {CaptionType, PKExternalCaptionObject} from '../../types';

const KalturaCaptionType: CaptionType = {
  SRT: '1',
  DFXP: '2',
  WEBVTT: '3',
  CAP: '4'
};

const CaptionsFormatsMap: {[format: string]: string} = {
  '3': 'vtt',
  '1': 'srt'
};

class ExternalCaptionsBuilder {
  public static createConfig(captions: Array<any>, ks: string): Array<PKExternalCaptionObject> {
    return captions.map(caption => {
      let url = caption.url;
      let type = CaptionsFormatsMap[caption.format];
      if ([KalturaCaptionType.DFXP, KalturaCaptionType.CAP].includes(caption.format)) {
        url = caption.webVttUrl;
        type = CaptionsFormatsMap[KalturaCaptionType.WEBVTT];
      }
      url = addKsToUrl(url, ks);
      return {
        default: !!caption.isDefault,
        type: type,
        language: caption.languageCode,
        label: caption.label,
        url: url
      };
    });
  }
}

export {ExternalCaptionsBuilder};
