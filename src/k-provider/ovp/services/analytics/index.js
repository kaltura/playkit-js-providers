// @flow
import RequestBuilder from '../../../../util/request-builder'
import OVPConfiguration from '../../config'
import OVPAnalyticsService from './analytics-service'

declare var __VERSION__: string;
declare var __NAME__: string;

const NAME = __NAME__ + '-analytics-service';
const VERSION = __VERSION__;

export {
  OVPAnalyticsService,
  OVPConfiguration,
  RequestBuilder,
  NAME,
  VERSION
};
