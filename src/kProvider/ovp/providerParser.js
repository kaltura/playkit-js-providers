//@flow

import MediaEntry from '../../declarations/mediaEntry'
import MediaSource from '../../declarations/mediaSource'
import Drm from '../../declarations/drm'
import KalturaMediaEntry from './responseTypes/kalturaMediaEntry'
import KalturaPlaybackContext from './responseTypes/kalturaPlaybackContext'
import KalturaFlavorAsset from './responseTypes/kalturaFlavorAsset'
import KalturaMetadataListResponse from './responseTypes/kalturaMetadataListResponse'
import FormatsHelper from './formatsHelper'
import MediaFormat from '../../declarations/mediaFormat'
import PlaySourceUrlBuilder from "./playSourceUrlBuilder"
import XmlParser from '../xmlParser'
import {MediaEntryType, EntryType, MediaType} from '../enums'
import * as config from './config'
import loggerFactory from "playkit-js/src/util/loggerFactory";

/**
 * @constant
 */
const logger = loggerFactory.getLogger("OvpProvider");

/**
 * Ovp provider parser
 * @classdesc
 */
export default class ProviderParser {

  /**
   * Returns parsed media entry by given OVP response objects
   * @function getMediaEntry
   * @param {string} ks
   * @param {number} partnerID
   * @param {number} uiConfId
   * @param {string} entry
   * @param {KalturaPlaybackContext} playbackContext
   * @param {KalturaMetadataListResponse} metadataList
   * @returns {MediaEntry}
   * @static
   */
  static getMediaEntry(ks: string, partnerID: number, uiConfId: number, dataObj: {entry: KalturaMediaEntry, playbackContext: KalturaPlaybackContext, metadataList: KalturaMetadataListResponse}): MediaEntry {
    let mediaEntry: MediaEntry = new MediaEntry();
    let entry = dataObj.entry;
    let playbackContext = dataObj.playbackContext;
    let metadataList = dataObj.metadataList;
    let kalturaSources: Array<KalturaformatsHelper.jsPlaybackSource> = playbackContext.sources;
    let sources: Array<MediaSource>;

    if (kalturaSources && kalturaSources.length > 0) {
      sources = this.parseSources(ks, partnerID, uiConfId, dataObj.entry, playbackContext);
    }
    else {
      sources = [];
    }

    mediaEntry.sources = sources;

    let metadata: Map<string,string> = this.parseMetaData(metadataList);
    mediaEntry.metaData = metadata;
    mediaEntry.id = entry.id;
    mediaEntry.duration = entry.duration;

    let type: MediaEntryType;

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
   * Ovp sources parser
   * @function parseSources
   * @param {string} ks
   * @param {number} partnerID
   * @param {number} uiConfId
   * @param {string} entry
   * @param {KalturaPlaybackContext} playbackContext
   * @returns {Array.<MediaSource>}
   * @static
   */
  static parseSources(ks: string, partnerID: number, uiConfId: number, entry: KalturaMediaEntry, playbackContext: KalturaPlaybackContext): Array<MediaSource> {
    let sources: Array<MediaSource> = [];
    playbackContext.sources.forEach((source) => {

      let playUrl: string = "";
      let mediaFormat: MediaFormat = FormatsHelper.getMediaFormat(source.format, source.hasDrmData());
      let mediaSource: MediaSource = new MediaSource();
      // in case playbackSource doesn't have flavors we don't need to build the url and we'll use the provided one.
      if (source.hasFlavorIds()) {
        let splittedUrl: Array<string> = config.BASE_URL.split("/");
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
        return;
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
      sources.push(mediaSource);
    });
    return sources;
  }

  /**
   * Ovp metadata parser
   * @function parseMetaData
   * @param {KalturaMetadataListResponse} metadataList
   * @returns {Map<string,string>}
   * @static
   */
  static parseMetaData(metadataList: KalturaMetadataListResponse): Map<string,string> {
    let metadata: Object = {};
    if (metadataList && metadataList.metas && metadataList.metas.length > 0) {
      metadataList.metas.forEach((meta) => {
        let metaXml: DOMParser;
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
