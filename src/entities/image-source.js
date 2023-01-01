//@flow

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
    this.url = entry.dataUrl;
    this.mimetype = 'image/jpeg';
    this.templateUrl = ImageSource.createTemplateUrl(entry.dataUrl);
  }

  /**
   * Convert url to template url.
   * @param {string} url - dataUrl.
   * @returns {string} - The template url .
   */
  static createTemplateUrl(url: string): string {
    return url;
  }
}
