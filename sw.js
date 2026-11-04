'use strict';
const CACHE_NAME = 'corrida-zero-v2.0.0';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(APP_SHELL.map(async url => {
      try { const response = await fetch(url, {cache:'reload'}); if (response.ok) await cache.put(url, response); }
      catch (error) { console.warn('Não foi possível armazenar', url, error); }
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('corrida-zero-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(request);
    try {
      const fresh = await fetch(request);
      if (fresh.ok) { const cache = await caches.open(CACHE_NAME); cache.put(request, fresh.clone()); }
      return fresh;
    } catch (error) { return cached || (request.mode === 'navigate' ? caches.match('./index.html') : Response.error()); }
  })());
});
