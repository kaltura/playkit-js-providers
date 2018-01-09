// @flow
declare type ProviderMediaConfigObject = {
  id: string,
  name: string,
  session: ProviderSessionConfigObject,
  sources: ProviderMediaSourcesObject,
  duration: number,
  type: string,
  dvr: boolean,
  metadata: Object
};
