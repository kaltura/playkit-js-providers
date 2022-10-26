// @flow
declare type ProviderMediaSourceObject = {
  id: string,
  url: string,
  mimetype: string,
  bandwidth?: number,
  width?: number,
  height?: number,
  label?: string,
};

declare type ProviderVideoMediaSourceObject = ProviderMediaSourceObject & {
  drmData?: Array<ProviderDrmDataObject>
};

declare type ProviderImageMediaSourceObject = ProviderMediaSourceObject;


