// @flow
declare type ProviderMediaInfoObject = {
  entryId: string,
  ks?: string
};

declare type OTTProviderMediaInfoObject = ProviderMediaInfoObject & {
  mediaType: string,
  contextType: string,
  protocol?: string,
  fileIds?: string
};
