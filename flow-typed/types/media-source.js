// @flow
declare type MediaSourceObject = {
  id: string,
  url: string,
  mimetype: string,
  bandwidth?: number,
  width?: number,
  height?: number,
  label?: string,
  drmData?: Array<DrmDataObject>
};
