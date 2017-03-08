// @flow

import OvpService from './ovpService'
import RequestBuilder from '../../requestBuilder'

export default class BaseEntryService extends OvpService {

  static getPlaybackContext(baseUrl: string, ks: string, entryId: string): RequestBuilder {

    let request = new RequestBuilder;
    request.service = "baseEntry";
    request.action = "getPlaybackContext";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "baseEntry-getPlaybackContext";
    let contextDataParams = {objectType: "KalturaContextDataParams", flavorTags: "all"};
    let params = {entryId: entryId, ks: ks, contextDataParams: contextDataParams};
    request.params = params;
    return request;

  }

  static list(baseUrl: string, ks: string, entryId: string): RequestBuilder {

    let request = new RequestBuilder;
    request.service = "baseEntry";
    request.action = "list";
    request.method = "POST";
    request.baseUrl = baseUrl;
    request.tag = "list";
    request.params = BaseEntryService.getEntryListReqParams(entryId, ks);
    return request;

  }

  static getEntryListReqParams(entryId: string, ks: string): any {

    let filterParams = {redirectFromEntryId: entryId};
    let responseProfileParams = {
      fields: "id,name,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags",
      type: 1
    };
    return {ks: ks, filter: filterParams, responseProfile: responseProfileParams};

  }


}
