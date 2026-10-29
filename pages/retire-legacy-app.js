// Existing Pages installations may retain the old app worker. Update only our
// own scope; do not remove local notes, imports, or other GitHub Pages workers.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) {
      if (registration.scope === new URL('/evo/', location.origin).href) {
        registration.update().catch(() => {})
      }
    }
  }).catch(() => {})
}
