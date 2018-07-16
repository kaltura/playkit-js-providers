//@flow
import ServiceResult from '../../common/base-service-result';
import KalturaAccessControlMessage from '../../common/response-types/kaltura-access-control-message';
import KalturaRuleAction from '../../common/response-types/kaltura-rule-action';
import KalturaPlaybackSource from './kaltura-playback-source';

export default class KalturaPlaybackContext extends ServiceResult {
  static Type: {[type: string]: string} = {
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
  actions: Array<KalturaRuleAction> = [];
  /**
   * @member - Array of actions as received from the rules that invalidated
   * @type {Array<KalturaAccessControlMessage>}
   */
  messages: Array<KalturaAccessControlMessage> = [];

  /**
   * @constructor
   * @param {Object} response The response
   */
  constructor(response: Object) {
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
    }
  }
}
