// @flow
import DataLoaderManager from '../../common/data-loader-manager'
import OTTService from '../services/ott-service'

export default class OTTDataLoaderManager extends DataLoaderManager {
  /**
   * @constructor
   * @param {string} partnerId - partner id
   * @param {string} ks - ks
   */
  constructor(partnerId: number, ks: string = "") {
    super();
    this._multiRequest = OTTService.getMultiRequest(ks, partnerId);
  }
}
