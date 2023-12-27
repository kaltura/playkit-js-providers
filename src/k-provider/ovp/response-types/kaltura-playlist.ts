export class KalturaPlaylist {
  /**
   * @member - playlist id
   * @type {string}
   */
  public id: string;
  /**
   * @member - playlist name
   * @type {string}
   */
  public name: string;
  /**
   * @member - playlist description
   * @type {string}
   */
  public description: string;
  /**
   * @member - playlist poster image
   * @type {string}
   */
  public poster: string;

  /**
   * @constructor
   * @param {Object} playlist - The json response
   */
  constructor(playlist: any) {
    this.id = playlist.id;
    this.name = playlist.name;
    this.description = playlist.description;
    this.poster = playlist.thumbnailUrl;
  }
}
