importScripts("precache-manifest.4faaddb85947e18f5779fbf86acc88cc.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
    /\.(?:css|js|html)$/,
    new workbox.strategies.StaleWhileRevalidate({
        "cacheName": 'assets',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 1000,
                maxAgeSeconds: 60,
            })
        ]
    })
);


workbox.routing.registerRoute(
    /\.(?:gif|jpg|png)$/,
    new workbox.strategies.CacheFirst({
        "cacheName": 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 1000,
                maxAgeSeconds: 60,
            })
        ]
    })
);
