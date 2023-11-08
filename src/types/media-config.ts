import {ProviderMediaConfigSessionObject} from './media-config-session';
import {ProviderMediaConfigSourcesObject} from './media-config-sources';

export type ProviderMediaConfigObject = {
  session: ProviderMediaConfigSessionObject;
  sources: ProviderMediaConfigSourcesObject;
  plugins: {[plugin: string]: Object};
};
