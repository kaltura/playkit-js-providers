import {ProviderMediaSourcesObject} from './media-sources';

export type ProviderMediaEntryObject = {
  id: string;
  name: string;
  sources: ProviderMediaSourcesObject;
  duration: number;
  dvrStatus: number;
  status: number;
  metadata: Object;
  type: string;
  poster: string | Array<Object>;
  downloadUrl: string;
};
