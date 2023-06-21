// sw.js 파일에 추가
const CACHE_NAME = "pomodoro-cache-v1";
const urlsToCache = [
  ".",
  "index.html",
  "icon.png",
  "splash.png",
  "app.js",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
    