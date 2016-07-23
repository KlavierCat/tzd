var cacheName = 'tzd-pwa';
var filesToCache = [];

var filesToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/inventory.html',
  '/map.html',
  '/images/Favicon.png',
  '/images/icon-about-hover.png',
  '/images/icon-about.png',
  '/images/icon-facebook-hover.png',
  '/images/icon-facebook.png',
  '/images/icon-menu-background.png',
  '/images/icon-mute-false-hover.png',
  '/images/icon-mute-false.png',
  '/images/icon-mute-true-hover.png',
  '/images/icon-mute-true.png',
  '/images/icon-twitter-hover.png',
  '/images/icon-twitter.png',
  '/images/icon_inventory.png',
  '/images/icon_inventory_hover.png',
  '/images/icon_map.png',
  '/images/icon_map_hover.png',
  '/images/Lock_v2.png',
  '/images/logo-trans.png',
  '/images/map.jpg',
  '/images/marker.png',
  '/images/opening_page_background.jpg',
  '/images/right.png',
  '/assets/aboutcss.css',
  '/assets/audiostore.js',
  '/assets/audiostore1.js',
  '/assets/audiostoreNoUpdateEvidence.js',
  '/assets/audiostorevideo.js',
  '/assets/carousel.js',
  '/assets/cia-memo.css',
  '/assets/jquery-1.11.1.min.js',
  '/assets/jquery.slimscroll.min.js',
  '/assets/leaflet.css',
  '/assets/leaflet.js',
  '/assets/map.js',
  '/assets/markers.geojson',
  '/assets/opening_page.css',
  '/assets/openingpage.js',
  '/assets/scroll.js',
  '/assets/site.css',
  '/timeline-previews/Lock_v2.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

