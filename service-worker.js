!function(){"use strict";const e=["client/visuals.61fcb6f1.js","client/chunk.0280520f.js","client/screenplay.12c4dd5a.js","client/jams.aa62105e.js","client/index.faae5b0e.js","client/client.76717152.js"].concat(["service-worker-index.html","IMG_3007.GIF","apple.png","applemusic.png","botanicalscreenplaycover.jpg","coop.ttf","cooperregular.ttf","favicon.png","global.css","great-success.png","icon.png","logo-192.png","logo-512.png","manifest.json","marketberri.png","pdf/Botanical.epub","pdf/Botanical.pages","pdf/BotanicalLocked.pdf","pdf/BotanicalUnlocked.pdf","pdf/botanicalVert.pdf","reedcat.png","rubber.png","soundcloud.png","spotify.png","tidal.jpg","vineberri.PNG"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1593797187252").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1593797187252"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1593797187252").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const a=await t.match(e.request);if(a)return a;throw n}}))))})}();
