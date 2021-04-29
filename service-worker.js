importScripts("precache-manifest.4faaddb85947e18f5779fbf86acc88cc.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
    /.*/,
    new workbox.strategies.StaleWhileRevalidate()
);
