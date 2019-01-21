// @flow
declare type ProviderOptionsObject = {
  partnerId: number,
  widgetId?: string,
  logLevel?: string,
  ks?: string,
  uiConfId?: number,
  env?: ProviderEnvConfigObject,
  networkRetryParameters?: ProviderNetworkRetryParameters,
  filterOptions?: ProviderFilterOptionsObject
};
