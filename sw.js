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
    'PomoTimer/index.html',
    '/',
    'PomoTimer/apple-touch-icon.png',
    'PomoTimer/apple-touch-icon.png',
    'PomoTimer/arrow-back.svg',
    'PomoTimer/logo.png',
    'PomoTimer/logo2.png',
    'PomoTimer/logo3.png',
    'PomoTimer/logo4.png',
    'PomoTimer/pause-btn.svg',
    'PomoTimer/tuto1.png',
    'PomoTimer/tuto2.png',
    'PomoTimer/play-btn.svg',
    'PomoTimer/restart-btn.svg',
    'PomoTimer/sound.wav',
    'PomoTimer/estilomobile.css',
    'PomoTimer/estilomobile2.css',
    'PomoTimer/estilo.css',
    'PomoTimer/bootstrap.min.css',
    'PomoTimer/main.js',
    'PomoTimer/script.js',
    'PomoTimer/bootstrap.min.js',
    'PomoTimer/jquery-3.5.1.slim.min.js',
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