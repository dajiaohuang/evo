# GitHub Pages release checklist

1. Run `npm ci` with the repository lockfile.
2. Run `npm run data:validate` and confirm the manifest matches every bundled source.
3. Run `npm run lint` and `npm test`.
4. Run `npm run build`; confirm `dist/manifest.webmanifest`, `dist/sw.js` and the Workbox runtime exist.
5. Serve `dist` under `/evo/` and probe `/evo/`, `/evo/manifest.webmanifest` and `/evo/sw.js`.
6. Check keyboard navigation, the skip link, mobile Explorer drawers and reduced-motion behavior.
7. Confirm that offline reload works after one connected visit.
8. Push `main`; GitHub Actions validates before uploading the Pages artifact.
