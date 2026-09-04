# Backend protocol v1

All JSON endpoints include `protocolVersion: "v1"` where the response describes a release. Errors have the form:

```json
{"error":{"code":"...","message":"..."}}
```

## Release and capabilities

`GET /v1/capabilities` advertises endpoint support and distinguishes the complete offline `full` profile from client-side Pages preview behavior. It returns stable `schemaVersion`, `apiVersion`, `datasetVersion`, `appVersion`, `profiles`, `features` and `baseUrl` fields. `GET /v1/releases/current` returns the current dataset/app versions, counts, limitations, source summary, and a file inventory summary. It intentionally does not claim global completeness: the canonical manifest's `wholeLifeCoverageClaim` remains false.

## Entity and catalogue queries

`GET /v1/entities/{id}` returns the canonical registry entity plus its optional narrative profile and range evidence. `/children` is paginated and reports `represented-descendant-closure` for atlas navigation entities. `/evidence` returns source-bounded ranges, claims and resolved references. Entity, children and evidence payloads carry `datasetVersion` and an `entityId` or `parentId`.

COL26.8 species and higher-taxon records are addressed separately at `/v1/catalogue/taxa/{id}` and `/v1/catalogue/taxa/{id}/children`. `GET /v1/search/names` combines the 403 atlas entities with routed COL name shards. Search returns `records`, `totalMatches` and an opaque base64url `nextCursor`; each record identifies whether it is an Atlas dossier or a nomenclatural-registry result. The COL search minimum is three normalized characters. Cursors must only be reused with the same query and release.

## Resources and sync

`GET /v1/resources/data/...` is a byte-preserving delivery endpoint. It rejects paths outside `data/`, sets a strong SHA-256 `ETag`, and supports `Range`, `If-Range`, `If-None-Match`, `HEAD`, and immutable cache headers. It does not add HTTP content decompression, allowing native clients to verify exact compressed bytes.

`GET /v1/sync/files?profile=full` returns a sorted, stable file page. Each descriptor includes `path`, `profile` at the response level, `bytes`, `sha256`, `mediaType`, `encoding`, `releaseVersion`, and is addressable below `/v1/resources/`. `limit` defaults to 500 and is capped at 5,000. `nextCursor` resumes the exact file list. `since=<current datasetVersion>` returns `upToDate: true` with no files; other versions receive the current full inventory and `deltaFrom` records the requested version.

## Maps, scenes and packages

`/v1/maps/manifest` indexes all six paleogeography series layers by numeric frame age and includes observation and paleotopography manifests. Frame selection metadata is nearest-frame and younger-on-tie, matching the static client contract. `/v1/scenes` exposes committed story/event resources, and `/v1/packages/{id}` exposes package metadata plus canonical file descriptors for offline acquisition.

`GET /v1/maps/frame?layer=<layer>&ageMa=<number>` applies the same nearest-frame policy and returns the selected resource URL plus selection delta. Requests outside the published frame range return `404`; no temporal or spatial interpolation is performed.
