import { LoggerType } from '../util/logger';
import { ProviderEnvConfigObject } from './env-config';
import { ProviderNetworkRetryParameters } from './network-retry-parameters';
import { ProviderFilterOptionsObject } from './filter-options';

export type ProviderOptionsObject = {
  partnerId: number;
  widgetId?: string;
  logger?: LoggerType;
  ks?: string;
  uiConfId?: number;
  env?: ProviderEnvConfigObject;
  networkRetryParameters?: ProviderNetworkRetryParameters;
  filterOptions?: ProviderFilterOptionsObject;
  ignoreServerConfig?: boolean;
  loadThumbnailWithKs?: boolean;
};
