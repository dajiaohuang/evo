# Bryozoa, Monogenea and Trematoda source archives

These three original-source projections enrich the existing Other Animals catalogue without changing its 99,161 accepted COL species. They trace the authorities that supplied names; they are not independent scientific corroboration, species-concept equivalence, fossil evidence or reviewed biological dossiers.

| Source | COL scope | Accepted match | Explicit redirect | Unmatched | Unlinked source | Files |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Bryozoa 1081 | 20,367 | 20,311 | 6 | 50 | 216 | 30 |
| Monogenea 1126 | 5,852 | 5,835 | 0 | 17 | 43 | 19 |
| Trematoda 1128 | 12,007 | 11,965 | 0 | 42 | 99 | 18 |

The September 1, 2026 WoRMS ColDP archives are pinned by original bytes and SHA-256 under `data/sources/archives/`. COL26.8 dates from August 20, 2026. Join `Taxon.nameID` to `Name.ID` and use Species rank; the denormalized `Taxon.species` field also occurs on infraspecific rows. `Synonym.taxonID` points to an accepted target and does not invalidate that target. Excluding 36 provisional Bryozoa and 19 provisional Trematoda species leaves 20,533, 5,878 and 12,064 source species respectively.

Matching compares scientific name and authorship after whitespace normalization; Trematoda additionally normalizes Unicode NFC without discarding accents. Only Bryozoa uses explicit archive synonym relations for redirects. A redirect retains the matched synonym separately from its accepted target. Unmatched and unlinked rows remain explicit; neither is counted as globally new or evidence of extinction.

Projected rows retain original names/authors and source-table locators, with bibliography metadata and missing-reference markers where applicable. Complete raw source fields remain in the committed archives, not invented from absent values. References are metadata, not copied publications.

## Reproduction and delivery

From the repository root:

```text
python -B scripts/build-worms-bryozoa-source.py
python -B scripts/build-worms-monogenea-source.py
python -B scripts/build-worms-trematoda-source.py
node scripts/integrate-worms-small-phyla-archives.mjs
```

Importers support `--output-root` for isolated offline replay. Integration updates only these three extension entries and their collection digests; existing authority layers remain intact.

The 67 output shards total 8,970,328 compressed bytes, each at most 2,097,152 bytes uncompressed. Full-data inventories retain all 38,584 COL outcome and unlinked-source records. Pages publishes only provenance, counts and canonical inventories. Raw archives are build-time inputs, not extra native runtime copies. Detailed source evidence stays separate from the compact all-tree topology/name index; a species lookup selects one COL-ID range shard rather than parsing all references.

This batch does not require old-format compatibility or frontend/backend upgrades. Infrastructure evolves independently; content dates and original source IDs remain scientific provenance.

The measured canonical source/code footprint is approximately 891 MiB under its 900 MiB allowance. Full native application resources, including application code, measure 801.76 MiB; the repository packaging allowance is 825 MiB. This is not a mobile resident-memory budget or a store-distribution guarantee. The Pages allowance remains unchanged.

See [Monogenea details](worms-monogenea-archive.md), [Trematoda details](trematoda-1128-archive.md), and [licenses](../DATA_LICENSES.md).
