//@flow
import ServiceResult from '@playkit-js/core-provider/src/base-service-result';

export default class KalturaUIConfResponse extends ServiceResult {
  static Type: {[type: string]: number} = {
    PLAYER: 1,
    CONTRIBUTION_WIZARD: 2,
    SIMPLE_EDITOR: 3,
    ADVANCED_EDITOR: 4,
    PLAYLIST: 5,
    APP_STUDIO: 6,
    KRECORD: 7,
    PLAYER_V3: 8,
    KMC_ACCOUNT: 9,
    KMC_ANALYTICS: 10,
    KMC_CONTENT: 11,
    KMC_DASHBOARD: 12,
    KMC_LOGIN: 13,
    PLAYER_SL: 14,
    CLIENTSIDE_ENCODER: 15,
    KMC_GENERAL: 16,
    KMC_ROLES_AND_PERMISSIONS: 17,
    CLIPPER: 18,
    KSR: 19,
    KUPLOAD: 20,
    WEBCASTING: 21
  };

  static CreationMode: {[mode: string]: number} = {
    WIZARD: 2,
    ADVANCED: 3
  };

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
  objType: number;
  creationMode: number;

  /**
   * @constructor
   * @param {Object} data The json response
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
