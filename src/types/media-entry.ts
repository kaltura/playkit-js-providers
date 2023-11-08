import {ProviderMediaSourcesObject} from './media-sources';

export type ProviderMediaEntryObject = {
  id?: string;
  name?: string;
  sources: ProviderMediaSourcesObject;
  duration?: number;
  dvrStatus?: number;
  status?: number;
  metadata: any;
  type: string;
  poster?: string | Array<any>;
  downloadUrl?: string;
  assetReferenceType?: string;
};
