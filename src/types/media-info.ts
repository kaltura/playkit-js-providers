// @flow
declare type OVPProviderMediaInfoObject = {
  entryId?: string;
  referenceId?: string;
  ks?: string;
};

declare type OTTProviderMediaInfoObject = OVPProviderMediaInfoObject & {
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

declare type ProviderMediaInfoObject = OVPProviderMediaInfoObject | OTTProviderMediaInfoObject;
