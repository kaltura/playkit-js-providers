(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ott"] = factory();
	else
		root["playkit"] = root["playkit"] || {}, root["playkit"]["providers"] = root["playkit"]["providers"] || {}, root["playkit"]["providers"]["ott"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./k-provider/ott/index.js");
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
  var result = response.result ? response.result : response;
  var responseArr = Array.isArray(result) ? result : [result];
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
/*! exports provided: KalturaAccessControlMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KalturaAccessControlMessage", function() { return KalturaAccessControlMessage; });
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
/*! exports provided: KalturaDrmPlaybackPluginData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KalturaDrmPlaybackPluginData", function() { return KalturaDrmPlaybackPluginData; });
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

/***/ "./k-provider/ott/config.js":
/*!**********************************!*\
  !*** ./k-provider/ott/config.js ***!
  \**********************************/
/*! exports provided: default, OTTConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTTConfiguration", function() { return OTTConfiguration; });
/* harmony import */ var _util_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/clone */ "./util/clone.js");

var defaultConfig = {
  serviceParams: {
    apiVersion: '5.2.6'
  }
};

var OTTConfiguration = /*#__PURE__*/function () {
  function OTTConfiguration() {}

  OTTConfiguration.set = function set(clientConfig) {
    if (clientConfig) {
      Object.assign(defaultConfig, clientConfig);
    }
  };

  OTTConfiguration.get = function get() {
    return Object(_util_clone__WEBPACK_IMPORTED_MODULE_0__["clone"])(defaultConfig);
  };

  return OTTConfiguration;
}();




/***/ }),

/***/ "./k-provider/ott/index.js":
/*!*********************************!*\
  !*** ./k-provider/ott/index.js ***!
  \*********************************/
/*! exports provided: Provider, ContextType, MediaType, NAME, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextType", function() { return ContextType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ "./k-provider/ott/provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response-types/kaltura-playback-context */ "./k-provider/ott/response-types/kaltura-playback-context.js");
/* harmony import */ var _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response-types/kaltura-asset */ "./k-provider/ott/response-types/kaltura-asset.js");



var NAME = "playkit-js-providers" + '-ott';
var VERSION = "2.30.0";
var ContextType = _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_1__["default"].Type;
var MediaType = _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_2__["default"].Type;


/***/ }),

/***/ "./k-provider/ott/loaders/asset-list-loader.js":
/*!*****************************************************!*\
  !*** ./k-provider/ott/loaders/asset-list-loader.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTAssetListLoader; });
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./k-provider/ott/config.js");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/asset-service */ "./k-provider/ott/services/asset-service.js");
/* harmony import */ var _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../response-types/kaltura-asset */ "./k-provider/ott/response-types/kaltura-asset.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var OTTAssetListLoader = /*#__PURE__*/function () {
  _createClass(OTTAssetListLoader, null, [{
    key: "id",
    get: function get() {
      return 'asset_list';
    }
    /**
     * @constructor
     * @param {Object} params loader params
     */

  }]);

  function OTTAssetListLoader(params) {
    _defineProperty(this, "_response", {
      playlistItems: {
        entries: []
      }
    });

    this.requests = this.buildRequests(params);
    this._entries = params.entries;
  }

  var _proto = OTTAssetListLoader.prototype;

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
      var assetReferenceType = entry.assetReferenceType || _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_3__["default"].AssetReferenceType.MEDIA;
      requests.push(_services_asset_service__WEBPACK_IMPORTED_MODULE_2__["default"].get(config.serviceUrl, params.ks, entry.entryId || entry, assetReferenceType));
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

  _createClass(OTTAssetListLoader, [{
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

      response.forEach(function (item) {
        _this._response.playlistItems.entries.push({
          mediaDataResult: new _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_3__["default"](item.data)
        });
      });
    },
    get: function get() {
      return this._response;
    }
  }]);

  return OTTAssetListLoader;
}();



/***/ }),

/***/ "./k-provider/ott/loaders/asset-loader.js":
/*!************************************************!*\
  !*** ./k-provider/ott/loaders/asset-loader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTAssetLoader; });
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/asset-service */ "./k-provider/ott/services/asset-service.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./k-provider/ott/config.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../response-types/kaltura-playback-context */ "./k-provider/ott/response-types/kaltura-playback-context.js");
/* harmony import */ var _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../response-types/kaltura-asset */ "./k-provider/ott/response-types/kaltura-asset.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var OTTAssetLoader = /*#__PURE__*/function () {
  _createClass(OTTAssetLoader, null, [{
    key: "id",
    get: function get() {
      return 'asset';
    }
    /**
     * @constructor
     * @param {Object} params loader params
     */

  }]);

  function OTTAssetLoader(params) {
    _defineProperty(this, "_response", {});

    this.requests = this.buildRequests(params);
    this._entryId = params.entryId;
  }

  var _proto = OTTAssetLoader.prototype;

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
    requests.push(_services_asset_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(config.serviceUrl, params.ks, params.entryId, params.assetReferenceType));
    requests.push(_services_asset_service__WEBPACK_IMPORTED_MODULE_0__["default"].getPlaybackContext(config.serviceUrl, params.ks, params.entryId, params.type, params.playbackContext));
    return requests;
  }
  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  ;

  _proto.isValid = function isValid() {
    return !!this._entryId;
  };

  _createClass(OTTAssetLoader, [{
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
      this._response.mediaDataResult = new _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_4__["default"](response[0].data);
      this._response.playBackContextResult = new _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_3__["default"](response[1].data);
    },
    get: function get() {
      return this._response;
    }
  }]);

  return OTTAssetLoader;
}();



/***/ }),

/***/ "./k-provider/ott/loaders/data-loader-manager.js":
/*!*******************************************************!*\
  !*** ./k-provider/ott/loaders/data-loader-manager.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTDataLoaderManager; });
/* harmony import */ var _common_data_loader_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/data-loader-manager */ "./k-provider/common/data-loader-manager.js");
/* harmony import */ var _services_ott_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ott-service */ "./k-provider/ott/services/ott-service.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



/**
 * OTTDataLoaderManager is a class that handles the OTT data loading
 * @param {string} partnerId - partner id
 * @param {string} ks - ks
 * @param {ProviderNetworkRetryParameters} [networkRetryConfig] - network retry configuration
 */

var OTTDataLoaderManager = /*#__PURE__*/function (_DataLoaderManager) {
  _inheritsLoose(OTTDataLoaderManager, _DataLoaderManager);

  function OTTDataLoaderManager(partnerId, ks, networkRetryConfig) {
    var _this;

    if (ks === void 0) {
      ks = '';
    }

    _this = _DataLoaderManager.call(this, networkRetryConfig) || this;
    _this._multiRequest = _services_ott_service__WEBPACK_IMPORTED_MODULE_1__["default"].getMultiRequest(ks, partnerId);
    return _this;
  }

  return OTTDataLoaderManager;
}(_common_data_loader_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ott/loaders/session-loader.js":
/*!**************************************************!*\
  !*** ./k-provider/ott/loaders/session-loader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTSessionLoader; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user-service */ "./k-provider/ott/services/user-service.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./k-provider/ott/config.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var OTTSessionLoader = /*#__PURE__*/function () {
  _createClass(OTTSessionLoader, null, [{
    key: "id",
    get: function get() {
      return 'session';
    }
    /**
     * @constructor
     * @param {Object} params loader params
     */

  }]);

  function OTTSessionLoader(params) {
    _defineProperty(this, "_response", {});

    this.requests = this.buildRequests(params);
    this._partnerId = params.partnerId;
  }

  var _proto = OTTSessionLoader.prototype;

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
    requests.push(_services_user_service__WEBPACK_IMPORTED_MODULE_0__["default"].anonymousLogin(config.serviceUrl, params.partnerId, params.udid));
    return requests;
  }
  /**
   * Loader validation function
   * @function
   * @returns {boolean} Is valid
   */
  ;

  _proto.isValid = function isValid() {
    return !!this._partnerId;
  };

  _createClass(OTTSessionLoader, [{
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
  }]);

  return OTTSessionLoader;
}();



/***/ }),

/***/ "./k-provider/ott/provider-parser.js":
/*!*******************************************!*\
  !*** ./k-provider/ott/provider-parser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTProviderParser; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/logger */ "./util/logger.js");
/* harmony import */ var _response_types_kaltura_playback_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response-types/kaltura-playback-source */ "./k-provider/ott/response-types/kaltura-playback-source.js");
/* harmony import */ var _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response-types/kaltura-playback-context */ "./k-provider/ott/response-types/kaltura-playback-context.js");
/* harmony import */ var _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response-types/kaltura-asset */ "./k-provider/ott/response-types/kaltura-asset.js");
/* harmony import */ var _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/media-entry */ "./entities/media-entry.js");
/* harmony import */ var _entities_drm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/drm */ "./entities/drm.js");
/* harmony import */ var _entities_media_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/media-source */ "./entities/media-source.js");
/* harmony import */ var _entities_media_sources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../entities/media-sources */ "./entities/media-sources.js");
/* harmony import */ var _entities_entry_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../entities/entry-list */ "./entities/entry-list.js");
/* harmony import */ var _entities_bumper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../entities/bumper */ "./entities/bumper.js");
/* harmony import */ var _entities_media_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../entities/media-format */ "./entities/media-format.js");
/* harmony import */ var _common_response_types_kaltura_drm_playback_plugin_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/response-types/kaltura-drm-playback-plugin-data */ "./k-provider/common/response-types/kaltura-drm-playback-plugin-data.js");
/* harmony import */ var _response_types_kaltura_rule_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./response-types/kaltura-rule-action */ "./k-provider/ott/response-types/kaltura-rule-action.js");
/* harmony import */ var _common_response_types_kaltura_access_control_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/response-types/kaltura-access-control-message */ "./k-provider/common/response-types/kaltura-access-control-message.js");
/* harmony import */ var _response_types_kaltura_bumper_playback_plugin_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./response-types/kaltura-bumper-playback-plugin-data */ "./k-provider/ott/response-types/kaltura-bumper-playback-plugin-data.js");
var _KalturaAsset$Type$ME, _KalturaAsset$Type$EP, _KalturaAsset$Type$RE, _MediaTypeCombination;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var LIVE_ASST_OBJECT_TYPE = 'KalturaLiveAsset';
var MediaTypeCombinations = (_MediaTypeCombination = {}, _MediaTypeCombination[_response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_3__["default"].Type.MEDIA] = (_KalturaAsset$Type$ME = {}, _KalturaAsset$Type$ME[_response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_2__["default"].Type.TRAILER] = function () {
  return {
    type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].Type.VOD
  };
}, _KalturaAsset$Type$ME[_response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_2__["default"].Type.PLAYBACK] = function (mediaAssetData) {
  if (mediaAssetData.objectType === LIVE_ASST_OBJECT_TYPE) {
    return {
      type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].Type.LIVE,
      dvrStatus: mediaAssetData.enableTrickPlay ? _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].DvrStatus.ON : _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].DvrStatus.OFF
    };
  } else if (parseInt(mediaAssetData.externalIds) > 0) {
    return {
      type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].Type.LIVE,
      dvrStatus: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].DvrStatus.OFF
    };
  }

  return {
    type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].Type.VOD
  };
}, _KalturaAsset$Type$ME), _MediaTypeCombination[_response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_3__["default"].Type.EPG] = (_KalturaAsset$Type$EP = {}, _KalturaAsset$Type$EP[_response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_2__["default"].Type.CATCHUP] = function () {
  return {
    type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].Type.VOD
  };
}, _KalturaAsset$Type$EP[_response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_2__["default"].Type.START_OVER] = function () {
  return {
    type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].Type.LIVE,
    dvrStatus: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].DvrStatus.ON
  };
}, _KalturaAsset$Type$EP), _MediaTypeCombination[_response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_3__["default"].Type.RECORDING] = (_KalturaAsset$Type$RE = {}, _KalturaAsset$Type$RE[_response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_2__["default"].Type.PLAYBACK] = function () {
  return {
    type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].Type.VOD
  };
}, _KalturaAsset$Type$RE), _MediaTypeCombination);

var OTTProviderParser = /*#__PURE__*/function () {
  function OTTProviderParser() {}

  /**
   * Returns parsed media entry by given OTT response objects.
   * @function getMediaEntry
   * @param {any} assetResponse - The asset response.
   * @param {Object} requestData - The request data object.
   * @returns {MediaEntry} - The media entry
   * @static
   * @public
   */
  OTTProviderParser.getMediaEntry = function getMediaEntry(assetResponse, requestData) {
    var mediaEntry = new _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"]();

    OTTProviderParser._fillBaseData(mediaEntry, assetResponse, requestData);

    var playbackContext = assetResponse.playBackContextResult;
    var mediaAsset = assetResponse.mediaDataResult;
    var kalturaSources = playbackContext.sources;

    var filteredKalturaSources = OTTProviderParser._filterSourcesByFormats(kalturaSources, requestData.formats);

    mediaEntry.sources = OTTProviderParser._getParsedSources(filteredKalturaSources);

    var typeData = OTTProviderParser._getMediaType(mediaAsset.data, requestData.mediaType, requestData.contextType);

    mediaEntry.type = typeData.type;
    mediaEntry.dvrStatus = typeData.dvrStatus;
    mediaEntry.duration = Math.max.apply(Math, kalturaSources.map(function (source) {
      return source.duration;
    }));
    return mediaEntry;
  }
  /**
   * Returns parsed entry list by given OTT response objects
   * @function getEntryList
   * @param {any} playlistResponse - response
   * @param {Array<ProviderMediaInfoObject>} requestEntries - entries list
   * @returns {Playlist} - The entry list
   * @static
   * @public
   */
  ;

  OTTProviderParser.getEntryList = function getEntryList(playlistResponse, requestEntries) {
    var entryList = new _entities_entry_list__WEBPACK_IMPORTED_MODULE_8__["default"]();
    var playlistItems = playlistResponse.playlistItems.entries;
    playlistItems.forEach(function (entry) {
      var mediaEntry = new _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"]();
      var requestData = requestEntries.find(function (requestEntry) {
        return requestEntry.entryId === entry.mediaDataResult.id;
      });

      OTTProviderParser._fillBaseData(mediaEntry, entry, requestData);

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
  ;

  OTTProviderParser.getBumper = function getBumper(assetResponse) {
    var playbackContext = assetResponse.playBackContextResult;
    var progressiveBumper = playbackContext.plugins.find(function (bumper) {
      return bumper.streamertype === _response_types_kaltura_bumper_playback_plugin_data__WEBPACK_IMPORTED_MODULE_14__["default"].StreamerType.PROGRESSIVE;
    });

    if (progressiveBumper) {
      return new _entities_bumper__WEBPACK_IMPORTED_MODULE_9__["default"](progressiveBumper);
    }
  };

  OTTProviderParser._fillBaseData = function _fillBaseData(mediaEntry, assetResponse, requestData) {
    var mediaAsset = assetResponse.mediaDataResult;
    var metaData = OTTProviderParser.reconstructMetadata(mediaAsset);
    metaData.description = mediaAsset.description;
    metaData.name = mediaAsset.name;
    if (mediaAsset.data.epgId) metaData.epgId = mediaAsset.data.epgId;
    if (mediaAsset.data.recordingId) metaData.recordingId = mediaAsset.data.recordingId;
    if (requestData && requestData.mediaType) metaData.mediaType = requestData.mediaType;
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
  ;

  OTTProviderParser.reconstructMetadata = function reconstructMetadata(mediaAsset) {
    var metadata = {
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
  ;

  OTTProviderParser.addToMetaObject = function addToMetaObject(list) {
    var categoryObj = {};

    if (list) {
      list.forEach(function (item) {
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
  ;

  OTTProviderParser._getPoster = function _getPoster(pictures) {
    if (pictures && pictures.length > 0) {
      var picObj = pictures[0];
      var url = picObj.url; // Search for thumbnail service

      var regex = /.*\/thumbnail\/.*(?:width|height)\/\d+\/(?:height|width)\/\d+/;

      if (regex.test(url)) {
        return url;
      }

      return pictures.map(function (pic) {
        return {
          url: pic.url,
          width: pic.width,
          height: pic.height
        };
      });
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
  ;

  OTTProviderParser._getMediaType = function _getMediaType(mediaAssetData, mediaType, contextType) {
    var typeData = {
      type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_4__["default"].Type.UNKNOWN
    };

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
  ;

  OTTProviderParser._filterSourcesByFormats = function _filterSourcesByFormats(kalturaSources, formats) {
    if (formats.length > 0) {
      kalturaSources = kalturaSources.filter(function (source) {
        return formats.includes(source.type);
      });
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
  ;

  OTTProviderParser._getParsedSources = function _getParsedSources(kalturaSources) {
    var sources = new _entities_media_sources__WEBPACK_IMPORTED_MODULE_7__["default"]();

    var addAdaptiveSource = function addAdaptiveSource(source) {
      var parsedSource = OTTProviderParser._parseAdaptiveSource(source);

      if (parsedSource) {
        var sourceFormat = _entities_media_format__WEBPACK_IMPORTED_MODULE_10__["SupportedStreamFormat"].get(source.format);
        sources.map(parsedSource, sourceFormat);
      }
    };

    var parseAdaptiveSources = function parseAdaptiveSources() {
      kalturaSources.filter(function (source) {
        return !Object(_entities_media_format__WEBPACK_IMPORTED_MODULE_10__["isProgressiveSource"])(source.format);
      }).forEach(addAdaptiveSource);
    };

    var parseProgressiveSources = function parseProgressiveSources() {
      kalturaSources.filter(function (source) {
        return Object(_entities_media_format__WEBPACK_IMPORTED_MODULE_10__["isProgressiveSource"])(source.format);
      }).forEach(addAdaptiveSource);
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
  ;

  OTTProviderParser._parseAdaptiveSource = function _parseAdaptiveSource(kalturaSource) {
    var mediaSource = new _entities_media_source__WEBPACK_IMPORTED_MODULE_6__["default"]();

    if (kalturaSource) {
      var playUrl = kalturaSource.url;
      var mediaFormat = _entities_media_format__WEBPACK_IMPORTED_MODULE_10__["SupportedStreamFormat"].get(kalturaSource.format);

      if (mediaFormat) {
        mediaSource.mimetype = mediaFormat.mimeType;
      }

      if (!playUrl) {
        OTTProviderParser._logger.error("failed to create play url from source, discarding source: (" + kalturaSource.fileId + "), " + kalturaSource.format + ".");

        return null;
      }

      mediaSource.url = playUrl;
      mediaSource.id = kalturaSource.fileId + ',' + kalturaSource.format;

      if (kalturaSource.hasDrmData()) {
        var drmParams = [];
        kalturaSource.drm.forEach(function (drm) {
          drmParams.push(new _entities_drm__WEBPACK_IMPORTED_MODULE_5__["default"](drm.licenseURL, _common_response_types_kaltura_drm_playback_plugin_data__WEBPACK_IMPORTED_MODULE_11__["KalturaDrmPlaybackPluginData"].Scheme[drm.scheme], drm.certificate));
        });
        mediaSource.drmData = drmParams;
      }
    }

    return mediaSource;
  };

  OTTProviderParser.hasBlockAction = function hasBlockAction(response) {
    return response.playBackContextResult.hasBlockAction();
  };

  OTTProviderParser.getBlockAction = function getBlockAction(response) {
    return response.playBackContextResult.getBlockAction();
  };

  OTTProviderParser.getErrorMessages = function getErrorMessages(response) {
    return response.playBackContextResult.getErrorMessages();
  };

  return OTTProviderParser;
}();

_defineProperty(OTTProviderParser, "_logger", Object(_util_logger__WEBPACK_IMPORTED_MODULE_0__["default"])('OTTProviderParser'));



/***/ }),

/***/ "./k-provider/ott/provider.js":
/*!************************************!*\
  !*** ./k-provider/ott/provider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTProvider; });
/* harmony import */ var _common_base_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/base-provider */ "./k-provider/common/base-provider.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/logger */ "./util/logger.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./k-provider/ott/config.js");
/* harmony import */ var _loaders_data_loader_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaders/data-loader-manager */ "./k-provider/ott/loaders/data-loader-manager.js");
/* harmony import */ var _loaders_session_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaders/session-loader */ "./k-provider/ott/loaders/session-loader.js");
/* harmony import */ var _loaders_asset_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loaders/asset-loader */ "./k-provider/ott/loaders/asset-loader.js");
/* harmony import */ var _loaders_asset_list_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loaders/asset-list-loader */ "./k-provider/ott/loaders/asset-list-loader.js");
/* harmony import */ var _provider_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider-parser */ "./k-provider/ott/provider-parser.js");
/* harmony import */ var _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./response-types/kaltura-asset */ "./k-provider/ott/response-types/kaltura-asset.js");
/* harmony import */ var _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./response-types/kaltura-playback-context */ "./k-provider/ott/response-types/kaltura-playback-context.js");
/* harmony import */ var _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../entities/media-entry */ "./entities/media-entry.js");
/* harmony import */ var _util_error_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/error/error */ "./util/error/error.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }














var OTTProvider = /*#__PURE__*/function (_BaseProvider) {
  _inheritsLoose(OTTProvider, _BaseProvider);

  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  function OTTProvider(options, playerVersion) {
    var _this;

    _this = _BaseProvider.call(this, options, playerVersion) || this;
    _this._logger = Object(_util_logger__WEBPACK_IMPORTED_MODULE_1__["default"])('OTTProvider');
    _config__WEBPACK_IMPORTED_MODULE_2__["default"].set(options.env);
    _this._networkRetryConfig = Object.assign(_this._networkRetryConfig, options.networkRetryParameters);
    return _this;
  }
  /**
   * Gets the backend media config.
   * @param {OTTProviderMediaInfoObject} mediaInfo - ott media info
   * @returns {Promise<ProviderMediaConfigObject>} - The provider media config
   */


  var _proto = OTTProvider.prototype;

  _proto.getMediaConfig = function getMediaConfig(mediaInfo) {
    var _this2 = this;

    if (mediaInfo.ks) {
      this.ks = mediaInfo.ks;
      this._isAnonymous = false;
    }

    this._dataLoader = new _loaders_data_loader_manager__WEBPACK_IMPORTED_MODULE_3__["default"](this.partnerId, this.ks, this._networkRetryConfig);
    return new Promise(function (resolve, reject) {
      var entryId = mediaInfo.entryId;

      if (entryId) {
        var ks = _this2.ks;

        if (!ks) {
          ks = '{1:result:ks}';

          _this2._dataLoader.add(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
            partnerId: _this2.partnerId
          });
        }

        var contextType = mediaInfo.contextType || _response_types_kaltura_playback_context__WEBPACK_IMPORTED_MODULE_9__["default"].Type.PLAYBACK;
        var mediaType = mediaInfo.mediaType || _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_8__["default"].Type.MEDIA;
        var assetReferenceType = mediaInfo.assetReferenceType || _response_types_kaltura_asset__WEBPACK_IMPORTED_MODULE_8__["default"].AssetReferenceType.MEDIA;
        var playbackContext = {
          mediaProtocol: mediaInfo.protocol,
          assetFileIds: mediaInfo.fileIds,
          context: contextType
        };

        if (mediaInfo.streamerType) {
          playbackContext.streamerType = mediaInfo.streamerType;
        }

        if (mediaInfo.urlType) {
          playbackContext.urlType = mediaInfo.urlType;
        }

        if (mediaInfo.adapterData) {
          playbackContext.adapterData = mediaInfo.adapterData;
        }

        _this2._dataLoader.add(_loaders_asset_loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
          entryId: entryId,
          ks: ks,
          type: mediaType,
          playbackContext: playbackContext,
          assetReferenceType: assetReferenceType
        });

        var requestData = {
          contextType: contextType,
          mediaType: mediaType,
          formats: mediaInfo.formats || []
        };
        return _this2._dataLoader.fetchData().then(function (response) {
          try {
            resolve(_this2._parseDataFromResponse(response, requestData));
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

  _proto._parseDataFromResponse = function _parseDataFromResponse(data, requestData) {
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
      if (data.has(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_4__["default"].id)) {
        var sessionLoader = data.get(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_4__["default"].id);

        if (sessionLoader && sessionLoader.response) {
          mediaConfig.session.ks = sessionLoader.response;
        }
      } else {
        mediaConfig.session.ks = this.ks;
      }

      if (data.has(_loaders_asset_loader__WEBPACK_IMPORTED_MODULE_5__["default"].id)) {
        var assetLoader = data.get(_loaders_asset_loader__WEBPACK_IMPORTED_MODULE_5__["default"].id);

        if (assetLoader && assetLoader.response && Object.keys(assetLoader.response).length) {
          var response = assetLoader.response;

          if (_provider_parser__WEBPACK_IMPORTED_MODULE_7__["default"].hasBlockAction(response)) {
            throw new _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"](_util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Severity.CRITICAL, _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Category.SERVICE, _util_error_error__WEBPACK_IMPORTED_MODULE_11__["default"].Code.BLOCK_ACTION, {
              action: _provider_parser__WEBPACK_IMPORTED_MODULE_7__["default"].getBlockAction(response),
              messages: _provider_parser__WEBPACK_IMPORTED_MODULE_7__["default"].getErrorMessages(response)
            });
          }

          var mediaEntry = _provider_parser__WEBPACK_IMPORTED_MODULE_7__["default"].getMediaEntry(response, requestData);
          Object.assign(mediaConfig.sources, this._getSourcesObject(mediaEntry));

          this._verifyHasSources(mediaConfig.sources);

          var bumper = _provider_parser__WEBPACK_IMPORTED_MODULE_7__["default"].getBumper(response);

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
   * Gets playlist config from entry list.
   * @param {ProviderEntryListObject} entryListInfo - ott entry list info
   * @returns {Promise<ProviderPlaylistObject>} - The provider playlist config
   */
  ;

  _proto.getEntryListConfig = function getEntryListConfig(entryListInfo) {
    var _this3 = this;

    if (entryListInfo.ks) {
      this.ks = entryListInfo.ks;
      this._isAnonymous = false;
    }

    this._dataLoader = new _loaders_data_loader_manager__WEBPACK_IMPORTED_MODULE_3__["default"](this.partnerId, this.ks, this._networkRetryConfig);
    return new Promise(function (resolve, reject) {
      var entries = entryListInfo.entries;

      if (entries && entries.length) {
        var ks = _this3.ks;

        if (!ks) {
          ks = '{1:result:ks}';

          _this3._dataLoader.add(_loaders_session_loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
            partnerId: _this3.partnerId
          });
        }

        _this3._dataLoader.add(_loaders_asset_list_loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
          entries: entries,
          ks: ks
        });

        _this3._dataLoader.fetchData().then(function (response) {
          resolve(_this3._parseEntryListDataFromResponse(response, entries));
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

  _proto._parseEntryListDataFromResponse = function _parseEntryListDataFromResponse(data, requestEntries) {
    var _this4 = this;

    this._logger.debug('Data parsing started');

    var playlistConfig = {
      id: '',
      metadata: {
        name: '',
        description: ''
      },
      poster: '',
      items: []
    };

    if (data && data.has(_loaders_asset_list_loader__WEBPACK_IMPORTED_MODULE_6__["default"].id)) {
      var playlistLoader = data.get(_loaders_asset_list_loader__WEBPACK_IMPORTED_MODULE_6__["default"].id);

      if (playlistLoader && playlistLoader.response) {
        var entryList = _provider_parser__WEBPACK_IMPORTED_MODULE_7__["default"].getEntryList(playlistLoader.response, requestEntries);
        entryList.items.forEach(function (i) {
          return playlistConfig.items.push({
            sources: _this4._getSourcesObject(i)
          });
        });
      }
    }

    this._logger.debug('Data parsing finished', playlistConfig);

    return playlistConfig;
  };

  _proto._getDefaultSourcesObject = function _getDefaultSourcesObject() {
    return {
      hls: [],
      dash: [],
      progressive: [],
      id: '',
      duration: 0,
      type: _entities_media_entry__WEBPACK_IMPORTED_MODULE_10__["default"].Type.UNKNOWN,
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

    if (mediaEntry.metadata && mediaEntry.metadata.metas && typeof mediaEntry.metadata.metas.tags === 'string' && mediaEntry.metadata.metas.tags.indexOf('360') > -1) {
      sourcesObject.vr = {};
    }

    Object.assign(sourcesObject.metadata, mediaEntry.metadata);
    return sourcesObject;
  };

  return OTTProvider;
}(_common_base_provider__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ott/response-types/kaltura-asset.js":
/*!********************************************************!*\
  !*** ./k-provider/ott/response-types/kaltura-asset.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaAsset; });
/* harmony import */ var _common_base_service_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base-service-result */ "./k-provider/common/base-service-result.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var KalturaAsset = /*#__PURE__*/function (_ServiceResult) {
  _inheritsLoose(KalturaAsset, _ServiceResult);

  /**
   * @member - The asset name
   * @type {string}
   */

  /**
   * @member - The asset name description
   * @type {string}
   */

  /**
   * @member - The asset tags
   * @type {Array<Object>}
   */

  /**
   * @member - The asset metas
   * @type {Array<Object>}
   */

  /**
   * @member - The asset images
   * @type {Array<any>}
   */

  /**
   * @constructor
   * @param {Object} response The response
   */
  function KalturaAsset(response) {
    var _this;

    _this = _ServiceResult.call(this, response) || this;

    _defineProperty(_assertThisInitialized(_this), "name", '');

    _defineProperty(_assertThisInitialized(_this), "description", '');

    _defineProperty(_assertThisInitialized(_this), "tags", []);

    _defineProperty(_assertThisInitialized(_this), "metas", []);

    _defineProperty(_assertThisInitialized(_this), "pictures", []);

    if (!_this.hasError) {
      _this.id = response.id;
      _this.name = response.name;
      _this.description = response.description;
      _this.metas = _this._formatTagsMetas(response.metas);
      _this.tags = _this._formatTagsMetas(response.tags);
      _this.pictures = response.images;
    }

    return _this;
  }

  var _proto = KalturaAsset.prototype;

  _proto._formatTagsMetas = function _formatTagsMetas(objectToParse) {
    var parsed = [];
    Object.keys(objectToParse).forEach(function (key) {
      if (objectToParse[key].objects) {
        var value = '';
        objectToParse[key].objects.forEach(function (object) {
          value += object.value + '|';
        });
        parsed.push({
          key: key,
          value: value
        });
      } else {
        parsed.push({
          key: key,
          value: objectToParse[key].value
        });
      }
    });
    return parsed;
  };

  return KalturaAsset;
}(_common_base_service_result__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(KalturaAsset, "Type", {
  MEDIA: 'media',
  RECORDING: 'recording',
  EPG: 'epg'
});

_defineProperty(KalturaAsset, "AssetReferenceType", {
  MEDIA: 'media',
  EPG_INTERNAL: 'epg_internal',
  EPG_EXTERNAL: 'epg_external',
  NPVR: 'nPVR'
});



/***/ }),

/***/ "./k-provider/ott/response-types/kaltura-bumper-playback-plugin-data.js":
/*!******************************************************************************!*\
  !*** ./k-provider/ott/response-types/kaltura-bumper-playback-plugin-data.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaBumpersPlaybackPluginData; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KalturaBumpersPlaybackPluginData =
/**
 * @constructor
 * @param {Object} data - The response
 */
function KalturaBumpersPlaybackPluginData(data) {
  this.streamertype = data.streamertype;
  this.url = data.url;
};

_defineProperty(KalturaBumpersPlaybackPluginData, "StreamerType", {
  HLS: 'hls',
  DASH: 'dash',
  PROGRESSIVE: 'progressive'
});



/***/ }),

/***/ "./k-provider/ott/response-types/kaltura-playback-context.js":
/*!*******************************************************************!*\
  !*** ./k-provider/ott/response-types/kaltura-playback-context.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KalturaPlaybackContext; });
/* harmony import */ var _common_base_service_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base-service-result */ "./k-provider/common/base-service-result.js");
/* harmony import */ var _common_response_types_kaltura_access_control_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/response-types/kaltura-access-control-message */ "./k-provider/common/response-types/kaltura-access-control-message.js");
/* harmony import */ var _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kaltura-rule-action */ "./k-provider/ott/response-types/kaltura-rule-action.js");
/* harmony import */ var _kaltura_playback_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kaltura-playback-source */ "./k-provider/ott/response-types/kaltura-playback-source.js");
/* harmony import */ var _kaltura_bumper_playback_plugin_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kaltura-bumper-playback-plugin-data */ "./k-provider/ott/response-types/kaltura-bumper-playback-plugin-data.js");
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
   * @member - Array of access control massages
   * @type {Array<KalturaAccessControlMessage>}
   */

  /**
   * @member - Array of bumper plugins
   * @type {Array<KalturaBumpersPlaybackPluginData>}
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

    _defineProperty(_assertThisInitialized(_this), "plugins", []);

    if (!_this.hasError) {
      var messages = response.messages;

      if (messages) {
        messages.map(function (message) {
          return _this.messages.push(new _common_response_types_kaltura_access_control_message__WEBPACK_IMPORTED_MODULE_1__["KalturaAccessControlMessage"](message));
        });
      }

      var actions = response.actions;

      if (actions) {
        actions.map(function (action) {
          return _this.actions.push(new _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_2__["default"](action));
        });
      }

      var sources = response.sources;

      if (sources) {
        sources.map(function (source) {
          return _this.sources.push(new _kaltura_playback_source__WEBPACK_IMPORTED_MODULE_3__["default"](source));
        });
      }

      var plugins = response.plugins;

      if (plugins) {
        plugins.map(function (plugin) {
          return _this.plugins.push(new _kaltura_bumper_playback_plugin_data__WEBPACK_IMPORTED_MODULE_4__["default"](plugin));
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
      return action.type === _kaltura_rule_action__WEBPACK_IMPORTED_MODULE_2__["default"].Type.BLOCK;
    });
  };

  _proto.getErrorMessages = function getErrorMessages() {
    return this.messages;
  };

  return KalturaPlaybackContext;
}(_common_base_service_result__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(KalturaPlaybackContext, "Type", {
  TRAILER: 'TRAILER',
  CATCHUP: 'CATCHUP',
  START_OVER: 'START_OVER',
  PLAYBACK: 'PLAYBACK'
});



/***/ }),

/***/ "./k-provider/ott/response-types/kaltura-playback-source.js":
/*!******************************************************************!*\
  !*** ./k-provider/ott/response-types/kaltura-playback-source.js ***!
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
   * @constructor
   * @param {Object} source The response
   */
  function KalturaPlaybackSource(source) {
    var _this = this;

    _defineProperty(this, "drm", []);

    this.format = source.format;
    this.adsPolicy = source.adsPolicy;
    this.adsParam = source.adsParam;
    this.duration = source.duration;
    this.url = source.url;
    this.type = source.type;
    this.fileId = source.id;
    this.protocols = source.protocols;

    if (source.drm) {
      source.drm.map(function (drm) {
        return _this.drm.push(new _common_response_types_kaltura_drm_playback_plugin_data__WEBPACK_IMPORTED_MODULE_0__["KalturaDrmPlaybackPluginData"](drm));
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

/***/ "./k-provider/ott/response-types/kaltura-rule-action.js":
/*!**************************************************************!*\
  !*** ./k-provider/ott/response-types/kaltura-rule-action.js ***!
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
  BLOCK: 'BLOCK',
  START_DATE_OFFSET: 'START_DATE_OFFSET',
  END_DATE_OFFSET: 'END_DATE_OFFSET',
  USER_BLOCK: 'USER_BLOCK',
  ALLOW_PLAYBACK: 'ALLOW_PLAYBACK',
  BLOCK_PLAYBACK: 'BLOCK_PLAYBACK',
  APPLY_DISCOUNT_MODULE: 'APPLY_DISCOUNT_MODULE'
});



/***/ }),

/***/ "./k-provider/ott/services/asset-service.js":
/*!**************************************************!*\
  !*** ./k-provider/ott/services/asset-service.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTAssetService; });
/* harmony import */ var _ott_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ott-service */ "./k-provider/ott/services/ott-service.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var SERVICE_NAME = 'asset';

var OTTAssetService = /*#__PURE__*/function (_OTTService) {
  _inheritsLoose(OTTAssetService, _OTTService);

  function OTTAssetService() {
    return _OTTService.apply(this, arguments) || this;
  }

  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} serviceUrl The service base URL
   * @param {string} ks The partner ID
   * @param {string} assetId The asset ID
   * @param {string} type The asset type (media/recording/epg)
   * @param {ProviderPlaybackContextOptions} playbackContextOptions The playbackContextOptions
   * @returns {RequestBuilder} The request builder
   * @static
   */
  OTTAssetService.getPlaybackContext = function getPlaybackContext(serviceUrl, ks, assetId, type, playbackContextOptions) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'getPlaybackContext';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    var contextDataParams = {
      objectType: 'KalturaPlaybackContextOptions'
    };
    Object.assign(contextDataParams, playbackContextOptions);
    request.params = {
      assetId: assetId,
      assetType: type,
      contextDataParams: contextDataParams,
      ks: ks
    };
    return request;
  };

  OTTAssetService.get = function get(serviceUrl, ks, assetId, assetReferenceType) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'get';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    request.params = {
      id: assetId,
      assetReferenceType: assetReferenceType,
      ks: ks
    };
    return request;
  };

  return OTTAssetService;
}(_ott_service__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./k-provider/ott/services/ott-service.js":
/*!************************************************!*\
  !*** ./k-provider/ott/services/ott-service.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTService; });
/* harmony import */ var _common_multi_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/multi-request-builder */ "./k-provider/common/multi-request-builder.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./k-provider/ott/config.js");


var SERVICE_NAME = 'multirequest';

var OTTService = /*#__PURE__*/function () {
  function OTTService() {}

  /**
   * Gets a new instance of MultiRequestBuilder with ott params
   * @function getMultiRequest
   * @param {string} ks The ks
   * @param {string} partnerId The partner ID
   * @returns {MultiRequestBuilder} The multi request builder
   * @static
   */
  OTTService.getMultiRequest = function getMultiRequest(ks, partnerId) {
    var config = _config__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    var ottParams = config.serviceParams;

    if (ks) {
      Object.assign(ottParams, {
        ks: ks
      });
    }

    if (partnerId) {
      Object.assign(ottParams, {
        partnerId: partnerId
      });
    }

    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var multiReq = new _common_multi_request_builder__WEBPACK_IMPORTED_MODULE_0__["default"](headers);
    multiReq.method = 'POST';
    multiReq.service = SERVICE_NAME;
    multiReq.url = multiReq.getUrl(config.serviceUrl);
    multiReq.params = ottParams;
    return multiReq;
  };

  return OTTService;
}();



/***/ }),

/***/ "./k-provider/ott/services/user-service.js":
/*!*************************************************!*\
  !*** ./k-provider/ott/services/user-service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTUserService; });
/* harmony import */ var _ott_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ott-service */ "./k-provider/ott/services/ott-service.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/request-builder */ "./util/request-builder.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var SERVICE_NAME = 'ottuser';

var OTTUserService = /*#__PURE__*/function (_OTTService) {
  _inheritsLoose(OTTUserService, _OTTService);

  function OTTUserService() {
    return _OTTService.apply(this, arguments) || this;
  }

  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function anonymousSession
   * @param {string} serviceUrl The service base URL
   * @param {string} partnerId The partner ID
   * @param {string} udid The udid
   * @returns {RequestBuilder} The request builder
   * @static
   */
  OTTUserService.anonymousLogin = function anonymousLogin(serviceUrl, partnerId, udid) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'anonymousLogin';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    var params = {
      partnerId: partnerId
    };

    if (udid) {
      Object.assign(params, {
        udid: udid
      });
    }

    request.params = params;
    return request;
  };

  return OTTUserService;
}(_ott_service__WEBPACK_IMPORTED_MODULE_0__["default"]);



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



/***/ })

/******/ });
});
//# sourceMappingURL=playkit-ott-provider.js.map