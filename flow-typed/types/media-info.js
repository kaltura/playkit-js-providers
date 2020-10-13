// @flow
declare type OVPProviderMediaInfoObject = {
  entryId: string,
  ks?: string
};

declare type OTTProviderMediaInfoObject = OVPProviderMediaInfoObject & {
  mediaType: string,
  contextType: string,
  protocol?: string,
  fileIds?: string,
  streamerType?: string,
  urlType?: string,
  assetReferenceType?: string,
  formats?: Array<string>
};

declare type ProviderMediaInfoObject = OVPProviderMediaInfoObject | OTTProviderMediaInfoObject;
