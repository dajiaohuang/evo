# Evo Go backend

This is the shared HTTP backend for the complete Evo Atlas release used by Web, Android and iOS. It reads the repository's canonical `data/` tree; it does not create a second scientific dataset and it does not treat the GitHub Pages light client as a permission boundary.

## Run

From the repository root:

```powershell
go -C backend run ./cmd/evo-api -data-root .. -addr :8787
```

The server starts only after loading the current release, the core 403-entry registry, profiles, ranges, claims, references, package registry and COL26.8 manifest. Large COL hierarchy/name shards, map frames and payload files remain lazy.

Useful endpoints:

```text
GET /healthz
GET /v1/capabilities
GET /v1/releases/current
GET /v1/entities/{id}
GET /v1/entities/{id}/children
GET /v1/entities/{id}/evidence
GET /v1/search/names?q=perissodactyla&limit=20
GET /v1/catalogue/taxa/{id}
GET /v1/catalogue/taxa/{id}/children
GET /v1/packages/{packageId}
GET /v1/scenes?kind=stories|events
GET /v1/maps/manifest
GET /v1/maps/frame?layer=coastlines&ageMa=12.4
GET /v1/resources/{data-relative-path}
GET /v1/sync/files?profile=full&limit=500&cursor=...
```

`/v1/resources` returns original bytes from `data/`, with a strong SHA-256 ETag, `Range`/`If-Range`, and immutable caching. Gzip payloads are deliberately served as bytes with `Content-Type: application/gzip`; clients decompress according to the descriptor's `encoding` field.

The full offline profile is the native client data contract. Sync is stable-path paginated, so an interrupted download resumes from `nextCursor` and each file can resume with `Range`. If `since` equals the current dataset version, the response is an empty up-to-date set.

## Build the deterministic inventory

The server can start using checksums already recorded in `data/manifest.json`. To create a complete hash-addressed index, including files whose digest is not in that generated map:

```powershell
go -C backend run ./cmd/evo-index -data-root .. -out index/current.json
```

The command walks the exact data tree, calculates SHA-256 with bounded memory, and replaces the output by atomic rename. The generated index is a delivery artifact, not a replacement for `data/manifest.json`.

## Design and scientific boundaries

- Atlas entity queries use the generated 403-entry registry and explicitly label represented descendant closure; this is navigation data, not a complete phylogeny.
- COL26.8 accepted species, resolving usages, hierarchy and accepted targets are queried through committed prefix/routing manifests. Requests never decompress all 2.18 million accepted species.
- Evidence responses preserve source-bounded claim, range, reference and uncertainty records already present in `data/`.
- Map responses expose nearest-frame selection metadata and preserve separate reconstructed geometry, observation and paleotopography resources. No interpolation is introduced.
- A release reload constructs a new immutable snapshot and swaps it under a lock. The executable uses one startup snapshot; an embedding host can call `Store.Reload` for the same atomic replacement without serving a partially imported version.

## Test

```powershell
go -C backend test ./...
```

Tests exercise the current pinned release data for entity queries, evidence, routed name search, children, range/ETag resources, sync descriptors and scene payloads. They are functional checks, not a claim that the underlying scientific release is exhaustive.
