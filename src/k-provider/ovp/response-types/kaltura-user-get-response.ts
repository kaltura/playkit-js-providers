export class KalturaUserGetResponse {
  public id: string;

  constructor(response: any) {
    this.id = response.id;
  }

  public isAnonymous(): boolean {
    return this.id === '0' || this.id === null;
  }
}
