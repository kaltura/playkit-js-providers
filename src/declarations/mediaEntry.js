// @flow

import MediaSource from './mediaSource'
import {MediaEntryType} from '../kProvider/enums'


export default class MediaEntry {

  id: string;
  sources: Array<MediaSource>;
  duration: number;
  type: MediaEntryType;
  metaData: Map<string,string>;

  constructor() {
    this.metaData = new Map();
    this.type = MediaEntryType.Unknown;
  }


}
