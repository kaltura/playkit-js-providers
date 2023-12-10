import OVPService from './ovp-service';
import RequestBuilder from '../../../util/request-builder';
import {BaseEntryResponseProfile} from '../request-params/base-entry-response-profile';

const SERVICE_NAME: string = 'playlist';

export default class OVPPlaylistService extends OVPService {
  /**
   * Creates an instance of RequestBuilder for playlist.getPlaybackContext
   * @function getPlaybackContext
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @param {string} playlistId The playlist ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public static execute(serviceUrl: string, ks: string, playlistId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'execute';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = `${SERVICE_NAME}-execute`;
    request.params = {
      ks: ks,
      id: playlistId,
      responseProfile: new BaseEntryResponseProfile()
    };
    return request;
  }

  /**
   * Creates an instance of RequestBuilder for playlist.list
   * @function list
   * @param {string} serviceUrl The base URL
   * @param {string} ks The ks
   * @param {string} playlistId The playlist ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  public static get(serviceUrl: string, ks: string, playlistId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = SERVICE_NAME;
    request.action = 'get';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = `${SERVICE_NAME}-get`;
    request.params = {
      ks: ks,
      id: playlistId,
      responseProfile: {
        fields: 'id,name,description,thumbnailUrl',
        type: 1
      }
    };
    return request;
  }

  /**
   * gets latest played entry ID
   * @function list
   * @param {string} serviceUrl The base URL
   * @param {string} ks The ks
   * @param {string} playlistId The playlist ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  static getLastEntryId(serviceUrl: string, ks: string, playlistId: string): RequestBuilder {
    const headers: Map<string, string> = new Map();
    headers.set('Content-Type', 'application/json');
    const request = new RequestBuilder(headers);
    request.service = 'userEntry';
    request.action = 'list';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'userEntry-list';
    request.params = {
      ks: ks,
      filter: {
        objectType: 'KalturaViewHistoryUserEntry',
        entryIdEqual: playlistId,
        userIdEqualCurrent: 1
      },
      responseProfile: {
        fields: 'playlistLastEntryId',
        type: 1
      }
    };
    return request;
  }
}
