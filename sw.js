const cacheName = 'simulador-v1';
const assets = [
  './',
  './index.html',
  './estilo.css',
  './script.js',
  './icone.png'
];

// Instala e faz o cache dos arquivos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde com o cache mesmo offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
