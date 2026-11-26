const VERSION='nithi-gc-1.17';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin) return;
  e.respondWith(caches.open(VERSION).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{ if(res&&res.ok) c.put(r,res.clone()); return res; }).catch(()=>null);
    if(hit){ e.waitUntil(net); return hit; }
    const res=await net;
    return res||(r.mode==='navigate'?c.match('index.html'):Response.error());
  }));
});
