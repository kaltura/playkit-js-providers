import {clone} from '../../util/clone';
import {ProviderEnvConfigObject} from '../../types';

const defaultConfig: any = {
  serviceParams: {
    apiVersion: '7.8.1'
  }
};

export default class OTTConfiguration {
  static set(clientConfig?: ProviderEnvConfigObject) {
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  }

  static get(): any {
    return clone(defaultConfig);
  }
}

export {OTTConfiguration};
