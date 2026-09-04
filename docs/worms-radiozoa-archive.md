# WoRMS Radiozoa archive projection

This projection maps the strict COL26.8 Radiozoa species partition (root `5X`, 444 accepted COL species) to the pinned WoRMS ChecklistBank archive (`dataset/2011`, archive attempt 148, version `2026-09-01`). The source archive is a frozen WoRMS release and is not independent scientific validation of COL's WoRMS Polycystina source.

Measured RC110 output: 444 accepted COL outcomes, 54 accepted source-only concepts, one COL shard and one source-only shard, 23,103 compressed bytes total. The archive parent-closure audit contains 706 Radiozoa species rows, of which 498 are accepted; the remaining rows retain their original non-accepted statuses and are not promoted. Reproduce the source check with:

```text
rtk python scripts/build-worms-archive-sidecars.py --archive D:/repo/repostew/.repostew/source-cache/worms-2011-2026-09-04/dataset-2011.zip --acquisition D:/repo/repostew/.repostew/source-cache/worms-2011-2026-09-04/acquisition.json --scope radiozoa
```

The source bytes are pinned by the archive SHA/size and acquisition metadata; generated paths are under `data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/`. COL sourceDatasetId 1109 is itself WoRMS Polycystina, so this frozen WoRMS projection must not be described as independent scientific validation.

The importer follows parent closure from WoRMS root `582421` and uses exact scientific-name plus authorship matching only. Accepted source concepts not implicated by a COL candidate are emitted in the separate source-only partition; they are not additional COL species. Raw archive members are not redistributed. WoRMS taxonomic content is attributed under the archive's CC BY 4.0 boundary.

The generated descriptor belongs under `data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/` and is integrated into the resource-pack manifest by the release integration step.
