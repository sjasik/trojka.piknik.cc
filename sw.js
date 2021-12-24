const cacheName = "piknik-pwa-cache";
const filesToCache = [
    "/",
    "/index.html",
    "https://piknik.cc/favicon.ico",
    "https://fonts.googleapis.com/css?family=Roboto:400,500,700,900",
    "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
    "https://cdn.jsdelivr.net/npm/vuetify@2.5.x/dist/vuetify.min.css",
    "https://cdn.jsdelivr.net/gh/sjasik/embeddable.piknik.cc@latest/css/app.css",
    "https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min.js",
    "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.js",
    "https://cdn.jsdelivr.net/gh/sjasik/embeddable.piknik.cc@latest/js/app.js",
    "https://cdn.jsdelivr.net/gh/sjasik/piknik.cc@latest/images/piknik-logo-white.svg",
    "https://cdn.jsdelivr.net/gh/sjasik/embeddable.piknik.cc@latest/img/demo/hero-image.jpg"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Network falling back to the cache */
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            console.log(caches)
            return caches.match(e.request);
        })
    );
});