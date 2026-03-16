const CACHE_NAME = 'farm-fitness-timer-v1';

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700;800&family=Oswald:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;600&display=swap',
];

// Install: precache core assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate: ryd gamle caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for alt undtagen PayPal
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Lad PayPal og analytics gå direkte til netværket (aldrig cache)
  if (url.hostname.includes('paypal.com') || url.hostname.includes('google-analytics')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request).then(response => {
        // Cache kun gyldige svar (ikke fejl, ikke opaque redirects)
        if (!response || response.status !== 200) return response;

        // Cache Google Fonts CSS og font-filer for offline brug
        if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }

        return response;
      }).catch(() => {
        // Offline fallback: hvis alt fejler, vis cached index
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
