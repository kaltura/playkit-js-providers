!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bookmark=t():(e.playkit=e.playkit||{},e.playkit.services=e.playkit.services||{},e.playkit.services.bookmark=t())}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(2);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function e(t,r,n,o){void 0===o&&(o={}),this.severity=t,this.category=r,this.code=n,this.data=o,e._logger.error("Category:"+r+" | Code:"+n+" |",o)};o(a,"Severity",{RECOVERABLE:1,CRITICAL:2}),o(a,"Category",{NETWORK:1,SERVICE:2,PROVIDER:3}),o(a,"Code",{UNSUPPORTED_SCHEME:1e3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,BAD_SERVER_RESPONSE:1005,MULTIREQUEST_API_ERROR:1006,API_RESPONSE_MISMATCH:1007,ERROR:2e3,BLOCK_ACTION:2001,MEDIA_STATUS_NOT_READY:2002,MISSING_MANDATORY_PARAMS:3e3,MISSING_PLAY_SOURCE:3001,METHOD_NOT_IMPLEMENTED:3002}),o(a,"_logger",Object(n.a)("Error"))},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function(){function e(e){void 0===e&&(e=new Map),o(this,"retryConfig",{async:!0,timeout:0,maxAttempts:4}),o(this,"_attemptCounter",1),this.headers=e}var t=e.prototype;return t.getUrl=function(e){return e+"/service/"+this.service+(this.action?"/action/"+this.action:"")},t.doHttpRequest=function(){var e=this,t=new Promise((function(t,r){e._requestPromise={resolve:t,reject:r}}));return this.url||this._requestPromise.reject(new n.a(n.a.Severity.CRITICAL,n.a.Category.NETWORK,n.a.Code.MALFORMED_DATA_URI,{url:this.url})),this._createXHR(),t},t._createXHR=function(){var e=this,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status)try{var r=JSON.parse(t.responseText);return e.responseHeaders=e._getResponseHeaders(t),e._requestPromise.resolve(r)}catch(r){e._requestPromise.reject(e._createError(t,n.a.Code.BAD_SERVER_RESPONSE,{text:t.responseText}))}},t.open(this.method,this.url,this.retryConfig.async),this.retryConfig.async&&this.retryConfig.timeout&&(t.timeout=this.retryConfig.timeout);var r=performance.now();t.ontimeout=function(){e._handleError(t,n.a.Code.TIMEOUT,{timeout:(performance.now()-r)/1e3,statusText:t.statusText})},t.onerror=t.onabort=function(){e._handleError(t,n.a.Code.HTTP_ERROR,{text:t.responseText,statusText:t.statusText})},this.headers.forEach((function(e,r){t.setRequestHeader(r,e)})),t.send(this.params)},t._getResponseHeaders=function(e){return e.getAllResponseHeaders().split("\n").filter((function(e){return 0===e.toLowerCase().indexOf("x-")}))},t._handleError=function(e,t,r){var n=this._createError(e,t,r);if(e.onreadystatechange=function(){},e.onerror=function(){},e.ontimeout=function(){},e.onabort=function(){},!(this.retryConfig.maxAttempts&&this._attemptCounter<this.retryConfig.maxAttempts))return this._requestPromise.reject(n);this._attemptCounter++,this._createXHR()},t._createError=function(e,t,r){return Object.assign(r,{url:this.url,headers:this._getResponseHeaders(e),attempt:this._attemptCounter}),new n.a(n.a.Severity.CRITICAL,n.a.Category.NETWORK,t,r)},e}()},function(e,t,r){"use strict";var n={get:function(){return{trace:function(){},debug:function(){},info:function(){},log:function(){},warn:function(){},error:function(){},time:function(){},timeEnd:function(){},getLevel:function(){},setLevel:function(){}}}};function o(e){return n.get(e)}t.a=o},,function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function e(t){var r;return Array.isArray(t)?(r=t.length>0?t.slice(0):[]).forEach((function(t,n){("object"==typeof t&&t!=={}||Array.isArray(t)&&t.length>0)&&(r[n]=e(t))})):"object"==typeof t?(r=Object.assign({},t),Object.keys(r).forEach((function(t){("object"==typeof r[t]&&r[t]!=={}||Array.isArray(r[t])&&r[t].length>0)&&(r[t]=e(r[t]))}))):r=t,r}},function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(1),o=r(2);var a=function(e){var t,r,n;n=!1,(r="hasError")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,"KalturaAPIException"===e.objectType?(this.hasError=!0,this.error=new i(e.code,e.message)):e.error&&"KalturaAPIException"===e.error.objectType?(this.hasError=!0,this.error=new i(e.error.code,e.error.message)):this.data=e},i=function(e,t){this.code=e,this.message=t},s=r(0);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return c(u(t=e.call.apply(e,[this].concat(n))||this),"requests",[]),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.add=function(e){var t;this.requests.push(e);var r={},n={service:e.service,action:e.action};return Object.assign(r,((t={})[this.requests.length]=Object.assign(n,e.params),t)),Object.assign(r,this.params),this.params=r,this},o.execute=function(){var e=this;return new Promise((function(t,r){try{e.params=JSON.stringify(e.params)}catch(t){n._logger.error(""+t.message),r(new s.a(s.a.Severity.CRITICAL,s.a.Category.PROVIDER,s.a.Code.FAILED_PARSING_REQUEST,{error:t,params:e.params}))}e.doHttpRequest().then((function(n){var o=new p(n);o.success?t({headers:e.responseHeaders,response:o}):r(new s.a(s.a.Severity.CRITICAL,s.a.Category.NETWORK,s.a.Code.MULTIREQUEST_API_ERROR,{url:e.url,headers:e.responseHeaders,results:o.results}))}),(function(e){r(e)}))}))},n}(n.a);c(f,"_logger",Object(o.a)("MultiRequestBuilder"));var p=function e(t){var r=this;c(this,"results",[]),this.success=!0,(t.result?t.result:t).forEach((function(t){var n=new a(t);if(r.results.push(n),n.hasError)return e._logger.error("Service returned an error with error code: "+n.error.code+" and message: "+n.error.message+"."),void(r.success=!1)}))};c(p,"_logger",Object(o.a)("MultiRequestResult"))},,,function(e,t,r){"use strict";r.r(t),r.d(t,"OTTBookmarkService",(function(){return u})),r.d(t,"OTTConfiguration",(function(){return i})),r.d(t,"RequestBuilder",(function(){return n.a})),r.d(t,"NAME",(function(){return c})),r.d(t,"VERSION",(function(){return f}));var n=r(1),o=r(4),a={serviceParams:{apiVersion:"5.2.6"}},i=function(){function e(){}return e.set=function(e){e&&Object.assign(a,e)},e.get=function(){return Object(o.a)(a)},e}(),s=r(5);var u=function(e){var t,r;function o(){return e.apply(this,arguments)||this}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.add=function(e,t,r){var o=new Map;o.set("Content-Type","application/json");var a=new n.a(o);a.service="bookmark",a.action="add",a.method="POST",a.url=a.getUrl(e);var s={objectType:"KalturaBookmarkPlayerData",action:r.playerData.action,averageBitrate:r.playerData.averageBitrate,totalBitrate:r.playerData.totalBitrate,currentBitrate:r.playerData.currentBitrate,fileId:r.playerData.fileId},u={objectType:"KalturaBookmark",type:r.type,id:r.id,position:r.position,playerData:s},c=i.get().serviceParams;return Object.assign(c,{bookmark:u,ks:t}),a.params=JSON.stringify(c),a},o}(function(){function e(){}return e.getMultiRequest=function(e,t){var r=i.get(),n=r.serviceParams;e&&Object.assign(n,{ks:e}),t&&Object.assign(n,{partnerId:t});var o=new Map;o.set("Content-Type","application/json");var a=new s.a(o);return a.method="POST",a.service="multirequest",a.url=a.getUrl(r.serviceUrl),a.params=n,a},e}()),c="playkit-js-providers-bookmark-service",f="2.25.0"}])}));
//# sourceMappingURL=playkit-bookmark-service.js.map