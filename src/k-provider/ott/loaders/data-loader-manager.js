// @flow
import DataLoaderManager from '../../common/data-loader-manager';
import OTTService from '../services/ott-service';
/**
 * OTTDataLoaderManager is a class that handles the OTT data loading
 * @param {string} partnerId - partner id
 * @param {string} ks - ks
 * @param {ProviderNetworkRetryParameters} [networkRetryConfig] - network retry configuration
 */
export default class OTTDataLoaderManager extends DataLoaderManager {
  constructor(partnerId: number, ks: string = '', networkRetryConfig?: ProviderNetworkRetryParameters) {
    super(networkRetryConfig);
    this._multiRequest = OTTService.getMultiRequest(ks, partnerId);
  }
}
