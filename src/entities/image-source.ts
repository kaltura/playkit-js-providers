const BASE_THUMBNAIL_URL_TEMPLATE = '.+entry_id/[a-zA-Z0-9_]+/';

export default class ImageSource {
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
   * @member - media source mimetype
   * @type {string}
   */
  public mimetype: string;

  constructor(entry: any) {
    this.id = entry.id;
    this.url = ImageSource.extractBaseThumbnailUrl(entry.dataUrl);
    this.mimetype = '';
  }

  /**
   * Extract the base thumbnail url.
   * @param {string} url - dataUrl.
   * @returns {string} - The base thumbnail url.
   */
  public static extractBaseThumbnailUrl(url: string): string {
    // @ts-expect-error - fff
    return url.match(BASE_THUMBNAIL_URL_TEMPLATE)[0].slice(0, -1);
  }
}

export {ImageSource}
