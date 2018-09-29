//@flow

import MediaEntry from '../entities/media-entry';

export default class Playlist {
  /**
   * @member - playlist id
   * @type {string}
   */
  id: string;
  /**
   * @member - playlist name
   * @type {string}
   */
  name: string;
  /**
   * @member - playlist description
   * @type {string}
   */
  description: string;

  /**
   * @member - playlist poster
   * @type {string}
   */
  poster: string;

  /**
   * @member - playlist items
   * @type {Array<MediaEntry>}
   */
  items: Array<MediaEntry>;

  constructor() {
    this.items = [];
  }

  /**
   * Convert class to native js object.
   * @returns {ProviderMediaEntryObject} - The json class object.
   */
  toJSON(): ProviderPlaylistObject {
    const response = {
      id: this.id,
      name: this.name,
      description: this.description,
      poster: this.poster,
      items: []
    };
    this.items.forEach(i => response.items.push(i.toJSON()));
  }
}
