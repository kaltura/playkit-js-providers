// @flow
import {loggerFunctionType} from '../../src/util/logger';

declare type ProviderOptionsObject = {
  partnerId: number,
  widgetId?: string,
  logger?: loggerFunctionType,
  ks?: string,
  uiConfId?: number,
  env?: ProviderEnvConfigObject,
  networkRetryParameters?: ProviderNetworkRetryParameters,
  filterOptions?: ProviderFilterOptionsObject
};
