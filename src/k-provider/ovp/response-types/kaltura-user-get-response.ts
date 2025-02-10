export class KalturaUserGetResponse {
  public id: string;
  private static readonly INVALID_IDS = ['0', '', null, undefined];

  constructor(response: any) {
    this.id = response.id;
  }

  public isAnonymous(): boolean {
    return KalturaUserGetResponse.INVALID_IDS.includes(this.id);
  }
}
