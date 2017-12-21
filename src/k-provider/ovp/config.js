//@flow
const defaultConfig: Object = {
  serviceUrl: "//www.kaltura.com/api_v3",
  cdnUrl: "//cdnapisec.kaltura.com",
  serviceParams: {
    apiVersion: '3.3.0',
    format: 1
  }
};

export default class OVPConfiguration {
  static set(clientConfig?: Object) {
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  }

  static get(): Object {
    return defaultConfig;
  }
}

export {OVPConfiguration};


