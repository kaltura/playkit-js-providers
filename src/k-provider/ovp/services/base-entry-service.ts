import OVPService from './ovp-service';
import RequestBuilder from '../../../util/request-builder';
import {BaseEntryResponseProfile} from '../request-params/base-entry-response-profile';

const SERVICE_NAME: string = 'baseEntry';

export default class OVPBaseEntryService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for baseentry.getPlaybackContext
   * @function getPlaybackContext
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @param {serviceEntryId} serviceEntryId The entry id from the request result (to support loading by referenceId)
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public static getPlaybackContext(serviceUrl: string, ks: string, serviceEntryId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'getPlaybackContext';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'baseEntry-getPlaybackContext';
    const contextDataParams = {objectType: 'KalturaContextDataParams', flavorTags: 'all'};
    request.params = {entryId: serviceEntryId, ks: ks, contextDataParams: contextDataParams};
    return request;
  }

  /**
   * Creates an instance of RequestBuilder for baseentry.list
   * @function list
   * @param {string} serviceUrl The base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @param {boolean} redirectFromEntryId whether the live entry should continue and play the VOD one after the live stream ends.
   * @param {string} referenceId a Reference id instead of an entry id
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public static list(serviceUrl: string, ks: string, entryId: string, redirectFromEntryId: boolean, referenceId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'list';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'list';
    request.params = OVPBaseEntryService.getEntryListReqParams(entryId, ks, redirectFromEntryId, referenceId);
    return request;
  }

  /**
   * Gets  baseentry.list service params
   * @function getEntryListReqParams
   * @param {string} entryId The entry ID
   * @param {string} ks The ks
   * @param {boolean} redirectFromEntryId whether the live entry should continue and play the VOD one after the live stream ends.
   * @param {string} referenceId a Reference id instead of an entry id
   * @returns {{ks: string, filter: {redirectFromEntryId: string}, responseProfile: {fields: string, type: number}}} The service params object
   * @static
   */
  public static getEntryListReqParams(entryId: string, ks: string, redirectFromEntryId: boolean, referenceId: string): any {
    let filterParams = {};
    if (entryId) {
      filterParams = redirectFromEntryId ? {redirectFromEntryId: entryId} : {idEqual: entryId};
    } else if (referenceId) {
      filterParams = {objectType: 'KalturaBaseEntryFilter', referenceIdEqual: referenceId};
    }

    return {ks: ks, filter: filterParams, responseProfile: new BaseEntryResponseProfile()};
  }
}
