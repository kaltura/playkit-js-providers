//@flow
import ServiceResult from '../../base-service-result'
import KalturaAccessControlMessage from './kaltura-access-control-message'
import KalturaPlaybackSource from './kaltura-playback-source'
import KalturaRuleAction from './kaltura-rule-action'
import KalturaFlavorAsset from './kaltura-flavor-asset'

/**
 * Ovp BE playback context response
 * @classdesc
 */
export default class KalturaPlaybackContext extends ServiceResult {
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
   * @member - The flavor assets
   * @type {Array<KalturaFlavorAsset>}
   */
  flavorAssets: Array<KalturaFlavorAsset> = [];

  /**
   * @constructor
   * @param {Object} response The response
   */
  constructor(response: Object) {
    super(response);
    if (!this.hasError) {

      let messages = response.messages;
      if (messages) {
        messages.map(message => this.messages.push(new KalturaAccessControlMessage(message)));
      }

      let actions = response.actions;
      if (actions) {
        actions.map(action => this.actions.push(new KalturaRuleAction(action)));
      }

      let sources = response.sources;
      if (sources) {
        sources.map(source => this.sources.push(new KalturaPlaybackSource(source)));
      }

      let flavorAssets = response.flavorAssets;
      if (flavorAssets) {
        flavorAssets.map(flavor => this.flavorAssets.push(new KalturaFlavorAsset(flavor)));
      }
    }

  }
}

