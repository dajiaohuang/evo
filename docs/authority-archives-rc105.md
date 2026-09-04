# Pinned WoRMS and OSF archive crosswalks

RC105 adds independent official source archives, not a relabelled copy of COL's source sectors. COL26.8 remains the release-scoped ownership baseline; archive projections compare names and explicit accepted-target relations, not species concepts.

## Sources

| Provider / ChecklistBank dataset | Version / attempt | Version DOI | Retrieved archive bytes / SHA-256 |
| --- | --- | --- | --- |
| WoRMS Editorial Board / 2011 | 2026-09-01 / 148 | `10.48580/d4fd.v148` | 342,751,141 / `8419d301b08e1f119557ead2222d7efd8f01a3f3ca3b6c9ff1edd062bfa312c6` |
| Species File Group, OSF / 1021 | Sep 2026 / 56 | `10.48580/d388.v56` | 6,278,172 / `1a7fab3d43b19eb2ef21d56180bfb25de641aaee5f522b9603aac2f2e22a9575` |

Both archives were retrieved on 2026-09-04 from public official [WoRMS](https://api.checklistbank.org/dataset/2011/archive) and [OSF](https://api.checklistbank.org/dataset/1021/archive) endpoints. These URLs are mutable, not content-addressed or guaranteed attempt-specific URLs. Stable before/after dataset metadata and archive hashes bind this acquisition. The archives and metadata are external build inputs and are not committed or shipped to clients.

WoRMS `meta.xml` explicitly supplies the CC BY 4.0 licence and WoRMS Editorial Board attribution; `eml.xml` identifies `WoRMS_export_2026-09-01`. OSF dataset metadata and its official attribution identify CC BY 4.0. Only the minimal nomenclatural projection is distributed: no archive images, sound, specimen descriptions, distributions or bibliography.

## Exact scopes

| Source scope | COL root | Source root | COL accepted records | Mixed package records outside this scope |
| --- | --- | --- | ---: | ---: |
| Mollusca | `M2L` | Aphia `51` | 154,718 | 5,083 |
| Porifera | `B8TXQ` | Aphia `558` | 9,899 | 20,622 |
| Cnidaria | `CN2` | Aphia `1267` | 20,622 | 9,899 |
| Orthoptera | `CJBKK` | OSF OTU `805980`, Name `913531` | 30,859 | 1,018,274 |

All 216,098 scoped COL accepted species receive an explicit outcome. This does not imply that all outcomes are matched, that all members of each mixed package are covered by that authority, or that all species recognised by science have been reconciled.

The WoRMS importer inspects parent closure for **all** archive Species rows without prefiltering the phylum field. Its `taxon.txt` has 1,565,652 logical data records; this raw-member count is distinct from ChecklistBank's processed dataset size. One accepted record, *Ochetoceras canaliculatum* (Aphia `1889447`), declares Mollusca but does not close through Aphia `51`; it is retained in the scope anomaly audit, not silently reassigned. The exact accepted source closures contain 145,932 Mollusca, 9,937 Porifera and 21,930 Cnidaria records.

## Interpretation and delivery

- `accepted`: a unique exact accepted-name result; `redirect`: an explicit source relation to a unique accepted species target in the same root.
- `ambiguous`: multiple accepted concepts; no winner is chosen. `withheld`: unresolved, out-of-scope, rank-changing or conflicting relations; no accepted target is promoted. `unmatched`: no qualifying exact source evidence.
- Source-only accepted concepts retain null COL IDs. All valid targets implicated in any exact candidate, including unresolved/ambiguous outcomes, are excluded from source-only counts. These records do not increase the COL accepted-species total.
- Aphia taxon LSIDs remain distinct from OSF OTU IDs and OSF Name IDs. Original authorship/status fields and member/row locators are preserved. Row numbers are one-based **logical TSV record ordinals including the header**, not physical line numbers.
- Only an exact trailing COL authorship suffix is stripped. WoRMS explicitly normalises whitespace for comparison while preserving original fields; OSF compares source text exactly. Neither importer folds case/accents, removes subgenera, fuzzy-matches names or asserts concept equivalence.
- The existing runtime emits source summaries and complete canonical inventories for `web-light`, with no new archive row shards. `native-full` includes every listed COL and source-only shard. Default-collapsed catalogue details fetch at most one COL interval; source-only browsing is separately opt-in.

Canonical descriptors live under the corresponding package's `nomenclature/` directory. The WoRMS and OSF import ledgers in `data/sources/` retain member hashes and acquisition provenance; descriptor counts are the machine-readable outcome totals. Existing source, Pages and native capacity limits remain unchanged. No human or external domain-expert review status is promoted.

## Reproduce

Use Python's standard library with the matching archived inputs and adjacent `metadata-after.json` captured during acquisition:

```sh
python scripts/build-worms-archive-sidecars.py --archive /source-cache/dataset-2011.zip --acquisition /source-cache/worms/acquisition.json
python scripts/build-osf-orthoptera-sidecar.py --archive /source-cache/dataset-1021.zip --acquisition /source-cache/osf/acquisition.json
```

The importers reject bytes that differ from these pinned snapshots. Downloading a later archive requires an intentional version/provenance update, not silently reusing RC105 identifiers.
