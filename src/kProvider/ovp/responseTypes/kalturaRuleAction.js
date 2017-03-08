// @flow

import {KalturaRuleActionType} from '../../enums'

export default class KalturaRuleAction {

  type: KalturaRuleActionType;

  constructor(data: any) {
    this.type = data.type;
  }
}


