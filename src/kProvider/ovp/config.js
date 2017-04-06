//@flow

const defaultConfig: Object = {
  beUrl: "http://www.kaltura.com/api_v3",
  baseUrl: "https://cdnapisec.kaltura.com",
  serviceParams: {
    clientTag: "playkit-js",
    apiVersion: '3.3.0',
    format: 1
  }
};

export default class Configuration {

  static set(clientConfig: Object) {
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  }

  static get(): Object {
    return defaultConfig;
  }
}


