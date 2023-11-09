import {clone} from '../../util/clone';
import {ProviderEnvConfigObject} from '../../types';

const defaultConfig: any = {
  serviceParams: {
    apiVersion: '7.8.1'
  }
};

export default class OTTConfiguration {
  public static set(clientConfig?: ProviderEnvConfigObject): void {
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  }

  public static get(): any {
    return clone(defaultConfig);
  }
}

export {OTTConfiguration};
