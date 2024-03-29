import MediaEntry from '../entities/media-entry';

export default class EntryList {
  /**
   * @member - entry list items
   * @type {Array<MediaEntry>}
   */
  public items: Array<MediaEntry>;

  constructor() {
    this.items = [];
  }
}
