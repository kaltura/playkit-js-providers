// @flow
import ProviderOptions from '../common/provider-options/provider-options'
import ProviderEnvConfig from '../common/provider-media-config'
import ProviderMediaConfig from '../common/provider-media-config'
import OTTProviderMediaInfo from './provider-media-info'
import OTTProvider from './provider'

declare var __VERSION__: string;
declare var __NAME__: string;

const NAME = __NAME__ + '-ott';
const VERSION = __VERSION__;

export {
  ProviderOptions,
  ProviderEnvConfig,
  ProviderMediaConfig,
  OTTProviderMediaInfo as ProviderMediaInfo,
  OTTProvider as Provider,
  NAME,
  VERSION
};
