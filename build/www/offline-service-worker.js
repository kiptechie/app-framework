var __wpo = {"assets":{"main":["/fonts/Framework7Icons-Regular.bb6aae4.eot","/fonts/Framework7Icons-Regular.9900d2b.ttf","/fonts/Framework7Icons-Regular.eb7a418.woff","/fonts/Framework7Icons-Regular.f3e1eae.woff2","/fonts/MaterialIcons-Regular.e79bfd8.eot","/fonts/MaterialIcons-Regular.a37b0c0.ttf","/fonts/MaterialIcons-Regular.012cf6a.woff","/fonts/MaterialIcons-Regular.570eb83.woff2","/img/i-f7-ios.b356cb6.png","/img/i-f7-material.ccc2c70.png","/img/flag-de.69735e1.png","/img/flag-en.500a285.png","/img/firebase.472015e.png","/img/theme-ios.48f912f.png","/img/theme-material.381a2ea.png","/app.3278eb9.js","/init.3278eb9.js","/material.3278eb9.js","/ios.3278eb9.js","/app.3278eb9.css","/init.3278eb9.css","/ios.3278eb9.css","/material.3278eb9.css","/","/offline-service-worker.js","/manifest.json","/favicon-16x16.png","/favicon-32x32.png","/android-chrome-192x192.png"],"additional":[],"optional":[]},"externals":["/offline-service-worker.js","/manifest.json","/favicon-16x16.png","/favicon-32x32.png","/android-chrome-192x192.png"],"hashesMap":{"e29bb46df1d1272e4874070ddd31b75151aeb56d":"/fonts/Framework7Icons-Regular.bb6aae4.eot","525b213b2d8c7cd98b71144e1ba89b6bfd0d37ac":"/fonts/Framework7Icons-Regular.9900d2b.ttf","1f18601b6c9eaffed38b56de00c407a50d0b3585":"/fonts/Framework7Icons-Regular.eb7a418.woff","13ad3ae228a5ee0a9ab54fa3af3b6168711bc911":"/fonts/Framework7Icons-Regular.f3e1eae.woff2","26fb8cecb5512223277b4d290a24492a0f09ede1":"/fonts/MaterialIcons-Regular.e79bfd8.eot","fc05de31234e0090f7ddc28ce1b23af4026cb1da":"/fonts/MaterialIcons-Regular.a37b0c0.ttf","c6c953c2ccb2ca9abb21db8dbf473b5a435f0082":"/fonts/MaterialIcons-Regular.012cf6a.woff","09963592e8c953cc7e14e3fb0a5b05d5042e8435":"/fonts/MaterialIcons-Regular.570eb83.woff2","0bf225d6455da0e91365bd551fc4ff6d7f971413":"/img/i-f7-ios.b356cb6.png","1446bca78695b5b45d348ac71ccbc5aaab8c9fb0":"/img/i-f7-material.ccc2c70.png","47d1d7a210ea9565e4748b9878e94677e0c91f7a":"/img/flag-de.69735e1.png","15821e554147c8cff9624921a4ecf25e997b9595":"/img/flag-en.500a285.png","29edde98e8f0df6be5e5872f2137c1b6182e9fff":"/img/firebase.472015e.png","d1e71184048900668a0e3161cafdabc997242741":"/img/theme-ios.48f912f.png","c6af447fda569dbbd1b1ab0830e5db0a70eede5d":"/img/theme-material.381a2ea.png","3eefea6abd2571d6d3259da64c0ba63c95d11d51":"/app.3278eb9.js","33feeaa50127e1e95d67bc0677d47594d909d834":"/init.3278eb9.js","3727ddbe71b01c728644a8905d48776b528947c5":"/material.3278eb9.js","bf91555370e45c210bbd56d4278bf4c9a7c8c6b0":"/ios.3278eb9.js","49e2cb62b71148915078dd81bea28eb256152624":"/app.3278eb9.css","ce61b0b775525573c084c10993139f22ee7fe775":"/init.3278eb9.css","0a7318ae7bd21979d37e3dc950d978846c36d142":"/ios.3278eb9.css","f720bb099459a0fa4b34bbd3612d408b00f1f9a1":"/material.3278eb9.css","bd7fc409bf748ca3c5ff964e05c4700b27ce9cb8":"/"},"strategy":"changed","responseStrategy":"cache-first","version":"v1.13.3","name":"webpack-offline","pluginVersion":"4.8.3","relativePaths":false};

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(e,n){function t(){if(!P.additional.length)return Promise.resolve();var e=void 0;return e="changed"===b?c("additional"):r("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function r(n){var t=P[n];return caches.open(W).then(function(n){return x(n,t,{bust:e.version,request:e.prefetchRequest})}).then(function(){f("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function c(n){return h().then(function(t){if(!t)return r(n);var o=t[0],i=t[1],a=t[2],c=a.hashmap,u=a.version;if(!a.hashmap||u===e.version)return r(n);var s=Object.keys(c).map(function(e){return c[e]}),l=i.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),h=P[n],d=[],v=h.filter(function(e){return l.indexOf(e)===-1||s.indexOf(e)===-1});Object.keys(R).forEach(function(e){var n=R[e];if(h.indexOf(n)!==-1&&v.indexOf(n)===-1&&d.indexOf(n)===-1){var t=c[e];t&&l.indexOf(t)!==-1?d.push([t,n]):v.push(n)}}),f("Changed assets: "+n,v),f("Moved assets: "+n,d);var p=Promise.all(d.map(function(e){return o.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(W).then(function(n){var t=p.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([t,x(n,v,{bust:e.version,request:e.prefetchRequest})])})})}function l(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(S)&&0!==e.indexOf(W))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function h(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(S)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(j,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function d(){return caches.open(W).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:R}));return n.put(new URL(j,location).toString(),t)})}function v(e,n,t){return o(t,W).then(function(r){if(r)return r;var o=fetch(e.request).then(function(r){return r.ok?(t===n&&!function(){var t=r.clone(),o=caches.open(W).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(o)}(),r):r});return o})}function p(e,n,t){return fetch(e.request).then(function(e){if(e.ok)return e;throw new Error("Response is not ok")}).catch(function(){return o(t,W)})}function m(e){return e.catch(function(){}).then(function(e){var n=e&&e.ok,t=e&&"opaqueredirect"===e.type;return n||t&&!F?e:o(C,W)})}function g(){Object.keys(P).forEach(function(e){P[e]=P[e].map(function(e){var n=new URL(e,location);return n.hash="",U.indexOf(e)===-1&&(n.search=""),n.toString()})}),Object.keys(E).forEach(function(e){E[e]=E[e].map(function(e){var n=new URL(e,location);return n.hash="",U.indexOf(e)===-1&&(n.search=""),n.toString()})}),R=Object.keys(R).reduce(function(e,n){var t=new URL(R[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),U=U.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})}function x(e,n,t){var r=t.allowLoaders!==!1,o=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(n.map(function(e){return o&&(e=i(e,o)),fetch(e,a).then(u)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(w(n[o],t)),e.put(n[o],t)});return i.length?!function(){var r=s(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return n.length&&(o=o.concat(x(e,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function w(e,n){var t=Object.keys(E).map(function(t){var r=E[t];if(r.indexOf(e)!==-1&&O[t])return O[t](n.clone())}).filter(function(e){return!!e});return Promise.all(t).then(function(e){return[].concat.apply([],e)})}function y(e){var n=e.url,t=new URL(n),r=void 0;r="navigate"===e.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<k.length;o++){var i=k[o];if(i&&(!i.requestTypes||i.requestTypes.indexOf(r)!==-1)){var a=void 0;if(a="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to),a&&a!==n)return a}}}var O=n.loaders,k=n.cacheMaps,b=e.strategy,q=e.responseStrategy,P=e.assets,E=e.loaders||{},R=e.hashesMap,U=e.externals,S=e.name,L=e.version,W=S+":"+L,j="__offline_webpack__data";g();var _=[].concat(P.main,P.additional,P.optional),C=e.navigateFallbackURL,F=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===b?c("main"):r("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=t();n=n.then(d),n=n.then(l),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(n)}),self.addEventListener("fetch",function(e){var n=new URL(e.request.url);n.hash="";var t=n.toString();U.indexOf(t)===-1&&(n.search="",t=n.toString());var r="GET"===e.request.method,o=_.indexOf(t)!==-1,i=t;if(!o){var c=y(e.request);c&&(i=c,o=!0)}if(!o&&r&&C&&a(e.request))return void e.respondWith(m(fetch(e.request)));if(!o||!r)return void(n.origin!==location.origin&&navigator.userAgent.indexOf("Firefox/44.")!==-1&&e.respondWith(fetch(e.request)));var u=void 0;u="network-first"===q?p(e,t,i):v(e,t,i),C&&a(e.request)&&(u=m(u)),e.respondWith(u)}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}function o(e,n){return caches.match(e,{cacheName:n}).then(function(t){return c()?t:u(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function i(e,n){var t=e.indexOf("?")!==-1;return e+(t?"&":"?")+"__uncache="+encodeURIComponent(n)}function a(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||(e.headers.get("Accept")||"").indexOf("text/html")!==-1}function c(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function u(e){if(c(e))return Promise.resolve(e);var n="body"in e?Promise.resolve(e.body):e.blob();return n.then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function s(e){return Object.keys(e).reduce(function(n,t){return n[t]=e[t],n},{})}function f(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}!function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}();r(__wpo,{loaders:{},cacheMaps:[]}),e.exports=t(1)},function(e,n){}]);