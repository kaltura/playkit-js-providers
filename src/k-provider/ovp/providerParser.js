//@flow

import KalturaMediaEntry from './response-types/kaltura-media-entry'
import KalturaPlaybackContext from './response-types/kaltura-playback-context'
import KalturaPlaybackSource from './response-types/kaltura-playback-source'
import KalturaFlavorAsset from './response-types/kaltura-flavor-asset'
import KalturaMetadataListResponse from './response-types/kaltura-metadata-list-response'
import PlaySourceUrlBuilder from "./play-source-url-builder"
import XmlParser from '../xml-parser'
import {MediaEntryType, EntryType, MediaType} from '../enums'
import Logger from '../../util/logger'
import Configuration from './config'
import {MediaFormat} from '../../entities/media-format'
import MediaEntry from '../../entities/media-entry'
import Drm from '../../entities/drm'
import MediaSource from '../../entities/media-source'

const config = Configuration.get();
/**
 * @constant
 */
const logger = Logger.get("OvpProvider");

/**
 * @constant
 * @type {Map<string, MediaFormat>}
 */
const SUPPORTED_FORMATS: Map<string, MediaFormat> = new Map([
  ["mpegdash", MediaFormat.dash],
  ["applehttp", MediaFormat.hls],
  ["url", MediaFormat.mp4]
]);

/**
 * Ovp provider parser
 * @classdesc
 */
export default class ProviderParser {

  /**
   * Returns parsed media entry by given OVP response objects
   * @function getMediaEntry
   * @param {string} ks The ks
   * @param {number} partnerID The partner ID
   * @param {number} uiConfId The uiConf ID
   * @param {any} mediaEntryResponse The media entry response
   * @returns {MediaEntry} The media entry
   * @static
   */
  static getMediaEntry(ks: string, partnerID: number, uiConfId: number, mediaEntryResponse: any): MediaEntry {
    let mediaEntry: MediaEntry = new MediaEntry();
    let entry = mediaEntryResponse.entry;
    let playbackContext = mediaEntryResponse.playBackContextResult;
    let metadataList = mediaEntryResponse.metadataListResult;
    let kalturaSources: Array<KalturaPlaybackSource> = playbackContext.sources;
    let sources: Array<MediaSource> = [];

    if (kalturaSources && kalturaSources.length > 0) {
      kalturaSources.forEach((source) => {
        sources.push(this.parseSource(source, ks, partnerID, uiConfId, entry, playbackContext));
      });
    }
    else {
      sources = [];
    }

    mediaEntry.sources = sources;

    let metadata: Map<string,string> = this.parseMetaData(metadataList);
    mediaEntry.metaData = metadata;
    mediaEntry.id = entry.id;
    mediaEntry.duration = entry.duration;

    let type: MediaEntryType = MediaEntryType.Unknown;

    switch (entry.entryType) {
      case MediaType.IMAGE.value:
        type = MediaEntryType.Image;
        break;
      case MediaType.AUDIO.value:
        type = MediaEntryType.Audio;
        break;
      default:
        switch (entry.type) {
          case EntryType.MEDIA_CLIP.value:
            type = MediaEntryType.Vod;
            break;
          case EntryType.LIVE_STREAM.value:
          case EntryType.LIVE_CHANNEL.value:
            type = MediaEntryType.Live;
            break;
          default:
            type = MediaEntryType.Unknown;
        }
    }
    mediaEntry.type = type;

    return mediaEntry;
  }

  /**
   *
   * @param {KalturaPlaybackSource} source The source
   * @param {string} ks The ks
   * @param {number} partnerID The partner ID
   * @param {number} uiConfId The uiConf ID
   * @param {KalturaMediaEntry} entry The entry
   * @param {KalturaPlaybackContext} playbackContext The playback context
   * @returns {MediaSource}  The parsed media source
   * @static
   */
  static parseSource(source: KalturaPlaybackSource, ks: string, partnerID: number, uiConfId: number, entry: KalturaMediaEntry, playbackContext: KalturaPlaybackContext): MediaSource {
    let playUrl: string = "";
    let mediaFormat = SUPPORTED_FORMATS.get(source.format);
    let mediaSource: MediaSource = new MediaSource();
    // in case playbackSource doesn't have flavors we don't need to build the url and we'll use the provided one.
    if (source.hasFlavorIds()) {
      let splittedUrl: Array<string> = config.baseUrl.split("/");
      let baseProtocol: string;
      if (splittedUrl && splittedUrl.length > 0) {
        baseProtocol = splittedUrl[0].substring(0, splittedUrl[0].length - 1);
      }
      else {
        baseProtocol = "http";
      }

      let extension: string = "";
      if (!mediaFormat) {
        let flavorIdsArr = source.flavorIds.split(",");
        let flavors: Array<KalturaFlavorAsset> = playbackContext.flavorAssets.filter(flavor => flavorIdsArr.indexOf(flavor.id) != -1);
        if (flavors && flavors.length > 0) {
          extension = flavors[0].fileExt;
        }
      }
      else {
        extension = mediaFormat.pathExt;
        mediaSource.mimetype = mediaFormat.mimeType;
      }

      playUrl = PlaySourceUrlBuilder.build({
        entryId: entry.id,
        flavorIds: source.flavorIds,
        format: source.format,
        ks: ks,
        partnerId: partnerID,
        uiConfId: uiConfId,
        extension: extension,
        protocol: source.getProtocol(baseProtocol)
      });

    }
    else {
      playUrl = source.url;
    }

    if (playUrl == "") {
      logger.error(`failed to create play url from source, discarding source: (${entry.id}_${source.deliveryProfileId}), ${source.format}.`);
      return mediaSource;
    }


    mediaSource.src = playUrl;
    mediaSource.id = entry.id + "_" + source.deliveryProfileId + "," + source.format;
    if (source.hasDrmData()) {
      let drmParams: Array<Drm> = [];
      source.drm.forEach((drm) => {
        drmParams.push(new Drm(drm.licenseURL, drm.scheme));
      });
      mediaSource.drmData = drmParams;
    }
    return mediaSource;
  }

  /**
   * Ovp metadata parser
   * @function parseMetaData
   * @param {KalturaMetadataListResponse} metadataList The metadata list
   * @returns {Map<string,string>} Parsed metadata
   * @static
   */
  static parseMetaData(metadataList: KalturaMetadataListResponse): Map<string,string> {
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
}
