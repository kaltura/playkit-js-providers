import OTTProvider from './provider';
import KalturaPlaybackContext from './response-types/kaltura-playback-context';
import KalturaAsset from './response-types/kaltura-asset';

declare var __VERSION__: string;
declare var __NAME__: string;

const NAME = __NAME__ + '-ott';
const VERSION = __VERSION__;

const ContextType = KalturaPlaybackContext.Type;
const MediaType = KalturaAsset.Type;

export {OTTProvider as Provider, ContextType, MediaType, NAME, VERSION};
