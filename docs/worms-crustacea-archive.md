# WoRMS Crustacea archive coverage

RC109 adds an independent WoRMS nomenclatural projection to the Crustaceans, Insects and Myriapods package. It complements, rather than replaces, the package's COL26.8 baseline and existing ITIS collections.

## Fixed source and scope

The input is the official WoRMS archive acquired from ChecklistBank dataset `2011`, version `2026-09-01`, attempt `148`, version DOI [10.48580/d4fd.v148](https://doi.org/10.48580/d4fd.v148). The archive has 342,751,141 bytes and SHA-256 `8419d301b08e1f119557ead2222d7efd8f01a3f3ca3b6c9ff1edd062bfa312c6`. Its mutable download URL is not claimed to be immutable; the acquisition record, metadata and archive/member hashes identify the retrieved input.

The COL side contains the 80,890 strictly accepted species descending from Crustacea usage `KZX8B` in the immutable `2026-08-20` Base Release. The package's other 968,243 accepted species remain outside this particular authority scope. WoRMS and COL parent closures are evaluated independently; matching names do not establish equivalent species concepts or identical higher classifications.

The WoRMS closure is rooted at Aphia `1066`. It contains 139,224 Species-rank name records, of which 86,869 have source status `accepted`. The archive importer considers all Species rows through their parent chains, without a phylum prefilter. Crustacea is a WoRMS subphylum root, so the auxiliary `phylum` anomaly field is not a completeness proof for this scope; the actual boundary is the Aphia-1066 parent closure.

## Records and interpretation

Every scoped COL species receives an explicit accepted-name match, source-declared redirect, ambiguous, unmatched or withheld result. Comparison preserves original names and authorship and follows exact archive-import rules; it does not fuzzy-match or silently choose between competing concepts. Accepted source concepts not implicated by any exact COL candidate remain separate source-only records with no assigned COL ID.

| COL outcome | Records |
| --- | ---: |
| Accepted-name match | 77,993 |
| Explicit redirect | 257 |
| Ambiguous | 1 |
| Unmatched | 2,605 |
| Withheld | 34 |
| Total COL scope | 80,890 |

A separate 8,675-record source-only partition brings the delivered projection to 89,565 rows in 30 COL shards and three source-only shards. These source-only records do not increase the global COL accepted-species total and are not asserted to be additional unique species relative to ITIS or every other authority: no global cross-authority concept reconciliation has been performed.

This is a name, identifier and status layer, not an ecology, morphology, fossil-occurrence or expert-reviewed dossier. Original `taxon.txt` record locators remain available for source inspection. The existing ITIS and other authority collections keep their own provenance and outcome partitions.

## Delivery and attribution

The minimal derived projection is CC BY 4.0. Attribute WoRMS Editorial Board, World Register of Marine Species, the pinned version DOI, and Catalogue of Life COL26.8, DOI [10.48580/dgywk](https://doi.org/10.48580/dgywk). The archive metadata records the licence and rights holder. Raw archives, images, descriptions, distributions and bibliography are not redistributed. This adaptation is not endorsed by the source providers.

The committed `worms-crustacea-sidecar.json` and import ledger contain exact source counts and shard hashes. The sidecar's `sourceOnly` partition is relative to the declared COL `KZX8B` comparison scope, not proof that a name is absent elsewhere in COL.

## Reproduce this projection

Use the pinned archive and its adjacent acquisition metadata:

```sh
python -B scripts/build-worms-archive-sidecars.py --scope crustacea --archive /source-cache/dataset-2011.zip --acquisition /source-cache/acquisition.json
```

This command writes only the Crustacea sidecar, its range shards and the dedicated Crustacea import ledger; it does not rebuild the COL baseline or other authority scopes.
