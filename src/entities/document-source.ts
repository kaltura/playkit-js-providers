export default class DocumentSource {
  /**
   * @member - media source id
   * @type {string}
   */
  public id: string;
  /**
   * @member - media source url
   * @type {string}
   */
  public url: string;
  /**
   * @member - thumbnail url
   * @type {string}
   */
  public thumbnailUrl: string;
  /**
   * @member - media source mimetype
   * @type {string}
   */
  public mimetype: string;

  constructor(entry: any) {
    this.id = entry.id;
    this.url = entry.downloadUrl;
    this.thumbnailUrl = entry.poster;
    this.mimetype = '';
  }
}

export {DocumentSource}
