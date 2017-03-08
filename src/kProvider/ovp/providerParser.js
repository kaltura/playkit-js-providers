// @flow

import MediaEntry from '../../../declarations/mediaEntry'
import MediaSource from '../../../declarations/mediaSource'
import Drm from '../../../declarations/drm'
import KalturaMediaEntry from './responseTypes/kalturaMediaEntry'
import KalturaPlaybackContext from './responseTypes/kalturaPlaybackContext'
import KalturaFlavorAsset from './responseTypes/kalturaFlavorAsset'
import KalturaMetadataListResponse from './responseTypes/kalturaMetadataListResponse'
import KalturaPlaybackSource from './responseTypes/kalturaPlaybackSource'
import KalturaDrmPlaybackPluginData from './responseTypes/kalturaDrmPlaybackPluginData'
import FormatsHelper from './formatsHelper'
import MediaFormat from '../../../declarations/mediaFormat'
import PlaySourceUrlBuilder from "./playSourceUrlBuilder"
import XmlParser from '../xmlParser'
import {MediaEntryType, EntryType} from '../enums'


export default class ProviderParser {

  static getMediaEntry(baseUrl: string, ks: string, partnerID: string, uiConfId: string, entry: KalturaMediaEntry, playbackContext: KalturaPlaybackContext, metadataList: KalturaMetadataListResponse): MediaEntry {
    let mediaEntry: MediaEntry = new MediaEntry();
    let kalturaSources: Array<KalturaPlaybackSource> = playbackContext.sources;
    let sources: Array<MediaSource>;

    if (kalturaSources && kalturaSources.length > 0) {
      sources = this.parseSources(baseUrl, ks, partnerID, uiConfId, entry, playbackContext);
    }
    else
      sources = [];
    mediaEntry.sources = sources;

    let metadata: Map<string,string> = this.parseMetaData(metadataList);
    mediaEntry.metaData = metadata;
    mediaEntry.id = entry.id;
    mediaEntry.duration = entry.duration;

    let type: MediaEntryType;

    switch (entry.type) {
      case EntryType.MEDIA_CLIP:
        type = MediaEntryType.Vod;
        break;
      case EntryType.LIVE_STREAM:
        type = MediaEntryType.Live;
        break;
      default:
        type = MediaEntryType.Unknown;
    }

    mediaEntry.type = type;

    return mediaEntry;
  }

  static parseSources(baseUrl: string, ks: string, partnerID: string, uiConfId: string, entry: KalturaMediaEntry, playbackContext: KalturaPlaybackContext): Array<MediaSource> {
    let sources: Array<MediaSource> = [];
    playbackContext.sources.forEach((source) => {

      let playUrl: string = "";
      let mediaFormat: MediaFormat = FormatsHelper.getMediaFormat(source.format, source.hasDrmData());

      // in case playbackSource doesn't have flavors we don't need to build the url and we'll use the provided one.
      if (source.hasFlavorIds()) {
        let splittedUrl: Array<string> = baseUrl.split("/");
        let baseProtocol: string;
        if (splittedUrl && splittedUrl.length > 0)
          baseProtocol = splittedUrl[0].substring(0, splittedUrl[0].length - 1);
        else
          baseProtocol = "http";
        let urlBuilder: PlaySourceUrlBuilder = new PlaySourceUrlBuilder();
        urlBuilder.baseUrl = baseUrl;
        urlBuilder.entryId = entry.id;
        urlBuilder.flavorIds = source.flavorIds;
        urlBuilder.format = source.format;
        urlBuilder.ks = ks;
        urlBuilder.partnerId = partnerID;
        urlBuilder.uiConfId = uiConfId;
        urlBuilder.protocol = source.getProtocol(baseProtocol);

        let extension: string = "";
        if (!mediaFormat) {
          let flavorIdsArr = source.flavorIds.split(",");
          let flavors: Array<KalturaFlavorAsset> = playbackContext.flavorAssets.filter(flavor => flavorIdsArr.indexOf(flavor.id) != -1);
          if (flavors && flavors.length > 0)
            extension = flavors[0].fileExt;
        }
        else
          extension = mediaFormat.pathExt;
        urlBuilder.extension = extension;
        playUrl = urlBuilder.build();


      } else {
        playUrl = source.url;
      }

      if (playUrl == "") {
        window.console.log("failed to create play url from source, discarding source:" + (entry.id + "_" + source.deliveryProfileId) + ", " + source.format);
        return;
      }

      let mediaSource: MediaSource = new MediaSource();
      mediaSource.url = playUrl;
      mediaSource.id = entry.id + "_" + source.deliveryProfileId + "," + source.format;
      let drmData: KalturaDrmPlaybackPluginData = source.drm;
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

  static parseMetaData(metadataList: KalturaMetadataListResponse): Map<string,string> {
    let metadata: Map<string,string> = new Map();
    if (metadataList && metadataList.metas && metadataList.metas.length > 0) {
      metadataList.metas.forEach((meta) => {
        let metaXml: DOMParser;
        let domParser: DOMParser = new DOMParser();
        metaXml = domParser.parseFromString(meta.xml.replace(/\r?\n|\r/g, ""), 'text/xml');
        let metasObj: Object = XmlParser.xmlToJson(metaXml);
        let meatKeys = Object.keys(metasObj.metadata);
        meatKeys.forEach((key) => {
          metadata.set(key, metasObj.metadata[key]["#text"]);
        })

      })
    }
    return metadata;
  }
}
