// @flow
import DataLoaderManager from '../../common/data-loader-manager'
import OVPService from '../services/ovp-service'

export default class OVPDataLoaderManager extends DataLoaderManager {
  /**
   * @constructor
   * @param {string} playerVersion - player version
   * @param {string} partnerId - partner id
   * @param {string} ks - ks
   */
  constructor(playerVersion: string, partnerId: number, ks: string = "") {
    super();
    this._multiRequest = OVPService.getMultiRequest(playerVersion, ks, partnerId);
  }
}
