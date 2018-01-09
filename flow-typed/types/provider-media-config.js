// @flow
declare type ProviderMediaConfigObject = {
  id: string,
  name: string,
  session: SessionConfigObject,
  sources: MediaSourcesObject,
  duration: number,
  type: string,
  dvr: boolean,
  metadata: Object
};
