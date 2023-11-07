// @flow
import ImageSource from "../../src/entities/image-source";

declare type ProviderMediaConfigSourcesObject = {
  dash: Array<ProviderMediaSourceObject>,
  hls: Array<ProviderMediaSourceObject>,
  progressive: Array<ProviderMediaSourceObject>,
  image: Array<ImageSource>,
  duration: number,
  type: string,
  id: string,
  poster: string | Array<Object>,
  dvr: boolean,
  vr: ?Object,
  metadata: ProviderMediaConfigMetadataObject,
  captions?: Array<PKExternalCaptionObject>,
  downloadUrl?: string
};
