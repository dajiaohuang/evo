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
go -C backend run ./cmd/evo-index -data-root .. -out index/current.json
curl.exe -s http://127.0.0.1:8787/v1/releases/current > $null
curl.exe -s "http://127.0.0.1:8787/v1/search/names?q=perissodactyla&limit=20" > $null
curl.exe -s -H "Range: bytes=0-1048575" http://127.0.0.1:8787/v1/resources/data/paleogeography/series/coastlines/ma-0000.000.json.gz > $null
```

The `evo-index` run is intentionally an import/build-cost measurement: it hashes the complete current data tree and should be reported separately from API cold and warm latency. API name and hierarchy queries decompress only routed gzip-NDJSON shards; a first request is cold for that shard and subsequent requests are warm from the bounded 128 MiB shard cache. No result from the current implementation should be called “best possible”; compare alternatives only on the same RC release, route, machine and concurrency.

This repository currently records the benchmark method rather than inventing hardware-specific numbers. Run and retain measured output when CI or a target device is available.
