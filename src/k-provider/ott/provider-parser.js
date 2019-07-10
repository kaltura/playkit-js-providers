//@flow
import getLogger from '../../util/logger';
import KalturaPlaybackSource from './response-types/kaltura-playback-source';
import KalturaPlaybackContext from './response-types/kaltura-playback-context';
import KalturaAsset from './response-types/kaltura-asset';
import MediaEntry from '../../entities/media-entry';
import Drm from '../../entities/drm';
import MediaSource from '../../entities/media-source';
import MediaSources from '../../entities/media-sources';
import EntryList from '../../entities/entry-list';
import Bumper from '../../entities/bumper';
import {SupportedStreamFormat, isProgressiveSource} from '../../entities/media-format';
import KalturaDrmPlaybackPluginData from '../common/response-types/kaltura-drm-playback-plugin-data';
import KalturaRuleAction from './response-types/kaltura-rule-action';
import KalturaAccessControlMessage from '../common/response-types/kaltura-access-control-message';
import type {OTTAssetLoaderResponse} from './loaders/asset-loader';
import KalturaBumpersPlaybackPluginData from './response-types/kaltura-bumper-playback-plugin-data';

const LIVE_ASST_OBJECT_TYPE: string = 'KalturaLiveAsset';

const MediaTypeCombinations: {[mediaType: string]: Object} = {
  [KalturaAsset.Type.MEDIA]: {
    [KalturaPlaybackContext.Type.TRAILER]: () => ({type: MediaEntry.Type.VOD}),
    [KalturaPlaybackContext.Type.PLAYBACK]: mediaAssetData => {
      if (parseInt(mediaAssetData.externalIds) > 0 || mediaAssetData.objectType === LIVE_ASST_OBJECT_TYPE) {
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

export default class OTTProviderParser {
  static _logger = getLogger('OTTProviderParser');

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
    OTTProviderParser._fillBaseData(mediaEntry, assetResponse);
    const playbackContext = assetResponse.playBackContextResult;
    const mediaAsset = assetResponse.mediaDataResult;
    const kalturaSources = playbackContext.sources;
    const filteredKalturaSources = OTTProviderParser._filterSourcesByFormats(kalturaSources, requestData.formats);
    mediaEntry.sources = OTTProviderParser._getParsedSources(filteredKalturaSources);
    const typeData = OTTProviderParser._getMediaType(mediaAsset.data, requestData.mediaType, requestData.contextType);
    mediaEntry.type = typeData.type;
    mediaEntry.dvrStatus = typeData.dvrStatus;
    mediaEntry.duration = Math.max.apply(Math, kalturaSources.map(source => source.duration));
    return mediaEntry;
  }

  /**
   * Returns parsed entry list by given OTT response objects
   * @function getEntryList
   * @param {any} playlistResponse - response
   * @returns {Playlist} - The entry list
   * @static
   * @public
   */
  static getEntryList(playlistResponse: any): EntryList {
    const entryList = new EntryList();
    const playlistItems = playlistResponse.playlistItems.entries;
    playlistItems.forEach(entry => {
      const mediaEntry = new MediaEntry();
      OTTProviderParser._fillBaseData(mediaEntry, entry);
      entryList.items.push(mediaEntry);
    });
    return entryList;
  }

  /**
   * Returns parsed bumper by given OTT response objects.
   * @function getBumper
   * @param {any} assetResponse - The asset response.
   * @returns {?Bumper} - The bumper
   * @static
   * @public
   */
  static getBumper(assetResponse: any): ?Bumper {
    const playbackContext = assetResponse.playBackContextResult;
    const progressiveBumper = playbackContext.plugins.find(
      bumper => bumper.streamertype === KalturaBumpersPlaybackPluginData.StreamerType.PROGRESSIVE
    );
    if (progressiveBumper) {
      return new Bumper(progressiveBumper);
    }
  }

  static _fillBaseData(mediaEntry: MediaEntry, assetResponse: any) {
    const mediaAsset = assetResponse.mediaDataResult;
    const metaData = OTTProviderParser.reconstructMetadata(mediaAsset);
    metaData.description = mediaAsset.description;
    metaData.name = mediaAsset.name;
    mediaEntry.metadata = metaData;
    mediaEntry.poster = OTTProviderParser._getPoster(mediaAsset.pictures);
    mediaEntry.id = mediaAsset.id;
    return mediaEntry;
  }

  /**
   * reconstruct the metadata
   * @param {Object} mediaAsset the mediaAsset that contains the response with the metadata.
   * @returns {Object} reconstructed metadata object
   */
  static reconstructMetadata(mediaAsset: Object): Object {
    const metadata = {
      metas: OTTProviderParser.addToMetaObject(mediaAsset.metas),
      tags: OTTProviderParser.addToMetaObject(mediaAsset.tags)
    };
    return metadata;
  }

  /**
   * transform an array of [{key: value},{key: value}...] to an object
   * @param {Array<Object>} list a list of objects
   * @returns {Object} an mapped object of the arrayed list.
   */
  static addToMetaObject(list: Array<Object>): Object {
    let categoryObj = {};
    if (list) {
      list.forEach(item => {
        categoryObj[item.key] = item.value;
      });
    }
    return categoryObj;
  }

  /**
   * Gets the poster url without width and height.
   * @param {Array<Object>} pictures - Media pictures.
   * @returns {string | Array<Object>} - Poster base url or array of poster candidates.
   * @private
   */
  static _getPoster(pictures: Array<Object>): string | Array<Object> {
    if (pictures && pictures.length > 0) {
      const picObj = pictures[0];
      const url = picObj.url;
      // Search for thumbnail service
      const regex = /.*\/thumbnail\/.*(?:width|height)\/\d+\/(?:height|width)\/\d+/;
      if (regex.test(url)) {
        return url;
      }
      return pictures.map(pic => ({url: pic.url, width: pic.width, height: pic.height}));
    }
    return '';
  }

  /**
   * Gets the media type (LIVE/VOD)
   * @param {Object} mediaAssetData - The media asset data.
   * @param {string} mediaType - The asset media type.
   * @param {string} contextType - The asset context type.
   * @returns {Object} - The type data object.
   * @private
   */
  static _getMediaType(mediaAssetData: Object, mediaType: string, contextType: string): Object {
    let typeData = {type: MediaEntry.Type.UNKNOWN};
    if (MediaTypeCombinations[mediaType] && MediaTypeCombinations[mediaType][contextType]) {
      typeData = MediaTypeCombinations[mediaType][contextType](mediaAssetData);
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
      if (parsedSource) {
        const sourceFormat = SupportedStreamFormat.get(source.format);
        sources.map(parsedSource, sourceFormat);
      }
    };
    const parseAdaptiveSources = () => {
      kalturaSources.filter(source => !isProgressiveSource(source.format)).forEach(addAdaptiveSource);
    };
    const parseProgressiveSources = () => {
      kalturaSources.filter(source => isProgressiveSource(source.format)).forEach(addAdaptiveSource);
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
   * @returns {?MediaSource} - The parsed adaptive kalturaSource
   * @static
   * @private
   */
  static _parseAdaptiveSource(kalturaSource: ?KalturaPlaybackSource): ?MediaSource {
    const mediaSource = new MediaSource();
    if (kalturaSource) {
      const playUrl = kalturaSource.url;
      const mediaFormat = SupportedStreamFormat.get(kalturaSource.format);
      if (mediaFormat) {
        mediaSource.mimetype = mediaFormat.mimeType;
      }
      if (!playUrl) {
        OTTProviderParser._logger.error(
          `failed to create play url from source, discarding source: (${kalturaSource.fileId}), ${kalturaSource.format}.`
        );
        return null;
      }
      mediaSource.url = playUrl;
      mediaSource.id = kalturaSource.fileId + ',' + kalturaSource.format;
      if (kalturaSource.hasDrmData()) {
        const drmParams: Array<Drm> = [];
        kalturaSource.drm.forEach(drm => {
          drmParams.push(new Drm(drm.licenseURL, KalturaDrmPlaybackPluginData.Scheme[drm.scheme], drm.certificate));
        });
        mediaSource.drmData = drmParams;
      }
    }
    return mediaSource;
  }

  static hasBlockAction(response): boolean {
    return response.playBackContextResult.hasBlockAction();
  }

  static getBlockAction(response): ?KalturaRuleAction {
    return response.playBackContextResult.getBlockAction();
  }

  static getErrorMessages(response: OTTAssetLoaderResponse): Array<KalturaAccessControlMessage> {
    return response.playBackContextResult.getErrorMessages();
  }
}
