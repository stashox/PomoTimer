if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('PomoTimer/sw.js')
        .then((reg) => {
            console.log('Service Worker registrado', reg);
        }).catch((err) => {
            console.log('Erro', err);
        });
    });
}

const cacheName = "v1";

const resourcesToPrecache = [
    './index.html',
    './',
    './apple-touch-icon.png',
    './arrow-back.svg',
    './logo.png',
    './logo2.png',
    './logo3.png',
    './logo4.png',
    './pause-btn.svg',
    './tuto1.png',
    './tuto2.png',
    './play-btn.svg',
    './restart-btn.svg',
    './sound.wav',
    './estilomobile.css',
    './estilomobile2.css',
    './estilo.css',
    './bootstrap.min.css',
    './main.js',
    './script.js',
    './bootstrap.min.js',
    './jquery-3.5.1.slim.min.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => (cache.addAll(resourcesToPrecache))),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(cacheResponse => (cacheResponse || fetch(event.request))),
    );
});