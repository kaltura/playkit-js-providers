(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bookmark"] = factory();
	else
		root["playkit"] = root["playkit"] || {}, root["playkit"]["services"] = root["playkit"]["services"] || {}, root["playkit"]["services"]["bookmark"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./k-provider/ott/services/bookmark/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./k-provider/ott/services/bookmark/bookmark-service.js":
/*!**************************************************************!*\
  !*** ./k-provider/ott/services/bookmark/bookmark-service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OTTBookmarkService; });
/* harmony import */ var _ott_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ott-service */ "./k-provider/ott/services/ott-service.js");
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/request-builder */ "./util/request-builder.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./k-provider/ott/config.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/logger */ "./util/logger.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SERVICE_NAME = 'bookmark';

var OTTBookmarkService = /*#__PURE__*/function (_OTTService) {
  _inheritsLoose(OTTBookmarkService, _OTTService);

  function OTTBookmarkService() {
    return _OTTService.apply(this, arguments) || this;
  }

  /**
   * The BookmarkService logger
   * @member {OTTBookmarkService} _logger
   * @private
   * @static
   */

  /**
   * Creates an instance of RequestBuilder for session.startWidgetSession
   * @function add
   * @param {string} serviceUrl - The service url
   * @param {string} ks - The ks
   * @param {Object} bookmark - The udid
   * @returns {RequestBuilder} - The request builder
   * @static
   */
  OTTBookmarkService.add = function add(serviceUrl, ks, bookmark) {
    var headers = new Map();
    headers.set('Content-Type', 'application/json');
    var request = new _util_request_builder__WEBPACK_IMPORTED_MODULE_1__["default"](headers);
    request.service = SERVICE_NAME;
    request.action = 'add';
    request.method = 'POST';
    request.url = request.getUrl(serviceUrl);
    var playerData = {
      objectType: 'KalturaBookmarkPlayerData',
      action: bookmark.playerData.action,
      averageBitrate: bookmark.playerData.averageBitrate,
      totalBitrate: bookmark.playerData.totalBitrate,
      currentBitrate: bookmark.playerData.currentBitrate,
      fileId: bookmark.playerData.fileId
    };
    var bookmarkServiceParams = {
      objectType: 'KalturaBookmark',
      type: bookmark.type,
      id: bookmark.id,
      position: bookmark.position,
      playerData: playerData
    };
    if (bookmark.programId) bookmarkServiceParams.programId = bookmark.programId;

    this._logger.debug('bookmark added', bookmarkServiceParams);

    var config = _config__WEBPACK_IMPORTED_MODULE_2__["default"].get();
    var serviceParams = config.serviceParams;
    Object.assign(serviceParams, {
      bookmark: bookmarkServiceParams,
      ks: ks
    });
    request.params = JSON.stringify(serviceParams);
    return request;
  };

  return OTTBookmarkService;
}(_ott_service__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(OTTBookmarkService, "_logger", Object(_util_logger__WEBPACK_IMPORTED_MODULE_3__["default"])('BookmarkService'));



/***/ }),

/***/ "./k-provider/ott/services/bookmark/index.js":
/*!***************************************************!*\
  !*** ./k-provider/ott/services/bookmark/index.js ***!
  \***************************************************/
/*! exports provided: OTTBookmarkService, OTTConfiguration, RequestBuilder, NAME, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _util_request_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../util/request-builder */ "./util/request-builder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestBuilder", function() { return _util_request_builder__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./k-provider/ott/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OTTConfiguration", function() { return _config__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bookmark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmark-service */ "./k-provider/ott/services/bookmark/bookmark-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OTTBookmarkService", function() { return _bookmark_service__WEBPACK_IMPORTED_MODULE_2__["default"]; });




var NAME = "playkit-js-providers" + '-bookmark-service';
var VERSION = "2.30.0";


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
//# sourceMappingURL=playkit-bookmark-service.js.map