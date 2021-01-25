(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ovp"] = factory();
	else
		root["playkit"] = root["playkit"] || {}, root["playkit"]["providers"] = root["playkit"]["providers"] || {}, root["playkit"]["providers"]["ovp"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./k-provider/ovp/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entities/bumper.js":
/*!****************************!*\
  !*** ./entities/bumper.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bumper; });
var Bumper =
/**
 * @member - bumper url
 * @type {string}
 */

/**
 * @member - bumper click through url
 * @type {string}
 */

/**
 * @constructor
 * @param {Object} data - The bumper response
 */
function Bumper(data) {
  this.url = data.url;
  this.clickThroughUrl = data.clickThroughUrl;
};



/***/ }),

/***/ "./entities/drm.js":
/*!*************************!*\
  !*** ./entities/drm.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drm; });
var Drm = /*#__PURE__*/function () {
  /**
   * @member - license url
   * @type {string}
   */

  /**
   * @member - drm scheme
   * @type {string}
   */

  /**
   * @member - drm certificate
   * @type {string}
   */

  /**
   * @constructor
   * @param {string} licenseUrl - the license url
   * @param {string} scheme - the drm scheme
   * @param {?string} certificate - the drm certificate
   */
  function Drm(licenseUrl, scheme, certificate) {
    this.licenseUrl = licenseUrl;
    this.scheme = scheme;

    if (certificate) {
      this.certificate = certificate;
    }
  }
  /**
   * Convert class to native js object.
   * @returns {ProviderDrmDataObject} - The json class object.
   */


  var _proto = Drm.prototype;

  _proto.toJSON = function toJSON() {
    var response = {
      licenseUrl: this.licenseUrl,
      scheme: this.scheme
    };
    if (this.certificate) response.certificate = this.certificate;
    return response;
  };

  return Drm;
}();



/***/ }),

/***/ "./entities/entry-list.js":
/*!********************************!*\
  !*** ./entities/entry-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntryList; });
/* harmony import */ var _entities_media_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/media-entry */ "./entities/media-entry.js");


var EntryList =
/**
 * @member - entry list items
 * @type {Array<MediaEntry>}
 */
function EntryList() {
  this.items = [];
};



/***/ }),

/***/ "./entities/media-entry.js":
/*!*********************************!*\
  !*** ./entities/media-entry.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaEntry; });
/* harmony import */ var _media_sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-sources */ "./entities/media-sources.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var MediaEntry = /*#__PURE__*/function () {
  /**
   * @constructor
   */
  function MediaEntry() {
    this.metadata = new Map();
    this.sources = new _media_sources__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.type = MediaEntry.Type.UNKNOWN;
  }
  /**
   * Convert class to native js object.
   * @returns {ProviderMediaEntryObject} - The json class object.
   */


  var _proto = MediaEntry.prototype;

  _proto.toJSON = function toJSON() {
    return {
      id: this.id,
      name: this.name,
      sources: this.sources.toJSON(),
      duration: this.duration,
      dvrStatus: this.dvrStatus,
      status: this.status,
      metadata: this.metadata,
      type: this.type,
      poster: this.poster,
      assetReferenceType: this.assetReferenceType
    };
  };

  return MediaEntry;
}();

_defineProperty(MediaEntry, "Type", {
  VOD: 'Vod',
  LIVE: 'Live',
  IMAGE: 'Image',
  AUDIO: 'Audio',
  UNKNOWN: 'Unknown'
});

_defineProperty(MediaEntry, "DvrStatus", {
  ON: 1,
  OFF: 0
});



/***/ }),

/***/ "./entities/media-format.js":
/*!**********************************!*\
  !*** ./entities/media-format.js ***!
  \**********************************/
/*! exports provided: MediaFormat, SupportedStreamFormat, isProgressiveSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaFormat", function() { return MediaFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedStreamFormat", function() { return SupportedStreamFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProgressiveSource", function() { return isProgressiveSource; });
var MediaFormat = {
  DASH: {
    name: 'dash',
    mimeType: 'application/dash+xml',
    pathExt: 'mpd'
  },
  HLS: {
    name: 'hls',
    mimeType: 'application/x-mpegURL',
    pathExt: 'm3u8'
  },
  WVM: {
    name: 'wvm',
    mimeType: 'video/wvm',
    pathExt: 'wvm'
  },
  MP4: {
    name: 'mp4',
    mimeType: 'video/mp4',
    pathExt: 'mp4'
  },
  MP3: {
    name: 'mp3',
    mimeType: 'audio/mpeg',
    pathExt: 'mp3'
  }
};
var SupportedStreamFormat = new Map([['mpegdash', MediaFormat.DASH], ['applehttp', MediaFormat.HLS], ['url', MediaFormat.MP4]]);
/**
 * returns a boolean whether a source is progressive or not
 * @param {string} formatName - the format name
 * @returns {boolean} - if source is progressive or not
 */

function isProgressiveSource(formatName) {
  var sourceFormat = SupportedStreamFormat.get(formatName);
  return !!sourceFormat && sourceFormat.name === MediaFormat.MP4.name;
}



/***/ }),

/***/ "./entities/media-source.js":
/*!**********************************!*\
  !*** ./entities/media-source.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSource; });
/* harmony import */ var _drm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drm */ "./entities/drm.js");


var MediaSource = /*#__PURE__*/function () {
  function MediaSource() {}

  var _proto = MediaSource.prototype;

  /**
   * @member - media source id
   * @type {string}
   */

  /**
   * @member - media source url
   * @type {string}
   */

  /**
   * @member - media source mimetype
   * @type {string}
   */

  /**
   * @member - media source drm data
   * @type {Array<Drm>}
   */

  /**
   * @member - media source bandwidth
   * @type {number}
   */

  /**
   * @member - media source width
   * @type {number}
   */

  /**
   * @member - media source height
   * @type {number}
   */

  /**
   * @member - media source label
   * @type {string}
   */

  /**
   * Convert class to native js object.
   * @returns {ProviderMediaSourceObject} - The json class object.
   */
  _proto.toJSON = function toJSON() {
    var response = {
      id: this.id,
      url: this.url,
      mimetype: this.mimetype
    };
    if (this.bandwidth) response.bandwidth = this.bandwidth;
    if (this.width) response.width = this.width;
    if (this.height) response.height = this.height;
    if (this.label) response.label = this.label;

    if (this.drmData && this.drmData.length > 0) {
      response.drmData = [];
      this.drmData.forEach(function (d) {
        if (Array.isArray(response.drmData)) {
          response.drmData.push(d.toJSON());
        }
      });
    }

    return response;
  };

  return MediaSource;
}();



/***/ }),

/***/ "./entities/media-sources.js":
/*!***********************************!*\
  !*** ./entities/media-sources.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSources; });
/* harmony import */ var _media_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-source */ "./entities/media-source.js");
/* harmony import */ var _media_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-format */ "./entities/media-format.js");



var MediaSources = /*#__PURE__*/function () {
  /**
   * Progressive download media sources container.
   * @type {Array<MediaSource>}
   * @public
   */

  /**
   * Dash media sources container.
   * @type {Array<MediaSource>}
   * @public
   */

  /**
   * Hls media sources container.
   * @type {Array<MediaSource>}
   * @public
   */

  /**
   * @constructor
   */
  function MediaSources() {
    this.progressive = [];
    this.dash = [];
    this.hls = [];
  }
  /**
   * Maps the source to one of the containers according to his media format.
   * @param {MediaSource} source - The source to add to one of the containers.
   * @param {MediaFormat} mediaFormat - The media format of the source.
   * @returns {void}
   */


  var _proto = MediaSources.prototype;

  _proto.map = function map(source, mediaFormat) {
    if (mediaFormat) {
      switch (mediaFormat.name) {
        case _media_format__WEBPACK_IMPORTED_MODULE_1__["MediaFormat"].MP4.name:
          this.progressive.push(source);
          break;

        case _media_format__WEBPACK_IMPORTED_MODULE_1__["MediaFormat"].DASH.name:
          this.dash.push(source);
          break;

        case _media_format__WEBPACK_IMPORTED_MODULE_1__["MediaFormat"].HLS.name:
          this.hls.push(source);
          break;

        default:
          break;
      }
    }
  }
  /**
   * Convert class to native js object.
   * @returns {ProviderMediaSourcesObject} - The json class object.
   */
  ;

  _proto.toJSON = function toJSON() {
    var response = {
      progressive: [],
      dash: [],
      hls: []
    };
    this.progressive.forEach(function (p) {
      return response.progressive.push(p.toJSON());
    });
    this.hls.forEach(function (h) {
      return response.hls.push(h.toJSON());
    });
    this.dash.forEach(function (d) {
      return response.dash.push(d.toJSON());
    });
    return response;
  };

  return MediaSources;
}();



/***/ }),

/***/ "./entities/playlist.js":
/*!******************************!*\
  !*** ./entities/playlist.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Playlist; });
/* harmony import */ var _entities_media_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/media-entry */ "./entities/media-entry.js");


var Playlist =
/**
 * @member - playlist id
 * @type {string}
 */

/**
 * @member - playlist name
 * @type {string}
 */

/**
 * @member - playlist description
 * @type {string}
 */

/**
 * @member - playlist poster
 * @type {string}
 */

/**
 * @member - playlist items
 * @type {Array<MediaEntry>}
 */
function Playlist() {
  this.items = [];
};



/***/ }),

/***/ "./k-provider/common/base-provider.js":
/*!********************************************!*\
  !*** ./k-provider/common/base-provider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseProvider; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/logger */ "./util/logger.js");
/* harmony import */ var _data_loader_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-loader-manager */ "./k-provider/common/data-loader-manager.js");
/* harmony import */ var _util_error_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/error/error */ "./util/error/error.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BaseProvider = /*#__PURE__*/function () {
  _createClass(BaseProvider, [{
    key: "partnerId",
    get: function get() {
      return this._partnerId;
    }
  }, {
    key: "widgetId",
    get: function get() {
      return this._widgetId || this.defaultWidgetId;
    }
  }, {
    key: "defaultWidgetId",
    get: function get() {
      return '_' + this._partnerId;
    }
  }, {
    key: "uiConfId",
    get: function get() {
      return this._uiConfId;
    }
  }, {
    key: "ks",
    get: function get() {
      return this._ks;
    },
    set: function set(value) {
      this._ks = value;
    }
  }, {
    key: "playerVersion",
    get: function get() {
      return this._playerVersion;
    }
  }, {
    key: "isAnonymous",
    get: function get() {
      return this._isAnonymous;
    }
  }]);

  function BaseProvider(options, playerVersion) {
    _defineProperty(this, "_networkRetryConfig", {
      async: true,
      timeout: 0,
      maxAttempts: 4
    });

    Object(_util_logger__WEBPACK_IMPORTED_MODULE_0__["setLogger"])(options.logger);
    this._partnerId = options.partnerId;
    this._widgetId = options.widgetId;
    this._uiConfId = options.uiConfId;
    this._isAnonymous = !options.ks;
    this._ks = options.ks || '';
    this._playerVersion = playerVersion;
  } // eslint-disable-next-line no-unused-vars


  var _proto = BaseProvider.prototype;

  _proto.getMediaConfig = function getMediaConfig(mediaInfo) {
    return Promise.reject(new _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Category.PROVIDER, _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Code.METHOD_NOT_IMPLEMENTED, {
      message: 'getMediaConfig method must be implement by the derived class'
    }));
  } // eslint-disable-next-line no-unused-vars
  ;

  _proto.getPlaylistConfig = function getPlaylistConfig(playlistInfo) {
    return Promise.reject(new _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Category.PROVIDER, _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Code.METHOD_NOT_IMPLEMENTED, {
      message: 'The provider does not support loading playlist by id'
    }));
  } // eslint-disable-next-line no-unused-vars
  ;

  _proto.getEntryListConfig = function getEntryListConfig(entryListInfo) {
    return Promise.reject(new _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Category.PROVIDER, _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Code.METHOD_NOT_IMPLEMENTED, {
      message: 'The provider does not support loading entry list'
    }));
  };

  _proto._verifyHasSources = function _verifyHasSources(sources) {
    if (sources.hls.concat(sources.dash, sources.progressive).length === 0) {
      throw new _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Category.SERVICE, _util_error_error__WEBPACK_IMPORTED_MODULE_2__["default"].Code.MISSING_PLAY_SOURCE, {
        action: '',
        messages: "No play source for entry id: " + sources.id
      });
    }
  };

  _proto.getLogLevel = function getLogLevel(name) {
    return Object(_util_logger__WEBPACK_IMPORTED_MODULE_0__["getLogLevel"])(name);
  };

  _proto.setLogLevel = function setLogLevel(level, name) {
    Object(_util_logger__WEBPACK_IMPORTED_MODULE_0__["setLogLevel"])(level, name);
  };

  _createClass(BaseProvider, [{
    key: "LogLevel",
    get: function get() {
      return _util_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"];
    }
  }]);

  return BaseProvider;
}();



/***/ }),

/***/ "./k-provider/common/base-service-result.js":
/*!**************************************************!*\
  !*** ./k-provider/common/base-service-result.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceResult; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ServiceResult =
/**
 * @member - Is service returned an error
 * @type {boolean}
 */

/**
 * @constructor
 * @param {Object} response - Service response
 */
function ServiceResult(response) {
  _defineProperty(this, "hasError", false);

  if (response.objectType === 'KalturaAPIException') {
    this.hasError = true;
    this.error = new ServiceError(response.code, response.message);
  } else if (response.error && response.error.objectType === 'KalturaAPIException') {
    this.hasError = true;
    this.error = new ServiceError(response.error.code, response.error.message);
  } else {
    this.data = response;
  }
};



var ServiceError =
/**
 * @member - The error code
 * @type {string}
 */

/**
 * @member - The error message
 * @type {string}
 */

/**
 * @constructor
 * @param {string} code - The result code
 * @param {string} message - The result message
 */
function ServiceError(code, message) {
  this.code = code;
  this.message = message;
};

/***/ }),

/***/ "./k-provider/common/data-loader-manager.js":
/*!**************************************************!*\
  !*** ./k-provider/common/data-loader-manager.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataLoaderManager; });
/* harmony import */ var _multi_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi-request-builder */ "./k-provider/common/multi-request-builder.js");
/* harmony import */ var _util_error_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/error/error */ "./util/error/error.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var DataLoaderManager = /*#__PURE__*/function () {
  /**
   * @member - Loaders response map index
   * @type {Map<string,Array<number>>}
   * @private
   */

  /**
   * @member - Loaders to execute
   * @type {Map<string,Function>}
   * @private
   */
  function DataLoaderManager(networkRetryConfig) {
    _defineProperty(this, "_loadersResponseMap", new Map());

    _defineProperty(this, "_loaders", new Map());

    this._networkRetryConfig = networkRetryConfig;
  }
  /**
   * Add loader to execution loaders map
   * @function
   * @param {Function} loader Loader to add
   * @param {Object} params Loader params
   * @returns {void}
   */


  var _proto = DataLoaderManager.prototype;

  _proto.add = function add(loader, params) {
    var _this = this;

    var execution_loader = new loader(params);

    if (execution_loader.isValid()) {
      this._loaders.set(loader.id, execution_loader); // Get the start index from the multiReqeust before adding current execution_loader requests


      var startIndex = this._multiRequest.requests.length; // Get the requests

      var requests = execution_loader.requests;
      this._multiRequest.retryConfig = this._networkRetryConfig; // Add requests to muktiRequest queue

      requests.forEach(function (request) {
        _this._multiRequest.add(request);
      }); // Create range array of current execution_loader requests

      var executionLoaderResponseMap = Array.from(new Array(requests.length), function (val, index) {
        return index + startIndex;
      }); // Add to map

      this._loadersResponseMap.set(loader.id, executionLoaderResponseMap);
    }
  }
  /**
   * Get data from all loaders using multi request
   * @function
   * @returns {Promise} Promise
   */
  ;

  _proto.fetchData = function fetchData() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2._multiRequest.execute().then(function (data) {
        _this2._multiResponse = data.response;

        var preparedData = _this2.prepareData(data.response);

        if (preparedData.success) {
          resolve(_this2._loaders);
        } else {
          reject(new _util_error_error__WEBPACK_IMPORTED_MODULE_1__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_1__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_1__["default"].Category.NETWORK, _util_error_error__WEBPACK_IMPORTED_MODULE_1__["default"].Code.API_RESPONSE_MISMATCH, {
            headers: data.headers
          }));
        }
      }, function (err) {
        reject(err);
      });
    });
  }
  /**
   * Prepare fetched data
   * @function
   * @param {MultiRequestResult} response - The multi request result
   * @returns {Object} - The prepared data
   */
  ;

  _proto.prepareData = function prepareData(response) {
    var _this3 = this;

    this._loaders.forEach(function (loader, name) {
      var loaderDataIndexes = _this3._loadersResponseMap.get(name);

      try {
        if (loaderDataIndexes && loaderDataIndexes.length > 0) {
          loader.response = response.results.slice(loaderDataIndexes[0], loaderDataIndexes[loaderDataIndexes.length - 1] + 1);
        }
      } catch (err) {
        return {
          success: false,
          error: err
        };
      }
    });

    return {
      success: true,
      data: this._loaders
    };
  };

  return DataLoaderManager;
}();



/***/ }),

/***/ "./k-provider/common/multi-request-builder.js":
/*!****************************************************!*\
  !*** ./k-provider/common/multi-request-builder.js ***!
  \****************************************************/
/*! exports provided: default, MultiRequestResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiRequestBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiRequestResult", function() { return MultiRequestResult; });
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/logger */ "./util/logger.js");
/* harmony import */ var _base_service_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-service-result */ "./k-provider/common/base-service-result.js");
/* harmony import */ var _util_error_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/error/error */ "./util/error/error.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MultiRequestBuilder = /*#__PURE__*/function (_RequestBuilder) {
  _inheritsLoose(MultiRequestBuilder, _RequestBuilder);

  function MultiRequestBuilder() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _RequestBuilder.call.apply(_RequestBuilder, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "requests", []);

    return _this;
  }

  var _proto = MultiRequestBuilder.prototype;

  /**
   * Adds request to requests array
   * @function add
   * @param {RequestBuilder} request The request
   * @returns {MultiRequestBuilder} The multiRequest
   */
  _proto.add = function add(request) {
    var _Object$assign;

    this.requests.push(request);
    var requestParams = {};
    var serviceDef = {
      service: request.service,
      action: request.action
    };
    Object.assign(requestParams, (_Object$assign = {}, _Object$assign[this.requests.length] = Object.assign(serviceDef, request.params), _Object$assign));
    Object.assign(requestParams, this.params);
    this.params = requestParams;
    return this;
  }
  /**
   * Executes a multi request
   * @function execute
   * @returns {Promise} The multirequest execution promise
   */
  ;

  _proto.execute = function execute() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      try {
        _this2.params = JSON.stringify(_this2.params);
      } catch (err) {
        MultiRequestBuilder._logger.error("" + err.message);

        reject(new _util_error_error__WEBPACK_IMPORTED_MODULE_3__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_3__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_3__["default"].Category.PROVIDER, _util_error_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.FAILED_PARSING_REQUEST, {
          error: err,
          params: _this2.params
        }));
      }

      _this2.doHttpRequest().then(function (data) {
        var multiRequestResult = new MultiRequestResult(data);

        if (multiRequestResult.success) {
          resolve({
            headers: _this2.responseHeaders,
            response: multiRequestResult
          });
        } else {
          reject(new _util_error_error__WEBPACK_IMPORTED_MODULE_3__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_3__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_3__["default"].Category.NETWORK, _util_error_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.MULTIREQUEST_API_ERROR, {
            url: _this2.url,
            headers: _this2.responseHeaders,
            results: multiRequestResult.results
          }));
        }
      }, function (err) {
        reject(err);
      });
    });
  };

  return MultiRequestBuilder;
}(_util_request_builder__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(MultiRequestBuilder, "_logger", Object(_util_logger__WEBPACK_IMPORTED_MODULE_1__["default"])('MultiRequestBuilder'));


var MultiRequestResult =
/**
 * @memberof MultiRequestResult
 * @type {Object}
 */

/**
 * @constructor
 * @param {Object} response data
 */
function MultiRequestResult(response) {
  var _this3 = this;

  _defineProperty(this, "results", []);

  this.success = true;
  var responseArr = response.result ? response.result : response;
  responseArr.forEach(function (result) {
    var serviceResult = new _base_service_result__WEBPACK_IMPORTED_MODULE_2__["default"](result);

    _this3.results.push(serviceResult);

    if (serviceResult.hasError) {
      MultiRequestResult._logger.error("Service returned an error with error code: " + serviceResult.error.code + " and message: " + serviceResult.error.message + ".");

      _this3.success = false;
      return;
    }
  });
};

_defineProperty(MultiRequestResult, "_logger", Object(_util_logger__WEBPACK_IMPORTED_MODULE_1__["default"])('MultiRequestResult'));

/***/ }),

/***/ "./k-provider/common/response-types/kaltura-access-control-message.js":
/*!****************************************************************************!*\
  !*** ./k-provider/common/response-types/kaltura-access-control-message.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaAccessControlMessage; });
var KalturaAccessControlMessage =
/**
 * @member - The access control message
 * @type {string}
 */

/**
 *  @member - The access control message code
 * @@type {string}
 */

/**
 * @constructor
 * @param {Object} data The json response
 */
function KalturaAccessControlMessage(data) {
  this.message = data.message;
  this.code = data.code;
};



/***/ }),

/***/ "./k-provider/common/response-types/kaltura-drm-playback-plugin-data.js":
/*!******************************************************************************!*\
  !*** ./k-provider/common/response-types/kaltura-drm-playback-plugin-data.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaDrmPlaybackPluginData; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KalturaDrmPlaybackPluginData =
/**
 * @constructor
 * @param {Object} drm The json response
 */
function KalturaDrmPlaybackPluginData(drm) {
  this.scheme = drm.scheme;
  this.licenseURL = drm.licenseURL;
  this.certificate = drm.certificate;
};

_defineProperty(KalturaDrmPlaybackPluginData, "Scheme", {
  'drm.PLAYREADY_CENC': 'com.microsoft.playready',
  'drm.WIDEVINE_CENC': 'com.widevine.alpha',
  'fairplay.FAIRPLAY': 'com.apple.fairplay',
  WIDEVINE_CENC: 'com.widevine.alpha',
  PLAYREADY_CENC: 'com.microsoft.playready',
  FAIRPLAY: 'com.apple.fairplay'
});



/***/ }),

/***/ "./k-provider/ovp/config.js":
/*!**********************************!*\
  !*** ./k-provider/ovp/config.js ***!
  \**********************************/
/*! exports provided: default, OVPConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVPConfiguration", function() { return OVPConfiguration; });
/* harmony import */ var _util_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/clone */ "./util/clone.js");

var defaultConfig = {
  serviceUrl: 'https://cdnapisec.kaltura.com/api_v3',
  cdnUrl: 'https://cdnapisec.kaltura.com',
  serviceParams: {
    apiVersion: '3.3.0',
    format: 1
  },
  useApiCaptions: true
};

var OVPConfiguration = /*#__PURE__*/function () {
  function OVPConfiguration() {}

  OVPConfiguration.set = function set(clientConfig) {
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  };

  OVPConfiguration.get = function get() {
    return Object(_util_clone__WEBPACK_IMPORTED_MODULE_0__["clone"])(defaultConfig);
  };

  return OVPConfiguration;
}();




/***/ }),

/***/ "./k-provider/ovp/external-captions-builder.js":
/*!*****************************************************!*\
  !*** ./k-provider/ovp/external-captions-builder.js ***!
  \*****************************************************/
/*! exports provided: ExternalCaptionsBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalCaptionsBuilder", function() { return ExternalCaptionsBuilder; });
/* harmony import */ var _provider_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-parser */ "./k-provider/ovp/provider-parser.js");

var KalturaCaptionType = {
  SRT: '1',
  DFXP: '2',
  WEBVTT: '3',
  CAP: '4'
};
var CaptionsFormatsMap = {
  '3': 'vtt',
  '1': 'srt'
};

var ExternalCaptionsBuilder = /*#__PURE__*/function () {
  function ExternalCaptionsBuilder() {}

  ExternalCaptionsBuilder.createConfig = function createConfig(captions, ks) {
    return captions.map(function (caption) {
      var url = caption.url;
      var type = CaptionsFormatsMap[caption.format];

      if ([KalturaCaptionType.DFXP, KalturaCaptionType.CAP].includes(caption.format)) {
        url = caption.webVttUrl;
        type = CaptionsFormatsMap[KalturaCaptionType.WEBVTT];
      }

      url = Object(_provider_parser__WEBPACK_IMPORTED_MODULE_0__["addKsToUrl"])(url, ks);
      return {
        default: !!caption.isDefault,
        type: type,
        language: caption.languageCode,
        label: caption.label,
        url: url
      };
    });
  };

  return ExternalCaptionsBuilder;
}();



/***/ }),

/***/ "./k-provider/ovp/index.js":
/*!*********************************!*\
  !*** ./k-provider/ovp/index.js ***!
  \*********************************/
/*! exports provided: Provider, NAME, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ "./k-provider/ovp/provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });


var NAME = "playkit-js-providers" + '-ovp';
var VERSION = "2.26.0";


/***/ }),

/***/ "./k-provider/ovp/loaders/data-loader-manager.js":
/*!*******************************************************!*\
  !*** ./k-provider/ovp/loaders/data-loader-manager.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPDataLoaderManager; });
/* harmony import */ var _common_data_loader_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/data-loader-manager */ "./k-provider/common/data-loader-manager.js");
/* harmony import */ var _services_ovp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ovp-service */ "./k-provider/ovp/services/ovp-service.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



/**
 * OTTDataLoaderManager is a class that handles the OVP data loading
 * @param {string} playerVersion - player version
 * @param {string} partnerId - partner id
 * @param {string} ks - ks
 * @param {ProviderNetworkRetryParameters} [networkRetryConfig] - network retry configuration
 */

var OVPDataLoaderManager = /*#__PURE__*/function (_DataLoaderManager) {
  _inheritsLoose(OVPDataLoaderManager, _DataLoaderManager);

  function OVPDataLoaderManager(playerVersion, partnerId, ks, networkRetryConfig) {
    var _this;

    if (ks === void 0) {
      ks = '';
    }

    _this = _DataLoaderManager.call(this, networkRetryConfig) || this;
    _this._multiRequest = _services_ovp_service__WEBPACK_IMPORTED_MODULE_1__["default"].getMultiRequest(playerVersion, ks, partnerId);
    return _this;
  }

  return OVPDataLoaderManager;
}(_common_data_loader_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/loaders/entry-list-loader.js":
/*!*****************************************************!*\
  !*** ./k-provider/ovp/loaders/entry-list-loader.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPEntryListLoader; });
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./k-provider/ovp/config.js");
/* harmony import */ var _services_base_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base-entry-service */ "./k-provider/ovp/services/base-entry-service.js");
/* harmony import */ var _response_types_kaltura_base_entry_list_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../response-types/kaltura-base-entry-list-response */ "./k-provider/ovp/response-types/kaltura-base-entry-list-response.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var OVPEntryListLoader = /*#__PURE__*/function () {
  _createClass(OVPEntryListLoader, null, [{
    key: "id",
    get: function get() {
      return 'entry_list';
    }
    /**
     * @constructor
     * @param {Object} params loader params
     */

  }]);

  function OVPEntryListLoader(params) {
    _defineProperty(this, "_response", {
      playlistItems: {
        entries: []
      }
    });

    this.requests = this.buildRequests(params);
    this._entries = params.entries;
  }

  var _proto = OVPEntryListLoader.prototype;

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */
  _proto.buildRequests = function buildRequests(params) {
    var config = _config__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    var requests = [];
    params.entries.forEach(function (entry) {
      requests.push(_services_base_entry_service__WEBPACK_IMPORTED_MODULE_2__["default"].list(config.serviceUrl, params.ks, entry.entryId || entry, params.redirectFromEntryId, entry.referenceId));
    });
    return requests;
  }
  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  ;

  _proto.isValid = function isValid() {
    return !!(this._entries && this._entries.length);
  };

  _createClass(OVPEntryListLoader, [{
    key: "requests",
    set: function set(requests) {
      this._requests = requests;
    },
    get: function get() {
      return this._requests;
    }
  }, {
    key: "response",
    set: function set(response) {
      var _this = this;

      var mediaEntryResponse;
      response.forEach(function (item) {
        mediaEntryResponse = new _response_types_kaltura_base_entry_list_response__WEBPACK_IMPORTED_MODULE_3__["default"](item.data);

        _this._response.playlistItems.entries.push(mediaEntryResponse.entries[0]);
      });
    },
    get: function get() {
      return this._response;
    }
  }]);

  return OVPEntryListLoader;
}();



/***/ }),

/***/ "./k-provider/ovp/loaders/media-entry-loader.js":
/*!******************************************************!*\
  !*** ./k-provider/ovp/loaders/media-entry-loader.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPMediaEntryLoader; });
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _services_base_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/base-entry-service */ "./k-provider/ovp/services/base-entry-service.js");
/* harmony import */ var _services_meta_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/meta-data-service */ "./k-provider/ovp/services/meta-data-service.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./k-provider/ovp/config.js");
/* harmony import */ var _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../response-types/kaltura-playback-context */ "./k-provider/ovp/response-types/kaltura-playback-context.js");
/* harmony import */ var _response_types_kaltura_metadata_list_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../response-types/kaltura-metadata-list-response */ "./k-provider/ovp/response-types/kaltura-metadata-list-response.js");
/* harmony import */ var _response_types_kaltura_base_entry_list_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../response-types/kaltura-base-entry-list-response */ "./k-provider/ovp/response-types/kaltura-base-entry-list-response.js");
/* harmony import */ var _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../response-types/kaltura-media-entry */ "./k-provider/ovp/response-types/kaltura-media-entry.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var OVPMediaEntryLoader = /*#__PURE__*/function () {
  _createClass(OVPMediaEntryLoader, null, [{
    key: "id",
    get: function get() {
      return 'media';
    }
    /**
     * @constructor
     * @param {Object} params loader params
     * @boolean {boolean} useExternalCaptions - if we should add captions request to the multirequests.
     */

  }]);

  function OVPMediaEntryLoader(params) {
    _defineProperty(this, "_response", {});

    this.requests = this.buildRequests(params);
    this._entryId = params.entryId;
    this._referenceId = params.referenceId;
  }

  var _proto = OVPMediaEntryLoader.prototype;

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */
  _proto.buildRequests = function buildRequests(params) {
    var config = _config__WEBPACK_IMPORTED_MODULE_3__["default"].get();
    var requests = [];
    requests.push(_services_base_entry_service__WEBPACK_IMPORTED_MODULE_1__["default"].list(config.serviceUrl, params.ks, params.entryId, params.redirectFromEntryId, params.referenceId)); // Use the entry id from the request result to support loading by referenceId

    var serviceEntryId = params.ks === '{1:result:ks}' ? '{2:result:objects:0:id}' : '{1:result:objects:0:id}';
    requests.push(_services_base_entry_service__WEBPACK_IMPORTED_MODULE_1__["default"].getPlaybackContext(config.serviceUrl, params.ks, serviceEntryId));
    requests.push(_services_meta_data_service__WEBPACK_IMPORTED_MODULE_2__["default"].list(config.serviceUrl, params.ks, serviceEntryId));
    return requests;
  }
  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  ;

  _proto.isValid = function isValid() {
    return !!(this._entryId || this._referenceId);
  };

  _createClass(OVPMediaEntryLoader, [{
    key: "requests",
    set: function set(requests) {
      this._requests = requests;
    },
    get: function get() {
      return this._requests;
    }
  }, {
    key: "response",
    set: function set(response) {
      var mediaEntryResponse = new _response_types_kaltura_base_entry_list_response__WEBPACK_IMPORTED_MODULE_6__["default"](response[0].data);
      this._response.entry = mediaEntryResponse.entries[0];
      this._response.playBackContextResult = new _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_4__["default"](response[1].data);
      this._response.metadataListResult = new _response_types_kaltura_metadata_list_response__WEBPACK_IMPORTED_MODULE_5__["default"](response[2].data);
    },
    get: function get() {
      return this._response;
    }
  }]);

  return OVPMediaEntryLoader;
}();



/***/ }),

/***/ "./k-provider/ovp/loaders/playlist-loader.js":
/*!***************************************************!*\
  !*** ./k-provider/ovp/loaders/playlist-loader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPPlaylistLoader; });
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _services_playlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/playlist-service */ "./k-provider/ovp/services/playlist-service.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./k-provider/ovp/config.js");
/* harmony import */ var _response_types_kaltura_playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../response-types/kaltura-playlist */ "./k-provider/ovp/response-types/kaltura-playlist.js");
/* harmony import */ var _response_types_kaltura_media_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../response-types/kaltura-media-entries */ "./k-provider/ovp/response-types/kaltura-media-entries.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var OVPPlaylistLoader = /*#__PURE__*/function () {
  _createClass(OVPPlaylistLoader, null, [{
    key: "id",
    get: function get() {
      return 'playlist';
    }
    /**
     * @constructor
     * @param {Object} params loader params
     */

  }]);

  function OVPPlaylistLoader(params) {
    _defineProperty(this, "_response", {});

    this.requests = this.buildRequests(params);
    this._playlistId = params.playlistId;
  }

  var _proto = OVPPlaylistLoader.prototype;

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */
  _proto.buildRequests = function buildRequests(params) {
    var config = _config__WEBPACK_IMPORTED_MODULE_2__["default"].get();
    var requests = [];
    requests.push(_services_playlist_service__WEBPACK_IMPORTED_MODULE_1__["default"].get(config.serviceUrl, params.ks, params.playlistId));
    requests.push(_services_playlist_service__WEBPACK_IMPORTED_MODULE_1__["default"].execute(config.serviceUrl, params.ks, params.playlistId));
    return requests;
  }
  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  ;

  _proto.isValid = function isValid() {
    return !!this._playlistId;
  };

  _createClass(OVPPlaylistLoader, [{
    key: "requests",
    set: function set(requests) {
      this._requests = requests;
    },
    get: function get() {
      return this._requests;
    }
  }, {
    key: "response",
    set: function set(response) {
      this._response.playlistData = new _response_types_kaltura_playlist__WEBPACK_IMPORTED_MODULE_3__["default"](response[0].data);
      this._response.playlistItems = new _response_types_kaltura_media_entries__WEBPACK_IMPORTED_MODULE_4__["default"](response[1].data);
    },
    get: function get() {
      return this._response;
    }
  }]);

  return OVPPlaylistLoader;
}();



/***/ }),

/***/ "./k-provider/ovp/loaders/session-loader.js":
/*!**************************************************!*\
  !*** ./k-provider/ovp/loaders/session-loader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPSessionLoader; });
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/session-service */ "./k-provider/ovp/services/session-service.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./k-provider/ovp/config.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var OVPSessionLoader = /*#__PURE__*/function () {
  _createClass(OVPSessionLoader, [{
    key: "requests",
    set: function set(requests) {
      this._requests = requests;
    },
    get: function get() {
      return this._requests;
    }
  }, {
    key: "response",
    set: function set(response) {
      this._response.ks = response[0].data.ks;
    },
    get: function get() {
      return this._response.ks;
    }
    /**
     * @constructor
     * @param {Object} params loader params
     */

  }], [{
    key: "id",
    get: function get() {
      return 'session';
    }
  }]);

  function OVPSessionLoader(params) {
    _defineProperty(this, "_response", {});

    this.requests = this.buildRequests(params);
    this._widgetId = params.widgetId;
  }
  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */


  var _proto = OVPSessionLoader.prototype;

  _proto.buildRequests = function buildRequests(params) {
    var config = _config__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    var requests = [];
    requests.push(_services_session_service__WEBPACK_IMPORTED_MODULE_0__["default"].anonymousSession(config.serviceUrl, params.widgetId));
    return requests;
  }
  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  ;

  _proto.isValid = function isValid() {
    return !!this._widgetId;
  };

  return OVPSessionLoader;
}();



/***/ }),

/***/ "./k-provider/ovp/play-source-url-builder.js":
/*!***************************************************!*\
  !*** ./k-provider/ovp/play-source-url-builder.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaySourceUrlBuilder; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./k-provider/ovp/config.js");


var PlaySourceUrlBuilder = /*#__PURE__*/function () {
  function PlaySourceUrlBuilder() {}

  /**
   * Returns source url by given url params
   * @function build
   * @param {urlParamsType} urlParams The params
   * @returns {string} The URL
   * @static
   */
  PlaySourceUrlBuilder.build = function build(urlParams) {
    var config = _config__WEBPACK_IMPORTED_MODULE_0__["default"].get();
    var serviceUrlOrigin = config.serviceUrl.substr(0, config.serviceUrl.lastIndexOf('/'));
    var partnerId = urlParams.partnerId,
        entryId = urlParams.entryId,
        ks = urlParams.ks,
        uiConfId = urlParams.uiConfId,
        format = urlParams.format,
        protocol = urlParams.protocol,
        extension = urlParams.extension,
        flavorIds = urlParams.flavorIds; //verify mandatory params

    if (!serviceUrlOrigin || !partnerId || !entryId || !format || !protocol) {
      return '';
    }

    var playUrl = serviceUrlOrigin;

    if (!serviceUrlOrigin.endsWith('/')) {
      playUrl += '/';
    }

    playUrl += 'p/' + partnerId + '/sp/' + partnerId + '00' + '/playManifest/entryId/' + entryId + '/protocol/' + protocol + '/format/' + format;

    if (flavorIds) {
      playUrl += '/flavorIds/' + flavorIds;
    } else if (uiConfId) {
      playUrl += '/uiConfId/' + uiConfId;
    }

    if (ks !== '') {
      playUrl += '/ks/' + ks;
    }

    if (extension !== '') {
      playUrl += '/a.' + extension;
    }

    if (uiConfId && flavorIds !== '') {
      playUrl += '?uiConfId=' + uiConfId;
    }

    return playUrl;
  };

  return PlaySourceUrlBuilder;
}();



/***/ }),

/***/ "./k-provider/ovp/provider-parser.js":
/*!*******************************************!*\
  !*** ./k-provider/ovp/provider-parser.js ***!
  \*******************************************/
/*! exports provided: addKsToUrl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addKsToUrl", function() { return addKsToUrl; });
/* harmony import */ var _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./response-types/kaltura-playback-context */ "./k-provider/ovp/response-types/kaltura-playback-context.js");
/* harmony import */ var _response_types_kaltura_metadata_list_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response-types/kaltura-metadata-list-response */ "./k-provider/ovp/response-types/kaltura-metadata-list-response.js");
/* harmony import */ var _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response-types/kaltura-media-entry */ "./k-provider/ovp/response-types/kaltura-media-entry.js");
/* harmony import */ var _response_types_kaltura_playback_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response-types/kaltura-playback-source */ "./k-provider/ovp/response-types/kaltura-playback-source.js");
/* harmony import */ var _response_types_kaltura_bumper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./response-types/kaltura-bumper */ "./k-provider/ovp/response-types/kaltura-bumper.js");
/* harmony import */ var _common_response_types_kaltura_drm_playback_plugin_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/response-types/kaltura-drm-playback-plugin-data */ "./k-provider/common/response-types/kaltura-drm-playback-plugin-data.js");
/* harmony import */ var _play_source_url_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play-source-url-builder */ "./k-provider/ovp/play-source-url-builder.js");
/* harmony import */ var _util_xml_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/xml-parser */ "./util/xml-parser.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/logger */ "./util/logger.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./k-provider/ovp/config.js");
/* harmony import */ var _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../entities/media-entry */ "./entities/media-entry.js");
/* harmony import */ var _entities_drm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../entities/drm */ "./entities/drm.js");
/* harmony import */ var _entities_media_source__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entities/media-source */ "./entities/media-source.js");
/* harmony import */ var _entities_media_sources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../entities/media-sources */ "./entities/media-sources.js");
/* harmony import */ var _entities_media_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../entities/media-format */ "./entities/media-format.js");
/* harmony import */ var _entities_playlist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../entities/playlist */ "./entities/playlist.js");
/* harmony import */ var _entities_entry_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../entities/entry-list */ "./entities/entry-list.js");
/* harmony import */ var _entities_bumper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../entities/bumper */ "./entities/bumper.js");
/* harmony import */ var _response_types_kaltura_rule_action__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./response-types/kaltura-rule-action */ "./k-provider/ovp/response-types/kaltura-rule-action.js");
/* harmony import */ var _common_response_types_kaltura_access_control_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/response-types/kaltura-access-control-message */ "./k-provider/common/response-types/kaltura-access-control-message.js");
/* harmony import */ var _external_captions_builder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./external-captions-builder */ "./k-provider/ovp/external-captions-builder.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var OVPProviderParser = /*#__PURE__*/function () {
  function OVPProviderParser() {}

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
  OVPProviderParser.getMediaEntry = function getMediaEntry(ks, partnerId, uiConfId, mediaEntryResponse) {
    var mediaEntry = new _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"]();
    var entry = mediaEntryResponse.entry;
    var playbackContext = mediaEntryResponse.playBackContextResult;
    var metadataList = mediaEntryResponse.metadataListResult;
    var kalturaSources = playbackContext.sources;
    mediaEntry.sources = OVPProviderParser._getParsedSources(kalturaSources, ks, partnerId, uiConfId, entry, playbackContext);

    if (_config__WEBPACK_IMPORTED_MODULE_9__["default"].get().useApiCaptions && playbackContext.data.playbackCaptions) {
      mediaEntry.sources.captions = _external_captions_builder__WEBPACK_IMPORTED_MODULE_20__["ExternalCaptionsBuilder"].createConfig(playbackContext.data.playbackCaptions, ks);
    }

    OVPProviderParser._fillBaseData(mediaEntry, entry, metadataList);

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
  ;

  OVPProviderParser.addKsToUrl = function addKsToUrl(url, ks) {
    var hasUrlExtension = function hasUrlExtension(path) {
      var pathName = new URL(path).pathname;
      return pathName.replace(/^.*[\\/]/, '').indexOf('.') !== -1;
    };

    var ksParam;

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
  ;

  OVPProviderParser.getPlaylist = function getPlaylist(playlistResponse) {
    var playlist = new _entities_playlist__WEBPACK_IMPORTED_MODULE_15__["default"]();
    var playlistData = playlistResponse.playlistData;
    var playlistItems = playlistResponse.playlistItems.entries;
    playlist.id = playlistData.id;
    playlist.name = playlistData.name;
    playlist.description = playlistData.description;
    playlist.poster = playlistData.poster;
    playlistItems.forEach(function (entry) {
      var mediaEntry = new _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"]();

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
  ;

  OVPProviderParser.getEntryList = function getEntryList(playlistResponse) {
    var entryList = new _entities_entry_list__WEBPACK_IMPORTED_MODULE_16__["default"]();
    var playlistItems = playlistResponse.playlistItems.entries;
    playlistItems.forEach(function (entry) {
      var mediaEntry = new _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"]();

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
  ;

  OVPProviderParser.getBumper = function getBumper(assetResponse, ks, partnerId) {
    var playbackContext = assetResponse.playBackContextResult;
    var bumperData = playbackContext.bumperData[0];

    if (bumperData) {
      var bumperSources = bumperData && bumperData.sources;
      var progressiveBumper = bumperSources.find(function (bumper) {
        return Object(_entities_media_format__WEBPACK_IMPORTED_MODULE_14__["isProgressiveSource"])(bumper.format);
      });

      if (progressiveBumper) {
        var parsedSources = OVPProviderParser._parseProgressiveSources(progressiveBumper, playbackContext, ks, partnerId, 0, bumperData.entryId);

        if (parsedSources[0]) {
          return new _entities_bumper__WEBPACK_IMPORTED_MODULE_17__["default"]({
            url: parsedSources[0].url,
            clickThroughUrl: bumperData.clickThroughUrl
          });
        }
      }
    }
  };

  OVPProviderParser._fillBaseData = function _fillBaseData(mediaEntry, entry, metadataList) {
    mediaEntry.poster = entry.poster;
    mediaEntry.id = entry.id;
    mediaEntry.duration = entry.duration;
    mediaEntry.metadata = OVPProviderParser._parseMetadata(metadataList);
    mediaEntry.metadata.description = entry.description || '';
    mediaEntry.metadata.name = entry.name || '';
    mediaEntry.metadata.tags = entry.tags || '';
    mediaEntry.status = entry.status;
    mediaEntry.type = OVPProviderParser._getEntryType(entry.entryType, entry.type);

    if (mediaEntry.type === _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"].Type.LIVE) {
      mediaEntry.dvrStatus = entry.dvrStatus;
    }

    return mediaEntry;
  };

  OVPProviderParser._getEntryType = function _getEntryType(entryTypeEnum, typeEnum) {
    var type = _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"].Type.UNKNOWN;

    switch (entryTypeEnum) {
      case _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_2__["default"].MediaType.IMAGE.value:
        type = _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"].Type.IMAGE;
        break;

      case _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_2__["default"].MediaType.AUDIO.value:
        type = _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"].Type.AUDIO;
        break;

      default:
        switch (typeEnum) {
          case _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_2__["default"].EntryType.MEDIA_CLIP.value:
            type = _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"].Type.VOD;
            break;

          case _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_2__["default"].EntryType.LIVE_STREAM.value:
          case _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_2__["default"].EntryType.LIVE_CHANNEL.value:
            type = _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"].Type.LIVE;
            break;

          default:
            type = _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"].Type.UNKNOWN;
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
  ;

  OVPProviderParser._getParsedSources = function _getParsedSources(kalturaSources, ks, partnerId, uiConfId, entry, playbackContext) {
    var sources = new _entities_media_sources__WEBPACK_IMPORTED_MODULE_13__["default"]();

    var addAdaptiveSource = function addAdaptiveSource(source) {
      var parsedSource = OVPProviderParser._parseAdaptiveSource(source, playbackContext, ks, partnerId, uiConfId, entry.id);

      if (parsedSource) {
        var sourceFormat = _entities_media_format__WEBPACK_IMPORTED_MODULE_14__["SupportedStreamFormat"].get(source.format);
        sources.map(parsedSource, sourceFormat);
      }
    };

    var parseAdaptiveSources = function parseAdaptiveSources() {
      kalturaSources.filter(function (source) {
        return !Object(_entities_media_format__WEBPACK_IMPORTED_MODULE_14__["isProgressiveSource"])(source.format);
      }).forEach(addAdaptiveSource);
    };

    var parseProgressiveSources = function parseProgressiveSources() {
      var progressiveSource = kalturaSources.find(function (source) {
        //match progressive source with supported protocol(http/s)
        return Object(_entities_media_format__WEBPACK_IMPORTED_MODULE_14__["isProgressiveSource"])(source.format) && source.getProtocol(OVPProviderParser._getBaseProtocol()) !== '';
      });
      sources.progressive = OVPProviderParser._parseProgressiveSources(progressiveSource, playbackContext, ks, partnerId, uiConfId, entry.id);
    };

    var parseExternalMedia = function parseExternalMedia() {
      var mediaSource = new _entities_media_source__WEBPACK_IMPORTED_MODULE_12__["default"]();
      mediaSource.mimetype = 'video/youtube';
      mediaSource.url = entry.referenceId;
      mediaSource.id = entry.id + '_youtube';
      sources.progressive.push(mediaSource);
    };

    if (entry.type === _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_2__["default"].EntryType.EXTERNAL_MEDIA.value) {
      parseExternalMedia();
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
  ;

  OVPProviderParser._parseAdaptiveSource = function _parseAdaptiveSource(kalturaSource, playbackContext, ks, partnerId, uiConfId, entryId) {
    var mediaSource = new _entities_media_source__WEBPACK_IMPORTED_MODULE_12__["default"]();

    if (kalturaSource) {
      var playUrl = '';
      var mediaFormat = _entities_media_format__WEBPACK_IMPORTED_MODULE_14__["SupportedStreamFormat"].get(kalturaSource.format);
      var protocol = kalturaSource.getProtocol(OVPProviderParser._getBaseProtocol());
      var deliveryProfileId = kalturaSource.deliveryProfileId;
      var format = kalturaSource.format;
      var extension = '';

      if (mediaFormat) {
        extension = mediaFormat.pathExt;
        mediaSource.mimetype = mediaFormat.mimeType;
      } // in case playbackSource doesn't have flavors we don't need to build the url and we'll use the provided one.


      if (kalturaSource.hasFlavorIds()) {
        if (!extension && playbackContext.flavorAssets && playbackContext.flavorAssets.length > 0) {
          extension = playbackContext.flavorAssets[0].fileExt;
        }

        playUrl = _play_source_url_builder__WEBPACK_IMPORTED_MODULE_6__["default"].build({
          entryId: entryId,
          flavorIds: kalturaSource.flavorIds,
          format: format,
          ks: ks,
          partnerId: partnerId,
          uiConfId: uiConfId,
          extension: extension,
          protocol: protocol
        });
      } else {
        playUrl = OVPProviderParser.addKsToUrl(kalturaSource.url, ks);
      }

      if (!playUrl) {
        var message = "failed to create play url from source, discarding source: (" + entryId + "_" + deliveryProfileId + "), " + format;

        OVPProviderParser._logger.warn(message);

        return null;
      }

      mediaSource.url = OVPProviderParser._applyRegexAction(playbackContext, playUrl);
      mediaSource.id = entryId + '_' + deliveryProfileId + ',' + format;

      if (kalturaSource.hasDrmData()) {
        var drmParams = [];
        kalturaSource.drm.forEach(function (drm) {
          drmParams.push(new _entities_drm__WEBPACK_IMPORTED_MODULE_11__["default"](drm.licenseURL, _common_response_types_kaltura_drm_playback_plugin_data__WEBPACK_IMPORTED_MODULE_5__["default"].Scheme[drm.scheme], drm.certificate));
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
  ;

  OVPProviderParser._parseProgressiveSources = function _parseProgressiveSources(kalturaSource, playbackContext, ks, partnerId, uiConfId, entryId) {
    var videoSources = [];
    var audioSources = [];

    if (kalturaSource) {
      var protocol = kalturaSource.getProtocol(OVPProviderParser._getBaseProtocol());
      var format = kalturaSource.format;
      var deliveryProfileId = kalturaSource.deliveryProfileId;
      var sourceId = deliveryProfileId + ',' + format;
      playbackContext.flavorAssets.map(function (flavor) {
        var mediaSource = new _entities_media_source__WEBPACK_IMPORTED_MODULE_12__["default"]();
        mediaSource.id = flavor.id + sourceId;
        mediaSource.mimetype = flavor.fileExt === 'mp3' ? 'audio/mp3' : 'video/mp4';
        mediaSource.height = flavor.height;
        mediaSource.width = flavor.width;
        mediaSource.bandwidth = flavor.bitrate * 1024;
        mediaSource.label = flavor.label || flavor.language;
        var playUrl = _play_source_url_builder__WEBPACK_IMPORTED_MODULE_6__["default"].build({
          entryId: entryId,
          flavorIds: flavor.id,
          format: format,
          ks: ks,
          partnerId: partnerId,
          uiConfId: uiConfId,
          extension: flavor.fileExt,
          protocol: protocol
        });

        if (playUrl === '') {
          OVPProviderParser._logger.warn("failed to create play url from source, discarding source: (" + entryId + "_" + deliveryProfileId + "), " + format + ".");

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
    } //If we have only audio flavors return them, otherwise return video flavors


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
  ;

  OVPProviderParser._parseMetadata = function _parseMetadata(metadataList) {
    var metadata = {};

    if (metadataList && metadataList.metas && metadataList.metas.length > 0) {
      metadataList.metas.forEach(function (meta) {
        if (meta.xml) {
          var metaXml;
          var domParser = new DOMParser();
          meta.xml = meta.xml.replace(/\r?\n|\r/g, '');
          meta.xml = meta.xml.replace(/>\s*/g, '>');
          meta.xml = meta.xml.replace(/>\s*/g, '>');
          metaXml = domParser.parseFromString(meta.xml, 'text/xml');
          var metasObj = _util_xml_parser__WEBPACK_IMPORTED_MODULE_7__["default"].xmlToJson(metaXml);
          var metaKeys = Object.keys(metasObj.metadata);
          metaKeys.forEach(function (key) {
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
  ;

  OVPProviderParser._getBaseProtocol = function _getBaseProtocol() {
    var config = _config__WEBPACK_IMPORTED_MODULE_9__["default"].get();
    var protocolRegex = /^https?:/;
    var result = protocolRegex.exec(config.cdnUrl);
    var protocol = result ? result[0] : document.location.protocol;

    if (typeof protocol === 'string') {
      return protocol.slice(0, -1); // remove ':' from the end
    }

    return 'https';
  };

  OVPProviderParser.hasBlockAction = function hasBlockAction(response) {
    return response.playBackContextResult.hasBlockAction();
  };

  OVPProviderParser.getBlockAction = function getBlockAction(response) {
    return response.playBackContextResult.getBlockAction();
  };

  OVPProviderParser.getErrorMessages = function getErrorMessages(response) {
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
  ;

  OVPProviderParser._applyRegexAction = function _applyRegexAction(playbackContext, playUrl) {
    var regexAction = playbackContext.getRequestHostRegexAction();

    if (regexAction) {
      var regex = new RegExp(regexAction.pattern, 'i');

      if (playUrl.match(regex)) {
        return playUrl.replace(regex, regexAction.replacement + '/');
      }
    }

    return playUrl;
  };

  return OVPProviderParser;
}();

_defineProperty(OVPProviderParser, "_logger", Object(_util_logger__WEBPACK_IMPORTED_MODULE_8__["default"])('OVPProviderParser'));

var addKsToUrl = OVPProviderParser.addKsToUrl;
/* harmony default export */ __webpack_exports__["default"] = (OVPProviderParser);

/***/ }),

/***/ "./k-provider/ovp/provider.js":
/*!************************************!*\
  !*** ./k-provider/ovp/provider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPProvider; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/logger */ "./util/logger.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./k-provider/ovp/config.js");
/* harmony import */ var _provider_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider-parser */ "./k-provider/ovp/provider-parser.js");
/* harmony import */ var _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response-types/kaltura-media-entry */ "./k-provider/ovp/response-types/kaltura-media-entry.js");
/* harmony import */ var _loaders_media_entry_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaders/media-entry-loader */ "./k-provider/ovp/loaders/media-entry-loader.js");
/* harmony import */ var _loaders_session_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loaders/session-loader */ "./k-provider/ovp/loaders/session-loader.js");
/* harmony import */ var _loaders_data_loader_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loaders/data-loader-manager */ "./k-provider/ovp/loaders/data-loader-manager.js");
/* harmony import */ var _loaders_playlist_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loaders/playlist-loader */ "./k-provider/ovp/loaders/playlist-loader.js");
/* harmony import */ var _common_base_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/base-provider */ "./k-provider/common/base-provider.js");
/* harmony import */ var _entities_media_entry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../entities/media-entry */ "./entities/media-entry.js");
/* harmony import */ var _loaders_entry_list_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loaders/entry-list-loader */ "./k-provider/ovp/loaders/entry-list-loader.js");
/* harmony import */ var _util_error_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/error/error */ "./util/error/error.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var OVPProvider = /*#__PURE__*/function (_BaseProvider) {
  _inheritsLoose(OVPProvider, _BaseProvider);

  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  function OVPProvider(options, playerVersion) {
    var _this;

    _this = _BaseProvider.call(this, options, playerVersion) || this;

    _defineProperty(_assertThisInitialized(_this), "_filterOptionsConfig", {
      redirectFromEntryId: true
    });

    _this._logger = Object(_util_logger__WEBPACK_IMPORTED_MODULE_0__["default"])('OVPProvider');
    _config__WEBPACK_IMPORTED_MODULE_1__["default"].set(options.env);

    _this._setFilterOptionsConfig(options.filterOptions);

    _this._networkRetryConfig = Object.assign(_this._networkRetryConfig, options.networkRetryParameters);
    return _this;
  }
  /**
   * Gets the backend media config.
   * @param {OVPProviderMediaInfoObject} mediaInfo - ovp media info
   * @returns {Promise<ProviderMediaConfigObject>} - The provider media config
   */


  var _proto = OVPProvider.prototype;

  _proto.getMediaConfig = function getMediaConfig(mediaInfo) {
    var _this2 = this;

    if (mediaInfo.ks) {
      this.ks = mediaInfo.ks;
      this._isAnonymous = false;
    }

    if (this.widgetId !== this.defaultWidgetId) {
      this._isAnonymous = false;
    }

    this._dataLoader = new _loaders_data_loader_manager__WEBPACK_IMPORTED_MODULE_6__["default"](this.playerVersion, this.partnerId, this.ks, this._networkRetryConfig);
    return new Promise(function (resolve, reject) {
      var entryId = mediaInfo.entryId;
      var referenceId = mediaInfo.referenceId;

      if (entryId || referenceId) {
        var ks = _this2.ks;

        if (!ks) {
          ks = '{1:result:ks}';

          _this2._dataLoader.add(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
            widgetId: _this2.widgetId
          });
        }

        var redirectFromEntryId = _this2._getEntryRedirectFilter(mediaInfo);

        _this2._dataLoader.add(_loaders_media_entry_loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
          entryId: entryId,
          ks: ks,
          redirectFromEntryId: redirectFromEntryId,
          referenceId: referenceId
        });

        return _this2._dataLoader.fetchData().then(function (response) {
          try {
            resolve(_this2._parseDataFromResponse(response));
          } catch (err) {
            reject(err);
          }
        }, function (err) {
          reject(err);
        });
      } else {
        reject(new _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Category.PROVIDER, _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Code.MISSING_MANDATORY_PARAMS, {
          message: 'missing entry id'
        }));
      }
    });
  };

  _proto._getEntryRedirectFilter = function _getEntryRedirectFilter(mediaInfo) {
    return typeof mediaInfo.redirectFromEntryId === 'boolean' ? mediaInfo.redirectFromEntryId : typeof this._filterOptionsConfig.redirectFromEntryId === 'boolean' ? this._filterOptionsConfig.redirectFromEntryId : true;
  };

  _proto._setFilterOptionsConfig = function _setFilterOptionsConfig(options) {
    if (options && typeof options.redirectFromEntryId == 'boolean') {
      this._filterOptionsConfig.redirectFromEntryId = options.redirectFromEntryId;
    }
  };

  _proto._parseDataFromResponse = function _parseDataFromResponse(data) {
    this._logger.debug('Data parsing started');

    var mediaConfig = {
      session: {
        isAnonymous: this._isAnonymous,
        partnerId: this.partnerId
      },
      sources: this._getDefaultSourcesObject(),
      plugins: {}
    };

    if (this.uiConfId) {
      mediaConfig.session.uiConfId = this.uiConfId;
    }

    if (data) {
      if (data.has(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_5__["default"].id)) {
        var sessionLoader = data.get(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_5__["default"].id);

        if (sessionLoader && sessionLoader.response) {
          mediaConfig.session.ks = sessionLoader.response;

          if (this.widgetId !== this.defaultWidgetId) {
            this.ks = mediaConfig.session.ks;
          }
        }
      } else {
        mediaConfig.session.ks = this.ks;
      }

      if (data.has(_loaders_media_entry_loader__WEBPACK_IMPORTED_MODULE_4__["default"].id)) {
        var mediaLoader = data.get(_loaders_media_entry_loader__WEBPACK_IMPORTED_MODULE_4__["default"].id);

        if (mediaLoader && mediaLoader.response) {
          var response = mediaLoader.response;

          if (_provider_parser__WEBPACK_IMPORTED_MODULE_2__["default"].hasBlockAction(response)) {
            throw new _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Category.SERVICE, _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Code.BLOCK_ACTION, {
              action: _provider_parser__WEBPACK_IMPORTED_MODULE_2__["default"].getBlockAction(response),
              messages: _provider_parser__WEBPACK_IMPORTED_MODULE_2__["default"].getErrorMessages(response)
            });
          }

          var mediaEntry = _provider_parser__WEBPACK_IMPORTED_MODULE_2__["default"].getMediaEntry(this.isAnonymous ? '' : this.ks, this.partnerId, this.uiConfId, response);
          Object.assign(mediaConfig.sources, this._getSourcesObject(mediaEntry));

          this._verifyMediaStatus(mediaEntry);

          this._verifyHasSources(mediaConfig.sources);

          var bumper = _provider_parser__WEBPACK_IMPORTED_MODULE_2__["default"].getBumper(response, this.isAnonymous ? '' : this.ks, this.partnerId);

          if (bumper) {
            Object.assign(mediaConfig.plugins, {
              bumper: bumper
            });
          }
        }
      }
    }

    this._logger.debug('Data parsing finished', mediaConfig);

    return mediaConfig;
  }
  /**
   * Checks media is ready for playback (not being imported or converted)
   * @param {MediaEntry} mediaEntry - the media entry info
   * @returns {void}
   */
  ;

  _proto._verifyMediaStatus = function _verifyMediaStatus(mediaEntry) {
    if ([_response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_3__["default"].EntryStatus.IMPORT, _response_types_kaltura_media_entry__WEBPACK_IMPORTED_MODULE_3__["default"].EntryStatus.PRECONVERT].includes(mediaEntry.status)) {
      throw new _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Category.SERVICE, _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Code.MEDIA_STATUS_NOT_READY, {
        messages: "Status of entry id " + mediaEntry.id + " is " + mediaEntry.status + " and is still being imported or converted",
        data: {
          status: status
        }
      });
    }
  }
  /**
   * Gets the backend playlist config.
   * @param {ProviderPlaylistInfoObject} playlistInfo - ovp playlist info
   * @returns {Promise<ProviderPlaylistObject>} - The provider playlist config
   */
  ;

  _proto.getPlaylistConfig = function getPlaylistConfig(playlistInfo) {
    var _this3 = this;

    if (playlistInfo.ks) {
      this.ks = playlistInfo.ks;
      this._isAnonymous = false;
    }

    if (this.widgetId !== this.defaultWidgetId) {
      this._isAnonymous = false;
    }

    this._dataLoader = new _loaders_data_loader_manager__WEBPACK_IMPORTED_MODULE_6__["default"](this.playerVersion, this.partnerId, this.ks, this._networkRetryConfig);
    return new Promise(function (resolve, reject) {
      var playlistId = playlistInfo.playlistId;

      if (playlistId) {
        var ks = _this3.ks;

        if (!ks) {
          ks = '{1:result:ks}';

          _this3._dataLoader.add(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
            widgetId: _this3.widgetId
          });
        }

        _this3._dataLoader.add(_loaders_playlist_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
          playlistId: playlistId,
          ks: ks
        });

        _this3._dataLoader.fetchData().then(function (response) {
          resolve(_this3._parsePlaylistDataFromResponse(response));
        }, function (err) {
          reject(err);
        });
      } else {
        reject({
          success: false,
          data: 'Missing mandatory parameter'
        });
      }
    });
  };

  _proto._parsePlaylistDataFromResponse = function _parsePlaylistDataFromResponse(data) {
    var _this4 = this;

    this._logger.debug('Data parsing started');

    var playlistConfig = this._getPlaylistObject();

    if (data && data.has(_loaders_playlist_loader__WEBPACK_IMPORTED_MODULE_7__["default"].id)) {
      var playlistLoader = data.get(_loaders_playlist_loader__WEBPACK_IMPORTED_MODULE_7__["default"].id);

      if (playlistLoader && playlistLoader.response) {
        var playlist = _provider_parser__WEBPACK_IMPORTED_MODULE_2__["default"].getPlaylist(playlistLoader.response);
        playlistConfig.id = playlist.id;
        playlistConfig.poster = playlist.poster;
        playlistConfig.metadata.name = playlist.name;
        playlistConfig.metadata.description = playlist.description;
        playlist.items.forEach(function (i) {
          return playlistConfig.items.push({
            sources: _this4._getSourcesObject(i)
          });
        });
      }
    }

    this._logger.debug('Data parsing finished', playlistConfig);

    return playlistConfig;
  }
  /**
   * Gets playlist config from entry list.
   * @param {ProviderEntryListObject} entryListInfo - ovp entry list info
   * @returns {Promise<ProviderPlaylistObject>} - The provider playlist config
   */
  ;

  _proto.getEntryListConfig = function getEntryListConfig(entryListInfo) {
    var _this5 = this;

    if (entryListInfo.ks) {
      this.ks = entryListInfo.ks;
      this._isAnonymous = false;
    }

    if (this.widgetId !== this.defaultWidgetId) {
      this._isAnonymous = false;
    }

    this._dataLoader = new _loaders_data_loader_manager__WEBPACK_IMPORTED_MODULE_6__["default"](this.playerVersion, this.partnerId, this.ks, this._networkRetryConfig);
    return new Promise(function (resolve, reject) {
      var entries = entryListInfo.entries;

      if (entries && entries.length) {
        var ks = _this5.ks;

        if (!ks) {
          ks = '{1:result:ks}';

          _this5._dataLoader.add(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
            widgetId: _this5.widgetId
          });
        }

        var redirectFromEntryId = _this5._getEntryRedirectFilter(entryListInfo);

        _this5._dataLoader.add(_loaders_entry_list_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
          entries: entries,
          ks: ks,
          redirectFromEntryId: redirectFromEntryId
        });

        _this5._dataLoader.fetchData().then(function (response) {
          resolve(_this5._parseEntryListDataFromResponse(response));
        }, function (err) {
          reject(err);
        });
      } else {
        reject({
          success: false,
          data: 'Missing mandatory parameter'
        });
      }
    });
  };

  _proto._parseEntryListDataFromResponse = function _parseEntryListDataFromResponse(data) {
    var _this6 = this;

    this._logger.debug('Data parsing started');

    var playlistConfig = this._getPlaylistObject();

    if (data && data.has(_loaders_entry_list_loader__WEBPACK_IMPORTED_MODULE_10__["default"].id)) {
      var playlistLoader = data.get(_loaders_entry_list_loader__WEBPACK_IMPORTED_MODULE_10__["default"].id);

      if (playlistLoader && playlistLoader.response) {
        var entryList = _provider_parser__WEBPACK_IMPORTED_MODULE_2__["default"].getEntryList(playlistLoader.response);
        entryList.items.forEach(function (i) {
          return playlistConfig.items.push({
            sources: _this6._getSourcesObject(i)
          });
        });
      }
    }

    this._logger.debug('Data parsing finished', playlistConfig);

    return playlistConfig;
  };

  _proto._getPlaylistObject = function _getPlaylistObject() {
    return {
      id: '',
      metadata: {
        name: '',
        description: ''
      },
      poster: '',
      items: []
    };
  };

  _proto._getDefaultSourcesObject = function _getDefaultSourcesObject() {
    return {
      hls: [],
      dash: [],
      progressive: [],
      id: '',
      duration: 0,
      type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_9__["default"].Type.UNKNOWN,
      poster: '',
      dvr: false,
      vr: null,
      metadata: {
        name: '',
        description: '',
        tags: ''
      }
    };
  };

  _proto._getSourcesObject = function _getSourcesObject(mediaEntry) {
    var sourcesObject = this._getDefaultSourcesObject();

    var mediaSources = mediaEntry.sources.toJSON();
    sourcesObject.hls = mediaSources.hls;
    sourcesObject.dash = mediaSources.dash;
    sourcesObject.progressive = mediaSources.progressive;
    sourcesObject.id = mediaEntry.id;
    sourcesObject.duration = mediaEntry.duration;
    sourcesObject.type = mediaEntry.type;
    sourcesObject.dvr = !!mediaEntry.dvrStatus;
    sourcesObject.poster = mediaEntry.poster;

    if (mediaEntry.sources.captions) {
      sourcesObject.captions = mediaEntry.sources.captions;
    }

    if (mediaEntry.metadata && typeof mediaEntry.metadata.tags === 'string' && mediaEntry.metadata.tags.indexOf('360') > -1) {
      sourcesObject.vr = {};
    }

    Object.assign(sourcesObject.metadata, mediaEntry.metadata);
    return sourcesObject;
  };

  return OVPProvider;
}(_common_base_provider__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./k-provider/ovp/request-params/base-entry-response-profile.js":
/*!**********************************************************************!*\
  !*** ./k-provider/ovp/request-params/base-entry-response-profile.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseEntryResponseProfile; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FIELDS = 'id,referenceId,name,description,thumbnailUrl,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags,dvrStatus,externalSourceType,status';

var BaseEntryResponseProfile =
/**
 * @constructor
 * @param {Object} responseProfile -
 */
function BaseEntryResponseProfile(responseProfile) {
  if (responseProfile === void 0) {
    responseProfile = {};
  }

  this.type = responseProfile.type || BaseEntryResponseProfile.Type.INCLUDE_FIELDS;
  this.fields = responseProfile.fields || FIELDS;
};

_defineProperty(BaseEntryResponseProfile, "Type", {
  INCLUDE_FIELDS: 1,
  EXCLUDE_FIELDS: 2
});



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-access-control-modify-request-host-regex-action.js":
/*!**************************************************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-access-control-modify-request-host-regex-action.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaAccessControlModifyRequestHostRegexAction; });
/* harmony import */ var _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kaltura-rule-action */ "./k-provider/ovp/response-types/kaltura-rule-action.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var KalturaAccessControlModifyRequestHostRegexAction = /*#__PURE__*/function (_KalturaRuleAction) {
  _inheritsLoose(KalturaAccessControlModifyRequestHostRegexAction, _KalturaRuleAction);

  /**
   * @member - Request host regex pattern
   * @type {string}
   */

  /**
   * @member - Request host regex replacement
   * @type {string}
   */

  /**
   * @member - serverNodeId to generate replacment host from
   * @type {number}
   */

  /**
   * @constructor
   * @param {Object} data - The response
   */
  function KalturaAccessControlModifyRequestHostRegexAction(data) {
    var _this;

    _this = _KalturaRuleAction.call(this, data) || this;
    _this.pattern = data.pattern;
    _this.replacement = data.replacement;
    _this.replacmenServerNodeId = data.replacmenServerNodeId;
    return _this;
  }

  return KalturaAccessControlModifyRequestHostRegexAction;
}(_kaltura_rule_action__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-base-entry-list-response.js":
/*!***************************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-base-entry-list-response.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaBaseEntryListResponse; });
/* harmony import */ var _common_base_service_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base-service-result */ "./k-provider/common/base-service-result.js");
/* harmony import */ var _kaltura_media_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kaltura-media-entry */ "./k-provider/ovp/response-types/kaltura-media-entry.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var KalturaBaseEntryListResponse = /*#__PURE__*/function (_ServiceResult) {
  _inheritsLoose(KalturaBaseEntryListResponse, _ServiceResult);

  /**
   * @member - The total count
   * @type {number}
   */

  /**
   * @member - The entries
   * @type {Array<KalturaMediaEntry>}
   */

  /**
   * @constructor
   * @param {Object} responseObj The json response
   */
  function KalturaBaseEntryListResponse(responseObj) {
    var _this;

    _this = _ServiceResult.call(this, responseObj) || this;

    if (!_this.hasError) {
      _this.totalCount = responseObj.totalCount;

      if (_this.totalCount > 0) {
        _this.entries = [];
        responseObj.objects.map(function (entry) {
          return _this.entries.push(new _kaltura_media_entry__WEBPACK_IMPORTED_MODULE_1__["default"](entry));
        });
      }
    }

    return _this;
  }

  return KalturaBaseEntryListResponse;
}(_common_base_service_result__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-bumper.js":
/*!*********************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-bumper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaBumper; });
/* harmony import */ var _kaltura_playback_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kaltura-playback-source */ "./k-provider/ovp/response-types/kaltura-playback-source.js");


var KalturaBumper =
/**
 * @member - The bumper entry ID
 * @type {string}
 */

/**
 * @member - The bumper click through url
 * @type {string}
 */

/**
 * @member - The bumper sources
 * @type {Array<KalturaPlaybackSource>}
 */
function KalturaBumper(data) {
  this.entryId = data.entryId;
  this.clickThroughUrl = data.url;
  this.sources = data.sources ? data.sources.map(function (source) {
    return new _kaltura_playback_source__WEBPACK_IMPORTED_MODULE_0__["default"](source);
  }) : [];
};



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-flavor-asset.js":
/*!***************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-flavor-asset.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaFlavorAsset; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KalturaFlavorAsset =
/**
 * @constructor
 * @param {Object} data The json response
 */
function KalturaFlavorAsset(data) {
  this.id = data.id;
  this.flavorParamsId = data.flavorParamsId;
  this.fileExt = data.fileExt;
  this.bitrate = data.bitrate;
  this.width = data.width;
  this.height = data.height;
  this.id = data.id;
  this.frameRate = data.frameRate;
  this.isOriginal = data.isOriginal;
  this.isWeb = data.isWeb;
  this.containerFormat = data.containerFormat;
  this.videoCodecId = data.videoCodecId;
  this.status = data.status;
  this.language = data.language;
  this.label = data.label;
};

_defineProperty(KalturaFlavorAsset, "Status", {
  ERROR: -1,
  QUEUED: 0,
  CONVERTING: 1,
  READY: 2,
  DELETED: 3,
  NOT_APPLICABLE: 4,
  TEMP: 5,
  WAIT_FOR_CONVERT: 6,
  IMPORTING: 7,
  VALIDATING: 8,
  EXPORTING: 9
});



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-media-entries.js":
/*!****************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-media-entries.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaMediaEntries; });
/* harmony import */ var _common_base_service_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base-service-result */ "./k-provider/common/base-service-result.js");
/* harmony import */ var _kaltura_media_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kaltura-media-entry */ "./k-provider/ovp/response-types/kaltura-media-entry.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var KalturaMediaEntries = /*#__PURE__*/function (_ServiceResult) {
  _inheritsLoose(KalturaMediaEntries, _ServiceResult);

  /**
   * @member - The entries
   * @type {Array<KalturaMediaEntry>}
   */

  /**
   * @constructor
   * @param {Object} responseObj The json response
   */
  function KalturaMediaEntries(responseObj) {
    var _this;

    _this = _ServiceResult.call(this, responseObj) || this;

    if (!_this.hasError) {
      _this.entries = [];
      responseObj.map(function (entry) {
        return _this.entries.push(new _kaltura_media_entry__WEBPACK_IMPORTED_MODULE_1__["default"](entry));
      });
    }

    return _this;
  }

  return KalturaMediaEntries;
}(_common_base_service_result__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-media-entry.js":
/*!**************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-media-entry.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaMediaEntry; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KalturaMediaEntry =
/**
 * @constructor
 * @param {Object} entry The json response
 */
function KalturaMediaEntry(entry) {
  this.id = entry.id;
  this.referenceId = entry.referenceId;
  this.externalSourceType = entry.externalSourceType;
  this.name = entry.name;
  this.description = entry.description;
  this.dataUrl = entry.dataUrl;
  this.type = entry.type;
  this.entryType = entry.mediaType;
  this.flavorParamsIds = entry.flavorParamsIds;
  this.duration = entry.duration;
  this.poster = entry.thumbnailUrl;
  this.status = entry.status;
  this.dvrStatus = entry.dvrStatus;
  this.tags = entry.tags;
};

_defineProperty(KalturaMediaEntry, "EntryType", {
  AUTOMATIC: {
    value: -1
  },
  EXTERNAL_MEDIA: {
    value: 'externalMedia.externalMedia'
  },
  MEDIA_CLIP: {
    value: 1
  },
  MIX: {
    value: 2
  },
  PLAYLIST: {
    value: 5
  },
  DATA: {
    value: 6
  },
  LIVE_STREAM: {
    value: 7
  },
  LIVE_CHANNEL: {
    value: 8
  },
  DOCUMENT: {
    value: 10
  }
});

_defineProperty(KalturaMediaEntry, "MediaType", {
  VIDEO: {
    value: 1
  },
  IMAGE: {
    value: 2
  },
  AUDIO: {
    value: 5
  },
  LIVE_STREAM_FLASH: {
    value: 201
  },
  LIVE_STREAM_WINDOWS_MEDIA: {
    value: 202
  },
  LIVE_STREAM_REAL_MEDIA: {
    value: 203
  },
  LIVE_STREAM_QUICK_TIME: {
    value: 204
  }
});

_defineProperty(KalturaMediaEntry, "EntryStatus", {
  ERROR_IMPORTING: -2,
  ERROR_CONVERTING: -1,
  SCAN_FAILURE: 'virusScan.ScanFailure',
  IMPORT: 0,
  INFECTED: 'virusScan.Infected',
  PRECONVERT: 1,
  READY: 2,
  DELETED: 3,
  PENDING: 4,
  MODERATE: 5,
  BLOCKED: 6,
  NO_CONTENT: 7
});

_defineProperty(KalturaMediaEntry, "EntryModerationStatus", {
  PENDING_MODERATION: 1,
  APPROVED: 2,
  REJECTED: 3,
  FLAGGED_FOR_REVIEW: 4,
  MODERATE: 5,
  AUTO_APPROVED: 6
});



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-metadata-list-response.js":
/*!*************************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-metadata-list-response.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaMetadataListResponse; });
/* harmony import */ var _common_base_service_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base-service-result */ "./k-provider/common/base-service-result.js");
/* harmony import */ var _kaltura_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kaltura-metadata */ "./k-provider/ovp/response-types/kaltura-metadata.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var KalturaMetadataListResponse = /*#__PURE__*/function (_ServiceResult) {
  _inheritsLoose(KalturaMetadataListResponse, _ServiceResult);

  /**
   * @constructor
   * @param {Object} responseObj The response
   */
  function KalturaMetadataListResponse(responseObj) {
    var _this;

    _this = _ServiceResult.call(this, responseObj) || this;

    if (!_this.hasError) {
      _this.totalCount = responseObj.totalCount;

      if (_this.totalCount > 0) {
        _this.metas = [];
        responseObj.objects.map(function (meta) {
          return _this.metas.push(new _kaltura_metadata__WEBPACK_IMPORTED_MODULE_1__["default"](meta));
        });
      }
    }

    return _this;
  }

  return KalturaMetadataListResponse;
}(_common_base_service_result__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-metadata.js":
/*!***********************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-metadata.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaMetadata; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KalturaMetadata =
/**
 * @constructor
 * @param {Object} data The response
 */
function KalturaMetadata(data) {
  this.id = data.id;
  this.metadataProfileId = data.metadataProfileId;
  this.metadataProfileVersion = data.metadataProfileVersion;
  this.metadataProfileId = data.metadataProfileId;
  this.metadataObjectType = data.metadataObjectType;
  this.objectId = data.objectId;
  this.version = data.version;
  this.created = new Date(0);
  this.created.setUTCSeconds(data.createdAt);
  this.updated = new Date(0);
  this.updated.setUTCSeconds(data.updatedAt);
  this.status = data.status;
  this.xml = data.xml;
};

_defineProperty(KalturaMetadata, "ObjectType", {
  AD_CUE_POINT: 'adCuePointMetadata.AdCuePoint',
  ANNOTATION: 'annotationMetadata.Annotation',
  CODE_CUE_POINT: 'codeCuePointMetadata.CodeCuePoint',
  THUMB_CUE_POINT: 'thumbCuePointMetadata.thumbCuePoint',
  ENTRY: 1,
  CATEGORY: 2,
  USER: 3,
  PARTNER: 4,
  DYNAMIC_OBJECT: 5
});

_defineProperty(KalturaMetadata, "Status", {
  VALID: 1,
  INVALID: 2,
  DELETED: 3
});



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-playback-context.js":
/*!*******************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-playback-context.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaPlaybackContext; });
/* harmony import */ var _common_base_service_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base-service-result */ "./k-provider/common/base-service-result.js");
/* harmony import */ var _common_response_types_kaltura_access_control_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/response-types/kaltura-access-control-message */ "./k-provider/common/response-types/kaltura-access-control-message.js");
/* harmony import */ var _kaltura_playback_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kaltura-playback-source */ "./k-provider/ovp/response-types/kaltura-playback-source.js");
/* harmony import */ var _kaltura_access_control_modify_request_host_regex_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kaltura-access-control-modify-request-host-regex-action */ "./k-provider/ovp/response-types/kaltura-access-control-modify-request-host-regex-action.js");
/* harmony import */ var _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kaltura-rule-action */ "./k-provider/ovp/response-types/kaltura-rule-action.js");
/* harmony import */ var _kaltura_flavor_asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kaltura-flavor-asset */ "./k-provider/ovp/response-types/kaltura-flavor-asset.js");
/* harmony import */ var _kaltura_bumper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kaltura-bumper */ "./k-provider/ovp/response-types/kaltura-bumper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var KalturaPlaybackContext = /*#__PURE__*/function (_ServiceResult) {
  _inheritsLoose(KalturaPlaybackContext, _ServiceResult);

  /**
   * @member - The playback sources
   * @type {Array<KalturaPlaybackSource>}
   */

  /**
   * @member - Array of actions as received from the rules that invalidated
   * @type {Array<KalturaRuleAction>}
   */

  /**
   * @member - Array of actions as received from the rules that invalidated
   * @type {Array<KalturaAccessControlMessage>}
   */

  /**
   * @member - The flavor assets
   * @type {Array<KalturaFlavorAsset>}
   */

  /**
   * @member - The bumper data
   * @type {Array<KalturaBumper>}
   */

  /**
   * @constructor
   * @param {Object} response The response
   */
  function KalturaPlaybackContext(response) {
    var _this;

    _this = _ServiceResult.call(this, response) || this;

    _defineProperty(_assertThisInitialized(_this), "sources", []);

    _defineProperty(_assertThisInitialized(_this), "actions", []);

    _defineProperty(_assertThisInitialized(_this), "messages", []);

    _defineProperty(_assertThisInitialized(_this), "flavorAssets", []);

    _defineProperty(_assertThisInitialized(_this), "bumperData", []);

    if (!_this.hasError) {
      var messages = response.messages;

      if (messages) {
        messages.map(function (message) {
          return _this.messages.push(new _common_response_types_kaltura_access_control_message__WEBPACK_IMPORTED_MODULE_1__["default"](message));
        });
      }

      var actions = response.actions;

      if (actions) {
        actions.map(function (action) {
          if (action.type === _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_4__["default"].Type.REQUEST_HOST_REGEX) {
            _this.actions.push(new _kaltura_access_control_modify_request_host_regex_action__WEBPACK_IMPORTED_MODULE_3__["default"](action));
          } else {
            _this.actions.push(new _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_4__["default"](action));
          }
        });
      }

      var sources = response.sources;

      if (sources) {
        sources.map(function (source) {
          return _this.sources.push(new _kaltura_playback_source__WEBPACK_IMPORTED_MODULE_2__["default"](source));
        });
      }

      var flavorAssets = response.flavorAssets;

      if (flavorAssets) {
        flavorAssets.map(function (flavor) {
          return _this.flavorAssets.push(new _kaltura_flavor_asset__WEBPACK_IMPORTED_MODULE_5__["default"](flavor));
        });
      }

      var bumperData = response.bumperData;

      if (bumperData) {
        bumperData.map(function (bumper) {
          return _this.bumperData.push(new _kaltura_bumper__WEBPACK_IMPORTED_MODULE_6__["default"](bumper));
        });
      }
    }

    return _this;
  }

  var _proto = KalturaPlaybackContext.prototype;

  _proto.hasBlockAction = function hasBlockAction() {
    return this.getBlockAction() !== undefined;
  };

  _proto.getBlockAction = function getBlockAction() {
    return this.actions.find(function (action) {
      return action.type === _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_4__["default"].Type.BLOCK;
    });
  };

  _proto.getErrorMessages = function getErrorMessages() {
    return this.messages;
  }
  /**
   * Get the KalturaAccessControlModifyRequestHostRegexAction action
   * @function getRequestHostRegexAction
   * @returns {?KalturaAccessControlModifyRequestHostRegexAction} The action
   * */
  ;

  _proto.getRequestHostRegexAction = function getRequestHostRegexAction() {
    var action = this.actions.find(function (action) {
      return action.type === _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_4__["default"].Type.REQUEST_HOST_REGEX;
    });

    if (action instanceof _kaltura_access_control_modify_request_host_regex_action__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      return action;
    }
  };

  return KalturaPlaybackContext;
}(_common_base_service_result__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-playback-source.js":
/*!******************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-playback-source.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaPlaybackSource; });
/* harmony import */ var _common_response_types_kaltura_drm_playback_plugin_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/response-types/kaltura-drm-playback-plugin-data */ "./k-provider/common/response-types/kaltura-drm-playback-plugin-data.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var KalturaPlaybackSource = /*#__PURE__*/function () {
  /**
   * @member - source format according to delivery profile streamer type (applehttp, mpegdash etc.)
   * @type {string}
   */

  /**
   * @member - delivery profile Id
   * @type {string}
   */

  /**
   * @member - The source URL
   * @type {string}
   */

  /**
   * @member - comma separated string according to deliveryProfile media protocols ('http,https' etc.)
   * @type {string}
   */

  /**
   * @member - comma separated string of flavor ids
   * @type {string}
   */

  /**
   * @member - drm data object containing relevant license url ,scheme name and certificate
   * @type {Array<KalturaDrmPlaybackPluginData>}
   */

  /**
   * @constructor
   * @param {Object} source The response
   */
  function KalturaPlaybackSource(source) {
    var _this = this;

    _defineProperty(this, "drm", []);

    this.format = source.format;
    this.deliveryProfileId = source.deliveryProfileId;
    this.url = source.url;
    this.protocols = source.protocols;
    this.flavorIds = source.flavorIds;

    if (source.drm) {
      source.drm.map(function (drm) {
        return _this.drm.push(new _common_response_types_kaltura_drm_playback_plugin_data__WEBPACK_IMPORTED_MODULE_0__["default"](drm));
      });
    }
  }
  /**
   * Checks if source has DRM data
   * @function hasDrmData
   * @returns {boolean} Is source has DRM
   */


  var _proto = KalturaPlaybackSource.prototype;

  _proto.hasDrmData = function hasDrmData() {
    return this.drm && this.drm.length > 0;
  }
  /**
   * Checks if source has flavor IDs
   * @function hasFlavorIds
   * @returns {boolean} Is source ha flavor IDs
   */
  ;

  _proto.hasFlavorIds = function hasFlavorIds() {
    return !!this.flavorIds && this.flavorIds.length > 0;
  }
  /**
   * Returns source desired protocol if supported
   * @param {string} protocol - the desired protocol for the source (base play url protocol)
   * @returns {string} - protocol if protocol is in the protocols list - if not empty string returned
   */
  ;

  _proto.getProtocol = function getProtocol(protocol) {
    var returnValue = '';

    if (this.protocols && this.protocols.length > 0) {
      var protocolsArr = this.protocols.split(',');
      protocolsArr.forEach(function (p) {
        if (p === protocol) {
          returnValue = p;
        }
      });
    } else if (protocol === 'http') {
      return protocol;
    }

    return returnValue;
  };

  return KalturaPlaybackSource;
}();



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-playlist.js":
/*!***********************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-playlist.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaPlaylist; });
var KalturaPlaylist =
/**
 * @member - playlist id
 * @type {string}
 */

/**
 * @member - playlist name
 * @type {string}
 */

/**
 * @member - playlist description
 * @type {string}
 */

/**
 * @member - playlist poster image
 * @type {string}
 */

/**
 * @constructor
 * @param {Object} playlist - The json response
 */
function KalturaPlaylist(playlist) {
  this.id = playlist.id;
  this.name = playlist.name;
  this.description = playlist.description;
  this.poster = playlist.thumbnailUrl;
};



/***/ }),

/***/ "./k-provider/ovp/response-types/kaltura-rule-action.js":
/*!**************************************************************!*\
  !*** ./k-provider/ovp/response-types/kaltura-rule-action.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaRuleAction; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KalturaRuleAction =
/**
 * @constructor
 * @param {Object} data - The response
 */
function KalturaRuleAction(data) {
  this.type = data.type;
};

_defineProperty(KalturaRuleAction, "Type", {
  DRM_POLICY: 'drm.DRM_POLICY',
  BLOCK: 1,
  PREVIEW: 2,
  LIMIT_FLAVORS: 3,
  ADD_TO_STORAGE: 4,
  LIMIT_DELIVERY_PROFILES: 5,
  SERVE_FROM_REMOTE_SERVER: 6,
  REQUEST_HOST_REGEX: 7,
  LIMIT_THUMBNAIL_CAPTURE: 8
});



/***/ }),

/***/ "./k-provider/ovp/services/base-entry-service.js":
/*!*******************************************************!*\
  !*** ./k-provider/ovp/services/base-entry-service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPBaseEntryService; });
/* harmony import */ var _ovp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ovp-service */ "./k-provider/ovp/services/ovp-service.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _request_params_base_entry_response_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request-params/base-entry-response-profile */ "./k-provider/ovp/request-params/base-entry-response-profile.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var SERVICE_NAME = 'baseEntry';

var OVPBaseEntryService = /*#__PURE__*/function (_OVPService) {
  _inheritsLoose(OVPBaseEntryService, _OVPService);

  function OVPBaseEntryService() {
    return _OVPService.apply(this, arguments) || this;
  }

  /**
   * Creates an instance of RequestBuilder for baseentry.getPlaybackContext
   * @function getPlaybackContext
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @param {serviceEntryId} serviceEntryId The entry id from the request result (to support loading by referenceId)
   * @returns {RequestBuilder} The request builder
   * @static
   */
  OVPBaseEntryService.getPlaybackContext = function getPlaybackContext(serviceUrl, ks, serviceEntryId) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'getPlaybackContext';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'baseEntry-getPlaybackContext';
    var contextDataParams = {
      objectType: 'KalturaContextDataParams',
      flavorTags: 'all'
    };
    request.params = {
      entryId: serviceEntryId,
      ks: ks,
      contextDataParams: contextDataParams
    };
    return request;
  }
  /**
   * Creates an instance of RequestBuilder for baseentry.list
   * @function list
   * @param {string} serviceUrl The base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @param {boolean} redirectFromEntryId whether the live entry should continue and play the VOD one after the live stream ends.
   * @param {string} referenceId a Reference id instead of an entry id
   * @returns {RequestBuilder} The request builder
   * @static
   */
  ;

  OVPBaseEntryService.list = function list(serviceUrl, ks, entryId, redirectFromEntryId, referenceId) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'list';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'list';
    request.params = OVPBaseEntryService.getEntryListReqParams(entryId, ks, redirectFromEntryId, referenceId);
    return request;
  }
  /**
   * Gets  baseentry.list service params
   * @function getEntryListReqParams
   * @param {string} entryId The entry ID
   * @param {string} ks The ks
   * @param {boolean} redirectFromEntryId whether the live entry should continue and play the VOD one after the live stream ends.
   * @param {string} referenceId a Reference id instead of an entry id
   * @returns {{ks: string, filter: {redirectFromEntryId: string}, responseProfile: {fields: string, type: number}}} The service params object
   * @static
   */
  ;

  OVPBaseEntryService.getEntryListReqParams = function getEntryListReqParams(entryId, ks, redirectFromEntryId, referenceId) {
    var filterParams = {};

    if (entryId) {
      filterParams = redirectFromEntryId ? {
        redirectFromEntryId: entryId
      } : {
        idEqual: entryId
      };
    } else if (referenceId) {
      filterParams = {
        objectType: 'KalturaBaseEntryFilter',
        referenceIdEqual: referenceId
      };
    }

    return {
      ks: ks,
      filter: filterParams,
      responseProfile: new _request_params_base_entry_response_profile__WEBPACK_IMPORTED_MODULE_2__["default"]()
    };
  };

  return OVPBaseEntryService;
}(_ovp_service__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/services/meta-data-service.js":
/*!******************************************************!*\
  !*** ./k-provider/ovp/services/meta-data-service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPMetadataService; });
/* harmony import */ var _ovp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ovp-service */ "./k-provider/ovp/services/ovp-service.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var SERVICE_NAME = 'metadata_metadata';

var OVPMetadataService = /*#__PURE__*/function (_OVPService) {
  _inheritsLoose(OVPMetadataService, _OVPService);

  function OVPMetadataService() {
    return _OVPService.apply(this, arguments) || this;
  }

  /**
   * Creates an instance of RequestBuilder for metadata_metadata.list
   * @function getPlaybackContext
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @param {string} entryId The entry ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  OVPMetadataService.list = function list(serviceUrl, ks, entryId) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'list';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'metadata_metadata-list';
    var filter = {
      objectType: 'KalturaMetadataFilter',
      objectIdEqual: entryId,
      metadataObjectTypeEqual: '1'
    };
    request.params = {
      filter: filter,
      ks: ks
    };
    return request;
  };

  return OVPMetadataService;
}(_ovp_service__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/services/ovp-service.js":
/*!************************************************!*\
  !*** ./k-provider/ovp/services/ovp-service.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPService; });
/* harmony import */ var _common_multi_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/multi-request-builder */ "./k-provider/common/multi-request-builder.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./k-provider/ovp/config.js");


var SERVICE_NAME = 'multirequest';

var OVPService = /*#__PURE__*/function () {
  function OVPService() {}

  /**
   * Gets a new instance of MultiRequestBuilder with ovp params
   * @function getMultiRequest
   * @param {string} playerVersion The player version
   * @param {string} ks The ks
   * @param {string} partnerId The partner ID
   * @returns {MultiRequestBuilder} The multi request builder
   * @static
   */
  OVPService.getMultiRequest = function getMultiRequest(playerVersion, ks, partnerId) {
    var config = _config__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    var ovpParams = config.serviceParams;
    Object.assign(ovpParams, {
      ks: ks,
      clientTag: 'html5:v' + playerVersion
    });

    if (partnerId) {
      Object.assign(ovpParams, {
        partnerId: partnerId
      });
    }

    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var multiReq = new _common_multi_request_builder__WEBPACK_IMPORTED_MODULE_0__["default"](headers);
    multiReq.method = 'POST';
    multiReq.service = SERVICE_NAME;
    multiReq.url = multiReq.getUrl(config.serviceUrl);
    multiReq.params = ovpParams;
    return multiReq;
  };

  return OVPService;
}();



/***/ }),

/***/ "./k-provider/ovp/services/playlist-service.js":
/*!*****************************************************!*\
  !*** ./k-provider/ovp/services/playlist-service.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPPlaylistService; });
/* harmony import */ var _ovp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ovp-service */ "./k-provider/ovp/services/ovp-service.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _request_params_base_entry_response_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request-params/base-entry-response-profile */ "./k-provider/ovp/request-params/base-entry-response-profile.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var SERVICE_NAME = 'playlist';

var OVPPlaylistService = /*#__PURE__*/function (_OVPService) {
  _inheritsLoose(OVPPlaylistService, _OVPService);

  function OVPPlaylistService() {
    return _OVPService.apply(this, arguments) || this;
  }

  /**
   * Creates an instance of RequestBuilder for playlist.getPlaybackContext
   * @function getPlaybackContext
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The ks
   * @param {string} playlistId The playlist ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  OVPPlaylistService.execute = function execute(serviceUrl, ks, playlistId) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'execute';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = SERVICE_NAME + "-execute";
    request.params = {
      ks: ks,
      id: playlistId,
      responseProfile: new _request_params_base_entry_response_profile__WEBPACK_IMPORTED_MODULE_2__["default"]()
    };
    return request;
  }
  /**
   * Creates an instance of RequestBuilder for playlist.list
   * @function list
   * @param {string} serviceUrl The base URL
   * @param {string} ks The ks
   * @param {string} playlistId The playlist ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  ;

  OVPPlaylistService.get = function get(serviceUrl, ks, playlistId) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'get';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = SERVICE_NAME + "-get";
    request.params = {
      ks: ks,
      id: playlistId,
      responseProfile: {
        fields: 'id,name,description,thumbnailUrl',
        type: 1
      }
    };
    return request;
  };

  return OVPPlaylistService;
}(_ovp_service__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ovp/services/session-service.js":
/*!****************************************************!*\
  !*** ./k-provider/ovp/services/session-service.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OVPSessionService; });
/* harmony import */ var _ovp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ovp-service */ "./k-provider/ovp/services/ovp-service.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var SERVICE_NAME = 'session';

var OVPSessionService = /*#__PURE__*/function (_OVPService) {
  _inheritsLoose(OVPSessionService, _OVPService);

  function OVPSessionService() {
    return _OVPService.apply(this, arguments) || this;
  }

  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} serviceUrl The service base URL
   * @param {string} widgetId The widget ID
   * @returns {RequestBuilder} The request builder
   * @static
   */
  OVPSessionService.anonymousSession = function anonymousSession(serviceUrl, widgetId) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'startWidgetSession';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.tag = 'session-startWidget';
    request.params = {
      widgetId: widgetId
    };
    return request;
  };

  return OVPSessionService;
}(_ovp_service__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./util/clone.js":
/*!***********************!*\
  !*** ./util/clone.js ***!
  \***********************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
var clone = function clone(data) {
  var node;

  if (Array.isArray(data)) {
    node = data.length > 0 ? data.slice(0) : [];
    node.forEach(function (e, i) {
      if (typeof e === 'object' && e !== {} || Array.isArray(e) && e.length > 0) {
        node[i] = clone(e);
      }
    });
  } else if (typeof data === 'object') {
    node = Object.assign({}, data);
    Object.keys(node).forEach(function (key) {
      if (typeof node[key] === 'object' && node[key] !== {} || Array.isArray(node[key]) && node[key].length > 0) {
        node[key] = clone(node[key]);
      }
    });
  } else {
    node = data;
  }

  return node;
};



/***/ }),

/***/ "./util/error/category.js":
/*!********************************!*\
  !*** ./util/error/category.js ***!
  \********************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = {
  /** Errors from the network stack. */
  NETWORK: 1,
  SERVICE: 2,
  PROVIDER: 3
};


/***/ }),

/***/ "./util/error/code.js":
/*!****************************!*\
  !*** ./util/error/code.js ***!
  \****************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
var Code = {
  /**
   * A network request was made using an unsupported URI scheme.
   */
  UNSUPPORTED_SCHEME: 1000,

  /**
   * An HTTP network request returned an HTTP status that indicated a failure.
   */
  BAD_HTTP_STATUS: 1001,

  /**
   * An HTTP network request failed with an error, but not from the server.
   */
  HTTP_ERROR: 1002,

  /**
   * A network request timed out.
   */
  TIMEOUT: 1003,

  /**
   * A network request was made with a malformed data URI.
   */
  MALFORMED_DATA_URI: 1004,

  /**
   * The server responsded with 2xx response, but it couldn't be parsed
   */
  BAD_SERVER_RESPONSE: 1005,

  /**
   * The server response had a valid structure but contained an error from the API
   */
  MULTIREQUEST_API_ERROR: 1006,

  /**
   * The server response had a valid structure and valid API result, but it did not match the request
   */
  API_RESPONSE_MISMATCH: 1007,

  /**
   * The server responded with an error
   */
  ERROR: 2000,

  /**
   * The server responded with a block action
   */
  BLOCK_ACTION: 2001,

  /**
   * The server responded with status import or pre convert
   */
  MEDIA_STATUS_NOT_READY: 2002,

  /**
   * The provider is missing mandatory parameter/s
   */
  MISSING_MANDATORY_PARAMS: 3000,

  /**
   * The server responded with empty sources objects (for HLS, Dash and progressive)
   */
  MISSING_PLAY_SOURCE: 3001,

  /**
   * The provider doesn't implement the called api
   */
  METHOD_NOT_IMPLEMENTED: 3002
};


/***/ }),

/***/ "./util/error/error.js":
/*!*****************************!*\
  !*** ./util/error/error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./util/logger.js");
/* harmony import */ var _severity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./severity */ "./util/error/severity.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./util/error/code.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./util/error/category.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CLASS_NAME = 'Error';
/**
 * @classdesc This is a description of the error class.
 */

var Error =
/**
 * @enum {number}
 */

/**
 * @enum {number}
 */

/**
 * @enum {number}
 */

/**
 * @constructor
 * @param {number} severity - error's severity
 * @param {number} category - error's category.
 * @param {number} code - error's code.
 * @param {any} data - additional data for the error.
 */
function Error(severity, category, code, data) {
  if (data === void 0) {
    data = {};
  }

  this.severity = severity;
  this.category = category;
  this.code = code;
  this.data = data;

  Error._logger.error("Category:" + category + " | Code:" + code + " |", data);
};

_defineProperty(Error, "Severity", _severity__WEBPACK_IMPORTED_MODULE_1__["Severity"]);

_defineProperty(Error, "Category", _category__WEBPACK_IMPORTED_MODULE_3__["Category"]);

_defineProperty(Error, "Code", _code__WEBPACK_IMPORTED_MODULE_2__["Code"]);

_defineProperty(Error, "_logger", Object(_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(CLASS_NAME));



/***/ }),

/***/ "./util/error/severity.js":
/*!********************************!*\
  !*** ./util/error/severity.js ***!
  \********************************/
/*! exports provided: Severity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return Severity; });
var Severity = {
  /**
   * An error occurred, but the Player is attempting to recover from the error.
   *
   * If the Player cannot ultimately recover, it still may not throw a CRITICAL
   * error.  For example, retrying for a media segment will never result in
   * a CRITICAL error (the Player will just retry forever).
   */
  RECOVERABLE: 1,

  /**
   * A critical error that the library cannot recover from.  These usually cause
   * the Player to stop loading or updating.  A new manifest must be loaded
   * to reset the library.
   */
  CRITICAL: 2
};


/***/ }),

/***/ "./util/logger.js":
/*!************************!*\
  !*** ./util/logger.js ***!
  \************************/
/*! exports provided: default, getLogLevel, setLogLevel, setLogger, LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogLevel", function() { return getLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogger", function() { return setLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
var JsLogger = {
  get: function get() {
    return {
      VERSION: '',
      DEBUG: {
        value: '',
        name: ''
      },
      ERROR: {
        value: '',
        name: ''
      },
      INFO: {
        value: '',
        name: ''
      },
      OFF: {
        value: '',
        name: ''
      },
      TIME: {
        value: '',
        name: ''
      },
      TRACE: {
        value: '',
        name: ''
      },
      WARN: {
        value: '',
        name: ''
      },
      createDefaultHandler: function createDefaultHandler() {},
      debug: function debug() {},
      enabledFor: function enabledFor() {},
      error: function error() {},
      get: function get() {},
      getLevel: function getLevel() {},
      info: function info() {},
      log: function log() {},
      setHandler: function setHandler() {},
      setLevel: function setLevel() {},
      time: function time() {},
      timeEnd: function timeEnd() {},
      trace: function trace() {},
      useDefaults: function useDefaults() {},
      warn: function warn() {}
    };
  }
};
var LogLevel = {};
/**
 * set logger
 * @param {LoggerType} logger - the logger
 * @returns {void}
 */

function setLogger(logger) {
  if (logger && typeof logger.getLogger === 'function') {
    JsLogger.get = logger.getLogger;
  }

  if (logger && logger.LogLevel) {
    LogLevel = logger.LogLevel;
  }
}
/**
 * get a logger
 * @param {?string} name - the logger name
 * @returns {Object} - the logger class
 */


function getLogger(name) {
  //$FlowFixMe
  return JsLogger.get(name);
}
/**
 * get the log level
 * @param {?string} name - the logger name
 * @returns {LogLevelObject} - the log level
 */


function getLogLevel(name) {
  return getLogger(name).getLevel();
}
/**
 * sets the logger level
 * @param {LogLevelObject} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */


function setLogLevel(level, name) {
  getLogger(name).setLevel(level);
}

/* harmony default export */ __webpack_exports__["default"] = (getLogger);


/***/ }),

/***/ "./util/request-builder.js":
/*!*********************************!*\
  !*** ./util/request-builder.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestBuilder; });
/* harmony import */ var _error_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error/error */ "./util/error/error.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var KALTURA_HEADER_PREFIX = 'x-';

var RequestBuilder = /*#__PURE__*/function () {
  /**
   * @member - Service name
   * @type {string}
   */

  /**
   * @member - Service action
   * @type {string}
   */

  /**
   * @member - Service params
   * @type {any}
   */

  /**
   * @memberof - Service headers
   * @type {Map<string, string>}
   */

  /**
   * @memberof - Service URL
   * @type {string}
   */

  /**
   * @memberof - Service method (POST,GET,DELETE etc..)
   * @type {string}
   */

  /**
   * @memberof - Service tag
   * @type {string}
   */

  /**
   * @memberof - the response headers of the arra
   * @type {Array<string>}
   */

  /**
   * @description network retry configuration
   * @memberof RequestBuilder
   * @type {ProviderNetworkRetryParameters}
   */

  /**
   * @description number of xhr attempts for the same multi - request.
   * @memberof RequestBuilder
   * @type {number}
   * @private
   */

  /**
   * @constructor
   * @param {Map<string, string>} headers The request headers
   */
  function RequestBuilder(headers) {
    if (headers === void 0) {
      headers = new Map();
    }

    _defineProperty(this, "retryConfig", {
      async: true,
      timeout: 0,
      maxAttempts: 4
    });

    _defineProperty(this, "_attemptCounter", 1);

    this.headers = headers;
  }
  /**
   * Builds restful service URL
   * @function getUrl
   * @param {string} serviceUrl - The service base URL
   * @returns {string} The service URL
   */


  var _proto = RequestBuilder.prototype;

  _proto.getUrl = function getUrl(serviceUrl) {
    return serviceUrl + '/service/' + this.service + (this.action ? '/action/' + this.action : '');
  }
  /**
   * Executes service
   * @function doHttpRequest
   * @returns {Promise.<any>} Service response as promise
   */
  ;

  _proto.doHttpRequest = function doHttpRequest() {
    var _this = this;

    var promise = new Promise(function (resolve, reject) {
      _this._requestPromise = {
        resolve: resolve,
        reject: reject
      };
    });

    if (!this.url) {
      this._requestPromise.reject(new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.NETWORK, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.MALFORMED_DATA_URI, {
        url: this.url
      }));
    }

    this._createXHR();

    return promise;
  };

  _proto._createXHR = function _createXHR() {
    var _this2 = this;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          try {
            var response = JSON.parse(request.responseText);
            _this2.responseHeaders = _this2._getResponseHeaders(request); // the promise returns the response for backwards compatibility

            return _this2._requestPromise.resolve(response);
          } catch (error) {
            _this2._requestPromise.reject(_this2._createError(request, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.BAD_SERVER_RESPONSE, {
              text: request.responseText
            }));
          }
        }
      }
    };

    request.open(this.method, this.url, this.retryConfig.async);

    if (this.retryConfig.async && this.retryConfig.timeout) {
      request.timeout = this.retryConfig.timeout;
    }

    var requestTime = performance.now();

    request.ontimeout = function () {
      _this2._handleError(request, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.TIMEOUT, {
        timeout: (performance.now() - requestTime) / 1000,
        statusText: request.statusText
      });
    };

    request.onerror = request.onabort = function () {
      _this2._handleError(request, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Code.HTTP_ERROR, {
        text: request.responseText,
        statusText: request.statusText
      });
    };

    this.headers.forEach(function (value, key) {
      request.setRequestHeader(key, value);
    });
    request.send(this.params);
  };

  _proto._getResponseHeaders = function _getResponseHeaders(request) {
    return request.getAllResponseHeaders().split('\n').filter(function (header) {
      return header.toLowerCase().indexOf(KALTURA_HEADER_PREFIX) === 0;
    });
  };

  _proto._handleError = function _handleError(request, code, data) {
    var error = this._createError(request, code, data);

    request.onreadystatechange = function () {};

    request.onerror = function () {};

    request.ontimeout = function () {};

    request.onabort = function () {};

    if (this.retryConfig.maxAttempts && this._attemptCounter < this.retryConfig.maxAttempts) {
      this._attemptCounter++;

      this._createXHR();
    } else {
      return this._requestPromise.reject(error);
    }
  };

  _proto._createError = function _createError(request, code, data) {
    Object.assign(data, {
      url: this.url,
      headers: this._getResponseHeaders(request),
      attempt: this._attemptCounter
    });
    return new _error_error__WEBPACK_IMPORTED_MODULE_0__["default"](_error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Severity.CRITICAL, _error_error__WEBPACK_IMPORTED_MODULE_0__["default"].Category.NETWORK, code, data);
  };

  return RequestBuilder;
}();



/***/ }),

/***/ "./util/xml-parser.js":
/*!****************************!*\
  !*** ./util/xml-parser.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XmlParser; });
var XmlParser = /*#__PURE__*/function () {
  function XmlParser() {}

  /**
   * Parses xml string to json object
   * @param {string} xml The xml to parse
   * @returns {{}} The parsed xml as Json object
   * @static
   */
  XmlParser.xmlToJson = function xmlToJson(xml) {
    var obj = {};

    if (xml.nodeType === 1) {
      if (xml.attributes.length > 0) {
        obj['@attributes'] = {};

        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
      obj = xml.nodeValue;
    }

    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;

        if (typeof obj[nodeName] === 'undefined') {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push === 'undefined') {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }

          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }

    return obj;
  };

  return XmlParser;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=playkit-ovp-provider.js.map