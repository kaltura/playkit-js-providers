//@flow
import {clone} from '../../util/clone';

const defaultConfig: Object = {
  serviceParams: {
    apiVersion: '5.2.6'
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
