// @flow
import RequestBuilder from '../../../../util/request-builder'
import OVPConfiguration from '../../config'
import OVPStatsService from './stats-service'

declare var __VERSION__: string;
declare var __NAME__: string;

const NAME = __NAME__ + '-stats-service';
const VERSION = __VERSION__;

export {
  OVPStatsService,
  OVPConfiguration,
  RequestBuilder,
  NAME,
  VERSION
};
