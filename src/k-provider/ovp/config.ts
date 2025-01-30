import {clone} from '../../util/clone';
import {ProviderEnvConfigObject} from '../../types';

const defaultConfig: any = {
  serviceUrl: 'https://cdnapisec.kaltura.com/api_v3',
  cdnUrl: 'https://cdnapisec.kaltura.com',
  serviceParams: {
    apiVersion: '3.3.0',
    format: 1
  },
  useApiCaptions: true,
  loadThumbnailWithKs: false,
  replaceHostOnlyManifestUrls: false
};

export default class OVPConfiguration {
  public static set(clientConfig?: ProviderEnvConfigObject): void {
    if(clientConfig?.overrideServiceUrl) {
      clientConfig.serviceUrl = clientConfig.overrideServiceUrl;
    }
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  }

  public static get(): any {
    return clone(defaultConfig);
  }
}

export {OVPConfiguration};
