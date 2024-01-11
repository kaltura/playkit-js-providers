import {ImageSource} from '../entities/image-source';
import {DocSource} from '../entities/doc-source';
import {ProviderMediaSourceObject} from './media-source';
import {PKExternalCaptionObject} from './external-caption-object';

export type ProviderMediaSourcesObject = {
  progressive: Array<ProviderMediaSourceObject>;
  dash: Array<ProviderMediaSourceObject>;
  hls: Array<ProviderMediaSourceObject>;
  image: Array<ImageSource>;
  doc: Array<DocSource>;
  captions?: Array<PKExternalCaptionObject>;
};
