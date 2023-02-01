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
   * @param {string} cdnUrl - The CDN url
   * @returns {Promise<ProviderMediaConfigObject>} - The media config with old or modified urls
   * @static
   * @private
   */
  static _pingECDNAndModifyUrls(
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
            RegexActionHandler._modifyHostUrls(mediaConfig, regexAction);
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
   * @param {Map<string, Function>} data - The response data
   * @returns {ProviderMediaConfigObject} - The media config with old or modified urls
   * @static
   */
  static handleRegexAction(mediaConfig: ProviderMediaConfigObject, data: Map<string, Function>): Promise<ProviderMediaConfigObject> {
    return new Promise(resolve => {
      let cdnUrl = OVPConfiguration.get().cdnUrl;
      const regexAction = RegexActionHandler._extractRegexActionFromData(data);
      const regExp = RegexActionHandler._getRegExp(regexAction);

      if (!cdnUrl || !regExp || !cdnUrl.match(regExp)) {
        RegexActionHandler._logger.debug('not applying regex action - could be cdnUrl or regExp are undefined, or cdnUrl doesnt match regExp.');
        resolve(mediaConfig);
      }

      cdnUrl = cdnUrl.replace(regExp, regexAction.replacement);

      if (regexAction.checkAliveTimeoutMs > 0) {
        RegexActionHandler._logger.debug('executing ping request...');
        RegexActionHandler._pingECDNAndModifyUrls(mediaConfig, regexAction, cdnUrl).then(resolve);
      } else {
        RegexActionHandler._modifyHostUrls(mediaConfig, regexAction);
        resolve(mediaConfig);
      }
    });
  }

  /**
   * Modify the host urls - injects the configured cdn before the original host, to route requests
   * @function _modifyUrls
   * @param {ProviderMediaConfigObject} mediaConfig - The media config
   * @param {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @returns {void}
   * @static
   * @private
   */
  static _modifyHostUrls(mediaConfig: ProviderMediaConfigObject, regexAction: KalturaAccessControlModifyRequestHostRegexAction) {
    RegexActionHandler._logger.debug(`Starting to modify urls...`);
    const sources = mediaConfig.sources;

    const applyRegexActionToSources = sources => {
      sources.forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));
    };

    applyRegexActionToSources(sources.hls);
    applyRegexActionToSources(sources.dash);
    applyRegexActionToSources(sources.progressive);
    applyRegexActionToSources(sources.image);

    if (OVPConfiguration.get().replaceECDNAllUrls) {
      RegexActionHandler._logger.debug(`replaceECDNAllUrls flag is on - modifying captions and poster URLs`);
      applyRegexActionToSources(sources.captions);

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
  static _extractRegexActionFromData(data: Map<string, Function>): ?KalturaAccessControlModifyRequestHostRegexAction {
    if (data.has(OVPMediaEntryLoader.id)) {
      return data.get(OVPMediaEntryLoader.id)?.response?.playBackContextResult.getRequestHostRegexAction();
    }
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
