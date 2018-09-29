// @flow
declare type ProviderPlaylistConfigObject = {
  session: ProviderMediaConfigSessionObject,
  playlist: ProviderPlaylistObject,
  plugins: { [plugin: string]: Object }
};
