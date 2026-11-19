// Verhoog CACHE_NAME (en de ?v= in index.html) bij elke wijziging van de app-bestanden.
const CACHE_NAME = "tuinplanner-20261119";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20261119",
  "./app.js?v=20261119",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      // Alleen eigen caches opruimen; de audio-editor op hetzelfde domein heeft zijn eigen cache.
      .then((keys) => Promise.all(keys
        .filter((key) => key.startsWith("tuinplanner") && key !== CACHE_NAME)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  // De audio-editor in de submap regelt zijn eigen offline-cache.
  if (url.origin !== self.location.origin || url.pathname.includes("/audio-editor/")) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html", { ignoreSearch: true }))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cached) => cached || fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        }))
  );
});
