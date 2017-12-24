//@flow
import OVPService from './ovp-service'
import RequestBuilder from '../../../util/request-builder'

const SERVICE_NAME: string = "baseEntry";

export default class OVPBaseEntryService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for baseentry.getPlaybackContext
   * @function getPlaybackContext
   * @param {string} cdnUrl The service base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static getPlaybackContext(cdnUrl: string, ks: string, entryId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "getPlaybackContext";
    request.method = "POST";
    request.url = request.getUrl(cdnUrl);
    request.tag = "baseEntry-getPlaybackContext";
    const contextDataParams = {objectType: "KalturaContextDataParams", flavorTags: "all"};
    request.params = {entryId: entryId, ks: ks, contextDataParams: contextDataParams};
    return request;
  }

  /**
   * Creates an instance of RequestBuilder for baseentry.list
   * @function list
   * @param {string} cdnUrl The base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static list(cdnUrl: string, ks: string, entryId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = "list";
    request.method = "POST";
    request.url = request.getUrl(cdnUrl);
    request.tag = "list";
    request.params = OVPBaseEntryService.getEntryListReqParams(entryId, ks);
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
    const filterParams = {redirectFromEntryId: entryId};
    const responseProfileParams = {
      fields: "id,name,description,thumbnailUrl,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags,dvrStatus",
      type: 1
    };
    return {ks: ks, filter: filterParams, responseProfile: responseProfileParams};
  }
}
