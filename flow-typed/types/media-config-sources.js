// @flow
import ImageSource from "../../src/entities/image-source";

declare type ProviderMediaConfigSourcesObject = {
  dash: Array<ProviderVideoMediaSourceObject>,
  hls: Array<ProviderVideoMediaSourceObject>,
  progressive: Array<ProviderVideoMediaSourceObject>,
  image: ImageSource,
  duration: number,
  type: string,
  id: string,
  poster: string | Array<Object>,
  dvr: boolean,
  vr: ?Object,
  metadata: ProviderMediaConfigMetadataObject,
  captions?: Array<PKExternalCaptionObject>
};
