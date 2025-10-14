// Blocks any cross-origin requests at runtime. Allows same-origin static files and blob/data URLs.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const sameOrigin = url.origin === location.origin;
  if (!sameOrigin) {
    event.respondWith(new Response('Blocked by offline policy', { status: 403 }));
    return;
  }
  event.respondWith(fetch(event.request));
});
