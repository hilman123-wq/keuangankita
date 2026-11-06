// sw.js - Service Worker untuk membuat Web App bisa di-install (PWA)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('keuangan-store').then((cache) => cache.addAll([
      './index.html',
      './manifest.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  // Hanya ambil dari jaringan untuk memastikan data real-time, jika gagal baru ambil cache
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});