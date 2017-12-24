// @flow
import {ProviderOptions, ProviderEnvConfig, ProviderMediaInfo, ProviderMediaConfig} from '../common/index'
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
