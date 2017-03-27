// @flow

import OvpService from './ovpService'
import RequestBuilder from '../../requestBuilder'

const SERVICE_NAME: string = "metadata_metadata";

/**
 * Ovp metadata_metadata service methods
 * @classdesc
 */
export default class MetaDataService extends OvpService {
  /**
   * Creates an instance of RequestBuilder for metadata_metadata.list
   * @function getPlaybackContext
   * @param {string} baseUrl
   * @param {string} ks
   * @param {string} entryId
   * @returns {RequestBuilder}
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
