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

const cacheName = "v1";

const resourcesToPrecache = [
    '/',
    '/apple-touch-icon.png',
    '/img/apple-touch-icon.png',
    '/img/arrow-back.svg',
    '/img/logo.png',
    '/img/logo2.png',
    '/img/logo3.png',
    '/img/logo4.png',
    '/img/pause-btn.svg',
    '/img/tuto1.png',
    '/img/tuto2.png',
    '/img/play-btn.svg',
    '/img/restart-btn.svg',
    '/img/github.svg',
    '/img/insta.svg',
    '/img/tracos.svg',
    '/sound/sound.wav',
    '/css/bootstrap.min.css',
    '/js/main.js',
    '/js/script.js',
    '/js/bootstrap.min.js',
    '/js/jquery-3.5.1.slim.min.js',
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