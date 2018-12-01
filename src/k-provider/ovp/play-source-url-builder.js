//@flow
import OVPConfiguration from './config';

type urlParamsType = {
  partnerId: string,
  entryId: string,
  ks: string,
  uiConfId: string,
  format: string,
  protocol: string,
  extension: string,
  flavorIds: string
};

export default class PlaySourceUrlBuilder {
  /**
   * Returns source url by given url params
   * @function build
   * @param {urlParamsType} urlParams The params
   * @returns {string} The URL
   * @static
   */
  static build(urlParams: urlParamsType): string {
    const config = OVPConfiguration.get();
    const cdnUrl: string = config.cdnUrl;
    const {partnerId, entryId, ks, uiConfId, format, protocol, extension, flavorIds} = urlParams;

    //verify mandatory params
    if (!cdnUrl || !partnerId || !entryId || !extension || !format || !protocol || !extension) {
      return '';
    }

    let playUrl = cdnUrl;
    if (!cdnUrl.endsWith('/')) {
      playUrl += '/';
    }
    playUrl += 'p/' + partnerId + '/sp/' + partnerId + '00' + '/playManifest/entryId/' + entryId + '/protocol/' + protocol + '/format/' + format;

    if (flavorIds !== '') {
      playUrl += '/flavorIds/' + flavorIds;
    } else if (uiConfId !== '') {
      playUrl += '/uiConfId/' + uiConfId;
    }

    if (ks !== '') {
      playUrl += '/ks/' + ks;
    }

    playUrl += '/a.' + extension;

    if (uiConfId && flavorIds !== '') {
      playUrl += '?uiConfId=' + uiConfId;
    }

    return playUrl;
  }
}
