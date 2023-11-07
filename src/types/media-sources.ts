// @flow
import ImageSource from '../../src/entities/image-source';

declare type ProviderMediaSourcesObject = {
  progressive: Array<ProviderMediaSourceObject>;
  dash: Array<ProviderMediaSourceObject>;
  hls: Array<ProviderMediaSourceObject>;
  image: Array<ImageSource>;
  captions?: Array<PKExternalCaptionObject>;
};
