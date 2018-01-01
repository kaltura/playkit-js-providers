(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ott"] = factory();
	else
		root["playkit"] = root["playkit"] || {}, root["playkit"]["providers"] = root["playkit"]["providers"] || {}, root["playkit"]["providers"]["ott"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaSource = __webpack_require__(7);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

var _mediaFormat = __webpack_require__(6);

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
     * @returns {MediaSourcesObject} - The json class object.
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogLevel = exports.getLogLevel = exports.LogLevel = undefined;

var _jsLogger = __webpack_require__(24);

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
 * @returns {Object} - the log level
 */
function getLogLevel(name) {
  return getLogger(name).getLevel();
}

/**
 * sets the logger level
 * @param {Object} level - the log level
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaSources = __webpack_require__(1);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProviderMediaConfig = function () {
  _createClass(ProviderMediaConfig, [{
    key: 'id',
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }
  }, {
    key: 'session',
    get: function get() {
      return this._session;
    }
  }, {
    key: 'sources',
    get: function get() {
      return this._sources;
    },
    set: function set(value) {
      this._sources = value;
    }
  }, {
    key: 'duration',
    get: function get() {
      return this._duration;
    },
    set: function set(value) {
      this._duration = value;
    }
  }, {
    key: 'type',
    get: function get() {
      return this._type;
    },
    set: function set(value) {
      this._type = value;
    }
  }, {
    key: 'dvr',
    get: function get() {
      return this._dvr;
    },
    set: function set(value) {
      this._dvr = value;
    }
  }, {
    key: 'metadata',
    get: function get() {
      return this._metadata;
    },
    set: function set(value) {
      this._metadata = value;
    }
  }]);

  function ProviderMediaConfig(partnerId, uiConfId) {
    _classCallCheck(this, ProviderMediaConfig);

    this.id = '';
    this.name = '';
    this._session = new SessionConfig(partnerId, uiConfId);
    this.sources = new _mediaSources2.default();
    this.duration = 0;
    this.type = 'Unknown';
    this.dvr = false;
    this.metadata = {};
  }

  _createClass(ProviderMediaConfig, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        id: this.id,
        name: this.name,
        session: this.session.toJSON(),
        sources: this.sources.toJSON(),
        duration: this.duration,
        type: this.type,
        dvr: this.dvr,
        metadata: this.metadata
      };
    }
  }]);

  return ProviderMediaConfig;
}();

exports.default = ProviderMediaConfig;

var SessionConfig = function () {
  _createClass(SessionConfig, [{
    key: 'ks',
    get: function get() {
      return this._ks;
    },
    set: function set(value) {
      this._ks = value;
    }
  }, {
    key: 'partnerId',
    get: function get() {
      return this._partnerId;
    }
  }, {
    key: 'uiConfId',
    get: function get() {
      return this._uiConfId;
    }
  }]);

  function SessionConfig(partnerId, uiConfId) {
    _classCallCheck(this, SessionConfig);

    this._partnerId = partnerId;
    this._uiConfId = uiConfId;
  }

  _createClass(SessionConfig, [{
    key: 'toJSON',
    value: function toJSON() {
      var response = {
        partnerId: this.partnerId
      };
      if (this.uiConfId) response.uiConfId = this.uiConfId;
      if (this.ks) response.ks = this.ks;
      return response;
    }
  }]);

  return SessionConfig;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _providerEnvConfig = __webpack_require__(15);

var _providerEnvConfig2 = _interopRequireDefault(_providerEnvConfig);

var _logger = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProviderOptions = function () {
  _createClass(ProviderOptions, [{
    key: 'partnerId',
    get: function get() {
      return this._partnerId;
    }
  }, {
    key: 'logLevel',
    get: function get() {
      return this._logLevel;
    },
    set: function set(value) {
      if (typeof value === 'string' && _logger.LogLevel[value]) {
        this._logLevel = value;
      }
    }
  }, {
    key: 'ks',
    get: function get() {
      return this._ks;
    },
    set: function set(value) {
      if (typeof value !== 'string') return;
      this._ks = value;
    }
  }, {
    key: 'uiConfId',
    get: function get() {
      return this._uiConfId;
    }
  }, {
    key: 'env',
    get: function get() {
      return this._env;
    },
    set: function set(value) {
      if (value instanceof _providerEnvConfig2.default) {
        this._env = value;
      } else {
        this._env = new _providerEnvConfig2.default(value);
      }
    }
  }]);

  function ProviderOptions(partnerId, uiConfId) {
    _classCallCheck(this, ProviderOptions);

    this._logLevel = 'ERROR';
    this._ks = '';

    validate(partnerId);
    if (typeof partnerId === 'number') {
      this._partnerId = partnerId;
      if (typeof uiConfId === 'number') {
        this._uiConfId = uiConfId;
      }
    } else if ((typeof partnerId === 'undefined' ? 'undefined' : _typeof(partnerId)) === 'object') {
      this.fromJSON(partnerId);
    }
  }

  _createClass(ProviderOptions, [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      this._partnerId = json.partnerId;
      this.ks = json.ks || this._ks;
      this.logLevel = json.logLevel || this._logLevel;
      if (typeof json.uiConfId === 'number') {
        this._uiConfId = json.uiConfId;
      }
      if (json.env) {
        this.env = new _providerEnvConfig2.default(json.env.serviceUrl, json.env.cdnUrl);
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var response = {
        partnerId: this.partnerId,
        logLevel: this.logLevel,
        ks: this.ks
      };
      if (this.uiConfId) response.uiConfId = this.uiConfId;
      if (this.env) response.env = this.env.toJSON();
      return response;
    }
  }]);

  return ProviderOptions;
}();

/**
 * Validate user input
 * @param {number | ProviderOptionsObject} param - user input
 * @returns {void}
 */


exports.default = ProviderOptions;
function validate(param) {
  if (typeof param === 'number') return;
  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object' && typeof param.partnerId === 'number') return;
  throw new TypeError('Invalid ProviderOptions: partnerId must be provided and be a number');
}

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drm = __webpack_require__(9);

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
     * @returns {MediaSourceObject} - The json class object.
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
/* 8 */,
/* 9 */
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
   * @returns {DrmObject} - The json class object.
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaSources = __webpack_require__(1);

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
   * @returns {MediaEntryObject} - The json class object.
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiRequestBuilder = __webpack_require__(12);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiRequestResult = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

var _baseServiceResult = __webpack_require__(5);

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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProviderMediaInfo = function () {
  _createClass(ProviderMediaInfo, [{
    key: "ks",
    get: function get() {
      return this._ks;
    },
    set: function set(value) {
      this._ks = value;
    }
  }, {
    key: "entryId",
    get: function get() {
      return this._entryId;
    }
  }]);

  function ProviderMediaInfo(entryId) {
    _classCallCheck(this, ProviderMediaInfo);

    this._entryId = entryId;
  }

  _createClass(ProviderMediaInfo, [{
    key: "toJSON",
    value: function toJSON() {
      var response = {
        entryId: this.entryId
      };
      if (this.ks) response.ks = this.ks;
      return response;
    }
  }]);

  return ProviderMediaInfo;
}();

exports.default = ProviderMediaInfo;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProviderEnvConfig = function () {
  _createClass(ProviderEnvConfig, [{
    key: 'serviceUrl',
    get: function get() {
      return this._serviceUrl;
    }
  }, {
    key: 'cdnUrl',
    get: function get() {
      return this._cdnUrl;
    },
    set: function set(value) {
      if (typeof value !== 'string') return;
      this._cdnUrl = value;
    }
  }]);

  function ProviderEnvConfig(serviceUrl, cdnUrl) {
    _classCallCheck(this, ProviderEnvConfig);

    validate(serviceUrl);
    if (typeof serviceUrl === 'string') {
      this._serviceUrl = serviceUrl;
      if (cdnUrl) {
        this.cdnUrl = cdnUrl;
      }
    } else if ((typeof serviceUrl === 'undefined' ? 'undefined' : _typeof(serviceUrl)) === 'object') {
      this.fromJSON(serviceUrl);
    }
  }

  _createClass(ProviderEnvConfig, [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      this._serviceUrl = json.serviceUrl;
      if (json.cdnUrl) {
        this.cdnUrl = json.cdnUrl;
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var response = {
        serviceUrl: this.serviceUrl
      };
      if (this.cdnUrl) response.cdnUrl = this.cdnUrl;
      return response;
    }
  }]);

  return ProviderEnvConfig;
}();

/**
 * Validate user input
 * @param {string | ProviderEnvConfigObject} param - user input
 * @returns {void}
 */


exports.default = ProviderEnvConfig;
function validate(param) {
  if (typeof param === 'string') return;
  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object' && typeof param.serviceUrl === 'string') return;
  throw new TypeError('Invalid ProviderEnnConfig: serviceUrl must be provided and be a string');
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OTTConfiguration = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  serviceUrl: "//api-preprod.ott.kaltura.com/v4_6/api_v3",
  cdnUrl: "//api-preprod.ott.kaltura.com/v4_7",
  serviceParams: {
    apiVersion: '4.7.1'
  }
};

var OTTConfiguration = function () {
  function OTTConfiguration() {
    _classCallCheck(this, OTTConfiguration);
  }

  _createClass(OTTConfiguration, null, [{
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

  return OTTConfiguration;
}();

exports.default = OTTConfiguration;
exports.OTTConfiguration = OTTConfiguration;

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaFormat = __webpack_require__(6);

var _mediaEntry = __webpack_require__(10);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

var _mediaSources = __webpack_require__(1);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

var _mediaSource = __webpack_require__(7);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(2);

var _dataLoaderManager = __webpack_require__(11);

var _dataLoaderManager2 = _interopRequireDefault(_dataLoaderManager);

var _providerOptions = __webpack_require__(4);

var _providerOptions2 = _interopRequireDefault(_providerOptions);

var _providerMediaConfig = __webpack_require__(3);

var _providerMediaConfig2 = _interopRequireDefault(_providerMediaConfig);

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
    this.ks = options.ks;
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiRequestBuilder = __webpack_require__(12);

var _multiRequestBuilder2 = _interopRequireDefault(_multiRequestBuilder);

var _config = __webpack_require__(16);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();
var SERVICE_NAME = "multirequest";

var OTTService = function () {
  function OTTService() {
    _classCallCheck(this, OTTService);
  }

  _createClass(OTTService, null, [{
    key: 'getMultiRequest',

    /**
     * Gets a new instance of MultiRequestBuilder with ott params
     * @function getMultiRequest
     * @param {string} ks The ks
     * @param {string} partnerId The partner ID
     * @returns {MultiRequestBuilder} The multi request builder
     * @static
     */
    value: function getMultiRequest(ks, partnerId) {
      var ottParams = config.serviceParams;
      if (ks) {
        Object.assign(ottParams, { ks: ks });
      }
      if (partnerId) {
        Object.assign(ottParams, { partnerId: partnerId });
      }
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var multiReq = new _multiRequestBuilder2.default(headers);
      multiReq.method = "POST";
      multiReq.service = SERVICE_NAME;
      multiReq.url = multiReq.getUrl(config.serviceUrl);
      multiReq.params = ottParams;
      return multiReq;
    }
  }]);

  return OTTService;
}();

exports.default = OTTService;

/***/ }),
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _providerMediaInfo = __webpack_require__(14);

var _providerMediaInfo2 = _interopRequireDefault(_providerMediaInfo);

var _kalturaAsset = __webpack_require__(26);

var _kalturaAsset2 = _interopRequireDefault(_kalturaAsset);

var _kalturaPlaybackContext = __webpack_require__(27);

var _kalturaPlaybackContext2 = _interopRequireDefault(_kalturaPlaybackContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OTTProviderMediaInfo = function (_ProviderMediaInfo) {
  _inherits(OTTProviderMediaInfo, _ProviderMediaInfo);

  _createClass(OTTProviderMediaInfo, [{
    key: 'protocol',
    get: function get() {
      return this._protocol;
    },
    set: function set(value) {
      this._protocol = value;
    }
  }, {
    key: 'fileIds',
    get: function get() {
      return this._fileIds;
    },
    set: function set(value) {
      this._fileIds = value;
    }
  }, {
    key: 'mediaType',
    get: function get() {
      return this._mediaType;
    },
    set: function set(value) {
      this._mediaType = value;
    }
  }, {
    key: 'contextType',
    get: function get() {
      return this._contextType;
    },
    set: function set(value) {
      this._contextType = value;
    }
  }]);

  function OTTProviderMediaInfo(assetId, mediaType, contextType) {
    _classCallCheck(this, OTTProviderMediaInfo);

    var _this = _possibleConstructorReturn(this, (OTTProviderMediaInfo.__proto__ || Object.getPrototypeOf(OTTProviderMediaInfo)).call(this, assetId));

    _this._mediaType = mediaType || _kalturaAsset2.default.Type.MEDIA;
    _this._contextType = contextType || _kalturaPlaybackContext2.default.Type.PLAYBACK;
    return _this;
  }

  _createClass(OTTProviderMediaInfo, [{
    key: 'toJSON',
    value: function toJSON() {
      var response = {
        entryId: this.entryId,
        mediaType: this.mediaType,
        contextType: this.contextType
      };
      if (this.protocol) response.protocol = this.protocol;
      if (this.fileIds) response.fileIds = this.fileIds;
      if (this.ks) response.ks = this.ks;
      return response;
    }
  }]);

  return OTTProviderMediaInfo;
}(_providerMediaInfo2.default);

exports.default = OTTProviderMediaInfo;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseServiceResult = __webpack_require__(5);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KalturaAsset = function (_ServiceResult) {
  _inherits(KalturaAsset, _ServiceResult);

  /**
   * @constructor
   * @param {Object} response The response
   */

  /**
   * @member - The asset metas
   * @type {Array<Object>}
   */

  /**
   * @member - The asset name description
   * @type {string}
   */
  function KalturaAsset(response) {
    _classCallCheck(this, KalturaAsset);

    var _this = _possibleConstructorReturn(this, (KalturaAsset.__proto__ || Object.getPrototypeOf(KalturaAsset)).call(this, response));

    _this.name = "";
    _this.description = "";
    _this.tags = [];
    _this.metas = [];
    _this.pictures = [];

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
  /**
   * @member - The asset images
   * @type {Array<any>}
   */

  /**
   * @member - The asset tags
   * @type {Array<Object>}
   */

  /**
   * @member - The asset name
   * @type {string}
   */

  /**
   * @member - The asset id
   * @type {number}
   */


  _createClass(KalturaAsset, [{
    key: "_formatTagsMetas",
    value: function _formatTagsMetas(objectToParse) {
      var parsed = [];
      Object.keys(objectToParse).forEach(function (key) {
        if (objectToParse[key].objects) {
          var value = "";
          objectToParse[key].objects.forEach(function (object) {
            value += object.value + "|";
          });
          parsed.push({ key: key, value: value });
        } else {
          parsed.push({ key: key, value: objectToParse[key].value });
        }
      });
      return parsed;
    }
  }]);

  return KalturaAsset;
}(_baseServiceResult2.default);

KalturaAsset.Type = {
  MEDIA: "media",
  RECORDING: "recording",
  EPG: "epg"
};
exports.default = KalturaAsset;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(5);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _kalturaAccessControlMessage = __webpack_require__(20);

var _kalturaAccessControlMessage2 = _interopRequireDefault(_kalturaAccessControlMessage);

var _kalturaRuleAction = __webpack_require__(21);

var _kalturaRuleAction2 = _interopRequireDefault(_kalturaRuleAction);

var _kalturaPlaybackSource = __webpack_require__(28);

var _kalturaPlaybackSource2 = _interopRequireDefault(_kalturaPlaybackSource);

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
   * @type {Array<KalturaRuleAction>}
   */
  function KalturaPlaybackContext(response) {
    _classCallCheck(this, KalturaPlaybackContext);

    var _this = _possibleConstructorReturn(this, (KalturaPlaybackContext.__proto__ || Object.getPrototypeOf(KalturaPlaybackContext)).call(this, response));

    _this.sources = [];
    _this.actions = [];
    _this.messages = [];

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
    }
    return _this;
  }
  /**
   * @member - Array of actions as received from the rules that invalidated
   * @type {Array<KalturaAccessControlMessage>}
   */

  /**
   * @member - The playback sources
   * @type {Array<KalturaPlaybackSource>}
   */


  return KalturaPlaybackContext;
}(_baseServiceResult2.default);

KalturaPlaybackContext.Type = {
  TRAILER: "TRAILER",
  CATCHUP: "CATCHUP",
  START_OVER: "START_OVER",
  PLAYBACK: "PLAYBACK"
};
exports.default = KalturaPlaybackContext;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kalturaDrmPlaybackPluginData = __webpack_require__(13);

var _kalturaDrmPlaybackPluginData2 = _interopRequireDefault(_kalturaDrmPlaybackPluginData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KalturaPlaybackSource = function () {

  /**
   * @constructor
   * @param {Object} source The response
   */
  function KalturaPlaybackSource(source) {
    var _this = this;

    _classCallCheck(this, KalturaPlaybackSource);

    this.drm = [];

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
        return _this.drm.push(new _kalturaDrmPlaybackPluginData2.default(drm));
      });
    }
  }

  /**
   * Checks if source has DRM data
   * @function hasDrmData
   * @returns {boolean} Is source has DRM
   */


  _createClass(KalturaPlaybackSource, [{
    key: "hasDrmData",
    value: function hasDrmData() {
      return this.drm && this.drm.length > 0;
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
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseProvider = __webpack_require__(19);

var _baseProvider2 = _interopRequireDefault(_baseProvider);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

var _config = __webpack_require__(16);

var _config2 = _interopRequireDefault(_config);

var _providerMediaInfo = __webpack_require__(25);

var _providerMediaInfo2 = _interopRequireDefault(_providerMediaInfo);

var _dataLoaderManager = __webpack_require__(37);

var _dataLoaderManager2 = _interopRequireDefault(_dataLoaderManager);

var _sessionLoader = __webpack_require__(38);

var _sessionLoader2 = _interopRequireDefault(_sessionLoader);

var _assetLoader = __webpack_require__(36);

var _assetLoader2 = _interopRequireDefault(_assetLoader);

var _providerParser = __webpack_require__(39);

var _providerParser2 = _interopRequireDefault(_providerParser);

var _providerOptions = __webpack_require__(4);

var _providerOptions2 = _interopRequireDefault(_providerOptions);

var _providerMediaConfig = __webpack_require__(3);

var _providerMediaConfig2 = _interopRequireDefault(_providerMediaConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OTTProvider = function (_BaseProvider) {
  _inherits(OTTProvider, _BaseProvider);

  /**
   * @constructor
   * @param {ProviderOptions} options - provider options
   * @param {string} playerVersion - player version
   */
  function OTTProvider(options, playerVersion) {
    _classCallCheck(this, OTTProvider);

    var _this = _possibleConstructorReturn(this, (OTTProvider.__proto__ || Object.getPrototypeOf(OTTProvider)).call(this, options, playerVersion));

    _this._logger = (0, _logger2.default)("OTTProvider");
    var _options = options.toJSON();
    _config2.default.set(_options.env);
    return _this;
  }

  /**
   * Gets the backend media config.
   * @param {OTTProviderMediaInfo} mediaInfo - ott media info
   * @returns {Promise<ProviderMediaConfig>} - The provider media config
   */


  _createClass(OTTProvider, [{
    key: 'getMediaConfig',
    value: function getMediaConfig(mediaInfo) {
      var _this2 = this;

      var _mediaInfo = mediaInfo.toJSON();
      if (_mediaInfo.ks) {
        this.ks = _mediaInfo.ks;
      }
      this._dataLoader = new _dataLoaderManager2.default(this.partnerId, this.ks);
      return new Promise(function (resolve, reject) {
        var entryId = _mediaInfo.entryId;
        if (entryId) {
          var ks = _this2.ks;
          if (!ks) {
            ks = "{1:result:ks}";
            _this2._dataLoader.add(_sessionLoader2.default, { partnerId: _this2.partnerId });
          }
          var playbackContext = {
            mediaProtocol: _mediaInfo.protocol,
            assetFileIds: _mediaInfo.fileIds,
            context: _mediaInfo.contextType
          };
          _this2._dataLoader.add(_assetLoader2.default, {
            entryId: entryId,
            ks: ks,
            type: _mediaInfo.mediaType,
            playbackContext: playbackContext
          });
          _this2._dataLoader.fetchData().then(function (response) {
            try {
              resolve(_this2._parseDataFromResponse(response));
            } catch (err) {
              reject({ success: false, data: err });
            }
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
      var mediaConfig = new _providerMediaConfig2.default(this.partnerId, this.uiConfId);
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
        if (data.has(_assetLoader2.default.id)) {
          var assetLoader = data.get(_assetLoader2.default.id);
          if (assetLoader && assetLoader.response) {
            var blockedAction = _providerParser2.default.hasBlockActions(assetLoader.response);
            if (blockedAction) {
              var errorMessage = _providerParser2.default.hasErrorMessage(assetLoader.response);
              if (errorMessage) {
                this._logger.error('Asset is blocked, error message: ', errorMessage);
                throw errorMessage;
              } else {
                this._logger.error('Asset is blocked, action: ', blockedAction);
                throw blockedAction;
              }
            }
            var mediaEntry = _providerParser2.default.getMediaEntry(assetLoader.response);
            mediaConfig.sources = mediaEntry.sources;
            mediaConfig.id = mediaEntry.id;
            mediaConfig.name = mediaEntry.name;
            mediaConfig.duration = mediaEntry.duration;
            mediaConfig.metadata = mediaEntry.metadata;
          }
        }
      }
      this._logger.debug("Data parsing finished", mediaConfig);
      return mediaConfig;
    }
  }]);

  return OTTProvider;
}(_baseProvider2.default);

exports.default = OTTProvider;

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = exports.NAME = exports.Provider = exports.ProviderMediaInfo = exports.ProviderMediaConfig = exports.ProviderEnvConfig = exports.ProviderOptions = undefined;

var _providerOptions = __webpack_require__(4);

var _providerOptions2 = _interopRequireDefault(_providerOptions);

var _providerMediaConfig = __webpack_require__(3);

var _providerMediaConfig2 = _interopRequireDefault(_providerMediaConfig);

var _providerMediaInfo = __webpack_require__(25);

var _providerMediaInfo2 = _interopRequireDefault(_providerMediaInfo);

var _provider = __webpack_require__(33);

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = "playkit-js-providers" + '-ott';

var VERSION = "1.5.0";

exports.ProviderOptions = _providerOptions2.default;
exports.ProviderEnvConfig = _providerMediaConfig2.default;
exports.ProviderMediaConfig = _providerMediaConfig2.default;
exports.ProviderMediaInfo = _providerMediaInfo2.default;
exports.Provider = _provider2.default;
exports.NAME = NAME;
exports.VERSION = VERSION;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assetService = __webpack_require__(40);

var _assetService2 = _interopRequireDefault(_assetService);

var _config = __webpack_require__(16);

var _config2 = _interopRequireDefault(_config);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _kalturaPlaybackContext = __webpack_require__(27);

var _kalturaPlaybackContext2 = _interopRequireDefault(_kalturaPlaybackContext);

var _kalturaAsset = __webpack_require__(26);

var _kalturaAsset2 = _interopRequireDefault(_kalturaAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();

var OTTAssetLoader = function () {
  _createClass(OTTAssetLoader, null, [{
    key: 'id',
    get: function get() {
      return "asset";
    }

    /**
     * @constructor
     * @param {Object} params loader params
     */

  }]);

  function OTTAssetLoader(params) {
    _classCallCheck(this, OTTAssetLoader);

    this._response = {};

    this.requests = this.buildRequests(params);
    this._entryId = params.entryId;
  }

  _createClass(OTTAssetLoader, [{
    key: 'buildRequests',


    /**
     * Builds loader requests
     * @function
     * @param {Object} params Requests parameters
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function buildRequests(params) {
      var requests = [];
      requests.push(_assetService2.default.get(config.serviceUrl, params.ks, params.entryId));
      requests.push(_assetService2.default.getPlaybackContext(config.serviceUrl, params.ks, params.entryId, params.type, params.playbackContext));
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
      this._response.mediaDataResult = new _kalturaAsset2.default(response[0].data);
      this._response.playBackContextResult = new _kalturaPlaybackContext2.default(response[1].data);
    },
    get: function get() {
      return this._response;
    }
  }]);

  return OTTAssetLoader;
}();

exports.default = OTTAssetLoader;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataLoaderManager = __webpack_require__(11);

var _dataLoaderManager2 = _interopRequireDefault(_dataLoaderManager);

var _ottService = __webpack_require__(22);

var _ottService2 = _interopRequireDefault(_ottService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OTTDataLoaderManager = function (_DataLoaderManager) {
  _inherits(OTTDataLoaderManager, _DataLoaderManager);

  /**
   * @constructor
   * @param {string} partnerId - partner id
   * @param {string} ks - ks
   */
  function OTTDataLoaderManager(partnerId) {
    var ks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, OTTDataLoaderManager);

    var _this = _possibleConstructorReturn(this, (OTTDataLoaderManager.__proto__ || Object.getPrototypeOf(OTTDataLoaderManager)).call(this));

    _this._multiRequest = _ottService2.default.getMultiRequest(ks, partnerId);
    return _this;
  }

  return OTTDataLoaderManager;
}(_dataLoaderManager2.default);

exports.default = OTTDataLoaderManager;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userService = __webpack_require__(41);

var _userService2 = _interopRequireDefault(_userService);

var _config = __webpack_require__(16);

var _config2 = _interopRequireDefault(_config);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();

var OTTSessionLoader = function () {
  _createClass(OTTSessionLoader, null, [{
    key: 'id',
    get: function get() {
      return "session";
    }

    /**
     * @constructor
     * @param {Object} params loader params
     */

  }]);

  function OTTSessionLoader(params) {
    _classCallCheck(this, OTTSessionLoader);

    this._response = {};

    this.requests = this.buildRequests(params);
    this._partnerId = params.partnerId;
  }

  _createClass(OTTSessionLoader, [{
    key: 'buildRequests',


    /**
     * Builds loader requests
     * @function
     * @param {Object} params Requests parameters
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function buildRequests(params) {
      var requests = [];
      requests.push(_userService2.default.anonymousLogin(config.serviceUrl, params.partnerId, params.udid));
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
      this._response.ks = response[0].data.ks;
    },
    get: function get() {
      return this._response.ks;
    }
  }]);

  return OTTSessionLoader;
}();

exports.default = OTTSessionLoader;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kalturaPlaybackSource = __webpack_require__(28);

var _kalturaPlaybackSource2 = _interopRequireDefault(_kalturaPlaybackSource);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

var _mediaEntry = __webpack_require__(10);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

var _drm = __webpack_require__(9);

var _drm2 = _interopRequireDefault(_drm);

var _mediaSource = __webpack_require__(7);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

var _mediaSources = __webpack_require__(1);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

var _mediaFormat = __webpack_require__(6);

var _kalturaDrmPlaybackPluginData = __webpack_require__(13);

var _kalturaDrmPlaybackPluginData2 = _interopRequireDefault(_kalturaDrmPlaybackPluginData);

var _baseProviderParser = __webpack_require__(18);

var _baseProviderParser2 = _interopRequireDefault(_baseProviderParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OTTProviderParser = function (_BaseProviderParser) {
  _inherits(OTTProviderParser, _BaseProviderParser);

  function OTTProviderParser() {
    _classCallCheck(this, OTTProviderParser);

    return _possibleConstructorReturn(this, (OTTProviderParser.__proto__ || Object.getPrototypeOf(OTTProviderParser)).apply(this, arguments));
  }

  _createClass(OTTProviderParser, null, [{
    key: 'getMediaEntry',


    /**
     * Returns parsed media entry by given OTT response objects
     * @function getMediaEntry
     * @param {any} assetResponse - The asset response
     * @returns {MediaEntry} - The media entry
     * @static
     * @public
     */
    value: function getMediaEntry(assetResponse) {
      var mediaEntry = new _mediaEntry2.default();
      var playbackContext = assetResponse.playBackContextResult;
      var metadata = assetResponse.mediaDataResult;
      var kalturaSources = playbackContext.sources;
      mediaEntry.name = metadata.name;
      mediaEntry.id = metadata.id;
      var metaData = { description: metadata.description };
      Object.assign(metaData, metadata.metas);
      Object.assign(metaData, metadata.tags);
      mediaEntry.metadata = metaData;
      mediaEntry.sources = OTTProviderParser._getParsedSources(kalturaSources);
      mediaEntry.duration = Math.max.apply(Math, kalturaSources.map(function (source) {
        return source.duration;
      }));
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

  }, {
    key: '_getParsedSources',
    value: function _getParsedSources(kalturaSources) {
      var sources = new _mediaSources2.default();
      var addAdaptiveSource = function addAdaptiveSource(source) {
        var parsedSource = OTTProviderParser._parseAdaptiveSource(source);
        var sourceFormat = _mediaFormat.SupportedStreamFormat.get(source.format);
        sources.map(parsedSource, sourceFormat);
      };
      var parseAdaptiveSources = function parseAdaptiveSources() {
        kalturaSources.filter(function (source) {
          return !OTTProviderParser._isProgressiveSource(source);
        }).forEach(addAdaptiveSource);
      };
      var parseProgressiveSources = function parseProgressiveSources() {
        kalturaSources.filter(function (source) {
          return OTTProviderParser._isProgressiveSource(source);
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
     * @returns {MediaSource} - The parsed adaptive kalturaSource
     * @static
     * @private
     */

  }, {
    key: '_parseAdaptiveSource',
    value: function _parseAdaptiveSource(kalturaSource) {
      var mediaSource = new _mediaSource2.default();
      if (kalturaSource) {
        var playUrl = kalturaSource.url;
        var mediaFormat = _mediaFormat.SupportedStreamFormat.get(kalturaSource.format);
        if (mediaFormat) {
          mediaSource.mimetype = mediaFormat.mimeType;
        }
        if (playUrl === '') {
          OTTProviderParser._logger.error('failed to create play url from source, discarding source: (' + kalturaSource.fileId + '), ' + kalturaSource.format + '.');
          return mediaSource;
        }
        mediaSource.url = playUrl;
        mediaSource.id = kalturaSource.fileId + ',' + kalturaSource.format;
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
  }]);

  return OTTProviderParser;
}(_baseProviderParser2.default);

OTTProviderParser._logger = (0, _logger2.default)("OTTProviderParser");
exports.default = OTTProviderParser;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottService = __webpack_require__(22);

var _ottService2 = _interopRequireDefault(_ottService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "asset";

var OTTAssetService = function (_OTTService) {
  _inherits(OTTAssetService, _OTTService);

  function OTTAssetService() {
    _classCallCheck(this, OTTAssetService);

    return _possibleConstructorReturn(this, (OTTAssetService.__proto__ || Object.getPrototypeOf(OTTAssetService)).apply(this, arguments));
  }

  _createClass(OTTAssetService, null, [{
    key: 'getPlaybackContext',

    /**
     * Creates an instance of RequestBuilder for session.startWidgetSession
     * @function anonymousSession
     * @param {string} serviceUrl The service base URL
     * @param {string} ks The partner ID
     * @param {string} assetId The asset ID
     * @param {string} type The asset type (media/recording/epg)
     * @param {PlaybackContextOptions} playbackContextOptions The playbackContextOptions
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function getPlaybackContext(serviceUrl, ks, assetId, type, playbackContextOptions) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "getPlaybackContext";
      request.method = "POST";
      request.url = request.getUrl(serviceUrl);
      var contextDataParams = { objectType: "KalturaPlaybackContextOptions" };
      Object.assign(contextDataParams, playbackContextOptions);
      request.params = { assetId: assetId, assetType: type, contextDataParams: contextDataParams, ks: ks };
      return request;
    }
  }, {
    key: 'get',
    value: function get(serviceUrl, ks, assetId) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "get";
      request.method = "POST";
      request.url = request.getUrl(serviceUrl);
      request.params = { id: assetId, assetReferenceType: "media", ks: ks };
      return request;
    }
  }]);

  return OTTAssetService;
}(_ottService2.default);

exports.default = OTTAssetService;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottService = __webpack_require__(22);

var _ottService2 = _interopRequireDefault(_ottService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "ottuser";

var OTTUserService = function (_OTTService) {
  _inherits(OTTUserService, _OTTService);

  function OTTUserService() {
    _classCallCheck(this, OTTUserService);

    return _possibleConstructorReturn(this, (OTTUserService.__proto__ || Object.getPrototypeOf(OTTUserService)).apply(this, arguments));
  }

  _createClass(OTTUserService, null, [{
    key: 'anonymousLogin',

    /**
     * Creates an instance of RequestBuilder for session.startWidgetSession
     * @function anonymousSession
     * @param {string} serviceUrl The service base URL
     * @param {string} partnerId The partner ID
     * @param {string} udid The udid
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function anonymousLogin(serviceUrl, partnerId, udid) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "anonymousLogin";
      request.method = "POST";
      request.url = request.getUrl(serviceUrl);
      var params = { partnerId: partnerId };
      if (udid) {
        Object.assign(params, { udid: udid });
      }
      request.params = params;
      return request;
    }
  }]);

  return OTTUserService;
}(_ottService2.default);

exports.default = OTTUserService;

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit-ott-provider.js.map