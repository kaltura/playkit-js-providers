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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
    this.headers.set("Content-Type", "application/json");
  }

  /**
   * Builds restful service URL
   * @function getUrl
   * @returns {string} The service URL
   */

  /**
   * @member - Service tag
   * @type {string}
   */

  /**
   * @member - Service base url
   * @type {Map<string, string>}
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
    key: "getUrl",
    value: function getUrl() {
      if (!this.baseUrl) {
        throw new Error("baseUrl is mandatory for request builder");
      }
      var url = this.baseUrl + '/service/' + this.service + (this.action ? '/action/' + this.action : '');
      return url;
    }

    /**
     * Executes service
     * @function doHttpRequest
     * @returns {Promise.<any>} Service response as promise
     */

  }, {
    key: "doHttpRequest",
    value: function doHttpRequest() {
      var _this = this;

      var request = new XMLHttpRequest();
      return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
          if (request.readyState === 4) {
            if (request.status === 200) {
              var jsonResponse = JSON.parse(request.responseText);
              if (jsonResponse && (typeof jsonResponse === "undefined" ? "undefined" : _typeof(jsonResponse)) === 'object' && jsonResponse.code && jsonResponse.message) reject(jsonResponse);else resolve(jsonResponse);
            } else {
              reject(request.responseText);
            }
          }
        };
        request.open(_this.method, _this.getUrl());
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
    clientTag: "playkit-js",
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
exports.UIConfCreationMode = exports.UIConfType = exports.MediaEntryType = exports.MediaType = exports.EntryType = exports.EntryModerationStatus = exports.EntryStatus = exports.MetadataStatus = exports.MetadataObjectType = exports.Status = exports.KalturaRuleActionType = exports.Scheme = undefined;

var _enumify = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scheme = exports.Scheme = function (_Enum) {
  _inherits(Scheme, _Enum);

  function Scheme() {
    _classCallCheck(this, Scheme);

    return _possibleConstructorReturn(this, (Scheme.__proto__ || Object.getPrototypeOf(Scheme)).apply(this, arguments));
  }

  return Scheme;
}(_enumify.Enum);

Scheme.initEnum({
  PLAYREADY_CENC: "drm.PLAYREADY_CENC",
  WIDEVINE_CENC: "drm.WIDEVINE_CENC",
  FAIRPLAY: "fairplay.FAIRPLAY",
  PLAYREADY: "playReady.PLAYREADY",
  WIDEVINE: "widevine.WIDEVINE"
});

var KalturaRuleActionType = exports.KalturaRuleActionType = function (_Enum2) {
  _inherits(KalturaRuleActionType, _Enum2);

  function KalturaRuleActionType() {
    _classCallCheck(this, KalturaRuleActionType);

    return _possibleConstructorReturn(this, (KalturaRuleActionType.__proto__ || Object.getPrototypeOf(KalturaRuleActionType)).apply(this, arguments));
  }

  return KalturaRuleActionType;
}(_enumify.Enum);

KalturaRuleActionType.initEnum({
  DRM_POLICY: "drm.DRM_POLICY",
  BLOCK: 1,
  PREVIEW: 2,
  LIMIT_FLAVORS: 3,
  ADD_TO_STORAGE: 4,
  LIMIT_DELIVERY_PROFILES: 5,
  SERVE_FROM_REMOTE_SERVER: 6,
  REQUEST_HOST_REGEX: 7,
  LIMIT_THUMBNAIL_CAPTURE: 8
});

var Status = exports.Status = function (_Enum3) {
  _inherits(Status, _Enum3);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).apply(this, arguments));
  }

  return Status;
}(_enumify.Enum);

Status.initEnum({
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

var MetadataObjectType = exports.MetadataObjectType = function (_Enum4) {
  _inherits(MetadataObjectType, _Enum4);

  function MetadataObjectType() {
    _classCallCheck(this, MetadataObjectType);

    return _possibleConstructorReturn(this, (MetadataObjectType.__proto__ || Object.getPrototypeOf(MetadataObjectType)).apply(this, arguments));
  }

  return MetadataObjectType;
}(_enumify.Enum);

MetadataObjectType.initEnum({
  AD_CUE_POINT: "adCuePointMetadata.AdCuePoint",
  ANNOTATION: "annotationMetadata.Annotation",
  CODE_CUE_POINT: "codeCuePointMetadata.CodeCuePoint",
  THUMB_CUE_POINT: "thumbCuePointMetadata.thumbCuePoint",
  ENTRY: 1,
  CATEGORY: 2,
  USER: 3,
  PARTNER: 4,
  DYNAMIC_OBJECT: 5
});

var MetadataStatus = exports.MetadataStatus = function (_Enum5) {
  _inherits(MetadataStatus, _Enum5);

  function MetadataStatus() {
    _classCallCheck(this, MetadataStatus);

    return _possibleConstructorReturn(this, (MetadataStatus.__proto__ || Object.getPrototypeOf(MetadataStatus)).apply(this, arguments));
  }

  return MetadataStatus;
}(_enumify.Enum);

MetadataStatus.initEnum({
  VALID: 1,
  INVALID: 2,
  DELETED: 3
});

var EntryStatus = exports.EntryStatus = function (_Enum6) {
  _inherits(EntryStatus, _Enum6);

  function EntryStatus() {
    _classCallCheck(this, EntryStatus);

    return _possibleConstructorReturn(this, (EntryStatus.__proto__ || Object.getPrototypeOf(EntryStatus)).apply(this, arguments));
  }

  return EntryStatus;
}(_enumify.Enum);

EntryStatus.initEnum({
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
});

var EntryModerationStatus = exports.EntryModerationStatus = function (_Enum7) {
  _inherits(EntryModerationStatus, _Enum7);

  function EntryModerationStatus() {
    _classCallCheck(this, EntryModerationStatus);

    return _possibleConstructorReturn(this, (EntryModerationStatus.__proto__ || Object.getPrototypeOf(EntryModerationStatus)).apply(this, arguments));
  }

  return EntryModerationStatus;
}(_enumify.Enum);

EntryModerationStatus.initEnum({
  PENDING_MODERATION: 1,
  APPROVED: 2,
  REJECTED: 3,
  FLAGGED_FOR_REVIEW: 4,
  MODERATE: 5,
  AUTO_APPROVED: 6
});

var EntryType = exports.EntryType = function (_Enum8) {
  _inherits(EntryType, _Enum8);

  function EntryType() {
    _classCallCheck(this, EntryType);

    return _possibleConstructorReturn(this, (EntryType.__proto__ || Object.getPrototypeOf(EntryType)).apply(this, arguments));
  }

  return EntryType;
}(_enumify.Enum);

EntryType.initEnum({
  AUTOMATIC: { value: -1 },
  EXTERNAL_MEDIA: { value: "externalMedia.externalMedia" },
  MEDIA_CLIP: { value: 1 },
  MIX: { value: 2 },
  PLAYLIST: { value: 5 },
  DATA: { value: 6 },
  LIVE_STREAM: { value: 7 },
  LIVE_CHANNEL: { value: 8 },
  DOCUMENT: { value: 10 }
});

var MediaType = exports.MediaType = function (_Enum9) {
  _inherits(MediaType, _Enum9);

  function MediaType() {
    _classCallCheck(this, MediaType);

    return _possibleConstructorReturn(this, (MediaType.__proto__ || Object.getPrototypeOf(MediaType)).apply(this, arguments));
  }

  return MediaType;
}(_enumify.Enum);

MediaType.initEnum({
  VIDEO: { value: 1 },
  IMAGE: { value: 2 },
  AUDIO: { value: 5 },
  LIVE_STREAM_FLASH: { value: 201 },
  LIVE_STREAM_WINDOWS_MEDIA: { value: 202 },
  LIVE_STREAM_REAL_MEDIA: { value: 203 },
  LIVE_STREAM_QUICKTIME: { value: 204 }
});

var MediaEntryType = exports.MediaEntryType = function (_Enum10) {
  _inherits(MediaEntryType, _Enum10);

  function MediaEntryType() {
    _classCallCheck(this, MediaEntryType);

    return _possibleConstructorReturn(this, (MediaEntryType.__proto__ || Object.getPrototypeOf(MediaEntryType)).apply(this, arguments));
  }

  return MediaEntryType;
}(_enumify.Enum);

MediaEntryType.initEnum(['Vod', 'Live', 'Image', 'Audio', 'Unknown']);

var UIConfType = exports.UIConfType = function (_Enum11) {
  _inherits(UIConfType, _Enum11);

  function UIConfType() {
    _classCallCheck(this, UIConfType);

    return _possibleConstructorReturn(this, (UIConfType.__proto__ || Object.getPrototypeOf(UIConfType)).apply(this, arguments));
  }

  return UIConfType;
}(_enumify.Enum);

UIConfType.initEnum({
  PLAYER: 1,
  CONTRIBUTION_WIZARD: 2,
  SIMPLE_EDITOR: 3,
  ADVANCED_EDITOR: 4,
  PLAYLIST: 5,
  APP_STUDIO: 6,
  KRECORD: 7,
  PLAYER_V3: 8,
  KMC_ACCOUNT: 9,
  KMC_ANALYTICS: 10,
  KMC_CONTENT: 11,
  KMC_DASHBOARD: 12,
  KMC_LOGIN: 13,
  PLAYER_SL: 14,
  CLIENTSIDE_ENCODER: 15,
  KMC_GENERAL: 16,
  KMC_ROLES_AND_PERMISSIONS: 17,
  CLIPPER: 18,
  KSR: 19,
  KUPLOAD: 20,
  WEBCASTING: 21
});

var UIConfCreationMode = exports.UIConfCreationMode = function (_Enum12) {
  _inherits(UIConfCreationMode, _Enum12);

  function UIConfCreationMode() {
    _classCallCheck(this, UIConfCreationMode);

    return _possibleConstructorReturn(this, (UIConfCreationMode.__proto__ || Object.getPrototypeOf(UIConfCreationMode)).apply(this, arguments));
  }

  return UIConfCreationMode;
}(_enumify.Enum);

UIConfCreationMode.initEnum({
  WIZARD: 2,
  ADVANCED: 3
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiRequestBuilder = __webpack_require__(6);

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
     * @param {string} ks The ks
     * @param {string} partnerId The partner ID
     * @returns {MultiRequestBuilder} The multi request builder
     * @static
     */
    value: function getMultirequest(ks, partnerId) {
      var ovpParams = config.serviceParams;
      Object.assign(ovpParams, { ks: ks });
      if (partnerId) {
        Object.assign(ovpParams, { partnerId: partnerId });
      }
      var multiReq = new _multiRequestBuilder2.default();
      multiReq.method = "POST";
      multiReq.service = SERVICE_NAME;
      multiReq.baseUrl = config.beUrl;
      multiReq.params = ovpParams;
      return multiReq;
    }
  }]);

  return OvpService;
}();

exports.default = OvpService;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOG_LEVEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsLogger = __webpack_require__(8);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiRequestResult = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _baseServiceResult = __webpack_require__(4);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _logger = __webpack_require__(5);

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

  /**
   * @constructor
   */
  function MultiRequestBuilder() {
    _classCallCheck(this, MultiRequestBuilder);

    var _this = _possibleConstructorReturn(this, (MultiRequestBuilder.__proto__ || Object.getPrototypeOf(MultiRequestBuilder)).call(this));

    _this.requests = [];
    return _this;
  }

  /**
   * Adds request to requests array
   * @function add
   * @param {RequestBuilder} request The request
   * @returns {MultiRequestBuilder} The multiRequest
   */


  /**
   * @member - Array of requests
   * @type {Array<RequestBuilder>}
   */


  _createClass(MultiRequestBuilder, [{
    key: 'add',
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
  response.forEach(function (result) {
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaSource = __webpack_require__(12);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

var _mediaFormat = __webpack_require__(11);

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(2);

var _mediaSources = __webpack_require__(7);

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
 * @member - entry type
 * @type {MediaEntryType}
 */

/**
 * @member - entry sources
 * @type {MediaSources}
 */
function MediaEntry() {
  _classCallCheck(this, MediaEntry);

  this.metaData = new Map();
  this.type = _enums.MediaEntryType.Unknown;
}
/**
 * @member - entry metadata
 * @type {Map<string,string>}
 */

/**
 * @member - entry duration
 * @type {number}
 */


/**
 * @member - entry ID
 * @type {string}
 */
;

exports.default = MediaEntry;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(2);

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
 */


/**
 * @member - license URL
 * @type {string}
 */
function Drm(licenseUrl, scheme) {
  _classCallCheck(this, Drm);

  this.licenseUrl = licenseUrl;
  this.scheme = scheme;
}
/**
 * @member - drm scheme
 * @type {Scheme}
 */
;

exports.default = Drm;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaFormat = undefined;

var _enumify = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaFormat = exports.MediaFormat = function (_Enum) {
  _inherits(MediaFormat, _Enum);

  function MediaFormat() {
    _classCallCheck(this, MediaFormat);

    return _possibleConstructorReturn(this, (MediaFormat.__proto__ || Object.getPrototypeOf(MediaFormat)).apply(this, arguments));
  }

  return MediaFormat;
}(_enumify.Enum);

MediaFormat.initEnum({
  dash: {
    get mimeType() {
      return "application/dash+xml";
    },
    get pathExt() {
      return "mpd";
    }
  },
  hls: {
    get mimeType() {
      return "application/x-mpegURL";
    },
    get pathExt() {
      return "m3u8";
    }
  },
  wvm: {
    get mimeType() {
      return "video/wvm";
    },
    get pathExt() {
      return "wvm";
    }
  },
  mp4: {
    get mimeType() {
      return "video/mp4";
    },
    get pathExt() {
      return "mp4";
    }
  },
  mp3: {
    get mimeType() {
      return "audio/mpeg";
    },
    get pathExt() {
      return "mp3";
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drm = __webpack_require__(10);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ovp BE FlavorAsset
 * @classdesc
 */
var KalturaFlavorAsset =

/**
 * @constructor
 * @param {Object} data The json response
 */

/**
 * @member - The language of the flavor asset
 * @type {Status}
 */

/**
 *@member - The video codec
 * @type {boolean}
 */

/**
 * @member - True if this Flavor Asset is playable in KDP
 * @type {boolean}
 */

/**
 * @member - The frame rate (in FPS) of the Flavor Asset
 * @type {number}
 */

/**
 * @member - The width of the Flavor Asset
 * @type {number}
 */

/**
 * @member -The file extension
 * @type {string}
 */

/**
 * @member - The ID of the Flavor Asset
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
}
/**
 * @member - The label of the flavor asset
 * @type {string}
 */

/**
 * @member - The status of the Flavor Asset
 * @type {string}
 */

/**
 * @member - The container format
 * @type {boolean}
 */

/**
 * @member - True if this Flavor Asset is the original source
 * @type {number}
 */

/**
 * @member - The height of the Flavor Asset
 * @type {number}
 */

/**
 * @member - The overall bitrate (in KBits) of the Flavor Asset
 *  @type {string}
 */

/**
 * @member -The Flavor Params used to create this Flavor Asset
 * @type {string}
 */
;

exports.default = KalturaFlavorAsset;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ovp BE MediaEntry
 * @classdesc
 */
var KalturaMediaEntry =

/**
 * @constructor
 * @param {Object} entry The json response
 */

/**
 * @member - The type of the entry, this is auto filled by the derived entry object
 * @type {EntryType}
 */

/**
 * @member - Comma separated flavor params ids that exists for this media entry
 * @type {string}
 */

/**
 * @member - Entry name (Min 1 chars)
 * @type {string}
 */
function KalturaMediaEntry(entry) {
  _classCallCheck(this, KalturaMediaEntry);

  this.id = entry.id;
  this.name = entry.name;
  this.dataUrl = entry.dataUrl;
  this.type = entry.type;
  this.entryType = entry.mediaType;
  this.flavorParamsIds = entry.flavorParamsIds;
  this.duration = entry.duration;
}
/**
 * @member - The type of the entry, this is auto filled by the derived entry object (Image, Audio etc.)
 * @type {MediaType}
 */

/**
 * @member - The entry duration
 * @type {number}
 */

/**
 * @member - The URL used for playback. This is not the download URL.
 * @type {string}
 */

/**
 * @member - The entry id
 * @type {string}
 */
;

exports.default = KalturaMediaEntry;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(4);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _kalturaMetadata = __webpack_require__(30);

var _kalturaMetadata2 = _interopRequireDefault(_kalturaMetadata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ovp BE Metadata list response
 * @classdesc
 */
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
  /**
   * @member -The mata data array
   * @type {Array<KalturaMetadata>}
   */


  return KalturaMetadataListResponse;
}(_baseServiceResult2.default);

exports.default = KalturaMetadataListResponse;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(4);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _kalturaAccessControlMessage = __webpack_require__(27);

var _kalturaAccessControlMessage2 = _interopRequireDefault(_kalturaAccessControlMessage);

var _kalturaPlaybackSource = __webpack_require__(17);

var _kalturaPlaybackSource2 = _interopRequireDefault(_kalturaPlaybackSource);

var _kalturaRuleAction = __webpack_require__(31);

var _kalturaRuleAction2 = _interopRequireDefault(_kalturaRuleAction);

var _kalturaFlavorAsset = __webpack_require__(13);

var _kalturaFlavorAsset2 = _interopRequireDefault(_kalturaFlavorAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ovp BE playback context response
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kalturaDrmPlaybackPluginData = __webpack_require__(29);

var _kalturaDrmPlaybackPluginData2 = _interopRequireDefault(_kalturaDrmPlaybackPluginData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ovp BE playback source
 * @classdesc
 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copyProperties = copyProperties;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INITIALIZED = Symbol();

/**
 * This is an abstract class that is not intended to be
 * used directly. Extend it to turn your class into an enum
 * (initialization is performed via `MyClass.initEnum()`).
 */

var Enum = exports.Enum = function () {
    /**
     * `initEnum()` closes the class. Then calling this constructor
     * throws an exception.
     * 
     * If your subclass has a constructor then you can control
     * what properties are added to `this` via the argument you
     * pass to `super()`. No arguments are fine, too.
     */

    function Enum() {
        var instanceProperties = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

        _classCallCheck(this, Enum);

        // new.target would be better than this.constructor,
        // but isn’t supported by Babel
        if ({}.hasOwnProperty.call(this.constructor, INITIALIZED)) {
            throw new Error('Enum classes can’t be instantiated');
        }
        if ((typeof instanceProperties === 'undefined' ? 'undefined' : _typeof(instanceProperties)) === 'object' && instanceProperties !== null) {
            copyProperties(this, instanceProperties);
        }
    }
    /**
     * Set up the enum, close the class.
     * 
     * @param arg Either an object whose properties provide the names
     * and values (which must be mutable objects) of the enum constants.
     * Or an Array whose elements are used as the names of the enum constants
     * The values are create by instantiating the current class.
     */

    _createClass(Enum, [{
        key: 'toString',

        /**
         * Default `toString()` method for enum constant.
         */
        value: function toString() {
            return this.constructor.name + '.' + this.name;
        }
    }], [{
        key: 'initEnum',
        value: function initEnum(arg) {
            Object.defineProperty(this, 'enumValues', {
                value: [],
                configurable: false,
                writable: false,
                enumerable: true
            });
            if (Array.isArray(arg)) {
                this._enumValuesFromArray(arg);
            } else {
                this._enumValuesFromObject(arg);
            }
            Object.freeze(this.enumValues);
            this[INITIALIZED] = true;
            return this;
        }
    }, {
        key: '_enumValuesFromArray',
        value: function _enumValuesFromArray(arr) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    this._pushEnumValue(new this(), key);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: '_enumValuesFromObject',
        value: function _enumValuesFromObject(obj) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var key = _step2.value;

                    var value = new this(obj[key]);
                    this._pushEnumValue(value, key);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: '_pushEnumValue',
        value: function _pushEnumValue(enumValue, name) {
            enumValue.name = name;
            enumValue.ordinal = this.enumValues.length;
            Object.defineProperty(this, name, {
                value: enumValue,
                configurable: false,
                writable: false,
                enumerable: true
            });
            this.enumValues.push(enumValue);
        }

        /**
         * Given the name of an enum constant, return its value.
         */

    }, {
        key: 'enumValueOf',
        value: function enumValueOf(name) {
            return this.enumValues.find(function (x) {
                return x.name === name;
            });
        }

        /**
         * Make enum classes iterable
         */

    }, {
        key: Symbol.iterator,
        value: function value() {
            return this.enumValues[Symbol.iterator]();
        }
    }]);

    return Enum;
}();

function copyProperties(target, source) {
    // Ideally, we’d use Reflect.ownKeys() here,
    // but I don’t want to depend on a polyfill
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = Object.getOwnPropertyNames(source)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var key = _step3.value;

            var desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return target;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(3);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _multiRequestBuilder = __webpack_require__(6);

var _multiRequestBuilder2 = _interopRequireDefault(_multiRequestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Data loaders manager
 * @classdesc
 */
var DataLoaderManager = function () {

  /**
   * @constructor
   * @param {string} partnerID Then partner ID
   * @param {string} ks The ks
   */

  /**
   * @member - Lodaers response map index
   * @type {Map<string,Array<number>>}
   * @private
   * @static
   */
  function DataLoaderManager(partnerID) {
    var ks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, DataLoaderManager);

    this._loaders = new Map();

    this._multiRequest = _ovpService2.default.getMultirequest(ks, partnerID);
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
        this._loaders.set(loader.name, execution_loader);
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
        DataLoaderManager._loadersResponseMap.set(loader.name, executionLoaderResponseMap);
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

var _baseEntryService = __webpack_require__(33);

var _baseEntryService2 = _interopRequireDefault(_baseEntryService);

var _metaDataService = __webpack_require__(34);

var _metaDataService2 = _interopRequireDefault(_metaDataService);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _kalturaPlaybackContext = __webpack_require__(16);

var _kalturaPlaybackContext2 = _interopRequireDefault(_kalturaPlaybackContext);

var _kalturaMetadataListResponse = __webpack_require__(15);

var _kalturaMetadataListResponse2 = _interopRequireDefault(_kalturaMetadataListResponse);

var _kalturaBaseEntryListResponse = __webpack_require__(28);

var _kalturaBaseEntryListResponse2 = _interopRequireDefault(_kalturaBaseEntryListResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();

/**
 * Media entry loader
 * @classdesc
 */

var MediaEntryLoader = function () {
  _createClass(MediaEntryLoader, null, [{
    key: 'name',
    get: function get() {
      return "media";
    }
  }]);

  /**
   * @constructor
   * @param {Object} params loader params
   */
  function MediaEntryLoader(params) {
    _classCallCheck(this, MediaEntryLoader);

    this._response = {};

    this.requests = this.buildRequests(params);
    this._entryId = params.entryId;
  }

  _createClass(MediaEntryLoader, [{
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
      requests.push(_baseEntryService2.default.list(config.beUrl, params.ks, params.entryId));
      requests.push(_baseEntryService2.default.getPlaybackContext(config.beUrl, params.ks, params.entryId));
      requests.push(_metaDataService2.default.list(config.beUrl, params.ks, params.entryId));
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

  return MediaEntryLoader;
}();

exports.default = MediaEntryLoader;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sessionService = __webpack_require__(35);

var _sessionService2 = _interopRequireDefault(_sessionService);

var _config = __webpack_require__(1);

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
    key: 'name',
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
      requests.push(_sessionService2.default.anonymousSession(config.beUrl, params.partnerId));
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uiConfService = __webpack_require__(37);

var _uiConfService2 = _interopRequireDefault(_uiConfService);

var _kalturaUiConfResponse = __webpack_require__(32);

var _kalturaUiConfResponse2 = _interopRequireDefault(_kalturaUiConfResponse);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();

var UiConfigLoader = function () {
  _createClass(UiConfigLoader, null, [{
    key: 'name',
    get: function get() {
      return "uiConf";
    }

    /**
     * @member - uiConf ID
     * @type {number}
     * @private
     */

  }]);

  /**
   * @constructor
   * @param {Object} params loader params
   */
  function UiConfigLoader(params) {
    _classCallCheck(this, UiConfigLoader);

    this._response = {};

    this.requests = this.buildRequests(params);
    this._uiConfId = params.uiConfId;
  }

  _createClass(UiConfigLoader, [{
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
      requests.push(_uiConfService2.default.get(config.beUrl, params.ks, params.uiConfId));
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
      return !!this._uiConfId;
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
      this._response.uiConf = new _kalturaUiConfResponse2.default(response[0].data);
    },
    get: function get() {
      if (this._response != null && this._response.uiConf != null && this._response.uiConf.config != null) try {
        return JSON.parse(this._response.uiConf.config).plugins;
      } catch (err) {
        return null;
      } else return null;
    }
  }]);

  return UiConfigLoader;
}();

exports.default = UiConfigLoader;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kalturaMediaEntry = __webpack_require__(14);

var _kalturaMediaEntry2 = _interopRequireDefault(_kalturaMediaEntry);

var _kalturaPlaybackContext = __webpack_require__(16);

var _kalturaPlaybackContext2 = _interopRequireDefault(_kalturaPlaybackContext);

var _kalturaPlaybackSource = __webpack_require__(17);

var _kalturaPlaybackSource2 = _interopRequireDefault(_kalturaPlaybackSource);

var _kalturaFlavorAsset = __webpack_require__(13);

var _kalturaFlavorAsset2 = _interopRequireDefault(_kalturaFlavorAsset);

var _kalturaMetadataListResponse = __webpack_require__(15);

var _kalturaMetadataListResponse2 = _interopRequireDefault(_kalturaMetadataListResponse);

var _playSourceUrlBuilder = __webpack_require__(26);

var _playSourceUrlBuilder2 = _interopRequireDefault(_playSourceUrlBuilder);

var _xmlParser = __webpack_require__(38);

var _xmlParser2 = _interopRequireDefault(_xmlParser);

var _enums = __webpack_require__(2);

var _logger = __webpack_require__(5);

var _logger2 = _interopRequireDefault(_logger);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _mediaFormat = __webpack_require__(11);

var _mediaEntry = __webpack_require__(9);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

var _drm = __webpack_require__(10);

var _drm2 = _interopRequireDefault(_drm);

var _mediaSource = __webpack_require__(12);

var _mediaSource2 = _interopRequireDefault(_mediaSource);

var _mediaSources = __webpack_require__(7);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();
/**
 * @constant
 */
var logger = _logger2.default.get("OvpProvider");

/**
 * @constant
 * @type {Map<string, MediaFormat>}
 */
var SUPPORTED_FORMATS = new Map([["mpegdash", _mediaFormat.MediaFormat.dash], ["applehttp", _mediaFormat.MediaFormat.hls], ["url", _mediaFormat.MediaFormat.mp4]]);

/**
 * Ovp provider parser
 * @classdesc
 */

var ProviderParser = function () {
  function ProviderParser() {
    _classCallCheck(this, ProviderParser);
  }

  _createClass(ProviderParser, null, [{
    key: 'getMediaEntry',


    /**
     * Returns parsed media entry by given OVP response objects
     * @function getMediaEntry
     * @param {string} ks The ks
     * @param {number} partnerID The partner ID
     * @param {number} uiConfId The uiConf ID
     * @param {any} mediaEntryResponse The media entry response
     * @returns {MediaEntry} The media entry
     * @static
     * @public
     */
    value: function getMediaEntry(ks, partnerID, uiConfId, mediaEntryResponse) {
      var mediaEntry = new _mediaEntry2.default();
      var entry = mediaEntryResponse.entry;
      var playbackContext = mediaEntryResponse.playBackContextResult;
      var metadataList = mediaEntryResponse.metadataListResult;
      var kalturaSources = playbackContext.sources;
      var sources = ProviderParser._getParsedSources(kalturaSources, ks, partnerID, uiConfId, entry, playbackContext);

      mediaEntry.sources = sources;

      var metadata = this._parseMetaData(metadataList);
      mediaEntry.metaData = metadata;
      mediaEntry.id = entry.id;
      mediaEntry.duration = entry.duration;

      var type = _enums.MediaEntryType.Unknown;

      switch (entry.entryType) {
        case _enums.MediaType.IMAGE.value:
          type = _enums.MediaEntryType.Image;
          break;
        case _enums.MediaType.AUDIO.value:
          type = _enums.MediaEntryType.Audio;
          break;
        default:
          switch (entry.type) {
            case _enums.EntryType.MEDIA_CLIP.value:
              type = _enums.MediaEntryType.Vod;
              break;
            case _enums.EntryType.LIVE_STREAM.value:
            case _enums.EntryType.LIVE_CHANNEL.value:
              type = _enums.MediaEntryType.Live;
              break;
            default:
              type = _enums.MediaEntryType.Unknown;
          }
      }
      mediaEntry.type = type;

      return mediaEntry;
    }
  }, {
    key: '_getParsedSources',
    value: function _getParsedSources(kalturaSources, ks, partnerID, uiConfId, entry, playbackContext) {
      var sources = new _mediaSources2.default();

      var parseAdaptiveSources = function parseAdaptiveSources() {
        kalturaSources.forEach(function (source) {
          if (ProviderParser._isProgressiveSource(source) === false) {
            var parsedSource = ProviderParser._parseAdaptiveSource(source, ks, partnerID, uiConfId, entry, playbackContext);
            var sourceFormat = SUPPORTED_FORMATS.get(source.format);
            sources.map(parsedSource, sourceFormat);
          }
        });
      };

      var parseProgressiveSources = function parseProgressiveSources() {
        var progressiveSource = kalturaSources.find(function (source) {
          return ProviderParser._isProgressiveSource(source);
        });
        sources.progressive = ProviderParser._parseProgressiveSources(progressiveSource, playbackContext.flavorAssets, ks, partnerID, uiConfId, entry);
      };

      if (kalturaSources && kalturaSources.length > 0) {
        parseAdaptiveSources();
        parseProgressiveSources();
      }

      return sources;
    }
  }, {
    key: '_isProgressiveSource',
    value: function _isProgressiveSource(source) {
      var sourceFormat = SUPPORTED_FORMATS.get(source.format);
      return sourceFormat && sourceFormat.name === 'mp4';
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
     * @private
     */

  }, {
    key: '_parseAdaptiveSource',
    value: function _parseAdaptiveSource(source, ks, partnerID, uiConfId, entry, playbackContext) {
      var playUrl = "";
      var mediaFormat = SUPPORTED_FORMATS.get(source.format);
      var mediaSource = new _mediaSource2.default();
      // in case playbackSource doesn't have flavors we don't need to build the url and we'll use the provided one.
      if (source.hasFlavorIds()) {
        var extension = "";
        if (!mediaFormat) {
          var flavorIdsArr = source.flavorIds.split(",");
          var flavors = playbackContext.flavorAssets.filter(function (flavor) {
            return flavorIdsArr.indexOf(flavor.id) != -1;
          });
          if (flavors && flavors.length > 0) {
            extension = flavors[0].fileExt;
          }
        } else {
          extension = mediaFormat.pathExt;
          mediaSource.mimetype = mediaFormat.mimeType;
        }

        playUrl = _playSourceUrlBuilder2.default.build({
          entryId: entry.id,
          flavorIds: source.flavorIds,
          format: source.format,
          ks: ks,
          partnerId: partnerID,
          uiConfId: uiConfId,
          extension: extension,
          protocol: source.getProtocol(this._getBaseProtocol())
        });
      } else {
        playUrl = source.url;
      }

      if (playUrl == "") {
        logger.error('failed to create play url from source, discarding source: (' + entry.id + '_' + source.deliveryProfileId + '), ' + source.format + '.');
        return mediaSource;
      }

      mediaSource.url = playUrl;
      mediaSource.id = entry.id + "_" + source.deliveryProfileId + "," + source.format;
      if (source.hasDrmData()) {
        var drmParams = [];
        source.drm.forEach(function (drm) {
          drmParams.push(new _drm2.default(drm.licenseURL, drm.scheme));
        });
        mediaSource.drmData = drmParams;
      }
      return mediaSource;
    }

    /**
     * Ovp metadata parser
     * @function _parseMetaData
     * @param {KalturaMetadataListResponse} metadataList The metadata list
     * @returns {Map<string,string>} Parsed metadata
     * @static
     * @private
     */

  }, {
    key: '_parseMetaData',
    value: function _parseMetaData(metadataList) {
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
  }, {
    key: '_parseProgressiveSources',
    value: function _parseProgressiveSources(kalturaSource, flavorAssets, ks, partnerID, uiConfId, entry) {
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
              entryId: entry.id,
              flavorIds: flavor.id,
              format: format,
              ks: ks,
              partnerId: partnerID,
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
  }, {
    key: '_getBaseProtocol',
    value: function _getBaseProtocol() {
      var splittedUrl = config.baseUrl.split("/");
      var baseProtocol = void 0;
      if (splittedUrl && splittedUrl.length > 0) {
        baseProtocol = splittedUrl[0].substring(0, splittedUrl[0].length - 1);
      } else {
        baseProtocol = "http";
      }
      return baseProtocol;
    }
  }]);

  return ProviderParser;
}();

exports.default = ProviderParser;

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OvpProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(5);

var _logger2 = _interopRequireDefault(_logger);

var _providerParser = __webpack_require__(23);

var _providerParser2 = _interopRequireDefault(_providerParser);

var _dataLoaderManager = __webpack_require__(19);

var _dataLoaderManager2 = _interopRequireDefault(_dataLoaderManager);

var _mediaEntryLoader = __webpack_require__(20);

var _mediaEntryLoader2 = _interopRequireDefault(_mediaEntryLoader);

var _sessionLoader = __webpack_require__(21);

var _sessionLoader2 = _interopRequireDefault(_sessionLoader);

var _uiConfigLoader = __webpack_require__(22);

var _uiConfigLoader2 = _interopRequireDefault(_uiConfigLoader);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _mediaEntry = __webpack_require__(9);

var _mediaEntry2 = _interopRequireDefault(_mediaEntry);

var _mediaSources = __webpack_require__(7);

var _mediaSources2 = _interopRequireDefault(_mediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @constant
 */
var logger = _logger2.default.get("OvpProvider");

/**
 * Ovp provider
 * @classdesc
 */
var OvpProvider = exports.OvpProvider = function () {

  /**
   * @constructor
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
   * @member - partner ID
   * @type {number}
   */
  function OvpProvider(partnerID) {
    var ks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var config = arguments[2];

    _classCallCheck(this, OvpProvider);

    this.partnerID = partnerID;
    this.ks = ks;
    this._isAnonymous = !this.ks;
    _config2.default.set(config);
  }

  /**
   * Returns player json configuration
   * @function getConfig
   * @param {string} entryId The entry ID
   * @param {number} uiConfId The uiConf ID
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
   * @member - ks
   * @type {string}
   */


  _createClass(OvpProvider, [{
    key: 'getConfig',
    value: function getConfig(entryId, uiConfId) {
      var _this = this;

      if (uiConfId != null) {
        this._uiConfId = uiConfId;
      }
      this._dataLoader = new _dataLoaderManager2.default(this.partnerID, this.ks);
      return new Promise(function (resolve, reject) {
        if (_this.validateParams(entryId, uiConfId)) {
          var ks = _this.ks;
          if (_this._isAnonymous) {
            ks = "{1:result:ks}";
            _this._dataLoader.add(_sessionLoader2.default, { partnerId: _this.partnerID });
          }
          _this._dataLoader.add(_mediaEntryLoader2.default, { entryId: entryId, ks: ks });
          _this._dataLoader.add(_uiConfigLoader2.default, { uiConfId: uiConfId, ks: ks });
          _this._dataLoader.fetchData().then(function (response) {
            resolve(_this.parseDataFromResponse(response));
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
        session: {
          partnerID: this.partnerID,
          uiConfID: this._uiConfId
        },
        sources: new _mediaSources2.default(),
        duration: 0,
        type: "Unknown",
        metadata: {},
        plugins: {}
      };
      if (data != null) {
        if (data.has(_sessionLoader2.default.name)) {
          var sessionLoader = data.get(_sessionLoader2.default.name);
          if (sessionLoader != null && sessionLoader.response != null) {
            this.ks = sessionLoader.response;
            this._isAnonymous = !this.ks;
            config.session.ks = this.ks;
          }
        }
        if (data.has(_uiConfigLoader2.default.name)) {
          var uiConfLoader = data.get(_uiConfigLoader2.default.name);
          var pluginsJson = {};
          if (uiConfLoader != null) {
            pluginsJson = uiConfLoader.response;
          }
          config.plugins = pluginsJson;
        }
        if (data.has(_mediaEntryLoader2.default.name)) {
          var mediaLoader = data.get(_mediaEntryLoader2.default.name);
          if (mediaLoader != null && mediaLoader.response != null) {
            var mediaEntry = _providerParser2.default.getMediaEntry(this.ks, this.partnerID, this._uiConfId, mediaLoader.response);
            config.id = mediaEntry.id;
            config.sources = mediaEntry.sources;
            config.duration = mediaEntry.duration;
            config.type = mediaEntry.type.name;
            config.metadata = mediaEntry.metaData;
          }
        }
      }
      logger.debug("Data parsing finished", config);
      return config;
    }

    /**
     * Parameters validation function
     * @param {string} entryId The entry ID
     * @param {number} uiConfId The uiConfID
     * @returns {boolean} Is valid params
     */

  }, {
    key: 'validateParams',
    value: function validateParams(entryId, uiConfId) {
      return !!entryId || !!uiConfId;
    }
  }]);

  return OvpProvider;
}();

exports.default = OvpProvider;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = _config2.default.get();

/**
 * Media source url builder
 * @classdesc
 */

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
      var baseUrl = config.baseUrl;
      var partnerId = urlParams.partnerId;
      var entryId = urlParams.entryId;
      var ks = urlParams.ks;
      var uiConfId = urlParams.uiConfId;
      var format = urlParams.format;
      var protocol = urlParams.protocol;
      var extension = urlParams.extension;
      var flavorIds = urlParams.flavorIds;

      if (baseUrl == "" && partnerId == "" && entryId == "" && extension == "" && format == "") {
        return "";
      }

      var playUrl = baseUrl;
      if (!PlaySourceUrlBuilder.endsWith(baseUrl, "/")) {
        playUrl += "/";
      }
      playUrl += "p/" + partnerId + "/sp/" + partnerId + "00" + "/playManifest/entryId/" + entryId + "/protocol/" + protocol + "/format/" + format;

      if (flavorIds != "") {
        playUrl += "/flavorIds/" + flavorIds;
      } else if (uiConfId != "") {
        playUrl += "/uiConfId/" + uiConfId;
      }

      if (this.ks != "") {
        playUrl += "/ks/" + ks;
      }

      playUrl += "/a." + extension;

      if (uiConfId && flavorIds != "") {
        playUrl += "?uiConfId=." + uiConfId;
      }

      return playUrl;
    }

    /**
     * Checks if given string end with search string
     * @param {string} string The given string
     * @param {string} searchString The string to search
     * @returns {boolean} Is  given string end with search string
     */

  }, {
    key: "endsWith",
    value: function endsWith(string, searchString) {
      if (typeof string !== 'string') {
        return false;
      }
      if (typeof searchString !== 'string') {
        return false;
      }

      return string.indexOf(searchString, string.length - searchString.length) != -1;
    }
  }]);

  return PlaySourceUrlBuilder;
}();

exports.default = PlaySourceUrlBuilder;

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(4);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _kalturaMediaEntry = __webpack_require__(14);

var _kalturaMediaEntry2 = _interopRequireDefault(_kalturaMediaEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ovp BE BaseEntryList service response
 * @classdesc
 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(2);

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
 * @member - The drm scheme
 * @type {Scheme}
 */
function KalturaDrmPlaybackPluginData(drm) {
  _classCallCheck(this, KalturaDrmPlaybackPluginData);

  this.scheme = drm.scheme;
  this.licenseURL = drm.licenseURL;
}

/**
 * @member - The license URL
 * @type {string}
 */
;

exports.default = KalturaDrmPlaybackPluginData;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ovp BE Metadata
 * @classdesc
 */
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
}
/**
 * @member - The Metadata xml - represented as XML string
 * @type {string}
 */
;

exports.default = KalturaMetadata;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = __webpack_require__(2);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseServiceResult = __webpack_require__(4);

var _baseServiceResult2 = _interopRequireDefault(_baseServiceResult);

var _enums = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ovp BE Ui config response
 * @classdesc
 */
var KalturaUiConfResponse = function (_ServiceResult) {
  _inherits(KalturaUiConfResponse, _ServiceResult);

  /**
   * @constructor
   * @param {Object} data The json response
   */

  /**
   * @member -plugins configuration represented as Json string
   * @type {string}
   */

  /**
   * @member -Name of the uiConf, this is not a primary key
   * @type {string}
   */
  function KalturaUiConfResponse(data) {
    _classCallCheck(this, KalturaUiConfResponse);

    var _this = _possibleConstructorReturn(this, (KalturaUiConfResponse.__proto__ || Object.getPrototypeOf(KalturaUiConfResponse)).call(this, data));

    if (!_this.hasError) {
      _this.name = data.name;

      _this.description = data.description;
      _this.objTypeAsString = data.objTypeAsString;
      _this.width = data.width;
      _this.height = data.height;
      _this.htmlParams = data.htmlParams;
      _this.swfUrl = data.swfUrl;
      _this.confFilePath = data.confFilePath;
      _this.confFile = data.confFile;
      _this.confFileFeatures = data.confFileFeatures;
      _this.config = data.config;
      _this.confVars = data.confVars;
      _this.useCdn = data.useCdn;
      _this.tags = data.tags;
      _this.swfUrlVersion = data.swfUrlVersion;
      _this.created = new Date(0);
      _this.created.setUTCSeconds(data.createdAt);
      _this.updated = new Date(0);
      _this.updated.setUTCSeconds(data.updatedAt);
      _this.html5Url = data.description;
      _this.version = data.description;
      _this.partnerTags = data.description;
      _this.objType = data.description;
      _this.creationMode = data.description;
    }
    return _this;
  }
  /**
   * @member -Name of the uiConf, this is not a primary key
   * @type {string}
   */


  return KalturaUiConfResponse;
}(_baseServiceResult2.default);

exports.default = KalturaUiConfResponse;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(3);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "baseEntry";

/**
 * Ovp BaseEntry service methods
 * @classdesc
 */

var BaseEntryService = function (_OvpService) {
  _inherits(BaseEntryService, _OvpService);

  function BaseEntryService() {
    _classCallCheck(this, BaseEntryService);

    return _possibleConstructorReturn(this, (BaseEntryService.__proto__ || Object.getPrototypeOf(BaseEntryService)).apply(this, arguments));
  }

  _createClass(BaseEntryService, null, [{
    key: 'getPlaybackContext',


    /**
     * Creates an instance of RequestBuilder for baseentry.getPlaybackContext
     * @function getPlaybackContext
     * @param {string} baseUrl The service base URL
     * @param {string} ks The ks
     * @param {string} entryId The entry ID
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function getPlaybackContext(baseUrl, ks, entryId) {
      var request = new _requestBuilder2.default();
      request.service = SERVICE_NAME;
      request.action = "getPlaybackContext";
      request.method = "POST";
      request.baseUrl = baseUrl;
      request.tag = "baseEntry-getPlaybackContext";
      var contextDataParams = { objectType: "KalturaContextDataParams", flavorTags: "all" };
      var params = { entryId: entryId, ks: ks, contextDataParams: contextDataParams };
      request.params = params;
      return request;
    }

    /**
     * Creates an instance of RequestBuilder for baseentry.list
     * @function list
     * @param {string} baseUrl The base URL
     * @param {string} ks The ks
     * @param {string} entryId The entry ID
     * @returns {RequestBuilder} The request builder
     * @static
     */

  }, {
    key: 'list',
    value: function list(baseUrl, ks, entryId) {
      var request = new _requestBuilder2.default();
      request.service = SERVICE_NAME;
      request.action = "list";
      request.method = "POST";
      request.baseUrl = baseUrl;
      request.tag = "list";
      request.params = BaseEntryService.getEntryListReqParams(entryId, ks);
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
        fields: "id,name,dataUrl,duration,msDuration,flavorParamsIds,mediaType,type,tags",
        type: 1
      };
      return { ks: ks, filter: filterParams, responseProfile: responseProfileParams };
    }
  }]);

  return BaseEntryService;
}(_ovpService2.default);

exports.default = BaseEntryService;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(3);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "metadata_metadata";

/**
 * Ovp metadata_metadata service methods
 * @classdesc
 */

var MetaDataService = function (_OvpService) {
  _inherits(MetaDataService, _OvpService);

  function MetaDataService() {
    _classCallCheck(this, MetaDataService);

    return _possibleConstructorReturn(this, (MetaDataService.__proto__ || Object.getPrototypeOf(MetaDataService)).apply(this, arguments));
  }

  _createClass(MetaDataService, null, [{
    key: 'list',

    /**
     * Creates an instance of RequestBuilder for metadata_metadata.list
     * @function getPlaybackContext
     * @param {string} baseUrl The service base URL
     * @param {string} ks The ks
     * @param {string} entryId The entry ID
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function list(baseUrl, ks, entryId) {
      var request = new _requestBuilder2.default();
      request.service = SERVICE_NAME;
      request.action = "list";
      request.method = "POST";
      request.baseUrl = baseUrl;
      request.tag = "metadata_metadata-list";
      var filter = { objectType: "KalturaMetadataFilter", objectIdEqual: entryId, metadataObjectTypeEqual: "1" };
      var params = { filter: filter, ks: ks };
      request.params = params;
      return request;
    }
  }]);

  return MetaDataService;
}(_ovpService2.default);

exports.default = MetaDataService;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(3);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "session";

/**
 * Ovp session service methods
 * @classdesc
 */

var SessionService = function (_OvpService) {
  _inherits(SessionService, _OvpService);

  function SessionService() {
    _classCallCheck(this, SessionService);

    return _possibleConstructorReturn(this, (SessionService.__proto__ || Object.getPrototypeOf(SessionService)).apply(this, arguments));
  }

  _createClass(SessionService, null, [{
    key: 'anonymousSession',

    /**
     * Creates an instance of RequestBuilder for session.startWidgetSession
     * @function anonymousSession
     * @param {string} baseUrl The service base URL
     * @param {string} partnerId The partner ID
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function anonymousSession(baseUrl, partnerId) {
      var request = new _requestBuilder2.default();
      request.service = SERVICE_NAME;
      request.action = "startWidgetSession";
      request.method = "POST";
      request.baseUrl = baseUrl;
      request.tag = "session-startWidget";
      request.params = { widgetId: "_" + partnerId };
      return request;
    }
  }]);

  return SessionService;
}(_ovpService2.default);

exports.default = SessionService;

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ovpService = __webpack_require__(3);

var _ovpService2 = _interopRequireDefault(_ovpService);

var _requestBuilder = __webpack_require__(0);

var _requestBuilder2 = _interopRequireDefault(_requestBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERVICE_NAME = "uiconf";

/**
 * Ovp uiconf service methods
 * @classdesc
 */

var UiConfService = function (_OvpService) {
  _inherits(UiConfService, _OvpService);

  function UiConfService() {
    _classCallCheck(this, UiConfService);

    return _possibleConstructorReturn(this, (UiConfService.__proto__ || Object.getPrototypeOf(UiConfService)).apply(this, arguments));
  }

  _createClass(UiConfService, null, [{
    key: 'get',

    /**
     * Creates an instance of RequestBuilder for uiconf.get
     * @function get
     * @param {string} baseUrl The service base URL
     * @param {string} ks The ks
     * @param {string} uiConfID The uiConf ID
     * @returns {RequestBuilder} The request builder
     * @static
     */
    value: function get(baseUrl, ks, uiConfID) {
      var request = new _requestBuilder2.default();
      request.service = SERVICE_NAME;
      request.action = "get";
      request.method = "POST";
      request.baseUrl = baseUrl;
      request.tag = "uiconf-get";
      var responseProfileParams = {
        fields: "config",
        type: 1
      };
      request.params = { id: uiConfID, responseProfile: responseProfileParams, ks: ks };
      return request;
    }
  }]);

  return UiConfService;
}(_ovpService2.default);

exports.default = UiConfService;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Xml parser
 * @classdesc
 */
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
      if (xml.nodeType == 1) {
        if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
          for (var j = 0; j < xml.attributes.length; j++) {
            var attribute = xml.attributes.item(j);
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType == 3) {
        obj = xml.nodeValue;
      }
      if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
          var item = xml.childNodes.item(i);
          var nodeName = item.nodeName;
          if (typeof obj[nodeName] == "undefined") {
            obj[nodeName] = this.xmlToJson(item);
          } else {
            if (typeof obj[nodeName].push == "undefined") {
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
//# sourceMappingURL=ovpProvider.js.map