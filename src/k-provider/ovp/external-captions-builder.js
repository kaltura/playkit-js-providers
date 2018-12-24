// @flow
import OVPConfiguration from './config';

const KalturaCaptionType: CaptionType = {
  SRT: '1',
  DFXP: '2',
  WEBVTT: '3',
  CAP: '4'
};

const CaptionsFormats: {[format: string]: string} = {
  WEBVTT: 'vtt'
};

const BASE_URL: string = 'index.php/service/caption_captionasset/action/serveWebVTT/captionAssetId/ASSET_ID/segmentIndex/-1/version/2/captions.vtt';

const ASSET_ID_INDEX: number = 6;

class ExternalCaptionsBuilder {
  static createConfig(metadata: Object, ks: string): Array<PKExternalCaptionObject> {
    return metadata.filter(meta => [KalturaCaptionType.WEBVTT, KalturaCaptionType.SRT].includes(meta.format)).map(meta => {
      return {
        type: CaptionsFormats.WEBVTT,
        language: meta.language,
        label: meta.label,
        url: ExternalCaptionsBuilder.createUrl(meta.id, ks)
      };
    });
  }

  static createUrl(assetId: string, ks: string): string {
    const config = OVPConfiguration.get();
    let path = BASE_URL.split('/');
    path[ASSET_ID_INDEX] = assetId;
    path = path.join('/');
    ks = ks ? `/ks/${ks}` : ``;
    return `${config.serviceUrl}/${path}${ks}`;
  }
}

export {ExternalCaptionsBuilder};
