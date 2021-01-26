!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ott=t():(e.playkit=e.playkit||{},e.playkit.providers=e.playkit.providers||{},e.playkit.providers.ott=t())}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=18)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(2);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function e(t,r,n,a){void 0===a&&(a={}),this.severity=t,this.category=r,this.code=n,this.data=a,e._logger.error("Category:"+r+" | Code:"+n+" |",a)};a(i,"Severity",{RECOVERABLE:1,CRITICAL:2}),a(i,"Category",{NETWORK:1,SERVICE:2,PROVIDER:3}),a(i,"Code",{UNSUPPORTED_SCHEME:1e3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,BAD_SERVER_RESPONSE:1005,MULTIREQUEST_API_ERROR:1006,API_RESPONSE_MISMATCH:1007,ERROR:2e3,BLOCK_ACTION:2001,MEDIA_STATUS_NOT_READY:2002,MISSING_MANDATORY_PARAMS:3e3,MISSING_PLAY_SOURCE:3001,METHOD_NOT_IMPLEMENTED:3002}),a(i,"_logger",Object(n.b)("Error"))},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(7);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(){function e(){this.metadata=new Map,this.sources=new n.a,this.type=e.Type.UNKNOWN}return e.prototype.toJSON=function(){return{id:this.id,name:this.name,sources:this.sources.toJSON(),duration:this.duration,dvrStatus:this.dvrStatus,status:this.status,metadata:this.metadata,type:this.type,poster:this.poster,assetReferenceType:this.assetReferenceType}},e}();a(i,"Type",{VOD:"Vod",LIVE:"Live",IMAGE:"Image",AUDIO:"Audio",UNKNOWN:"Unknown"}),a(i,"DvrStatus",{ON:1,OFF:0})},function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return a}));var n={get:function(){return{VERSION:"",DEBUG:{value:"",name:""},ERROR:{value:"",name:""},INFO:{value:"",name:""},OFF:{value:"",name:""},TIME:{value:"",name:""},TRACE:{value:"",name:""},WARN:{value:"",name:""},createDefaultHandler:function(){},debug:function(){},enabledFor:function(){},error:function(){},get:function(){},getLevel:function(){},info:function(){},log:function(){},setHandler:function(){},setLevel:function(){},time:function(){},timeEnd:function(){},trace:function(){},useDefaults:function(){},warn:function(){}}}},a={};function i(e){e&&"function"==typeof e.getLogger&&(n.get=e.getLogger),e&&e.LogLevel&&(a=e.LogLevel)}function s(e){return n.get(e)}function o(e){return s(e).getLevel()}function u(e,t){s(t).setLevel(e)}t.b=s},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(){function e(e){void 0===e&&(e=new Map),a(this,"retryConfig",{async:!0,timeout:0,maxAttempts:4}),a(this,"_attemptCounter",1),this.headers=e}var t=e.prototype;return t.getUrl=function(e){return e+"/service/"+this.service+(this.action?"/action/"+this.action:"")},t.doHttpRequest=function(){var e=this,t=new Promise((function(t,r){e._requestPromise={resolve:t,reject:r}}));return this.url||this._requestPromise.reject(new n.a(n.a.Severity.CRITICAL,n.a.Category.NETWORK,n.a.Code.MALFORMED_DATA_URI,{url:this.url})),this._createXHR(),t},t._createXHR=function(){var e=this,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status)try{var r=JSON.parse(t.responseText);return e.responseHeaders=e._getResponseHeaders(t),e._requestPromise.resolve(r)}catch(r){e._requestPromise.reject(e._createError(t,n.a.Code.BAD_SERVER_RESPONSE,{text:t.responseText}))}},t.open(this.method,this.url,this.retryConfig.async),this.retryConfig.async&&this.retryConfig.timeout&&(t.timeout=this.retryConfig.timeout);var r=performance.now();t.ontimeout=function(){e._handleError(t,n.a.Code.TIMEOUT,{timeout:(performance.now()-r)/1e3,statusText:t.statusText})},t.onerror=t.onabort=function(){e._handleError(t,n.a.Code.HTTP_ERROR,{text:t.responseText,statusText:t.statusText})},this.headers.forEach((function(e,r){t.setRequestHeader(r,e)})),t.send(this.params)},t._getResponseHeaders=function(e){return e.getAllResponseHeaders().split("\n").filter((function(e){return 0===e.toLowerCase().indexOf("x-")}))},t._handleError=function(e,t,r){var n=this._createError(e,t,r);if(e.onreadystatechange=function(){},e.onerror=function(){},e.ontimeout=function(){},e.onabort=function(){},!(this.retryConfig.maxAttempts&&this._attemptCounter<this.retryConfig.maxAttempts))return this._requestPromise.reject(n);this._attemptCounter++,this._createXHR()},t._createError=function(e,t,r){return Object.assign(r,{url:this.url,headers:this._getResponseHeaders(e),attempt:this._attemptCounter}),new n.a(n.a.Severity.CRITICAL,n.a.Category.NETWORK,t,r)},e}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i}));var n={DASH:{name:"dash",mimeType:"application/dash+xml",pathExt:"mpd"},HLS:{name:"hls",mimeType:"application/x-mpegURL",pathExt:"m3u8"},WVM:{name:"wvm",mimeType:"video/wvm",pathExt:"wvm"},MP4:{name:"mp4",mimeType:"video/mp4",pathExt:"mp4"},MP3:{name:"mp3",mimeType:"audio/mpeg",pathExt:"mp3"}},a=new Map([["mpegdash",n.DASH],["applehttp",n.HLS],["url",n.MP4]]);function i(e){var t=a.get(e);return!!t&&t.name===n.MP4.name}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){var t,r,n;n=!1,(r="hasError")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,"KalturaAPIException"===e.objectType?(this.hasError=!0,this.error=new a(e.code,e.message)):e.error&&"KalturaAPIException"===e.error.objectType?(this.hasError=!0,this.error=new a(e.error.code,e.error.message)):this.data=e},a=function(e,t){this.code=e,this.message=t}},function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n,a,i,s=function(e){this.scheme=e.scheme,this.licenseURL=e.licenseURL,this.certificate=e.certificate};i={"drm.PLAYREADY_CENC":"com.microsoft.playready","drm.WIDEVINE_CENC":"com.widevine.alpha","fairplay.FAIRPLAY":"com.apple.fairplay",WIDEVINE_CENC:"com.widevine.alpha",PLAYREADY_CENC:"com.microsoft.playready",FAIRPLAY:"com.apple.fairplay"},(a="Scheme")in(n=s)?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(8);var n=r(4),a=function(){function e(){this.progressive=[],this.dash=[],this.hls=[]}var t=e.prototype;return t.map=function(e,t){if(t)switch(t.name){case n.a.MP4.name:this.progressive.push(e);break;case n.a.DASH.name:this.dash.push(e);break;case n.a.HLS.name:this.hls.push(e)}},t.toJSON=function(){var e={progressive:[],dash:[],hls:[]};return this.progressive.forEach((function(t){return e.progressive.push(t.toJSON())})),this.hls.forEach((function(t){return e.hls.push(t.toJSON())})),this.dash.forEach((function(t){return e.dash.push(t.toJSON())})),e},e}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(12);var n=function(){function e(){}return e.prototype.toJSON=function(){var e={id:this.id,url:this.url,mimetype:this.mimetype};return this.bandwidth&&(e.bandwidth=this.bandwidth),this.width&&(e.width=this.width),this.height&&(e.height=this.height),this.label&&(e.label=this.label),this.drmData&&this.drmData.length>0&&(e.drmData=[],this.drmData.forEach((function(t){Array.isArray(e.drmData)&&e.drmData.push(t.toJSON())}))),e},e}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(10);var n=r(0);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(){function e(e){a(this,"_loadersResponseMap",new Map),a(this,"_loaders",new Map),this._networkRetryConfig=e}var t=e.prototype;return t.add=function(e,t){var r=this,n=new e(t);if(n.isValid()){this._loaders.set(e.id,n);var a=this._multiRequest.requests.length,i=n.requests;this._multiRequest.retryConfig=this._networkRetryConfig,i.forEach((function(e){r._multiRequest.add(e)}));var s=Array.from(new Array(i.length),(function(e,t){return t+a}));this._loadersResponseMap.set(e.id,s)}},t.fetchData=function(){var e=this;return new Promise((function(t,r){e._multiRequest.execute().then((function(a){e._multiResponse=a.response,e.prepareData(a.response).success?t(e._loaders):r(new n.a(n.a.Severity.CRITICAL,n.a.Category.NETWORK,n.a.Code.API_RESPONSE_MISMATCH,{headers:a.headers}))}),(function(e){r(e)}))}))},t.prepareData=function(e){var t=this;return this._loaders.forEach((function(r,n){var a=t._loadersResponseMap.get(n);try{a&&a.length>0&&(r.response=e.results.slice(a[0],a[a.length-1]+1))}catch(e){return{success:!1,error:e}}})),{success:!0,data:this._loaders}},e}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(3),a=r(2),i=r(5),s=r(0);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return u(o(t=e.call.apply(e,[this].concat(n))||this),"requests",[]),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.add=function(e){var t;this.requests.push(e);var r={},n={service:e.service,action:e.action};return Object.assign(r,((t={})[this.requests.length]=Object.assign(n,e.params),t)),Object.assign(r,this.params),this.params=r,this},a.execute=function(){var e=this;return new Promise((function(t,r){try{e.params=JSON.stringify(e.params)}catch(t){n._logger.error(""+t.message),r(new s.a(s.a.Severity.CRITICAL,s.a.Category.PROVIDER,s.a.Code.FAILED_PARSING_REQUEST,{error:t,params:e.params}))}e.doHttpRequest().then((function(n){var a=new p(n);a.success?t({headers:e.responseHeaders,response:a}):r(new s.a(s.a.Severity.CRITICAL,s.a.Category.NETWORK,s.a.Code.MULTIREQUEST_API_ERROR,{url:e.url,headers:e.responseHeaders,results:a.results}))}),(function(e){r(e)}))}))},n}(n.a);u(c,"_logger",Object(a.b)("MultiRequestBuilder"));var p=function e(t){var r=this;u(this,"results",[]),this.success=!0,(t.result?t.result:t).forEach((function(t){var n=new i.a(t);if(r.results.push(n),n.hasError)return e._logger.error("Service returned an error with error code: "+n.error.code+" and message: "+n.error.message+"."),void(r.success=!1)}))};u(p,"_logger",Object(a.b)("MultiRequestResult"))},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){this.message=e.message,this.code=e.code}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(){function e(e,t,r){this.licenseUrl=e,this.scheme=t,r&&(this.certificate=r)}return e.prototype.toJSON=function(){var e={licenseUrl:this.licenseUrl,scheme:this.scheme};return this.certificate&&(e.certificate=this.certificate),e},e}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2),a=(r(9),r(0));function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}var o=function(){function e(e,t){var r,a,i;i={async:!0,timeout:0,maxAttempts:4},(a="_networkRetryConfig")in(r=this)?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,Object(n.e)(e.logger),this._partnerId=e.partnerId,this._widgetId=e.widgetId,this._uiConfId=e.uiConfId,this._isAnonymous=!e.ks,this._ks=e.ks||"",this._playerVersion=t}s(e,[{key:"partnerId",get:function(){return this._partnerId}},{key:"widgetId",get:function(){return this._widgetId||this.defaultWidgetId}},{key:"defaultWidgetId",get:function(){return"_"+this._partnerId}},{key:"uiConfId",get:function(){return this._uiConfId}},{key:"ks",get:function(){return this._ks},set:function(e){this._ks=e}},{key:"playerVersion",get:function(){return this._playerVersion}},{key:"isAnonymous",get:function(){return this._isAnonymous}}]);var t=e.prototype;return t.getMediaConfig=function(e){return Promise.reject(new a.a(a.a.Severity.CRITICAL,a.a.Category.PROVIDER,a.a.Code.METHOD_NOT_IMPLEMENTED,{message:"getMediaConfig method must be implement by the derived class"}))},t.getPlaylistConfig=function(e){return Promise.reject(new a.a(a.a.Severity.CRITICAL,a.a.Category.PROVIDER,a.a.Code.METHOD_NOT_IMPLEMENTED,{message:"The provider does not support loading playlist by id"}))},t.getEntryListConfig=function(e){return Promise.reject(new a.a(a.a.Severity.CRITICAL,a.a.Category.PROVIDER,a.a.Code.METHOD_NOT_IMPLEMENTED,{message:"The provider does not support loading entry list"}))},t._verifyHasSources=function(e){if(0===e.hls.concat(e.dash,e.progressive).length)throw new a.a(a.a.Severity.CRITICAL,a.a.Category.SERVICE,a.a.Code.MISSING_PLAY_SOURCE,{action:"",messages:"No play source for entry id: "+e.id})},t.getLogLevel=function(e){return Object(n.c)(e)},t.setLogLevel=function(e,t){Object(n.d)(e,t)},s(e,[{key:"LogLevel",get:function(){return n.a}}]),e}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function e(t){var r;return Array.isArray(t)?(r=t.length>0?t.slice(0):[]).forEach((function(t,n){("object"==typeof t&&t!=={}||Array.isArray(t)&&t.length>0)&&(r[n]=e(t))})):"object"==typeof t?(r=Object.assign({},t),Object.keys(r).forEach((function(t){("object"==typeof r[t]&&r[t]!=={}||Array.isArray(r[t])&&r[t].length>0)&&(r[t]=e(r[t]))}))):r=t,r}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(1);var n=function(){this.items=[]}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){this.url=e.url,this.clickThroughUrl=e.clickThroughUrl}},,function(e,t,r){"use strict";r.r(t),r.d(t,"Provider",(function(){return $})),r.d(t,"ContextType",(function(){return re})),r.d(t,"MediaType",(function(){return ne})),r.d(t,"NAME",(function(){return ee})),r.d(t,"VERSION",(function(){return te}));var n=r(13),a=r(2),i=r(14),s={serviceParams:{apiVersion:"5.2.6"}},o=function(){function e(){}return e.set=function(e){e&&Object.assign(s,e)},e.get=function(){return Object(i.a)(s)},e}(),u=r(9),c=r(10),p=function(){function e(){}return e.getMultiRequest=function(e,t){var r=o.get(),n=r.serviceParams;e&&Object.assign(n,{ks:e}),t&&Object.assign(n,{partnerId:t});var a=new Map;a.set("Content-Type","application/json");var i=new c.a(a);return i.method="POST",i.service="multirequest",i.url=i.getUrl(r.serviceUrl),i.params=n,i},e}();var f=function(e){var t,r;function n(t,r,n){var a;return void 0===r&&(r=""),(a=e.call(this,n)||this)._multiRequest=p.getMultiRequest(r,t),a}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n}(u.a),d=r(3);var l=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.anonymousLogin=function(e,t,r){var n=new Map;n.set("Content-Type","application/json");var a=new d.a(n);a.service="ottuser",a.action="anonymousLogin",a.method="POST",a.url=a.getUrl(e);var i={partnerId:t};return r&&Object.assign(i,{udid:r}),a.params=i,a},n}(p);function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),e}var g=function(){function e(e){var t,r,n;n={},(r="_response")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,this.requests=this.buildRequests(e),this._partnerId=e.partnerId}y(e,null,[{key:"id",get:function(){return"session"}}]);var t=e.prototype;return t.buildRequests=function(e){var t=o.get(),r=[];return r.push(l.anonymousLogin(t.serviceUrl,e.partnerId,e.udid)),r},t.isValid=function(){return!!this._partnerId},y(e,[{key:"requests",set:function(e){this._requests=e},get:function(){return this._requests}},{key:"response",set:function(e){this._response.ks=e[0].data.ks},get:function(){return this._response.ks}}]),e}();var m=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.getPlaybackContext=function(e,t,r,n,a){var i=new Map;i.set("Content-Type","application/json");var s=new d.a(i);s.service="asset",s.action="getPlaybackContext",s.method="POST",s.url=s.getUrl(e);var o={objectType:"KalturaPlaybackContextOptions"};return Object.assign(o,a),s.params={assetId:r,assetType:n,contextDataParams:o,ks:t},s},n.get=function(e,t,r,n){var a=new Map;a.set("Content-Type","application/json");var i=new d.a(a);return i.service="asset",i.action="get",i.method="POST",i.url=i.getUrl(e),i.params={id:r,assetReferenceType:n,ks:t},i},n}(p),v=r(5),_=r(11);var b,E,T,R=function(e){this.type=e.type};T={BLOCK:"BLOCK",START_DATE_OFFSET:"START_DATE_OFFSET",END_DATE_OFFSET:"END_DATE_OFFSET",USER_BLOCK:"USER_BLOCK",ALLOW_PLAYBACK:"ALLOW_PLAYBACK",BLOCK_PLAYBACK:"BLOCK_PLAYBACK",APPLY_DISCOUNT_MODULE:"APPLY_DISCOUNT_MODULE"},(E="Type")in(b=R)?Object.defineProperty(b,E,{value:T,enumerable:!0,configurable:!0,writable:!0}):b[E]=T;var O=r(6);var C=function(){function e(e){var t=this;!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"drm",[]),this.format=e.format,this.adsPolicy=e.adsPolicy,this.adsParam=e.adsParam,this.duration=e.duration,this.url=e.url,this.type=e.type,this.fileId=e.id,this.protocols=e.protocols,e.drm&&e.drm.map((function(e){return t.drm.push(new O.a(e))}))}var t=e.prototype;return t.hasDrmData=function(){return this.drm&&this.drm.length>0},t.getProtocol=function(e){var t="";if(this.protocols&&this.protocols.length>0)this.protocols.split(",").forEach((function(r){r===e&&(t=r)}));else if("http"===e)return e;return t},e}();var A=function(e){this.streamertype=e.streamertype,this.url=e.url};function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(A,"StreamerType",{HLS:"hls",DASH:"dash",PROGRESSIVE:"progressive"});var S=function(e){var t,r;function n(t){var r;if(P(I(r=e.call(this,t)||this),"sources",[]),P(I(r),"actions",[]),P(I(r),"messages",[]),P(I(r),"plugins",[]),!r.hasError){var n=t.messages;n&&n.map((function(e){return r.messages.push(new _.a(e))}));var a=t.actions;a&&a.map((function(e){return r.actions.push(new R(e))}));var i=t.sources;i&&i.map((function(e){return r.sources.push(new C(e))}));var s=t.plugins;s&&s.map((function(e){return r.plugins.push(new A(e))}))}return r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.hasBlockAction=function(){return void 0!==this.getBlockAction()},a.getBlockAction=function(){return this.actions.find((function(e){return e.type===R.Type.BLOCK}))},a.getErrorMessages=function(){return this.messages},n}(v.a);function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}P(S,"Type",{TRAILER:"TRAILER",CATCHUP:"CATCHUP",START_OVER:"START_OVER",PLAYBACK:"PLAYBACK"});var D=function(e){var t,r;function n(t){var r;return L(w(r=e.call(this,t)||this),"name",""),L(w(r),"description",""),L(w(r),"tags",[]),L(w(r),"metas",[]),L(w(r),"pictures",[]),r.hasError||(r.id=t.id,r.name=t.name,r.description=t.description,r.metas=r._formatTagsMetas(t.metas),r.tags=r._formatTagsMetas(t.tags),r.pictures=t.images),r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype._formatTagsMetas=function(e){var t=[];return Object.keys(e).forEach((function(r){if(e[r].objects){var n="";e[r].objects.forEach((function(e){n+=e.value+"|"})),t.push({key:r,value:n})}else t.push({key:r,value:e[r].value})})),t},n}(v.a);function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t,r){return t&&k(e.prototype,t),r&&k(e,r),e}L(D,"Type",{MEDIA:"media",RECORDING:"recording",EPG:"epg"}),L(D,"AssetReferenceType",{MEDIA:"media",EPG_INTERNAL:"epg_internal",EPG_EXTERNAL:"epg_external",NPVR:"nPVR"});var M=function(){function e(e){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"_response",{}),this.requests=this.buildRequests(e),this._entryId=e.entryId}j(e,null,[{key:"id",get:function(){return"asset"}}]);var t=e.prototype;return t.buildRequests=function(e){var t=o.get(),r=[];return r.push(m.get(t.serviceUrl,e.ks,e.entryId,e.assetReferenceType)),r.push(m.getPlaybackContext(t.serviceUrl,e.ks,e.entryId,e.type,e.playbackContext)),r},t.isValid=function(){return!!this._entryId},j(e,[{key:"requests",set:function(e){this._requests=e},get:function(){return this._requests}},{key:"response",set:function(e){this._response.mediaDataResult=new D(e[0].data),this._response.playBackContextResult=new S(e[1].data)},get:function(){return this._response}}]),e}();function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,r){return t&&N(e.prototype,t),r&&N(e,r),e}var U,B,q,V,H=function(){function e(e){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"_response",{playlistItems:{entries:[]}}),this.requests=this.buildRequests(e),this._entries=e.entries}x(e,null,[{key:"id",get:function(){return"asset_list"}}]);var t=e.prototype;return t.buildRequests=function(e){var t=o.get(),r=[];return e.entries.forEach((function(n){var a=n.assetReferenceType||D.AssetReferenceType.MEDIA;r.push(m.get(t.serviceUrl,e.ks,n.entryId||n,a))})),r},t.isValid=function(){return!(!this._entries||!this._entries.length)},x(e,[{key:"requests",set:function(e){this._requests=e},get:function(){return this._requests}},{key:"response",set:function(e){var t=this;e.forEach((function(e){t._response.playlistItems.entries.push({mediaDataResult:new D(e.data)})}))},get:function(){return this._response}}]),e}(),K=r(1),F=r(12),Y=r(8),W=r(7),G=r(15),J=r(16),X=r(4);var Q=((V={})[D.Type.MEDIA]=((U={})[S.Type.TRAILER]=function(){return{type:K.a.Type.VOD}},U[S.Type.PLAYBACK]=function(e){return parseInt(e.externalIds)>0?{type:K.a.Type.LIVE,dvrStatus:K.a.DvrStatus.OFF}:"KalturaLiveAsset"===e.objectType?{type:K.a.Type.LIVE,dvrStatus:e.enableTrickPlay?K.a.DvrStatus.ON:K.a.DvrStatus.OFF}:{type:K.a.Type.VOD}},U),V[D.Type.EPG]=((B={})[S.Type.CATCHUP]=function(){return{type:K.a.Type.VOD}},B[S.Type.START_OVER]=function(){return{type:K.a.Type.LIVE,dvrStatus:K.a.DvrStatus.ON}},B),V[D.Type.RECORDING]=((q={})[S.Type.PLAYBACK]=function(){return{type:K.a.Type.VOD}},q),V),z=function(){function e(){}return e.getMediaEntry=function(t,r){var n=new K.a;e._fillBaseData(n,t,r);var a=t.playBackContextResult,i=t.mediaDataResult,s=a.sources,o=e._filterSourcesByFormats(s,r.formats);n.sources=e._getParsedSources(o);var u=e._getMediaType(i.data,r.mediaType,r.contextType);return n.type=u.type,n.dvrStatus=u.dvrStatus,n.duration=Math.max.apply(Math,s.map((function(e){return e.duration}))),n},e.getEntryList=function(t,r){var n=new G.a;return t.playlistItems.entries.forEach((function(t){var a=new K.a,i=r.find((function(e){return e.entryId===t.mediaDataResult.id}));e._fillBaseData(a,t,i),n.items.push(a)})),n},e.getBumper=function(e){var t=e.playBackContextResult.plugins.find((function(e){return e.streamertype===A.StreamerType.PROGRESSIVE}));if(t)return new J.a(t)},e._fillBaseData=function(t,r,n){var a=r.mediaDataResult,i=e.reconstructMetadata(a);return i.description=a.description,i.name=a.name,n&&n.mediaType&&(i.mediaType=n.mediaType),t.metadata=i,t.poster=e._getPoster(a.pictures),t.id=a.id,t},e.reconstructMetadata=function(t){return{metas:e.addToMetaObject(t.metas),tags:e.addToMetaObject(t.tags)}},e.addToMetaObject=function(e){var t={};return e&&e.forEach((function(e){t[e.key]=e.value})),t},e._getPoster=function(e){if(e&&e.length>0){var t=e[0].url;return/.*\/thumbnail\/.*(?:width|height)\/\d+\/(?:height|width)\/\d+/.test(t)?t:e.map((function(e){return{url:e.url,width:e.width,height:e.height}}))}return""},e._getMediaType=function(e,t,r){var n={type:K.a.Type.UNKNOWN};return Q[t]&&Q[t][r]&&(n=Q[t][r](e)),n},e._filterSourcesByFormats=function(e,t){return t.length>0&&(e=e.filter((function(e){return t.includes(e.type)}))),e},e._getParsedSources=function(t){var r=new W.a,n=function(t){var n=e._parseAdaptiveSource(t);if(n){var a=X.b.get(t.format);r.map(n,a)}};return t&&t.length>0&&(t.filter((function(e){return!Object(X.c)(e.format)})).forEach(n),t.filter((function(e){return Object(X.c)(e.format)})).forEach(n)),r},e._parseAdaptiveSource=function(t){var r=new Y.a;if(t){var n=t.url,a=X.b.get(t.format);if(a&&(r.mimetype=a.mimeType),!n)return e._logger.error("failed to create play url from source, discarding source: ("+t.fileId+"), "+t.format+"."),null;if(r.url=n,r.id=t.fileId+","+t.format,t.hasDrmData()){var i=[];t.drm.forEach((function(e){i.push(new F.a(e.licenseURL,O.a.Scheme[e.scheme],e.certificate))})),r.drmData=i}}return r},e.hasBlockAction=function(e){return e.playBackContextResult.hasBlockAction()},e.getBlockAction=function(e){return e.playBackContextResult.getBlockAction()},e.getErrorMessages=function(e){return e.playBackContextResult.getErrorMessages()},e}();!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(z,"_logger",Object(a.b)("OTTProviderParser"));var Z=r(0);var $=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this)._logger=Object(a.b)("OTTProvider"),o.set(t.env),n._networkRetryConfig=Object.assign(n._networkRetryConfig,t.networkRetryParameters),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.getMediaConfig=function(e){var t=this;return e.ks&&(this.ks=e.ks,this._isAnonymous=!1),this._dataLoader=new f(this.partnerId,this.ks,this._networkRetryConfig),new Promise((function(r,n){var a=e.entryId;if(a){var i=t.ks;i||(i="{1:result:ks}",t._dataLoader.add(g,{partnerId:t.partnerId}));var s=e.contextType||S.Type.PLAYBACK,o=e.mediaType||D.Type.MEDIA,u=e.assetReferenceType||D.AssetReferenceType.MEDIA,c={mediaProtocol:e.protocol,assetFileIds:e.fileIds,context:s};e.streamerType&&(c.streamerType=e.streamerType),e.urlType&&(c.urlType=e.urlType),e.adapterData&&(c.adapterData=e.adapterData),t._dataLoader.add(M,{entryId:a,ks:i,type:o,playbackContext:c,assetReferenceType:u});var p={contextType:s,mediaType:o,formats:e.formats||[]};return t._dataLoader.fetchData().then((function(e){try{r(t._parseDataFromResponse(e,p))}catch(e){n(e)}}),(function(e){n(e)}))}n(new Z.a(Z.a.Severity.CRITICAL,Z.a.Category.PROVIDER,Z.a.Code.MISSING_MANDATORY_PARAMS,{message:"missing entry id"}))}))},i._parseDataFromResponse=function(e,t){this._logger.debug("Data parsing started");var r={session:{isAnonymous:this._isAnonymous,partnerId:this.partnerId},sources:this._getDefaultSourcesObject(),plugins:{}};if(this.uiConfId&&(r.session.uiConfId=this.uiConfId),e){if(e.has(g.id)){var n=e.get(g.id);n&&n.response&&(r.session.ks=n.response)}else r.session.ks=this.ks;if(e.has(M.id)){var a=e.get(M.id);if(a&&a.response&&Object.keys(a.response).length){var i=a.response;if(z.hasBlockAction(i))throw new Z.a(Z.a.Severity.CRITICAL,Z.a.Category.SERVICE,Z.a.Code.BLOCK_ACTION,{action:z.getBlockAction(i),messages:z.getErrorMessages(i)});var s=z.getMediaEntry(i,t);Object.assign(r.sources,this._getSourcesObject(s)),this._verifyHasSources(r.sources);var o=z.getBumper(i);o&&Object.assign(r.plugins,{bumper:o})}}}return this._logger.debug("Data parsing finished",r),r},i.getEntryListConfig=function(e){var t=this;return e.ks&&(this.ks=e.ks,this._isAnonymous=!1),this._dataLoader=new f(this.partnerId,this.ks,this._networkRetryConfig),new Promise((function(r,n){var a=e.entries;if(a&&a.length){var i=t.ks;i||(i="{1:result:ks}",t._dataLoader.add(g,{partnerId:t.partnerId})),t._dataLoader.add(H,{entries:a,ks:i}),t._dataLoader.fetchData().then((function(e){r(t._parseEntryListDataFromResponse(e,a))}),(function(e){n(e)}))}else n({success:!1,data:"Missing mandatory parameter"})}))},i._parseEntryListDataFromResponse=function(e,t){var r=this;this._logger.debug("Data parsing started");var n={id:"",metadata:{name:"",description:""},poster:"",items:[]};if(e&&e.has(H.id)){var a=e.get(H.id);if(a&&a.response)z.getEntryList(a.response,t).items.forEach((function(e){return n.items.push({sources:r._getSourcesObject(e)})}))}return this._logger.debug("Data parsing finished",n),n},i._getDefaultSourcesObject=function(){return{hls:[],dash:[],progressive:[],id:"",duration:0,type:K.a.Type.UNKNOWN,poster:"",dvr:!1,vr:null,metadata:{name:"",description:"",tags:""}}},i._getSourcesObject=function(e){var t=this._getDefaultSourcesObject(),r=e.sources.toJSON();return t.hls=r.hls,t.dash=r.dash,t.progressive=r.progressive,t.id=e.id,t.duration=e.duration,t.type=e.type,t.dvr=!!e.dvrStatus,t.poster=e.poster,e.metadata&&e.metadata.metas&&"string"==typeof e.metadata.metas.tags&&e.metadata.metas.tags.indexOf("360")>-1&&(t.vr={}),Object.assign(t.metadata,e.metadata),t},n}(n.a),ee="playkit-js-providers-ott",te="2.27.0",re=S.Type,ne=D.Type}])}));
//# sourceMappingURL=playkit-ott-provider.js.map