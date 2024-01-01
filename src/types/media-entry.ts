import { ProviderMediaSourcesObject } from './media-sources';
import { Poster } from './poster';

export type ProviderMediaEntryObject = {
  id?: string;
  name?: string;
  sources: ProviderMediaSourcesObject;
  duration?: number;
  dvrStatus?: number;
  status?: number;
  metadata: any;
  type: string;
  poster?: string | Poster[];
  downloadUrl?: string;
  assetReferenceType?: string;
};
