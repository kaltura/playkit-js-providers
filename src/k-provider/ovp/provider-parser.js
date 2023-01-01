//@flow
import {KalturaPlaybackContext} from './response-types/kaltura-playback-context';
import {KalturaMetadataListResponse} from './response-types/kaltura-metadata-list-response';
import {KalturaMediaEntry} from './response-types/kaltura-media-entry';
import {KalturaPlaybackSource} from './response-types/kaltura-playback-source';
import {KalturaBumper} from './response-types/kaltura-bumper';
import {KalturaDrmPlaybackPluginData} from '../common/response-types/kaltura-drm-playback-plugin-data';
import PlaySourceUrlBuilder from './play-source-url-builder';
import XmlParser from '../../util/xml-parser';
import getLogger from '../../util/logger';
import OVPConfiguration from './config';
import MediaEntry from '../../entities/media-entry';
import Drm from '../../entities/drm';
import MediaSource from '../../entities/media-source';
import MediaSources from '../../entities/media-sources';
import {SupportedStreamFormat, isProgressiveSource} from '../../entities/media-format';
import Playlist from '../../entities/playlist';
import EntryList from '../../entities/entry-list';
import Bumper from '../../entities/bumper';
import {KalturaRuleAction} from './response-types/kaltura-rule-action';
import {KalturaAccessControlMessage} from '../common/response-types/kaltura-access-control-message';
import type {OVPMediaEntryLoaderResponse} from './loaders/media-entry-loader';
import {ExternalCaptionsBuilder} from './external-captions-builder';
import ImageSource from '../../entities/image-source';

class OVPProviderParser {
  static _logger = getLogger('OVPProviderParser');

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
    OVPProviderParser._fillBaseData(mediaEntry, entry, metadataList);
    if (mediaEntry.type !== MediaEntry.Type.LIVE && OVPConfiguration.get().useApiCaptions && playbackContext.data.playbackCaptions) {
      mediaEntry.sources.captions = ExternalCaptionsBuilder.createConfig(playbackContext.data.playbackCaptions, ks);
    }
    return mediaEntry;
  }

  /**
   * Returns the url with KS
   * @function addKsToUrl
   * @param {String} url - The url to add the KS
   * @param {string} ks - The ks
   * @returns {string} - The url with KS
   * @static
   * @public
   */
  static addKsToUrl(url: string, ks: string): string {
    const hasUrlExtension = path => {
      const pathWithoutQuery = path.split('?')[0];
      const pathAfterLastSlash = pathWithoutQuery.replace(/^.*[\\/]/, '');
      return pathAfterLastSlash.indexOf('.') !== -1;
    };
    let ksParam;
    if (ks) {
      if (hasUrlExtension(url)) {
        ksParam = url.indexOf('?') === -1 ? '?ks=' : '&ks=';
      } else {
        ksParam = '/ks/';
      }
      return url + ksParam + ks;
    }
    return url;
  }

  /**
   * Returns parsed playlist by given OVP response objects
   * @function getPlaylist
   * @param {any} playlistResponse - The playlist response
   * @returns {Playlist} - The playlist
   * @static
   * @public
   */
  static getPlaylist(playlistResponse: any): Playlist {
    const playlist = new Playlist();
    const playlistData = playlistResponse.playlistData;
    const playlistItems = playlistResponse.playlistItems.entries;
    playlist.id = playlistData.id;
    playlist.name = playlistData.name;
    playlist.description = playlistData.description;
    playlist.poster = playlistData.poster;
    playlistItems.forEach((entry: KalturaMediaEntry) => {
      const mediaEntry = new MediaEntry();
      OVPProviderParser._fillBaseData(mediaEntry, entry);
      playlist.items.push(mediaEntry);
    });
    return playlist;
  }

  /**
   * Returns parsed entry list by given OVP response objects
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
      OVPProviderParser._fillBaseData(mediaEntry, entry);
      entryList.items.push(mediaEntry);
    });
    return entryList;
  }

  /**
   * Returns parsed bumper by given OTT response objects.
   * @function getBumper
   * @param {any} assetResponse - The asset response.
   * @param {string} ks - The ks
   * @param {number} partnerId - The partner ID
   * @returns {?Bumper} - The bumper
   * @static
   * @public
   */
  static getBumper(assetResponse: any, ks: string, partnerId: number): ?Bumper {
    const playbackContext = assetResponse.playBackContextResult;
    const bumperData: KalturaBumper = playbackContext.bumperData[0];
    if (bumperData) {
      const bumperSources = bumperData && bumperData.sources;
      const progressiveBumper = bumperSources.find(bumper => isProgressiveSource(bumper.format));
      if (progressiveBumper) {
        const parsedSources = OVPProviderParser._parseProgressiveSources(progressiveBumper, playbackContext, ks, partnerId, 0, bumperData.entryId);
        if (parsedSources[0]) {
          return new Bumper({url: parsedSources[0].url, clickThroughUrl: bumperData.clickThroughUrl});
        }
      }
    }
  }

  static _fillBaseData(mediaEntry: MediaEntry, entry: KalturaMediaEntry, metadataList: ?KalturaMetadataListResponse) {
    mediaEntry.id = entry.id;
    mediaEntry.duration = entry.duration;
    mediaEntry.metadata = OVPProviderParser._parseMetadata(metadataList);
    mediaEntry.metadata.description = entry.description || '';
    mediaEntry.metadata.entryId = entry.id || '';
    mediaEntry.metadata.name = entry.name || '';
    mediaEntry.metadata.tags = entry.tags || '';
    mediaEntry.status = entry.status;

    mediaEntry.type = OVPProviderParser._getEntryType(entry.entryType, entry.type);
    if (mediaEntry.type === MediaEntry.Type.LIVE) {
      mediaEntry.dvrStatus = entry.dvrStatus;
    }

    if (mediaEntry.type !== MediaEntry.Type.IMAGE) {
      mediaEntry.poster = entry.poster;
    }
    return mediaEntry;
  }

  static _getEntryType(entryTypeEnum: number, typeEnum: number | string): string {
    let type = MediaEntry.Type.UNKNOWN;
    switch (entryTypeEnum) {
      case KalturaMediaEntry.MediaType.IMAGE.value:
        type = MediaEntry.Type.IMAGE;
        break;
      case KalturaMediaEntry.MediaType.AUDIO.value:
        type = MediaEntry.Type.AUDIO;
        break;
      default:
        switch (typeEnum) {
          case KalturaMediaEntry.EntryType.MEDIA_CLIP.value:
            type = MediaEntry.Type.VOD;
            break;
          case KalturaMediaEntry.EntryType.LIVE_STREAM.value:
          case KalturaMediaEntry.EntryType.LIVE_CHANNEL.value:
            type = MediaEntry.Type.LIVE;
            break;
          default:
            type = MediaEntry.Type.UNKNOWN;
        }
    }
    return type;
  }

  /**
   * Returns the parsed sources
   * @function _getParsedSources
   * @param {Array<KalturaPlaybackSource>} kalturaSources - The kaltura sources
   * @param {string} ks - The ks
   * @param {number} partnerId - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {Object} entry - The entry
   * @param {KalturaPlaybackContext} playbackContext - The playback context
   * @return {MediaSources} - A media sources
   * @static
   * @private
   */
  static _getParsedSources(
    kalturaSources: Array<KalturaPlaybackSource>,
    ks: string,
    partnerId: number,
    uiConfId: ?number,
    entry: Object,
    playbackContext: KalturaPlaybackContext
  ): MediaSources {
    const sources = new MediaSources();
    const addAdaptiveSource = (source: KalturaPlaybackSource) => {
      const parsedSource = OVPProviderParser._parseAdaptiveSource(source, playbackContext, ks, partnerId, uiConfId, entry.id);
      if (parsedSource) {
        const sourceFormat = SupportedStreamFormat.get(source.format);
        sources.map(parsedSource, sourceFormat);
      }
    };
    const parseAdaptiveSources = () => {
      kalturaSources.filter(source => !isProgressiveSource(source.format)).forEach(addAdaptiveSource);
    };
    const parseProgressiveSources = () => {
      const progressiveSource = kalturaSources.find(source => {
        //match progressive source with supported protocol(http/s)
        return isProgressiveSource(source.format) && source.getProtocol(OVPProviderParser._getBaseProtocol()) !== '';
      });
      sources.progressive = OVPProviderParser._parseProgressiveSources(progressiveSource, playbackContext, ks, partnerId, uiConfId, entry.id);
    };

    const parseImageSources = () => {
      sources.image.push(new ImageSource(entry));
    };

    const parseExternalMedia = () => {
      const mediaSource = new MediaSource();
      mediaSource.mimetype = 'video/youtube';
      mediaSource.url = entry.referenceId;
      mediaSource.id = entry.id + '_youtube';
      sources.progressive.push(mediaSource);
    };

    if (entry.type === KalturaMediaEntry.EntryType.EXTERNAL_MEDIA.value) {
      parseExternalMedia();
    } else if (entry.entryType === KalturaMediaEntry.MediaType.IMAGE.value) {
      parseImageSources();
    } else if (kalturaSources && kalturaSources.length > 0) {
      parseAdaptiveSources();
      parseProgressiveSources();
    }
    return sources;
  }

  /**
   * Returns a parsed adaptive source
   * @function _parseAdaptiveSource
   * @param {KalturaPlaybackSource} kalturaSource - A kaltura source
   * @param {KalturaPlaybackContext} playbackContext - The playback context
   * @param {string} ks - The ks
   * @param {number} partnerId - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {string} entryId - The entry id
   * @returns {?MediaSource} - The parsed adaptive kalturaSource
   * @static
   * @private
   */
  static _parseAdaptiveSource(
    kalturaSource: ?KalturaPlaybackSource,
    playbackContext: KalturaPlaybackContext,
    ks: string,
    partnerId: number,
    uiConfId: ?number,
    entryId: string
  ): ?MediaSource {
    const mediaSource: MediaSource = new MediaSource();
    if (kalturaSource) {
      let playUrl: string = '';
      const mediaFormat = SupportedStreamFormat.get(kalturaSource.format);
      const protocol = kalturaSource.getProtocol(OVPProviderParser._getBaseProtocol());
      const deliveryProfileId = kalturaSource.deliveryProfileId;
      const format = kalturaSource.format;
      let extension: string = '';
      if (mediaFormat) {
        extension = mediaFormat.pathExt;
        mediaSource.mimetype = mediaFormat.mimeType;
      }
      // in case playbackSource doesn't have flavors we don't need to build the url and we'll use the provided one.
      if (kalturaSource.hasFlavorIds()) {
        if (!extension && playbackContext.flavorAssets && playbackContext.flavorAssets.length > 0) {
          extension = playbackContext.flavorAssets[0].fileExt;
        }
        playUrl = PlaySourceUrlBuilder.build({
          entryId,
          flavorIds: kalturaSource.flavorIds,
          format,
          ks,
          partnerId,
          uiConfId,
          extension,
          protocol
        });
      } else {
        playUrl = OVPProviderParser.addKsToUrl(kalturaSource.url, ks);
      }
      if (!playUrl) {
        const message = `failed to create play url from source, discarding source: (${entryId}_${deliveryProfileId}), ${format}`;
        OVPProviderParser._logger.warn(message);
        return null;
      }
      mediaSource.url = OVPProviderParser._applyRegexAction(playbackContext, playUrl);
      mediaSource.id = entryId + '_' + deliveryProfileId + ',' + format;
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

  /**
   * Returns parsed progressive sources
   * @function _parseProgressiveSources
   * @param {KalturaPlaybackSource} kalturaSource - A kaltura source
   * @param {KalturaPlaybackContext} playbackContext - The playback context
   * @param {string} ks - The ks
   * @param {number} partnerId - The partner ID
   * @param {number} uiConfId - The uiConf ID
   * @param {string} entryId - The entry id
   * @returns {Array<MediaSource>} - The parsed progressive kalturaSources
   * @static
   * @private
   */
  static _parseProgressiveSources(
    kalturaSource: ?KalturaPlaybackSource,
    playbackContext: KalturaPlaybackContext,
    ks: string,
    partnerId: number,
    uiConfId: ?number,
    entryId: string
  ): Array<MediaSource> {
    const videoSources: Array<MediaSource> = [];
    const audioSources: Array<MediaSource> = [];
    if (kalturaSource) {
      const protocol = kalturaSource.getProtocol(OVPProviderParser._getBaseProtocol());
      const format = kalturaSource.format;
      const deliveryProfileId = kalturaSource.deliveryProfileId;
      const sourceId = deliveryProfileId + ',' + format;
      playbackContext.flavorAssets.map(flavor => {
        const mediaSource: MediaSource = new MediaSource();
        mediaSource.id = flavor.id + sourceId;
        mediaSource.mimetype = flavor.fileExt === 'mp3' ? 'audio/mp3' : 'video/mp4';
        mediaSource.height = flavor.height;
        mediaSource.width = flavor.width;
        mediaSource.bandwidth = flavor.bitrate * 1024;
        mediaSource.label = flavor.label || flavor.language;
        const playUrl = PlaySourceUrlBuilder.build({
          entryId,
          flavorIds: flavor.id,
          format,
          ks,
          partnerId: partnerId,
          uiConfId: uiConfId,
          extension: flavor.fileExt,
          protocol
        });
        if (playUrl === '') {
          OVPProviderParser._logger.warn(`failed to create play url from source, discarding source: (${entryId}_${deliveryProfileId}), ${format}.`);
          return null;
        } else {
          mediaSource.url = OVPProviderParser._applyRegexAction(playbackContext, playUrl);
          if (flavor.height && flavor.width) {
            videoSources.push(mediaSource);
          } else {
            audioSources.push(mediaSource);
          }
        }
      });
    }
    //If we have only audio flavors return them, otherwise return video flavors
    return audioSources.length && !videoSources.length ? audioSources : videoSources;
  }

  /**
   * Ovp metadata parser
   * @function _parseMetaData
   * @param {KalturaMetadataListResponse} metadataList The metadata list
   * @returns {Object} Parsed metadata
   * @static
   * @private
   */
  static _parseMetadata(metadataList: ?KalturaMetadataListResponse): Object {
    const metadata = {};
    if (metadataList && metadataList.metas && metadataList.metas.length > 0) {
      metadataList.metas.forEach(meta => {
        if (meta.xml) {
          let metaXml: Object;
          const domParser: DOMParser = new DOMParser();
          meta.xml = meta.xml.replace(/\r?\n|\r/g, '');
          meta.xml = meta.xml.replace(/>\s*/g, '>');
          meta.xml = meta.xml.replace(/>\s*/g, '>');
          metaXml = domParser.parseFromString(meta.xml, 'text/xml');
          const metasObj: Object = XmlParser.xmlToJson(metaXml);
          const metaKeys = Object.keys(metasObj.metadata);
          metaKeys.forEach(key => {
            metadata[key] = metasObj.metadata[key]['#text'];
          });
        }
      });
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
    const config = OVPConfiguration.get();
    const protocolRegex = /^https?:/;
    const result = protocolRegex.exec(config.cdnUrl);
    const protocol = result ? result[0] : document.location.protocol;
    if (typeof protocol === 'string') {
      return protocol.slice(0, -1); // remove ':' from the end
    }
    return 'https';
  }

  static hasBlockAction(response: OVPMediaEntryLoaderResponse): boolean {
    return response.playBackContextResult.hasBlockAction();
  }

  static getBlockAction(response: OVPMediaEntryLoaderResponse): ?KalturaRuleAction {
    return response.playBackContextResult.getBlockAction();
  }

  static getErrorMessages(response: OVPMediaEntryLoaderResponse): Array<KalturaAccessControlMessage> {
    return response.playBackContextResult.getErrorMessages();
  }

  /**
   * Applies the request host regex on the url
   * @function _applyRegexAction
   * @param {KalturaPlaybackContext} playbackContext - The playback context
   * @param {string} playUrl - The original url
   * @returns {string} - The request host regex applied url
   * @static
   * @private
   */
  static _applyRegexAction(playbackContext: KalturaPlaybackContext, playUrl: string): string {
    const regexAction = playbackContext.getRequestHostRegexAction();
    if (regexAction) {
      const regex = new RegExp(regexAction.pattern, 'i');
      if (playUrl.match(regex)) {
        return playUrl.replace(regex, regexAction.replacement + '/');
      }
    }
    return playUrl;
  }
}

export const addKsToUrl = OVPProviderParser.addKsToUrl;
export default OVPProviderParser;
