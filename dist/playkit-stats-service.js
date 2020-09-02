!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.stats=t():(e.playkit=e.playkit||{},e.playkit.services=e.playkit.services||{},e.playkit.services.stats=t())}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(2);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function e(t,r,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};o(this,e),this.severity=t,this.category=r,this.code=i,this.data=a,Object(n.c)("Error")!==n.a.OFF&&e._logger.error("Category:".concat(r," | Code:").concat(i," |"),a)};i(a,"Severity",{RECOVERABLE:1,CRITICAL:2}),i(a,"Category",{NETWORK:1,SERVICE:2,PROVIDER:3}),i(a,"Code",{UNSUPPORTED_SCHEME:1e3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,BAD_SERVER_RESPONSE:1005,MULTIREQUEST_API_ERROR:1006,API_RESPONSE_MISMATCH:1007,ERROR:2e3,BLOCK_ACTION:2001,MEDIA_STATUS_NOT_READY:2002,MISSING_MANDATORY_PARAMS:3e3,MISSING_PLAY_SOURCE:3001,METHOD_NOT_IMPLEMENTED:3002}),i(a,"_logger",Object(n.b)("Error"))},function(e,t,r){var n,o;
/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */!function(i){"use strict";var a,u={};u.VERSION="1.6.0";var c={},s=function(e,t){return function(){return t.apply(e,arguments)}},f=function(){var e,t,r=arguments,n=r[0];for(t=1;t<r.length;t++)for(e in r[t])!(e in n)&&r[t].hasOwnProperty(e)&&(n[e]=r[t][e]);return n},l=function(e,t){return{value:e,name:t}};u.TRACE=l(1,"TRACE"),u.DEBUG=l(2,"DEBUG"),u.INFO=l(3,"INFO"),u.TIME=l(4,"TIME"),u.WARN=l(5,"WARN"),u.ERROR=l(8,"ERROR"),u.OFF=l(99,"OFF");var p=function(e){this.context=e,this.setLevel(e.filterLevel),this.log=this.info};p.prototype={setLevel:function(e){e&&"value"in e&&(this.context.filterLevel=e)},getLevel:function(){return this.context.filterLevel},enabledFor:function(e){var t=this.context.filterLevel;return e.value>=t.value},trace:function(){this.invoke(u.TRACE,arguments)},debug:function(){this.invoke(u.DEBUG,arguments)},info:function(){this.invoke(u.INFO,arguments)},warn:function(){this.invoke(u.WARN,arguments)},error:function(){this.invoke(u.ERROR,arguments)},time:function(e){"string"==typeof e&&e.length>0&&this.invoke(u.TIME,[e,"start"])},timeEnd:function(e){"string"==typeof e&&e.length>0&&this.invoke(u.TIME,[e,"end"])},invoke:function(e,t){a&&this.enabledFor(e)&&a(t,f({level:e},this.context))}};var y,v=new p({filterLevel:u.OFF});(y=u).enabledFor=s(v,v.enabledFor),y.trace=s(v,v.trace),y.debug=s(v,v.debug),y.time=s(v,v.time),y.timeEnd=s(v,v.timeEnd),y.info=s(v,v.info),y.warn=s(v,v.warn),y.error=s(v,v.error),y.log=y.info,u.setHandler=function(e){a=e},u.setLevel=function(e){for(var t in v.setLevel(e),c)c.hasOwnProperty(t)&&c[t].setLevel(e)},u.getLevel=function(){return v.getLevel()},u.get=function(e){return c[e]||(c[e]=new p(f({name:e},v.context)))},u.createDefaultHandler=function(e){(e=e||{}).formatter=e.formatter||function(e,t){t.name&&e.unshift("["+t.name+"]")};var t={},r=function(e,t){Function.prototype.apply.call(e,console,t)};return"undefined"==typeof console?function(){}:function(n,o){n=Array.prototype.slice.call(n);var i,a=console.log;o.level===u.TIME?(i=(o.name?"["+o.name+"] ":"")+n[0],"start"===n[1]?console.time?console.time(i):t[i]=(new Date).getTime():console.timeEnd?console.timeEnd(i):r(a,[i+": "+((new Date).getTime()-t[i])+"ms"])):(o.level===u.WARN&&console.warn?a=console.warn:o.level===u.ERROR&&console.error?a=console.error:o.level===u.INFO&&console.info?a=console.info:o.level===u.DEBUG&&console.debug?a=console.debug:o.level===u.TRACE&&console.trace&&(a=console.trace),e.formatter(n,o),r(a,n))}},u.useDefaults=function(e){u.setLevel(e&&e.defaultLevel||u.DEBUG),u.setHandler(u.createDefaultHandler(e))},void 0===(o="function"==typeof(n=u)?n.call(t,r,t,e):n)||(e.exports=o)}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return a}));var n=r(1),o={DEBUG:n.DEBUG,INFO:n.INFO,TIME:n.TIME,WARN:n.WARN,ERROR:n.ERROR,OFF:n.OFF};function i(e){return e?n.get(e):n}function a(e){return i(e).getLevel()}n.useDefaults({defaultLevel:n.ERROR}),t.b=i},function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;o(this,e),a(this,"retryConfig",{async:!0,timeout:0,maxAttempts:4}),a(this,"_attemptCounter",1),this.headers=t}var t,r,u;return t=e,(r=[{key:"getUrl",value:function(e){return e+"/service/"+this.service+(this.action?"/action/"+this.action:"")}},{key:"doHttpRequest",value:function(){var e=this,t=new Promise((function(t,r){e._requestPromise={resolve:t,reject:r}}));return this.url||this._requestPromise.reject(new n.a(n.a.Severity.CRITICAL,n.a.Category.NETWORK,n.a.Code.MALFORMED_DATA_URI,{url:this.url})),this._createXHR(),t}},{key:"_createXHR",value:function(){var e=this,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status)try{var r=JSON.parse(t.responseText);return e.responseHeaders=e._getResponseHeaders(t),e._requestPromise.resolve(r)}catch(r){e._requestPromise.reject(e._createError(t,n.a.Code.BAD_SERVER_RESPONSE,{text:t.responseText}))}},t.open(this.method,this.url,this.retryConfig.async),this.retryConfig.async&&this.retryConfig.timeout&&(t.timeout=this.retryConfig.timeout);var r=performance.now();t.ontimeout=function(){e._handleError(t,n.a.Code.TIMEOUT,{timeout:(performance.now()-r)/1e3,statusText:t.statusText})},t.onerror=t.onabort=function(){e._handleError(t,n.a.Code.HTTP_ERROR,{text:t.responseText,statusText:t.statusText})},this.headers.forEach((function(e,r){t.setRequestHeader(r,e)})),t.send(this.params)}},{key:"_getResponseHeaders",value:function(e){return e.getAllResponseHeaders().split("\n").filter((function(e){return 0===e.toLowerCase().indexOf("x-")}))}},{key:"_handleError",value:function(e,t,r){var n=this._createError(e,t,r);if(e.onreadystatechange=function(){},e.onerror=function(){},e.ontimeout=function(){},e.onabort=function(){},!(this.retryConfig.maxAttempts&&this._attemptCounter<this.retryConfig.maxAttempts))return this._requestPromise.reject(n);this._attemptCounter++,this._createXHR()}},{key:"_createError",value:function(e,t,r){return Object.assign(r,{url:this.url,headers:this._getResponseHeaders(e),attempt:this._attemptCounter}),new n.a(n.a.Severity.CRITICAL,n.a.Category.NETWORK,t,r)}}])&&i(t.prototype,r),u&&i(t,u),e}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(5);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i={serviceUrl:"https://cdnapisec.kaltura.com/api_v3",cdnUrl:"https://cdnapisec.kaltura.com",serviceParams:{apiVersion:"3.3.0",format:1},useApiCaptions:!0},a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,a=[{key:"set",value:function(e){e&&Object.assign(i,e)}},{key:"get",value:function(){return Object(n.a)(i)}}],(r=null)&&o(t.prototype,r),a&&o(t,a),e}()},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return o}));var o=function e(t){var r;return Array.isArray(t)?(r=t.length>0?t.slice(0):[]).forEach((function(t,o){("object"===n(t)&&t!=={}||Array.isArray(t)&&t.length>0)&&(r[o]=e(t))})):"object"===n(t)?(r=Object.assign({},t),Object.keys(r).forEach((function(t){("object"===n(r[t])&&r[t]!=={}||Array.isArray(r[t])&&r[t].length>0)&&(r[t]=e(r[t]))}))):r=t,r}},function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(3),o=r(2);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function e(t){var r,n,o;i(this,e),o=!1,(n="hasError")in(r=this)?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,"KalturaAPIException"===t.objectType?(this.hasError=!0,this.error=new u(t.code,t.message)):t.error&&"KalturaAPIException"===t.error.objectType?(this.hasError=!0,this.error=new u(t.error.code,t.error.message)):this.data=t},u=function e(t,r){i(this,e),this.code=t,this.message=r},c=r(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,r,n,o=y(i);function i(){var e;f(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(h(e=o.call.apply(o,[this].concat(r))),"requests",[]),e}return t=i,(r=[{key:"add",value:function(e){this.requests.push(e);var t={},r={service:e.service,action:e.action};return Object.assign(t,d({},this.requests.length,Object.assign(r,e.params))),Object.assign(t,this.params),this.params=t,this}},{key:"execute",value:function(){var e=this;return new Promise((function(t,r){try{e.params=JSON.stringify(e.params)}catch(t){i._logger.error("".concat(t.message)),r(new c.a(c.a.Severity.CRITICAL,c.a.Category.PROVIDER,c.a.Code.FAILED_PARSING_REQUEST,{error:t,params:e.params}))}e.doHttpRequest().then((function(n){var o=new g(n);o.success?t({headers:e.responseHeaders,response:o}):r(new c.a(c.a.Severity.CRITICAL,c.a.Category.NETWORK,c.a.Code.MULTIREQUEST_API_ERROR,{url:e.url,headers:e.responseHeaders,results:o.results}))}),(function(e){r(e)}))}))}}])&&l(t.prototype,r),n&&l(t,n),i}(n.a);d(m,"_logger",Object(o.b)("MultiRequestBuilder"));var g=function e(t){var r=this;f(this,e),d(this,"results",[]),this.success=!0,(t.result?t.result:t).forEach((function(t){var n=new a(t);if(r.results.push(n),n.hasError)return e._logger.error("Service returned an error with error code: ".concat(n.error.code," and message: ").concat(n.error.message,".")),void(r.success=!1)}))};d(g,"_logger",Object(o.b)("MultiRequestResult"))},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(6),o=r(4);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,a=[{key:"getMultiRequest",value:function(e,t,r){var i=o.a.get(),a=i.serviceParams;Object.assign(a,{ks:t,clientTag:"html5:v"+e}),r&&Object.assign(a,{partnerId:r});var u=new Map;u.set("Content-Type","application/json");var c=new n.a(u);return c.method="POST",c.service="multirequest",c.url=c.getUrl(i.serviceUrl),c.params=a,c}}],(r=null)&&i(t.prototype,r),a&&i(t,a),e}()},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return o}));var o=function(e){var t=[],r=/\[\]$/,o=function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=function(e,r){r="function"==typeof r?r():null==r?"":r,t[t.length]=encodeURIComponent(e)+"="+encodeURIComponent(r)};return function e(a,u){var c,s,f;if(a)if(o(u))for(c=0,s=u.length;c<s;c++)r.test(a)?i(a,u[c]):e(a+":"+("object"===n(u[c])?c:""),u[c]);else if(u&&"[object Object]"===String(u))for(f in u)e(a+":"+f,u[f]);else i(a,u);else if(o(u))for(c=0,s=u.length;c<s;c++)i(u[c].name,u[c].value);else for(f in u)e(f,u[f]);return t}("",e).join("&").replace(/%20/g,"+")}},,,function(e,t,r){"use strict";r.r(t),r.d(t,"OVPStatsService",(function(){return v})),r.d(t,"OVPConfiguration",(function(){return o.a})),r.d(t,"RequestBuilder",(function(){return n.a})),r.d(t,"NAME",(function(){return h})),r.d(t,"VERSION",(function(){return b}));var n=r(3),o=r(4),i=r(7),a=r(8);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,r,i,u=l(p);function p(){return c(this,p),u.apply(this,arguments)}return t=p,i=[{key:"collect",value:function(e,t,r,i){var u=o.a.get(),c={};Object.assign(c,u.serviceParams,{ks:t,clientTag:"html5:v"+r},i);var s=new n.a;return s.service="stats",s.action="collect",s.method="GET",s.tag="stats-collect",s.params=c,s.url=e+"?service="+s.service+"&action="+s.action+"&"+Object(a.a)(s.params),s}}],(r=null)&&s(t.prototype,r),i&&s(t,i),p}(i.a),h="playkit-js-providers-stats-service",b="2.22.1"}])}));
//# sourceMappingURL=playkit-stats-service.js.map