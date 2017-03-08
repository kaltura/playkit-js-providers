// @flow
import Drm from './drm'
import {MediaFormat} from './mediaFormat'

export default class MediaSource {

  id: string;
  url: string;
  mediaFormat: MediaFormat;
  drmData: Array<Drm>;

  constructor(){

  }

}

