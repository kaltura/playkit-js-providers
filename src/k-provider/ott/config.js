//@flow
import {clone} from '../../util/clone';

const defaultConfig: Object = {
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

  static get(): Object {
    return clone(defaultConfig);
  }
}

export {OTTConfiguration};
