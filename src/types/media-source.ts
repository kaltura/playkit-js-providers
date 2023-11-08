import {ProviderDrmDataObject} from './drm-data';

export type ProviderMediaSourceObject = {
  id: string;
  url: string;
  mimetype: string;
  bandwidth?: number;
  width?: number;
  height?: number;
  label?: string;
  drmData?: Array<ProviderDrmDataObject>;
};
