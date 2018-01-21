//@flow
import KalturaPlaybackSource from './response-types/kaltura-playback-source'
import getLogger from '../../util/logger'
import MediaEntry from '../../entities/media-entry'
import Drm from '../../entities/drm'
import MediaSource from '../../entities/media-source'
import MediaSources from '../../entities/media-sources'
import {SupportedStreamFormat} from '../../entities/media-format'
import KalturaDrmPlaybackPluginData from '../common/response-types/kaltura-drm-playback-plugin-data'
import BaseProviderParser from '../common/base-provider-parser'

export default class OTTProviderParser extends BaseProviderParser {
  static _logger = getLogger("OTTProviderParser");

  /**
   * Returns parsed media entry by given OTT response objects.
   * @function getMediaEntry
   * @param {any} assetResponse - The asset response.
   * @param {Object} requestData - The request data object.
   * @returns {MediaEntry} - The media entry
   * @static
   * @public
   */
  static getMediaEntry(assetResponse: any, requestData: Object): MediaEntry {
    const mediaEntry = new MediaEntry();
    const playbackContext = assetResponse.playBackContextResult;
    const metadata = assetResponse.mediaDataResult;
    const kalturaSources = playbackContext.sources;
    mediaEntry.name = metadata.name;
    mediaEntry.id = metadata.id;
    const metaData = {description: metadata.description};
    Object.assign(metaData, metadata.metas);
    Object.assign(metaData, metadata.tags);
    const filteredKalturaSources = OTTProviderParser._filterSourcesByFormats(kalturaSources, requestData.formats);
    mediaEntry.sources = OTTProviderParser._getParsedSources(filteredKalturaSources);
    mediaEntry.metadata = metaData;
    mediaEntry.duration = Math.max.apply(Math, kalturaSources.map(source => source.duration));
    return mediaEntry;
  }

  /**
   * Filtered the kalturaSources array by device type.
   * @param {Array<KalturaPlaybackSource>} kalturaSources - The kaltura sources.
   * @param {Array<string>} formats - Partner device formats.
   * @returns {Array<KalturaPlaybackSource>} - Filtered kalturaSources array.
   * @private
   */
  static _filterSourcesByFormats(kalturaSources: Array<KalturaPlaybackSource>, formats: Array<string>): Array<KalturaPlaybackSource> {
    if (formats.length > 0) {
      kalturaSources = kalturaSources.filter(source => formats.includes(source.type));
    }
    return kalturaSources;
  }

  /**
   * Returns the parsed sources
   * @function _getParsedSources
   * @param {Array<KalturaPlaybackSource>} kalturaSources - The kaltura sources
   * @param {Object} playbackContext - The playback context
   * @return {MediaSources} - A media sources
   * @static
   * @private
   */
  static _getParsedSources(kalturaSources: Array<KalturaPlaybackSource>): MediaSources {
    const sources = new MediaSources();
    const addAdaptiveSource = (source: KalturaPlaybackSource) => {
      const parsedSource = OTTProviderParser._parseAdaptiveSource(source);
      const sourceFormat = SupportedStreamFormat.get(source.format);
      sources.map(parsedSource, sourceFormat);
    };
    const parseAdaptiveSources = () => {
      kalturaSources.filter((source) => !OTTProviderParser._isProgressiveSource(source)).forEach(addAdaptiveSource);
    };
    const parseProgressiveSources = () => {
      kalturaSources.filter((source) => OTTProviderParser._isProgressiveSource(source)).forEach(addAdaptiveSource);
    };
    if (kalturaSources && kalturaSources.length > 0) {
      parseAdaptiveSources();
      parseProgressiveSources();
    }
    return sources;
  }

  /**
   * Returns a parsed adaptive source
   * @function _parseAdaptiveSource
   * @param {KalturaPlaybackSource} kalturaSource - A kaltura source
   * @returns {MediaSource} - The parsed adaptive kalturaSource
   * @static
   * @private
   */
  static _parseAdaptiveSource(kalturaSource: ?KalturaPlaybackSource): MediaSource {
    const mediaSource = new MediaSource();
    if (kalturaSource) {
      const playUrl = kalturaSource.url;
      const mediaFormat = SupportedStreamFormat.get(kalturaSource.format);
      if (mediaFormat) {
        mediaSource.mimetype = mediaFormat.mimeType;
      }
      if (playUrl === '') {
        OTTProviderParser._logger.error(`failed to create play url from source, discarding source: (${kalturaSource.fileId}), ${kalturaSource.format}.`);
        return mediaSource;
      }
      mediaSource.url = playUrl;
      mediaSource.id = kalturaSource.fileId + ',' + kalturaSource.format;
      if (kalturaSource.hasDrmData()) {
        const drmParams: Array<Drm> = [];
        kalturaSource.drm.forEach((drm) => {
          drmParams.push(new Drm(drm.licenseURL, KalturaDrmPlaybackPluginData.Scheme[drm.scheme], drm.certificate));
        });
        mediaSource.drmData = drmParams;
      }
    }
    return mediaSource;
  }
}
