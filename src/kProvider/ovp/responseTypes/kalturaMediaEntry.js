// @flow

import {EntryType} from '../../enums'

export default class KalturaMediaEntry {

  id: string;
  name: string;


  dataUrl: string;
  flavorParamsIds: string;
  duration: number;
  type: EntryType;


  constructor(entry: Object) {
    this.id = entry.id;
    this.name = entry.name;
    this.dataUrl = entry.dataUrl;
    this.type = entry.type;
    this.flavorParamsIds = entry.flavorParamsIds;
    this.duration = entry.duration;
  }
}





