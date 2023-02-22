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
   * Ping the ECDN url and replace the host urls if needed
   * @function _pingECDNAndReplaceHostUrls
   * @param {ProviderMediaConfigObject} mediaConfig - The media config
   * @param {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @param {string} cdnUrl - The CDN url
   * @returns {Promise<ProviderMediaConfigObject>} - The media config with old or modified urls
   * @static
   * @private
   */
  static _pingECDNAndReplaceHostUrls(
    mediaConfig: ProviderMediaConfigObject,
    regexAction: KalturaAccessControlModifyRequestHostRegexAction,
    cdnUrl: string
  ): Promise<ProviderMediaConfigObject> {
    return new Promise(resolve => {
      const urlPing = cdnUrl + '/api_v3/service/system/action/ping/format/1';
      const req = new XMLHttpRequest();
      req.open('GET', urlPing);
      req.timeout = regexAction.checkAliveTimeoutMs;
      req.onreadystatechange = () => {
        if (req.readyState === 4) {
          if (req.status === 200) {
            RegexActionHandler._replaceHostUrls(mediaConfig, regexAction);
          }
          resolve(mediaConfig);
        }
      };
      req.ontimeout = () => {
        RegexActionHandler._logger.warn(`Got timeout while pinging the ECDN url. the ping url: ${urlPing}`);
        resolve(mediaConfig);
      };
      req.send();
    });
  }

  /**
   * Handles regex action
   * @function handleRegexAction
   * @param {ProviderMediaConfigObject} mediaConfig - The media config
   * @param {Map<string, Function>} rawResponse - The raw response data from backend
   * @returns {ProviderMediaConfigObject} - The media config with old or modified urls
   * @static
   */
  static handleRegexAction(mediaConfig: ProviderMediaConfigObject, rawResponse: Map<string, Function>): Promise<ProviderMediaConfigObject> {
    return new Promise(resolve => {
      let cdnUrl = OVPConfiguration.get().cdnUrl;
      const regexAction = RegexActionHandler._extractRegexActionFromData(rawResponse);
      const regExp = RegexActionHandler._getRegExp(regexAction);

      if (!cdnUrl || !regexAction || !regExp || !cdnUrl.match(regExp)) {
        RegexActionHandler._logger.debug('exiting handleRegexAction - not applying regex action.');
        resolve(mediaConfig);
      }

      if (regexAction) {
        cdnUrl = cdnUrl.replace(regExp, regexAction.replacement);
        if (regexAction.checkAliveTimeoutMs > 0) {
          RegexActionHandler._logger.debug('executing ping request...');
          RegexActionHandler._pingECDNAndReplaceHostUrls(mediaConfig, regexAction, cdnUrl).then(resolve);
        } else {
          RegexActionHandler._replaceHostUrls(mediaConfig, regexAction);
          resolve(mediaConfig);
        }
      }
    });
  }

  /**
   * Modify the host urls - injects the configured cdn before the original host, to route requests
   * @function _replaceHostUrls
   * @param {ProviderMediaConfigObject} mediaConfig - The media config
   * @param {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @returns {void}
   * @static
   * @private
   */
  static _replaceHostUrls(mediaConfig: ProviderMediaConfigObject, regexAction: KalturaAccessControlModifyRequestHostRegexAction) {
    RegexActionHandler._logger.debug(`Starting to modify urls...`);
    const sources = mediaConfig.sources;
    const {hls, dash, progressive, image} = sources;

    [...hls, ...dash, ...progressive, ...image].forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));

    if (!OVPConfiguration.get().replaceHostOnlyManifestUrls) {
      RegexActionHandler._logger.debug(`replaceHostOnlyManifestUrls flag is off - modifying captions and poster URLs`);
      if (sources.captions) {
        sources.captions.forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));
      }

      // fix flow - poster can also be an array, but only for ott.
      if (typeof sources.poster === 'string') {
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
  static _extractRegexActionFromData(data: Map<string, Function>): ?KalturaAccessControlModifyRequestHostRegexAction {
    return data.get(OVPMediaEntryLoader.id)?.response?.playBackContextResult.getRequestHostRegexAction();
  }

  /**
   * Extracts the regex action from the data response
   * @function _extractRegexActionFromData
   * @param {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @returns {RegExp} The regex expression
   * @static
   * @private
   */
  static _getRegExp(regexAction: KalturaAccessControlModifyRequestHostRegexAction): ?RegExp {
    if (regexAction && regexAction.pattern && regexAction.replacement) {
      return new RegExp(regexAction.pattern, 'i');
    }
  }
}

export default RegexActionHandler;