//@flow

export default class KalturaPlaylist {
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
   * @member - playlist poster image
   * @type {string}
   */
  poster: string;

  /**
   * @constructor
   * @param {Object} playlist - The json response
   */
  constructor(playlist: Object) {
    this.id = playlist.id;
    this.name = playlist.name;
    this.description = playlist.description;
    this.poster = playlist.thumbnailUrl;
  }
}
