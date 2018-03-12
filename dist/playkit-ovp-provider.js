(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ovp"] = factory();
	else
		root["playkit"] = root["playkit"] || {}, root["playkit"]["providers"] = root["playkit"]["providers"] || {}, root["playkit"]["providers"]["ovp"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestBuilder = function () {

  /**
   * @constructor
   * @param {Map<string, string>} headers The request headers
   */

  /**
   * @member - Service method (POST,GET,DELETE etc..)
   * @type {string}
   */

  /**
   * @member - Service headers
   * @type {Map<string, string>}
   */

  /**
   * @member - Service action
   * @type {string}
   */
  function RequestBuilder() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();

    _classCallCheck(this, RequestBuilder);

    this.headers = headers;
  }

  /**
   * Builds restful service URL
   * @function getUrl
   * @param {string} serviceUrl - The service base URL
   * @returns {string} The service URL
   */

  /**
   * @member - Service tag
   * @type {string}
   */

  /**
   * @member - Service URL
   * @type {string}
   */

  /**
   * @member - Service params
   * @type {any}
   */

  /**
   * @member - Service name
   * @type {string}
   */


  _createClass(RequestBuilder, [{
    key: 'getUrl',
    value: function getUrl(serviceUrl) {
      return serviceUrl + '/service/' + this.service + (this.action ? '/action/' + this.action : '');
    }

    /**
     * Executes service
     * @function doHttpRequest
     * @returns {Promise.<any>} Service response as promise
     */

  }, {
    key: 'doHttpRequest',
    value: function doHttpRequest() {
      var _this = this;

      if (!this.url) {
        throw new Error("serviceUrl is mandatory for request builder");
      }
      var request = new XMLHttpRequest();
      return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
          if (request.readyState === 4) {
            if (request.status === 200) {
              var jsonResponse = JSON.parse(request.responseText);
              if (jsonResponse && (typeof jsonResponse === 'undefined' ? 'undefined' : _typeof(jsonResponse)) === 'object' && jsonResponse.code && jsonResponse.message) reject(jsonResponse);else resolve(jsonResponse);
            } else {
              reject(request.responseText);
            }
          }
        };
        request.open(_this.method, _this.url);
        _this.headers.forEach(function (value, key) {
          request.setRequestHeader(key, value);
        });
        request.send(_this.params);
      });
    }
  }]);

  return RequestBuilder;
}();

exports.default = RequestBuilder;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogLevel = exports.getLogLevel = exports.LogLevel = undefined;

var _jsLogger = __webpack_require__(22);

var JsLogger = _interopRequireWildcard(_jsLogger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LogLevel = {
  DEBUG: JsLogger.DEBUG,
  INFO: JsLogger.INFO,
  TIME: JsLogger.TIME,
  WARN: JsLogger.WARN,
  ERROR: JsLogger.ERROR,
  OFF: JsLogger.OFF
};


JsLogger.useDefaults({ defaultLevel: JsLogger.ERROR });

/**
 * get a logger
 * @param {?string} name - the logger name
 * @returns {Object} - the logger class
 */
function getLogger(name) {
  if (!name) {
    return JsLogger;
  }
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

exports.default = getLogger;
exports.LogLevel = LogLevel;
exports.getLogLevel = getLogLevel;
exports.setLogLevel = setLogLevel;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceResult =

/**
 * @constructor
 * @param {Object} response - Service response
 */

/**
 * @member - The service error
 * @type {ServiceError}
 */

/**
 * @member - The service result data
 * @type {Object}
 */
function ServiceResult(response) {
  _classCallCheck(this, ServiceResult);

  this.hasError = false;

  if (response.objectType === "KalturaAPIException") {
    this.hasError = true;
    this.error = new ServiceError(response.code, response.message);
  } else if (response.error && response.error.objectType === "KalturaAPIException") {
    this.hasError = true;
    this.error = new ServiceError(response.error.code, response.error.message);
  } else {
    this.data = response;
  }
}
/**
 * @member - Is service returned an error
 * @type {boolean}
 */
;

exports.default = ServiceResult;

var ServiceError =

/**
 * @constructor
 * @param {string} code - The result code
 * @param {string} message - The result message
 */

/**
 * @member - The error code
 * @type {string}
 */
function ServiceError(code, message) {
  _classCallCheck(this, ServiceError);

  this.code = code;
  this.message = message;
}
/**
 * @member - The error message
 * @type {string}
 */
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaSources = __webpack_require__(6);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaEntry = function () {

  /**
   * @constructor
   */


  /**
   * @member - entry id
   * @type {string}
   */

  /**
   * @member - entry name
   * @type {string}
   */

  /**
   * @member - entry sources
   * @type {MediaSources}
   */

  /**
   * @member - entry duration
   * @type {number}
   */

  /**
   * @member - entry type
   * @type {string}
   */

  /**
   * @member - entry metadata
   * @type {Object}
   */

  /**
   * @member - DVR status
   * @type {number}
   */
  function MediaEntry() {
    _classCallCheck(this, MediaEntry);

    this.metadata = new Map();
    this.sources = new _mediaSources2.default();
    this.type = MediaEntry.Type.UNKNOWN;
  }

  /**
   * Convert class to native js object.
   * @returns {ProviderMediaEntryObject} - The json class object.
   */


  _createClass(MediaEntry, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        id: this.id,
        name: this.name,
        sources: this.sources.toJSON(),
        duration: this.duration,
        dvrStatus: this.dvrStatus,
        metadata: this.metadata,
        type: this.type
      };
    }
  }]);

  return MediaEntry;
}();

MediaEntry.Type = {
  VOD: 'Vod',
  LIVE: 'Live',
  IMAGE: 'Image',
  AUDIO: 'Audio',
  UNKNOWN: 'Unknown'
};
exports.default = MediaEntry;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MediaFormat = exports.MediaFormat = {
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

var SupportedStreamFormat = exports.SupportedStreamFormat = new Map([["mpegdash", MediaFormat.DASH], ["applehttp", MediaFormat.HLS], ["url", MediaFormat.MP4]]);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drm = __webpack_require__(8);

var _drm2 = _interopRequireDefault(_drm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaSource = function () {
  function MediaSource() {
    _classCallCheck(this, MediaSource);
  }

  _createClass(MediaSource, [{
    key: 'toJSON',


    /**
     * Convert class to native js object.
     * @returns {ProviderMediaSourceObject} - The json class object.
     */

    /**
     * @member - media source height
     * @type {number}
     */

    /**
     * @member - media source bandwidth
     * @type {number}
     */

    /**
     * @member - media source mimetype
     * @type {string}
     */

    /**
     * @member - media source id
     * @type {string}
     */
    value: function toJSON() {
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
    }
    /**
     * @member - media source label
     * @type {string}
     */

    /**
     * @member - media source width
     * @type {number}
     */

    /**
     * @member - media source drm data
     * @type {Array<Drm>}
     */

    /**
     * @member - media source url
     * @type {string}
     */

  }]);

  return MediaSource;
}();

exports.default = MediaSource;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaSource = __webpack_require__(5);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

var _mediaFormat = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaSources = function () {

  /**
   * @constructor
   */

  /**
   * Dash media sources container.
   * @type {Array<MediaSource>}
   * @public
   */
  function MediaSources() {
    _classCallCheck(this, MediaSources);

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

  /**
   * Hls media sources container.
   * @type {Array<MediaSource>}
   * @public
   */

  /**
   * Progressive download media sources container.
   * @type {Array<MediaSource>}
   * @public
   */


  _createClass(MediaSources, [{
    key: 'map',
    value: function map(source, mediaFormat) {
      if (mediaFormat) {
        switch (mediaFormat.name) {
          case _mediaFormat.MediaFormat.MP4.name:
            this.progressive.push(source);
            break;
          case _mediaFormat.MediaFormat.DASH.name:
            this.dash.push(source);
            break;
          case _mediaFormat.MediaFormat.HLS.name:
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

  }, {
    key: 'toJSON',
    value: function toJSON() {
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
    }
  }]);

  return MediaSources;
}();

exports.default = MediaSources;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OVPConfiguration = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(21);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  serviceUrl: "//www.kaltura.com/api_v3",
  cdnUrl: "//cdnapisec.kaltura.com",
  serviceParams: {
    apiVersion: '3.3.0',
    format: 1
  }
};

var OVPConfiguration = function () {
  function OVPConfiguration() {
    _classCallCheck(this, OVPConfiguration);
  }

  _createClass(OVPConfiguration, null, [{
    key: "set",
    value: function set(clientConfig) {
      if (clientConfig) {
        Object.assign(defaultConfig, clientConfig);
      }
    }
  }, {
    key: "get",
    value: function get() {
      return (0, _clone.clone)(defaultConfig);
    }
  }]);

  return OVPConfiguration;
}();

exports.default = OVPConfiguration;
exports.OVPConfiguration = OVPConfiguration;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drm = function () {

  /**
   * @constructor
   * @param {string} licenseUrl - the license url
   * @param {string} scheme - the drm scheme
   * @param {?string} certificate - the drm certificate
   */

  /**
   * @member - drm scheme
   * @type {string}
   */
  function Drm(licenseUrl, scheme, certificate) {
    _classCallCheck(this, Drm);

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


  /**
   * @member - drm certificate
   * @type {string}
   */

  /**
   * @member - license url
   * @type {string}
   */


  _createClass(Drm, [{
    key: "toJSON",
    value: function toJSON() {
      var response = {
        licenseUrl: this.licenseUrl,
        scheme: this.scheme
      };
      if (this.certificate) response.certificate = this.certificate;
      return response;
    }
  }]);

  return Drm;
}();

exports.default = Drm;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiRequestBuilder = __webpack_require__(10);

var _multiRequestBuilder2 = _interopRequireDefault(_multiRequestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataLoaderManager = function () {
  function DataLoaderManager() {
    _classCallCheck(this, DataLoaderManager);

    this._loaders = new Map();
  }
  /**
   * @member - Loaders response map index
   * @type {Map<string,Array<number>>}
   * @private
   * @static
   */

  /**
   * @member - Loaders to execute
   * @type {Map<string,Function>}
   * @private
   */

  /**
   * @member - Loaders multi request
   * @type {MultiRequestBuilder}
   * @protected
   */

  /**
   * @member - Loaders multi response
   * @type {MultiRequestResult}
   * @private
   */


  _createClass(DataLoaderManager, [{
    key: 'add',


    /**
     * Add loader too execution loaders map
     * @function
     * @param {Function} loader Loader to add
     * @param {Object} params Loader params
     * @returns {void}
     */
    value: function add(loader, params) {
      var _this = this;

      var execution_loader = new loader(params);
      if (execution_loader.isValid()) {
        this._loaders.set(loader.id, execution_loader);
        // Get the start index from the multiReqeust before adding current execution_loader requests
        var startIndex = this._multiRequest.requests.length;
        // Get the requests
        var requests = execution_loader.requests;
        // Add requests to muktiRequest queue
        requests.forEach(function (request) {
          _this._multiRequest.add(request);
        });
        // Create range array of current execution_loader requests
        var executionLoaderResponseMap = Array.from(new Array(requests.length), function (val, index) {
          return index + startIndex;
        });
        // Add to map
        DataLoaderManager._loadersResponseMap.set(loader.id, executionLoaderResponseMap);
      }
    }

    /**
     * Get data from all loaders using multi request
     * @function
     * @returns {Promise} Promise
     */

  }, {
    key: 'fetchData',
    value: function fetchData() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._multiRequest.execute().then(function (response) {
          _this2._multiResponse = response;
          if (!response.success) {
            reject(response);
          } else {
            var preparedData = _this2.prepareData(response);
            if (preparedData.success) {
              resolve(_this2._loaders);
            } else {
              reject({ success: false, data: preparedData.error });
            }
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

  }, {
    key: 'prepareData',
    value: function prepareData(response) {
      this._loaders.forEach(function (loader, name) {
        var loaderDataIndexes = DataLoaderManager._loadersResponseMap.get(name);
        try {
          if (loaderDataIndexes && loaderDataIndexes.length > 0) {
            loader.response = response.results.slice(loaderDataIndexes[0], loaderDataIndexes[loaderDataIndexes.length - 1] + 1);
          }
        } catch (err) {
          return { success: false, error: err };
        }
      });
      return { success: true, data: this._loaders };
    }
  }]);

  return DataLoaderManager;
}();

DataLoaderManager._loadersResponseMap = new Map();
exports.default = DataLoaderManager;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiRequestResult = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _baseServiceResult = __webpack_require__(2);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiRequestBuilder = function (_RequestBuilder) {
  _inherits(MultiRequestBuilder, _RequestBuilder);

  function MultiRequestBuilder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiRequestBuilder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiRequestBuilder.__proto__ || Object.getPrototypeOf(MultiRequestBuilder)).call.apply(_ref, [this].concat(args))), _this), _this.requests = [], _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * @member - Array of requests
   * @type {Array<RequestBuilder>}
   */


  _createClass(MultiRequestBuilder, [{
    key: 'add',


    /**
     * Adds request to requests array
     * @function add
     * @param {RequestBuilder} request The request
     * @returns {MultiRequestBuilder} The multiRequest
     */
    value: function add(request) {
      this.requests.push(request);
      var requestParams = {};
      var serviceDef = { service: request.service, action: request.action };
      Object.assign(requestParams, _defineProperty({}, this.requests.length, Object.assign(serviceDef, request.params)));
      Object.assign(requestParams, this.params);
      this.params = requestParams;
      return this;
    }

    /**
     * Executes a multi request
     * @function execute
     * @returns {Promise} The multirequest execution promise
     */

  }, {
    key: 'execute',
    value: function execute() {
      var _this2 = this;

      try {
        this.params = JSON.stringify(this.params);
      } catch (err) {
        MultiRequestBuilder._logger.error('' + err.message);
      }
      return new Promise(function (resolve, reject) {
        _this2.doHttpRequest().then(function (data) {
          resolve(new MultiRequestResult(data));
        }, function (err) {
          var errorText = 'Error on multiRequest execution, error <' + err + '>.';
          reject(errorText);
        });
      });
    }
  }]);

  return MultiRequestBuilder;
}(_requestBuilder2.default);

MultiRequestBuilder._logger = (0, _logger2.default)("MultiRequestBuilder");
exports.default = MultiRequestBuilder;

var MultiRequestResult =

/**
 * @constructor
 * @param {Object} response data
 */
exports.MultiRequestResult = function MultiRequestResult(response) {
  var _this3 = this;

  _classCallCheck(this, MultiRequestResult);

  this.results = [];

  this.success = true;
  var responseArr = response.result ? response.result : response;
  responseArr.forEach(function (result) {
    var serviceResult = new _baseServiceResult2.default(result);
    _this3.results.push(serviceResult);
    if (serviceResult.hasError) {
      MultiRequestResult._logger.error('Service returned an error with error code: ' + serviceResult.error.code + ' and message: ' + serviceResult.error.message + '.');
      _this3.success = false;
      return;
    }
  });
}
/**
 * @member - Multi request response data
 * @type {Object}
 */

/**
 * @member - Is success
 * @type {boolean}
 */
;

MultiRequestResult._logger = (0, _logger2.default)("MultiRequestResult");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KalturaDrmPlaybackPluginData =

/**
 * @constructor
 * @param {Object} drm The json response
 */


/**
 * @member - The drm scheme
 * @type {string}
 */


/**
 * @member - The license URL
 * @type {string}
 */


/**
 * @member - The drm certificate
 * @type {?string}
 */
function KalturaDrmPlaybackPluginData(drm) {
  _classCallCheck(this, KalturaDrmPlaybackPluginData);

  this.scheme = drm.scheme;
  this.licenseURL = drm.licenseURL;
  this.certificate = drm.certificate;
};

KalturaDrmPlaybackPluginData.Scheme = {
  'drm.PLAYREADY_CENC': 'com.microsoft.playready',
  'drm.WIDEVINE_CENC': 'com.widevine.alpha',
  'fairplay.FAIRPLAY': 'com.apple.fairplay',
  'WIDEVINE_CENC': 'com.widevine.alpha',
  'PLAYREADY_CENC': 'com.microsoft.playready',
  'FAIRPLAY': 'com.apple.fairplay'
};
exports.default = KalturaDrmPlaybackPluginData;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiRequestBuilder = __webpack_require__(10);

var _multiRequestBuilder2 = _interopRequireDefault(_multiRequestBuilder);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SERVICE_NAME = "multirequest";

var OVPService = function () {
  function OVPService() {
    _classCallCheck(this, OVPService);
  }

  _createClass(OVPService, null, [{
    key: 'getMultiRequest',

    /**
     * Gets a new instance of MultiRequestBuilder with ovp params
     * @function getMultiRequest
     * @param {string} playerVersion The player version
     * @param {string} ks The ks
     * @param {string} partnerId The partner ID
     * @returns {MultiRequestBuilder} The multi request builder
     * @static
     */
    value: function getMultiRequest(playerVersion, ks, partnerId) {
      var config = _config2.default.get();
      var ovpParams = config.serviceParams;
      Object.assign(ovpParams, { ks: ks, clientTag: 'html5:v' + playerVersion });
      if (partnerId) {
        Object.assign(ovpParams, { partnerId: partnerId });
      }
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var multiReq = new _multiRequestBuilder2.default(headers);
      multiReq.method = "POST";
      multiReq.service = SERVICE_NAME;
      multiReq.url = multiReq.getUrl(config.serviceUrl);
      multiReq.params = ovpParams;
      return multiReq;
    }
  }]);

  return OVPService;
}();

exports.default = OVPService;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaFormat = __webpack_require__(4);

var _mediaEntry = __webpack_require__(3);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

var _mediaSources = __webpack_require__(6);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

var _mediaSource = __webpack_require__(5);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseProviderParser = function () {
  function BaseProviderParser() {
    _classCallCheck(this, BaseProviderParser);
  }

  _createClass(BaseProviderParser, null, [{
    key: 'getMediaEntry',
    value: function getMediaEntry() {
      // eslint-disable-line no-unused-vars
      throw new TypeError('getMediaEntry method must be implement by the derived class');
    }
  }, {
    key: '_getParsedSources',
    value: function _getParsedSources() {
      // eslint-disable-line no-unused-vars
      throw new TypeError('_getParsedSources method must be implement by the derived class');
    }
  }, {
    key: '_parseAdaptiveSource',
    value: function _parseAdaptiveSource() {
      // eslint-disable-line no-unused-vars
      throw new TypeError('_parseAdaptiveSource method must be implement by the derived class');
    }
  }, {
    key: '_isProgressiveSource',
    value: function _isProgressiveSource(source) {
      var sourceFormat = _mediaFormat.SupportedStreamFormat.get(source.format);
      return !!sourceFormat && sourceFormat.name === 'mp4';
    }
  }, {
    key: 'hasBlockActions',
    value: function hasBlockActions(assetResponse) {
      if (assetResponse && assetResponse.playBackContextResult) {
        var playbackContext = assetResponse.playBackContextResult;
        for (var actionIndex = 0; actionIndex < playbackContext.actions.length; actionIndex++) {
          if (playbackContext.actions[actionIndex].type === "BLOCK") {
            return playbackContext.actions[actionIndex];
          }
        }
      }
      return null;
    }
  }, {
    key: 'hasErrorMessage',
    value: function hasErrorMessage(assetResponse) {
      var messages = assetResponse.playBackContextResult.messages;
      for (var messagesIndex = 0; messagesIndex < messages.length; messagesIndex++) {
        if (messages[messagesIndex].code !== "OK") {
          return messages[messagesIndex];
        }
      }
      return null;
    }
  }]);

  return BaseProviderParser;
}();

exports.default = BaseProviderParser;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(1);

var _dataLoaderManager = __webpack_require__(9);

var _dataLoaderManager2 = _interopRequireDefault(_dataLoaderManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseProvider = function () {
  _createClass(BaseProvider, [{
    key: 'partnerId',
    get: function get() {
      return this._partnerId;
    }
  }, {
    key: 'uiConfId',
    get: function get() {
      return this._uiConfId;
    }
  }, {
    key: 'ks',
    get: function get() {
      return this._ks;
    },
    set: function set(value) {
      this._ks = value;
    }
  }, {
    key: 'playerVersion',
    get: function get() {
      return this._playerVersion;
    }
  }, {
    key: 'isAnonymous',
    get: function get() {
      return this._isAnonymous;
    }
  }]);

  function BaseProvider(options, playerVersion) {
    _classCallCheck(this, BaseProvider);

    this._partnerId = options.partnerId;
    this._uiConfId = options.uiConfId;
    this._isAnonymous = !options.ks;
    this._ks = options.ks || '';
    this._playerVersion = playerVersion;
    if (options.logLevel && this.LogLevel[options.logLevel]) {
      (0, _logger.setLogLevel)(this.LogLevel[options.logLevel]);
    }
  }

  _createClass(BaseProvider, [{
    key: 'getMediaConfig',
    value: function getMediaConfig(mediaInfo) {
      // eslint-disable-line no-unused-vars
      throw new TypeError('getMediaConfig method must be implement by the derived class');
    }
  }, {
    key: '_parseDataFromResponse',
    value: function _parseDataFromResponse(data) {
      // eslint-disable-line no-unused-vars
      throw new TypeError('_parseDataFromResponse method must be implement by the derived class');
    }
  }, {
    key: 'getLogLevel',
    value: function getLogLevel(name) {
      return (0, _logger.getLogLevel)(name);
    }
  }, {
    key: 'setLogLevel',
    value: function setLogLevel(level, name) {
      (0, _logger.setLogLevel)(level, name);
    }
  }, {
    key: 'LogLevel',
    get: function get() {
      return _logger.LogLevel;
    }
  }]);

  return BaseProvider;
}();

exports.default = BaseProvider;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KalturaAccessControlMessage =

/**
 * @constructor
 * @param {Object} data The json response
 */

/**
 * @member - The access control message
 * @type {string}
 */
function KalturaAccessControlMessage(data) {
  _classCallCheck(this, KalturaAccessControlMessage);

  this.message = data.message;
  this.code = data.code;
}
/**
 *  @member - The access control message code
 * @@type {string}
 */
;

exports.default = KalturaAccessControlMessage;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KalturaRuleAction =

/**
 * @constructor
 * @param {Object} data - The response
 */


/**
 * @member - The type of the action
 * @type {string|number}
 */
function KalturaRuleAction(data) {
  _classCallCheck(this, KalturaRuleAction);

  this.type = data.type;
};

KalturaRuleAction.Type = {
  DRM_POLICY: "drm.DRM_POLICY",
  BLOCK: 1,
  PREVIEW: 2,
  LIMIT_FLAVORS: 3,
  ADD_TO_STORAGE: 4,
  LIMIT_DELIVERY_PROFILES: 5,
  SERVE_FROM_REMOTE_SERVER: 6,
  REQUEST_HOST_REGEX: 7,
  LIMIT_THUMBNAIL_CAPTURE: 8
};
exports.default = KalturaRuleAction;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clone = function clone(data) {
  var node = void 0;
  if (Array.isArray(data)) {
    node = data.length > 0 ? data.slice(0) : [];
    node.forEach(function (e, i) {
      if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && e !== {} || Array.isArray(e) && e.length > 0) {
        node[i] = clone(e);
      }
    });
  } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
    node = Object.assign({}, data);
    Object.keys(node).forEach(function (key) {
      if (_typeof(node[key]) === "object" && node[key] !== {} || Array.isArray(node[key]) && node[key].length > 0) {
        node[key] = clone(node[key]);
      }
    });
  } else {
    node = data;
  }
  return node;
};

exports.clone = clone;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (global) {
	"use strict";

	// Top level module for the global, static logger instance.
	var Logger = { };

	// For those that are at home that are keeping score.
	Logger.VERSION = "1.4.1";

	// Function which handles all incoming log messages.
	var logHandler;

	// Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
	var contextualLoggersByNameMap = {};

	// Polyfill for ES5's Function.bind.
	var bind = function(scope, func) {
		return function() {
			return func.apply(scope, arguments);
		};
	};

	// Super exciting object merger-matron 9000 adding another 100 bytes to your download.
	var merge = function () {
		var args = arguments, target = args[0], key, i;
		for (i = 1; i < args.length; i++) {
			for (key in args[i]) {
				if (!(key in target) && args[i].hasOwnProperty(key)) {
					target[key] = args[i][key];
				}
			}
		}
		return target;
	};

	// Helper to define a logging level object; helps with optimisation.
	var defineLogLevel = function(value, name) {
		return { value: value, name: name };
	};

	// Predefined logging levels.
	Logger.DEBUG = defineLogLevel(1, 'DEBUG');
	Logger.INFO = defineLogLevel(2, 'INFO');
	Logger.TIME = defineLogLevel(3, 'TIME');
	Logger.WARN = defineLogLevel(4, 'WARN');
	Logger.ERROR = defineLogLevel(8, 'ERROR');
	Logger.OFF = defineLogLevel(99, 'OFF');

	// Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
	// of each other.
	var ContextualLogger = function(defaultContext) {
		this.context = defaultContext;
		this.setLevel(defaultContext.filterLevel);
		this.log = this.info;  // Convenience alias.
	};

	ContextualLogger.prototype = {
		// Changes the current logging level for the logging instance.
		setLevel: function (newLevel) {
			// Ensure the supplied Level object looks valid.
			if (newLevel && "value" in newLevel) {
				this.context.filterLevel = newLevel;
			}
		},
		
		// Gets the current logging level for the logging instance
		getLevel: function () {
			return this.context.filterLevel;
		},

		// Is the logger configured to output messages at the supplied level?
		enabledFor: function (lvl) {
			var filterLevel = this.context.filterLevel;
			return lvl.value >= filterLevel.value;
		},

		debug: function () {
			this.invoke(Logger.DEBUG, arguments);
		},

		info: function () {
			this.invoke(Logger.INFO, arguments);
		},

		warn: function () {
			this.invoke(Logger.WARN, arguments);
		},

		error: function () {
			this.invoke(Logger.ERROR, arguments);
		},

		time: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'start' ]);
			}
		},

		timeEnd: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'end' ]);
			}
		},

		// Invokes the logger callback if it's not being filtered.
		invoke: function (level, msgArgs) {
			if (logHandler && this.enabledFor(level)) {
				logHandler(msgArgs, merge({ level: level }, this.context));
			}
		}
	};

	// Protected instance which all calls to the to level `Logger` module will be routed through.
	var globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });

	// Configure the global Logger instance.
	(function() {
		// Shortcut for optimisers.
		var L = Logger;

		L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
		L.debug = bind(globalLogger, globalLogger.debug);
		L.time = bind(globalLogger, globalLogger.time);
		L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
		L.info = bind(globalLogger, globalLogger.info);
		L.warn = bind(globalLogger, globalLogger.warn);
		L.error = bind(globalLogger, globalLogger.error);

		// Don't forget the convenience alias!
		L.log = L.info;
	}());

	// Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
	// object with the supplied log messages and the second being a context object which contains a hash of stateful
	// parameters which the logging function can consume.
	Logger.setHandler = function (func) {
		logHandler = func;
	};

	// Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
	// (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
	Logger.setLevel = function(level) {
		// Set the globalLogger's level.
		globalLogger.setLevel(level);

		// Apply this level to all registered contextual loggers.
		for (var key in contextualLoggersByNameMap) {
			if (contextualLoggersByNameMap.hasOwnProperty(key)) {
				contextualLoggersByNameMap[key].setLevel(level);
			}
		}
	};

	// Gets the global logging filter level
	Logger.getLevel = function() {
		return globalLogger.getLevel();
	};

	// Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
	// default context and log handler.
	Logger.get = function (name) {
		// All logger instances are cached so they can be configured ahead of use.
		return contextualLoggersByNameMap[name] ||
			(contextualLoggersByNameMap[name] = new ContextualLogger(merge({ name: name }, globalLogger.context)));
	};

	// CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
	// write to the window's console object (if present); the optional options object can be used to customise the
	// formatter used to format each log message.
	Logger.createDefaultHandler = function (options) {
		options = options || {};

		options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
			// Prepend the logger's name to the log message for easy identification.
			if (context.name) {
				messages.unshift("[" + context.name + "]");
			}
		};

		// Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
		// that don't offer a native console method.
		var timerStartTimeByLabelMap = {};

		// Support for IE8+ (and other, slightly more sane environments)
		var invokeConsoleMethod = function (hdlr, messages) {
			Function.prototype.apply.call(hdlr, console, messages);
		};

		// Check for the presence of a logger.
		if (typeof console === "undefined") {
			return function () { /* no console */ };
		}

		return function(messages, context) {
			// Convert arguments object to Array.
			messages = Array.prototype.slice.call(messages);

			var hdlr = console.log;
			var timerLabel;

			if (context.level === Logger.TIME) {
				timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

				if (messages[1] === 'start') {
					if (console.time) {
						console.time(timerLabel);
					}
					else {
						timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
					}
				}
				else {
					if (console.timeEnd) {
						console.timeEnd(timerLabel);
					}
					else {
						invokeConsoleMethod(hdlr, [ timerLabel + ': ' +
							(new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms' ]);
					}
				}
			}
			else {
				// Delegate through to custom warn/error loggers if present on the console.
				if (context.level === Logger.WARN && console.warn) {
					hdlr = console.warn;
				} else if (context.level === Logger.ERROR && console.error) {
					hdlr = console.error;
				} else if (context.level === Logger.INFO && console.info) {
					hdlr = console.info;
				} else if (context.level === Logger.DEBUG && console.debug) {
					hdlr = console.debug;
				}

				options.formatter(messages, context);
				invokeConsoleMethod(hdlr, messages);
			}
		};
	};

	// Configure and example a Default implementation which writes to the `window.console` (if present).  The
	// `options` hash can be used to configure the default logLevel and provide a custom message formatter.
	Logger.useDefaults = function(options) {
		Logger.setLevel(options && options.defaultLevel || Logger.DEBUG);
		Logger.setHandler(Logger.createDefaultHandler(options));
	};

	// Export to popular environments boilerplate.
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Logger;
	}
	else {
		Logger._prevLogger = global.Logger;

		Logger.noConflict = function () {
			global.Logger = Logger._prevLogger;
			return Logger;
		};

		global.Logger = Logger;
	}
}(this));


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KalturaFlavorAsset =

/**
 * @constructor
 * @param {Object} data The json response
 */


/**
 * @member - The ID of the Flavor Asset
 * @type {string}
 */

/**
 * @member -The Flavor Params used to create this Flavor Asset
 * @type {string}
 */

/**
 * @member -The file extension
 * @type {string}
 */

/**
 * @member - The overall bitrate (in KBits) of the Flavor Asset
 *  @type {string}
 */

/**
 * @member - The width of the Flavor Asset
 * @type {number}
 */

/**
 * @member - The height of the Flavor Asset
 * @type {number}
 */

/**
 * @member - The frame rate (in FPS) of the Flavor Asset
 * @type {number}
 */

/**
 * @member - True if this Flavor Asset is the original source
 * @type {number}
 */

/**
 * @member - True if this Flavor Asset is playable in KDP
 * @type {boolean}
 */

/**
 * @member - The container format
 * @type {boolean}
 */

/**
 *@member - The video codec
 * @type {boolean}
 */

/**
 * @member - The status of the Flavor Asset
 * @type {number}
 */

/**
 * @member - The language of the flavor asset
 * @type {Status}
 */

/**
 * @member - The label of the flavor asset
 * @type {string}
 */
function KalturaFlavorAsset(data) {
  _classCallCheck(this, KalturaFlavorAsset);

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

KalturaFlavorAsset.Status = {
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
};
exports.default = KalturaFlavorAsset;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KalturaMediaEntry =

/**
 * @constructor
 * @param {Object} entry The json response
 */


/**
 * @member - The entry id
 * @type {string}
 */

/**
 * @member - Entry name (Min 1 chars)
 * @type {string}
 */

/**
 * @member - Entry description
 * @type {string}
 */

/**
 * @member - The URL used for playback. This is not the download URL.
 * @type {string}
 */

/**
 * @member - Comma separated flavor params ids that exists for this media entry
 * @type {string}
 */

/**
 * @member - The entry duration
 * @type {number}
 */

/**
 * @member - The type of the entry, this is auto filled by the derived entry object
 * @type {{ value: string | number }}
 */

/**
 * @member - The type of the entry, this is auto filled by the derived entry object (Image, Audio etc.)
 * @type {{ value: number }}
 */

/**
 * @member - Entry poster image
 * @type {string}
 */

/**
 * @member - DVR status
 * @type {number}
 */
function KalturaMediaEntry(entry) {
  _classCallCheck(this, KalturaMediaEntry);

  this.id = entry.id;
  this.name = entry.name;
  this.description = entry.description;
  this.dataUrl = entry.dataUrl;
  this.type = entry.type;
  this.entryType = entry.mediaType;
  this.flavorParamsIds = entry.flavorParamsIds;
  this.duration = entry.duration;
  this.poster = entry.thumbnailUrl;
  this.dvrStatus = entry.dvrStatus;
};

KalturaMediaEntry.EntryType = {
  AUTOMATIC: { value: -1 },
  EXTERNAL_MEDIA: { value: "externalMedia.externalMedia" },
  MEDIA_CLIP: { value: 1 },
  MIX: { value: 2 },
  PLAYLIST: { value: 5 },
  DATA: { value: 6 },
  LIVE_STREAM: { value: 7 },
  LIVE_CHANNEL: { value: 8 },
  DOCUMENT: { value: 10 }
};
KalturaMediaEntry.MediaType = {
  VIDEO: { value: 1 },
  IMAGE: { value: 2 },
  AUDIO: { value: 5 },
  LIVE_STREAM_FLASH: { value: 201 },
  LIVE_STREAM_WINDOWS_MEDIA: { value: 202 },
  LIVE_STREAM_REAL_MEDIA: { value: 203 },
  LIVE_STREAM_QUICK_TIME: { value: 204 }
};
KalturaMediaEntry.EntryStatus = {
  ERROR_IMPORTING: -2,
  ERROR_CONVERTING: -1,
  SCAN_FAILURE: "virusScan.ScanFailure",
  IMPORT: 0,
  INFECTED: "virusScan.Infected",
  PRECONVERT: 1,
  READY: 2,
  DELETED: 3,
  PENDING: 4,
  MODERATE: 5,
  BLOCKED: 6,
  NO_CONTENT: 7
};
KalturaMediaEntry.EntryModerationStatus = {
  PENDING_MODERATION: 1,
  APPROVED: 2,
  REJECTED: 3,
  FLAGGED_FOR_REVIEW: 4,
  MODERATE: 5,
  AUTO_APPROVED: 6
};
exports.default = KalturaMediaEntry;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(2);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _kalturaMetadata = __webpack_require__(44);

var _kalturaMetadata2 = _interopRequireDefault(_kalturaMetadata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KalturaMetadataListResponse = function (_ServiceResult) {
  _inherits(KalturaMetadataListResponse, _ServiceResult);

  /**
   * @constructor
   * @param {Object} responseObj The response
   */
  function KalturaMetadataListResponse(responseObj) {
    _classCallCheck(this, KalturaMetadataListResponse);

    var _this = _possibleConstructorReturn(this, (KalturaMetadataListResponse.__proto__ || Object.getPrototypeOf(KalturaMetadataListResponse)).call(this, responseObj));

    if (!_this.hasError) {
      _this.totalCount = responseObj.totalCount;
      if (_this.totalCount > 0) {
        _this.metas = [];
        responseObj.objects.map(function (meta) {
          return _this.metas.push(new _kalturaMetadata2.default(meta));
        });
      }
    }
    return _this;
  }

  return KalturaMetadataListResponse;
}(_baseServiceResult2.default);

exports.default = KalturaMetadataListResponse;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kalturaDrmPlaybackPluginData = __webpack_require__(11);

var _kalturaDrmPlaybackPluginData2 = _interopRequireDefault(_kalturaDrmPlaybackPluginData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KalturaPlaybackSource = function () {

  /**
   * @constructor
   * @param {Object} source The response
   */

  /**
   * @member - comma separated string of flavor ids
   * @type {string}
   */

  /**
   * @member - The source URL
   * @type {string}
   */

  /**
   * @member - source format according to delivery profile streamer type (applehttp, mpegdash etc.)
   * @type {string}
   */
  function KalturaPlaybackSource(source) {
    var _this = this;

    _classCallCheck(this, KalturaPlaybackSource);

    this.drm = [];

    this.format = source.format;
    this.deliveryProfileId = source.deliveryProfileId;
    this.url = source.url;
    this.protocols = source.protocols;
    this.flavorIds = source.flavorIds;
    if (source.drm) {
      source.drm.map(function (drm) {
        return _this.drm.push(new _kalturaDrmPlaybackPluginData2.default(drm));
      });
    }
  }

  /**
   * Checks if source has DRM data
   * @function hasDrmData
   * @returns {boolean} Is source has DRM
   */

  /**
   * @member - drm data object containing relevant license url ,scheme name and certificate
   * @type {Array<KalturaDrmPlaybackPluginData>}
   */

  /**
   * @member - comma separated string according to deliveryProfile media protocols ('http,https' etc.)
   * @type {string}
   */

  /**
   * @member - delivery profile Id
   * @type {string}
   */


  _createClass(KalturaPlaybackSource, [{
    key: "hasDrmData",
    value: function hasDrmData() {
      return this.drm && this.drm.length > 0;
    }

    /**
     * Checks if source has flavor IDs
     * @function hasFlavorIds
     * @returns {boolean} Is source ha flavor IDs
     */

  }, {
    key: "hasFlavorIds",
    value: function hasFlavorIds() {
      return !!this.flavorIds && this.flavorIds.length > 0;
    }

    /**
     * Returns source desired protocol if supported
     * @param {string} protocol - the desired protocol for the source (base play url protocol)
     * @returns {string} - protocol if protocol is in the protocols list - if not empty string returned
     */

  }, {
    key: "getProtocol",
    value: function getProtocol(protocol) {
      var returnValue = "";
      if (this.protocols && this.protocols.length > 0) {
        var protocolsArr = this.protocols.split(",");
        protocolsArr.forEach(function (p) {
          if (p === protocol) {
            returnValue = p;
          }
        });
      } else if (protocol === "http") {
        return protocol;
      }
      return returnValue;
    }
  }]);

  return KalturaPlaybackSource;
}();

exports.default = KalturaPlaybackSource;

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _providerParser = __webpack_require__(42);

var _providerParser2 = _interopRequireDefault(_providerParser);

var _mediaEntryLoader = __webpack_require__(39);

var _mediaEntryLoader2 = _interopRequireDefault(_mediaEntryLoader);

var _sessionLoader = __webpack_require__(40);

var _sessionLoader2 = _interopRequireDefault(_sessionLoader);

var _dataLoaderManager = __webpack_require__(38);

var _dataLoaderManager2 = _interopRequireDefault(_dataLoaderManager);

var _baseProvider = __webpack_require__(17);

var _baseProvider2 = _interopRequireDefault(_baseProvider);

var _mediaEntry = __webpack_require__(3);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OVPProvider = function (_BaseProvider) {
  _inherits(OVPProvider, _BaseProvider);

  /**
   * @constructor
   * @param {ProviderOptionsObject} options - provider options
   * @param {string} playerVersion - player version
   */
  function OVPProvider(options, playerVersion) {
    _classCallCheck(this, OVPProvider);

    var _this = _possibleConstructorReturn(this, (OVPProvider.__proto__ || Object.getPrototypeOf(OVPProvider)).call(this, options, playerVersion));

    _this._logger = (0, _logger2.default)("OVPProvider");
    _config2.default.set(options.env);
    return _this;
  }

  /**
   * Gets the backend media config.
   * @param {ProviderMediaInfoObject} mediaInfo - ovp media info
   * @returns {Promise<ProviderMediaConfigObject>} - The provider media config
   */


  _createClass(OVPProvider, [{
    key: 'getMediaConfig',
    value: function getMediaConfig(mediaInfo) {
      var _this2 = this;

      if (mediaInfo.ks) {
        this.ks = mediaInfo.ks;
      }
      this._dataLoader = new _dataLoaderManager2.default(this.playerVersion, this.partnerId, this.ks);
      return new Promise(function (resolve, reject) {
        var entryId = mediaInfo.entryId;
        if (entryId) {
          var ks = _this2.ks;
          if (!ks) {
            ks = "{1:result:ks}";
            _this2._dataLoader.add(_sessionLoader2.default, { partnerId: _this2.partnerId });
          }
          _this2._dataLoader.add(_mediaEntryLoader2.default, { entryId: entryId, ks: ks });
          _this2._dataLoader.fetchData().then(function (response) {
            resolve(_this2._parseDataFromResponse(response));
          }, function (err) {
            reject(err);
          });
        } else {
          reject({ success: false, data: "Missing mandatory parameter" });
        }
      });
    }
  }, {
    key: '_parseDataFromResponse',
    value: function _parseDataFromResponse(data) {
      this._logger.debug("Data parsing started");
      var mediaConfig = {
        id: '',
        name: '',
        session: {
          partnerId: this.partnerId
        },
        sources: { hls: [], dash: [], progressive: [] },
        duration: 0,
        type: _mediaEntry2.default.Type.UNKNOWN,
        dvr: false,
        metadata: {},
        plugins: {}
      };
      if (this.uiConfId) {
        mediaConfig.session.uiConfId = this.uiConfId;
      }
      if (data) {
        if (data.has(_sessionLoader2.default.id)) {
          var sessionLoader = data.get(_sessionLoader2.default.id);
          if (sessionLoader && sessionLoader.response) {
            this.ks = sessionLoader.response;
            mediaConfig.session.ks = this.ks;
          }
        } else {
          mediaConfig.session.ks = this.ks;
        }
        if (data.has(_mediaEntryLoader2.default.id)) {
          var mediaLoader = data.get(_mediaEntryLoader2.default.id);
          if (mediaLoader && mediaLoader.response) {
            var blockedAction = _providerParser2.default.hasBlockActions(mediaLoader.response);
            if (blockedAction) {
              var errorMessage = _providerParser2.default.hasErrorMessage(mediaLoader.response);
              if (errorMessage) {
                this._logger.error('Entry is blocked, error message: ', errorMessage);
                throw errorMessage;
              } else {
                this._logger.error('Entry is blocked, action: ', blockedAction);
                throw blockedAction;
              }
            }
            var mediaEntry = _providerParser2.default.getMediaEntry(this.isAnonymous ? '' : this.ks, this.partnerId, this.uiConfId, mediaLoader.response);
            mediaConfig.id = mediaEntry.id;
            mediaConfig.name = mediaEntry.name;
            mediaConfig.sources = mediaEntry.sources.toJSON();
            mediaConfig.duration = mediaEntry.duration;
            mediaConfig.type = mediaEntry.type;
            mediaConfig.dvr = !!mediaEntry.dvrStatus;
            mediaConfig.metadata = mediaEntry.metadata;
          }
        }
      }
      this._logger.debug("Data parsing finished", mediaConfig);
      return mediaConfig;
    }
  }]);

  return OVPProvider;
}(_baseProvider2.default);

exports.default = OVPProvider;

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = exports.NAME = exports.Provider = undefined;

var _provider = __webpack_require__(29);

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = "playkit-js-providers" + '-ovp';

var VERSION = "2.1.2";

exports.Provider = _provider2.default;
exports.NAME = NAME;
exports.VERSION = VERSION;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataLoaderManager = __webpack_require__(9);

var _dataLoaderManager2 = _interopRequireDefault(_dataLoaderManager);

var _ovpService = __webpack_require__(15);

var _ovpService2 = _interopRequireDefault(_ovpService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OVPDataLoaderManager = function (_DataLoaderManager) {
  _inherits(OVPDataLoaderManager, _DataLoaderManager);

  /**
   * @constructor
   * @param {string} playerVersion - player version
   * @param {string} partnerId - partner id
   * @param {string} ks - ks
   */
  function OVPDataLoaderManager(playerVersion, partnerId) {
    var ks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    _classCallCheck(this, OVPDataLoaderManager);

    var _this = _possibleConstructorReturn(this, (OVPDataLoaderManager.__proto__ || Object.getPrototypeOf(OVPDataLoaderManager)).call(this));

    _this._multiRequest = _ovpService2.default.getMultiRequest(playerVersion, ks, partnerId);
    return _this;
  }

  return OVPDataLoaderManager;
}(_dataLoaderManager2.default);

exports.default = OVPDataLoaderManager;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _baseEntryService = __webpack_require__(46);

var _baseEntryService2 = _interopRequireDefault(_baseEntryService);

var _metaDataService = __webpack_require__(47);

var _metaDataService2 = _interopRequireDefault(_metaDataService);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _kalturaPlaybackContext = __webpack_require__(45);

var _kalturaPlaybackContext2 = _interopRequireDefault(_kalturaPlaybackContext);

var _kalturaMetadataListResponse = __webpack_require__(26);

var _kalturaMetadataListResponse2 = _interopRequireDefault(_kalturaMetadataListResponse);

var _kalturaBaseEntryListResponse = __webpack_require__(43);

var _kalturaBaseEntryListResponse2 = _interopRequireDefault(_kalturaBaseEntryListResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OVPMediaEntryLoader = function () {
  _createClass(OVPMediaEntryLoader, null, [{
    key: 'id',
    get: function get() {
      return "media";
    }

    /**
     * @constructor
     * @param {Object} params loader params
     */

  }]);

  function OVPMediaEntryLoader(params) {
    _classCallCheck(this, OVPMediaEntryLoader);

    this._response = {};

    this.requests = this.buildRequests(params);
    this._entryId = params.entryId;
  }

  _createClass(OVPMediaEntryLoader, [{
    key: 'buildRequests',


    /**
     * Builds loader requests
     * @function
     * @param {Object} params Requests parameters
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function buildRequests(params) {
      var config = _config2.default.get();
      var requests = [];
      requests.push(_baseEntryService2.default.list(config.serviceUrl, params.ks, params.entryId));
      requests.push(_baseEntryService2.default.getPlaybackContext(config.serviceUrl, params.ks, params.entryId));
      requests.push(_metaDataService2.default.list(config.serviceUrl, params.ks, params.entryId));
      return requests;
    }

    /**
     * Loader validation function
     * @function
     * @returns {boolean} Is valid
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      return !!this._entryId;
    }
  }, {
    key: 'requests',
    set: function set(requests) {
      this._requests = requests;
    },
    get: function get() {
      return this._requests;
    }
  }, {
    key: 'response',
    set: function set(response) {
      var mediaEntryResponse = new _kalturaBaseEntryListResponse2.default(response[0].data);
      this._response.entry = mediaEntryResponse.entries[0];
      this._response.playBackContextResult = new _kalturaPlaybackContext2.default(response[1].data);
      this._response.metadataListResult = new _kalturaMetadataListResponse2.default(response[2].data);
    },
    get: function get() {
      return this._response;
    }
  }]);

  return OVPMediaEntryLoader;
}();

exports.default = OVPMediaEntryLoader;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sessionService = __webpack_require__(48);

var _sessionService2 = _interopRequireDefault(_sessionService);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OVPSessionLoader = function () {
  _createClass(OVPSessionLoader, [{
    key: 'requests',
    set: function set(requests) {
      this._requests = requests;
    },
    get: function get() {
      return this._requests;
    }
  }, {
    key: 'response',
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
    key: 'id',
    get: function get() {
      return "session";
    }
  }]);

  function OVPSessionLoader(params) {
    _classCallCheck(this, OVPSessionLoader);

    this._response = {};

    this.requests = this.buildRequests(params);
    this._partnerId = params.partnerId;
  }

  /**
   * Builds loader requests
   * @function
   * @param {Object} params Requests parameters
   * @returns {RequestBuilder} The request builder
   * @static
   */


  _createClass(OVPSessionLoader, [{
    key: 'buildRequests',
    value: function buildRequests(params) {
      var config = _config2.default.get();
      var requests = [];
      requests.push(_sessionService2.default.anonymousSession(config.serviceUrl, params.partnerId));
      return requests;
    }

    /**
     * Loader validation function
     * @function
     * @returns {boolean} Is valid
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      return !!this._partnerId;
    }
  }]);

  return OVPSessionLoader;
}();

exports.default = OVPSessionLoader;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlaySourceUrlBuilder = function () {
  function PlaySourceUrlBuilder() {
    _classCallCheck(this, PlaySourceUrlBuilder);
  }

  _createClass(PlaySourceUrlBuilder, null, [{
    key: "build",

    /**
     * Returns source url by given url params
     * @function build
     * @param {Object} urlParams The params
     * @returns {string} The URL
     * @static
     */
    value: function build(urlParams) {
      var config = _config2.default.get();
      var cdnUrl = config.cdnUrl;
      var partnerId = urlParams.partnerId;
      var entryId = urlParams.entryId;
      var ks = urlParams.ks;
      var uiConfId = urlParams.uiConfId;
      var format = urlParams.format;
      var protocol = urlParams.protocol;
      var extension = urlParams.extension;
      var flavorIds = urlParams.flavorIds;

      if (cdnUrl === "" && partnerId === "" && entryId === "" && extension === "" && format === "") {
        return "";
      }

      var playUrl = cdnUrl;
      if (!cdnUrl.endsWith("/")) {
        playUrl += "/";
      }
      playUrl += "p/" + partnerId + "/sp/" + partnerId + "00" + "/playManifest/entryId/" + entryId + "/protocol/" + protocol + "/format/" + format;

      if (flavorIds !== "") {
        playUrl += "/flavorIds/" + flavorIds;
      } else if (uiConfId !== "") {
        playUrl += "/uiConfId/" + uiConfId;
      }

      if (ks !== "") {
        playUrl += "/ks/" + ks;
      }

      playUrl += "/a." + extension;

      if (uiConfId && flavorIds !== "") {
        playUrl += "?uiConfId=" + uiConfId;
      }

      return playUrl;
    }
  }]);

  return PlaySourceUrlBuilder;
}();

exports.default = PlaySourceUrlBuilder;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kalturaFlavorAsset = __webpack_require__(24);

var _kalturaFlavorAsset2 = _interopRequireDefault(_kalturaFlavorAsset);

var _kalturaMetadataListResponse = __webpack_require__(26);

var _kalturaMetadataListResponse2 = _interopRequireDefault(_kalturaMetadataListResponse);

var _kalturaMediaEntry = __webpack_require__(25);

var _kalturaMediaEntry2 = _interopRequireDefault(_kalturaMediaEntry);

var _kalturaPlaybackSource = __webpack_require__(27);

var _kalturaPlaybackSource2 = _interopRequireDefault(_kalturaPlaybackSource);

var _kalturaDrmPlaybackPluginData = __webpack_require__(11);

var _kalturaDrmPlaybackPluginData2 = _interopRequireDefault(_kalturaDrmPlaybackPluginData);

var _playSourceUrlBuilder = __webpack_require__(41);

var _playSourceUrlBuilder2 = _interopRequireDefault(_playSourceUrlBuilder);

var _xmlParser = __webpack_require__(49);

var _xmlParser2 = _interopRequireDefault(_xmlParser);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _mediaEntry = __webpack_require__(3);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

var _drm = __webpack_require__(8);

var _drm2 = _interopRequireDefault(_drm);

var _mediaSource = __webpack_require__(5);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

var _mediaSources = __webpack_require__(6);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

var _mediaFormat = __webpack_require__(4);

var _baseProviderParser = __webpack_require__(16);

var _baseProviderParser2 = _interopRequireDefault(_baseProviderParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import KalturaPlaybackSource from './response-types/kaltura-playback-source'


var OVPProviderParser = function (_BaseProviderParser) {
  _inherits(OVPProviderParser, _BaseProviderParser);

  function OVPProviderParser() {
    _classCallCheck(this, OVPProviderParser);

    return _possibleConstructorReturn(this, (OVPProviderParser.__proto__ || Object.getPrototypeOf(OVPProviderParser)).apply(this, arguments));
  }

  _createClass(OVPProviderParser, null, [{
    key: 'getMediaEntry',


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
    value: function getMediaEntry(ks, partnerId, uiConfId, mediaEntryResponse) {
      var mediaEntry = new _mediaEntry2.default();
      var entry = mediaEntryResponse.entry;
      var playbackContext = mediaEntryResponse.playBackContextResult;
      var metadataList = mediaEntryResponse.metadataListResult;
      var kalturaSources = playbackContext.sources;

      mediaEntry.sources = OVPProviderParser._getParsedSources(kalturaSources, ks, partnerId, uiConfId, entry, playbackContext);
      mediaEntry.metadata = this._parseMetadata(metadataList);
      mediaEntry.metadata.description = entry.description;
      mediaEntry.metadata.poster = entry.poster;
      mediaEntry.id = entry.id;
      mediaEntry.name = entry.name;
      mediaEntry.duration = entry.duration;

      var type = _mediaEntry2.default.Type.UNKNOWN;
      switch (entry.entryType) {
        case _kalturaMediaEntry2.default.MediaType.IMAGE.value:
          type = _mediaEntry2.default.Type.IMAGE;
          break;
        case _kalturaMediaEntry2.default.MediaType.AUDIO.value:
          type = _mediaEntry2.default.Type.AUDIO;
          break;
        default:
          switch (entry.type) {
            case _kalturaMediaEntry2.default.EntryType.MEDIA_CLIP.value:
              type = _mediaEntry2.default.Type.VOD;
              break;
            case _kalturaMediaEntry2.default.EntryType.LIVE_STREAM.value:
            case _kalturaMediaEntry2.default.EntryType.LIVE_CHANNEL.value:
              type = _mediaEntry2.default.Type.LIVE;
              mediaEntry.dvrStatus = entry.dvrStatus;
              break;
            default:
              type = _mediaEntry2.default.Type.UNKNOWN;
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

  }, {
    key: '_getParsedSources',
    value: function _getParsedSources(kalturaSources, ks, partnerId, uiConfId, entry, playbackContext) {
      var sources = new _mediaSources2.default();
      var addAdaptiveSource = function addAdaptiveSource(source) {
        var parsedSource = OVPProviderParser._parseAdaptiveSource(source, playbackContext.flavorAssets, ks, partnerId, uiConfId, entry.id);
        var sourceFormat = _mediaFormat.SupportedStreamFormat.get(source.format);
        sources.map(parsedSource, sourceFormat);
      };
      var parseAdaptiveSources = function parseAdaptiveSources() {
        kalturaSources.filter(function (source) {
          return !OVPProviderParser._isProgressiveSource(source);
        }).forEach(addAdaptiveSource);
      };
      var parseProgressiveSources = function parseProgressiveSources() {
        var progressiveSource = kalturaSources.find(OVPProviderParser._isProgressiveSource);
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

  }, {
    key: '_parseAdaptiveSource',
    value: function _parseAdaptiveSource(kalturaSource, flavorAssets, ks, partnerId, uiConfId, entryId) {
      var mediaSource = new _mediaSource2.default();
      if (kalturaSource) {
        var playUrl = "";
        var mediaFormat = _mediaFormat.SupportedStreamFormat.get(kalturaSource.format);
        var extension = "";
        if (mediaFormat) {
          extension = mediaFormat.pathExt;
          mediaSource.mimetype = mediaFormat.mimeType;
        }
        // in case playbackSource doesn't have flavors we don't need to build the url and we'll use the provided one.
        if (kalturaSource.hasFlavorIds()) {
          if (!extension && flavorAssets && flavorAssets.length > 0) {
            extension = flavorAssets[0].fileExt;
          }
          playUrl = _playSourceUrlBuilder2.default.build({
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
          OVPProviderParser._logger.error('failed to create play url from source, discarding source: (' + entryId + '_' + kalturaSource.deliveryProfileId + '), ' + kalturaSource.format + '.');
          return mediaSource;
        }
        mediaSource.url = playUrl;
        mediaSource.id = entryId + "_" + kalturaSource.deliveryProfileId + "," + kalturaSource.format;
        if (kalturaSource.hasDrmData()) {
          var drmParams = [];
          kalturaSource.drm.forEach(function (drm) {
            drmParams.push(new _drm2.default(drm.licenseURL, _kalturaDrmPlaybackPluginData2.default.Scheme[drm.scheme], drm.certificate));
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

  }, {
    key: '_parseProgressiveSources',
    value: function _parseProgressiveSources(kalturaSource, flavorAssets, ks, partnerId, uiConfId, entryId) {
      var sources = [];
      if (kalturaSource) {
        var protocol = kalturaSource.getProtocol(this._getBaseProtocol());
        var format = kalturaSource.format;
        var sourceId = kalturaSource.deliveryProfileId + "," + kalturaSource.format;
        flavorAssets.map(function (flavor) {
          if (flavor.height && flavor.width) {
            var mediaSource = new _mediaSource2.default();
            mediaSource.id = flavor.id + sourceId;
            mediaSource.mimetype = 'video/mp4';
            mediaSource.height = flavor.height;
            mediaSource.width = flavor.width;
            mediaSource.bandwidth = flavor.bitrate * 1024;
            mediaSource.label = flavor.label || flavor.language;
            mediaSource.url = _playSourceUrlBuilder2.default.build({
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

  }, {
    key: '_parseMetadata',
    value: function _parseMetadata(metadataList) {
      var metadata = {};
      if (metadataList && metadataList.metas && metadataList.metas.length > 0) {
        metadataList.metas.forEach(function (meta) {
          var metaXml = void 0;
          var domParser = new DOMParser();
          meta.xml = meta.xml.replace(/\r?\n|\r/g, "");
          meta.xml = meta.xml.replace(/>\s*/g, '>');
          meta.xml = meta.xml.replace(/>\s*/g, '>');
          metaXml = domParser.parseFromString(meta.xml, 'text/xml');
          var metasObj = _xmlParser2.default.xmlToJson(metaXml);
          var metaKeys = Object.keys(metasObj.metadata);
          metaKeys.forEach(function (key) {
            metadata[key] = metasObj.metadata[key]["#text"];
          });
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

  }, {
    key: '_getBaseProtocol',
    value: function _getBaseProtocol() {
      var config = _config2.default.get();
      var protocolRegex = /^https?:/;
      var result = protocolRegex.exec(config.cdnUrl);
      var protocol = result ? result[0] : document.location.protocol;
      if (typeof protocol === "string") {
        return protocol.slice(0, -1); // remove ':' from the end
      }
      return "https";
    }
  }]);

  return OVPProviderParser;
}(_baseProviderParser2.default);

OVPProviderParser._logger = (0, _logger2.default)("OVPProviderParser");
exports.default = OVPProviderParser;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(2);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _kalturaMediaEntry = __webpack_require__(25);

var _kalturaMediaEntry2 = _interopRequireDefault(_kalturaMediaEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KalturaBaseEntryListResponse = function (_ServiceResult) {
  _inherits(KalturaBaseEntryListResponse, _ServiceResult);

  /**
   * @constructor
   * @param {Object} responseObj The json response
   */

  /**
   * @member - The total count
   * @type {number}
   */
  function KalturaBaseEntryListResponse(responseObj) {
    _classCallCheck(this, KalturaBaseEntryListResponse);

    var _this = _possibleConstructorReturn(this, (KalturaBaseEntryListResponse.__proto__ || Object.getPrototypeOf(KalturaBaseEntryListResponse)).call(this, responseObj));

    if (!_this.hasError) {
      _this.totalCount = responseObj.totalCount;
      if (_this.totalCount > 0) {
        _this.entries = [];
        responseObj.objects.map(function (entry) {
          return _this.entries.push(new _kalturaMediaEntry2.default(entry));
        });
      }
    }
    return _this;
  }
  /**
   * @member - The entries
   * @type {Array<KalturaMediaEntry>}
   */


  return KalturaBaseEntryListResponse;
}(_baseServiceResult2.default);

exports.default = KalturaBaseEntryListResponse;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KalturaMetadata =

/**
 * @constructor
 * @param {Object} data The response
 */
function KalturaMetadata(data) {
  _classCallCheck(this, KalturaMetadata);

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

KalturaMetadata.ObjectType = {
  AD_CUE_POINT: "adCuePointMetadata.AdCuePoint",
  ANNOTATION: "annotationMetadata.Annotation",
  CODE_CUE_POINT: "codeCuePointMetadata.CodeCuePoint",
  THUMB_CUE_POINT: "thumbCuePointMetadata.thumbCuePoint",
  ENTRY: 1,
  CATEGORY: 2,
  USER: 3,
  PARTNER: 4,
  DYNAMIC_OBJECT: 5
};
KalturaMetadata.Status = {
  VALID: 1,
  INVALID: 2,
  DELETED: 3
};
exports.default = KalturaMetadata;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(2);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _kalturaAccessControlMessage = __webpack_require__(18);

var _kalturaAccessControlMessage2 = _interopRequireDefault(_kalturaAccessControlMessage);

var _kalturaPlaybackSource = __webpack_require__(27);

var _kalturaPlaybackSource2 = _interopRequireDefault(_kalturaPlaybackSource);

var _kalturaRuleAction = __webpack_require__(19);

var _kalturaRuleAction2 = _interopRequireDefault(_kalturaRuleAction);

var _kalturaFlavorAsset = __webpack_require__(24);

var _kalturaFlavorAsset2 = _interopRequireDefault(_kalturaFlavorAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KalturaPlaybackContext = function (_ServiceResult) {
  _inherits(KalturaPlaybackContext, _ServiceResult);

  /**
   * @constructor
   * @param {Object} response The response
   */

  /**
   * @member - Array of actions as received from the rules that invalidated
   * @type {Array<KalturaAccessControlMessage>}
   */

  /**
   * @member - The playback sources
   * @type {Array<KalturaPlaybackSource>}
   */
  function KalturaPlaybackContext(response) {
    _classCallCheck(this, KalturaPlaybackContext);

    var _this = _possibleConstructorReturn(this, (KalturaPlaybackContext.__proto__ || Object.getPrototypeOf(KalturaPlaybackContext)).call(this, response));

    _this.sources = [];
    _this.actions = [];
    _this.messages = [];
    _this.flavorAssets = [];

    if (!_this.hasError) {
      var messages = response.messages;
      if (messages) {
        messages.map(function (message) {
          return _this.messages.push(new _kalturaAccessControlMessage2.default(message));
        });
      }
      var actions = response.actions;
      if (actions) {
        actions.map(function (action) {
          return _this.actions.push(new _kalturaRuleAction2.default(action));
        });
      }
      var sources = response.sources;
      if (sources) {
        sources.map(function (source) {
          return _this.sources.push(new _kalturaPlaybackSource2.default(source));
        });
      }
      var flavorAssets = response.flavorAssets;
      if (flavorAssets) {
        flavorAssets.map(function (flavor) {
          return _this.flavorAssets.push(new _kalturaFlavorAsset2.default(flavor));
        });
      }
    }
    return _this;
  }
  /**
   * @member - The flavor assets
   * @type {Array<KalturaFlavorAsset>}
   */

  /**
   * @member - Array of actions as received from the rules that invalidated
   * @type {Array<KalturaRuleAction>}
   */


  return KalturaPlaybackContext;
}(_baseServiceResult2.default);

exports.default = KalturaPlaybackContext;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(15);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "baseEntry";

var OVPBaseEntryService = function (_OVPService) {
  _inherits(OVPBaseEntryService, _OVPService);

  function OVPBaseEntryService() {
    _classCallCheck(this, OVPBaseEntryService);

    return _possibleConstructorReturn(this, (OVPBaseEntryService.__proto__ || Object.getPrototypeOf(OVPBaseEntryService)).apply(this, arguments));
  }

  _createClass(OVPBaseEntryService, null, [{
    key: 'getPlaybackContext',

    /**
     * Creates an instance of RequestBuilder for baseentry.getPlaybackContext
     * @function getPlaybackContext
     * @param {string} serviceUrl The service base URL
     * @param {string} ks The ks
     * @param {string} entryId The entry ID
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function getPlaybackContext(serviceUrl, ks, entryId) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "getPlaybackContext";
      request.method = "POST";
      request.url = request.getUrl(serviceUrl);
      request.tag = "baseEntry-getPlaybackContext";
      var contextDataParams = { objectType: "KalturaContextDataParams", flavorTags: "all" };
      request.params = { entryId: entryId, ks: ks, contextDataParams: contextDataParams };
      return request;
    }

    /**
     * Creates an instance of RequestBuilder for baseentry.list
     * @function list
     * @param {string} serviceUrl The base URL
     * @param {string} ks The ks
     * @param {string} entryId The entry ID
     * @returns {RequestBuilder} The request builder
     * @static
     */

  }, {
    key: 'list',
    value: function list(serviceUrl, ks, entryId) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "list";
      request.method = "POST";
      request.url = request.getUrl(serviceUrl);
      request.tag = "list";
      request.params = OVPBaseEntryService.getEntryListReqParams(entryId, ks);
      return request;
    }

    /**
     * Gets  baseentry.list service params
     * @function getEntryListReqParams
     * @param {string} entryId The entry ID
     * @param {string} ks The ks
     * @returns {{ks: string, filter: {redirectFromEntryId: string}, responseProfile: {fields: string, type: number}}} The service params object
     * @static
     */

  }, {
    key: 'getEntryListReqParams',
    value: function getEntryListReqParams(entryId, ks) {
      var filterParams = { redirectFromEntryId: entryId };
      var responseProfileParams = {
        fields: "id,name,description,thumbnailUrl,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags,dvrStatus",
        type: 1
      };
      return { ks: ks, filter: filterParams, responseProfile: responseProfileParams };
    }
  }]);

  return OVPBaseEntryService;
}(_ovpService2.default);

exports.default = OVPBaseEntryService;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(15);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "metadata_metadata";

var OVPMetadataService = function (_OVPService) {
  _inherits(OVPMetadataService, _OVPService);

  function OVPMetadataService() {
    _classCallCheck(this, OVPMetadataService);

    return _possibleConstructorReturn(this, (OVPMetadataService.__proto__ || Object.getPrototypeOf(OVPMetadataService)).apply(this, arguments));
  }

  _createClass(OVPMetadataService, null, [{
    key: 'list',

    /**
     * Creates an instance of RequestBuilder for metadata_metadata.list
     * @function getPlaybackContext
     * @param {string} serviceUrl The service base URL
     * @param {string} ks The ks
     * @param {string} entryId The entry ID
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function list(serviceUrl, ks, entryId) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "list";
      request.method = "POST";
      request.url = request.getUrl(serviceUrl);
      request.tag = "metadata_metadata-list";
      var filter = { objectType: "KalturaMetadataFilter", objectIdEqual: entryId, metadataObjectTypeEqual: "1" };
      request.params = { filter: filter, ks: ks };
      return request;
    }
  }]);

  return OVPMetadataService;
}(_ovpService2.default);

exports.default = OVPMetadataService;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(15);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "session";

var OVPSessionService = function (_OVPService) {
  _inherits(OVPSessionService, _OVPService);

  function OVPSessionService() {
    _classCallCheck(this, OVPSessionService);

    return _possibleConstructorReturn(this, (OVPSessionService.__proto__ || Object.getPrototypeOf(OVPSessionService)).apply(this, arguments));
  }

  _createClass(OVPSessionService, null, [{
    key: 'anonymousSession',

    /**
     * Creates an instance of RequestBuilder for session.startWidgetSession
     * @function anonymousSession
     * @param {string} serviceUrl The service base URL
     * @param {string} partnerId The partner ID
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function anonymousSession(serviceUrl, partnerId) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "startWidgetSession";
      request.method = "POST";
      request.url = request.getUrl(serviceUrl);
      request.tag = "session-startWidget";
      request.params = { widgetId: "_" + partnerId };
      return request;
    }
  }]);

  return OVPSessionService;
}(_ovpService2.default);

exports.default = OVPSessionService;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XmlParser = function () {
  function XmlParser() {
    _classCallCheck(this, XmlParser);
  }

  _createClass(XmlParser, null, [{
    key: "xmlToJson",

    /**
     * Parses xml string to json object
     * @param {string} xml The xml to parse
     * @returns {{}} The parsed xml as Json object
     * @static
     */
    value: function xmlToJson(xml) {
      var obj = {};
      if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
          for (var j = 0; j < xml.attributes.length; j++) {
            var attribute = xml.attributes.item(j);
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType === 3) {
        obj = xml.nodeValue;
      }
      if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
          var item = xml.childNodes.item(i);
          var nodeName = item.nodeName;
          if (typeof obj[nodeName] === "undefined") {
            obj[nodeName] = this.xmlToJson(item);
          } else {
            if (typeof obj[nodeName].push === "undefined") {
              var old = obj[nodeName];
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(this.xmlToJson(item));
          }
        }
      }
      return obj;
    }
  }]);

  return XmlParser;
}();

exports.default = XmlParser;

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit-ovp-provider.js.map