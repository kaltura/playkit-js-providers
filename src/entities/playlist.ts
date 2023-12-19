import MediaEntry from '../entities/media-entry';

export default class Playlist {
  /**
   * @member - playlist id
   * @type {string}
   */
  public id?: string;
  /**
   * @member - playlist name
   * @type {string}
   */
  public name?: string;
  /**
   * @member - playlist description
   * @type {string}
   */
  public description?: string;

  /**
   * @member - playlist poster
   * @type {string}
   */
  public poster?: string;

  /**
   * @member - playlist items
   * @type {Array<MediaEntry>}
   */
  public items: Array<MediaEntry>;

  /**
   * @member - playlist last played entry
   * @type {string}
   */
  public playlistLastEntryId?: string;

  constructor() {
    this.items = [];
  }
}
