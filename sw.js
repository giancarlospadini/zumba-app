const CACHE_NAME = 'zumba-v1';
const ASSETS = [
  '/zumba-app/',
  '/zumba-app/index.html',
  '/zumba-app/style.css',
  '/zumba-app/app.js',
  '/zumba-app/videos.js',
  '/zumba-app/manifest.json',
  '/zumba-app/offline.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        if (e.request.mode === 'navigate') {
          return caches.match('/zumba-app/offline.html');
        }
      });
      return cached || fetchPromise;
    })
  );
});
