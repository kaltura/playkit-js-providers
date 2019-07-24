//@flow
import OVPService from './ovp-service';
import RequestBuilder from '../../../util/request-builder';
import BaseEntryResponseProfile from '../request-params/base-entry-response-profile';

const SERVICE_NAME: string = 'baseEntry';

export default class OVPBaseEntryService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for baseentry.getPlaybackContext
   * @function getPlaybackContext
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static getPlaybackContext(serviceUrl: string, ks: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    const baseEntryServiceEntryId = ks === '{1:result:ks}' ? '{2:result:objects:0:id}' : '{1:result:objects:0:id}';
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'getPlaybackContext';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'baseEntry-getPlaybackContext';
    const contextDataParams = {objectType: 'KalturaContextDataParams', flavorTags: 'all'};
    request.params = {entryId: baseEntryServiceEntryId, ks: ks, contextDataParams: contextDataParams};
    return request;
  }

  /**
   * Creates an instance of RequestBuilder for baseentry.list
   * @function list
   * @param {string} serviceUrl The base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @param {boolean} redirectFromEntryId whether the live entry should continue and play the VOD one after the live stream ends.
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static list(serviceUrl: string, ks: string, entryId: string, redirectFromEntryId: boolean): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'list';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'list';
    request.params = OVPBaseEntryService.getEntryListReqParams(entryId, ks, redirectFromEntryId);
    return request;
  }

  /**
   * Gets  baseentry.list service params
   * @function getEntryListReqParams
   * @param {string} entryId The entry ID
   * @param {string} ks The ks
   * @param {boolean} redirectFromEntryId whether the live entry should continue and play the VOD one after the live stream ends.
   * @returns {{ks: string, filter: {redirectFromEntryId: string}, responseProfile: {fields: string, type: number}}} The service params object
   * @static
   */
  static getEntryListReqParams(entryId: string, ks: string, redirectFromEntryId: boolean): any {
    const filterParams = redirectFromEntryId ? {redirectFromEntryId: entryId} : {idEqual: entryId};
    return {ks: ks, filter: filterParams, responseProfile: new BaseEntryResponseProfile()};
  }
}
