//@flow
// import KalturaPlaybackSource from './response-types/kaltura-playback-source'
import KalturaFlavorAsset from './response-types/kaltura-flavor-asset'
import KalturaMetadataListResponse from './response-types/kaltura-metadata-list-response'
import KalturaMediaEntry from './response-types/kaltura-media-entry'
import KalturaPlaybackSource from './response-types/kaltura-playback-source'
import KalturaDrmPlaybackPluginData from '../common/response-types/kaltura-drm-playback-plugin-data'
import PlaySourceUrlBuilder from './play-source-url-builder'
import XmlParser from '../../util/xml-parser'
import getLogger from '../../util/logger'
import OVPConfiguration from './config'
import MediaEntry from '../../entities/media-entry'
import Drm from '../../entities/drm'
import MediaSource from '../../entities/media-source'
import MediaSources from '../../entities/media-sources'
import {SupportedStreamFormat} from '../../entities/media-format'
import BaseProviderParser from '../common/base-provider-parser'

const config = OVPConfiguration.get();

export default class OVPProviderParser extends BaseProviderParser{
  static _logger = getLogger("OVPProviderParser");

  /**
   * Returns parsed media entry by given OVP response objects
   * @function getMediaEntry
   * @param {string} ks - The ks
   * @param {number} partnerId - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {any} mediaEntryResponse - The media entry response
   * @returns {MediaEntry} - The media entry
   * @static
   * @public
   */
  static getMediaEntry(ks: string, partnerId: number, uiConfId: ?number, mediaEntryResponse: any): MediaEntry {
    const mediaEntry = new MediaEntry();
    const entry = mediaEntryResponse.entry;
    const playbackContext = mediaEntryResponse.playBackContextResult;
    const metadataList = mediaEntryResponse.metadataListResult;
    const kalturaSources = playbackContext.sources;

    mediaEntry.sources = OVPProviderParser._getParsedSources(kalturaSources, ks, partnerId, uiConfId, entry, playbackContext);
    mediaEntry.metadata = this._parseMetadata(metadataList);
    mediaEntry.metadata.description = entry.description;
    mediaEntry.metadata.poster = entry.poster;
    mediaEntry.id = entry.id;
    mediaEntry.name = entry.name;
    mediaEntry.duration = entry.duration;

    let type = MediaEntry.Type.UNKNOWN;
    switch (entry.entryType) {
      case KalturaMediaEntry.MediaType.IMAGE.value:
        type = MediaEntry.Type.IMAGE;
        break;
      case KalturaMediaEntry.MediaType.AUDIO.value:
        type = MediaEntry.Type.AUDIO;
        break;
      default:
        switch (entry.type) {
          case KalturaMediaEntry.EntryType.MEDIA_CLIP.value:
            type = MediaEntry.Type.VOD;
            break;
          case KalturaMediaEntry.EntryType.LIVE_STREAM.value:
          case KalturaMediaEntry.EntryType.LIVE_CHANNEL.value:
            type = MediaEntry.Type.LIVE;
            mediaEntry.dvrStatus = entry.dvrStatus;
            break;
          default:
            type = MediaEntry.Type.UNKNOWN;
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
   * @param {number} partnerId - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {Object} entry - The entry
   * @param {Object} playbackContext - The playback context
   * @return {MediaSources} - A media sources
   * @static
   * @private
   */
  static _getParsedSources(kalturaSources: Array<KalturaPlaybackSource>, ks: string, partnerId: number, uiConfId: ?number, entry: Object, playbackContext: Object): MediaSources {
    const sources = new MediaSources();
    const addAdaptiveSource = (source: KalturaPlaybackSource) => {
      const parsedSource = OVPProviderParser._parseAdaptiveSource(source, playbackContext.flavorAssets, ks, partnerId, uiConfId, entry.id);
      const sourceFormat = SupportedStreamFormat.get(source.format);
      sources.map(parsedSource, sourceFormat);
    };
    const parseAdaptiveSources = () => {
      kalturaSources.filter((source) => !OVPProviderParser._isProgressiveSource(source)).forEach(addAdaptiveSource);
    };
    const parseProgressiveSources = () => {
      const progressiveSource = kalturaSources.find(OVPProviderParser._isProgressiveSource);
      sources.progressive = OVPProviderParser._parseProgressiveSources(progressiveSource, playbackContext.flavorAssets, ks, partnerId, uiConfId, entry.id);
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
   * @param {number} partnerId - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {string} entryId - The entry id
   * @returns {MediaSource} - The parsed adaptive kalturaSource
   * @static
   * @private
   */
  static _parseAdaptiveSource(kalturaSource: ?KalturaPlaybackSource, flavorAssets: Array<KalturaFlavorAsset>, ks: string, partnerId: number, uiConfId: ?number, entryId: string): MediaSource {
    const mediaSource: MediaSource = new MediaSource();
    if (kalturaSource) {
      let playUrl: string = "";
      const mediaFormat = SupportedStreamFormat.get(kalturaSource.format);
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
          partnerId: partnerId,
          uiConfId: uiConfId,
          extension: extension,
          protocol: kalturaSource.getProtocol(this._getBaseProtocol())
        });
      } else {
        playUrl = kalturaSource.url;
      }
      if (playUrl === "") {
        OVPProviderParser._logger.error(`failed to create play url from source, discarding source: (${entryId}_${kalturaSource.deliveryProfileId}), ${kalturaSource.format}.`);
        return mediaSource;
      }
      mediaSource.url = playUrl;
      mediaSource.id = entryId + "_" + kalturaSource.deliveryProfileId + "," + kalturaSource.format;
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

  /**
   * Returns parsed progressive sources
   * @function _parseProgressiveSources
   * @param {KalturaPlaybackSource} kalturaSource - A kaltura source
   * @param {Array<KalturaFlavorAsset>} flavorAssets - The flavor Assets of the kaltura source
   * @param {string} ks - The ks
   * @param {number} partnerId - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {string} entryId - The entry id
   * @returns {Array<MediaSource>} - The parsed progressive kalturaSources
   * @static
   * @private
   */
  static _parseProgressiveSources(kalturaSource: ?KalturaPlaybackSource, flavorAssets: Array<KalturaFlavorAsset>, ks: string, partnerId: number, uiConfId: ?number, entryId: string): Array<MediaSource> {
    const sources = [];
    if (kalturaSource) {
      const protocol = kalturaSource.getProtocol(this._getBaseProtocol());
      const format = kalturaSource.format;
      const sourceId = kalturaSource.deliveryProfileId + "," + kalturaSource.format;
      flavorAssets.map((flavor) => {
        if (flavor.height && flavor.width) {
          const mediaSource: MediaSource = new MediaSource();
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
            partnerId: partnerId,
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
   * Ovp metadata parser
   * @function _parseMetaData
   * @param {KalturaMetadataListResponse} metadataList The metadata list
   * @returns {Object} Parsed metadata
   * @static
   * @private
   */
  static _parseMetadata(metadataList: KalturaMetadataListResponse): Object {
    const metadata = {};
    if (metadataList && metadataList.metas && metadataList.metas.length > 0) {
      metadataList.metas.forEach((meta) => {
        let metaXml: Object;
        const domParser: DOMParser = new DOMParser();
        meta.xml = meta.xml.replace(/\r?\n|\r/g, "");
        meta.xml = meta.xml.replace(/>\s*/g, '>');
        meta.xml = meta.xml.replace(/>\s*/g, '>');
        metaXml = domParser.parseFromString(meta.xml, 'text/xml');
        const metasObj: Object = XmlParser.xmlToJson(metaXml);
        const metaKeys = Object.keys(metasObj.metadata);
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
    const result = protocolRegex.exec(config.cdnUrl);
    const protocol = result ? result[0] : document.location.protocol;
    if (typeof protocol === "string") {
      return protocol.slice(0, -1) // remove ':' from the end
    }
    return "https";
  }
}
