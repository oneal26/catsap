!function(){"use strict";const e=["client/screenplay.12c4dd5a.js","client/visuals.cd9189d7.js","client/chunk.0280520f.js","client/jams.aa62105e.js","client/index.82e57d2b.js","client/client.4e4281d6.js"].concat(["service-worker-index.html","IMG_3007.GIF","apple.png","applemusic.png","botanicalscreenplaycover.jpg","coop.ttf","cooperregular.ttf","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","pdf/Botanical.epub","pdf/Botanical.pages","pdf/BotanicalLocked.pdf","pdf/BotanicalUnlocked.pdf","pdf/botanicalVert.pdf","reedcat.png","rubber.png","soundcloud.png","spotify.png","tidal.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1593729594495").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1593729594495"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1593729594495").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
