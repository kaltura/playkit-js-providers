// @flow

import OvpService from './ovpService'
import RequestBuilder from '../../requestBuilder'

const SERVICE_NAME: string = "metadata_metadata";

export default class MetaDataService extends OvpService {

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
