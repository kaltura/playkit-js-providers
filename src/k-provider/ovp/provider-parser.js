//@flow
import KalturaPlaybackSource from './response-types/kaltura-playback-source'
import KalturaFlavorAsset from './response-types/kaltura-flavor-asset'
import KalturaMetadataListResponse from './response-types/kaltura-metadata-list-response'
import PlaySourceUrlBuilder from "./play-source-url-builder"
import XmlParser from '../xml-parser'
import {MediaEntryTypes, EntryTypes, MediaTypes, DrmScheme} from '../enums'
import getLogger from '../../util/logger'
import Configuration from './config'
import {MediaFormats} from '../../entities/media-format'
import MediaEntry from '../../entities/media-entry'
import Drm from '../../entities/drm'
import MediaSource from '../../entities/media-source'
import MediaSources from '../../entities/media-sources'

const config = Configuration.get();
/**
 * @constant
 */
const logger = getLogger("OvpProvider");

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
 * Ovp provider parser
 * @classdesc
 */
export default class ProviderParser {

  /**
   * Returns parsed media entry by given OVP response objects
   * @function getMediaEntry
   * @param {string} ks - The ks
   * @param {number} partnerID - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {any} mediaEntryResponse - The media entry response
   * @returns {MediaEntry} - The media entry
   * @static
   * @public
   */
  static getMediaEntry(ks: string, partnerID: number, uiConfId: number, mediaEntryResponse: any): MediaEntry {
    let mediaEntry: MediaEntry = new MediaEntry();
    let entry = mediaEntryResponse.entry;
    let playbackContext = mediaEntryResponse.playBackContextResult;
    let metadataList = mediaEntryResponse.metadataListResult;
    let kalturaSources: Array<KalturaPlaybackSource> = playbackContext.sources;
    let sources: MediaSources = ProviderParser._getParsedSources(kalturaSources, ks, partnerID, uiConfId, entry, playbackContext);

    mediaEntry.sources = sources;

    let metadata: Object = this._parseMetaData(metadataList);
    mediaEntry.metaData = metadata;
    mediaEntry.id = entry.id;
    mediaEntry.name = entry.name;
    mediaEntry.duration = entry.duration;
    mediaEntry.metaData["description"] = entry.description;
    mediaEntry.metaData["poster"] = entry.poster;

    let type: MediaEntryType = MediaEntryTypes.Unknown;

    switch (entry.entryType) {
      case MediaTypes.IMAGE.value:
        type = MediaEntryTypes.Image;
        break;
      case MediaTypes.AUDIO.value:
        type = MediaEntryTypes.Audio;
        break;
      default:
        switch (entry.type) {
          case EntryTypes.MEDIA_CLIP.value:
            type = MediaEntryTypes.Vod;
            break;
          case EntryTypes.LIVE_STREAM.value:
          case EntryTypes.LIVE_CHANNEL.value:
            type = MediaEntryTypes.Live;
            mediaEntry.dvrStatus = entry.dvrStatus;
            break;
          default:
            type = MediaEntryTypes.Unknown;
        }
    }
    mediaEntry.type = type;

    return mediaEntry;
  }

  /**
   * Returns the parsed sources
   * @function _getParsedSources
   * @param {Array<KalturaPlaybackSource>} kalturaSources - The kaltura sources
   * @param {string} ks - The ks
   * @param {number} partnerID - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {Object} entry - The entry
   * @param {Object} playbackContext - The playback context
   * @return {MediaSources} - A media sources
   * @static
   * @private
   */
  static _getParsedSources(kalturaSources: Array<KalturaPlaybackSource>, ks: string, partnerID: number, uiConfId: number, entry: Object, playbackContext: Object): MediaSources {
    let sources: MediaSources = new MediaSources();

    let addAdaptiveSource = function (source: KalturaPlaybackSource): void {
      let parsedSource = ProviderParser._parseAdaptiveSource(source, playbackContext.flavorAssets, ks, partnerID, uiConfId, entry.id);
      let sourceFormat = SUPPORTED_FORMATS.get(source.format);
      sources.map(parsedSource, sourceFormat);
    };

    let parseAdaptiveSources = function (): void {
      kalturaSources.filter((source) => !ProviderParser._isProgressiveSource(source)).forEach(addAdaptiveSource);
    };

    let parseProgressiveSources = function (): void {
      let progressiveSource = kalturaSources.find(ProviderParser._isProgressiveSource);
      sources.progressive = ProviderParser._parseProgressiveSources(progressiveSource, playbackContext.flavorAssets, ks, partnerID, uiConfId, entry.id);
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
   * @param {Array<KalturaFlavorAsset>} flavorAssets - The flavor Assets of the kaltura source
   * @param {string} ks - The ks
   * @param {number} partnerID - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {string} entryId - The entry id
   * @returns {MediaSource} - The parsed adaptive kalturaSource
   * @static
   * @private
   */
  static _parseAdaptiveSource(kalturaSource: ?KalturaPlaybackSource, flavorAssets: Array<KalturaFlavorAsset>, ks: string, partnerID: number, uiConfId: number, entryId: string): MediaSource {
    let mediaSource: MediaSource = new MediaSource();
    if (kalturaSource) {
      let playUrl: string = "";
      let mediaFormat = SUPPORTED_FORMATS.get(kalturaSource.format);
      let extension: string = "";
      if (mediaFormat) {
        extension = mediaFormat.pathExt;
        mediaSource.mimetype = mediaFormat.mimeType;
      }
      // in case playbackSource doesn't have flavors we don't need to build the url and we'll use the provided one.
      if (kalturaSource.hasFlavorIds()) {
        if (!extension && flavorAssets && flavorAssets.length > 0) {
          extension = flavorAssets[0].fileExt;
        }

        playUrl = PlaySourceUrlBuilder.build({
          entryId: entryId,
          flavorIds: kalturaSource.flavorIds,
          format: kalturaSource.format,
          ks: ks,
          partnerId: partnerID,
          uiConfId: uiConfId,
          extension: extension,
          protocol: kalturaSource.getProtocol(this._getBaseProtocol())
        });

      }
      else {
        playUrl = kalturaSource.url;
      }

      if (playUrl === "") {
        logger.error(`failed to create play url from source, discarding source: (${entryId}_${kalturaSource.deliveryProfileId}), ${kalturaSource.format}.`);
        return mediaSource;
      }

      mediaSource.url = playUrl;
      mediaSource.id = entryId + "_" + kalturaSource.deliveryProfileId + "," + kalturaSource.format;
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
   * Returns parsed progressive sources
   * @function _parseProgressiveSources
   * @param {KalturaPlaybackSource} kalturaSource - A kaltura source
   * @param {Array<KalturaFlavorAsset>} flavorAssets - The flavor Assets of the kaltura source
   * @param {string} ks - The ks
   * @param {number} partnerID - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {string} entryId - The entry id
   * @returns {Array<MediaSource>} - The parsed progressive kalturaSources
   * @static
   * @private
   */
  static _parseProgressiveSources(kalturaSource: ?KalturaPlaybackSource, flavorAssets: Array<KalturaFlavorAsset>, ks: string, partnerID: number, uiConfId: number, entryId: string): Array<MediaSource> {
    let sources = [];
    if (kalturaSource) {
      let protocol = kalturaSource.getProtocol(this._getBaseProtocol());
      let format = kalturaSource.format;
      let sourceId = kalturaSource.deliveryProfileId + "," + kalturaSource.format;
      flavorAssets.map((flavor) => {
        if (flavor.height && flavor.width) {
          let mediaSource: MediaSource = new MediaSource();
          mediaSource.id = flavor.id + sourceId;
          mediaSource.mimetype = 'video/mp4';
          mediaSource.height = flavor.height;
          mediaSource.width = flavor.width;
          mediaSource.bandwidth = flavor.bitrate * 1024;
          mediaSource.label = flavor.label || flavor.language;
          mediaSource.url = PlaySourceUrlBuilder.build({
            entryId: entryId,
            flavorIds: flavor.id,
            format: format,
            ks: ks,
            partnerId: partnerID,
            uiConfId: uiConfId,
            extension: 'mp4',
            protocol: protocol
          });
          sources.push(mediaSource);
        }
      });
    }
    return sources;
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

  /**
   * Ovp metadata parser
   * @function _parseMetaData
   * @param {KalturaMetadataListResponse} metadataList The metadata list
   * @returns {Map<string,string>} Parsed metadata
   * @static
   * @private
   */
  static _parseMetaData(metadataList: KalturaMetadataListResponse): Map<string, string> {
    let metadata: Object = {};
    if (metadataList && metadataList.metas && metadataList.metas.length > 0) {
      metadataList.metas.forEach((meta) => {
        let metaXml: Object;
        let domParser: DOMParser = new DOMParser();
        meta.xml = meta.xml.replace(/\r?\n|\r/g, "");
        meta.xml = meta.xml.replace(/>\s*/g, '>');
        meta.xml = meta.xml.replace(/>\s*/g, '>');
        metaXml = domParser.parseFromString(meta.xml, 'text/xml');
        let metasObj: Object = XmlParser.xmlToJson(metaXml);
        let metaKeys = Object.keys(metasObj.metadata);
        metaKeys.forEach((key) => {
          metadata[key] = metasObj.metadata[key]["#text"];
        })
      })
    }
    return metadata;
  }

  /**
   * Returns the base protocol
   * @function _getBaseProtocol
   * @returns {string} - The base protocol
   * @static
   * @private
   */
  static _getBaseProtocol(): string {
    const protocolRegex = /^https?:/;
    const result = protocolRegex.exec(config.baseUrl);
    const protocol = result ? result[0] : document.location.protocol;
    if (typeof protocol === "string") {
      return protocol.slice(0, -1) // remove ':' from the end
    }
    return "https";
  }
}
