# Backend benchmark protocol

The backend must be measured against the pinned release, not a tiny fixture. Record:

- host OS, CPU, RAM, Go version and filesystem;
- repository commit and `data/manifest.json.datasetVersion`;
- command line, concurrency and request mix;
- cold process startup, first routed search, warm routed search, entity/evidence lookup, resource range and sync-page timings;
- p50, p95 and p99 latency, requests/second, response bytes and peak RSS.
- for full-release delivery, complete inventory count/bytes, transferred bytes, SHA-256/size mismatches, transfer throughput and a successful two-part Range resume hash.

Suggested repeatable commands after starting the server on `:8787`:

```powershell
go -C backend test ./...
go -C backend run ./cmd/evo-index -data-root .. -out index/current.json -tree-out index/catalogue-tree.bin
curl.exe -s http://127.0.0.1:8787/v1/releases/current > $null
curl.exe -s "http://127.0.0.1:8787/v1/search/names?q=perissodactyla&limit=20" > $null
curl.exe -s -H "Range: bytes=0-1048575" http://127.0.0.1:8787/v1/resources/data/paleogeography/series/coastlines/ma-0000.000.json.gz > $null
```

The opt-in full transfer check uses the same in-process HTTP handlers as the API and transfers every current `full` resource:

```powershell
go -C backend run ./cmd/evo-bench -data-root .. -full-sync -sync-concurrency 4
```

It also resumes the largest resource from the midpoint with `Range` and the descriptor's bare SHA-256 in `If-Range`; this matches the native sync client contract without retaining a legacy release format. Record the emitted JSON with the host and filesystem details below when reporting a run.

Use `-server-url` to exercise a real listening TCP socket instead of the in-process `httptest` handler:

```powershell
go -C backend run ./cmd/evo-bench -full-sync -server-url http://127.0.0.1:8787 -sync-concurrency 4
```

### RC143 full-sync evidence (2026-09-05)

Measured from commit `0bd9564ca84c2dbccf23f9ec318da7a12e91cef7` on Windows 10 Pro N `10.0.19045`, Go `1.26.3`, `windows/amd64`, 32 logical CPUs, 31.8 GiB RAM and NTFS. Command: `go -C backend run ./cmd/evo-bench -data-root .. -full-sync -sync-concurrency 4`. Dataset: `2026.09-static-v5-rc143`.

The run consumed the complete current inventory: 5,433 files and 987,650,919 advertised/transferred bytes, with 0 request errors and 0 size/hash mismatches. Handler transfer time was 336.013 ms (2,803.16 MiB/s; local filesystem cache may be warm). The largest resource, `data/sources/wfo-plant-crosswalk-col26.8.json.gz`, resumed in two `206` ranges (9,021,789 + 9,021,790 bytes) and the reassembled SHA-256 matched. This is an in-process HTTP/loopback transfer check, not a device-network throughput claim.

The same RC143 run through the real local TCP listener (`http-socket`) transferred all 5,433 files and 987,650,919 bytes with 0 errors and 0 hash/size mismatches in 564.91 ms (1,667.34 MiB/s). The largest resource resumed with `206` plus a matching reassembled SHA-256. The server process had 674.48 MiB working set and 680.29 MiB private memory after the run, with 2,429,092 resident tree nodes and 162 source-registry entries. These are same-host loopback/cache measurements, not internet or mobile-device throughput claims.

The source lookup was also exercised against the live listener: `GET /v1/sources/ChecklistBank/1008` returned `The Reptile Database` and its citation; `GET /v1/sources/World%20Spider%20Catalog%20via%20ChecklistBank/56185` returned `The World Spider Catalog`; `GET /v1/sources/unknown-authority/1008` returned `404`. A null-source tree node (`CRLT8`) returned `sourceDatasetId: null` with no inferred source. The current data audit counts 129 such null-source nodes; the backend preserves that shape.

The `evo-index` run is intentionally an import/build-cost measurement: it hashes the complete current data tree and emits the rebuildable packed hierarchy artifact. It should be reported separately from API cold and warm latency. With `backend/index/catalogue-tree.bin` present and matching the current release fingerprint, startup loads the resident tree directly; without it, startup rebuilds the artifact in memory from canonical gzip-NDJSON node shards. Search queries decompress only routed name shards; the raw fallback cache and typed search cache are independently byte-bounded. No result from the current implementation should be called “best possible”; compare alternatives only on the same release, route, artifact state, machine and concurrency.

This repository currently records the benchmark method rather than inventing hardware-specific numbers. Run and retain measured output when CI or a target device is available.
