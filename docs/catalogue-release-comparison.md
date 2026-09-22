# Catalogue of Life release comparison

The real COL26.8 (2026-08-20, dataset 316115) → COL26.9 (2026-09-11,
dataset 316321) comparison is available in the bilingual reading edition at
`/evo/catalogue-changes/` and `/evo/zh/catalogue-changes/`.

The current application, package ownership, authority crosswalks and dossier
maturity remain on COL26.8. COL26.9 is an independently pinned **comparison
snapshot**, not an automatic replacement for those release-scoped resources.

## Result

| Record measure | Count |
| --- | ---: |
| Strictly accepted species before | 2,183,133 |
| Strictly accepted species after | 2,186,768 |
| Net accepted change | +3,635 |
| Entered the accepted set | 12,658 |
| Left the accepted set | 9,023 |
| Accepted record became a resolving name (subset of losses) | 1,395 |
| Accepted name or authorship changed | 932 |
| Species-level record ID replaced | 45,387 |
| Synonym target relation changed | 6,627 |
| Synonym target ID changed while correspondence remained | 342 |
| Synonym target correspondence unresolved | 1,622 |

The source's general species total includes provisional statuses. Evo's
accepted baseline counts only `taxonRank=species` and
`taxonomicStatus=accepted`. Categories overlap: a synonymization is also a
loss from the accepted set. An addition is not a newly discovered biological
species, and a loss is not extinction.

The [complete manifest](../data/catalogue-of-life/comparisons/2026-08-20--2026-09-11/manifest.json)
retains counts, examples, input provenance and all 31 change-shard hashes.
Compressed changes occupy 3,034,251 bytes; uncompressed JSONL occupies
31,467,210 bytes. Raw source archives are external reproduction inputs and
are not duplicated in the application or repository.

## Correspondence method

1. Join a usage ID only when both snapshots give it the same nonempty source
   dataset ID. All ranks are read so species-to-other-rank status changes and
   synonym targets remain observable.
2. For unmatched rows, require a globally unique exact tuple of source
   dataset, rank, scientific name, authorship and status in each full snapshot.
   A duplicate elsewhere in the snapshot prevents this fallback, even if that
   duplicate already has an ID match. Case, accents and spelling are preserved.
3. Report unmatched accepted rows as unresolved correspondence. Missing source
   metadata, ambiguous keys and different-source ID reuse do not produce an
   invented link. The snapshots contain 15,235 shared IDs with different source
   fields; the report discloses these separately.
4. Compare synonym targets through the target-record correspondence. A changed
   target ID alone is not a changed synonym relation. Missing target
   correspondence stays unresolved, even when the raw target ID is unchanged.
5. Emit original before/after fields and the matching basis. Name/authorship
   changes are not labeled confirmed recombinations without an explicit
   nomenclatural relation. Parent ID changes are not phylogenetic evidence.

This is a checklist-record comparison. Even a unique name match does not prove
that both checklists apply the same biological species concept. Source-sector
changes can leave genuine correspondence unresolved; the report does not hide
that uncertainty in a single biological additions/deletions total.

## Reproduce offline

Use Python 3.11 or newer. Download the official monthly DwCA archives once:

- [COL26.8 archive](https://download.checklistbank.org/col/monthly/2026-08-20_dwca.zip),
  SHA-256 `6f558a1d35164afbd48838122d01e044189d20431b702f1d72ee1df0f42b53af`.
- [COL26.9 archive](https://download.checklistbank.org/col/monthly/2026-09-11_dwca.zip),
  SHA-256 `d50f75ae601e6657f08f45144226f3187d893f42aa74d7a99836e345294787f5`.

```sh
rtk python -B scripts/compare-col-releases.py --from-archive /sources/2026-08-20_dwca.zip --to-archive /sources/2026-09-11_dwca.zip --from-provenance data/catalogue-of-life/releases/2026-08-20/provenance.json --to-provenance data/catalogue-of-life/releases/2026-09-11/provenance.json --out /outputs/col26.8-to-col26.9 --scratch /scratch
rtk python -B scripts/compare-col-releases.test.py
```

The output directory must be empty. Input archives are verified before their
rows enter a disposable, disk-backed SQLite join. The tool needs several GB
of temporary disk space and bounds its SQLite cache to 64 MiB; it does not
need an application database, a network connection or credentials. Output
order, gzip timestamps and checksums are deterministic. The manifest records
the original source metadata member hashes as well as `Taxon.tsv` and archive
hashes. Existing registry and data checks remain the validation system.

The focused fixtures exercise real algorithmic failure modes: identifier
churn, source reuse, ambiguous keys, missing provenance, rank/provisional
changes, status transitions, synonym target changes, checksum rejection and
repeatable output. They do not substitute for the separately reproduced full
archive comparison.

Full verification on 2026-09-22 replayed both official archives independently:
all 32 report files were byte-identical. The second complete run took 128.44
seconds on the local Windows machine; this is a machine-local measurement.
The bilingual reading edition passed 24 Chromium, Firefox and mobile WebKit
tests, including navigation without JavaScript and release-specific sample
links. These checks establish engineering and reproducibility evidence, not
domain-expert scientific review.
