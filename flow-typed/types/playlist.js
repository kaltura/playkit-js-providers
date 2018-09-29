// @flow
declare type ProviderPlaylistObject = {
  id: string,
  metadata: ProviderMediaConfigMetadataObject,
  poster: string | Array<Object>,
  items: Array<ProviderPlaylistItemObject>
};
