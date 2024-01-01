// @flow
declare type ProviderMediaConfigObject = {
  session: ProviderMediaConfigSessionObject,
  sources: ProviderMediaConfigSourcesObject,
  plugins: { [plugin: string]: Object }
};
