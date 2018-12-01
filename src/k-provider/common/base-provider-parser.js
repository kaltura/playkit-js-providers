// @flow
import {SupportedStreamFormat} from '../../entities/media-format';
import MediaEntry from '../../entities/media-entry';
import MediaSources from '../../entities/media-sources';
import MediaSource from '../../entities/media-source';
import type {OTTKalturaPlaybackSource} from '../ott/response-types/kaltura-playback-source';
import type {OVPKalturaPlaybackSource} from '../ovp/response-types/kaltura-playback-source';
import KalturaRuleAction from './response-types/kaltura-rule-action';
import KalturaAccessControlMessage from './response-types/kaltura-access-control-message';

export default class BaseProviderParser {
  // eslint-disable-next-line no-unused-vars
  static getMediaEntry(...parms): MediaEntry {
    throw new TypeError(`getMediaEntry method must be implement by the derived class`);
  }

  // eslint-disable-next-line no-unused-vars
  static _getParsedSources(...parms): MediaSources {
    throw new TypeError(`_getParsedSources method must be implement by the derived class`);
  }

  // eslint-disable-next-line no-unused-vars
  static _parseAdaptiveSource(...parms): ?MediaSource {
    throw new TypeError(`_parseAdaptiveSource method must be implement by the derived class`);
  }

  static _isProgressiveSource(source: OVPKalturaPlaybackSource | OTTKalturaPlaybackSource): boolean {
    const sourceFormat = SupportedStreamFormat.get(source.format);
    return !!sourceFormat && sourceFormat.name === 'mp4';
  }

  static hasBlockAction(assetResponse: any): boolean {
    return BaseProviderParser.getBlockAction(assetResponse) !== undefined;
  }

  static getBlockAction(assetResponse: any): ?KalturaRuleAction {
    let blockAction;
    if (assetResponse && assetResponse.playBackContextResult) {
      blockAction = assetResponse.playBackContextResult.actions.find(action => action.type === KalturaRuleAction.Type.BLOCK);
    }
    return blockAction;
  }

  static getErrorMessages(assetResponse: any): Array<KalturaAccessControlMessage> {
    return assetResponse.playBackContextResult.messages;
  }
}
