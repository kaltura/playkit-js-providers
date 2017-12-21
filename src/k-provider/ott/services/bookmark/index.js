// @flow
import RequestBuilder from '../../../../util/request-builder'
import OTTConfiguration from '../../config'
import OTTBookmarkService from './bookmark-service'

declare var __VERSION__: string;
declare var __NAME__: string;

const NAME = __NAME__ + '-bookmark-service';
const VERSION = __VERSION__;

export {
  OTTBookmarkService,
  OTTConfiguration,
  RequestBuilder,
  NAME,
  VERSION
};
