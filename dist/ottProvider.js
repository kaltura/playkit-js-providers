(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PlaykitJsProviders"] = factory();
	else
		root["PlaykitJsProviders"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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

/**
 * Request builder
 * @classdesc
 */
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
   * @param {string} baseUrl - The service base URL
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
    value: function getUrl(baseUrl) {
      return baseUrl + '/service/' + this.service + (this.action ? '/action/' + this.action : '');
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
        throw new Error("baseUrl is mandatory for request builder");
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  beUrl: "http://www.kaltura.com/api_v3",
  baseUrl: "https://cdnapisec.kaltura.com",
  serviceParams: {
    apiVersion: '3.3.0',
    format: 1
  }
};

var Configuration = function () {
  function Configuration() {
    _classCallCheck(this, Configuration);
  }

  _createClass(Configuration, null, [{
    key: "set",
    value: function set(clientConfig) {
      if (clientConfig) {
        Object.assign(defaultConfig, clientConfig);
      }
    }
  }, {
    key: "get",
    value: function get() {
      return defaultConfig;
    }
  }]);

  return Configuration;
}();

exports.default = Configuration;
exports.Configuration = Configuration;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base service result
 * @classdesc
 */
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

/**
 * Service error
 * @classdesc
 */


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
exports.LOG_LEVEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsLogger = __webpack_require__(10);

var JsLogger = _interopRequireWildcard(_jsLogger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoggerFactory = function () {
  function LoggerFactory(options) {
    _classCallCheck(this, LoggerFactory);

    JsLogger.useDefaults(options || {});
  }

  _createClass(LoggerFactory, [{
    key: "get",
    value: function get(name) {
      if (!name) {
        return JsLogger;
      }
      return JsLogger.get(name);
    }
  }]);

  return LoggerFactory;
}();

var Logger = new LoggerFactory({ defaultLevel: JsLogger.DEBUG });
var LOG_LEVEL = {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
};

exports.default = Logger;
exports.LOG_LEVEL = LOG_LEVEL;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiRequestResult = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _baseServiceResult = __webpack_require__(2);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @constant
 */
var logger = _logger2.default.get("OvpProvider");

/**
 * Multi Request builder
 * @classdesc
 */

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
     * @returns {Promise} The multirequest execution promisie
     */

  }, {
    key: 'execute',
    value: function execute() {
      var _this2 = this;

      try {
        this.params = JSON.stringify(this.params);
      } catch (err) {
        logger.error('' + err.message);
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

/**
 * Multi Request result object
 * @classdesc
 */


exports.default = MultiRequestBuilder;

var MultiRequestResult =

/**
 * @constructor
 * @param {Object}  response data
 */


/**
 * @member - Is success
 * @type {boolean}
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
      logger.error('Service returned an error with error code: ' + serviceResult.error.code + ' and message: ' + serviceResult.error.message + '.');
      _this3.success = false;
      return;
    }
  });
}
/**
 * @member - Multi request response data
 * @type {Object}
 */
;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrmScheme = exports.DrmScheme = {
  'drm.PLAYREADY_CENC': 'com.microsoft.playready',
  'drm.WIDEVINE_CENC': 'com.widevine.alpha',
  'fairplay.FAIRPLAY': 'com.apple.fairplay',
  'WIDEVINE_CENC': 'com.widevine.alpha',
  'PLAYREADY_CENC': 'com.microsoft.playready',
  'FAIRPLAY': 'com.apple.fairplay'

};

var KalturaRuleActionTypes = exports.KalturaRuleActionTypes = function KalturaRuleActionTypes() {
  _classCallCheck(this, KalturaRuleActionTypes);
};

KalturaRuleActionTypes.DRM_POLICY = "drm.DRM_POLICY";
KalturaRuleActionTypes.BLOCK = 1;
KalturaRuleActionTypes.PREVIEW = 2;
KalturaRuleActionTypes.LIMIT_FLAVORS = 3;
KalturaRuleActionTypes.ADD_TO_STORAGE = 4;
KalturaRuleActionTypes.LIMIT_DELIVERY_PROFILES = 5;
KalturaRuleActionTypes.SERVE_FROM_REMOTE_SERVER = 6;
KalturaRuleActionTypes.REQUEST_HOST_REGEX = 7;
KalturaRuleActionTypes.LIMIT_THUMBNAIL_CAPTURE = 8;

var Status = exports.Status = function Status() {
  _classCallCheck(this, Status);
};

Status.ERROR = -1;
Status.QUEUED = 0;
Status.CONVERTING = 1;
Status.READY = 2;
Status.DELETED = 3;
Status.NOT_APPLICABLE = 4;
Status.TEMP = 5;
Status.WAIT_FOR_CONVERT = 6;
Status.IMPORTING = 7;
Status.VALIDATING = 8;
Status.EXPORTING = 9;

var MetadataObjectTypes = exports.MetadataObjectTypes = function MetadataObjectTypes() {
  _classCallCheck(this, MetadataObjectTypes);
};

MetadataObjectTypes.AD_CUE_POINT = "adCuePointMetadata.AdCuePoint";
MetadataObjectTypes.ANNOTATION = "annotationMetadata.Annotation";
MetadataObjectTypes.CODE_CUE_POINT = "codeCuePointMetadata.CodeCuePoint";
MetadataObjectTypes.THUMB_CUE_POINT = "thumbCuePointMetadata.thumbCuePoint";
MetadataObjectTypes.ENTRY = 1;
MetadataObjectTypes.CATEGORY = 2;
MetadataObjectTypes.USER = 3;
MetadataObjectTypes.PARTNER = 4;
MetadataObjectTypes.DYNAMIC_OBJECT = 5;

var MetadataStatuses = exports.MetadataStatuses = function MetadataStatuses() {
  _classCallCheck(this, MetadataStatuses);
};

MetadataStatuses.VALID = 1;
MetadataStatuses.INVALID = 2;
MetadataStatuses.DELETED = 3;

var EntryStatuses = exports.EntryStatuses = function EntryStatuses() {
  _classCallCheck(this, EntryStatuses);
};

EntryStatuses.ERROR_IMPORTING = -2;
EntryStatuses.ERROR_CONVERTING = -1;
EntryStatuses.SCAN_FAILURE = "virusScan.ScanFailure";
EntryStatuses.IMPORT = 0;
EntryStatuses.INFECTED = "virusScan.Infected";
EntryStatuses.PRECONVERT = 1;
EntryStatuses.READY = 2;
EntryStatuses.DELETED = 3;
EntryStatuses.PENDING = 4;
EntryStatuses.MODERATE = 5;
EntryStatuses.BLOCKED = 6;
EntryStatuses.NO_CONTENT = 7;

var EntryModerationStatuses = exports.EntryModerationStatuses = function EntryModerationStatuses() {
  _classCallCheck(this, EntryModerationStatuses);
};

EntryModerationStatuses.PENDING_MODERATION = 1;
EntryModerationStatuses.APPROVED = 2;
EntryModerationStatuses.REJECTED = 3;
EntryModerationStatuses.FLAGGED_FOR_REVIEW = 4;
EntryModerationStatuses.MODERATE = 5;
EntryModerationStatuses.AUTO_APPROVED = 6;

var EntryTypes = exports.EntryTypes = function EntryTypes() {
  _classCallCheck(this, EntryTypes);
};

EntryTypes.AUTOMATIC = { value: -1 };
EntryTypes.EXTERNAL_MEDIA = { value: "externalMedia.externalMedia" };
EntryTypes.MEDIA_CLIP = { value: 1 };
EntryTypes.MIX = { value: 2 };
EntryTypes.PLAYLIST = { value: 5 };
EntryTypes.DATA = { value: 6 };
EntryTypes.LIVE_STREAM = { value: 7 };
EntryTypes.LIVE_CHANNEL = { value: 8 };
EntryTypes.DOCUMENT = { value: 10 };

var MediaTypes = exports.MediaTypes = function MediaTypes() {
  _classCallCheck(this, MediaTypes);
};

MediaTypes.VIDEO = { value: 1 };
MediaTypes.IMAGE = { value: 2 };
MediaTypes.AUDIO = { value: 5 };
MediaTypes.LIVE_STREAM_FLASH = { value: 201 };
MediaTypes.LIVE_STREAM_WINDOWS_MEDIA = { value: 202 };
MediaTypes.LIVE_STREAM_REAL_MEDIA = { value: 203 };
MediaTypes.LIVE_STREAM_QUICKTIME = { value: 204 };

var MediaEntryTypes = exports.MediaEntryTypes = function MediaEntryTypes() {
  _classCallCheck(this, MediaEntryTypes);
};

MediaEntryTypes.Vod = 'Vod';
MediaEntryTypes.Live = 'Live';
MediaEntryTypes.Image = 'Image';
MediaEntryTypes.Audio = 'Audio';
MediaEntryTypes.Unknown = 'Unknown';

var UIConfTypes = exports.UIConfTypes = function UIConfTypes() {
  _classCallCheck(this, UIConfTypes);
};

UIConfTypes.PLAYER = 1;
UIConfTypes.CONTRIBUTION_WIZARD = 2;
UIConfTypes.SIMPLE_EDITOR = 3;
UIConfTypes.ADVANCED_EDITOR = 4;
UIConfTypes.PLAYLIST = 5;
UIConfTypes.APP_STUDIO = 6;
UIConfTypes.KRECORD = 7;
UIConfTypes.PLAYER_V3 = 8;
UIConfTypes.KMC_ACCOUNT = 9;
UIConfTypes.KMC_ANALYTICS = 10;
UIConfTypes.KMC_CONTENT = 11;
UIConfTypes.KMC_DASHBOARD = 12;
UIConfTypes.KMC_LOGIN = 13;
UIConfTypes.PLAYER_SL = 14;
UIConfTypes.CLIENTSIDE_ENCODER = 15;
UIConfTypes.KMC_GENERAL = 16;
UIConfTypes.KMC_ROLES_AND_PERMISSIONS = 17;
UIConfTypes.CLIPPER = 18;
UIConfTypes.KSR = 19;
UIConfTypes.KUPLOAD = 20;
UIConfTypes.WEBCASTING = 21;

var UIConfCreationModes = exports.UIConfCreationModes = function UIConfCreationModes() {
  _classCallCheck(this, UIConfCreationModes);
};

UIConfCreationModes.WIZARD = 2;
UIConfCreationModes.ADVANCED = 3;

var OttAssetType = exports.OttAssetType = function OttAssetType() {
  _classCallCheck(this, OttAssetType);
};

OttAssetType.MEDIA = "media";
OttAssetType.RECORDING = "recording";
OttAssetType.EPG = "epg";

var OttPlaybackType = exports.OttPlaybackType = function OttPlaybackType() {
  _classCallCheck(this, OttPlaybackType);
};

OttPlaybackType.TRAILER = "TRAILER";
OttPlaybackType.CATCHUP = "CATCHUP";
OttPlaybackType.START_OVER = "START_OVER";
OttPlaybackType.PLAYBACK = "PLAYBACK";

var ProviderType = exports.ProviderType = function ProviderType() {
  _classCallCheck(this, ProviderType);
};

ProviderType.OVP = "OVP";
ProviderType.OTT = "OTT";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  beUrl: "http://api-preprod.ott.kaltura.com/v4_6/api_v3",
  serviceParams: {
    clientTag: "playkit-js",
    apiVersion: '4.5.4.15337'
  }
};

var Configuration = function () {
  function Configuration() {
    _classCallCheck(this, Configuration);
  }

  _createClass(Configuration, null, [{
    key: "set",
    value: function set(clientConfig) {
      if (clientConfig) {
        Object.assign(defaultConfig, clientConfig);
      }
    }
  }, {
    key: "get",
    value: function get() {
      return defaultConfig;
    }
  }]);

  return Configuration;
}();

exports.default = Configuration;
exports.Configuration = Configuration;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiRequestBuilder = __webpack_require__(4);

var _multiRequestBuilder2 = _interopRequireDefault(_multiRequestBuilder);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();
var SERVICE_NAME = "multirequest";

/**
 * Base for all ovp services
 * @classdesc
 */

var OvpService = function () {
  function OvpService() {
    _classCallCheck(this, OvpService);
  }

  _createClass(OvpService, null, [{
    key: 'getMultirequest',

    /**
     * Gets a new instance of MultiRequestBuilder with ovp params
     * @function getMultirequest
     * @param {string} pVersion The player version
     * @param {string} ks The ks
     * @param {string} partnerId The partner ID
     * @returns {MultiRequestBuilder} The multi request builder
     * @static
     */
    value: function getMultirequest(pVersion, ks, partnerId) {
      var ovpParams = config.serviceParams;
      Object.assign(ovpParams, { ks: ks, clientTag: 'html5:v' + pVersion });
      if (partnerId) {
        Object.assign(ovpParams, { partnerId: partnerId });
      }
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var multiReq = new _multiRequestBuilder2.default(headers);
      multiReq.method = "POST";
      multiReq.service = SERVICE_NAME;
      multiReq.url = multiReq.getUrl(config.beUrl);
      multiReq.params = ovpParams;
      return multiReq;
    }
  }]);

  return OvpService;
}();

exports.default = OvpService;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaSource = __webpack_require__(13);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Container for the media sources aggregated by stream format.
 * @classdesc
 */
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
          case 'mp4':
            this.progressive.push(source);
            break;
          case 'dash':
            this.dash.push(source);
            break;
          case 'hls':
            this.hls.push(source);
            break;
          default:
            break;
        }
      }
    }
  }]);

  return MediaSources;
}();

exports.default = MediaSources;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiRequestBuilder = __webpack_require__(4);

var _multiRequestBuilder2 = _interopRequireDefault(_multiRequestBuilder);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();
var SERVICE_NAME = "multirequest";

/**
 * Base for all ott services
 * @classdesc
 */

var OttService = function () {
  function OttService() {
    _classCallCheck(this, OttService);
  }

  _createClass(OttService, null, [{
    key: 'getMultirequest',

    /**
     * Gets a new instance of MultiRequestBuilder with ott params
     * @function getMultirequest
     * @param {string} ks The ks
     * @param {string} partnerId The partner ID
     * @returns {MultiRequestBuilder} The multi request builder
     * @static
     */
    value: function getMultirequest(ks, partnerId) {
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
      multiReq.url = multiReq.getUrl(config.beUrl);
      multiReq.params = ottParams;
      return multiReq;
    }
  }]);

  return OttService;
}();

exports.default = OttService;

/***/ }),
/* 10 */
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
	Logger.VERSION = "1.3.0";

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(5);

var _mediaSources = __webpack_require__(8);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Media entry
 * @classdesc
 */
var MediaEntry =

/**
 * @constructor
 */

/**
 * @member - entry metadata
 * @type {Object}
 */

/**
 * @member - entry duration
 * @type {number}
 */

/**
 * @member - entry name
 * @type {string}
 */
function MediaEntry() {
  _classCallCheck(this, MediaEntry);

  this.metaData = new Map();
  this.type = _enums.MediaEntryTypes.Unknown;
}
/**
 * @member - DVR status
 * @type {number}
 */

/**
 * @member - entry type
 * @type {MediaEntryType}
 */

/**
 * @member - entry sources
 * @type {MediaSources}
 */


/**
 * @member - entry ID
 * @type {string}
 */
;

exports.default = MediaEntry;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Drm data
 * @classdesc
 */
var Drm =

/**
 * @constructor
 * @param {string} licenseUrl - the license URL
 * @param {Scheme} scheme - the drm scheme
 * @param {?string} certificate - the drm certificate
 */

/**
 * @member - drm scheme
 * @type {Scheme}
 */
function Drm(licenseUrl, scheme, certificate) {
  _classCallCheck(this, Drm);

  this.licenseUrl = licenseUrl;
  this.scheme = scheme;
  this.certificate = certificate;
}

/**
 * @member - The drm certificate
 * @type {?string}
 */


/**
 * @member - license URL
 * @type {string}
 */
;

exports.default = Drm;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drm = __webpack_require__(12);

var _drm2 = _interopRequireDefault(_drm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Media source
 * @classdesc
 */
var MediaSource =

/**
 * @constructor
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
 * @member - media source ID
 * @type {string}
 */
function MediaSource() {
  _classCallCheck(this, MediaSource);
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
 * @member - media source URL
 * @type {string}
 */
;

exports.default = MediaSource;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(7);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _ottService = __webpack_require__(9);

var _ottService2 = _interopRequireDefault(_ottService);

var _multiRequestBuilder = __webpack_require__(4);

var _multiRequestBuilder2 = _interopRequireDefault(_multiRequestBuilder);

var _enums = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Data loaders manager
 * @classdesc
 */
var DataLoaderManager = function () {

  /**
   * @constructor
   * @param {string} pVersion The player version
   * @param {string} partnerID Then partner ID
   * @param {string} ks The ks
   * @param {ProviderType} provider type, ovp or ott
   */

  /**
   * @member - Lodaers response map index
   * @type {Map<string,Array<number>>}
   * @private
   * @static
   */
  function DataLoaderManager(pVersion, partnerID) {
    var ks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var provider = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _enums.ProviderType.OVP;

    _classCallCheck(this, DataLoaderManager);

    this._loaders = new Map();

    switch (provider) {
      case _enums.ProviderType.OVP:
        this._multiRequest = _ovpService2.default.getMultirequest(pVersion, ks, partnerID);
        break;
      case _enums.ProviderType.OTT:
        this._multiRequest = _ottService2.default.getMultirequest(ks, partnerID);
        break;
      default:
        break;
    }
  }

  /**
   * Add loader too execution loaders map
   * @function
   * @param {Function} loader Loader to add
   * @param {Object} params Loader params
   * @returns {void}
   */

  /**
   * @member - Loaders to execute
   * @type {Map<string,Function>}
   * @private
   */

  /**
   * @member - Loaders multi request
   * @type {MultiRequestBuilder}
   * @private
   */

  /**
   * @member - Loaders multi response
   * @type {MultiRequestResult}
   * @private
   */


  _createClass(DataLoaderManager, [{
    key: 'add',
    value: function add(loader, params) {
      var _this = this;

      var execution_loader = new loader(params);
      if (execution_loader.isValid()) {
        this._loaders.set(loader.id, execution_loader);
        //Get the start index from the multiReqeust before adding current execution_loader requests
        var startIndex = this._multiRequest.requests.length;
        //Get the requests
        var requests = execution_loader.requests;
        //Add requests to muktiRequest queue
        requests.forEach(function (request) {
          _this._multiRequest.add(request);
        });
        //Create range array of current execution_loader requests
        var executionLoaderResponseMap = Array.from(new Array(requests.length), function (val, index) {
          return index + startIndex;
        });
        //Add to map
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
  }, {
    key: 'prepareData',
    value: function prepareData(response) {
      this._loaders.forEach(function (loader, name) {
        var loaderDataIndexes = DataLoaderManager._loadersResponseMap.get(name);
        try {
          if (loaderDataIndexes != null) {
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaFormats = exports.MediaFormats = function MediaFormats() {
  _classCallCheck(this, MediaFormats);
};

MediaFormats.dash = {
  name: 'dash',
  mimeType: "application/dash+xml",
  pathExt: "mpd"
};
MediaFormats.hls = {
  name: 'hls',
  mimeType: "application/x-mpegURL",
  pathExt: "m3u8"
};
MediaFormats.wvm = {
  name: 'wvm',
  mimeType: "video/wvm",
  pathExt: "wvm"
};
MediaFormats.mp4 = {
  name: 'mp4',
  mimeType: "video/mp4",
  pathExt: "mp4"
};
MediaFormats.mp3 = {
  name: 'mp3',
  mimeType: "audio/mpeg",
  pathExt: "mp3"
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ovp BE access control message
 * @classdesc
 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ovp BE DrmPlaybackPluginData
 * @classdesc
 */
var KalturaDrmPlaybackPluginData =

/**
 * @constructor
 * @param {Object} drm The json response
 */


/**
 * @member - The license URL
 * @type {string}
 */
function KalturaDrmPlaybackPluginData(drm) {
  _classCallCheck(this, KalturaDrmPlaybackPluginData);

  this.scheme = drm.scheme;
  this.licenseURL = drm.licenseURL;
  this.certificate = drm.certificate;
}

/**
 * @member - The drm certificate
 * @type {?string}
 */

/**
 * @member - The drm scheme
 * @type {Scheme}
 */
;

exports.default = KalturaDrmPlaybackPluginData;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ovp BE rule action
 * @classdesc
 */
var KalturaRuleAction =

/**
 * @constructor
 * @param {Object} data The response
 */
function KalturaRuleAction(data) {
  _classCallCheck(this, KalturaRuleAction);

  this.type = data.type;
}
/**
 * @member - The type of the action
 * @type {KalturaRuleActionType}
 */
;

exports.default = KalturaRuleAction;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kalturaDrmPlaybackPluginData = __webpack_require__(17);

var _kalturaDrmPlaybackPluginData2 = _interopRequireDefault(_kalturaDrmPlaybackPluginData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * OTT BE playback source
 * @classdesc
 */
var KalturaPlaybackSource = function () {

  /**
   * @constructor
   * @param {Object} source The response
   */

  /**
   * @member - comma separated string according to deliveryProfile media protocols ('http,https' etc.)
   * @type {string}
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

  /**
   * @member - source format according to delivery profile streamer type (applehttp, mpegdash etc.)
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
          if (p == protocol) {
            returnValue = p;
          }
        });
      } else if (protocol == "http") {
        return protocol;
      }
      return returnValue;
    }
  }]);

  return KalturaPlaybackSource;
}();

exports.default = KalturaPlaybackSource;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottAssetService = __webpack_require__(35);

var _ottAssetService2 = _interopRequireDefault(_ottAssetService);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _kalturaPlaybackContext = __webpack_require__(33);

var _kalturaPlaybackContext2 = _interopRequireDefault(_kalturaPlaybackContext);

var _kalturaAsset = __webpack_require__(32);

var _kalturaAsset2 = _interopRequireDefault(_kalturaAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();

/**
 * Asset loader
 * @classdesc
 */

var AssetLoader = function () {
  _createClass(AssetLoader, null, [{
    key: 'id',
    get: function get() {
      return "asset";
    }
  }]);

  /**
   * @constructor
   * @param {Object} params loader params
   */
  function AssetLoader(params) {
    _classCallCheck(this, AssetLoader);

    this._response = {};

    this.requests = this.buildRequests(params);
    this._entryId = params.entryId;
  }

  _createClass(AssetLoader, [{
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
      requests.push(_ottAssetService2.default.get(config.beUrl, params.ks, params.entryId));
      requests.push(_ottAssetService2.default.getPlaybackContext(config.beUrl, params.ks, params.entryId, params.type, params.playbackContext));
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

  return AssetLoader;
}();

exports.default = AssetLoader;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottUserService = __webpack_require__(36);

var _ottUserService2 = _interopRequireDefault(_ottUserService);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();
/**
 * Media entry loader
 * @classdesc
 */

var SessionLoader = function () {
  _createClass(SessionLoader, null, [{
    key: 'id',
    get: function get() {
      return "session";
    }

    /**
     * @member - partner ID
     * @type {number}
     * @private
     */

  }]);

  /**
   * @constructor
   * @param {Object} params loader params
   */
  function SessionLoader(params) {
    _classCallCheck(this, SessionLoader);

    this._response = {};

    this.requests = this.buildRequests(params);
    this._partnerId = params.partnerId;
  }

  _createClass(SessionLoader, [{
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
      requests.push(_ottUserService2.default.anonymousLogin(config.beUrl, params.partnerId, params.udid));
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

  return SessionLoader;
}();

exports.default = SessionLoader;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kalturaPlaybackSource = __webpack_require__(19);

var _kalturaPlaybackSource2 = _interopRequireDefault(_kalturaPlaybackSource);

var _enums = __webpack_require__(5);

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

var _mediaFormat = __webpack_require__(15);

var _mediaEntry = __webpack_require__(11);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

var _drm = __webpack_require__(12);

var _drm2 = _interopRequireDefault(_drm);

var _mediaSource = __webpack_require__(13);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

var _mediaSources = __webpack_require__(8);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @constant
 */
var logger = _logger2.default.get("OttProvider");

/**
 * @constant
 * @type {Map<string, MediaFormat>}
 */
var SUPPORTED_FORMATS = new Map([["mpegdash", _mediaFormat.MediaFormats.dash], ["applehttp", _mediaFormat.MediaFormats.hls], ["url", _mediaFormat.MediaFormats.mp4]]);

/**
 * Ott provider parser
 * @classdesc
 */

var ProviderParser = function () {
  function ProviderParser() {
    _classCallCheck(this, ProviderParser);
  }

  _createClass(ProviderParser, null, [{
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
      var mediaData = assetResponse.mediaDataResult;
      var kalturaSources = playbackContext.sources;

      mediaEntry.name = mediaData.name;
      mediaEntry.id = mediaData.id;
      var metaData = { description: mediaData.description };
      Object.assign(metaData, mediaData.metas);
      Object.assign(metaData, mediaData.tags);
      mediaEntry.metaData = metaData;

      var sources = ProviderParser._getParsedSources(kalturaSources);

      mediaEntry.sources = sources;
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
        var parsedSource = ProviderParser._parseAdaptiveSource(source);
        var sourceFormat = SUPPORTED_FORMATS.get(source.format);
        sources.map(parsedSource, sourceFormat);
      };

      var parseAdaptiveSources = function parseAdaptiveSources() {
        kalturaSources.filter(function (source) {
          return !ProviderParser._isProgressiveSource(source);
        }).forEach(addAdaptiveSource);
      };

      var parseProgressiveSources = function parseProgressiveSources() {
        kalturaSources.filter(function (source) {
          return ProviderParser._isProgressiveSource(source);
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
        var mediaFormat = SUPPORTED_FORMATS.get(kalturaSource.format);

        if (mediaFormat) {
          mediaSource.mimetype = mediaFormat.mimeType;
        }

        if (playUrl === "") {
          logger.error('failed to create play url from source, discarding source: (' + kalturaSource.fileId + '_' + kalturaSource.deliveryProfileId + '), ' + kalturaSource.format + '.');
          return mediaSource;
        }

        mediaSource.url = playUrl;
        mediaSource.id = kalturaSource.fileId + "," + kalturaSource.format;
        if (kalturaSource.hasDrmData()) {
          var drmParams = [];
          kalturaSource.drm.forEach(function (drm) {
            drmParams.push(new _drm2.default(drm.licenseURL, _enums.DrmScheme[drm.scheme], drm.certificate));
          });
          mediaSource.drmData = drmParams;
        }
      }
      return mediaSource;
    }

    /**
     * @function _isProgressiveSource
     * @param {KalturaPlaybackSource} source - The kaltura source
     * @return {boolean} - Is progressive source
     * @static
     * @private
     */

  }, {
    key: '_isProgressiveSource',
    value: function _isProgressiveSource(source) {
      var sourceFormat = SUPPORTED_FORMATS.get(source.format);
      return !!sourceFormat && sourceFormat.name === 'mp4';
    }
  }, {
    key: 'hasBlockActions',
    value: function hasBlockActions(assetResponse) {
      var playbackContext = assetResponse.playBackContextResult;
      for (var actionIndex = 0; actionIndex < playbackContext.actions.length; actionIndex++) {
        if (playbackContext.actions[actionIndex].type == "BLOCK") {
          return playbackContext.actions[actionIndex];
        }
      }
      return null;
    }
  }, {
    key: 'hasErrorMessage',
    value: function hasErrorMessage(assetResponse) {
      var messages = assetResponse.playBackContextResult.messages;
      for (var messagesIndex = 0; messagesIndex < messages.length; messagesIndex++) {
        if (messages[messagesIndex].code != "OK") {
          return messages[messagesIndex];
        }
      }
      return null;
    }
  }]);

  return ProviderParser;
}();

exports.default = ProviderParser;

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OttProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _enums = __webpack_require__(5);

var _providerParser = __webpack_require__(25);

var _providerParser2 = _interopRequireDefault(_providerParser);

var _sessionLoader = __webpack_require__(24);

var _sessionLoader2 = _interopRequireDefault(_sessionLoader);

var _assetLoader = __webpack_require__(23);

var _assetLoader2 = _interopRequireDefault(_assetLoader);

var _dataLoaderManager = __webpack_require__(14);

var _dataLoaderManager2 = _interopRequireDefault(_dataLoaderManager);

var _mediaEntry = __webpack_require__(11);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

var _mediaSources = __webpack_require__(8);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @constant
 */
var logger = _logger2.default.get("OttProvider");

/**
 * Ott provider
 * @classdesc
 */
var OttProvider = exports.OttProvider = function () {

  /**
   * @constructor
   * @param {string} pVersion The player version
   * @param {number} partnerID The partner ID
   * @param {string} [ks=""]  The provider ks (has empty string as default value)
   * @param {Object} [config]  The provider config(optional)
   */

  /**
   * @member - uiConf ID
   * @type {number}
   * @private
   */

  /**
   * @member - pVersion the player version
   * @type {string}
   * @private
   */

  /**
   * @member - ks
   * @type {string}
   */
  function OttProvider(pVersion, partnerID) {
    var ks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var config = arguments[3];

    _classCallCheck(this, OttProvider);

    this._pVersion = pVersion;
    this.partnerID = partnerID;
    this.ks = ks;
    this._isAnonymous = !this.ks;
    _config2.default.set(config);
  }

  /**
   * Returns player json configuration
   * @function getConfig
   * @param {Object} options The entry data
   * @returns {Promise} The provider config object as promise
   */

  /**
   * @member - Data loader
   * @type {DataLoaderManager}
   * @private
   */

  /**
   * @member - is anonymous
   * @type {boolean}
   * @private
   */

  /**
   * @member - group ID
   * @type {number}
   */


  _createClass(OttProvider, [{
    key: 'getConfig',
    value: function getConfig(options) {
      var _this = this;

      this._dataLoader = new _dataLoaderManager2.default(this._pVersion, this.partnerID, this.ks, _enums.ProviderType.OTT);
      return new Promise(function (resolve, reject) {
        if (_this.validateParams(options)) {
          var ks = _this.ks;
          if (!ks) {
            ks = "{1:result:ks}";
            _this._dataLoader.add(_sessionLoader2.default, { partnerId: _this.partnerID });
          }

          var playbackContext = {
            mediaProtocol: options.protocol,
            assetFileIds: options.fileIds,
            context: options.contextType
          };
          _this._dataLoader.add(_assetLoader2.default, {
            entryId: options.assetId,
            ks: ks,
            type: options.type,
            playbackContext: playbackContext
          });

          _this._dataLoader.fetchData().then(function (response) {
            try {
              resolve(_this.parseDataFromResponse(response));
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

    /**
     * Parses BE data to json configuration object
     * @function parseDataFromResponse
     * @param {Map<string,Function>} data The data to parse
     * @returns {Object} The parsed config object
     */

  }, {
    key: 'parseDataFromResponse',
    value: function parseDataFromResponse(data) {
      logger.debug("Data parsing started");
      var config = {
        id: "",
        name: "",
        session: {
          partnerID: this.partnerID,
          uiConfID: this._uiConfId,
          ks: this.ks
        },
        sources: new _mediaSources2.default(),
        duration: 0,
        type: "Unknown",
        dvr: false,
        metadata: {},
        plugins: {}
      };
      if (data != null) {
        if (data.has(_sessionLoader2.default.id)) {
          var sessionLoader = data.get(_sessionLoader2.default.id);
          if (sessionLoader != null && sessionLoader.response != null) {
            this.ks = sessionLoader.response;
            config.session.ks = this.ks;
          }
        }
        if (data.has(_assetLoader2.default.id)) {
          var assetLoader = data.get(_assetLoader2.default.id);
          if (assetLoader != null && assetLoader.response != null) {
            var blockedAction = _providerParser2.default.hasBlockActions(assetLoader.response);
            if (_providerParser2.default.hasBlockActions(assetLoader.response)) {
              var errorMessage = _providerParser2.default.hasErrorMessage(assetLoader.response);
              if (errorMessage) {
                logger.error('Asset is blocked, error message: ', errorMessage);
                throw errorMessage;
              } else {
                logger.error('Asset is blocked, action: ', blockedAction);
                throw blockedAction;
              }
            }
            var mediaEntry = _providerParser2.default.getMediaEntry(assetLoader.response);
            config.sources = mediaEntry.sources;
            config.id = mediaEntry.id;
            config.name = mediaEntry.name;
            config.duration = mediaEntry.duration;
            config.metadata = mediaEntry.metaData;
          }
        }
      }
      logger.debug("Data parsing finished", config);
      return config;
    }

    /**
     * Parameters validation function
     * @param {Object} options The entry data
     * @returns {boolean} Is valid params
     */

  }, {
    key: 'validateParams',
    value: function validateParams(options) {
      if (options) {
        return !!options.assetId && !!options.type && !!options.contextType || !!options.uiConfId;
      } else {
        return false;
      }
    }
  }]);

  return OttProvider;
}();

exports.default = OttProvider;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseServiceResult = __webpack_require__(2);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * OTT BE asset response
 * @classdesc
 */
var KalturaAsset = function (_ServiceResult) {
  _inherits(KalturaAsset, _ServiceResult);

  /**
   * @constructor
   * @param {Object} response The response
   */

  /**
   * @member - The asset metas
   * @type {Array}
   */

  /**
   * @member - The asset name description
   * @type {string}
   */

  /**
   * @member - The asset ID
   * @type {number}
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
   * @type {Array}
   */

  /**
   * @member - The asset tags
   * @type {Array}
   */

  /**
   * @member - The asset name
   * @type {string}
   */


  _createClass(KalturaAsset, [{
    key: "_formatTagsMetas",
    value: function _formatTagsMetas(objectToParse) {
      var parsed = [];
      var keys = Object.keys(objectToParse);
      keys.forEach(function (key) {
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

exports.default = KalturaAsset;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(2);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _kalturaAccessControlMessage = __webpack_require__(16);

var _kalturaAccessControlMessage2 = _interopRequireDefault(_kalturaAccessControlMessage);

var _kalturaPlaybackSource = __webpack_require__(19);

var _kalturaPlaybackSource2 = _interopRequireDefault(_kalturaPlaybackSource);

var _kalturaRuleAction = __webpack_require__(18);

var _kalturaRuleAction2 = _interopRequireDefault(_kalturaRuleAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * OTT BE playback context response
 * @classdesc
 */
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

exports.default = KalturaPlaybackContext;

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottService = __webpack_require__(9);

var _ottService2 = _interopRequireDefault(_ottService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _enums = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "asset";

/**
 * ottuser service methods
 * @classdesc
 */

var OTTAssetService = function (_OttService) {
  _inherits(OTTAssetService, _OttService);

  function OTTAssetService() {
    _classCallCheck(this, OTTAssetService);

    return _possibleConstructorReturn(this, (OTTAssetService.__proto__ || Object.getPrototypeOf(OTTAssetService)).apply(this, arguments));
  }

  _createClass(OTTAssetService, null, [{
    key: 'getPlaybackContext',

    /**
     * Creates an instance of RequestBuilder for session.startWidgetSession
     * @function anonymousSession
     * @param {string} baseUrl The service base URL
     * @param {string} ks The partner ID
     * @param {string} assetId The asset ID
     * @param {OttAssetType} type The asset type (media/recording/epg)
     * @param {Object} playbackContextOptions The playbackContextOptions { mediaProtocol: string, assetFileIds: string, context: OttPlaybackType}
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function getPlaybackContext(baseUrl, ks, assetId, type, playbackContextOptions) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "getPlaybackContext";
      request.method = "POST";
      request.url = request.getUrl(baseUrl);
      var contextDataParams = { objectType: "KalturaPlaybackContextOptions" };
      Object.assign(contextDataParams, playbackContextOptions);
      request.params = { assetId: assetId, assetType: type, contextDataParams: contextDataParams, ks: ks };

      return request;
    }
  }, {
    key: 'get',
    value: function get(baseUrl, ks, assetId) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "get";
      request.method = "POST";
      request.url = request.getUrl(baseUrl);
      request.params = { id: assetId, assetReferenceType: "media", ks: ks };

      return request;
    }
  }]);

  return OTTAssetService;
}(_ottService2.default);

exports.default = OTTAssetService;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottService = __webpack_require__(9);

var _ottService2 = _interopRequireDefault(_ottService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "ottuser";

/**
 * ottuser service methods
 * @classdesc
 */

var OTTUserService = function (_OttService) {
  _inherits(OTTUserService, _OttService);

  function OTTUserService() {
    _classCallCheck(this, OTTUserService);

    return _possibleConstructorReturn(this, (OTTUserService.__proto__ || Object.getPrototypeOf(OTTUserService)).apply(this, arguments));
  }

  _createClass(OTTUserService, null, [{
    key: 'anonymousLogin',

    /**
     * Creates an instance of RequestBuilder for session.startWidgetSession
     * @function anonymousSession
     * @param {string} baseUrl The service base URL
     * @param {string} partnerId The partner ID
     * @param {string} udid The udid
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function anonymousLogin(baseUrl, partnerId, udid) {
      var headers = new Map();
      headers.set("Content-Type", "application/json");
      var request = new _requestBuilder2.default(headers);
      request.service = SERVICE_NAME;
      request.action = "anonymousLogin";
      request.method = "POST";
      request.url = request.getUrl(baseUrl);

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
//# sourceMappingURL=ottProvider.js.map