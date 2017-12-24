//@flow
import {clone} from '../../util/clone'

const defaultConfig: Object = {
  serviceUrl: "//api-preprod.ott.kaltura.com/v4_6/api_v3",
  cdnUrl: "//api-preprod.ott.kaltura.com/v4_6",
  serviceParams: {
    apiVersion: '4.5.4.15337'
  }
};

export default class OTTConfiguration {
  static set(clientConfig?: Object) {
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  }

  static get(): Object {
    return clone(defaultConfig);
  }
}

export {OTTConfiguration};
