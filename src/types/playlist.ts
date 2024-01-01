import { ProviderPlaylistMetadataObject } from './playlist-metadata';
import { ProviderPlaylistItemObject } from './playlist-item';

export type ProviderPlaylistObject = {
  id: string;
  metadata: ProviderPlaylistMetadataObject;
  poster: string;
  items: Array<ProviderPlaylistItemObject>;
  playlistLastEntryId?: string;
};
