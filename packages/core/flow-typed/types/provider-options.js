// @flow
declare type ProviderOptionsObject = {
  partnerId: number,
  widgetId?: string,
  log?: ProviderLogConfigObject,
  ks?: string,
  uiConfId?: number,
  env?: ProviderEnvConfigObject,
  networkRetryParameters?: ProviderNetworkRetryParameters,
  filterOptions?: ProviderFilterOptionsObject
};
