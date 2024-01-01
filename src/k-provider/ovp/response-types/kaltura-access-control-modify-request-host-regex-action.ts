import { KalturaRuleAction } from './kaltura-rule-action';

export class KalturaAccessControlModifyRequestHostRegexAction extends KalturaRuleAction {
  /**
   * @member - Request host regex pattern
   * @type {string}
   */
  public pattern: string;
  /**
   * @member - Request host regex replacement
   * @type {string}
   */
  public replacement: string;
  /**
   * @member - serverNodeId to generate replacment host from
   * @type {number}
   */
  public replacmenServerNodeId: number;
  /**
   * @member - checkAliveTimeout in milliseconds
   * @type {number}
   */
  public checkAliveTimeoutMs: number;
  /**
   * @constructor
   * @param {Object} data - The response
   */
  constructor(data: any) {
    super(data);
    this.pattern = data.pattern;
    this.replacement = data.replacement;
    this.replacmenServerNodeId = data.replacmenServerNodeId;
    this.checkAliveTimeoutMs = data.checkAliveTimeoutMs;
  }
}
