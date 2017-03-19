// @flow
import ServiceResult from '../../baseServiceResult'
import KalturaAccessControlMessage from '../../ovp/responseTypes/kalturaAccessControlMessage'
import KalturaPlaybackSource from '../../ovp/responseTypes/kalturaPlaybackSource'
import KalturaRuleAction from '../../ovp/responseTypes/kalturaRuleAction'
import KalturaFlavorAsset from '../../ovp/responseTypes/kalturaFlavorAsset'


export default class KalturaPlaybackContext extends ServiceResult {

  sources: Array<KalturaPlaybackSource> = [];
  actions: Array<KalturaRuleAction> = [];
  messages: Array<KalturaAccessControlMessage> = [];
  flavorAssets: Array<KalturaFlavorAsset> = [];

  constructor(response: any) {
    super(response);
    if (!this.hasError) {

      let messages = response.messages;
      if (messages)
        messages.map(message => this.messages.push(new KalturaAccessControlMessage(message)));

      let actions = response.actions;
      if (actions)
        actions.map(action => this.actions.push(new KalturaRuleAction(action)));

      let sources = response.sources;
      if (sources)
        sources.map(source => this.sources.push(new KalturaPlaybackSource(source)));


      let flavorAssets = response.flavorAssets;
      if (flavorAssets)
        flavorAssets.map(flavor => this.flavorAssets.push(new KalturaFlavorAsset(flavor)));
    }

  }

}

