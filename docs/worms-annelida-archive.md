# WoRMS Annelida archive coverage

RC107 adds an independent WoRMS nomenclatural projection to the mixed Other Animals resource pack. It complements, rather than replaces, that pack's COL26.8 baseline and separate ITIS Annelida collection.

## Fixed source and scope

The input is the same official WoRMS archive acquired for RC105: ChecklistBank dataset `2011`, version `2026-09-01`, attempt `148`, version DOI [10.48580/d4fd.v148](https://doi.org/10.48580/d4fd.v148). The archive has 342,751,141 bytes and SHA-256 `8419d301b08e1f119557ead2222d7efd8f01a3f3ca3b6c9ff1edd062bfa312c6`. Its mutable download URL is not claimed to be immutable; the acquisition record, stable before/after metadata and archive/member hashes identify the retrieved input.

The COL side contains the 18,982 strictly accepted species descending from Annelida usage `NN` in the immutable `2026-08-20` Base Release. The other 80,179 species assigned to Other Animals remain outside this particular authority scope. WoRMS and COL parent closures are evaluated independently; matching names do not establish equivalent species concepts or identical higher classifications.

The WoRMS closure is rooted at Aphia `882`. It contains 39,423 Species-rank name records, of which 19,901 have source status `accepted`. All archive Species rows are considered through their parent chain, without a phylum prefilter; the frozen Annelida audit reports no accepted records declaring Annelida outside that closure.

## Records and interpretation

Every scoped COL species receives an explicit accepted-name match, source-declared redirect, ambiguous, unmatched or withheld result. Comparison preserves original names and authorship and follows the existing archive importer's exact representation rules; it does not fuzzy-match or silently choose between competing concepts. Accepted source concepts not implicated by any exact COL candidate remain separate source-only records with no assigned COL ID.

| COL outcome | Records |
| --- | ---: |
| Accepted-name match | 18,791 |
| Explicit redirect | 29 |
| Ambiguous | 0 |
| Unmatched | 160 |
| Withheld | 2 |
| Total COL scope | 18,982 |

A separate 1,090-record source-only partition brings the delivered projection to 20,072 rows in eight COL shards and one source-only shard. The accepted-source total is not obtained by adding direct-match and redirect row counts: multiple names may point to the same source target.

These source-only records do not increase the 2,183,133 COL accepted-species total. They are not asserted to be additional unique species relative to ITIS or every other authority: no global cross-authority concept reconciliation has been performed. The frozen archive also contains fossil and non-marine names; this projection is not a count of all living marine annelids. [WoRMS describes its scope and limitations](https://www.marinespecies.org/about.php).

Here “source-only” is relative to the declared COL `NN` comparison scope, not proof that the name is absent everywhere in COL. Different higher classifications may place corresponding names outside that scope; no cross-scope reassignment is inferred.

This is a name, identifier and status layer, not an ecology, morphology, fossil-occurrence or expert-reviewed dossier. Original `taxon.txt` record locators remain available for source inspection. The earlier ITIS collection keeps its own provenance, outcomes and source-only partition.

## Delivery and attribution

Pages publishes the source description, outcome totals and canonical file inventory without the new row shards. Android and iOS include every COL and source-only shard in `native-full`; opening a species disclosure selects its single COL-ID range, while source-only browsing is separately opt-in. The initial dashboard and collapsed detailed controls remain unchanged.

The minimal derived projection is CC BY 4.0. Attribute WoRMS Editorial Board, World Register of Marine Species, the pinned version DOI, and Catalogue of Life COL26.8, DOI [10.48580/dgywk](https://doi.org/10.48580/dgywk). The archive's `meta.xml` records the licence and rights holder. Raw archives, images, descriptions, distributions and bibliography are not redistributed. This adaptation is not endorsed by the source providers.

The committed `worms-annelida-sidecar.json` and import ledger contain the exact source counts and shard hashes. Automated integrity checks do not change the package's human-review status.

## Reproduce this projection

Use the pinned RC105 source archive and its adjacent acquisition metadata:

```sh
python -B scripts/build-worms-archive-sidecars.py --scope annelida --archive /source-cache/dataset-2011.zip --acquisition /source-cache/acquisition.json
node scripts/integrate-worms-annelida-sidecar.mjs
npm run data:manifest
```

Omitting `--scope annelida` retains the original three RC105 importer scopes. The integration step updates only the Annelida extension and the two resource-pack manifest descriptors, preserving all existing ITIS extensions and their files. It does not rebuild the COL baseline.
