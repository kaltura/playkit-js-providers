const BASE_THUMBNAIL_URL_TEMPLATE = '.+entry_id/[a-zA-Z0-9_]+/';

export default class ImageSource {
  /**
   * @member - media source id
   * @type {string}
   */
  id: string;
  /**
   * @member - media source url
   * @type {string}
   */
  url: string;
  /**
   * @member - media source mimetype
   * @type {string}
   */
  mimetype: string;

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
  static extractBaseThumbnailUrl(url: string): string {
    // @ts-ignore
    return url.match(BASE_THUMBNAIL_URL_TEMPLATE)[0].slice(0, -1);
  }
}
