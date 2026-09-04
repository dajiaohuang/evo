# WoRMS Radiozoa archive projection

This projection maps the strict COL26.8 Radiozoa species partition (root `5X`, 444 accepted COL species) to the pinned WoRMS ChecklistBank archive (`dataset/2011`, archive attempt 148, version `2026-09-01`). The source archive is a frozen WoRMS release and is not independent scientific validation of COL's WoRMS Polycystina source.

Measured RC110 output: 444 accepted COL outcomes, 54 accepted source-only concepts, one COL shard and one source-only shard, 23,103 compressed bytes total. The archive parent-closure audit contains 706 Radiozoa species rows, of which 498 are accepted; the remaining rows retain their original non-accepted statuses and are not promoted. Reproduce the source check with:

```text
python -B scripts/build-worms-archive-sidecars.py --scope radiozoa --archive /source-cache/dataset-2011.zip --acquisition /source-cache/acquisition.json
node scripts/integrate-worms-radiozoa-sidecar.mjs
npm run data:manifest
```

Replace `/source-cache` with the local pinned-input directory; its `metadata-after.json` must remain beside `acquisition.json`. The 342,751,141-byte archive is identified by SHA-256 `8419d301b08e1f119557ead2222d7efd8f01a3f3ca3b6c9ff1edd062bfa312c6`, acquisition metadata and version DOI [10.48580/d4fd.v148](https://doi.org/10.48580/d4fd.v148). Generated paths are under `data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/`. COL sourceDatasetId 1109 is itself WoRMS Polycystina, so this frozen WoRMS projection must not be described as independent scientific validation.

The importer follows parent closure from WoRMS root `582421` and uses exact scientific-name plus authorship matching only. Accepted source concepts not implicated by a COL candidate are emitted in the separate source-only partition; they are not additional COL species. Raw archive members are not redistributed. WoRMS taxonomic content is attributed under the archive's CC BY 4.0 boundary.

The release integration step preserves the existing 26 Protists/Chromists source extensions, including the explicit zero-root ITIS Radiolaria boundary, and adds this descriptor as a separate source projection. Pages retains its summary and canonical file inventory but not these two row shards. Android and iOS include both shards, with source-only browsing separate from COL-ID lookup. These 54 source-only records are relative to the declared COL scope, not globally deduplicated new species or a human-review decision.
