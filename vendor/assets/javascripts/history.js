!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.History=t():e.History=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=n(18),o=r(a);t.createHistory=o["default"];var i=n(19),u=r(i);t.createHashHistory=u["default"];var s=n(20),c=r(s);t.createMemoryHistory=c["default"];var f=n(12),l=r(f);t.createLocation=l["default"];var d=n(23),p=r(d);t.useBasename=p["default"];var h=n(14),g=r(h);t.useBeforeUnload=g["default"];var v=n(15),y=r(v);t.useQueries=y["default"];var m=n(1),b=r(m);t.Actions=b["default"];var O=n(21),w=r(O);t.enableBeforeUnload=w["default"];var x=n(22),P=r(x);t.enableQueries=P["default"]},function(e,t){"use strict";t.__esModule=!0;var n="PUSH";t.PUSH=n;var r="REPLACE";t.REPLACE=r;var a="POP";t.POP=a,t["default"]={PUSH:n,REPLACE:r,POP:a}},function(e,t,n){"use strict";var r=function(){};e.exports=r},function(e,t){"use strict";t.__esModule=!0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.canUseDOM=n},function(e,t){"use strict";function n(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function r(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)}function a(){return window.location.href.split("#")[1]||""}function o(e){window.location.replace(window.location.pathname+window.location.search+"#"+e)}function i(){return window.location.pathname+window.location.search+window.location.hash}function u(e){e&&window.history.go(e)}function s(e,t){t(window.confirm(e))}function c(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?window.history&&"pushState"in window.history:!1}function f(){var e=navigator.userAgent;return-1===e.indexOf("Firefox")}t.__esModule=!0,t.addEventListener=n,t.removeEventListener=r,t.getHashPath=a,t.replaceHashPath=o,t.getWindowPath=i,t.go=u,t.getUserConfirmation=s,t.supportsHistory=c,t.supportsGoWithoutReloadUsingHash=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){return function(){return e.apply(this,arguments)}}t.__esModule=!0;var o=n(2);r(o);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";var r=function(e,t,n,r,a,o,i,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,o,i,u],f=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return c[f++]}))}throw s.framesToPop=1,s}};e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=u["default"](e),n="",r="",a=t.indexOf("#");-1!==a&&(r=t.substring(a),t=t.substring(0,a));var o=t.indexOf("?");return-1!==o&&(n=t.substring(o),t=t.substring(0,o)),""===t&&(t="/"),{pathname:t,search:n,hash:r}}t.__esModule=!0;var o=n(2),i=(r(o),n(13)),u=r(i);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){var r=e(t,n);e.length<2&&n(r)}t.__esModule=!0;var o=n(2);r(o);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return s+e}function o(e,t){try{window.sessionStorage.setItem(a(e),JSON.stringify(t))}catch(n){if(n.name===f)return;if(n.name===c&&0===window.sessionStorage.length)return;throw n}}function i(e){var t=void 0;try{t=window.sessionStorage.getItem(a(e))}catch(n){if(n.name===f)return null}if(t)try{return JSON.parse(t)}catch(n){}return null}t.__esModule=!0,t.saveState=o,t.readState=i;var u=n(2),s=(r(u),"@@History/"),c="QuotaExceededError",f="SecurityError"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){function t(e){return s.canUseDOM?void 0:u["default"](!1),n.listen(e)}var n=l["default"](o({getUserConfirmation:c.getUserConfirmation},e,{go:c.go}));return o({},n,{listen:t})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(6),u=r(i),s=n(3),c=n(4),f=n(11),l=r(f);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return Math.random().toString(36).substr(2,e)}function o(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.key===t.key&&c["default"](e.state,t.state)}function i(){function e(e){return C.push(e),function(){C=C.filter(function(t){return t!==e})}}function t(){return Q&&Q.action===l.POP?R.indexOf(Q.key):D?R.indexOf(D.key):-1}function n(e){var n=t();D=e,D.action===l.PUSH?R=[].concat(R.slice(0,n+1),[D.key]):D.action===l.REPLACE&&(R[n]=D.key),N.forEach(function(e){e(D)})}function r(e){if(N.push(e),D)e(D);else{var t=L();R=[t.key],n(t)}return function(){N=N.filter(function(t){return t!==e})}}function i(e,t){f.loopAsync(C.length,function(t,n,r){g["default"](C[t],e,function(e){null!=e?r(e):n()})},function(e){B&&"string"==typeof e?B(e,function(e){t(e!==!1)}):t(e!==!1)})}function s(e){D&&o(D,e)||(Q=e,i(e,function(t){if(Q===e)if(t){if(e.action===l.PUSH){var r=L(),a=r.pathname,o=r.search,i=a+o,u=e.pathname+e.search;i===u&&(e.action=l.REPLACE)}A(e)!==!1&&n(e)}else if(D&&e.action===l.POP){var s=R.indexOf(D.key),c=R.indexOf(e.key);-1!==s&&-1!==c&&T(s-c)}}))}function c(e,t){s(_(t,e,l.PUSH,w()))}function d(e){c(null,e)}function h(e,t){s(_(t,e,l.REPLACE,w()))}function v(e){h(null,e)}function b(){T(-1)}function O(){T(1)}function w(){return a(U)}function x(e){if(null==e||"string"==typeof e)return e;var t=e.pathname,n=e.search,r=e.hash,a=t;return n&&(a+=n),r&&(a+=r),a}function P(e){return x(e)}function _(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?w():arguments[3];return p["default"](e,t,n,r)}function j(e){D?(H(D,e),n(D)):H(L(),e)}function H(e,t){e.state=u({},e.state,t),E(e.key,e.state)}function S(e){-1===C.indexOf(e)&&C.push(e)}function k(e){C=C.filter(function(t){return t!==e})}var M=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],L=M.getCurrentLocation,A=M.finishTransition,E=M.saveState,T=M.go,U=M.keyLength,B=M.getUserConfirmation;"number"!=typeof U&&(U=m);var C=[],R=[],N=[],D=void 0,Q=void 0;return{listenBefore:e,listen:r,transitionTo:s,pushState:c,replaceState:h,push:d,replace:v,go:T,goBack:b,goForward:O,createKey:w,createPath:x,createHref:P,createLocation:_,setState:y["default"](j,"setState is deprecated; use location.key to save state instead"),registerTransitionHook:y["default"](S,"registerTransitionHook is deprecated; use listenBefore instead"),unregisterTransitionHook:y["default"](k,"unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead")}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(24),c=r(s),f=n(17),l=n(1),d=n(12),p=r(d),h=n(8),g=r(h),v=n(5),y=r(v),m=6;t["default"]=i,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=arguments.length<=0||void 0===arguments[0]?"/":arguments[0],t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=arguments.length<=2||void 0===arguments[2]?o.POP:arguments[2],r=arguments.length<=3||void 0===arguments[3]?null:arguments[3];"string"==typeof e&&(e=u["default"](e));var a=e.pathname||"/",i=e.search||"",s=e.hash||"";return{pathname:a,search:i,hash:s,state:t,action:n,key:r}}t.__esModule=!0;var o=n(1),i=n(7),u=r(i);t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=e.match(/^https?:\/\/[^\/]*/);return null==t?e:e.substring(t[0].length)}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){function t(t){var n=e();return"string"==typeof n?((t||window.event).returnValue=n,n):void 0}return c.addEventListener(window,"beforeunload",t),function(){c.removeEventListener(window,"beforeunload",t)}}function o(e){return function(t){function n(){for(var e=void 0,t=0,n=d.length;null==e&&n>t;++t)e=d[t].call();return e}function r(e){return d.push(e),1===d.length&&s.canUseDOM&&(f=a(n)),function(){d=d.filter(function(t){return t!==e}),0===d.length&&f&&(f(),f=null)}}function o(e){s.canUseDOM&&-1===d.indexOf(e)&&(d.push(e),1===d.length&&(f=a(n)))}function u(e){d.length>0&&(d=d.filter(function(t){return t!==e}),0===d.length&&f())}var c=e(t),f=void 0,d=[];return i({},c,{listenBeforeUnload:r,registerBeforeUnloadHook:l["default"](o,"registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead"),unregisterBeforeUnloadHook:l["default"](u,"unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead")})}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(2),s=(r(u),n(3)),c=n(4),f=n(5),l=r(f);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){return f["default"].stringify(e,{arrayFormat:"brackets"}).replace(/%20/g,"+")}function i(e){return f["default"].parse(e.replace(/\+/g,"%20"))}function u(e){return function(){function t(e){return null==e.query&&(e.query=m(e.search.substring(1))),e}function n(e,t){var n=void 0;if(!t||""===(n=y(t)))return e;"string"==typeof e&&(e=h["default"](e));var r=e.search+(e.search?"&":"?")+n;return s({},e,{search:r})}function r(e){return O.listenBefore(function(n,r){d["default"](e,t(n),r)})}function u(e){return O.listen(function(n){e(t(n))})}function c(e,t,r){return O.pushState(e,n(t,r))}function f(e,t,r){return O.replaceState(e,n(t,r))}function l(e,t){return O.createPath(n(e,t))}function p(e,t){return O.createHref(n(e,t))}function g(){return t(O.createLocation.apply(O,arguments))}var v=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],y=v.stringifyQuery,m=v.parseQueryString,b=a(v,["stringifyQuery","parseQueryString"]),O=e(b);return"function"!=typeof y&&(y=o),"function"!=typeof m&&(m=i),s({},O,{listenBefore:r,listen:u,pushState:c,replaceState:f,createPath:l,createHref:p,createLocation:g})}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(27),f=r(c),l=n(8),d=r(l),p=n(7),h=r(p);t["default"]=u,e.exports=t["default"]},function(e,t){var n={};n.hexTable=new Array(256);for(var r=0;256>r;++r)n.hexTable[r]="%"+((16>r?"0":"")+r.toString(16)).toUpperCase();t.arrayToObject=function(e,t){for(var n=t.plainObjects?Object.create(null):{},r=0,a=e.length;a>r;++r)"undefined"!=typeof e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,r){if(!n)return e;if("object"!=typeof n)return Array.isArray(e)?e.push(n):"object"==typeof e?e[n]=!0:e=[e,n],e;if("object"!=typeof e)return e=[e].concat(n);Array.isArray(e)&&!Array.isArray(n)&&(e=t.arrayToObject(e,r));for(var a=Object.keys(n),o=0,i=a.length;i>o;++o){var u=a[o],s=n[u];Object.prototype.hasOwnProperty.call(e,u)?e[u]=t.merge(e[u],s,r):e[u]=s}return e},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;"string"!=typeof e&&(e=""+e);for(var t="",r=0,a=e.length;a>r;++r){var o=e.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&57>=o||o>=65&&90>=o||o>=97&&122>=o?t+=e[r]:128>o?t+=n.hexTable[o]:2048>o?t+=n.hexTable[192|o>>6]+n.hexTable[128|63&o]:55296>o||o>=57344?t+=n.hexTable[224|o>>12]+n.hexTable[128|o>>6&63]+n.hexTable[128|63&o]:(++r,o=65536+((1023&o)<<10|1023&e.charCodeAt(r)),t+=n.hexTable[240|o>>18]+n.hexTable[128|o>>12&63]+n.hexTable[128|o>>6&63]+n.hexTable[128|63&o])}return t},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;n=n||[];var r=n.indexOf(e);if(-1!==r)return n[r];if(n.push(e),Array.isArray(e)){for(var a=[],o=0,i=e.length;i>o;++o)"undefined"!=typeof e[o]&&a.push(e[o]);return a}var u=Object.keys(e);for(o=0,i=u.length;i>o;++o){var s=u[o];e[s]=t.compact(e[s],n)}return e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null===e||"undefined"==typeof e?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},function(e,t){"use strict";function n(e,t,n){function r(){i=!0,n.apply(this,arguments)}function a(){i||(e>o?t.call(this,o++,a,r):r.apply(this,arguments))}var o=0,i=!1;a()}t.__esModule=!0,t.loopAsync=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){function e(e){e=e||window.history.state||{};var t=f.getWindowPath(),n=e,r=n.key,a=void 0;return r?a=l.readState(r):(a=null,r=m.createKey(),v&&window.history.replaceState(o({},e,{key:r}),null,t)),m.createLocation(t,a,void 0,r)}function t(t){function n(t){void 0!==t.state&&r(e(t.state))}var r=t.transitionTo;return f.addEventListener(window,"popstate",n),function(){f.removeEventListener(window,"popstate",n)}}function n(e){var t=e.basename,n=e.pathname,r=e.search,a=e.hash,o=e.state,i=e.action,u=e.key;if(i!==s.POP){l.saveState(u,o);var c=(t||"")+n+r+a,f={key:u};if(i===s.PUSH){if(y)return window.location.href=c,!1;window.history.pushState(f,null,c)}else{if(y)return window.location.replace(c),!1;window.history.replaceState(f,null,c)}}}function r(e){1===++b&&(O=t(m));var n=m.listenBefore(e);return function(){n(),0===--b&&O()}}function a(e){1===++b&&(O=t(m));var n=m.listen(e);return function(){n(),0===--b&&O()}}function i(e){1===++b&&(O=t(m)),m.registerTransitionHook(e)}function d(e){m.unregisterTransitionHook(e),0===--b&&O()}var h=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c.canUseDOM?void 0:u["default"](!1);var g=h.forceRefresh,v=f.supportsHistory(),y=!v||g,m=p["default"](o({},h,{getCurrentLocation:e,finishTransition:n,saveState:l.saveState})),b=0,O=void 0;return o({},m,{listenBefore:r,listen:a,registerTransitionHook:i,unregisterTransitionHook:d})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(6),u=r(i),s=n(1),c=n(3),f=n(4),l=n(9),d=n(10),p=r(d);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return"string"==typeof e&&"/"===e.charAt(0)}function o(){var e=v.getHashPath();return a(e)?!0:(v.replaceHashPath("/"+e),!1)}function i(e,t,n){return e+(-1===e.indexOf("?")?"?":"&")+(t+"="+n)}function u(e,t){return e.replace(new RegExp("[?&]?"+t+"=[a-zA-Z0-9]+"),"")}function s(e,t){var n=e.match(new RegExp("\\?.*?\\b"+t+"=(.+?)\\b"));return n&&n[1]}function c(){function e(){var e=v.getHashPath(),t=void 0,n=void 0;return _?(t=s(e,_),e=u(e,_),t?n=y.readState(t):(n=null,t=j.createKey(),v.replaceHashPath(i(e,_,t)))):t=n=null,j.createLocation(e,n,void 0,t)}function t(t){function n(){o()&&r(e())}var r=t.transitionTo;return o(),v.addEventListener(window,"hashchange",n),function(){v.removeEventListener(window,"hashchange",n)}}function n(e){var t=e.basename,n=e.pathname,r=e.search,a=e.state,o=e.action,u=e.key;if(o!==h.POP){var s=(t||"")+n+r;_?(s=i(s,_,u),y.saveState(u,a)):e.key=e.state=null;var c=v.getHashPath();o===h.PUSH?c!==s&&(window.location.hash=s):c!==s&&v.replaceHashPath(s)}}function r(e){1===++H&&(S=t(j));var n=j.listenBefore(e);return function(){n(),0===--H&&S()}}function a(e){1===++H&&(S=t(j));var n=j.listen(e);return function(){n(),0===--H&&S()}}function c(e,t){j.pushState(e,t)}function l(e,t){j.replaceState(e,t)}function d(e){j.go(e)}function m(e){return"#"+j.createHref(e)}function w(e){1===++H&&(S=t(j)),j.registerTransitionHook(e)}function x(e){j.unregisterTransitionHook(e),0===--H&&S()}var P=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];g.canUseDOM?void 0:p["default"](!1);var _=P.queryKey;(void 0===_||_)&&(_="string"==typeof _?_:O);var j=b["default"](f({},P,{getCurrentLocation:e,finishTransition:n,saveState:y.saveState})),H=0,S=void 0;v.supportsGoWithoutReloadUsingHash();return f({},j,{listenBefore:r,listen:a,pushState:c,replaceState:l,go:d,createHref:m,registerTransitionHook:w,unregisterTransitionHook:x})}t.__esModule=!0;var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(2),d=(r(l),n(6)),p=r(d),h=n(1),g=n(3),v=n(4),y=n(9),m=n(10),b=r(m),O="_k";t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return e.filter(function(e){return e.state}).reduce(function(e,t){return e[t.key]=t.state,e},{})}function o(){function e(e,t){v[e]=t}function t(e){return v[e]}function n(){var e=h[g],n=e.key,r=e.basename,a=e.pathname,o=e.search,i=(r||"")+a+(o||""),u=void 0;return n?u=t(n):(u=null,n=d.createKey(),e.key=n),d.createLocation(i,u,void 0,n)}function r(e){var t=g+e;return t>=0&&t<h.length}function o(e){if(e){r(e)?void 0:s["default"](!1),g+=e;var t=n();d.transitionTo(i({},t,{action:c.POP}))}}function u(t){switch(t.action){case c.PUSH:g+=1,g<h.length&&h.splice(g),h.push(t),e(t.key,t.state);break;case c.REPLACE:h[g]=t,e(t.key,t.state)}}var f=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];Array.isArray(f)?f={entries:f}:"string"==typeof f&&(f={entries:[f]});var d=l["default"](i({},f,{getCurrentLocation:n,finishTransition:u,saveState:e,go:o})),p=f,h=p.entries,g=p.current;"string"==typeof h?h=[h]:Array.isArray(h)||(h=["/"]),h=h.map(function(e){var t=d.createKey();return"string"==typeof e?{pathname:e,key:t}:"object"==typeof e&&e?i({},e,{key:t}):void s["default"](!1)}),null==g?g=h.length-1:g>=0&&g<h.length?void 0:s["default"](!1);var v=a(h);return d}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(6),s=r(u),c=n(1),f=n(11),l=r(f);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=n(5),o=r(a),i=n(14),u=r(i);t["default"]=o["default"](u["default"],"enableBeforeUnload is deprecated, use useBeforeUnload instead"),e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=n(5),o=r(a),i=n(15),u=r(i);t["default"]=o["default"](u["default"],"enableQueries is deprecated, use useQueries instead"),e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){return function(){function t(e){return b&&null==e.basename&&(0===e.pathname.indexOf(b)?(e.pathname=e.pathname.substring(b.length),e.basename=b,""===e.pathname&&(e.pathname="/")):e.basename=""),e}function n(e){if(!b)return e;"string"==typeof e&&(e=p["default"](e));var t=e.pathname,n="/"===b.slice(-1)?b:b+"/",r="/"===t.charAt(0)?t.slice(1):t,a=n+r;return i({},e,{pathname:a})}function r(e){return w.listenBefore(function(n,r){c["default"](e,t(n),r)})}function o(e){return w.listen(function(n){e(t(n))})}function s(e,t){w.pushState(e,n(t))}function f(e){s(null,e)}function d(e,t){w.replaceState(e,n(t))}function h(e){d(null,e)}function g(e){return w.createPath(n(e))}function v(e){return w.createHref(n(e))}function y(){return t(w.createLocation.apply(w,arguments))}var m=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],b=m.basename,O=a(m,["basename"]),w=e(O);if(null==b&&u.canUseDOM){var x=document.getElementsByTagName("base")[0];x&&(b=l["default"](x.href))}return i({},w,{listenBefore:r,listen:o,pushState:s,push:f,replaceState:d,replace:h,createPath:g,createHref:v,createLocation:y})}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(3),s=n(8),c=r(s),f=n(13),l=r(f),d=n(7),p=r(d);t["default"]=o,e.exports=t["default"]},function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return e&&"object"==typeof e&&"number"==typeof e.length?"function"!=typeof e.copy||"function"!=typeof e.slice?!1:e.length>0&&"number"!=typeof e[0]?!1:!0:!1}function o(e,t,n){var o,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return s(t)?(e=i.call(e),t=i.call(t),c(e,t,n)):!1;if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var l=u(e),d=u(t)}catch(p){return!1}if(l.length!=d.length)return!1;for(l.sort(),d.sort(),o=l.length-1;o>=0;o--)if(l[o]!=d[o])return!1;for(o=l.length-1;o>=0;o--)if(f=l[o],!c(e[f],t[f],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(26),s=n(25),c=e.exports=function(e,t,n){return n||(n={}),e===t?!0:e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n)}},function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},function(e,t,n){var r=n(29),a=n(28);e.exports={stringify:r,parse:a}},function(e,t,n){var r=n(16),a={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1e3,strictNullHandling:!1,plainObjects:!1,allowPrototypes:!1};a.parseValues=function(e,t){for(var n={},a=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0,i=a.length;i>o;++o){var u=a[o],s=-1===u.indexOf("]=")?u.indexOf("="):u.indexOf("]=")+1;if(-1===s)n[r.decode(u)]="",t.strictNullHandling&&(n[r.decode(u)]=null);else{var c=r.decode(u.slice(0,s)),f=r.decode(u.slice(s+1));Object.prototype.hasOwnProperty.call(n,c)?n[c]=[].concat(n[c]).concat(f):n[c]=f}}return n},a.parseObject=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(a.parseObject(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o[0]&&"]"===o[o.length-1]?o.slice(1,o.length-1):o,u=parseInt(i,10),s=""+u;!isNaN(u)&&o!==i&&s===i&&u>=0&&n.parseArrays&&u<=n.arrayLimit?(r=[],r[u]=a.parseObject(e,t,n)):r[i]=a.parseObject(e,t,n)}return r},a.parseKeys=function(e,t,n){if(e){n.allowDots&&(e=e.replace(/\.([^\.\[]+)/g,"[$1]"));var r=/^([^\[\]]*)/,o=/(\[[^\[\]]*\])/g,i=r.exec(e),u=[];if(i[1]){if(!n.plainObjects&&Object.prototype.hasOwnProperty(i[1])&&!n.allowPrototypes)return;u.push(i[1])}for(var s=0;null!==(i=o.exec(e))&&s<n.depth;)++s,(n.plainObjects||!Object.prototype.hasOwnProperty(i[1].replace(/\[|\]/g,""))||n.allowPrototypes)&&u.push(i[1]);return i&&u.push("["+e.slice(i.index)+"]"),a.parseObject(u,t,n)}},e.exports=function(e,t){if(t=t||{},t.delimiter="string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:a.delimiter,t.depth="number"==typeof t.depth?t.depth:a.depth,t.arrayLimit="number"==typeof t.arrayLimit?t.arrayLimit:a.arrayLimit,t.parseArrays=t.parseArrays!==!1,t.allowDots=t.allowDots!==!1,t.plainObjects="boolean"==typeof t.plainObjects?t.plainObjects:a.plainObjects,t.allowPrototypes="boolean"==typeof t.allowPrototypes?t.allowPrototypes:a.allowPrototypes,t.parameterLimit="number"==typeof t.parameterLimit?t.parameterLimit:a.parameterLimit,t.strictNullHandling="boolean"==typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"==typeof e)return t.plainObjects?Object.create(null):{};for(var n="string"==typeof e?a.parseValues(e,t):e,o=t.plainObjects?Object.create(null):{},i=Object.keys(n),u=0,s=i.length;s>u;++u){var c=i[u],f=a.parseKeys(c,n[c],t);o=r.merge(o,f,t)}return r.compact(o)}},function(e,t,n){var r=n(16),a={delimiter:"&",arrayPrefixGenerators:{brackets:function(e,t){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e,t){return e}},strictNullHandling:!1};a.stringify=function(e,t,n,o,i){if("function"==typeof i)e=i(t,e);else if(r.isBuffer(e))e=e.toString();else if(e instanceof Date)e=e.toISOString();else if(null===e){if(o)return r.encode(t);e=""}if("string"==typeof e||"number"==typeof e||"boolean"==typeof e)return[r.encode(t)+"="+r.encode(e)];var u=[];if("undefined"==typeof e)return u;for(var s=Array.isArray(i)?i:Object.keys(e),c=0,f=s.length;f>c;++c){var l=s[c];u=Array.isArray(e)?u.concat(a.stringify(e[l],n(t,l),n,o,i)):u.concat(a.stringify(e[l],t+"["+l+"]",n,o,i))}return u},e.exports=function(e,t){t=t||{};var n,r,o="undefined"==typeof t.delimiter?a.delimiter:t.delimiter,i="boolean"==typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling;"function"==typeof t.filter?(r=t.filter,e=r("",e)):Array.isArray(t.filter)&&(n=r=t.filter);var u=[];if("object"!=typeof e||null===e)return"";var s;s=t.arrayFormat in a.arrayPrefixGenerators?t.arrayFormat:"indices"in t?t.indices?"indices":"repeat":"indices";var c=a.arrayPrefixGenerators[s];n||(n=Object.keys(e));for(var f=0,l=n.length;l>f;++f){var d=n[f];u=u.concat(a.stringify(e[d],d,c,i,r))}return u.join(o)}}])});
