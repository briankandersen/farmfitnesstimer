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

// Fetch: Network-first for HTML, Cache-first for alt andet (fonts etc.)
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Lad PayPal og analytics gå direkte til netværket
  if (url.hostname.includes('paypal.com') || url.hostname.includes('google-analytics')) {
    return;
  }

  // NETWORK FIRST for selve appen (HTML-filen)
  if (e.request.mode === 'navigate' || e.request.headers.get('accept').includes('text/html')) {
    e.respondWith(
      fetch(e.request).then(response => {
        // Vi har forbindelse! Gem den nyeste version i cachen til offline-brug
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, response.clone());
          return response;
        });
      }).catch(() => {
        // Hvis brugeren er offline, vis den gemte version
        return caches.match('./index.html');
      })
    );
    return;
  }

  // CACHE FIRST for alt andet (f.eks. Google Fonts)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request).then(response => {
        if (!response || response.status !== 200) return response;
        if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {});
    })
  );
});
