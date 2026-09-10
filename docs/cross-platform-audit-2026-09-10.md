# Cross-platform reliability and scientific presentation audit

Baseline: `23d0cc33c08a397873faa1a7104b5f4ea1cfbe6e`. Tracking: [issue #308](https://github.com/dajiaohuang/evo/issues/308).

This audit follows the paths from canonical records through runtime generation, Web/native loading, analysis, import/export and Go HTTP delivery. It changes application behavior without changing canonical scientific records. It is an engineering audit, not an expert review of every scientific claim.

## Findings and changes

| Area | Reproduction or risk in the baseline | Result |
| --- | --- | --- |
| Observation lifecycle | StrictMode effect replay, or hiding and restoring the map, leaves the mounted flag false | Effect setup restores liveness; pending requests and hidden completion have regression coverage |
| Fossil loading | A failed shard or targeted snapshot leaves a rejected promise cached indefinitely | Failed loads are evicted and subsequent calls retry; concurrent requests still share work |
| Period lookup | An inherited object key such as `constructor` is mistaken for cached records | Validate the period before consulting the cache |
| Diversity performance | Spreading a sufficiently large sample into `Math.max` overflows the argument stack; every bin rescans all records | Two linear passes and per-bin sets; a 200,000-record regression verifies occurrence conservation |
| Age summaries | Forcing a minimum 1 Ma span creates reversed bins for short intervals; invalid ages contaminate bounds; missing uncertainty becomes zero | Preserve actual spans, use one bin for a point age, exclude invalid ages, and display missing median uncertainty as unavailable |
| Sampling display | Out-of-bounds paleocoordinates count as available; empty bins receive a visible nonzero bar | Use the shared spatial validity check and render zero-height empty bars |
| Lab queries | Duplicate period selections inflate counts and can accidentally trigger the all-period path | Deduplicate selections and reuse each period's filtered records for statistics; require integer result limits |
| CSV export | `Number('')` converts missing modern coordinates to zero; bare carriage returns are not quoted | Export missing/invalid coordinate pairs as empty cells, retain genuine zero coordinates, and quote carriage returns |
| Local imports | Extra CSV values are silently discarded; three entities share the label “Anisian stem teleosteomorph” and the last silently wins | Reject excess columns, retain ambiguous names as unresolved with an explicit issue, and allow an explicit entity ID to resolve them; check file size before reading |
| Runtime integrity | The main-thread fallback checks compressed bytes but omits the decompressed source digest checked by the worker | Both execution paths enforce the descriptor's decompressed digest |
| Native sync | Duplicate paths can satisfy advertised totals; parse failures retain the reader; storage failures interrupt transfers | Reject duplicate paths, cancel/release the reader, and keep transfer progress independent of local storage availability |
| Go delivery | Fixed current-release resource/tree URLs advertise a year of immutable caching despite snapshot reload | Require revalidation; retain resource ETag and byte-range behavior |
| Toolchain | npm reports vulnerable Vitest and fast-uri versions | Update Vitest/UI to 4.1.11 and the lockfile's fast-uri to 3.1.7 |

## Coverage and validation

The review covered the React map/analysis lifecycle, row and fossil loading, spatial interpretation, import/export, native bridge and sync paths, runtime/Pages/mobile generation, and the Go store/API. Existing bounded search indexes, packed taxonomy adjacency, source provenance, generated registry contracts, and separate Pages/native delivery profiles were retained. This is not a claim that every line or external scientific source has been independently reviewed.

Local validation includes `npm run verify:web`, `npm run verify:pages`, `npm run typecheck`, `npm run lint`, focused new regressions, `go -C backend test ./...`, and `go -C backend vet ./...`. The complete Web run passed 656 tests at its snapshot; later added cases were also run separately. Pages passed 15 browser tests and validated 6,947 HTML files. `npm run mobile:build` verified the complete native data contract, and `npm run test:e2e:native` passed all 62 tests, including offline SQL. The PR checks provide the final committed-tree Web, Windows and native results.

Canonical `data/` has no diff. Data validation still reports 13,600 occurrences, 403 navigation nodes, 1,288 evidence claims and 208 events. Generated registry projections match canonical inputs byte-for-byte. These counts describe represented data, not complete biological coverage.

## Remaining limits

- The existing scientific-review state is preserved: most packages are not reviewed, and the perissodactyl review is stale. Passing engineering checks does not promote either state.
- npm still reports three moderate entries along the Capacitor CLI → xcode → uuid development dependency chain. The offered automatic fix downgrades Capacitor; this audit does not silently downgrade the native toolchain or force an incompatible uuid override.
- Native browser coverage and hosted CI do not establish performance or behavior on every physical device. The iOS device artifact remains unsigned and requires the owner's signing configuration for installation.
- No new scientific dataset, API, service, permission, or dependency was introduced. Existing dependencies were updated within their major versions.
