// @flow
import MediaSources from '../../entities/media-sources'
import type {MediaSourcesObject} from '../../entities/media-sources'

export type SessionConfigObjectType = {
  partnerId: number,
  uiConfId?: number,
  ks?: string
};

export type ProviderMediaConfigObjectType = {
  id: string,
  name: string,
  session: SessionConfigObjectType,
  sources: MediaSourcesObject,
  duration: number,
  type: string,
  dvr: boolean,
  metadata: Object
};

export default class ProviderMediaConfig {
  _id: string;
  _name: string;
  _session: SessionConfig;
  _sources: MediaSources;
  _duration: number;
  _type: string;
  _dvr: boolean;
  _metadata: Object;

  get id(): string {
    return this._id;
  }

  set id(value: string): void {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string): void {
    this._name = value;
  }

  get session(): SessionConfig {
    return this._session;
  }

  get sources(): MediaSources {
    return this._sources;
  }

  set sources(value: MediaSources): void {
    this._sources = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number): void {
    this._duration = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string): void {
    this._type = value;
  }

  get dvr(): boolean {
    return this._dvr;
  }

  set dvr(value: boolean): void {
    this._dvr = value;
  }

  get metadata(): Object {
    return this._metadata;
  }

  set metadata(value: Object): void {
    this._metadata = value;
  }

  constructor(partnerId: number, uiConfId: ?number) {
    this.id = '';
    this.name = '';
    this._session = new SessionConfig(partnerId, uiConfId);
    this.sources = new MediaSources();
    this.duration = 0;
    this.type = 'Unknown';
    this.dvr = false;
    this.metadata = {};
  }

  toJSON(): ProviderMediaConfigObjectType {
    return {
      id: this.id,
      name: this.name,
      session: this.session.toJSON(),
      sources: this.sources.toJSON(),
      duration: this.duration,
      type: this.type,
      dvr: this.dvr,
      metadata: this.metadata
    };
  }
}

class SessionConfig {
  _partnerId: number;
  _uiConfId: ?number;
  _ks: ?string;

  get ks(): ?string {
    return this._ks;
  }

  set ks(value: ?string): void {
    this._ks = value;
  }

  get partnerId(): number {
    return this._partnerId;
  }

  get uiConfId(): ?number {
    return this._uiConfId;
  }

  constructor(partnerId: number, uiConfId: ?number) {
    this._partnerId = partnerId;
    this._uiConfId = uiConfId;
  }

  toJSON(): SessionConfigObjectType {
    const response: SessionConfigObjectType = {
      partnerId: this.partnerId
    };
    if (this.uiConfId) response.uiConfId = this.uiConfId;
    if (this.ks) response.ks = this.ks;
    return response;
  }
}
