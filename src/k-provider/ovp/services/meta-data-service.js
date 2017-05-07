//@flow

import OvpService from './ovp-service'
import RequestBuilder from '../../request-builder'

const SERVICE_NAME: string = "metadata_metadata";

/**
 * Ovp metadata_metadata service methods
 * @classdesc
 */
export default class MetaDataService extends OvpService {
  /**
   * Creates an instance of RequestBuilder for metadata_metadata.list
   * @function getPlaybackContext
   * @param {string} baseUrl The service base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static list(baseUrl: string, ks: string, entryId: string) {
    let request = new RequestBuilder();
    request.service = SERVICE_NAME;
    request.action = "list";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "metadata_metadata-list";
    let filter = {objectType: "KalturaMetadataFilter", objectIdEqual: entryId, metadataObjectTypeEqual: "1"};
    let params = {filter: filter, ks: ks};
    request.params = params;
    return request;
  }
}
