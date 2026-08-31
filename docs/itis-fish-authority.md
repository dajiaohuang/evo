# ITIS fish authority sidecars

This note defines the frozen, exact-only ITIS nomenclatural sidecars for the four
living-fish scopes currently delivered by Evo Atlas. It is a delivery and
provenance record, not a replacement classification, a fish-diversity census, a
phylogeny, or a biological dossier.

## Frozen inputs and matching boundary

- Catalogue of Life is the pinned `COL26.8` release dated 2026-08-20. A scoped
  row is only `rank=species` and `status=accepted`, found by lineage from the
  listed COL usage ID.
- ITIS is the official 2026-08-26 SQLite export (`ITIS.sqlite`, 925,421,568
  bytes, SHA-256
  `ea7304536cfd7b1e2636d383911ca7931fc83d9ab1194ca2a3c020ea2daf1719`),
  recorded in [the ITIS source ledger](../data/sources/itis-2026-08-26.json).
  ITIS publishes the export through its [official downloads page](https://www.itis.gov/downloads/index.html)
  and identifies the dataset with [DOI 10.5066/F7KH0KBK](https://doi.org/10.5066/F7KH0KBK).
- Matching removes only an exact trailing COL authorship suffix, normalizes NFC
  and whitespace, and removes one parenthesized subgenus token in a strict
  binomen representation. It does not use fuzzy, case-folded,
  diacritic-stripped, token-reordered, phonetic, or taxon-substituted matching.
- `accepted` is an exact current ITIS species-name match. A
  `synonym-current-name-redirect` follows official ITIS `synonym_links` to one
  valid current TSN. More than one target is `ambiguous`; no evidence is
  `unmatched`. `ITIS-only` means a valid current ITIS species has no strict COL
  accepted-name or official synonym evidence in the declared scope.

Each package descriptor and its import ledger lock the COL registry manifest,
package ownership file, ITIS source ledger, SQLite member hash, range-shard
hashes, decoded-byte hashes, and record counts. They are the authoritative
reproduction inputs for these sidecars.

## Scope and exact outcomes

| Package / collection ID | Strict COL root(s) | ITIS root | COL rows | Accepted | Redirect | Ambiguous | Unmatched | ITIS-only | Native row files |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `actinopterygii` / `itis-actinopterygii-tsn-crosswalk` | `8VR36` Actinopterygii | TSN `161061`, Actinopterygii, Superclass | 35,928 | 24,266 | 356 | 14 | 11,292 | 3,732 | 23 crosswalk + 1 upstream-only = 24 |
| `chondrichthyes` / `itis-chondrichthyes-tsn-crosswalk` | `8X6G5` Chondrichthyes | TSN `159785`, Chondrichthyes, Class | 1,359 | 769 | 18 | 1 | 571 | 183 | 1 + 1 = 2 |
| `early-fishes` / `itis-agnatha-myxini-tsn-crosswalk` | `KTXJW` Agnatha; `6225G` Myxini | TSN `914178`, Agnatha, Infraphylum | 141 | 92 | 3 | 0 | 46 | 17 | 1 + 1 = 2 |
| `tetrapod-transition` / `itis-sarcopterygii-tsn-crosswalk` | `8VSMX` Sarcopterygii | TSN `161048`, Sarcopterygii, Superclass | 8 | 8 | 0 | 0 | 0 | 1 + 0 = 1 |

The Chondrichthyes choice is deliberate. Valid ITIS Superclass `914180` has one
valid child, Class `159785`, with the same species partition. The sidecar pins
the semantic Class root rather than making an unnecessary superclass-level
claim.

The early-fishes roots are a lineage union, not two partitions to add:
COL Myxini `6225G` lies below Cyclostomi and Agnatha `KTXJW`; ITIS Myxini is
also inside ITIS Agnatha `914178`. The 141 COL rows and one ITIS collection
therefore contain Myxini exactly once.

The eight Sarcopterygii rows are the remaining living strict-COL species in the
`tetrapod-transition` package scope. They are not a claim that Sarcopterygii
has only eight living species overall: tetrapods and other material are routed
through their own package boundaries. Every one of these eight has strict ITIS
evidence, so this is the one scope with no emitted ITIS-only file.

## Delivery and lookup contract

The canonical descriptor names every immutable `.jsonl.gz` file and gives its
compressed and decoded SHA-256 checksums, record count, and inclusive COL usage
ID range. Crosswalk rows are sorted by Unicode code units. A native detail
lookup binary-searches the non-overlapping ranges and loads exactly one matching
crosswalk shard; it never downloads the whole sidecar. ITIS-only rows, when
present, are separately addressable and never receive a COL usage ID.

GitHub Pages is `web-light`: it publishes the collection descriptor, exact
outcome counts, and canonical inventory only. It publishes no row-level ITIS
gzip shards. Android and iOS are `native-full`: each stages the descriptor and
every listed crosswalk and upstream-only asset byte-for-byte. The mobile
finalizer and both platform asset tests locate collections by ID rather than
array position, then verify each runtime asset against both the release
inventory and the bundled bytes/SHA-256.

## Independence from FishBase and limitations

These four collections contain only ITIS CC0 nomenclatural evidence. They do
not import, merge, or depend on the separate historical FishBase identifier
sidecar; a FishBase source identifier is neither an ITIS TSN nor an exact ITIS
name-resolution result. Keeping the providers separate avoids carrying the
FishBase archive's distinct licence and scope boundary into an ITIS collection.

The sidecars preserve a release-pinned name crosswalk only. They do not settle
classification disagreements, establish species-concept equivalence, add
ecology, media, distributions, fossil occurrences, detailed dossiers, or
expert review. Later COL or ITIS updates require a new verified snapshot and
explicit regenerated descriptor/ledger diff; the pinned bytes above are never
silently rewritten.
