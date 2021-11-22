// @flow
import OVPProvider from './provider';
import RequestBuilder from '../../util/request-builder';
import * as ResponseTypes from './response-types';

declare var __VERSION__: string;
declare var __NAME__: string;

const NAME = __NAME__ + '-ovp';
const VERSION = __VERSION__;

export {OVPProvider as Provider, NAME, VERSION, RequestBuilder, ResponseTypes};
