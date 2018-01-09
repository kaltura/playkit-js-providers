// @flow
import OTTProvider from './provider'

declare var __VERSION__: string;
declare var __NAME__: string;

const NAME = __NAME__ + '-ott';
const VERSION = __VERSION__;

export {
  OTTProvider as Provider,
  NAME,
  VERSION
};
