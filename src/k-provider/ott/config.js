//@flow

const defaultConfig: Object = {
  beUrl: "http://api-preprod.ott.kaltura.com/v4_6/api_v3",
  serviceParams: {
    clientTag: "playkit-js",
    apiVersion: '4.5.4.15337'
  }
};

export default class Configuration {

  static set(clientConfig?: Object) {
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  }

  static get(): Object {
    return defaultConfig;
  }
}

export {Configuration};



