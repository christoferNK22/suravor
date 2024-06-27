import 'regenerator-runtime';
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
    event.waitUntil(CacheHelper.deleteOldCache());
});
   
self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
});