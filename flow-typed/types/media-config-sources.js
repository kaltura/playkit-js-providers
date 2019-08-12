// @flow
declare type ProviderMediaConfigSourcesObject = {
  dash: Array<ProviderMediaSourceObject>,
  hls: Array<ProviderMediaSourceObject>,
  progressive: Array<ProviderMediaSourceObject>,
  duration: number,
  type: string,
  mediaType?: string,
  id: string,
  poster: string | Array<Object>,
  dvr: boolean,
  vr: ?Object,
  metadata: ProviderMediaConfigMetadataObject,
  captions?: Array<PKExternalCaptionObject>
};
