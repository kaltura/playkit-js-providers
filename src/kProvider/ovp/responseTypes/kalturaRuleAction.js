// @flow
import {KalturaRuleActionType} from '../../enums'

/**
 * Ovp BE rule action
 * @classdesc
 */
export default class KalturaRuleAction {
  /**
   * @member - The type of the action
   * @type {KalturaRuleActionType}
   */
  type: KalturaRuleActionType;

  /**
   * @constructor
   * @param {Object} The json response
   */
  constructor(data: Object) {
    this.type = data.type;
  }
}


