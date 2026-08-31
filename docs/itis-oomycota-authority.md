# ITIS authority sidecar for the shared Oomycota order scope

This native authority sidecar is deliberately narrower than the COL26.8 `Oomycota` phylum. Catalogue of Life has the exact accepted Oomycota phylum root `5K`, containing 1,673 strict accepted species. The fixed ITIS `itisSqlite082626` database dated 2026-08-26 has no exact accepted `Oomycota` phylum root. Its broader ancestors for the available related orders use the historical `Fungi` → `Myxomycota` → `Phycomycota` path, which is not treated as a usable Oomycota root.

The import therefore uses no broadened, substituted, or inferred ITIS lineage. It includes only these two exact, accepted, shared order roots:

| COL root | ITIS root | COL strict accepted species |
| --- | --- | ---: |
| `3SH` Peronosporales | TSN `13911` Peronosporales | 1,179 |
| `3ZZ` Saprolegniales | TSN `13837` Saprolegniales | 247 |

The resulting scope contains 1,426 COL species. The other 247 COL Oomycota species, including the distinct COL Albuginales branch, remain explicitly out of scope rather than being assigned from a non-equivalent ITIS parent. The mixed `protists-chromists` resource pack has 61,518 strict accepted species; its 60,092 remaining species are also out of scope.

## Fixed source and exact matching

The input is the official ITIS SQLite export `itisSqlite082626` (2026-08-26), CC0 1.0, DOI `10.5066/F7KH0KBK`. The uncommitted SQLite member has SHA-256 `ea7304536cfd7b1e2636d383911ca7931fc83d9ab1194ca2a3c020ea2daf1719`; its source ledger is [`data/sources/itis-2026-08-26.json`](../data/sources/itis-2026-08-26.json).

For the two selected roots, the generator reads accepted species and official ITIS species-synonym links with fixed recursive SQL. It removes only the exact COL authorship suffix where present, normalizes Unicode to NFC, normalizes underscores and whitespace, and removes one exact parenthesized subgenus token. It does not use fuzzy, case-folded, diacritic-stripped, token-reordered, higher-rank, or taxon-substituted matching.

| Outcome | COL rows |
| --- | ---: |
| exact current accepted ITIS name | 46 |
| official synonym → current-name redirect | 0 |
| ambiguous exact evidence | 0 |
| unmatched | 1,380 |
| total selected COL scope | 1,426 |

The selected ITIS order union contains 84 current accepted species and two species-synonym links. Thirty-eight current ITIS species have no exact selected-scope COL resolution and remain in an explicit `colUsageId: null` upstream-only partition. This is not asserted to be a complete Oomycota inventory.

## Delivery and reproducibility

[`itis-oomycota-sidecar.json`](../data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-oomycota-sidecar.json) is the small descriptor. GitHub Pages receives only this descriptor's scope, source, counts, limitations, and immutable hashes (`web-light`), never the row shards. Android and iOS `native-full` delivery must include the descriptor plus every non-empty listed shard: the 1,426-row COL-ID shard and the 38-row upstream-only shard.

The import ledger [`data/sources/itis-oomycota-sidecar-import-ledger.json`](../data/sources/itis-oomycota-sidecar-import-ledger.json) pins all source and output hashes. Rebuild it only with the verified SQLite input:

```text
node scripts/build-itis-oomycota-sidecar.mjs --itis-sqlite /absolute/path/to/ITIS.sqlite
```

The sidecar is a release-pinned nomenclatural crosswalk, not a global oomycete checklist, a final classification, phylogeny, species-concept equivalence assertion, biological dossier, or scientific review.
