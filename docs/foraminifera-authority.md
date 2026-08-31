# World Foraminifera Database authority projection

This release-scoped sidecar maps the strict accepted Foraminifera species in
COL26.8 to their official ChecklistBank source-record relationships in the
World Foraminifera Database (WFD, source dataset `1157`). It covers 47,975
species whose COL lineage descends from browse root `C` (Chromista), through the
Foraminifera phylum node `B8VD3`.

## Pinned evidence

- Catalogue: COL26.8, released 2026-08-20, ChecklistBank dataset `316115`.
- Source: World Foraminifera Database, version 2026-08-01,
  `10.48580/d3dx.v88` (base DOI `10.48580/d3dx`).
- Licence: CC BY 4.0, as declared by the ChecklistBank source metadata.
- Retrieval date: 2026-08-31.
- WFD endpoint: `https://api.checklistbank.org/dataset/1157/nameusage`.
- Complete paged source query: 86,094 records in 87 pages of 1,000 records.
- Complete COL source-relation query: 47,975 exact source-record responses.

The canonical source snapshot is
`data/sources/foraminifera-wfd-col26.8-crosswalk.json.gz` (compressed SHA-256
`a6c29b160fb6a7be1da50661ccb4007a0faabc65b68ba4a61690c6d9336b8b62`; decoded
SHA-256 `84a767144012e0c4f80a65d4fc4bed4442e55b9654dcfc77b77c340b53c77068`).
It retains request URLs and response hashes rather than raw API bodies.

## Delivery boundary

The five deterministic `foraminifera-wfd-*.jsonl.gz` shards contain all 47,975
minimal source-record projections and total 4,046,631 compressed bytes. They
are the `native-full` payload and must be copied byte-for-byte into both the
Android and iOS applications. The GitHub Pages `web-light` profile carries the
descriptor and hashes only; it does not advertise or download the payload
shards. A single native lookup selects one inclusive `colId` range shard.

Each row is limited to COL ID, WFD source ID/Aphia ID and URL, scientific name,
authorship, rank/status, explicit accepted target when present, the exact
ChecklistBank mapping basis and the source response SHA-256. No fuzzy matching,
raw response body, distribution, ecology, media, bibliography, fossil,
phylogeny or dossier content is included.

## Upstream-only boundary

The WFD API returned 48,154 accepted species records, of which 179 were not
linked by the 47,975 COL source relationships. Because ChecklistBank did not
provide an immutable downloadable WFD archive for this source snapshot, the
sidecar deliberately does **not** publish or claim a complete upstream-only
set. The accepted-species inventory count and digest remain in the canonical
snapshot for audit only.

Rebuild the projection with:

```text
node scripts/build-foraminifera-authority-sidecar.mjs
```

Reacquire the pinned-date evidence with an explicit retrieval date:

```text
node scripts/fetch-foraminifera-authority-sidecar.mjs --retrieved-at 2026-08-31
```
