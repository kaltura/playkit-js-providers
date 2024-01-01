import DataLoaderManager from '../../common/data-loader-manager';
import OVPService from '../services/ovp-service';
import { ProviderNetworkRetryParameters } from '../../../types';

/**
 * OTTDataLoaderManager is a class that handles the OVP data loading
 * @param {string} playerVersion - player version
 * @param {string} partnerId - partner id
 * @param {string} ks - ks
 * @param {ProviderNetworkRetryParameters} [networkRetryConfig] - network retry configuration
 */
export default class OVPDataLoaderManager extends DataLoaderManager {
  constructor(playerVersion: string, partnerId: number, ks: string = '', networkRetryConfig: ProviderNetworkRetryParameters) {
    super(networkRetryConfig);
    this._multiRequest = OVPService.getMultiRequest(playerVersion, ks, partnerId);
  }
}
