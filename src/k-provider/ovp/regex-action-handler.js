//@flow
import getLogger from '../../util/logger';
import OVPConfiguration from './config';
import {KalturaAccessControlModifyRequestHostRegexAction} from './response-types';
import OVPMediaEntryLoader from './loaders/media-entry-loader';

class RegexActionHandler {
  static _logger = getLogger('RegexActionHandler');

  /**
   * Applies the request host regex on the url
   * @function _applyRegexAction
   * @param {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @param {string} url - The url to modify
   * @returns {string} - The request host regex applied url
   * @static
   * @private
   */
  static _applyRegexAction(regexAction: KalturaAccessControlModifyRequestHostRegexAction, url: string): string {
    if (regexAction) {
      const regex = new RegExp(regexAction.pattern, 'i');
      if (url.match(regex)) {
        return url.replace(regex, regexAction.replacement + '/');
      }
    }
    return url;
  }

  /**
   * Ping the ECDN url and modify urls if needed
   * @function _pingECDNAndReplaceUrls
   * @param {ProviderMediaConfigObject} mediaConfig - The media config
   * @param {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @param {string} urlPing - The url to ping
   * @returns {Promise<ProviderMediaConfigObject>} - The media config with old or modified urls
   * @static
   * @private
   */
  static _pingECDNAndReplaceUrls(
    mediaConfig: ProviderMediaConfigObject,
    regexAction: KalturaAccessControlModifyRequestHostRegexAction,
    urlPing: string
  ): Promise<ProviderMediaConfigObject> {
    return new Promise(resolve => {
      const req = new XMLHttpRequest();
      req.open('GET', urlPing);
      req.timeout = regexAction.checkAliveTimeoutMs;
      req.onreadystatechange = () => {
        if (req.readyState === 4) {
          if (req.status === 200) {
            RegexActionHandler._modifyUrls(mediaConfig, regexAction);
          }
          resolve(mediaConfig);
        }
      };
      req.ontimeout = () => {
        RegexActionHandler._logger.warn(`Got timeout while pinging the ECDN url. ping url: ${urlPing}`);
        resolve(mediaConfig);
      };
      req.send();
    });
  }

  /**
   * Handles regex action
   * @function handleRegexAction
   * @param {ProviderMediaConfigObject} mediaConfig - The media config
   * @param {Map<string, Function>} data - The response data
   * @returns {ProviderMediaConfigObject} - The media config with old or modified urls
   * @static
   */
  static async handleRegexAction(mediaConfig: ProviderMediaConfigObject, data: Map<string, Function>): ProviderMediaConfigObject {
    let cdnUrl = OVPConfiguration.get()?.cdnUrl || '';
    const regexAction = RegexActionHandler._extractRegexActionFromData(data);
    if (regexAction && regexAction.pattern && regexAction.replacement) {
      const regExp = new RegExp(regexAction.pattern, 'i');
      if (cdnUrl.match(regExp)) {
        cdnUrl = cdnUrl.replace(regExp, regexAction.replacement);
        if (regexAction.checkAliveTimeoutMs && regexAction.checkAliveTimeoutMs > 0) {
          let urlToPing = cdnUrl + '/api_v3/service/system/action/ping/format/1';
          const finalMediaConfig = await RegexActionHandler._pingECDNAndReplaceUrls(mediaConfig, regexAction, urlToPing);
          return finalMediaConfig;
        } else {
          RegexActionHandler._modifyUrls(mediaConfig, regexAction);
          return mediaConfig;
        }
      }
    } else {
      return mediaConfig;
    }
  }

  /**
   * Modify the urls
   * @function _modifyUrls
   * @param {ProviderMediaConfigObject} mediaConfig - The media config
   * @param {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @returns {void}
   * @static
   * @private
   */
  static _modifyUrls(mediaConfig: ProviderMediaConfigObject, regexAction: KalturaAccessControlModifyRequestHostRegexAction) {
    RegexActionHandler._logger.debug(`Starting to modify urls...`);
    const sources = mediaConfig.sources;
    if (sources.hls.length > 0) {
      sources.hls.forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));
    }
    if (sources.dash.length > 0) {
      sources.dash.forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));
    }
    if (sources.progressive.length > 0) {
      sources.progressive.forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));
    }
    if (sources.image.length > 0) {
      sources.image.forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));
    }
    if (OVPConfiguration.get().replaceECDNAllUrls) {
      if (sources.captions.length > 0) {
        sources.captions.forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));
      }
      if (sources.poster) {
        sources.poster = RegexActionHandler._applyRegexAction(regexAction, sources.poster);
      }
    }
    RegexActionHandler._logger.debug(`Finished modifying urls`);
  }

  /**
   * Extracts the regex action from the data response
   * @function _extractRegexActionFromData
   * @param {Map<string, Function>} data - The response data
   * @returns {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @static
   * @private
   */
  static _extractRegexActionFromData(data: any): ?KalturaAccessControlModifyRequestHostRegexAction {
    if (data.has(OVPMediaEntryLoader.id)) {
      const mediaLoader = data.get(OVPMediaEntryLoader.id);
      if (mediaLoader && mediaLoader.response) {
        const response = (mediaLoader: OVPMediaEntryLoader).response;
        return response.playBackContextResult.getRequestHostRegexAction();
      }
    }
  }
}

export default RegexActionHandler;
