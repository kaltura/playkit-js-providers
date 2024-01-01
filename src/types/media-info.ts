import { AdapterDataConfig } from './adapter-data-config';

export type OVPProviderMediaInfoObject = {
  entryId?: string;
  referenceId?: string;
  ks?: string;
};

export type OTTProviderMediaInfoObject = OVPProviderMediaInfoObject & {
  mediaType: string;
  contextType: string;
  protocol?: string;
  fileIds?: string;
  streamerType?: string;
  urlType?: string;
  adapterData?: AdapterDataConfig;
  assetReferenceType?: string;
  formats?: Array<string>;
};

export type ProviderMediaInfoObject = OVPProviderMediaInfoObject | OTTProviderMediaInfoObject;
