enum FlavorAssetTags {
  AUDIO_ONLY = 'audio_only',
  AUDIO_DESCRIPTION = 'audio_description'
}

export class KalturaFlavorAsset {
  public static Status: {[status: string]: number} = {
    ERROR: -1,
    QUEUED: 0,
    CONVERTING: 1,
    READY: 2,
    DELETED: 3,
    NOT_APPLICABLE: 4,
    TEMP: 5,
    WAIT_FOR_CONVERT: 6,
    IMPORTING: 7,
    VALIDATING: 8,
    EXPORTING: 9
  };

  /**
   * @member - The ID of the Flavor Asset
   * @type {string}
   */
  public id: string;
  /**
   * @member -The Flavor Params used to create this Flavor Asset
   * @type {string}
   */
  public flavorParamsId: string;
  /**
   * @member -The file extension
   * @type {string}
   */
  public fileExt: string;
  /**
   * @member - The overall bitrate (in KBits) of the Flavor Asset
   *  @type {string}
   */
  public bitrate: number;
  /**
   * @member - The width of the Flavor Asset
   * @type {number}
   */
  public width: number;
  /**
   * @member - The height of the Flavor Asset
   * @type {number}
   */
  public height: number;
  /**
   * @member - The frame rate (in FPS) of the Flavor Asset
   * @type {number}
   */
  public frameRate: number;
  /**
   * @member - True if this Flavor Asset is the original source
   * @type {number}
   */
  public isOriginal: boolean;
  /**
   * @member - True if this Flavor Asset is playable in KDP
   * @type {boolean}
   */
  public isWeb: boolean;
  /**
   * @member - The container format
   * @type {boolean}
   */
  public containerFormat: string;
  /**
   *@member - The video codec
   * @type {boolean}
   */
  public videoCodecId: string;
  /**
   * @member - The status of the Flavor Asset
   * @type {number}
   */
  public status: number;
  /**
   * @member - The language of the flavor asset
   * @type {Status}
   */
  public language: string;
  /**
   * @member - The label of the flavor asset
   * @type {string}
   */
  public label: string;

  /**
   * @member - is audio asset has audio description tag
   * @type {boolean|undefined}
   */
  public isAudioDescription?: boolean;

  /**
   * @function
   * @param {string} tags The tags
   * @returns {boolean} Is audio asset
   * @static
   */
  public static isAudioAsset(flavorAsset: any): boolean {
    let tagsArray: Array<string> = [];
    if (flavorAsset.tags && typeof flavorAsset.tags === 'string') {
      tagsArray = flavorAsset.tags.split(',');
    }
    return flavorAsset.bitrate && !flavorAsset.height && !flavorAsset.width && tagsArray.includes(FlavorAssetTags.AUDIO_ONLY);
  }

  /**
   * @function
   * @param {string} tags The tags
   * @returns {boolean} Is audio description
   * @static
   */
  public static getIsAudioDescription(tags = ''): boolean {
    const tagsArray = tags.split(',');
    return tagsArray.includes(FlavorAssetTags.AUDIO_DESCRIPTION);
  }

  /**
   * @constructor
   * @param {Object} data The json response
   */
  constructor(data: any) {
    this.id = data.id;
    this.flavorParamsId = data.flavorParamsId;
    this.fileExt = data.fileExt;
    this.bitrate = data.bitrate;
    this.width = data.width;
    this.height = data.height;
    this.id = data.id;
    this.frameRate = data.frameRate;
    this.isOriginal = data.isOriginal;
    this.isWeb = data.isWeb;
    this.containerFormat = data.containerFormat;
    this.videoCodecId = data.videoCodecId;
    this.status = data.status;
    this.language = data.language;
    this.label = data.label;
    if (KalturaFlavorAsset.isAudioAsset(data)) {
      this.isAudioDescription = KalturaFlavorAsset.getIsAudioDescription(data.tags);
    }
  }
}
