export class KalturaUserEntry {
  /**
   * @member - The last played playlist entry
   * @type {string}
   */
  playlistLastEntryId: string;
  /**
   * @member - The entry referenceId
   * @type {string}
   */
  entryId: string;
  /**
   * @member - The entry id
   * @type {number}
   */
  id: number;
  /**
   * @member - username
   * @type {string}
   */
  userId: string;
  /**
   * @member - partner id
   * @type {number}
   */
  partnerId: number;
  /**
   * @member - entry status
   * @type {number}
   */
  status: number;
  /**
   * @member - Entry creation date as Unix timestamp (In seconds)
   * @type {number}
   */
  createdAt: number;
  /**
   * @member - Entry updation date as Unix timestamp (In seconds)
   * @type {number}
   */
  updatedAt: number;

  /**
   * @constructor
   * @param {Object} entry The json response
   */
  constructor(entry: any) {
    this.playlistLastEntryId = entry.playlistLastEntryId;
    this.entryId = entry.entryId;
    this.id = entry.id;
    this.userId = entry.userId;
    this.partnerId = entry.partnerId;
    this.status = entry.status;
    this.createdAt = entry.createdAt;
    this.updatedAt = entry.updatedAt;
  }
}
