// @flow
declare type ProviderMediaSourcesObject = {
  progressive: Array<ProviderMediaSourceObject>,
  dash: Array<ProviderMediaSourceObject>,
  hls: Array<ProviderMediaSourceObject>,
  captions?: Array<PKExternalCaptionObject>
};
