//@flow

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
   * @member - media source templateUrl
   * @type {string}
   */
  templateUrl: string;
  /**
   * @member - media source mimetype
   * @type {string}
   */
  mimetype: string;

  constructor(entry: Object) {
    this.id = entry.id;
    this.url = ImageSource.extractBaseThumbnailUrl(entry.dataUrl);
    this.mimetype = 'image/jpeg';
  }

  /**
   * Convert url to template url.
   * @param {string} url - dataUrl.
   * @returns {string} - The template url .
   */
  static extractBaseThumbnailUrl(url: string): string {
    return url.match(BASE_THUMBNAIL_URL_TEMPLATE)[0];
  }
}
