// @flow

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
  static createConfig(captions: Array<Object>, useLanguageField?: boolean): Array<PKExternalCaptionObject> {
    return captions.map(caption => {
      let url = caption.url;
      let type = CaptionsFormatsMap[caption.format];
      if ([KalturaCaptionType.DFXP, KalturaCaptionType.CAP].includes(caption.format)) {
        url = caption.webVttUrl;
        type = CaptionsFormatsMap[KalturaCaptionType.WEBVTT];
      }
      return {
        default: !!caption.isDefault,
        type: type,
        language: useLanguageField ? caption.language : caption.languageCode,
        label: caption.label,
        url: url
      };
    });
  }
}

export {ExternalCaptionsBuilder};
