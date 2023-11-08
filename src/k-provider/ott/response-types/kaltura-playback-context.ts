import ServiceResult from '../../common/base-service-result';
import {KalturaAccessControlMessage} from '../../common/response-types/kaltura-access-control-message';
import KalturaRuleAction from './kaltura-rule-action';
import KalturaPlaybackSource from './kaltura-playback-source';
import KalturaBumpersPlaybackPluginData from './kaltura-bumper-playback-plugin-data';

export default class KalturaPlaybackContext extends ServiceResult {
  static Type: {[type: string]: string} = {
    DOWNLOAD: 'DOWNLOAD',
    TRAILER: 'TRAILER',
    CATCHUP: 'CATCHUP',
    START_OVER: 'START_OVER',
    PLAYBACK: 'PLAYBACK'
  };
  /**
   * @member - The playback sources
   * @type {Array<KalturaPlaybackSource>}
   */
  sources: Array<KalturaPlaybackSource> = [];
  /**
   * @member - Array of actions as received from the rules that invalidated
   * @type {Array<KalturaRuleAction>}
   */
  actions: KalturaRuleAction[] = [];
  /**
   * @member - Array of access control massages
   * @type {Array<KalturaAccessControlMessage>}
   */
  messages: Array<KalturaAccessControlMessage> = [];
  /**
   * @member - Array of bumper plugins
   * @type {Array<KalturaBumpersPlaybackPluginData>}
   */
  plugins: Array<KalturaBumpersPlaybackPluginData> = [];

  /**
   * @constructor
   * @param {Object} response The response
   */
  constructor(response: any) {
    super(response);
    if (!this.hasError) {
      const messages = response.messages;
      if (messages) {
        messages.map(message => this.messages.push(new KalturaAccessControlMessage(message)));
      }
      const actions = response.actions;
      if (actions) {
        actions.map(action => this.actions.push(new KalturaRuleAction(action)));
      }
      const sources = response.sources;
      if (sources) {
        sources.map(source => this.sources.push(new KalturaPlaybackSource(source)));
      }
      const plugins = response.plugins;
      if (plugins) {
        plugins.map(plugin => this.plugins.push(new KalturaBumpersPlaybackPluginData(plugin)));
      }
    }
  }

  hasBlockAction(): boolean {
    return this.getBlockAction() !== undefined;
  }

  getBlockAction(): KalturaRuleAction | undefined {
    return this.actions.find(action => action.type === KalturaRuleAction.Type.BLOCK);
  }

  getErrorMessages(): Array<KalturaAccessControlMessage> {
    return this.messages;
  }
}
