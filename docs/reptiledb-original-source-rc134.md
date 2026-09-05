# Reptile Database original-source projection (RC134 preparation, RC142 integration)

This worker freezes the ChecklistBank dataset 1008 archive retrieved on 2026-09-05. The API metadata endpoint response is pinned at 1,704 bytes with SHA-256 `47ca412c6122a5f9399fa65e9f13800da3215c7d2ec9383f40b26adcb382dc16`. It identifies **The Reptile Database**, version 2026-06, issued 2026-06-24, DOI `10.48580/d37s`, no API `versionDoi` value, and raw license `cc by`, retained verbatim without inferring a license version or URL. The archive is preserved at `data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip` with SHA-256 `23e91315dca13a9b46b0c2b487d2921e5ccf2c274de294327fc4caeefb6b21ba` and 9,581,096 bytes. Its internal `metadata.yaml` was checked against the API metadata for key, title, version, DOI, issued date and license; the embedded archive-only version DOI is recorded as `10.48580/d37s.v31`.

The projection reads accepted species rows under the archive's Reptilia root and partitions them into the existing COL package boundaries: 12,622 `turtles-lepidosaurs` species under COL roots `45C`, `477` and `RP`, and 27 Crocodylia species under root `329`. Birds, dinosaur coverage and fossil occurrence evidence are outside this projection's scope. Because COL root `RP` is an ancestor of Crocodylia, the crocodilian root is assigned first to keep the two projections disjoint.

Accepted names are not a claim that every organism is still extant. The [provider's scope description](https://www.reptile-database.org/db-info/introduction.html) explicitly includes some recently extinct taxa. For example, the frozen archive includes *Phelsuma gigas*, with an empty `Taxon.extinct` field, while its [provider species account](https://reptile-database.reptarium.cz/species?genus=Phelsuma&species=gigas) reports extinction. This projection retains the name and source locators without converting that empty field to “living”; it does not import conservation-status assertions from mutable web pages.

Matching is deterministic exact scientific-name plus authorship matching after NFC and Unicode-whitespace normalization, with the exact trailing COL authorship suffix removed. No fuzzy, case-folded, accent-folded, synonym, rank-variant, token-reordered or species-concept matching is used. The Reptile Database archive has 12,650 accepted species rows in the Reptilia closure: 12,623 in the non-Crocodylia partition (12,622 exact COL matches and one source-only record) and 27 in Crocodylia (all exact matches). Unmatched, ambiguous and withheld counts are zero in both partitions.

Each row-level payload is deterministic gzip-compressed JSONL and is split so every uncompressed payload is at most 2 MiB. The Web profile is summary-only; the native-full profile retains every projected record for Android and iOS. Source-only records retain null COL ownership and are not a claim of a globally new species. The projection is nomenclatural/source evidence only, not a biological dossier, phylogeny, fossil record or expert review.

## Reproduction and delivery

From the repository root, replay each partition against the committed archive and COL registry:

```sh
python scripts/build-reptiledb-source.py turtles-lepidosaurs
python scripts/build-reptiledb-source.py crocodylia
python scripts/reptiledb-source.test.py
```

The generated descriptors live in the respective rich packages' `nomenclature/` directories. The existing runtime builder registers them as `reptiledb-turtles-lepidosaurs-extension` and `reptiledb-crocodylia-extension`; JSONL encoding does not make these ITIS records. Turtles/lepidosaurs contain 16 COL partitions and one source-only partition; Crocodylia contains one COL partition. The one source-only species is *Ablepharus capitaneus*, with null `colId` and archive locators `Taxon.tsv:181` and `Name.tsv:186`.

`npm run data:stage` publishes summaries and inventories; `npm run data:stage:mobile` publishes all 18 row shards through the existing native-full profile. Neither operation downloads a mutable latest archive. Release snapshot identifiers identify reproducible content, not a compatibility layer.
