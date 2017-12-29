// @flow
import ProviderMediaInfo from '../common/provider-media-info'
import ProviderOptions from '../common/provider-options/provider-options'
import ProviderEnvConfig from '../common/provider-options/provider-env-config'
import ProviderMediaConfig from '../common/provider-media-config'
import OVPProvider from './provider'

declare var __VERSION__: string;
declare var __NAME__: string;

const NAME = __NAME__ + '-ovp';
const VERSION = __VERSION__;

export {
  ProviderOptions,
  ProviderEnvConfig,
  ProviderMediaConfig,
  ProviderMediaInfo,
  OVPProvider as Provider,
  NAME,
  VERSION
};
