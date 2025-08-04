import {ImageSource} from '../entities/image-source';
import {DocumentSource} from '../entities/document-source';
import {ProviderMediaConfigMetadataObject} from './media-config-metadata';
import {PKExternalCaptionObject} from './external-caption-object';
import {ProviderMediaSourceObject} from './media-source';
import {ActiveLiveStreamTime} from '../k-provider/ovp/response-types/kaltura-active-live-stream-time';

export type ProviderMediaConfigSourcesObject = {
  activeLiveStreamTime?: ActiveLiveStreamTime;
  dash: Array<ProviderMediaSourceObject>;
  hls: Array<ProviderMediaSourceObject>;
  progressive: Array<ProviderMediaSourceObject>;
  image: Array<ImageSource>;
  document: Array<DocumentSource>;
  duration?: number;
  type: string;
  id?: string;
  poster?: string | Array<any>;
  dvr: boolean;
  vr?: any;
  metadata: ProviderMediaConfigMetadataObject;
  captions?: Array<PKExternalCaptionObject>;
  downloadUrl?: string;
  rawThumbnailUrl?: string;
  seekFrom?: number;
  clipTo?: number;
  rootEntryId?: string;
  capabilities?: Array<string>;
};
