export default class KalturaRuleAction {
  public static Type: { [type: string]: string | number } = {
    BLOCK: 'BLOCK',
    START_DATE_OFFSET: 'START_DATE_OFFSET',
    END_DATE_OFFSET: 'END_DATE_OFFSET',
    USER_BLOCK: 'USER_BLOCK',
    ALLOW_PLAYBACK: 'ALLOW_PLAYBACK',
    BLOCK_PLAYBACK: 'BLOCK_PLAYBACK',
    APPLY_DISCOUNT_MODULE: 'APPLY_DISCOUNT_MODULE'
  };

  /**
   * @member - The type of the action
   * @type {string|number}
   */
  public type: string | number;

  /**
   * @constructor
   * @param {Object} data - The response
   */
  constructor(data: any) {
    this.type = data.type;
  }
}
