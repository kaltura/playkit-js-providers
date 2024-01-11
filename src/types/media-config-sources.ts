import {ImageSource} from '../entities/image-source';
import {DocSource} from '../entities/doc-source';
import {ProviderMediaConfigMetadataObject} from './media-config-metadata';
import {PKExternalCaptionObject} from './external-caption-object';
import {ProviderMediaSourceObject} from './media-source';

export type ProviderMediaConfigSourcesObject = {
  dash: Array<ProviderMediaSourceObject>;
  hls: Array<ProviderMediaSourceObject>;
  progressive: Array<ProviderMediaSourceObject>;
  image: Array<ImageSource>;
  doc: Array<DocSource>;
  duration?: number;
  type: string;
  id?: string;
  poster?: string | Array<any>;
  dvr: boolean;
  vr?: any;
  metadata: ProviderMediaConfigMetadataObject;
  captions?: Array<PKExternalCaptionObject>;
  downloadUrl?: string;
};
