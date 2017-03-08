// @flow

import MediaEntry from './mediaEntry'


export default class PlayerConfig {
  media: Media;

  constructor() {
    this.media = new Media();
  }


}

class Media {
  startPosition: number;
  mediaEntry: MediaEntry;

  constructor() {
    this.startPosition = 0;
  }
}
