//@flow
import KalturaPlaybackSource from './response-types/kaltura-playback-source'
import {DrmScheme} from '../enums'
import Logger from '../../util/logger'
import {MediaFormats} from '../../entities/media-format'
import MediaEntry from '../../entities/media-entry'
import Drm from '../../entities/drm'
import MediaSource from '../../entities/media-source'
import MediaSources from '../../entities/media-sources'

/**
 * @constant
 */
const logger = Logger.get("OttProvider");

/**
 * @constant
 * @type {Map<string, MediaFormat>}
 */
const SUPPORTED_FORMATS: Map<string, MediaFormat> = new Map([
  ["mpegdash", MediaFormats.dash],
  ["applehttp", MediaFormats.hls],
  ["url", MediaFormats.mp4]
]);

/**
 * Ott provider parser
 * @classdesc
 */
export default class ProviderParser {

  /**
   * Returns parsed media entry by given OTT response objects
   * @function getMediaEntry
   * @param {string} ks - The ks
   * @param {number} partnerID - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {any} assetResponse - The asset response
   * @returns {MediaEntry} - The media entry
   * @static
   * @public
   */
  static getMediaEntry(ks: string, partnerID: number, uiConfId: number, assetResponse: any): MediaEntry {
    let mediaEntry: MediaEntry = new MediaEntry();
    let playbackContext = assetResponse.playBackContextResult;
    let mediaData = assetResponse.mediaDataResult;
    let kalturaSources: Array<KalturaPlaybackSource> = playbackContext.sources;

    mediaEntry.name = mediaData.name;
    mediaEntry.id = mediaData.id;
    let metaData = {description: mediaData.description};
    Object.assign(metaData, mediaData.metas);
    Object.assign(metaData, mediaData.tags);
    mediaEntry.metaData = metaData;

    let sources: MediaSources = ProviderParser._getParsedSources(kalturaSources);

    mediaEntry.sources = sources;
    mediaEntry.duration = Math.max.apply(Math, kalturaSources.map(function (source) {
      return source.duration;
    }))

    return mediaEntry;
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
    let sources: MediaSources = new MediaSources();

    let addAdaptiveSource = function (source: KalturaPlaybackSource): void {
      let parsedSource = ProviderParser._parseAdaptiveSource(source);
      let sourceFormat = SUPPORTED_FORMATS.get(source.format);
      sources.map(parsedSource, sourceFormat);
    };

    let parseAdaptiveSources = function (): void {
      kalturaSources.filter((source) => !ProviderParser._isProgressiveSource(source)).forEach(addAdaptiveSource);
    };

    let parseProgressiveSources = function (): void {
      kalturaSources.filter((source) => ProviderParser._isProgressiveSource(source)).forEach(addAdaptiveSource);
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
    let mediaSource: MediaSource = new MediaSource();
    if (kalturaSource) {
      let playUrl: string = "";
      let mediaFormat = SUPPORTED_FORMATS.get(kalturaSource.format);

      if (mediaFormat) {
        mediaSource.mimetype = mediaFormat.mimeType;
      }

      playUrl = kalturaSource.url;

      if (playUrl === "") {
        logger.error(`failed to create play url from source, discarding source: (${kalturaSource.fileId}_${kalturaSource.deliveryProfileId}), ${kalturaSource.format}.`);
        return mediaSource;
      }

      mediaSource.url = playUrl;
      mediaSource.id = kalturaSource.fileId + "," + kalturaSource.format;
      if (kalturaSource.hasDrmData()) {
        let drmParams: Array<Drm> = [];
        kalturaSource.drm.forEach((drm) => {
          drmParams.push(new Drm(drm.licenseURL, DrmScheme[drm.scheme], drm.certificate));
        });
        mediaSource.drmData = drmParams;
      }
    }
    return mediaSource;
  }


  /**
   * @function _isProgressiveSource
   * @param {KalturaPlaybackSource} source - The kaltura source
   * @return {boolean} - Is progressive source
   * @static
   * @private
   */
  static _isProgressiveSource(source: KalturaPlaybackSource): boolean {
    let sourceFormat = SUPPORTED_FORMATS.get(source.format);
    return !!sourceFormat && sourceFormat.name === 'mp4';
  }

  static hasBlockActions(assetResponse: any): any {
    let playbackContext = assetResponse.playBackContextResult;
    for (var actionIndex = 0; actionIndex < playbackContext.actions.length; actionIndex ++) {
      if(playbackContext.actions[actionIndex].type == "BLOCK"){
        return playbackContext.actions[actionIndex];
      }
    }
    return null;
  }

  static  hasErrorMessage (assetResponse: any): any {
    let messages = assetResponse.playBackContextResult.messages;
    for (var messagesIndex = 0; messagesIndex < messages.length; messagesIndex ++) {
      if(messages[messagesIndex].code != "OK"){
        return messages[messagesIndex];
      }
    }
    return null;
  }
}
