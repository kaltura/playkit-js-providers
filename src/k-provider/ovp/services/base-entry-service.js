//@flow
import OvpService from './ovp-service'
import RequestBuilder from '../../request-builder'

const SERVICE_NAME: string = "baseEntry";

/**
 * Ovp BaseEntry service methods
 * @classdesc
 */
export default class BaseEntryService extends OvpService {

  /**
   * Creates an instance of RequestBuilder for baseentry.getPlaybackContext
   * @function getPlaybackContext
   * @param {string} baseUrl The service base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static getPlaybackContext(baseUrl: string, ks: string, entryId: string): RequestBuilder {
    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "getPlaybackContext";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "baseEntry-getPlaybackContext";
    let contextDataParams = {objectType: "KalturaContextDataParams", flavorTags: "all"};
    let params = {entryId: entryId, ks: ks, contextDataParams: contextDataParams};
    request.params = params;
    return request;
  }

  /**
   * Creates an instance of RequestBuilder for baseentry.list
   * @function list
   * @param {string} baseUrl The base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static list(baseUrl: string, ks: string, entryId: string): RequestBuilder {
    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "list";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "list";
    request.params = BaseEntryService.getEntryListReqParams(entryId, ks);
    return request;
  }

  /**
   * Gets  baseentry.list service params
   * @function getEntryListReqParams
   * @param {string} entryId The entry ID
   * @param {string} ks The ks
   * @returns {{ks: string, filter: {redirectFromEntryId: string}, responseProfile: {fields: string, type: number}}} The service params object
   * @static
   */
  static getEntryListReqParams(entryId: string, ks: string): any {
    let filterParams = {redirectFromEntryId: entryId};
    let responseProfileParams = {
      fields: "id,name,description,thumbnailUrl,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags",
      type: 1
    };
    return {ks: ks, filter: filterParams, responseProfile: responseProfileParams};
  }
}
