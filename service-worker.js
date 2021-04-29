importScripts("/precache-manifest.3a2f916c2ac856207e7526b848b9ef5a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
    new RegExp('.*'),
    new workbox.strategies.CacheFirst()
);
