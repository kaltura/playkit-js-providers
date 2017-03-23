// @flow
import ServiceResult from '../../baseServiceResult'
import {UIConfType, UIConfCreationMode} from '../../enums';

/**
 * Ovp BE Ui config response
 * @classdesc
 */
export default class KalturaUiConfResponse extends ServiceResult {
  /**
   * @member -Name of the uiConf, this is not a primary key
   * @type {string}
   */
  name: string;
  /**
   * @member -Name of the uiConf, this is not a primary key
   * @type {string}
   */
  description: string;
  objTypeAsString: string;
  width: number;
  height: number;
  htmlParams: string;
  swfUrl: string;
  confFilePath: string;
  confFile: string;
  confFileFeatures: string;
  name: string;
  /**
   * @member -plugins configuration represented as Json string
   * @type {string}
   */
  config: string;
  confVars: string;
  useCdn: boolean;
  tags: string;
  swfUrlVersion: string;
  created: Date;
  updated: Date;
  html5Url: string;
  version: string;
  partnerTags: string;
  objType: UIConfType;
  creationMode: UIConfCreationMode;

  /**
   * @constructor
   * @param {Object} The json response
   */
  constructor(data: Object) {
    super(data);
    if (!this.hasError) {
      this.name = data.name;

      this.description = data.description;
      this.objTypeAsString = data.objTypeAsString;
      this.width = data.width;
      this.height = data.height;
      this.htmlParams = data.htmlParams;
      this.swfUrl = data.swfUrl;
      this.confFilePath = data.confFilePath;
      this.confFile = data.confFile;
      this.confFileFeatures = data.confFileFeatures;
      this.config = data.config;
      this.confVars = data.confVars;
      this.useCdn = data.useCdn;
      this.tags = data.tags;
      this.swfUrlVersion = data.swfUrlVersion;
      this.created = new Date(0);
      this.created.setUTCSeconds(data.createdAt);
      this.updated = new Date(0);
      this.updated.setUTCSeconds(data.updatedAt);
      this.html5Url = data.description;
      this.version = data.description;
      this.partnerTags = data.description;
      this.objType = data.description;
      this.creationMode = data.description;

    }
  }
}




