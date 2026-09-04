# Backend benchmark protocol

The backend must be measured against the pinned release, not a tiny fixture. Record:

- host OS, CPU, RAM, Go version and filesystem;
- repository commit and `data/manifest.json.datasetVersion`;
- command line, concurrency and request mix;
- cold process startup, first routed search, warm routed search, entity/evidence lookup, resource range and sync-page timings;
- p50, p95 and p99 latency, requests/second, response bytes and peak RSS.

Suggested repeatable commands after starting the server on `:8787`:

```powershell
go -C backend test ./...
go -C backend run ./cmd/evo-index -data-root .. -out index/current.json -tree-out index/catalogue-tree.bin
curl.exe -s http://127.0.0.1:8787/v1/releases/current > $null
curl.exe -s "http://127.0.0.1:8787/v1/search/names?q=perissodactyla&limit=20" > $null
curl.exe -s -H "Range: bytes=0-1048575" http://127.0.0.1:8787/v1/resources/data/paleogeography/series/coastlines/ma-0000.000.json.gz > $null
```

The `evo-index` run is intentionally an import/build-cost measurement: it hashes the complete current data tree and emits the rebuildable packed hierarchy artifact. It should be reported separately from API cold and warm latency. With `backend/index/catalogue-tree.bin` present and matching the current release fingerprint, startup loads the resident tree directly; without it, startup rebuilds the artifact in memory from canonical gzip-NDJSON node shards. Search queries decompress only routed name shards; the raw fallback cache and typed search cache are independently byte-bounded. No result from the current implementation should be called “best possible”; compare alternatives only on the same release, route, artifact state, machine and concurrency.

This repository currently records the benchmark method rather than inventing hardware-specific numbers. Run and retain measured output when CI or a target device is available.
