// service-worker.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

if (workbox) {
  // Precache assets during installation
  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '123456' }, // Add your main entry point
    { url: '/css/style.css', revision: 'abcdef' }, // Add your CSS file
    // Add other assets you want to precache
  ]);

  // Cache strategies for dynamic content (e.g., API requests)
  workbox.routing.registerRoute(
    new RegExp('/api/v1/'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'api-cache',
    })
  );

  // Default to Network First strategy for other requests
  workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());
} else {
  console.error('Workbox could not be loaded. Are you offline?');
}

// Add this inside your service worker file
workbox.routing.setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case 'document':
      return caches.match('/pahez/offline.html');

    default:
      return Response.error();
  }
});