//@flow
import getLogger from '../../util/logger'
import KalturaPlaybackSource from './response-types/kaltura-playback-source'
import KalturaPlaybackContext from './response-types/kaltura-playback-context'
import KalturaAsset from './response-types/kaltura-asset'
import MediaEntry from '../../entities/media-entry'
import Drm from '../../entities/drm'
import MediaSource from '../../entities/media-source'
import MediaSources from '../../entities/media-sources'
import {SupportedStreamFormat} from '../../entities/media-format'
import KalturaDrmPlaybackPluginData from '../common/response-types/kaltura-drm-playback-plugin-data'
import BaseProviderParser from '../common/base-provider-parser'

const MediaTypeCombinations: { [mediaType: string]: Object } = {
  [KalturaAsset.Type.MEDIA]: {
    [KalturaPlaybackContext.Type.TRAILER]: () => ({type: MediaEntry.Type.VOD}),
    [KalturaPlaybackContext.Type.PLAYBACK]: (metadata) => {
      if (metadata.linearAssetId) {
        return {type: MediaEntry.Type.LIVE, dvrStatus: 0};
      }
      return {type: MediaEntry.Type.VOD};
    }
  },
  [KalturaAsset.Type.EPG]: {
    [KalturaPlaybackContext.Type.CATCHUP]: () => ({type: MediaEntry.Type.VOD}),
    [KalturaPlaybackContext.Type.START_OVER]: () => ({type: MediaEntry.Type.LIVE, dvrStatus: 1})
  },
  [KalturaAsset.Type.RECORDING]: {
    [KalturaPlaybackContext.Type.PLAYBACK]: () => ({type: MediaEntry.Type.VOD})
  }
};

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
    const mediaData = assetResponse.mediaDataResult;
    const kalturaSources = playbackContext.sources;
    mediaEntry.name = mediaData.name;
    mediaEntry.id = mediaData.id;

    const metadata = {};
    metadata.description = mediaData.description;
    metadata.poster = OTTProviderParser._getPoster(mediaData.pictures);
    Object.assign(metadata, mediaData.metas);
    Object.assign(metadata, mediaData.tags);
    mediaEntry.metadata = metadata;

    const filteredKalturaSources = OTTProviderParser._filterSourcesByFormats(kalturaSources, requestData.formats);
    mediaEntry.sources = OTTProviderParser._getParsedSources(filteredKalturaSources);

    const typeData = OTTProviderParser._getMediaType(mediaData, requestData.mediaType, requestData.contextType);
    mediaEntry.type = typeData.type;
    mediaEntry.dvrStatus = typeData.dvrStatus;
    mediaEntry.duration = Math.max.apply(Math, kalturaSources.map(source => source.duration));

    return mediaEntry;
  }

  /**
   * Gets the poster url without width and height.
   * @param {Array<Object>} pictures - Media pictures.
   * @returns {string} - Poster base url.
   * @private
   */
  static _getPoster(pictures: Array<Object>): string {
    if (pictures && pictures.length > 0) {
      const picObj = pictures[0];
      const url = picObj.url;
      const regex = /(width|height)\/\d*\/(height|width)\/\d*/g;
      const end = url.search(regex);
      if (end > -1) {
        return url.substring(0, end - 1);
      }
      return url;
    }
    return '';
  }

  /**
   * Gets the media type (LIVE/VOD)
   * @param {Object} metadata - The asset metadata.
   * @param {string} mediaType - The asset media type.
   * @param {string} contextType - The asset context type.
   * @returns {Object} - The type data object.
   * @private
   */
  static _getMediaType(metadata: Object, mediaType: string, contextType: string): Object {
    let typeData = {type: MediaEntry.Type.UNKNOWN};
    if (typeof MediaTypeCombinations[mediaType][contextType] === 'function') {
      typeData = MediaTypeCombinations[mediaType][contextType](metadata);
    }
    return typeData;
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
