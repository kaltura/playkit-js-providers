import OVPService from './ovp-service';
import RequestBuilder from '../../../util/request-builder';

const SERVICE_NAME: string = 'metadata_metadata';

export default class OVPMetadataService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for metadata_metadata.list
   * @function getPlaybackContext
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public static list(serviceUrl: string, ks: string, entryId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'list';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'metadata_metadata-list';
    const filter = {objectType: 'KalturaMetadataFilter', objectIdEqual: entryId, metadataObjectTypeEqual: '1'};
    request.params = {filter: filter, ks: ks};
    return request;
  }
}
