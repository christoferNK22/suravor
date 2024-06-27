import CacheHelper from './utils/cache-helper';

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
];

self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});
   
self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker ...');
   
    // TODO: Delete old caches
});
   
self.addEventListener('fetch', (event) => {
    console.log(event.request);
   
    event.respondWith(fetch(event.request));
    // TODO: Add/get fetch request to/from caches
});