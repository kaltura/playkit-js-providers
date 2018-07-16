//@flow
export default class KalturaFlavorAsset {
  static Status: {[status: string]: number} = {
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
  id: string;
  /**
   * @member -The Flavor Params used to create this Flavor Asset
   * @type {string}
   */
  flavorParamsId: string;
  /**
   * @member -The file extension
   * @type {string}
   */
  fileExt: string;
  /**
   * @member - The overall bitrate (in KBits) of the Flavor Asset
   *  @type {string}
   */
  bitrate: number;
  /**
   * @member - The width of the Flavor Asset
   * @type {number}
   */
  width: number;
  /**
   * @member - The height of the Flavor Asset
   * @type {number}
   */
  height: number;
  /**
   * @member - The frame rate (in FPS) of the Flavor Asset
   * @type {number}
   */
  frameRate: number;
  /**
   * @member - True if this Flavor Asset is the original source
   * @type {number}
   */
  isOriginal: boolean;
  /**
   * @member - True if this Flavor Asset is playable in KDP
   * @type {boolean}
   */
  isWeb: boolean;
  /**
   * @member - The container format
   * @type {boolean}
   */
  containerFormat: string;
  /**
   *@member - The video codec
   * @type {boolean}
   */
  videoCodecId: string;
  /**
   * @member - The status of the Flavor Asset
   * @type {number}
   */
  status: number;
  /**
   * @member - The language of the flavor asset
   * @type {Status}
   */
  language: string;
  /**
   * @member - The label of the flavor asset
   * @type {string}
   */
  label: string;

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
  }
}
