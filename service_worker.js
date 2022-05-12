const CACHE_NAME = 'v1';
const APP_NAME = 'music-apps'
const CACHE = [
        '/'+APP_NAME+'/index.html',
        '/'+APP_NAME+'/css/bundle.css',
        '/'+APP_NAME+'/js/bundle.js'
      ];
	
self.addEventListener('install', function(event) {
    console.log(APP_NAME+': install');
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(CACHE);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(APP_NAME+': fetch');
    event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.match(event.request).then(function(response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

self.addEventListener('activate', function activator(event) {
    console.log(APP_NAME+': activate');
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function(key) {
                    return caches.delete(key);
                })
            );
        })
    );
});
