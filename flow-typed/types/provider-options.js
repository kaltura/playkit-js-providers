// @flow
import { LoggerType } from '../../src/util/logger';

declare type ProviderOptionsObject = {
  partnerId: number,
  widgetId?: string,
  logger?: LoggerType,
  ks?: string,
  uiConfId?: number,
  env?: ProviderEnvConfigObject,
  networkRetryParameters?: ProviderNetworkRetryParameters,
  filterOptions?: ProviderFilterOptionsObject,
  ignoreServerConfig?: boolean,
  loadThumbnailWithKs?: boolean
};
