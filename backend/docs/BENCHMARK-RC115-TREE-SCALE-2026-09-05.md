# RC115 tree-scale benchmark record — 2026-09-05

Measured on the actual repository data at commit `712e3998b40f3735ef3cb7626587dac1f9284fdc` (`2026.09-static-v5-rc115`), not a fixture.

- Host: Windows `amd64`, 32 logical CPUs, Go `go1.26.3`, local D: filesystem.
- API command: `go -C backend run ./cmd/evo-bench -data-root .. -rounds 20 -concurrency 16`.
- The harness uses Go's loopback `httptest` server, consumes every response body, and runs `runtime.GC()` before reporting Go heap metrics. `startupLoadMs` measures snapshot construction after the process begins; it is not a full executable launch measurement. Heap values are Go heap metrics, not OS RSS.
- The packed artifact was produced with `go -C backend run ./cmd/evo-index -data-root .. -out index/current.json -tree-out index/catalogue-tree.bin` and is a derived cache, not a source dataset.
- The current resident hierarchy contains 2,429,092 nodes and 4 roots. Tree samples query the first root by node lookup and a 100-row direct-child page. Mixed concurrent traffic includes routed search, evidence and resident tree pages.

Observed output with a matching packed artifact:

| Sample | n | Errors | p50 | p95 | p99 | Response bytes | Wall-throughput |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Snapshot load | — | — | — | — | — | — | 289.808 ms load time |
| Cold routed search | 1 | 0 | 242.647 ms | 242.647 ms | 242.647 ms | 468 B | 4.12 req/s |
| Warm routed search | 20 | 0 | 3.509 ms | 4 ms | 4 ms | 9,360 B | 279.51 req/s |
| Resident tree node lookup | 20 | 0 | 0 ms* | 0 ms* | 0 ms* | 6,820 B | 19,998.00 req/s |
| Resident tree children page | 20 | 0 | 0 ms* | 0 ms* | 0 ms* | 21,440 B | 19,998.00 req/s |
| Entity evidence | 20 | 0 | 0 ms* | 1 ms | 1 ms | 109,880 B | 6,666.44 req/s |
| Resource Range | 20 | 0 | 0 ms* | 0.997 ms | 0.997 ms | 20,480 B | 7,980.21 req/s |
| Mixed concurrent | 320 | 0 | 1.002 ms | 6.514 ms | 7 ms | 741,664 B | 5,454.36 req/s |

At the end of the run, Go reported `heapAllocBytes=332,571,280` and `heapInuseBytes=341,925,888`. The packed artifact on disk was 266,936,495 bytes. The resident backing-buffer breakdown reported by the harness was: node table 97,163,680 B, string arena 140,621,769 B, categorical dictionaries 4,268 B, child index 9,716,352 B, ID lookup 50,331,648 B and root index 16 B, for 297,837,733 B before Go object headers and unrelated store data. A source-shard rebuild remains a separate build-path measurement and is intentionally not presented as a cold-disk benchmark. `0 ms*` means below the millisecond conversion precision used by this harness, not zero physical time.

The result demonstrates resident full-tree traversal and artifact startup behavior on RC115. It is not a claim of absolute best performance, production capacity, OS RSS, or scientific completeness. Re-run on target Android/iOS hardware and an external HTTP deployment before using device or network capacity numbers.
