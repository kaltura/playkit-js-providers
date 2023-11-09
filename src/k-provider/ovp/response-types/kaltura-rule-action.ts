export class KalturaRuleAction {
  public static Type: {[type: string]: string | number} = {
    DRM_POLICY: 'drm.DRM_POLICY',
    BLOCK: 1,
    PREVIEW: 2,
    LIMIT_FLAVORS: 3,
    ADD_TO_STORAGE: 4,
    LIMIT_DELIVERY_PROFILES: 5,
    SERVE_FROM_REMOTE_SERVER: 6,
    REQUEST_HOST_REGEX: 7,
    LIMIT_THUMBNAIL_CAPTURE: 8
  };

  /**
   * @member - The type of the action
   * @type {string|number}
   */
  public type: string | number;

  /**
   * @constructor
   * @param {Object} data - The response
   */
  constructor(data: any) {
    this.type = data.type;
  }
}
