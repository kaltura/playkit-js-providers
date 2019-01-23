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
  static createConfig(captions: Array<Object>): Array<PKExternalCaptionObject> {
    return captions.filter(caption => [KalturaCaptionType.WEBVTT, KalturaCaptionType.SRT].includes(caption.format)).map(caption => {
      return {
        type: CaptionsFormatsMap[caption.format],
        language: caption.language,
        label: caption.label,
        url: caption.url
      };
    });
  }
}

export {ExternalCaptionsBuilder};
