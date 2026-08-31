# Bacteria LPSN identifier sidecar

This data line enriches the pinned COL26.8 Bacteria nomenclatural resource pack with source-record identifiers only. It does not change the accepted-species shard or claim complete LPSN, ecology, genome, strain, fossil, media, phylogeny, dossier, translation, or expert-review coverage.

## Fixed scope and eligibility

The input is ChecklistBank dataset `316115` / COL26.8 (`2026-08-20`) and the existing Bacteria resource pack rooted at usage `CRRY6`. A complete scan of its strict `rank=species AND status=accepted` shard gives:

| Source sector | Accepted species | Treatment |
| --- | ---: | --- |
| LPSN source dataset `2015`, version `2026-07-26` | 21,570 | Eligible for a pinned source-record lookup |
| ITIS source dataset `2144`, version `2026-07-28` | 4,827 | Withheld; never name-matched to LPSN |
| Missing `sourceDatasetId` | 0 | Withheld if this changes in a future release |
| Total Bacteria accepted species | 26,397 | Existing package baseline, unchanged |

The maximum eligible share is therefore 21,570 / 26,397 (81.71%). “Eligible” is not assumed to mean resolved: each eligible COL usage must return an exact LPSN `name usage` source record with a numeric `sourceId`. Any source-record mismatch remains withheld with its observed response SHA-256.

## Retrieval and integrity

The explicit refresh command is:

```bash
node scripts/fetch-bacteria-lpsn-crosswalk.mjs --retrieved-at 2026-08-31
```

It requests only `https://api.checklistbank.org/dataset/316115/nameusage/{colId}/source`. The default six workers, 75 ms minimum request-start interval, bounded retry/backoff, and append-only `*.local` checkpoint keep the acquisition controlled and resumable. Normal builds do not contact ChecklistBank or LPSN.

The canonical snapshot records one SHA-256 for every exact ChecklistBank response and an aggregate ledger hash over ordered `{colId, requestUrl, sourceResponseSha256}` rows. Resolved rows derive their concrete `https://lpsn.dsmz.de/taxon/{sourceId}` URL only from that source response. Withheld rows are stored separately from resolved records.

The 2026-08-31 acquisition completed all 21,570 eligible requests: 21,570 resolved to unique numeric LPSN source IDs, zero eligible responses were withheld, and all 4,827 ITIS-backed species remained withheld without a request or name match.

| Artifact | Bytes | SHA-256 |
| --- | ---: | --- |
| Deterministic canonical crosswalk gzip | 1,094,500 | `68998c8ff4e4a3ef563411ae381398d06a471b242b51e40321cad20f0bb4db9a` |
| Canonical JSON before gzip | 6,886,097 | `d3e390dbeb154a8af9f813b188e71dff62146f152336f9c8d1d105754b05f8b9` |
| Ordered request ledger | — | `6e21dfd5bc013c2c3edb1a8235bb2cc386d19a469efc7e083fda3efe6952c873` |
| Deterministic LPSN gzip sidecar | 214,929 | `3591c41843b1a2664044162a21bf120d9e71c5173da4b459ae2373423178ab45` |
| Sidecar NDJSON before gzip | 3,151,511 | `ed0319ba05646e2ae193ecfd066bdebbbaa6f2124efcfc1dac973bf0eb231019` |

The unchanged Bacteria species shard remains 590,043 compressed bytes with SHA-256 `45635a3a885ed8027b69c7e16463e132bab449252aa706b9511cb245e0dc2845` (5,291,582 NDJSON bytes, SHA-256 `bc15364ad27c4de93be28b382088602a7bd5211ab426f2da8309182dc8a1f245`).

After reviewing the canonical snapshot, build the deterministic sidecar with:

```bash
node scripts/build-bacteria-lpsn-sidecar.mjs
```

That command changes only `bacteria/lpsn-000.jsonl.gz`, `bacteria/manifest.json`, and the Bacteria descriptor in `resource-packs/manifest.json`. The original species shard is verified against its existing byte length and SHA-256 before any output is written.

The standard `npm run data:packages:species` rebuild also invokes the same sidecar builder after materializing all base resource packs. This prevents a normal full regeneration from dropping the extension; no network request occurs in either build path.

## Rights and evidence boundary

The Bacteria sidecar is attributed to LPSN version `2026-07-26`, accessed `2026-08-31`, under CC BY-SA 4.0. Every redistributed identifier has a link to its specific LPSN page, as requested by the [LPSN copyright notice](https://lpsn.dsmz.de/text/copyright). Cite Freese et al. (2026), [DOI 10.1093/nar/gkaf1110](https://doi.org/10.1093/nar/gkaf1110).

The sidecar is an identifier-level nomenclatural crosswalk. It does not redistribute LPSN prose or infer biological attributes, and the 4,827 ITIS-backed accepted species remain visible in the original COL26.8 species shard without an LPSN identifier.
