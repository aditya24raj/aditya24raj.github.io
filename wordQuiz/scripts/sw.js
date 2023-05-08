// Files to cache
const cacheName = 'wq-v2';
const contentToCache = [
  '/wordQuiz/index.html',
  '/wordQuiz/scripts/main.js',
  '/wordQuiz/lexis/a',
  '/wordQuiz/lexis/b',
  '/wordQuiz/lexis/c',
  '/wordQuiz/lexis/d',
  '/wordQuiz/lexis/e',
  '/wordQuiz/lexis/f',
  '/wordQuiz/lexis/g',
  '/wordQuiz/lexis/h',
  '/wordQuiz/lexis/i',
  '/wordQuiz/lexis/j',
  '/wordQuiz/lexis/k',
  '/wordQuiz/lexis/l',
  '/wordQuiz/lexis/m',
  '/wordQuiz/lexis/n',
  '/wordQuiz/lexis/o',
  '/wordQuiz/lexis/p',
  '/wordQuiz/lexis/q',
  '/wordQuiz/lexis/r',
  '/wordQuiz/lexis/s',
  '/wordQuiz/lexis/t',
  '/wordQuiz/lexis/u',
  '/wordQuiz/lexis/v',
  '/wordQuiz/lexis/w',
  '/wordQuiz/lexis/x',
  '/wordQuiz/lexis/y',
  '/wordQuiz/lexis/z'];

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    // Cache http and https only, skip unsupported chrome-extension:// and file://...
    if (!(
       e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
    )) {
        return; 
    }

  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return;
          }
          return caches.delete(key);
        })
      );
    })
  );
});