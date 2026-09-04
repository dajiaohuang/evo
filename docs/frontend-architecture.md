# Frontend architecture

## Current release boundary

Evo Atlas currently ships one React/TypeScript application with three delivery
targets:

- Web uses the Vite client and static, checksum-addressed runtime data.
- Android and iOS use Capacitor shells around the same React client. They are
  native delivery targets, but they are not yet independent native frontend
  implementations.
- GitHub Pages can opt into `VITE_PAGES_PREVIEW=true`. This produces the
  `github-pages-preview` edition: dashboard, tutorial, time/map scenes, the
  selected resource packages, selected events and selected stories. Full
  directories, the Catalogue of Life nomenclatural registry and research tools
  stay out of the artifact and are also blocked in the client.

The ordinary Web build remains `full-web` with the `web-light` delivery profile.
Mobile builds remain `native-full`; the Pages flag does not change mobile
behavior.

The complete Web build may set `VITE_EVO_API_BASE_URL` to the Go service. When
set, the full Catalogue tree and nomenclatural search use the current backend
protocol directly; a failed or stale backend response is surfaced instead of
silently falling back to an older protocol or raw hierarchy shard. Pages
preview never uses this endpoint.

## Target independent frontends

The target is three independently testable frontend applications that share
contracts and scientific data semantics, not duplicated scientific facts:

| Frontend | Primary delivery | Local data policy | Backend use |
| --- | --- | --- | --- |
| Web | Vite/PWA and static host | Full Web or explicit Pages preview edition | Optional online enrichment; static release remains usable |
| Android | Native shell and native interaction layer | Full offline release, local index and resumable sync | Release discovery, entity/evidence queries, sync and optional search |
| iOS | Native shell and native interaction layer | Full offline release, local index and resumable sync | Same protocol as Android |

Until the native implementations are split out, new product behavior should be
expressed in shared route/data contracts first and then implemented by each
target. The Web client must not become the accidental specification for native
navigation or storage.

## Protocol seam

The Go service is the online adapter for the native clients and optional Web
enrichment. The first contract is intentionally read-oriented:

- `GET /v1/capabilities` returns `schemaVersion`, `apiVersion`,
  `datasetVersion`, `appVersion`, supported `profiles`, `features` and the
  service `baseUrl`.
- `GET /v1/releases/current` returns the immutable release manifest and the
  selected delivery profiles.
- `GET /v1/entities/{id}`, `/children`, and `/evidence` return
  `datasetVersion`, `entityId`, `parentId` where applicable, paginated `items`
  and `nextCursor`.
- `GET /v1/search/names` returns `records`, `totalMatches` and `nextCursor`.
  Nomenclatural registry results must remain visibly distinct from Atlas
  evidence dossiers; the Pages preview intentionally omits the registry.
- `GET /v1/capabilities` advertises `treeIndex.representation:
  "packed-adjacency"`, its resident node count, `paging: "offset-cursor"`,
  `children: "direct-children"`, `windowed: true`, `releaseAlias`, and the
  current `treeRoots` summaries. The current contract also declares
  `rootCount`, the record and children endpoints, the default and maximum page
  sizes, and the ordered compact `recordFields` list. The frontend rejects a
  response that does not match this contract; it does not negotiate an older
  tree format. The frontend uses this as the only launch contract for the
  complete Catalogue tree.
- The complete tree keeps only fetched direct-child pages and the expanded
  path in application memory. It renders a fixed-height viewport window with
  overscan, so a 2.4-million-node index remains fully addressable without
  creating 2.4 million DOM nodes. Collapsing a branch releases its descendant
  pages from the UI state.
- `GET /v1/resources/{path}` supports byte-range download and resume with
  `Accept-Ranges`, `Content-Range`, `ETag` and `If-Range`.
- `GET /v1/sync/files` returns `path`, `profile`, `bytes`, `sha256`,
  `mediaType`, `releaseVersion` and optional `deltaFrom` entries.

Every client should treat a release manifest and its hashes as the authority
for offline data. A server response must not silently mix dataset versions;
the client surfaces a mismatch before accepting a shared state or evidence
result.

## Scientific display boundary

The Pages edition keeps the web preview paleotopography series and its 109
source frames, but advertises the web-preview 0.3-degree sampling boundary.
The native-full profile retains the finer release payload. Neither delivery
profile implies that a coarse preview is co-registered with the native grid or
that a modelled reconstruction is a direct observation. CAO occurrence
coordinates and PaleoDEM/model layers remain separate evidence types in every
frontend.
