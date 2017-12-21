// @flow
export type ProviderMediaInfoObjectType = {
  entryId: string | number,
  ks?: string
};

export default class ProviderMediaInfo {
  _entryId: number | string;
  _ks: string;

  get ks(): string {
    return this._ks;
  }

  set ks(value: string) {
    this._ks = value;
  }

  get entryId(): number | string {
    return this._entryId;
  }

  constructor(entryId: number | string) {
    this._entryId = entryId;
  }

  toJSON(): ProviderMediaInfoObjectType {
    const response: ProviderMediaInfoObjectType = {
      entryId: this.entryId
    };
    if (this.ks) response.ks = this.ks;
    return response;
  }
}
