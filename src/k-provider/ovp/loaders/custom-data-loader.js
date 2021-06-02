//@flow
import RequestBuilder from '../../../util/request-builder';
import OVPConfiguration from '../config';

export default class OVPCustomDataLoader implements ILoader {
  _requests: Array<RequestBuilder>;
  _response: any = {};
  _pluginName: string;

  static get id(): string {
    return 'custom';
  }

  /**
   * @constructor
   * @param {Object} params loader params
   */
  constructor(params: Object) {
    const config = OVPConfiguration.get();
    this.requests = params.requests.map(request => ({
      ...request,
      url: request.getUrl(config.serviceUrl),
      params: {...request.params, ks: params.ks}
    }));
    this._pluginName = params.pluginName;
  }

  set requests(requests: Array<RequestBuilder>) {
    this._requests = requests;
  }

  get requests(): Array<RequestBuilder> {
    return this._requests;
  }

  get pluginName(): string {
    return this._pluginName;
  }

  set response(response: any) {
    this._response = response;
  }

  get response(): any {
    return this._response;
  }

  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  isValid(): boolean {
    return true;
  }
}
