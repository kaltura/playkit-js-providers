//@flow
import {clone} from '../../util/clone'

const defaultConfig: Object = {
  serviceUrl: "//api-preprod.ott.kaltura.com/v4_6/api_v3",
  cdnUrl: "//api-preprod.ott.kaltura.com/v4_7",
  serviceParams: {
    apiVersion: '4.7.1'
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
