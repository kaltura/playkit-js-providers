import ServiceResult from '../../common/base-service-result';

export class KalturaUIConfResponse extends ServiceResult {
  public static Type: {[type: string]: number} = {
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

  public static CreationMode: {[mode: string]: number} = {
    WIZARD: 2,
    ADVANCED: 3
  };

  public description!: string;
  public objTypeAsString!: string;
  public width!: number;
  public height!: number;
  public htmlParams!: string;
  public swfUrl!: string;
  public confFilePath!: string;
  public confFile!: string;
  public confFileFeatures!: string;
  public name!: string;
  public config!: string;
  public confVars!: string;
  public useCdn!: boolean;
  public tags!: string;
  public swfUrlVersion!: string;
  public created!: Date;
  public updated!: Date;
  public html5Url!: string;
  public version!: string;
  public partnerTags!: string;
  public objType!: number;
  public creationMode!: number;

  /**
   * @constructor
   * @param {Object} data The json response
   */
  constructor(data: any) {
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
