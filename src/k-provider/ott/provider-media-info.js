// @flow
import type {ProviderMediaInfoObject} from '../common/provider-media-info'
import ProviderMediaInfo from '../common/provider-media-info'
import KalturaAsset from './response-types/kaltura-asset'
import KalturaPlaybackContext from './response-types/kaltura-playback-context'

export type OTTProviderMediaInfoObject = ProviderMediaInfoObject & {
  mediaType: string,
  contextType: string,
  protocol?: string,
  fileIds?: string
};

export default class OTTProviderMediaInfo extends ProviderMediaInfo {
  _mediaType: string;
  _contextType: string;
  _protocol: string;
  _fileIds: string;

  get protocol(): string {
    return this._protocol;
  }

  set protocol(value: string): void {
    this._protocol = value;
  }

  get fileIds(): string {
    return this._fileIds;
  }

  set fileIds(value: string) {
    this._fileIds = value;
  }

  get mediaType(): string {
    return this._mediaType;
  }

  set mediaType(value: string): void {
    this._mediaType = value;
  }

  get contextType(): string {
    return this._contextType;
  }

  set contextType(value: string): void {
    this._contextType = value;
  }

  constructor(assetId: number, mediaType?: string, contextType?: string) {
    super(assetId);
    this._mediaType = mediaType || KalturaAsset.Type.MEDIA;
    this._contextType = contextType || KalturaPlaybackContext.Type.PLAYBACK;
  }

  toJSON(): OTTProviderMediaInfoObject {
    const response: OTTProviderMediaInfoObject = {
      entryId: this.entryId,
      mediaType: this.mediaType,
      contextType: this.contextType
    };
    if (this.protocol) response.protocol = this.protocol;
    if (this.fileIds) response.fileIds = this.fileIds;
    if (this.ks) response.ks = this.ks;
    return response;
  }
}
