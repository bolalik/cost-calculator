!function(){"use strict";const e=["client/client.b850d751.js","client/index.5c3b606b.js","client/_layout.9b3756b2.js","client/index.c6cf5708.js","client/result.41df787f.js"].concat(["service-worker-index.html","android.svg","anonymous.svg","apple.svg","browser.svg","domain.svg","favicon.png","global.css","manifest.json","negative-vote.svg","positive-vote.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1590439312764").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1590439312764"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590439312764").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
