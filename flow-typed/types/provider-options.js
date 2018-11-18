// @flow
declare type ProviderOptionsObject = {
  partnerId: number,
  logLevel?: string,
  ks?: string,
  uiConfId?: number,
  env?: ProviderEnvConfigObject,
  networkRetryParameters: ProviderNetworkRetryParameters
  filterOptions?: ProviderFilterOptionsObject
};
