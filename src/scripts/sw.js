import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

async function precacheAssets() {
  const assetsToCache = [
    './',
    '../public/icons/icon-16x16.png',
    '../public/icons/icon-32x32.png',
    '../public/icons/icon-180x180.png',
    '../public/icons/icon-192x192.png',
    '../public/icons/icon-512x512.png',
    '../public/images/heros/hero-image_4.jpg',
    '../public/images/LogoBrand.png',
    './views/templates/index.html',
    './views/app.bundle.js',
    './public/app.webmanifest',
    './sw.bundle.js',
    './index.js',
  ];

  try {
    await CacheHelper.cachingAppShell(assetsToCache);
  } catch (error) {
    console.error('Error caching app shell:', error);
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(precacheAssets());
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
  console.log('Service Worker: Activated');
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('https://restaurant-api.dicoding.dev')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; 
        }

        return fetch(event.request).then((response) => {
          caches.open('therestaurantdb-api').then((cache) => {
            cache.put(event.request, response.clone());
          });
          return response;
        });
      })
    );
  } else if (event.request.url.startsWith('https://restaurant-api.dicoding.dev/images/medium/')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; 
        }

        return fetch(event.request).then((response) => {
          caches.open('therestaurantdb-image-api').then((cache) => {
            cache.put(event.request, response.clone());
          });
          return response;
        });
      })
    );
  } else {
   
    event.respondWith(fetch(event.request));
  }
});
