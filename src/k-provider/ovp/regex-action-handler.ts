import getLogger from '../../util/logger';
import OVPConfiguration from './config';
import {KalturaAccessControlModifyRequestHostRegexAction} from './response-types';
import OVPMediaEntryLoader from './loaders/media-entry-loader';
import {ILoader, ProviderMediaConfigObject} from '../../types';

class RegexActionHandler {
  private static _logger = getLogger('RegexActionHandler');

  /**
   * Applies the request host regex on the url
   * @function _applyRegexAction
   * @param {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @param {string} url - The url to modify
   * @returns {string} - The request host regex applied url
   * @static
   * @private
   */
  private static _applyRegexAction(regexAction: KalturaAccessControlModifyRequestHostRegexAction, url: string): string {
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
  private static _isECDNUrlAlive(
    mediaConfig: ProviderMediaConfigObject,
    regexAction: KalturaAccessControlModifyRequestHostRegexAction,
    cdnUrl: string
  ): Promise<ProviderMediaConfigObject> {
    return new Promise(resolve => {
      const urlPing = cdnUrl + '/api_v3/service/system/action/ping/format/1';
      const req = new XMLHttpRequest();
      req.open('GET', urlPing);
      req.timeout = regexAction.checkAliveTimeoutMs;
      req.onreadystatechange = ():void => {
        if (req.readyState === 4) {
          if (req.status === 200) {
            RegexActionHandler._replaceHostUrls(mediaConfig, regexAction);
          }
          resolve(mediaConfig);
        }
      };
      req.ontimeout = ():void => {
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
  public static handleRegexAction(mediaConfig: ProviderMediaConfigObject, rawResponse: Map<string, ILoader>): Promise<ProviderMediaConfigObject> {
    return new Promise(resolve => {
      const cdnUrl = OVPConfiguration.get().cdnUrl;
      const regexAction = RegexActionHandler._extractRegexActionFromData(rawResponse);
      const regExp = RegexActionHandler._getRegExp(regexAction);

      if(
        cdnUrl &&
         regexAction &&
         regExp &&
         cdnUrl.match(regExp)
      ) {
        if (regexAction.checkAliveTimeoutMs > 0) {
          RegexActionHandler._logger.debug('executing ping request...');
          RegexActionHandler._isECDNUrlAlive(mediaConfig, regexAction, cdnUrl.replace(regExp, regexAction.replacement)).then(resolve);
        } else {
          RegexActionHandler._replaceHostUrls(mediaConfig, regexAction);
          resolve(mediaConfig);
        }
      } else {
        RegexActionHandler._logger.debug('exiting handleRegexAction - not applying regex action.');
        resolve(mediaConfig);
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
  private static _replaceHostUrls(mediaConfig: ProviderMediaConfigObject, regexAction: KalturaAccessControlModifyRequestHostRegexAction): void {
    RegexActionHandler._logger.debug('Starting to modify urls...');
    const sources = mediaConfig.sources;
    const {hls, dash, progressive, image} = sources;

    [...hls, ...dash, ...progressive, ...image].forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));

    if (!OVPConfiguration.get().replaceHostOnlyManifestUrls) {
      RegexActionHandler._logger.debug('replaceHostOnlyManifestUrls flag is off - modifying captions and poster URLs');
      if (sources.captions) {
        sources.captions.forEach(src => (src.url = RegexActionHandler._applyRegexAction(regexAction, src.url)));
      }

      // fix flow - poster can also be an array, but only for ott.
      if (typeof sources.poster === 'string') {
        sources.poster = RegexActionHandler._applyRegexAction(regexAction, sources.poster);
      }
    }
    RegexActionHandler._logger.debug('Finished modifying urls');
  }

  /**
   * Extracts the regex action from the data response
   * @function _extractRegexActionFromData
   * @param {Map<string, Function>} data - The response data
   * @returns {KalturaAccessControlModifyRequestHostRegexAction} regexAction - The regex action
   * @static
   * @private
   */
  private static _extractRegexActionFromData(data: Map<string, ILoader>): KalturaAccessControlModifyRequestHostRegexAction | undefined {
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
  private static _getRegExp(regexAction: KalturaAccessControlModifyRequestHostRegexAction | undefined): RegExp | undefined {
    if (regexAction && regexAction.pattern && regexAction.replacement) {
      return new RegExp(regexAction.pattern, 'i');
    }
  }
}

export default RegexActionHandler;
