if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
            console.log('Service Worker registrado', reg);
        }).catch((err) => {
            console.log('Erro', err);
        });
    });
}

const cacheName = "v2";

const resourcesToPrecache = [
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
    './github.svg',
    './insta.svg',
    './tracos.svg',
    './sound.wav',
    './bootstrap.min.css',
    './main.js',
    './script.js',
    './bootstrap.min.js',
    './jquery-3.5.1.slim.min.js',
    './index.html',
    './estilo.css',
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