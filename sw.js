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

const cacheName = "v2.22";

const resourcesToPrecache = [
    '/',
    '/assets/img/apple-touch-icon.png',
    '/assets/img/arrow-back.svg',
    '/assets/img/logo.png',
    '/assets/img/logo2.png',
    '/assets/img/logo3.png',
    '/assets/img/logo4.png',
    '/assets/img/pause-btn.svg',
    '/assets/img/tuto1.png',
    '/assets/img/tuto2.png',
    '/assets/img/play-btn.svg',
    '/assets/img/restart-btn.svg',
    '/assets/img/github.svg',
    '/assets/img/insta.svg',
    '/assets/img/tracos.svg',
    '/assets/sound.wav',
    '/assets/css/bootstrap.min.css',
    '/assets/js/main.js',
    '/assets/js/script.js',
    '/assets/js/bootstrap.min.js',
    '/assets/js/jquery-3.5.1.slim.min.js',
    '/index.html',
    '/assets/css/estilo.css',
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