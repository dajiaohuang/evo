# Dataset changelog

## 2026.09-static-v5-rc138 — 2026-09-05

- Added a byte-pinned World Hydrozoa Database / ChecklistBank attempt-84 authority archive for Hydrozoa: 4,005 COL species rows (3,997 exact accepted matches and 8 unmatched) plus 7 source-only accepted-species records.
- Android and iOS publish all 11 deterministic Hydrozoa partitions, while GitHub Pages retains the complete summary and canonical inventory without row payloads. Taxon evidence lookup follows the Hydrozoa COL root `B8V3X`.
- The API metadata license `cc by`, archive-embedded license `CC-BY`, and differing DOI claims remain independent source evidence; none is silently normalized.

## 2026.09-static-v5-rc137 — 2026-09-05

- Added frozen original-source projections for all 100 Gnathostomulida and 23 Priapulida COL26.8 rows. Every row matches one non-provisional accepted source name exactly after NFC and whitespace normalization; no fuzzy match, synonym resolution or species-concept equivalence is asserted.
- Full-data delivery contains 123 records in two deterministic gzip files. Pages publishes complete summaries and canonical inventories without row payloads, while Android and iOS include and verify both shards on demand.
- Pinned ChecklistBank dataset 1125 and 1124 archive attempt 87, API responses, archive-member hashes and source row locators. The API `cc by` label and embedded archive `CC-BY` label remain separate evidence without inferring a licence version. The 2,183,133-species COL baseline and native build numbers remain unchanged. No compatibility layer or new content-validation framework was added. See [RC128 source scope and reproduction](../docs/worms-small-original-sources-rc128.md).

## 2026.09-static-v5-rc136 — 2026-09-05

- Added frozen original-source projections for all 132 Chaetognatha, 122 Rhombozoa and 46 Loricifera COL26.8 rows. All 300 COL rows match non-provisional accepted source names exactly after NFC and whitespace normalization; no fuzzy match, synonym resolution or species-concept equivalence is asserted.
- Retained one additional accepted Loricifera source record separately with `colId: null`. Full-data delivery contains 301 records in four deterministic gzip files. Pages publishes complete summaries and canonical inventories without row payloads, while Android and iOS contain every shard.
- Pinned the exact successful ChecklistBank archive attempts 85, 86 and 88, API responses, archive-member hashes and row locators. API DOI/licence fields and the embedded archive metadata are retained as distinct evidence layers. The 2,183,133-species COL baseline, app version, native build number and storage allowances remain unchanged. No compatibility layer or new content-validation framework was added. See [RC136 source scope and reproduction](../docs/original-sources-rc136.md).

## 2026.09-static-v5-rc131 — 2026-09-05

- Added release-pinned original-source projections for all 2,940 COL26.8 Scorpiones rows from *The Scorpion Files* (ChecklistBank 1164) and all 3,141 Chilopoda rows from ChiloBase (ChecklistBank 1042). Exact, NFC-and-whitespace-normalized name matching retains 5,141 accepted matches and 940 explicit unmatched outcomes; no fuzzy match or species-concept equivalence is asserted.
- Retained 939 accepted source records separately with null COL ownership. Full-data delivery contains 7,020 records in 13 deterministic gzip files (693,252 compressed bytes; 20,723,052 uncompressed bytes). The Scorpion Files is attached to `trilobites-chelicerates`; ChiloBase is attached to `crustaceans-insects`. Pages publishes the complete summaries and canonical inventories without row payloads, while Android and iOS contain every shard.
- Preserved the exact source archives, ChecklistBank metadata, archive-member hashes and row locators. The 2,183,133-species COL baseline, app version and native build number remain unchanged. No compatibility layer or new content-validation framework was added. See [RC131 source scope and reproduction](../docs/original-sources-rc131.md).

## 2026.09-static-v5-rc123 — 2026-09-05

- Refined the pinned World Register of Marine Species Bryozoa dataset 1081 projection by accepting 14 additional exact names whose only difference is Unicode NFC composition. Every normalized key is unique on both sides and resolves to one non-provisional accepted Species row; no fuzzy match or species-concept equivalence is asserted.
- The source boundary remains 20,367 COL26.8 rows: 20,325 exact accepted matches, 6 accepted redirects and 36 unmatched rows, with 202 source-owned accepted concepts retained separately. Full-data delivery contains 20,569 records in 33 deterministic gzip files; Pages remains summary-only.
- Archive bytes, member hashes, source locators, license and citation are unchanged and independently replayed. The 2,183,133-species COL baseline, app version and native build number remain unchanged. No compatibility layer or new content-validation framework was added. See [Bryozoa source scope and reproduction](../docs/bryozoa-1081-archive.md).

## 2026.09-static-v5-rc122 — 2026-09-05

- Added frozen original-source projections for the 4,403 Oligochaeta and 14,430 Polychaeta COL26.8 rows in their exact source-owned boundaries: 18,655 exact accepted-name matches and 178 unmatched rows. A further 393 source-owned accepted concepts are retained separately without asserting COL identity or globally new species.
- Full-data delivery includes all 19,226 rows in 26 deterministic gzip files (5,512,535 bytes; 49,071,718 uncompressed bytes), each below the current 2 MiB uncompressed shard boundary. Pages keeps summaries, source metadata and hashes without row payloads; Android and iOS inventories include every file.
- Preserved the official 2026-09-01 archives, citations, editor/contributor metadata, all original archive-member hashes, source fields, references and row locators. Isolated rebuilds reproduce canonical bytes. The 2,183,133-species COL baseline, app version and native build number remain unchanged. No compatibility layer or new content-validation framework was added. See [source scope and reproduction](../docs/original-sources-rc122.md).

## 2026.09-static-v5-rc121 — 2026-09-05

- Added frozen original-source projections for all 78 Thaliacea and 68 Appendicularia COL26.8 records in their exact source-owned boundaries. All 146 rows match non-provisional accepted source names exactly; no ambiguous, redirected, unmatched, withheld or source-only row is asserted.
- Full-data delivery includes all 146 records in two compressed files (45,484 bytes; 760,803 uncompressed bytes). Pages retains the same source summaries, exact citations and canonical hashes without row payloads; Android and iOS inventories include both complete files.
- Preserved the official 2026-09-01 ChecklistBank archives, all original archive-member hashes, source name/authorship/reference fields and row locators. Isolated rebuilds reproduce canonical bytes. The source-repository allowance rises from 900 to 925 MiB for subsequent original archives; Pages and mobile allowances, the 2,183,133-species COL baseline, app version and native build number are unchanged. No compatibility layer or content-validation framework was added. See [source scope and reproduction](../docs/original-sources-rc121.md).

## 2026.09-static-v5-rc120 — 2026-09-05

- Added frozen original-source projections for 362 Kinorhyncha, 356 Nematomorpha and 197 Ctenophora COL records. All 915 COL rows match accepted source names exactly; four separately retained Ctenophora source records have no exact COL source-boundary match. This improves source traceability without changing the 2,183,133-species COL baseline.
- Full-data delivery now includes all 919 rows in four compressed files (198,537 bytes), each below 2 MiB uncompressed. Pages retains the same source summaries and canonical hashes without row payloads; Android and iOS inventories include every row file.
- Preserved the actual September 2026 Kinorhyncha/Ctenophora archives and the historical December 2010 Nematomorpha archive. The latter supplies no bibliography data rows, which remains explicit. Isolated rebuilds reproduce canonical bytes. No app version, native build number, storage allowance, compatibility layer or content-validation framework change. See [source scope and reproduction](../docs/original-sources-rc120.md).

## 2026.09-static-v5-rc119 — 2026-09-05

- Added original-source projections for 3,015 Cestoda, 1,364 Nemertea and 903 Gastrotricha COL records: 5,269 exact accepted-name matches, 13 unmatched and 54 separately retained source-only concepts. These improve source traceability; the 2,183,133-species COL baseline is unchanged.
- Full-data builds include all 5,336 rows in 10 compressed files (1,062,668 bytes), each below 2 MiB uncompressed. Pages retains summaries without these row payloads. Original archive evidence stays outside the resident tree.
- Preserved actual source names, authorship, references and row locators; isolated rebuilds reproduce the canonical outputs. Extended existing mobile inventory tests without adding a validation framework or compatibility layer. No app version, native build-number or storage allowance change. See [source scope and reproduction](../docs/original-sources-rc119.md).

## 2026.09-static-v5-rc118 — 2026-09-05

- Added frozen original-source projections for 3,000 Ascidiacea, 6,508 Turbellaria-source and 2,467 Rotifer World Catalogue COL records: 11,960 exact accepted-name matches, 15 unmatched and 30 separately retained source-only concepts. No globally new species or species-concept equivalence is claimed; the 2,183,133-species COL baseline is unchanged.
- Corrected source scope before publication: the Ascidiacea projection excludes 146 other Tunicata records, while the Turbellaria source projection includes 39 source-owned species outside its originally selected subphylum roots. Turbellaria is the source's traditional grouping, not a claim of modern monophyly.
- All 14 new compressed row files (2,152,610 bytes) remain within 2 MiB uncompressed per file. Full-data delivery includes every row; Pages retains summaries only. Original citations and row locators remain outside the resident tree.
- Added no compatibility layer or content-validation framework. Fixed isolated output roots, pinned source-script line endings for cross-platform ledgers, and extended existing replay/native inventory tests. App version, native build number, storage allowances and human review status are unchanged. See [scope and reproduction](../docs/original-sources-rc118.md).

## 2026.09-static-v5-rc117 — 2026-09-05

- Added original WoRMS source archives and exact projections for 20,367 Bryozoa, 5,852 Monogenea and 12,007 Trematoda COL species records. Outcomes are 38,111 accepted-name matches, six explicit Bryozoa synonym redirects and 109 unmatched records. These are source-traceability improvements, not new biological dossiers or independent scientific corroboration.
- Retained 358 unlinked accepted source records separately with null COL IDs. The three September 2026 archives contain 38,475 nonprovisional accepted species; source scope and date differ from COL26.8, so this is not a globally deduplicated species addition. The 2,183,133-species COL baseline is unchanged.
- All 67 new evidence files are bounded to 2 MiB uncompressed and included in full-data inventories. Pages publishes summaries and inventories without these row payloads. Original archives remain separate build-time evidence. The measured canonical data/code footprint is approximately 891 MiB; its limit increases from 875 to 900 MiB. Complete native application resources measure 801.76 MiB, so the repository's native packaging allowance increases from 800 to 825 MiB without omitting content. The Pages limit is unchanged. These are artifact sizes, not resident-memory measurements.
- No compatibility layer, content-validation system, app version or native build-number change. Existing import/replay and delivery tests cover the new source files. Human scientific review status remains unchanged. See [source scope and reproduction](../docs/worms-original-sources-rc117.md).

## 2026.09-static-v5-rc116 — 2026-09-04

- Resolved 28 CilCat, seven Eumycetozoa and one Gymnodinium previously unmatched COL names using frozen official COL-to-source relations and actual accepted source records. Original spelling and authorship differences remain explicit; these are not fuzzy matches or independent scientific corroboration.
- Resolved four ambiguous Ochrophyta ITIS candidates using the exact ITIS TSN links in frozen COL name records. Competing candidates remain evidence; the links are not mislabelled as COL contributor-source relations.
- All 8,505 CilCat, 1,337 Eumycetozoa, 259 Gymnodinium and 1,101 scoped Ochrophyta records now have accepted source links. Unlinked source records remain separate: 27 CilCat, eight Eumycetozoa archive IDs and 2,298 ITIS Ochrophyta records. No new globally unique species or expert review is claimed.
- Preserved source responses and offline regeneration inputs. App/native build numbers are unchanged. Future storage and client work prioritizes large-tree capacity and measured performance without backward-format compatibility requirements; dataset revision labels record content provenance, not a compatibility promise.

## 2026.09-static-v5-rc115 — 2026-09-04

- Added frozen original-source projections for 8,505 CilCat, 1,337 Eumycetozoa and 259 Gymnodinium COL26.8 species records. Strict name/authorship outcomes are 8,477/1,330/258 accepted matches and 28/7/1 unmatched names respectively. These contributor archives trace COL's sources; they are not independent scientific corroboration, new species dossiers or expert review.
- Retained all 55 unlinked accepted CilCat source rows separately, including 28 that are candidates of unresolved COL names. One unlinked Gymnodinium source spelling likewise remains separate. These counts are scoped unlinked source records, not globally unique additions to COL's 2,183,133 accepted species. The Eumycetozoa ledger discloses 15 unlinked source rows without claiming new species; 81 provisional CilCat rows remain excluded.
- Kept original reference IDs, source-table locators, empty fields and explicit missing bibliography records. Each importer uses its actual frozen archive and supports offline, byte-identical regeneration; the Eumycetozoa archive is correctly identified as ZIP rather than tar/gzip.
- Reused existing extension manifests for summary-only light delivery and complete full-data inventories. App version and native build numbers remain unchanged: frontend/backend infrastructure work uses independently verified data baselines, with milestone integration rather than compulsory synchronization for every content batch. No new validation system was added.
- Source details: [CilCat](../docs/cilcat-1113-archive.md), [Eumycetozoa](../docs/eumycetozoa-archive.md), [Gymnodinium](../docs/gymnodinium-archive.md).

## App 0.20.65 / 2026.09-static-v5-rc114 — 2026-09-04

- Replayed the Haptophyta importer against the pinned ITIS 2026-08-26 SQLite and current repository inputs. Descriptor and import-ledger provenance now use resolvable repository-relative paths and the actual ownership input digest, replacing references to a retired local worktree.
- All 90 ITIS-only records and their deterministic gzip bytes remain unchanged. No COL root, additional species coverage, biological dossier or scientific-review status is inferred.
- Refreshed dependent source manifests for lightweight Pages summaries and complete Android/iOS build `68` data. The existing Haptophyta regression now checks resolvable input provenance and output bytes; no new validation framework is introduced.
- Added an offline-reproducible projection for all 96 strict accepted COL source-1033 Ichthyosporea records from the pinned October 2017 Trichomycetes archive. Each retains exact source name/authorship, accepted identifier, historical classification and its nomenclatural reference with archive row locators; 66 empty bibliography titles remain empty. The archive's 287 Fungi and two other Protozoa rows are excluded.
- The new 96-record shard is complete in native data and summary-only on Pages. It adds source traceability, not new COL species, independent scientific corroboration, biological dossiers or expert review. See [source scope and reproduction](../docs/trichomycetes-archive.md).

## App 0.20.64 / 2026.09-static-v5-rc113 — 2026-09-04

- Added collapsed species-page ITIS details for Amphibia, Collembola/Protura, all 28 existing OtherAnimals scopes and the eight Protist scopes with COL records. Exact owner and lineage boundaries are preserved; Oomycota uses the existing 1,494-record four-order projection, not the entire phylum.
- Added an opt-in ITIS browser to the data registry. Native users can select a package, collection, COL/source-only partition and one file, then page or search within that file. This also exposes the separate Fungi and Bacteria ITIS collections and source-only Protist scopes that cannot be attached to a COL species page. Web remains summary-only; empty scopes remain explicitly empty.
- Source-only records remain separate from COL ownership and are not counted as globally unique additional species. ITIS does not substitute for Index Fungorum or LPSN. This release adds no scientific rows, validation framework or expert-review claims. Android and iOS advance to build `67`, retaining the complete native data; the Species Fungorum Oomycota snapshot gap remains open.

## App 0.20.63 / 2026.09-static-v5-rc112 — 2026-09-04

- Exposed the remaining 15 typed package ITIS scopes through default-collapsed source details: Crocodylia, Perissodactyla, Cetartiodactyla, Primates, Crustacea, Actinopterygii, Agnatha/Myxini, Sarcopterygii, Insecta, non-crocodylian reptiles, Mollusca/Brachiopoda/Graptolithina, Porifera/Cnidaria, Echinodermata, Carnivora and other mammals. The three existing scopes remain available; exact lineage and resolved package ownership control applicability.
- Fixed the Mollusca package reader's stale counts to match its existing 159,801 COL outcomes and 7,219 accepted-name matches, including seven represented Rhabdopleura species. The package grouping does not imply molluscan or brachiopod affinity for Graptolithina. No scientific rows were added or changed.
- Pages retains summary-only source details. Android and iOS build `66` retain all full-native rows and use the matching COL-ID shard on expansion. Source access is not new species coverage, biological dossier enrichment or scientific review. The Species Fungorum Oomycota snapshot gap remains open.

## App 0.20.62 / 2026.09-static-v5-rc111 — 2026-09-04

- Added default-collapsed ITIS source details for Chondrichthyes and Chelicerata, reusing the existing Myriapoda disclosure. Exact lineage and package scopes retain the Trilobita and Euthycarcinoidea exclusions. Pages loads summaries only; native lookups load one matching COL-ID shard.
- Fixed the Oomycota ITIS reader's stale 1,426-row contract to match the existing four-order projection: 1,494 COL outcomes and 42 separate source-only records. The underlying source data are unchanged.
- Investigated the planned 1,673-species Species Fungorum Oomycota projection. Available frozen archives lack the necessary source closure; two live API samples resolve names but do not establish a complete redistributable snapshot. No withheld-only placeholder projection or additional source coverage is claimed. See [source findings and remaining gap](../docs/sources/species-fungorum-live-api-oomycota-gap.md).
- Android and iOS build `65` retain all existing full-native data. This batch changes source access and documents a data gap, not the strict COL baseline, biological dossiers, fossil coverage or human-review status.

## App 0.20.61 / 2026.09-static-v5-rc110 — 2026-09-04

- Fixed the ITIS Myriapoda comparison boundary: COL places Chilopoda at a separate `93` root rather than under `L2G4H`. All 3,141 previously omitted COL records now have explicit outcomes: 2,864 accepted matches, 58 official synonym redirects, 15 ambiguous and 204 unmatched. The original 14,210 records remain unchanged.
- Repartitioned the existing ITIS evidence without a new source download: Myriapoda now contains 17,351 COL outcomes and 544 source-only records in four shards. Ambiguous candidate targets remain evidence, not confirmed species-concept equivalence.
- Added the frozen WoRMS Radiozoa projection for all 444 scoped COL records, with 54 separate source-only accepted concepts. Its two shards total 23,103 compressed bytes. COL's Polycystina source also derives from WoRMS, so this is not independent scientific corroboration.
- Android and iOS build `64` include every resulting shard. Pages keeps lightweight summaries; a new collapsed Myriapoda disclosure exposes the existing lookup API for both Myriapoda and the separate Chilopoda lineage. See [arthropod scope and counts](../docs/itis-arthropods-authority.md) and [Radiozoa provenance](../docs/worms-radiozoa-archive.md). No biological dossiers, fossil coverage or human-review status are promoted.

## App 0.20.60 / 2026.09-static-v5-rc109 — 2026-09-04

- Added independent frozen WoRMS name/status projections for all 19,604 scoped COL Nematoda species and 80,890 scoped Crustacea species. Exact accepted matches, explicit redirects, ambiguity, unmatched names and withheld mappings remain distinct.
- Kept 2,104 Nematoda and 8,675 Crustacea source-only accepted concepts in separate null-COL-ID partitions. These are relative to the declared COL comparison scopes, not a globally deduplicated species increment. Existing COL, ITIS, OSF and WoRMS layers remain intact.
- Pages keeps source summaries and canonical file inventories without the new row payloads. Android and iOS build `63` include all 42 additional shards, with range-based lookup and separate opt-in source-only browsing. No new scientific review status or biological dossiers are claimed.
- See [Nematoda provenance](../docs/worms-nematoda-archive.md) and [Crustacea provenance](../docs/worms-crustacea-archive.md). The importer uses explicit independent scopes and ledgers while preserving its original default scope set.

## App 0.20.59 / 2026.09-static-v5-rc108 — 2026-09-04

- Fixed resource-pack rebuilding so the COL baseline and targeted authority generators preserve independent sources instead of replacing their shared directories or extension lists.
- Retained separate source-only partitions, source attribution and existing scientific interpretation. The strict COL species total and human-review status are unchanged.
- Pages stays lightweight; Android and iOS build `62` retain the full inventory. See [rebuild ownership and reproduction](../docs/resource-pack-rebuilds.md).

## App 0.20.58 / 2026.09-static-v5-rc107 — 2026-09-04

- Added a separate WoRMS Annelida archive projection for all 18,982 strict accepted COL species in that scope, with explicit matching outcomes and a distinct source-only accepted partition. The existing COL and ITIS records remain separate and unchanged.
- Kept Other Animals' mixed-package boundary explicit: the remaining 80,179 COL species are outside this source scope. Source-only names do not become extra COL species or a claimed deduplicated union of all authorities.
- Pages exposes summary metadata without the new row shards; Android and iOS build `61` retain the complete native-full inventory and on-demand independent-source lookup. Detailed source controls remain collapsed by default.
- See [source provenance and interpretation](../docs/worms-annelida-archive.md). No fossil content, rich-profile maturity or human-review status is promoted.

## App 0.20.57 / 2026.09-static-v5-rc106 — 2026-09-04

- Fixed Android packaging: the Android Gradle Plugin asset merger stripped `.gz` extensions and decompressed scientific files, breaking the shared client's release URLs. A supported merged-assets transform now preserves Capacitor's synced public tree byte-for-byte before APK/AAB packaging; non-public plugin assets remain merged normally.
- Updated existing Android/iOS native tests for all four rc105 authority archives and the current 312 research scenes / 513 claim links. Fixed Java compilation errors discovered by the first local SDK build.
- Added native WebView loading smoke tests and an unsigned macOS iOS simulator CI job with a shared Xcode test scheme. Compilation and simulator evidence are distinct from device coverage, signing and store publication.
- Both native projects advance to build `60`. This delivery-only release preserves the scientific content, source boundaries and full-native/lightweight-Pages split of rc105; its new release path avoids replacing an existing immutable release.

## App 0.20.56 / 2026.09-static-v5-rc105 — 2026-09-04

- Added independent, pinned WoRMS and Orthoptera Species File archive crosswalks for all 216,098 strict accepted COL species in four exact scopes: Mollusca, Porifera, Cnidaria and Orthoptera. Direct matches, explicit redirects, ambiguity, unmatched names and withheld relations remain separate outcomes, not species-concept equivalence assertions.
- Retained separate source-only accepted concepts with null COL ownership. Only minimal name, status, identifier and source-row projections are redistributed; original archives, media, distribution and literature members are not bundled.
- Added a default-collapsed source disclosure on the corresponding catalogue species pages. Native clients load one COL interval on demand and offer separate source-only browsing; Pages publishes source summaries and file inventories without the new row shards.
- Fixed catalogue and PaleoDEM worker data URLs to resolve native `./data` against the document before dispatch. Previously workers under `assets/` requested `assets/data/`, so files could be correctly bundled yet catalogue pages and terrain still failed to load.
- Android and iOS advance to build `59` / app `0.20.56`, retaining complete `native-full` content and unchanged size limits. Catalogue ownership, 403 source-linked navigation descriptions, 127 profiles, 312 scenes and human-review status remain unchanged. See [archive provenance and boundaries](../docs/authority-archives-rc105.md).

## App 0.20.55 / 2026.09-static-v5-rc104 — 2026-09-04

- Replaced boilerplate-first descriptions for all 403 navigation nodes with a complete, directly linked scientific claim and its existing Chinese translation. Selection prefers taxonomy and morphology before other evidence types and is stable by claim ID within a type.
- Kept the original uncertainty wording, supporting references and a short navigation/non-dossier boundary. This exposes existing evidence on first selection; it adds no new scientific assertions, species dossiers, phylogenies or human-review decisions.
- Retained 127 narrative profiles, 312 scenes, 513 scene-to-claim links and 258 age-driven routes. Catalogue coverage is unchanged and must not be confused with these educational-node descriptions.
- Android and iOS advance to build `58` / app `0.20.55` with the complete native data; Pages stays `web-light` under the existing capacity gate.

## App 0.20.54 / 2026.09-static-v5-rc103 — 2026-09-04

- Added 18 bilingual, source-linked research scenes across Tetrapod transition, Echinoderms, Dinosauria, Crustaceans and insects, Carnivora, and Trilobites and chelicerates. The atlas now exposes 312 scenes, 513 scene-to-claim links, and 258 age-driven routes.
- Kept developmental experiments, genomic topologies, clock estimates, isolated skeletal material, nest associations, preservation models, and feeding biomechanics distinct from directly observed history or behaviour.
- Source review makes map routes explicit taxon/period context rather than selected study specimens. It separates Hell Creek bite-trace evidence from the Frenchman Formation coprolite, identifies older Zachełmie evidence as outside the displayed synthesis interval, and labels the early-stereom interval as the source’s historical calibration rather than current Stage 3 boundaries.
- Fixed map-card time matching to intersect each explicit scene window with its claim-linked published range. Dated scenes no longer appear throughout a taxon's broader history, and card age labels show the matching intersection.
- Android and iOS advance to build `57` / app `0.20.54` with the same complete native dataset. Pages retains the lighter delivery profile and unchanged capacity limits. Human and external scientific review statuses are not promoted.

## App 0.20.53 / 2026.09-static-v5-rc102 — 2026-09-04

- Added six source-bounded research scenes covering the Avalon assemblage, Snowy Plains amniote-track interpretation, competing placental topology models, *Micrina*, *Octopus bimaculoides*, and *Lingula anatina*.
- Raised Atlas core and Molluscs and brachiopods to 12 scenes each. All 24 rich-content packages now expose at least 12 scenes, for 294 research scenes, 480 scene-to-claim links, and 240 age-driven routes.
- Local assemblages, trace fossils, molecular topologies, developmental comparisons, and living-taxon observations retain their own evidence boundaries; these entries do not establish global FAD/LAD, direct ancestry, complete distributions, or exact fossil-to-map co-registration.
- Source review separates the approximately 571 Ma upper Drook context from the approximately 566 Ma Mistaken Point horizon, uses the probable 358.9–354 Ma Snowy Plains interval, and removes unsupported claims that generic map markers locate the cited samples.
- Regenerated the shared registry and manifest as RC102. Android and iOS advance to build `56` / app `0.20.53`, retaining the complete `native-full` catalogue, authority shards, and 109 lossless 0.1° PaleoDEM frames; Pages remains `web-light`.

## App 0.20.52 / 2026.09-static-v5-rc101 — 2026-09-01

- Added nine source-bounded, age-driven map scenes: three each for Dinosauria, Crustaceans and insects, and Trilobites and chelicerates. All three packages now expose 12 scenes, raising the atlas from 279 to 288 scenes and from 449 to 470 scene-to-claim links.
- Added bounded windows for *Mussaurus*, *Ledumahadi* and *Triceratops*; *Luprisca*, *Waukartus* and *Saxonagrion*; and *Pentecopterus*, *Jaekelopterus* and *Parioscorpio*.
- Connected all new cards to locator-bearing claims and `available` ranges sharing routed age and entity context. The atlas now has 235 age-driven routes; named specimens, formation envelopes, classification matrices, functional interpretations and ecological reconstructions remain distinct from direct observation, global FAD/LAD, complete distribution, direct ancestry or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC101. Android `versionCode` and iOS build number advance to `55` / app `0.20.52`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.51 / 2026.09-static-v5-rc100 — 2026-09-01

- Added nine source-bounded, age-driven map scenes: three each for Tetrapod transition, Carnivora and Echinoderms. The packages now expose 12, 13 and 13 scenes respectively, raising the atlas from 270 to 279 scenes and from 436 to 449 scene-to-claim links.
- Added bounded windows for *Guiyu*, *Tinirau* and a 24-calibration bony-fish clock model; *Dormaalocyon*, *Puijila* and *Panthera blytheae*; and the contested affinity of *Yanjiahella*, early echinoid fossil/model evidence and articulated *Oesolcucumaria* material.
- Connected all new cards to locator-bearing claims and `available` ranges sharing routed age and entity context. The atlas now has 226 age-driven routes; named specimens, formation envelopes, competing affinities, functional interpretations and clock models remain distinct from direct observation, global FAD/LAD, complete distribution, direct ancestry or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC100. Android `versionCode` and iOS build number advance to `54` / app `0.20.51`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.50 / 2026.09-static-v5-rc99 — 2026-09-01

- Added 10 source-bounded, age-driven map scenes: three each for Other mammals and Gymnosperms and four for Primates. Other mammals and Gymnosperms now expose 12 scenes each and Primates exposes 13, raising the atlas from 260 to 270 scenes and from 411 to 436 scene-to-claim links.
- Added named material, locality, formation and model windows for *Ambolestes*, Afrotheria and *Mimolagus*; *Purgatorius*, *Darwinius*, *Saadanius* and *Altiatlasius*; and cycad range contraction, Holyoke J 1430 Araucariaceae and the >300 Ma conifer fossil record boundary.
- Connected all new cards to locator-bearing claims and `available` ranges sharing routed age and entity context. The atlas now has 217 age-driven routes; molecular and biogeographic models, total-evidence matrices, sampled anatomy, regional records and rounded ages remain distinct from direct observations, global FAD/LAD, complete distribution, direct ancestry or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC99. Android `versionCode` and iOS build number advance to `53` / app `0.20.50`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.49 / 2026.09-static-v5-rc98 — 2026-09-01

- Added 11 source-bounded, age-driven map scenes: three for Chondrichthyes and four each for Angiospermae and Early land plants. Chondrichthyes now exposes 12 scenes and both plant packages expose 13, raising the atlas from 249 to 260 scenes and from 382 to 411 scene-to-claim links.
- Added named material, locality, formation, proxy and model windows for *Qianodus*, *Fanjingshania* and *Shenacanthus*; angiosperm crown diversification, C4 biomass, Great Plains phytolith assemblages and Corral Bluffs legumes; and Ghaba-1 sporangia, *Horneophyton*, *Asteroxylon* and crown Embryophyta.
- Connected all new cards to locator-bearing claims and `available` ranges sharing routed age and entity context. The atlas now has 207 age-driven routes; phylogenetic and clock models, proxy assemblages, sampled anatomy, regional records and rounded ages remain distinct from direct observations, global FAD/LAD, complete distribution, direct ancestry or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC98. Android `versionCode` and iOS build number advance to `52` / app `0.20.49`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.48 / 2026.09-static-v5-rc97 — 2026-09-01

- Added 11 source-bounded, age-driven map scenes: four for Perissodactyla, three for Cetartiodactyla, and four for Turtles and lepidosaurs. Perissodactyla and Cetartiodactyla now expose 12 scenes each and Turtles and lepidosaurs exposes 13, raising the atlas from 238 to 249 scenes and from 358 to 382 scene-to-claim links.
- Added named material, locality, formation and model windows for PETM perissodactyl samples, North American and Old World Hipparionini and Tibetan *Coelodonta*; *Indohyus*, *Peregocetus* and *Basilosaurus*; and *Cryptovaranoides*, *Megachirella*, Rhynchocephalia and Serpentes.
- Connected all new cards to locator-bearing claims and `available` ranges sharing routed age and entity context. The atlas now has 196 age-driven routes; competing topologies, tip-dating posteriors, comparative samples, rounded ages and regional records remain distinct from direct observations, global FAD/LAD, complete distribution, direct ancestry or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC97. Android `versionCode` and iOS build number advance to `51` / app `0.20.48`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.47 / 2026.09-static-v5-rc96 — 2026-09-01

- Added 12 source-bounded, age-driven map scenes: four each for Crocodylomorphs and birds, Mammal origins, and Sponges and cnidarians. All three packages now expose 12 scenes, raising the atlas from 226 to 238 scenes and from 329 to 358 scene-to-claim links.
- Added named specimen, locality, formation and model windows for Crocodylia, *Archaeopteryx*, *Asteriornis* and Neornithes; *Echinerpeton*, the *Riograndia*–*Brasilodon* sample, the *Dianoconodon*–*Feredocodon* comparison and *Liaoconodon*; and *Eocyathispongia*, *Helicolocellus*, Soltanieh spicules and *Auroralumina*.
- Connected all new cards to locator-bearing claims and `available` ranges sharing routed age and entity context. The atlas now has 185 age-driven routes; model outputs, comparative windows, isolated material and rounded formation ages remain distinct from direct observations, global FAD/LAD, complete distribution, direct ancestry or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC96. Android `versionCode` and iOS build number advance to `50` / app `0.20.47`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.46 / 2026.09-static-v5-rc95 — 2026-09-01

- Added 12 source-bounded, age-driven map scenes: four each for Early fishes, Actinopterygii and Amphibia. All three packages now expose 12 scenes, raising the atlas from 214 to 226 scenes and from 302 to 329 scene-to-claim links.
- Added specimen- and locality-bounded windows for *Xiushanosteus*, *Priscomyzon*, *Myxinikela* and *Tethymyxine*; *Cheirolepis*, *Fukangichthys*, *Pseudopholidoctenus* and *Barschichthys*; and *Gerobatrachus*, *Triadobatrachus*, *Funcusvermis* and *Beiyanerpeton*. Every card keeps preserved anatomy separate from functional, homology, developmental and phylogenetic interpretations.
- Connected the new cards to package-shipped, locator-bearing claims and `available` ranges sharing their routed entity and age. The atlas now has 173 age-driven routes; locality and formation windows, rounded ages and sampled specimens remain distinct from global FAD/LAD, complete distribution, direct ancestry, observed behaviour or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC95. Android `versionCode` and iOS build number advance to `49` / app `0.20.46`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.45 / 2026.09-static-v5-rc94 — 2026-09-01

- Added 11 source-bounded, age-driven map scenes: four each for Dinosauria and Molluscs and brachiopods, plus three for Crustaceans and insects. All three packages now expose nine scenes, raising the atlas from 203 to 214 scenes and from 288 to 302 scene-to-claim links.
- Connected every new card to package-shipped, locator-bearing claims and an `available` range sharing the routed entity and age. All 161 age-driven scenes now satisfy the entity, claim and range intersection contract.
- Preserved named-specimen, locality, formation, soft-tissue, morphology, functional, ecological, homology, phylogenetic, sampling and rounded-age boundaries. No card turns a locality sample into a global FAD/LAD or complete distribution, or a comparative model into observed behaviour or direct ancestry.
- Regenerated the shared package registry and manifest as RC94. Android `versionCode` and iOS build number advance to `48` / app `0.20.45`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.44 / 2026.09-static-v5-rc93 — 2026-09-01

- Added 18 source-bounded, age-driven map scenes: six each for Atlas core, Tetrapod transition, and Trilobites and chelicerates. All three packages now expose nine scenes, raising the atlas from 185 to 203 scenes and from 260 to 288 scene-to-claim links.
- Connected every new card to an existing locator-bearing claim and an `available` range sharing its routed entity and age. One integration-time Megachelicerax link was corrected from a global claim outside the package to the package-owned range claim; all 150 age-driven scenes now satisfy the entity, claim and range intersection contract.
- Preserved named-specimen, locality, formation, trace, functional, homology, phylogenetic, model and rounded-age boundaries. No card turns reconstruction into observed behaviour or asserts a global FAD/LAD, direct ancestry, complete distribution or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC93. Android `versionCode` and iOS build number advance to `47` / app `0.20.44`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.43 / 2026.09-static-v5-rc92 — 2026-09-01

- Added 18 source-bounded, age-driven plant map scenes: six each for Early land plants, Gymnosperms and Angiosperms. All three packages now expose nine scenes, raising the atlas from 167 to 185 scenes and from 227 to 260 scene-to-claim links.
- Connected every new card to an existing locator-bearing claim and an `available` range sharing its routed entity and age. All 132 age-driven scenes now satisfy the same entity, claim and range intersection contract.
- Preserved specimen, locality, formation, calibration, model, functional and rounded-age boundaries. In particular, the angiosperm calibration-sensitivity scene is explicitly non-pollen model context rather than a fossil occurrence; no card asserts a global FAD/LAD, direct ancestry, complete distribution or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC92. Android `versionCode` and iOS build number advance to `46` / app `0.20.43`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.42 / 2026.09-static-v5-rc91 — 2026-09-01

- Added 20 source-bounded, age-driven map scenes: six for Turtles and lepidosaurs, nine for Marine reptiles and pterosaurs, and five for Crocodylomorphs and birds. The three packages now expose 9, 12 and 8 scenes, raising the atlas from 147 to 167 scenes and from 201 to 227 scene-to-claim links; six turtle/lepidosaur cards retain both their event claim and the range claim required by the time-map overlay.
- Connected every new card to an existing locator-bearing claim and an `available` range sharing its routed entity and age. All 114 age-driven scenes now satisfy the same entity, claim and range intersection contract.
- Preserved named-specimen, locality, formation, calibration, model, functional, phylogenetic and rounded-age boundaries; no card asserts a global FAD/LAD, direct ancestry, complete distribution, observed behaviour or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC91. Android `versionCode` and iOS build number advance to `45` / app `0.20.42`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.41 / 2026.09-static-v5-rc90 — 2026-09-01

- Added 17 source-bounded, age-driven map scenes: six for Cetartiodactyla, five for Mammal origins and six for Other mammals. The three packages now expose 9, 8 and 9 scenes, raising the atlas from 130 to 147 scenes and from 184 to 201 scene-to-claim links.
- Connected every new card to an existing locator-bearing claim and an `available` range sharing its routed entity and age. The release-wide join audit also corrected the legacy Notharctus and Eosimias map cards to use the event claims carried by their available ranges; all 94 age-driven scenes now satisfy the same contract.
- Preserved specimen, composite-material, locality, horizon, model, disputed-provenance, biochronological, functional and rounded-age boundaries; no card asserts a global FAD/LAD, direct ancestry, complete distribution, observed behaviour or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC90. Android `versionCode` and iOS build number advance to `44` / app `0.20.41`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.40 / 2026.09-static-v5-rc89 — 2026-09-01

- Added 16 source-bounded, age-driven map scenes: five for Actinopterygii, five for Early fishes and six for Chondrichthyes. The three packages now expose 8, 8 and 9 scenes, raising the atlas from 114 to 130 scenes and from 168 to 184 scene-to-claim links.
- Connected every new card to an existing locator-bearing claim and an `available` range sharing the routed entity and age. All 77 age-driven scenes now satisfy the same entity, claim and range intersection contract.
- Preserved specimen, locality, horizon, study-envelope, taxonomic and rounded-age boundaries; sampled records are not promoted to global first or last appearances, direct ancestors, complete distributions or exact fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC89. Android `versionCode` and iOS build number advance to `43` / app `0.20.40`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.39 / 2026.09-static-v5-rc88 — 2026-09-01

- Added 17 source-bounded, age-driven map scenes: five for Perissodactyla, seven for Echinoderms and five for Amphibia. The three packages now expose 8, 10 and 8 scenes, and the atlas totals rise from 97 to 114 scenes and from 151 to 168 scene-to-claim links.
- Connected the new cards to existing locator-bearing claims and `available` ranges for named specimens, regional dispersal windows, articulated faunas and class-specific records. All 61 age-driven scenes now intersect a shared entity-and-claim range at the routed age.
- Preserved source boundaries throughout: one dated specimen or sampled horizon is not presented as a global first or last appearance, exact origin, direct ancestor, complete distribution, extinction cause or demonstrated fossil-to-map co-registration.
- Regenerated the shared package registry and manifest as RC88. Android `versionCode` and iOS build number advance to `42` / app `0.20.39`; both native apps retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames while Pages remains `web-light`.

## App 0.20.38 / 2026.09-static-v5-rc87 — 2026-09-01

- Expanded Sponges and cnidarians, Carnivora and Primates from five to seven complete bilingual profiles each: Burgessomedusa phasmiformis, Amphimedon queenslandica, Lycophocyon hutchisoni, Kretzoiarctos beatrix, Notharctus and Eosimias.
- Added 24 field-linked primary-evidence claims, increasing the atlas from 121 to 127 complete profiles and 1,253 to 1,277 claims while retaining 403 navigation nodes and 484 references.
- Added 18 source-bounded map, tree and comparison scenes, increasing the package scene totals to 8, 10 and 9 and the atlas total from 79 to 97. All 44 age-driven scenes intersect an `available` range at their routed age and share entity and claim context with it.
- Withheld a numerical fossil duration for the living Amphimedon genome sample. Burgessomedusa remains bounded to Raymond Quarry; Lycophocyon and Kretzoiarctos retain classifier, matrix and locality limits; Notharctus and Eosimias retain functional, isolated-bone and association limits. None is promoted to a direct ancestor, global FAD/LAD, complete distribution or observed behaviour.
- Kept Pages on `web-light`; Android and iOS build `41` receive the same RC87 dossiers and scenes while retaining the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames.

## App 0.20.37 / 2026.09-static-v5-rc86 — 2026-09-01

- Expanded Dinosauria from four to six complete bilingual profiles and Molluscs and brachiopods and Crustaceans and insects from five to seven each: Yinlong downsi, Yutyrannus huali, Pojetaia runnegari, Kutorgina chengjiangensis, Rhyniella praecursor and Odonata.
- Added 23 field-linked primary-evidence claims and one reference, increasing the atlas from 115 to 121 complete profiles, 1,230 to 1,253 claims, 483 to 484 references and 72 to 79 research scenes while retaining 403 navigation nodes.
- Increased the three updated packages to five, five and six scenes. All 34 time-driven scenes now intersect an `available` range at their routed age and share an entity and claim with that range; the legacy chondrichthyan scene now targets the 369.25 Ma Maghriboselache specimen window, and the Teilhardina range retains both event and taxon-claim context.
- Preserved specimen, sample and inference boundaries: Yinlong matrix placement and Yutyrannus filament interpretation are not direct ancestry, global first appearances or complete body coverage; Pojetaia, Kutorgina and Rhyniella remain tied to sampled material and horizons; and the living-taxon Odonata genomic sample is distinct from the single Saxonagrion fossil record.
- Kept Rhyniognatha and the Paskov wing as contested, source-bounded evidence scenes without inventing unresolved PBDB identifiers or complete profiles.
- Kept Pages on `web-light`; Android and iOS build `40` receive the same RC86 dossiers and scenes while retaining the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames.

## App 0.20.36 / 2026.09-static-v5-rc85 — 2026-09-01

- Expanded Trilobites and chelicerates, Cetartiodactyla, and Other mammals from three to five complete bilingual profiles each: Olenoides serratus, Megachelicerax cousteaui, Pakicetus attocki, Peregocetus pacificus, Eritherium azzouzorum and Mimolagus aurorae.
- Added 25 field-linked primary-evidence claims, increasing the atlas from 109 to 115 complete profiles and 1,205 to 1,230 claims while retaining 403 navigation nodes, 483 references and 72 research scenes. The dossiers reuse existing nodes and source-ledger entries rather than manufacturing topology or reference growth.
- Preserved specimen and inference boundaries: Olenoides respiratory function and Megachelicerax stem placement remain functional or matrix interpretations; Pakicetus combines separately catalogued material from one locality; Peregocetus dispersal is a reconstructed hypothesis; and Eritherium and Mimolagus remain bounded to named type and referred material, sampled localities and comparative analyses.
- Retained exactly three source-matched tree, time-map or comparison scenes in each updated package.
- Kept Pages on `web-light`; Android and iOS build `39` receive the same RC85 dossiers and retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames.

## App 0.20.35 / 2026.09-static-v5-rc84 — 2026-09-01

- Expanded Mammal origins, Marine reptiles and pterosaurs, and Primates from three to five complete bilingual profiles each: Dimetrodon, Morganucodonta, Chaohusaurus, Rhaeticosaurus mertensi, Teilhardina and Morotopithecus bishopi.
- Added 23 field-linked primary-evidence claims, increasing the atlas from 103 to 109 complete profiles and 1,182 to 1,205 claims while retaining 403 navigation nodes and increasing the reference ledger from 482 to 483 entries. The new dossiers reuse existing navigation nodes rather than manufacturing extra topology.
- Preserved specimen and inference boundaries: Dimetrodon is not asserted as a direct mammal ancestor; Morganucodonta compares separately sampled Welsh and Chinese skulls; Chaohusaurus is bounded to the AGM I-1 maternal and embryonic slab; Rhaeticosaurus uses a partial subadult holotype and matrix-dependent placement; Teilhardina's correlated PETM dental sequence is not a migration track; and Morotopithecus MUZM 60 and MUZM 80 are not an associated skeleton.
- Retained exactly three source-matched tree, time-map or comparison scenes in each updated package.
- Kept Pages on `web-light`; Android and iOS build `38` receive the same RC84 dossiers and retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames.

## App 0.20.34 / 2026.09-static-v5-rc83 — 2026-09-01

- Expanded Molluscs and brachiopods, Chondrichthyes, and Crustaceans and insects from three to five complete bilingual profiles each: Micrina, Yuganotheca elegans, Maghriboselache mohamezanei, Cosmoselachus mehlingi, Strudiella and Cretophasmomima melanogramma.
- Added 32 field-linked primary-evidence claims, increasing the atlas from 97 to 103 complete profiles, 399 to 403 navigation nodes and 1,150 to 1,182 claims. Every new visible field retains a locator-bearing claim and Chinese translation.
- Preserved specimen and inference boundaries: Yuganotheca is a 710-specimen combined reconstruction with corrected supplementary figures; Maghriboselache retains topology-sensitive placement; Cosmoselachus is limited to a damaged partial holotype; Strudiella remains a contested arthropod after its insect diagnosis was rejected; and Cretophasmomima leaf crypsis remains a functional interpretation.
- Retained three source-matched time-map or comparison scenes per updated package.
- Kept Pages on `web-light`; Android and iOS build `37` receive the same RC83 dossiers and retain the complete `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames.

## App 0.20.33 / 2026.09-static-v5-rc82 — 2026-09-01

- Expanded Early fishes, Sponges and cnidarians, and Carnivora from three to five complete bilingual profiles each: genus-level Tujiaaspis and Xiushanosteus anchored by T. vividus and X. mirabilis specimens, Haootia quadriformis, Xianguangia sinica, Hesperocyon and genus-level Enaliarctos.
- Added 26 field-linked primary-evidence claims, increasing the atlas from 91 to 97 complete profiles, 397 to 399 navigation nodes and 1,124 to 1,150 claims. Every new visible field retains a locator-bearing claim and Chinese translation.
- Kept the Chongqing fish records within a 438.6–432.9 Ma Telychian sample envelope; retained Haootia, Xianguangia and Enaliarctos as specimen-, locality- or study-bounded displays. LACM 4321 now uses the primary report's explicitly approximate 23 Ma age rather than an unsupported 24–22 Ma interval.
- Corrected the Wang 1994 Hesperocyoninae reference to the official AMNH handle `2246/829`, removed the DOI belonging to the 2009 Caninae monograph, aligned the Enaliarctos scientific name with its genus rank and corrected LACM 4321 to a virtually complete skeleton.
- Retained exactly three research scenes per rich package while retargeting the updated map and comparison routes to source-matched windows. Pages remains `web-light`; Android and iOS build `36` retain every profile plus the full catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames.

## App 0.20.32 / 2026.09-static-v5-rc81 — 2026-09-01

- Expanded Early land plants, Gymnosperms, and Crocodylomorphs and birds from two to four complete bilingual profiles each: Aglaophyton, Horneophyton, Coniferophyta, Araucariaceae, Carnufex and Asteriornis.
- Added 26 field-linked primary-evidence claims, increasing the atlas from 85 to 91 complete profiles, 395 to 397 navigation nodes and 1,098 to 1,124 claims. Corrected the Leslie et al. 2012 display title to the published “Hemisphere-scale differences in conifer evolutionary dynamics”.
- Kept the Rhynie material within its 412.8–410.2 Ma locality window, Holyoke J 1430 within its Hettangian specimen context, Carnufex NCSM 21558 at the bounded 231 Ma occurrence and Asteriornis NHMM 2013 008 within 66.8–66.7 Ma. None is promoted to a global FAD/LAD, direct ancestor, universal ecology or method-independent topology.
- Retained exactly three research scenes per rich package while retargeting the three map scenes to source-matched Aglaophyton, Araucariaceae and Carnufex windows. Pages remains `web-light`; Android and iOS build `35` retain every profile plus the full catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames.

## App 0.20.31 / 2026.09-static-v5-rc80 — 2026-09-01

- Added nine complete bilingual profiles across three evidence packages: Triceratops, Ankylosaurus and Buriolestes in Dinosauria; Testudines, Lepidosauria and Mosasauroidea in turtles and lepidosaurs; and Pseudopholidoctenus germanicus, Barschichthys ruedersdorfensis and Ruedersdorfia berlinensis in Actinopterygii.
- Added 36 primary-source-linked claims with explicit specimen, locality, stratigraphic, matrix and inference boundaries. Corrected the Bellairsia provenance so NMS G.2022.1.1 is tied to the Middle Jurassic Kilmaluag Formation on Skye, while Kirtlington material remains separate fragmentary referred comparison material.
- Increased complete profiles from 76 to 85, canonical navigation nodes from 392 to 395 and evidence claims from 1,062 to 1,098. Pages remains `web-light`; Android and iOS build `34` retain the full catalogue, all native authority shards, all 109 lossless 0.1° PaleoDEM frames and the complete enriched package data.

## App 0.20.30 / 2026.09-static-v5-rc79 — 2026-09-01

- Increased every Web/Pages PaleoDEM v2 preview from a 0.5° every-fifth-cell exact sample to a 0.3° every-third-cell exact sample. All 109 official nominal ages remain independently addressable as 1201×601 signed-int16 grids, with no smoothing, averaging, spatial interpolation or temporal interpolation.
- Preserved every Android and iOS PaleoDEM payload byte-for-byte at the original 3601×1801, 0.1° lossless native resolution. The native compressed total remains 168,418,483 bytes while the complete Web preview series is 24,847,071 bytes.
- Updated the runtime contract, manifests, UI labels, documentation, smoke tests and end-to-end checks to reject mixed 0.5°/0.3° releases. Android and iOS advance to build `33`; the 650 MiB Pages gate remains unchanged.

## App 0.20.29 / 2026.08-static-v5-rc78 — 2026-08-31

- Added concise bilingual navigation descriptions for all 392 canonical nodes. Each description is generated from existing node rank, package ownership, represented descendant scope and direct locator-bearing claim count, and explicitly disclaims phylogeny, origin, ancestry, dates, ecology, distribution and completeness.
- Expanded all 24 rich-content packages from one research preset each to three scenes each: 72 total scenes with 102 package-local claim links. All 21 comparison scenes require two existing complete-profile IDs; packages without a defensible pair use map or diversity routes.
- Removed the fixed preset-launcher column from the comprehensive dashboard. The map now surfaces package cards only when the selected age intersects an `available` package range that shares a claim ID and entity with the scene. Cards expose interval, geographic scope and limitations and state that their overlay is not a fossil locality or reconstructed distribution.
- Fixed comparison-route hydration so both `left` and `right` profile subjects are respected. Pages remains `web-light`; Android and iOS build `32` retain the full `native-full` catalogue, authority shards and all 109 lossless 0.1° PaleoDEM frames together with the same descriptions and scenes.

## App 0.20.28 / 2026.08-static-v5-rc77 — 2026-08-31

- Expanded the Angiospermae package from two to four complete profiles by adding Poaceae and Fabaceae, with 28 new field-to-claim links, and added a claim-linked Eudicotyledoneae evidence dossier without inventing a PBDB ID for its unresolved concept. The batch adds 11 claims grounded in primary studies with precise locators.
- Expanded the Echinoderms package from two to seven complete profiles by adding Crinoidea, Blastoidea, Asteroidea, Ophiuroidea and Holothuroidea. Twenty new claims and five reused fossil-range claims retain specimen, locality and class-level interpretation boundaries.
- Added field-linked Elpistostege, Acanthostega and Ichthyostega profiles to the tetrapod-transition package with three specimen-bounded ranges and 12 new bilingual claims. Regional samples, biomechanical models and phylogenetic analyses are not promoted to global ranges, direct ancestry or observed ecology.
- Increased complete profiles from 66 to 76 and source-linked claims from 1,019 to 1,062 without adding a new scientific-validation subsystem. Pages remains `web-light`; Android and iOS build `31` retain the full COL26.8 catalogue, every native authority shard, all 109 lossless 0.1° PaleoDEM frames and all enriched package data.

## App 0.20.27 / 2026.08-static-v5-rc76 — 2026-08-31

- Added an independent fixed ITIS `2026-08-26` CC0 Fungi kingdom collection without replacing the complete Species Fungorum / Index Fungorum source linkage. All 157,044 COL26.8 accepted Fungi species retain explicit outcomes: 928 exact current names, 45 official synonym redirects, one ambiguity and 156,070 unmatched rows; 1,761 ITIS-only current species remain in a null-COL partition.
- Added the last large disjoint ITIS animal scope not already covered by another declared collection: Collembola plus Protura. Its 9,668 COL outcomes contain 2,075 exact current names, 25 official redirects, four ambiguities and 7,564 unmatched rows, plus 411 ITIS-only current species.
- Published 168,884 additional native authority records through 60 non-empty deterministic JSONL gzip shards. Android and iOS build `30` retain all row files byte-for-byte; Pages `web-light` exposes only sources, exact roots, methods, counts, limitations and canonical hashes.
- Confirmed that the mobile apps already ship every available fixed PaleoDEM v2 frame at its lossless 0.1° source resolution. Documented the separate 0.05° HydroShare goSPL model as blocked for default redistribution because of its CC BY-NC-SA licence, 11.23 GB elevation payload, irregular ages and missing upstream checksum manifest.

## App 0.20.26 / 2026.08-static-v5-rc75 — 2026-08-31

- Extended fixed ITIS 2026-08-26 exact sidecars: Graptolithina closes seven represented Rhabdopleura names; Dicyemida pins `Kantharella antarctica` under order TSN `57410` while retaining Microcyema/Conocyema as broader-root exclusions; Oomycota adds exact accepted Leptomitales TSN `181554` and Hyphochytriales TSN `13823` without inferring an Oomycota ITIS phylum root.
- Added an independent CC0 ITIS Bacteria TSN `50` collection for all 4,827 non-LPSN COL26.8 Bacteria rows: 4,824 exact accepted outcomes, two ambiguities, one unmatched row, and 9,348 ITIS-only current species. The existing LPSN identifier collection remains unchanged in source, licence and semantics.
- Pages remains descriptor/hash summary-only. Android and iOS build `29` native-full inventories retain every non-empty listed row shard byte-for-byte, including all eight Bacteria row files.

## App 0.20.25 / 2026.08-static-v5-rc74 — 2026-08-31

- Added fixed, exact ITIS `2026-08-26` CC0 authority sidecars for Actinopterygii, Chondrichthyes, the nested Agnatha/Myxini union, and the eight living Sarcopterygii rows routed to `tetrapod-transition`. Their disjoint COL26.8 scopes contain 37,436 explicit outcomes: 25,135 exact current names, 377 official synonym redirects, 15 ambiguities, and 11,909 unmatched records.
- Preserved 3,932 current ITIS-only species in separate null-COL partitions, producing 41,368 native authority records across 29 non-empty deterministic JSONL gzip shards. Myxini is not double-counted inside Agnatha, and the Sarcopterygii boundary does not claim that the package's eight routed rows are the full living superclass.
- Kept Pages deployable through `web-light`: package manifests publish sources, roots, methods, counts, limitations, and all 29 canonical byte/SHA-256 records without row shards. Android and iOS build `28` use `native-full`, bundle every descriptor and row shard byte-for-byte, and verify release-inventory parity.
- Kept the historical FishBase identifier sidecar independent from ITIS because its source, licence, scope, and identifier semantics differ. Added typed single-range lookup contracts, platform tests, and [`docs/itis-fish-authority.md`](../docs/itis-fish-authority.md).

## App 0.20.24 / 2026.08-static-v5-rc73 — 2026-08-31

- Added fixed, exact ITIS `2026-08-26` CC0 authority sidecars for the five declared Mammalia partitions: Perissodactyla, Cetartiodactyla, Primates, Carnivora, and Other mammals. Their COL26.8 scopes contain 6,461 explicit outcomes: 6,460 current-name matches, one ambiguity, and no redirects or unmatched rows; three current ITIS-only species remain in a separate null-COL partition.
- Published 6,464 native authority records through nine non-empty deterministic JSONL gzip shards: one COL shard each for Perissodactyla, Cetartiodactyla, Primates, and Carnivora, plus four COL shards and one upstream-only shard for Other mammals. The zero-record `mammal-origins` boundary is not delivered as an ITIS collection.
- Pages `web-light` publishes descriptors, provenance, scopes, methods, counts, limitations, and canonical byte/SHA-256 inventories but no authority rows. Android and iOS build `27` copy every native-full shard byte-for-byte and verify release-inventory parity by collection ID.
- Added [`docs/itis-mammal-authority.md`](../docs/itis-mammal-authority.md) with roots, outcome counts, historical/source hash semantics, delivery boundaries, and the explicit `mammal-origins` zero-record boundary.

## App 0.20.23 / 2026.08-static-v5-rc72 — 2026-08-31

- Added fixed, exact ITIS `2026-08-26` CC0 authority sidecars for the declared Reptilia partitions. The 12,649 exact COL26.8 outcomes contain 9,831 current-name matches, 71 official synonym redirects, three ambiguities, and 2,744 unmatched records; 655 current ITIS species remain in a separate null-COL upstream-only partition.
- Published 13,304 native authority records in 11 non-empty deterministic JSONL gzip shards: ten files for 12,622 non-Crocodylia `turtles-lepidosaurs` COL rows plus 655 ITIS-only rows, and one 27-record Crocodylia file in `crocodylomorphs-birds`. All Aves are explicitly excluded and the pre-existing four-file AviList collection remains separate.
- Pages `web-light` publishes the two descriptors, provenance, scopes, methods, counts, limitations, and canonical byte/SHA-256 inventories but no authority rows. Android and iOS build `26` copy every native-full shard byte-for-byte and verify release-inventory parity by collection ID.
- Added [`docs/itis-reptilia-authority-sidecars.md`](../docs/itis-reptilia-authority-sidecars.md) with roots, outcome counts, exact matching limits, delivery boundaries, canonical locations, and the explicit Aves exclusion.

## App 0.20.22 / 2026.08-static-v5-rc71 — 2026-08-31

- Added fixed, exact ITIS `2026-08-26` CC0 authority sidecars for Insecta, Crustacea, Chelicerata, and Myriapoda. Their declared COL26.8 scopes contain 1,135,834 explicit outcomes: 280,789 exact current names, 3,148 official synonym redirects, 873 ambiguities, and 851,024 unmatched records; 42,507 current ITIS-only species remain in separate null-COL partitions.
- Published 1,178,341 native authority records through 161 non-empty deterministic JSONL gzip shards. Pages `web-light` publishes source, scope, method, counts, limitations, and canonical byte/SHA-256 inventories but no authority rows; Android and iOS build `25` copy every native-full shard byte-for-byte and verify release-inventory parity.
- Preserved exact mixed-package boundaries: Insecta, Crustacea, and Myriapoda remain independent collections in `crustaceans-insects`; Chelicerata remains separate from the 4,615 non-applicable Trilobita records in `trilobites-chelicerates`; the single Euthycarcinoidea COL record is not counted as living Myriapoda.
- Added [`docs/itis-arthropods-authority.md`](../docs/itis-arthropods-authority.md) with roots, outcome counts, delivery boundaries, canonical locations, and limitations.

## App 0.20.21 / 2026.08-static-v5-rc70 — 2026-08-31

- Added fixed, exact ITIS `2026-08-26` CC0 authority sidecars for Nematoda, Annelida, Mollusca plus Brachiopoda, Porifera plus Cnidaria, and Echinodermata. Their declared COL26.8 scopes contain 240,792 explicit outcomes: 21,346 exact current names, 515 official synonym redirects, 30 ambiguities, and 218,901 unmatched records; 13,122 current ITIS-only species remain in separate null-COL partitions.
- Published the 253,914 native authority records through 77 non-empty deterministic JSONL gzip shards. Pages `web-light` publishes source, scope, method, counts, limitations, and canonical byte/SHA-256 inventories but no authority rows; Android and iOS build `24` copy every native-full shard byte-for-byte and verify release-inventory parity.
- Generalized rich-package nomenclature collections so Echinoderms carries separate WoRMS AphiaID and ITIS TSN authorities without merging or overwriting either. The WoRMS row payload now follows the same Pages-summary/native-full split.
- Added typed indexed lookup contracts for the three new rich-package ITIS collections and the two new `other-animals` scopes. A COL lookup reads at most one ordered inclusive range shard and never treats an ITIS-only partition as a COL member.
- Added [`docs/itis-major-invertebrates-authority.md`](../docs/itis-major-invertebrates-authority.md) with scope roots, outcome counts, delivery boundaries, canonical locations, and limitations.

## App 0.20.20 / 2026.08-static-v5-rc69 — 2026-08-31

- Added 25 disjoint, exact-root ITIS `2026-08-26` authority boundaries to the `protists-chromists` resource pack. The 13 non-empty scopes are Ciliophora, Apicomplexa, Dinoflagellata, the Euglenophycota inventory under the Euglenozoa boundary, Cercozoa, Haptophyta, Ochrophyta, Amoebozoa, Rhodophyta, the shared-order Oomycota boundary, Bigyra, Chlorophyta and Glaucophyta.
- Published 19,501 native records in 19 non-empty files: 12,756 disjoint COL26.8 rows with 1,470 exact accepted names, eight official ITIS synonym redirects, four explicit ambiguities and 11,274 unmatched outcomes, plus 6,745 current ITIS-only species. No fuzzy match, modern-name substitution or inferred package ownership is used.
- Preserved 12 exact zero-row audits for Cryptophyta, Choanoflagellatea, Perkinsozoa, Labyrinthulomycetes, Opalozoa, Radiolaria, Metamonada, Picozoa, Telonemia, Centrohelida, Katablepharidota and Hemimastigophora. Missing, nearby or legacy-only roots are documented but never substituted; zero-row placeholder gzip files are excluded from the runtime inventory.
- Kept GitHub Pages on `web-light`: all 25 ITIS descriptors and 19 canonical non-empty file hashes are published, while row shards return 404. Android and iOS build `23` use `native-full`, bundle all 19 files byte-for-byte, and retain the separate five-file, 47,975-record Foraminifera WFD authority layer.
- Added typed, indexed native lookup for each protist/chromist ITIS scope, plus exact release contracts in the shared client, Pages smoke test, mobile finalizer, Android instrumentation source and iOS application tests. A COL lookup reads at most one inclusive range shard.
- Consolidated the per-scope authority and delivery boundary in `docs/itis-protists-authority.md`; advanced the shared app to `0.20.20` and dataset to `2026.08-static-v5-rc69` without changing the fixed COL26.8 species ownership graph or the full 109-frame native PaleoDEM series.

## App 0.20.19 / 2026.08-static-v5-rc68 — 2026-08-31

- Expanded the official ITIS `2026-08-26` CC0 authority layer in the mixed `other-animals` resource pack from five to 26 disjoint scopes. The added scopes are Acanthocephala, Entoprocta, Tardigrada, Chaetognatha, Ctenophora, Kinorhyncha, Gastrotricha, Priapulida, Onychophora, Hemichordata, Sipuncula, Nematomorpha, Phoronida, Gnathostomulida, Loricifera, Micrognathozoa, Cycliophora, Placozoa, Xenacoelomorpha, Orthonectida and Dicyemida.
- Preserved explicit exact-evidence outcomes for all 60,572 in-scope COL26.8 accepted species: 14,342 current-name links, 296 official synonym redirects, 30 ambiguities and 45,904 unmatched records. Kept 2,327 additional current ITIS species in separate null-COL upstream-only partitions. Root audits prevent invalid or broader `Kamptozoa`, old `Acoela` and `Rhombozoa` boundaries from duplicating accepted scopes.
- Published complete source, scope, root, method, count, limitation and canonical 62-file non-empty hash inventories through Pages `web-light` without row shards. Android and iOS build `22` include all 62,899 records byte-for-byte under `native-full`; zero-row placeholder gzip files are omitted, and the generic lookup rejects Web row access and reads at most one matching COL-ID range shard.
- Canonicalized the Chaetognatha and Ctenophora sidecar paths and corrected corrupted or taxon-mismatched Chinese evidence-boundary text in the Tardigrada, Gastrotricha, Priapulida and Sipuncula generators and descriptors.

## App 0.20.18 / 2026.08-static-v5-rc67 — 2026-08-31

- Added complete, disjoint ITIS `2026-08-26` CC0 nomenclatural sidecars for Platyhelminthes, Rotifera, Bryozoa, Nemertea, and Tunicata plus Cephalochordata inside the mixed `other-animals` resource pack.
- Preserved explicit outcomes for all 54,381 COL26.8 accepted species: 9,257 exact current-name links, 267 official synonym redirects, 23 ambiguities, and 44,834 unmatched records. Kept 1,945 additional current ITIS species in separate null-COL upstream-only partitions; no fuzzy matching or invented ownership is used.
- Published complete provenance, scope boundaries, counts, limitations, and the canonical 25-file hash inventory through Pages `web-light` without row shards. Android and iOS build `21` include all 56,326 rows byte-for-byte under `native-full` and verify every file against the release inventory.
- Added a typed lazy lookup that rejects summary-only Web access, excludes upstream-only files from COL-ID routing, and parses at most one non-overlapping range shard. Added Web/native, generator, package-manifest, Android, and iOS coverage.

## App 0.20.14 / 2026.08-static-v5-rc63 — 2026-08-31

- Replaced the one-frame PaleoDEM prototype and its stored tile pyramid with all 109 official Scotese–Wright 2018 PaleoDEM v2 frames from 0 to 540 Ma at 5 Ma nominal cadence. Every canonical frame retains the exact archive member bytes/SHA-256, filename nominal age, verbatim NetCDF description/parsed age, 3601×1801 integer-metre values, independent lossless i16 gzip and decoded hash.
- Added a dual delivery profile. Web/Pages and browser offline cover all 109 ages with independently addressable 721×361, 0.5° previews produced by exact every-fifth-cell sampling; Android and iOS build `17` bundle all 109 original 3601×1801, 0.1° lossless grids with byte-identical native inventories. Pages-light publishes no full grids and omits duplicate package ZIPs, while local native-full builds can still create ZIP exports.
- Added a worker/Canvas renderer that requests and verifies only the nearest nominal frame, colours visible Web Mercator tiles dynamically and never interpolates through time. Removed the pre-generated 341-tile pyramid. Disclosures preserve source/internal age disagreements, profile resolution, the ±85.051° display boundary and the fact that modelled terrain is neither ground truth nor demonstrated co-registration with CAO2024/PBDB.
- Added complete-series extraction, compressed/decoded hash validation, exact-decimation tests, Web/native profile smoke tests, native byte-parity checks and a two-age E2E assertion proving one payload request per selected age.
- Changed Pages retention to the current release only. Historical versions remain auditable in Git and the changelog but are no longer copied into the deploy artifact; this provides a reliable margin beneath the unchanged 650 MiB Pages gate without reducing the 0.5° all-age Web previews.

## App 0.20.13 / 2026.08-static-v5-rc62 — 2026-08-31

- Added a release-pinned CC BY 4.0 Species Fungorum / Index Fungorum identifier extension for every one of the 157,044 strict accepted COL26.8 Fungi species: 155,841 records from Species Fungorum Plus `Apr 2024` and 1,203 from the fixed Microsporidia `Nov 2015` dataset. All records resolve to accepted authority IDs; redirect, ambiguous, unmatched and withheld are zero.
- Required byte-identical name-and-authorship matches inside the declared `sourceDatasetId`, with only 60 exceptional records resolved through the exact ChecklistBank source-record link. No normalization, fuzzy matching, cross-dataset guessing or live-site scraping is used. The two source snapshots' 201 additional accepted species remain audit-only and are not presented as COL records.
- Published six deterministic, non-overlapping COL-ID range shards through the same Fungi manifest, package ZIP, browser offline inventory and Android/iOS full-data bundle. A detail lookup selects and parses exactly one matching shard; tests assert that it does not fetch the other five or the full 157,044-record audit snapshot.
- Preserved the original five Fungi COL species shards byte-for-byte together with rc61 WFO, rc60 ICTV, rc59 WoRMS/LPSN and compact PBDB gzip data. Android `versionCode` and iOS build number advance to `16`.

## App 0.20.12 / 2026.08-static-v5-rc61 — 2026-08-31

- Pinned the official CC0 World Flora Online Plant List `2026-06`, version DOI `10.5281/zenodo.20782718` (concept DOI `10.5281/zenodo.7460141`), with the official archive MD5, local SHA-256 and every expanded source-member hash retained in the source ledger.
- Classified all 388,686 accepted COL26.8 plant species by exact release-scoped evidence: 316,788 accepted links, 7,854 explicit synonym redirects, 173 ambiguous records, 63,833 unmatched records and 38 withheld records. Matching preserves case, diacritics, punctuation and authorship and never uses fuzzy substitution.
- Published all 382,438 WFO accepted species. The 60,751 without an unambiguous COL26.8 link remain a separate upstream-only partition with null COL ownership; they are visible in pack descriptors and statistics and are not assigned invented COL IDs or package routes.
- Added deterministic WFO shards and collection descriptors to Angiospermae (352,619 COL rows), Gymnosperms (1,599), Early Land Plants (33,770) and Other Plants (698 COL rows plus the separate WFO-only partition). The identical files are delivered by Web runtime, package ZIPs, explicit offline storage and the complete Android/iOS bundle. Android `versionCode` and iOS build number advance to `15`.
- Preserved the original COL species shards and the rc60 ICTV, rc59 WoRMS, Bacteria/Archaea LPSN and compact PBDB gzip payloads unchanged.

## App 0.20.11 / 2026.08-static-v5-rc60 — 2026-08-31

- Added the current ICTV Master Species List `MSL41.v1` and corrected Virus Metadata Resource `VMR_MSL41.v1.20260729` as a fixed, reproducible CC BY 4.0 extension to the COL26.8 Viruses nomenclatural pack. Both official workbooks are pinned by filename, release date, DOI, byte count, SHA-256, Zenodo MD5, ETag and Last-Modified; the superseded erroneous 2026-07-21 VMR is explicitly excluded.
- Resolved all 17,552 COL26.8 virus species by one exact, case-sensitive current species name and the unique ICTV ID shared by MSL and VMR. Redirect, ambiguous, unmatched and withheld partitions are all zero. `Boscovirus hypoboscidae` and `Simiispumavirus macfas`, the two current ICTV species absent from the COL26.8 accepted shard, remain explicit upstream-only records with null COL IDs rather than invented mappings.
- Published all 17,554 current ICTV species and 19,285 VMR rows (17,554 exemplar viruses and 1,731 additional isolates) through the same manifest, Viruses ZIP, Web offline inventory and Android/iOS full-data bundle. The original 17,552-row COL species shard, rc59 WoRMS collection, Bacteria/Archaea LPSN extensions and compact PBDB gzip sources remain unchanged. Android `versionCode` and iOS build number advance to `14`.
- Kept the interpretation boundary explicit: ICTV taxonomy and virus metadata do not establish that viruses are cellular life, independently revalidate every GenBank accession or create fossil, morphology, ecology, distribution, phylogeny, media or expert-review dossiers.
- Corrected the release-history promise after #124: deployments attempt to retain at most two prior datasets, subject to the configured retention byte budget, and only versions listed in the deployed `data/releases.json` are guaranteed reachable. rc58 is not rebuilt or represented as retained when its roughly 598.6 MiB release cannot fit the 400 MiB history-fetch budget; the Pages budget is not increased and long-term shared content-addressed history remains unresolved.

## App 0.20.10 / 2026.08-static-v5-rc59 — 2026-08-31

- Added a date-pinned WoRMS AphiaID nomenclatural sidecar for all 11,891 COL26.8 species owned by the Echinoderms rich package. Strict exact-name results are separated into 11,843 accepted mappings, two explicit accepted-name redirects, 37 ambiguous names, zero unmatched names and nine withheld records; no fuzzy, case-folded, authority-only or higher-rank inference is used.
- Published the unchanged deterministic gzip through a rich-package collection descriptor, the Echinoderms ZIP, Web single/all-package offline storage and the complete Android/iOS release inventory. The sidecar is a minimal CC BY 4.0 identifier/status crosswalk, not a frozen WoRMS release, complete database redistribution, phylogeny, biological dossier or assertion that COL and WoRMS species concepts are equivalent.
- Preserved the mainline Bacteria LPSN extension alongside Archaea: 21,570 eligible LPSN-sourced Bacteria records resolve and 4,827 ITIS-sourced records remain explicitly withheld. Android `versionCode` and iOS build number advance to `13`.

## App 0.20.9 / 2026.08-static-v5-rc58 — 2026-08-31

- Added eight locally generated, evidence-anchored 1280×800 WebP interpretive reconstructions for Asteroxylon, Eocyathispongia, Kimberella, Waptia, Shenacanthus, Tiktaalik, Ambulocetus and Archaeopteryx. The image bytes contain no embedded text or watermark; every application and static-page presentation pairs the image with bilingual AI-assistance and uncertainty notices and keeps it distinct from a specimen photograph, scale drawing or direct observation.
- Retained the reproducible ComfyUI prompt graph, fixed seeds, model/workflow/license hashes, rejected variants, selected PNG and output WebP hashes, and original-detail acceptance review. Scientific-review status remains explicitly `not-reviewed`; cited scientific publications are evidence anchors and are not relicensed.
- Published the identical eight assets through the canonical manifest, rich-package ZIPs, Web package/full-atlas offline storage and the complete Android/iOS release inventory. The rc57 Archaea LPSN sidecar remains unchanged and is carried through the same Web/native projections. Android `versionCode` and iOS build number advance to `12`.

## App 0.20.8 / 2026.08-static-v5-rc57 — 2026-08-31

- Added a deterministic, release-pinned LPSN identifier extension for all 790 COL26.8 Archaea species. Each record follows immutable ChecklistBank dataset `316115` and source dataset `2015` to one specific LPSN page from source version `2026-07-26`; the canonical 2026-08-31 snapshot records every exact response SHA-256 and an aggregate request-ledger hash.
- Kept the original 790-species shard, accepted-species totals, hierarchy, claims, profiles, stories, phylogenies, fossils and media unchanged. The separately licensed CC BY-SA 4.0 sidecar is identifier-level nomenclatural linkage, not an inferred dossier, ecology, genome, strain, fossil, media, phylogeny or expert-review claim.
- Published the same 8,116-byte LPSN shard through the runtime manifest, Archaea ZIP, Web offline save and complete Android/iOS release inventory. Catalogue pages load it lazily only for Archaea species and expose the specific source page with the pinned version, retrieval date, license and evidence boundary. Android `versionCode` and iOS build number advance to `11`.

## App 0.20.7 / 2026.08-static-v5-rc56 — 2026-08-31

- Delivered all twenty-four source-bound research presets as checksummed runtime package payloads instead of leaving them only in canonical authoring files. Every rich-package ZIP and the release inventory now contains its research payload; Web single/all-package offline storage plus Android/iOS full-data bundles consume the same bytes.
- Added a bilingual Catalog research section with the package title, raw `available-with-limitations` status, localized evidence boundary and working Explorer or comparison route. Runtime loading verifies package identity, example count and claim-link count against each manifest.
- Preserved 24 examples and 34 claim links, the two explicitly available phylogeny hypotheses and twenty-two `unmapped` states. Existing claims, profiles, stories, PBDB rows, CAO2024 frames and COL26.8 accepted-species ownership are unchanged; no automated check creates scientific review.

## App 0.20.6 / 2026.08-static-v5-rc55 — 2026-08-31

- Replaced the twenty-three claim-free research scaffolds with explicit package-local evidence presets. All twenty-four rich-content packages now publish `available-with-limitations` research examples with 34 claim links: one new locator-bearing claim in each non-Perissodactyla package and the unchanged eleven-claim Perissodactyla comparison preset.
- Kept the evidence boundary explicit: preset routes do not establish exact origins, global first or last appearances, crown ages, continuous lineage durations, direct ancestry, causal mechanisms or package phylogenies. Historical navigation groups remain navigation concepts rather than inferred monophyletic clades.
- Preserved the existing two available phylogeny hypotheses and twenty-two `unmapped` package states, plus every claim, profile and story statement. Regenerated the shared Web/Android/iOS projections and advanced Android `versionCode` and iOS build number to `9`; no automated check creates maintainer or external-expert review.

## App 0.20.5 / 2026.08-static-v5-rc54 — 2026-08-31

- Reconciled all 147 PBDB concepts previously marked `not-reconciled-after-ontology-expansion` against the pinned 2026-07-19 taxon CSV. Exactly 103 pass accepted-name, normalized-rank and complete-lineage compatibility; 44 remain withheld as 22 rank mismatches, 14 missing exact names, seven lineage conflicts and one accepted-name mismatch. No stale expansion reason remains.
- Preserved candidate PBDB identifiers and full ancestor chains for the seven lineage conflicts without publishing those candidates as entity IDs or querying them. The reconciliation script now verifies the pinned archive/CSV bytes and hashes, supports reason-scoped idempotent retries, and applies strict lineage compatibility before query eligibility.
- Completed 114 new query pages for 102 newly eligible concepts, including three valid zero-result queries, with raw-page/response, normalized-row and occurrence-ID checksums. One Mammalia root remains withheld by the existing 100,000-row boundary. Across all packages, 251 complete subqueries now preserve 1,007,973 overlapping rows, 595,492 package-unique occurrence IDs and 100,425 bounded display details; 141 targets remain explicitly withheld.
- Rebuilt the entity registry and occurrence index plus four affected bounded period assignments. Android build `8`, iOS build `8`, Web and both native projects continue to publish the same immutable rc54 data inventory; signed store artifacts and physical-device review are not claimed.

## App 0.20.4 / 2026.08-static-v5-rc53 — 2026-08-31

- Promoted every nonzero COL26.8 catalogue-only partition into a deterministic static nomenclatural resource pack: fungi 157,044; other animals 99,161; protists and chromists 61,518; bacteria 26,397; viruses 17,552; archaea 790; and other plants 698, for 363,160 strictly accepted species in seven packs and fourteen gzip NDJSON shards.
- Each compact record retains the pinned usage ID, parent ID, scientific name, authorship, rank, accepted status and upstream `sourceDatasetId`. All non-null source IDs resolve against the shared 160-checklist source ledger. The explicit `other-eukaryotes` partition remains a zero-record catalogue boundary rather than publishing an empty or fabricated package.
- Added versioned resource-pack manifests and reproducible ZIP downloads to the shared runtime. The Data view distinguishes twenty-four curated-content packs from seven nomenclatural packs and provides direct ZIP and browser offline controls without presenting nomenclatural coverage as dossier maturity.
- Added the seven manifests, fourteen shards and shared source ledger to the complete immutable release inventory. Android build `7` and iOS build `7` bundle exactly the same interactive files and checksums as Web; signed store artifacts and physical-device review remain separate release work.

## App 0.20.3 / 2026.08-static-v5-rc52 — 2026-08-31

- Imported every point-data payload omitted from the earlier CAO2024 v2.4 geometry-only integration: 208 palaeomagnetic-pole records, 43,364 geochemistry observations and 603 metamorphic-gradient constraints, for 44,175 source records in five independent datasets and twenty deterministic gzip shards.
- Preserved GPML identities, revisions, raw age lexemes, plate IDs, source positions, upstream `ref_id` values and every typed source attribute. Kept and flagged 60 inverted age intervals, 16 negative younger bounds and four negative `sio2` values instead of silently correcting upstream data; palaeomagnetic records truthfully retain `referenceId: null`.
- Reconstructed 41,320 records at the midpoint of the explicit source interval intersected with 0–1,800 Ma using the pinned CAO2024 rotations and anchor plate 0. Kept 2,852 fully out-of-range records and three records without a plate circuit as source-only; identity fallback and model-range extrapolation are disabled.
- Published the five point datasets separately from the six geometry families, with inclusive source-age filtering, Canvas rendering and record-level details. They are observations or constraints, not terrain, elevation, bathymetry or direct paleotopography.
- Added all twenty observation shards to the shared immutable release inventory and native app resources. Android `versionCode` and iOS build number advance to `6`; Web, Android and iOS use the same checksummed data bytes.

## App 0.20.2 / 2026.08-static-v5-rc51 — 2026-08-31

- Kept the immutable rc51 scientific dataset unchanged while making all resolving-name targets locally dereferenceable. Accepted-target records outside the strict accepted-species hierarchy now open a truthful release-scoped page with their actual rank, status, source checklist and upstream record instead of a false not-found page.
- Return every exact normalized-name match when an exact cluster exceeds the default twelve-result prefix limit; the two known 16- and 13-record clusters no longer hide five distinguishable resolving usages.
- Replaced the remote-only Android/iOS data root with a build-time local `./data/` resource assembled from the existing release inventory. The native package now includes all 3,768 non-duplicate interactive files (about 520.20 MiB) and can start offline without a prior Cache Storage download; duplicate package ZIP exports remain excluded.
- Advanced Android `versionCode` and iOS build number to `5`. Native AAB/IPA production, signing and physical-device/store verification remain platform release work and are not claimed by this source release.

## 2026.08-static-v5-rc51 — 2026-08-31

- Replaced the final nine legacy period-prefix package ledgers with the same source-bounded, fully paginated PBDB `base_id` contract used by the rest of the Atlas. All 24 packages now publish schema-v2 targeted snapshots.
- Recorded 149 complete subqueries across 299 pages, 898,460 overlapping subquery rows and 568,983 package-unique occurrence IDs. Kept 95,422 deterministic bounded details for display and preserved every complete-query ID list, terminal-page observation and checksum.
- Explicitly withheld 243 historical-grade, unreconciled, name/rank-incompatible, review-gated or over-100,000-row targets instead of treating them as zero-occurrence concepts. “Complete” continues to describe only the recorded query pagination, not fossil-record or sampling completeness.
- Replaced the 13,210-row Perissodactyla-only v2 snapshot and bespoke fetcher with the generic package contract; the current source response contains 13,209 package-unique IDs. Generalized the shared entity index and Web/Android/iOS loader so every eligible entity reads its own package snapshot and distinguishes complete query totals from bounded display details. COL26.8, its 2,183,133 accepted-species routes, the 1,889 CAO2024 frames, canonical range evidence and human review decisions remain unchanged.

## 2026.08-static-v5-rc50 — 2026-08-31

- Closed the final 102 canonical `legacy-display` records across eight plant, invertebrate, arthropod and perissodactyl packages: 54 are now source-bounded specimen, stratigraphic, regional, model or navigation evidence windows and 48 unsupported endpoint combinations are explicitly withheld.
- Removed nine superseded duplicate sponge/cnidarian global records and retained four distinct Hipparionini records for a cross-continental navigation composite, a North American review envelope, an Old World dispersal window and regional terminal occurrences.
- Expanded the evidence ledger to 1,019 bilingual claims and 470 references. The 403-record canonical range ledger now contains 325 available and 78 withheld records with no legacy display values; by evidence level, 334 are literature-synthesized and 69 are withheld for insufficient range evidence. None is promoted into a universal FAD, LAD, crown age, lineage duration or direct-ancestor claim.
- Regenerated the shared Web/Android/iOS package projections and release inventory without changing COL26.8, the 1,889-frame CAO2024 model, the global 13,600-row occurrence sample, targeted PBDB snapshots or human review decisions.

## 2026.08-static-v5-rc49 — 2026-08-31

- Closed all 110 legacy display ranges in the packages tracked by issues #7 and #8: 80 ranges now expose source-bounded specimen, calibration or model windows with concrete primary-study or systematic-review locators, while 30 unsupported values are explicitly withheld instead of being presented as global first/last appearances, divergence dates or ancestor sequences.
- Expanded the canonical evidence ledger to 961 bilingual claims and 444 references without changing COL26.8, package review decisions or the six-layer CAO2024 reconstruction inventory.
- Replaced the shared period-prefix occurrence ledger for fifteen vertebrate, archosaur and mammal packages with 86 completely paginated PBDB `base_id` subqueries. The release records 110 pages, 170,426 summed subquery rows, 135,186 package-unique occurrence IDs and 55,422 deterministic bounded details; 148 incompatible, historical-grade or over-broad targets remain explicitly withheld.
- Kept the 13,600-row global period sample as a separate atlas layer and preserved the lightweight Android/iOS shell contract. Targeted package results are reproducible scoped samples, not a claim of complete global fossil coverage, diversity or abundance.

## 2026.08-static-v5-rc48 — 2026-08-31

- Rebuilt all 24 Web/Android/iOS package projections from the rc47 canonical ledgers at app version `0.20.1`, retaining 392 entities, 872 evidence claims, 440 references, 13,600 bounded PBDB occurrences, 1,889 CAO2024 frames and all 2,183,133 accepted-species assignments.
- Made newly generated runtime JSON gzip streams and package ZIPs byte-stable across supported Windows/Linux builders by fixing archive OS, platform and timestamp metadata. Existing pinned COL26.8 gzip shards and their writer remain byte-for-byte unchanged to avoid rewriting the fixed release.
- Kept Android and iOS installation shells lightweight: mobile builds no longer copy `public/data/`, reject a non-production data root or shells over 12 MiB, and continue to expose the complete release inventory through the shared Pages endpoint and explicit complete-Atlas offline download.
- Advanced Android `versionCode` and iOS build number to `4`. Native AAB/IPA production, signing and device/store verification remain platform release work and are not claimed by this source release.

## 2026.08-static-v5-rc47 — 2026-08-31

- Added 272 bilingual, typed `taxon:` subject claims with concrete primary-study or systematic-review locators, bringing claim-level traceability to all 392 navigation entities. Specimen/locality ranges, modelled divergence times, navigation groupings and sampled topology remain explicitly bounded rather than promoted to global origins, first appearances or direct ancestors.
- Advanced the canonical ledger to 872 claims and 440 references while retaining all rc46 and issue #79 wording, CAO2024 inventory, onboarding and readiness semantics. The unchanged 13,600-row PBDB snapshot, generated taxon indexes and all package review records remain outside this evidence-only expansion.
- Regenerated the shared Web/Android/iOS package projections and checksum manifest at app version `0.20.0`. Automated completeness and validation do not create maintainer or external-expert scientific review; that human gate remains open.

## 2026.08-static-v5-rc46 — 2026-08-31

- Aligned the public inventory with the unchanged 392 navigation entities and twenty-four packages: twenty-three remain `source-linked` and Perissodactyla remains the sole `curated-draft`; this release does not add maintainer or external-expert scientific review.
- Split the twelve period-midpoint map summaries from the 1,889 layer frames generated across six CAO2024 geometry families, and documented the eleven checksum-pinned Zenodo payloads and local pyGPlates reconstruction path without implying elevation, bathymetry, continuous interpolation or PBDB co-registration.
- Kept the dashboard-first choice on `#/home`, made direct `#/explore` routes enter the workspace without that modal, retained the manual five-step tutorial, and corrected dynamic offline-package, zero-scaffold and visual-regression contracts across Web, Android and iOS.

## 2026.08-static-v5-rc45 — 2026-08-31

- Completed the source-link closure for Atlas Core and Turtles and Lepidosaurs after strict claim, visible-profile-field and evidence-bound story audits; all twenty-three non-flagship packages are now `source-linked`, while Perissodactyla remains `curated-draft`.
- Replayed the Perissodactyla source audit without changing its review record, PBDB occurrence snapshot or maturity. Its species-, locality- and model-bounded claims remain distinct from direct observation and global first- or last-appearance assertions.
- Advanced the shared Web/Android/iOS dataset projection to rc45 at app version `0.20.0`. Source linking records matching scientific sources and concrete locators; it is not a new maintainer decision, external expert review or claim that all 392 navigation entities have full dossiers.

## 2026.08-static-v5-rc44 — 2026-08-31

- Promoted ten plant, invertebrate and mammal packages from `structured` to `source-linked` after a strict three-layer audit confirmed fit primary-study or systematic-review support with concrete locators for all 392 displayed profile fields, all 264 package claims and all 102 story steps.
- Completed the 141 previously missing Chinese claim statements in these packages while preserving each source's taxonomic, geographic, ecological, morphological and geochronological scope and uncertainty.
- Advanced the shared Web/Android/iOS dataset projection to rc44 at app version `0.20.0`; retained all rc43 and rc42 work without changing review records, PBDB occurrence scope or occurrence projections.

## 2026.08-static-v5-rc43 — 2026-08-31

- Promoted eleven plant, invertebrate, fish, tetrapod and archosaur packages from `structured` to `source-linked` after a package-scoped audit found fit primary-study or systematic-review support with concrete locators for all 239 claims, all 366 displayed profile fields and all 99 steps across fourteen evidence-bound stories. This maturity label does not imply 392 entity-level dossiers or external expert review.
- Closed five remaining semantic gaps with six matched sources: species-bounded *Mollisonia* ecology, living echinoid ecological breadth, specimen-bounded *Ichthyosaurus communis* diet and comparative swimming inference, and analysis-bounded pterosaur taxonomy and biogeography. Visible text now preserves species, specimen, model and sampling limits instead of extending a paper beyond its sample.
- Advanced the shared Web/Android/iOS dataset projection to rc43 while retaining app version `0.20.0`, all rc42 Life and Perissodactyla work, existing review records and the bounded PBDB occurrence query. COL26.8 accepted-species routing remains 2,183,133 unique assignments with zero unmatched.

## 2026.08-static-v5-rc42 — 2026-08-30

- Closed the final two package-root legacy displays: Life now begins at a conservative 3.7 Ga sampled biosignature boundary and explicitly remains extant, while Perissodactyla uses its approximately 56 Ma PETM fossil sample and living lineages as separate navigation endpoints.
- Added bilingual typed claims, primary-study locators and an origin-of-life boundary synthesis. Neither 3.7 Ga nor 56 Ma is promoted to an exact origin, LUCA, crown-node, total-group divergence, global first appearance or direct-ancestor claim.
- Preserved all rc41 ranges, stories, species coverage and mobile/Web parity; rebuilt canonical projections and checksums without changing PBDB occurrences, review records or validation architecture.

## 2026.08-static-v5-rc41 — 2026-08-30

- Replaced the remaining twenty-one unreviewed Atlas Core, archosaur and mammal root displays with bilingual, claim-linked research ranges and exact primary-study locators. The already reviewed Crocodylomorpha, therian-boundary-evidence and Afrotheria records remain intact.
- Kept each root's evidence boundary explicit: informal anthologies, total-group samples, trace-fossil or body-fossil minima, living continuations and model envelopes are not presented as direct ancestors, global first appearances or interchangeable crown ages.
- Preserved all twenty-nine previously closed roots: the twenty-four rc39/rc40 plant, invertebrate, vertebrate and reptile package roots plus the five earlier literature-linked roots. The Echinodermata story and lazy-i18n readiness work also remain intact, while navigation first-appearance hints change only where an owning rc41 root requires it.
- Rebuilt every canonical package projection and checksum manifest without expanding the bundled PBDB query or adding a validation subsystem. Web, Android and iOS continue to consume the same complete offline dataset and app version `0.20.0`.

## 2026.08-static-v5-rc40 — 2026-08-30

- Replaced eleven vertebrate and reptile package-root legacy display ranges with claim-linked, bilingual primary-study evidence and precise page, figure and section locators.
- Kept Agnatha, Placodermi and Acanthodii explicit as historical navigation grades, separated stem evidence from crown-group ranges, and avoided global-first-appearance or direct-ancestor claims.
- Preserved the already evidence-linked Plesiosauria range unchanged and left PBDB identifiers, occurrence-query scope and validation architecture untouched.

## 2026.08-static-v5-rc39 — 2026-08-30

- Replaced thirteen unsupported plant and invertebrate package-root ranges with claim-linked sampled navigation envelopes, total-group surrogates or explicitly model-bounded concepts. Every replacement points to a primary-study page, figure or section locator and states why its endpoints are not clade origins, global FADs/LADs or direct-ancestor sequences.
- Narrowed mosses to a late Visean body-fossil anchor, the pteridophyte root to a cladoxylopsid navigation exemplar and the gymnosperm root to a Famennian total-seed-plant surrogate; older cryptospores, fern-like architecture and extinct seed plants are not silently promoted to living crowns.
- Replaced Ediacaran sponge and cnidarian legacy bounds with the sampled *Helicolocellus* and *Auroralumina* intervals; bounded brachiopod and graptolite roots to *Micrina* and *Yunotubus*; and separated widespread early trilobites from revised Changhsingian records.
- Replaced unsupported arthropod, crustacean, insect and myriapod values with descendant- or specimen-anchored envelopes using widespread trilobites, *Yicaris*, the Paskov wing and *Waukartus*. Contested older fragments and model ages remain separate evidence, and no PBDB query or identifier was invented.
- Added a five-step bilingual Echinodermata story that distinguishes isolated stereom, contested Fortunian affinity, articulated faunas, uneven class records and total-group fossils from modelled crown time.
- Advanced the shared Web/Android/iOS dataset version to rc39, regenerated package projections from canonical claims, ranges, stories and references, and corrected the public entity count to 392. All 2,183,133 COL26.8 accepted-species assignments remain unique with zero unmatched.

## 2026.08-static-v5-rc38 — 2026-08-30

- Added twenty representative, package-specific profiles across sponges and cnidarians, molluscs, echinoderms, trilobites and stem chelicerates, Cambrian mandibulates, early land plants, gymnosperms and angiosperms. Every visible profile field now maps to a typed taxon claim with a concrete primary-study page, figure or section locator.
- Resolved pinned PBDB identifiers for *Eocyathispongia*, *Helicolocellus*, *Auroralumina*, *Kimberella quadrata*, *Odontogriphus omalus*, *Nectocaris pteryx*, *Bohemolichas*, *Urokodia*, *Mollisonia*, *Tokummia katalepsis*, *Waptia fieldensis*, *Yicaris dianensis*, Angiospermae and Monocotyledoneae. The *Bohemolichas* synonym and the incompatible legacy PBDB placement of *Nectocaris* remain explicit rather than silently normalized.
- Linked principal sample or clade ranges to the new fossil-range claims while retaining their evidence boundaries. Specimen and formation envelopes are not global FADs or LADs; modelled angiosperm and cycad ages are not body-fossil occurrences; *Asteroxylon*, *Metzgeriothallus*, *Ginkgoxylon*, *Montsechia* and *Cratolirion* remain bounded exemplars rather than ancestors or clade-wide trait proxies.
- Preserved all rc34–rc37 profiles, claims and competing topologies, the Primates `3W7` routing correction, tutorial, native tests, CAO documentation and lazy-loaded translation chunks. All 2,183,133 COL26.8 accepted-species assignments remain unique with zero unmatched, and Web, Android and iOS continue to share app version `0.20.0`.

## 2026.08-static-v5-rc37 — 2026-08-30

- Added fifteen source profiles across `mammal-origins`, `primates`, `carnivora`, `cetartiodactyla` and `other-mammals`. Every visible profile field now projects to a taxon-specific taxonomy, range, biogeography, ecology or morphology claim with a concrete primary-study locator and Chinese confidence rationale.
- Added direct navigation for *Raranimus*, *Haramiyavia* and *Liaoconodon*, while marking every new edge as navigation-only and retaining the cited studies’ matrix, age and function boundaries rather than presenting the fossils as ancestors or universal transition stages.
- Connected twelve existing named fossil routes to exact PBDB taxon concepts and specimen-bounded literature ranges without expanding the bundled PBDB occurrence query. Higher clade ranges lacking endpoint evidence remain `legacy-display`; COL naming routes remain separate from fossil and topology claims.
- Corrected the Primates COL26.8 usage ID from `5V` to `3W7`, and made the `carnivoraformes-dossiers` parent edge explicitly navigational. The accepted-species inventory remains 2,183,133 with zero unmatched, shared unchanged by Web, Android and iOS; app version remains `0.20.0`.
- Preserved the rc35 Atlas/archosaur chronology, profiles and competing topology hypotheses, the rc36 tetrapod/reptile profiles and evidence boundaries, onboarding, native tests, CAO documentation and every existing lazy translation chunk.

## 2026.08-static-v5-rc36 — 2026-08-30

- Deepened `tetrapod-transition` with explicit Elpistostege, Tiktaalik, Acanthostega and Ichthyostega navigation, claim-linked primary-study range envelopes and a rich Tiktaalik profile whose taxonomy, range, geography, morphology and ecology fields carry exact locators.
- Added a broad Mosasauroidea browse concept above node-defined Mosasauridae, a Dallasaurus evidence boundary and a rich family profile that keeps clade membership separate from the evolution of fully paddle-like limbs.
- Paired early-Carnian Bobosaurus as an older uncertain near-plesiosaur candidate with diagnostic Rhaetian Rhaeticosaurus; only the latter constrains the older secure Plesiosauria display bound.
- Added rich Ichthyosaurus, Plesiosauria and Pterosauria profiles while keeping ichthyosaurs, plesiosaurs and pterosaurs as three independent radiations and keeping global composite ranges distinct from regional primary-study samples.
- Withheld PBDB identifiers for all newly added unresolved navigation concepts, retained the bounded 13,600-row fossil sample unchanged, preserved zero-unmatched COL26.8 assignment, and kept Web, Android and iOS on the same `0.20.0` shared-content client. All rc34/rc35 profiles, competing Dinosauria topologies, onboarding/native tests, CAO documentation and lazy content chunks remain intact.

## 2026.08-static-v5-rc35 — 2026-08-30

- Added an Atlas Core chronology story with nine claim-linked steps and upgraded the Great Oxidation, Avalon Ediacaran, end-Permian and K–Pg anchors to direct primary geochronology or measured-stratigraphy evidence with precise figure, table and method locators. Broad Ordovician, Triassic, PETM and Quaternary references remain correctly labelled as syntheses.
- Added package-specific Pterobranchia, Tyrannosaurus, Archaeopteryx and Neornithes profiles. Every displayed profile field is connected to a typed claim, and each principal range is literature-bounded instead of inheriting an unreviewed navigation estimate.
- Published the Baron et al. Ornithoscelida and Langer et al. traditional Saurischia results as two explicitly scoped, competing Dinosauria topology hypotheses using the existing package phylogeny schema; the navigation tree is not promoted to either result.
- Added the 69.2–68.4 Ma *Vegavis* skull as a topology-dependent crown-waterfowl test without fabricating a PBDB identifier. *Archaeopteryx* remains outside crown Neornithes, the historically contested *Vegavis* placement remains qualified, and younger *Asteriornis* remains an independent near-crown analysis.
- Generalized existing package generation, runtime bundling and package validation so any package can publish one or more topology hypotheses through the established schema. All rc34 profiles and claims, onboarding and native tests, CAO documentation, the Web/Android/iOS complete-offline manifest and app version `0.20.0` remain intact.

## 2026.08-static-v5-rc34 — 2026-08-30

- Added twelve primary-study taxon profiles across early fishes, chondrichthyans, actinopterygians and amphibians. Every visible profile field now projects to a typed claim, bilingual statement and confidence rationale with a concrete page, figure or section locator.
- Added four navigation-only evidence routes and fourteen named fossil entities so *Priscomyzon*, *Myxinikela*, *Tethymyxine*, *Qianodus*, *Fanjingshania*, *Shenacanthus*, *Gladbachus*, *Cheirolepis*, *Fukangichthys*, *Gerobatrachus*, *Triadobatrachus*, *Funcusvermis*, *Beiyanerpeton* and *Ymboirana* can be reached directly without implying an ancestor ladder.
- Replaced or supplemented legacy displays with literature-linked, claim-bound sample envelopes wherever the cited primary studies support the exact specimen or taxon concept. Clade-wide ranges without endpoint evidence remain explicitly legacy displays rather than being silently upgraded.
- Added a dedicated three-step story comparing dissorophoid-temnospondyl, lepospondyl and stereospondyl-caecilian origin models for living amphibians. Support and contradiction links remain visible and no preferred origin topology is selected editorially.
- Preserved all 2,183,133 COL26.8 accepted species assignments with zero unmatched and retained the shared static release path used by Web, Android and iOS; the subsequently merged native-shell release uses app version `0.20.0`.

## 2026.08-static-v5-rc32 — 2026-08-30

- Replaced the `crustaceans-insects` generated scaffold with thirteen bilingual primary-evidence dossiers spanning Cambrian mandibulate and pancrustacean fossils, ostracod and remipede phylogenomics, explicit taxon-sampling sensitivity, Devonian hexapod material, arthropod terrestrialization, Carboniferous insect wings, developmental wing-homology experiments, 1KITE and Pennsylvanian Eumetabola.
- Anchored fossil records to named material including *Tokummia* ROM 63823/63824, *Waptia* ROMIP 56432/64294, *Rhyniognatha* NHMUK PI IN 38234 and the Paskov forewing part and counterpart; retained *Yicaris* and *Rhyniella* as bounded specimen-series dossiers where the primary publications do not provide one comprehensive body specimen.
- Preserved the incompatible insect and myriapod interpretations of *Rhyniognatha* instead of using it as an uncontested flight calibration, and kept fossil anatomy, character homology, topology, fossil-calibrated clocks, ancestral habitat and gene-knockout models as separate evidence types.
- Added fifteen evidence-led navigation and research-record nodes, explicit literature-linked range envelopes, a thirteen-step story and an independent `crustaceansInsectsZh` lazy translation chunk.
- Kept all 1,049,133 COL26.8 accepted living species assigned to `crustaceans-insects` as nomenclatural routing only; this does not claim the same number of dossiers, fossil records, verified morphologies or a consensus pancrustacean tree.

## 2026.08-static-v5-rc31 — 2026-08-30

- Rebuilt `trilobites-chelicerates` as twelve bilingual primary-evidence dossiers spanning early-trilobite phylogenetic models, three-dimensional and appendage anatomy, gut-content and agnostid topology evidence, stem-chelicerate mouthparts and neuroanatomy, eurypterid body size, horseshoe-crab total-group topology, a contested Silurian terrestrialization record and living arachnid molecular conflict.
- Added nineteen curated navigation nodes for named fossil samples and major living chelicerate routes; every new parent edge is explicitly a browse relationship rather than a universal phylogeny or ancestor-descendant assertion.
- Anchored fossil observations to named formations, specimens or reconstructed structures while keeping tomography, preserved anatomy and measurements separate from homology, feeding, locomotor, habitat and terrestrialization inferences.
- Kept morphology-based fossil placements, sequence topology, rare-genomic-change topology and molecular-clock ages as distinct claim kinds, including incompatible arachnid-root hypotheses instead of selecting a false consensus.
- Added explicit literature- or model-bounded ranges, a twelve-step evidence-boundary story and an independent `trilobitesCheliceratesZh` lazy Chinese translation chunk.
- Clarified that COL26.8 routes exactly 104,126 accepted living species names through the Chelicerata and Trilobita package roots; this is nomenclatural coverage, not evidence that every species has a fossil, dossier or resolved phylogeny.

## 2026.08-static-v5-rc30 — 2026-08-30

- Replaced the `molluscs-brachiopods` generated scaffold with thirteen bilingual primary-evidence dossiers spanning Ediacaran and Cambrian body fossils, radula and shell microstructure, living phylogenomics and developmental experiments, cephalopod genomics, stem-brachiopod reconstructions, Chengjiang soft anatomy and living brachiopod biomineralization.
- Added explicit navigation for the molluscan and brachiopod origin-dossier boundaries, Aculifera, Polyplacophora, Aplacophora, Monoplacophora and Scaphopoda, plus named Kimberella, Odontogriphus, Orthrozanclus, Pojetaia, Nectocaris, Micrina, Kutorgina, Lingula and Yuganotheca records.
- Kept Kimberella and halwaxiid homology, Nectocaris affinity, Micrina articulation and Yuganotheca placement as bounded interpretations rather than crown assignments or a linear ancestor series.
- Retained the distinct Kocot et al. and Smith et al. phylogenomic results, including missing-taxon and corrigendum boundaries, instead of manufacturing a consensus among incompatible deep nodes.
- Added an independent `molluscsBrachiopodsZh` lazy chunk and a thirteen-step bilingual evidence story with claim, reference and uncertainty links.
- Confirmed that COL26.8 routes exactly 159,801 accepted living species names to the package and all 2,183,133 accepted species remain exclusively assigned with zero unmatched; naming coverage remains independent of fossil, dossier, topology and expert-review maturity.

## 2026.08-static-v5-rc29 — 2026-08-30

- Replaced the Sponges and Cnidarians generated scaffold with fourteen bilingual primary-evidence dossiers and a fourteen-step evidence story spanning Cryogenian biomarker debates, named Ediacaran–Cambrian fossils, living genomes and phylogenomic samples, Myxozoa, medusozoan body plans, coral divergence models and Triassic photosymbiosis proxies.
- Added nineteen primary research references and claim-linked locators. The evidence model keeps measured steranes separate from demosponge source attribution, specimen anatomy separate from crown placement or direct ancestry, competing Porifera-sister and Ctenophora-sister analyses side by side, and molecular-clock or geochemical inferences separate from fossil observation.
- Added eighteen curated navigation concepts for sponge classes and exemplar fossils, Medusozoa and its principal living classes, Burgessomedusa, Myxozoa, Octocorallia and Hexacorallia. Their browse edges are not asserted as a universal phylogeny; unresolved external identifiers are explicitly withheld pending reconciliation.
- Preserved exact COL26.8 nomenclatural routing for 30,521 strictly accepted species through Porifera usage ID `B8TXQ` and Cnidaria usage ID `CN2`, with 2,183,133 accepted species assigned globally and zero unmatched, ambiguous or broken accepted lineages. Catalogue routing remains distinct from dossier maturity.
- Added the independently lazy-loaded `spongesCnidariansZh` Chinese chunk, rebuilt all canonical projections, package shards, occurrence linkage indexes and the checksum manifest, and advanced the static dataset to `2026.08-static-v5-rc29` while retaining client version `0.19.0`.

## 2026.08-static-v5-rc28 — 2026-08-30

- Replaced the Dinosauria scaffold with twelve bilingual primary-evidence dossiers: competing early-dinosaur matrices, named Triassic–Cretaceous specimens, ontogenetic and biomechanical models, histology, reproductive association and taphonomy.
- Added nine non-avian navigation nodes for Eocursor, Thyreophora, Scelidosaurus, Yinlong, Buriolestes, Mussaurus, Ledumahadi, Yutyrannus and Oviraptorosauria; every new edge is explicitly navigational rather than an asserted ancestor chain.
- Kept specimen observations separate from diet, topology, stance, mass, armour, feather-function, brooding, growth-rate and bite-force interpretations, with specimen numbers and page/figure/method locators on every claim.
- Kept Avialae, flight dossiers and all 11,071 living-bird COL26.8 names in the crocodylomorphs-birds owner package; Dinosauria owns the non-avian evidence set without duplicating the living catalogue boundary.
- Reaffirmed that Dinosauria's two bundled PBDB occurrence rows are a bounded, non-random API-prefix sample and cannot establish a global first appearance, biological absence or diversity trend.
- Added a dedicated lazy-loaded `dinosaurZh` dictionary and rebuilt all canonical projections, registries, indexes, packages, release metadata and checksums for rc28; app version remains `0.19.0`.

## 2026.08-static-v5-rc27 — 2026-08-30

- Rebuilt `other-mammals` as twelve bilingual primary-evidence dossiers spanning monotreme fossils and genomics, conditional early-therian placements, placental morphology and molecular matrices, early proboscideans, aquatic sloth histology, stem-glires anatomy, and bat flight, echolocation and topology evidence.
- Added curated navigation for a non-taxonomic early-therian evidence route, Afrotheria, Xenarthra and Glires plus six named fossil genera, while moving Proboscidea and Rodentia beneath their broader browse clades without changing dedicated-package ownership boundaries.
- Anchored dossier claims to named specimens and datasets including AM F66763, Glennie's approximately sixfold platypus genome, CAGS 01-IG-1a,b, BMNH PM1343B, STM33-5, MNHN PM69, the five-species Thalassocnus compactness series, IVPP V20115 and ROM 55351A.
- Kept Juramaia provenance and topology conditional, separated observed anatomy from functional models, and treated placental roots, clocks, ancestral phenotypes and echolocation histories as model outputs rather than observed ancestry.
- Added a twelve-step bilingual evidence story and an independent `otherMammalsZh` lazy chunk; clarified that COL26.8's 5,099 residual accepted living species are nomenclatural routing coverage, not dossier or fossil completeness.

## 2026.08-static-v5-rc26 — 2026-08-30

- Replaced the Carnivora scaffold with eleven bilingual primary-evidence dossiers spanning early carnivoraform specimens and matrices, the living feliform–caniform split, beardog, bear, cat and dog samples, pinnipedimorph skeletons and bounded feeding or hunting proxy models.
- Anchored specimen-led dossiers to Dormaalocyon IRSNB dental and tarsal material, Lycophocyon UCMP 85202 and associated SDSNH skeletons, Gustafsonia TMM 40209-200, Magericyon B-4071, Kretzoiarctos MNCN-CSIC NV-2-42/NV-2-40 and IPS 46473, Panthera blytheae IVPP V18788.1–3, Puijila NUFV 405 and Enaliarctos LACM 4321.
- Added curated navigation for a navigation-only stem-carnivoraform dossier route, Feliformia, Caniformia, Amphicyonidae, Ursidae and Pinnipedimorpha without turning separate fossils into a linear ancestor ladder.
- Kept named specimen observations separate from morphology topology, living sequence topology, magnetostratigraphic occurrence, finite-element mechanics, inner-ear proxy classification and functional locomotor interpretations.
- Added a dedicated eleven-step bilingual evidence story and independent Carnivora Chinese lazy chunk.
- Clarified that COL26.8 routes exactly 310 accepted living species names through Carnivora as nomenclatural coverage, not evidence for 310 mature dossiers, fossil completeness or model agreement.

## 2026.08-static-v5-rc25 — 2026-08-30

- Replaced the Primates scaffold with twelve primary-evidence dossiers spanning a calibration-sensitive crown-Primate clock model, named Paleocene–Pleistocene specimens and two named ancient-genome samples.
- Added a Primatomorpha navigation route with Plesiadapiformes, Purgatorius, Adapiformes, Notharctus, Darwinius, Haplorhini, Teilhardina, Anthropoidea, Eosimias, Catarrhini, Saadanius, Hominoidea and Morotopithecus; every parent edge is a browse route rather than a universal ancestor tree.
- Kept Purgatorius and Eosimias isolated-tarsal attribution, the small Altiatlasius tooth hypodigm, Teilhardina PETM correlation, Notharctus grooming-claw comparison and Darwinius preparation disclosure explicit instead of promoting them to uncontested crown placements or global first appearances.
- Anchored Saadanius, Morotopithecus and Dmanisi Skull 5 to named specimens, locality or layer context and exact publication locators while separating preserved anatomy from matrix topology, functional reconstruction and taxonomic interpretation.
- Added named ancient-DNA dossiers for Vindija 33.19 and Ust’-Ishim 1 that distinguish direct radiocarbon results from genomic age, population-history and admixture-time models.
- Added a twelve-step bilingual evidence story and clarified that COL26.8 routes exactly 530 strictly accepted living species names through the pinned Primates usage; naming coverage remains independent of fossil, genome, translation and expert-review maturity.

## 2026.08-static-v5-rc24 — 2026-08-30

- Rebuilt `crocodylomorphs-birds` as a structured primary-evidence package with eleven bilingual dossiers spanning pseudosuchian and crocodylomorph specimens, crown-crocodilian topology, paravian fossils and feathers, a bounded wind-tunnel experiment, a latest-Cretaceous crown-bird test, and genome or fossil-calibrated crown-bird models.
- Added five evidence-led navigation nodes while keeping Effigia, Anchiornis and Microraptor out of false ancestry edges; distinguished COL26.8 living-name coverage from fossil, functional and phylogenetic dossier completeness.


## 2026.08-static-v5-rc23 — 2026-08-30

- Replaced the turtles-lepidosaurs scaffold with eight primary-evidence dossiers spanning stepwise turtle-shell assembly, a crown-turtle calibration, stem-lepidosaur anatomy, stem-squamate CT datasets and the contested placement of Cryptovaranoides.
- Anchored the dossiers to named specimens and datasets including Eunotosaurus NHM PV R 4949, Pappochelys SMNS 91356/91360/92066, Odontochelys IVPP V 15639/V 13240/V 15653, Caribemys MNHNCu P-3209, Taytalura PVSJ 698, Megachirella PZO 628, Bellairsia NMS G.2022.1.1 and Cryptovaranoides NHMUK PV R36822.
- Added curated navigation for Cryptodira, Pleurodira, Rhynchocephalia, Pan-Squamata and Serpentes while retaining Testudines as the Catalogue of Life package root.
- Kept preserved ribs, gastralia, shell plates and CT anatomy separate from homology, function, habitat and topology interpretations; no dossier is presented as a direct ancestor or linear stage.
- Separated the Caribemys hard minimum from the relaxed-clock posterior and retained incompatible Cryptovaranoides matrices instead of promoting a secure crown-squamate FAD.
- Added an eight-step bilingual evidence story and clarified that COL26.8's 12,622 accepted living species are nomenclatural routing coverage, not dossier maturity or fossil completeness.

## 2026.08-static-v5-rc22 — 2026-08-30

- Replaced the Cetartiodactyla pilot scaffold with eight primary-evidence dossiers spanning named Eocene specimens, a retroposon topology and an extant-cetacean supermatrix while keeping specimen, interpretation, phylogenetic model and catalogue claims distinct.
- Added curated navigation from Whippomorpha through Raoellidae and the cetacean total group to Pakicetidae, Ambulocetidae, Protocetidae, Basilosauridae, Neoceti, Mysticeti and Odontoceti without presenting the browse tree as a direct ancestor ladder.
- Anchored Indohyus, Pakicetus, Ambulocetus, Peregocetus, Basilosaurus and Aegicetus dossiers to named specimens, formations, bounded ages and exact publication locators; associated and composite material is disclosed rather than silently reconstructed as single skeletons.
- Kept locomotor, ecological and dispersal language as bounded interpretation, and kept whale–hippo retroposon support and the 2009 cetacean supermatrix as living-genome topology or time-model results rather than fossil observations or current catalogue authority.
- Added an eight-step bilingual evidence story and clarified that COL26.8 routes exactly 503 strictly accepted living species names through Artiodactyla and Cetacea usages; naming coverage and dossier maturity remain independent.
- Preserved bundled PBDB records as a bounded, non-random snapshot that cannot establish FAD, LAD, absence, richness or global distribution; only six named fossil occurrences receive claim-linked literature ranges.

## 2026.08-static-v5-rc21 — 2026-08-30

- Replaced the marine-reptiles-pterosaurs generated scaffold with nine primary-evidence dossiers kept in three independent radiations: three ichthyosaur, three plesiosaur and three pterosaur records.
- Added seven named navigation taxa and claim-linked literature ranges tied to explicit specimens, formations and publication locators without presenting any as a global first occurrence or direct ancestor.
- Separated preserved pregnancy, skin, bone histology, feathers, melanosomes, eggs and embryos from bounded functional, behavioural and phylogenetic interpretations.
- Marked the plesiosaur four-flipper experiment and giant-pterosaur launch analysis as physical or biomechanical models rather than direct observations of extinct locomotion.
- Added a nine-step bilingual evidence story and disclosed that COL26.8 routes zero strictly accepted species through these fossil-root package routes; naming coverage and dossier maturity remain independent.

## 2026.08-static-v5-rc20 — 2026-08-30

- Replaced the mammal-origins scaffold with seven primary-evidence dossiers spanning a referred early-synapsid neural spine, a basal-therapsid character matrix, Late Triassic cynodont and haramiyidan CT samples, two Jurassic jaw–ear mosaics, a Jehol middle-ear specimen and living developmental experiments.
- Anchored the dossiers to named specimens and datasets, including ROM VP 83326, IVPP V15424, MCZ7/95A–B and MCZ10/G95, the 26-specimen Brasilodon–Riograndia μCT sample, IVPP V4257, IMMNH-PV01925, IVPP V16051, MorphoBank Projects 2292 and 5075, and deposited segmented models and matrices.
- Added curated browse nodes for Ophiacodontidae, Probainognathia, Mammaliamorpha, Mammaliaformes, Haramiyida, Morganucodonta and Eutriconodonta while withholding PBDB mappings until those concepts are reconciled against the pinned snapshot.
- Kept specimen anatomy, matrix topology, functional inference, crown-Mammalia qualification and time envelopes distinct; the story explicitly rejects a progressive ancestor ladder and does not turn separate fossils into an ancestor–descendant sequence.
- Preserved all seven new entity-wide ranges as unreviewed legacy navigation displays rather than claim-linked FADs, LADs, crown ages or lineage durations.
- Clarified that COL26.8 assigns zero accepted species directly to mammal-origins because living Mammalia route to other packages and Synapsida lacks a reliable materialized species root; zero is a routing boundary, not evidence of no living synapsids, absent nomenclatural coverage or mature content.

## 2026.08-static-v5-rc19 — 2026-08-30

- Added eight Amphibia primary-evidence dossiers spanning named Permian–Oligocene fossils, a living frog genome, receptor-knockout metamorphosis and a 7,238-species model time tree.
- Added Gymnophionomorpha total-group and Gymnophiona crown navigation with separate evidence ranges, explicit provisional crown limits and PBDB snapshot-resolution boundaries.
- Promoted the Amphibia package from generated scaffold to structured maturity while retaining exactly 8,923 COL26.8 accepted species names as nomenclatural coverage rather than mature dossier coverage.
- Added two bilingual, claim-linked stories that keep specimen occurrence, stem/crown placement, model time, experimental scope, legacy ranges and global first appearance separate.

## 2026.08-static-v5-rc18 — 2026-08-30

- Replaced the Actinopterygii generated scaffold with seven primary-source-linked anatomy, fossil, phylogenomic, genome-duplication and developmental evidence events plus a bilingual evidence-boundary story.
- Added curated navigation for Neopterygii, Holostei, Lepisosteiformes, Amiiformes, Teleosteomorpha, Elopomorpha, Osteoglossomorpha and Clupeocephala while withholding PBDB identifiers pending a rerun against the pinned taxon snapshot.
- Linked named Devonian and Triassic specimens to exact publication figures and separated specimen occurrences and stem placements from global fossil first appearances or crown origins.
- Kept the teleost 3R interval explicitly molecular-model-derived and the Holostei and deepest-teleost results explicitly based on living genome samples rather than fossil dates, morphological stasis or complete species trees.
- Clarified that the 35,928 strictly accepted COL26.8 species below Actinopterygii usage ID 8VR36 provide nomenclatural browse coverage, not 35,928 mature dossiers, verified morphologies, fossil ranges, media records, translations or expert reviews.
- Retained the new navigation entities' rounded ranges as unreviewed legacy displays; none is presented as a claim-linked fossil FAD.

## 2026.08-static-v5-rc17 — 2026-08-30

- Promoted the early-fishes and chondrichthyan packages to structured evidence with seven specimen-level events and two bilingual evidence trails, while keeping stem, total-group and crown assignments explicit.
- Added Myxini as a navigable crown-group concept anchored to PBDB taxon `txn:401644` and Catalogue of Life usage `6225G`; the displayed crown record is supported by the Cenomanian holotype of *Tethymyxine* (BHI 6445), while the Moscovian *Myxinikela* specimens remain outside that crown-range claim.
- Added direct late Aeronian evidence from *Qianodus* tooth whorls (holotype IVPP V26641) and isolated *Fanjingshania* dermal elements (holotype IVPP V27433.1), without converting either record into a crown-chondrichthyan or global first-appearance assertion.
- Added articulated Telychian body evidence from *Xiushanosteus* (IVPP V300001 and referred material) and the sole known *Shenacanthus* holotype (IVPP V300000), preserving their placoderm-grade and analysis-sensitive total-group interpretations.
- Added bounded anatomical records for *Gladbachus* (UMZC 2000.32), *Priscomyzon* (AM5750) and *Myxinikela* (FMNH PF15373 and PF8472), with source-specific anatomical support and explicit limits on ecology, life history and phylogenetic reach.
- Retained the PBDB occurrence ledger as a bounded, non-random prefix sample that cannot establish FAD/LAD, absence, richness or global distribution; refreshed COL26.8 ownership still assigns all 2,183,133 accepted species with zero unmatched or broken lineages, including 141 early-fish and 1,359 chondrichthyan species.

## 2026.08-static-v5-rc16 — 2026-08-30

- Promoted the tetrapod-transition package from generated scaffold to structured evidence with six specimen- or trace-anchored events and a seven-step bilingual story.
- Separated the Zachełmie digit-bearing trackways from named body taxa and direct ancestry, retaining the trace-maker and palaeoenvironmental inference boundaries.
- Added independent Tiktaalik body-plan and pectoral-fin dossiers, preserving fin rays, functional inference and the difference between a load-bearing fin and a free-digit limb.
- Added CT-based Elpistostege fin anatomy, Acanthostega polydactyly and modelled Ichthyostega joint mobility without collapsing digit homology, locomotor capacity and observed behaviour.
- Corrected the Clack 2009 synthesis citation and reframed terrestrialization as a mosaic of anatomical, locomotor and ecological changes rather than a linear ancestor ladder.
- Kept all six entity-wide temporal ranges as unreviewed legacy displays; the new events do not promote them to specimen-supported ranges or global first appearances.

## 2026.08-static-v5-rc15 — 2026-08-30

- Promoted the angiosperm package to structured evidence with a seven-step bilingual story separating crown-age models, dated body fossils, phytolith assemblages and animal-diet isotope proxies.
- Added a 2026 fossil-integrated crown-age model while exposing the radically different posterior intervals produced by three calibration strategies instead of presenting one preferred value as a fossil first appearance.
- Added specimen-scoped Early Cretaceous evidence for submerged Montsechia, the whole-plant crown monocot Cratolirion and the eudicot Leefructus without turning proposed placements into modern-family identifications or global first appearances.
- Added a central Great Plains C3–C4 phytolith transition and clarified that the existing four-continent enamel-isotope event cannot identify contributing C4 plant lineages or directly measure vegetation cover.
- Refreshed the COL26.8 package-ownership snapshot: all 2,183,133 accepted species remain assigned, including 352,619 flowering-plant species, with zero unmatched or broken lineages.
- Kept all five angiosperm-package global ranges unreviewed legacy displays and stated that the educational navigation subset does not make monocots and eudicots an exhaustive flowering-plant topology.

## 2026.08-static-v5-rc14 — 2026-08-30

- Promoted the gymnosperm package from generated scaffold to structured evidence with six primary-source-linked events and a bilingual evidence-boundary story.
- Added an extant-family phylogenomic hypothesis without treating its topology as fossil chronology or as a tree for extinct seed plants.
- Separated living-cycad radiation, Cycadaceae crown-age and cycad biogeography models from fossil first appearances, retaining later studies that revise the well-known 2011 young-radiation result.
- Added a specimen-scoped Jurassic Ginkgo-like wood record and a relative hemispheric conifer-node comparison without using either to validate the package's unreviewed legacy global ranges.
- Clarified that COL26.8 gnetophyte species already enter the package through its pinned Pinopsida routing root; a dedicated Atlas dossier remains pending.

## 2026.08-static-v5-rc13 — 2026-08-30

- Added four curator-audited early-land-plant evidence events based on primary studies: Dapingian Argentine cryptospores, Late Ordovician Oman spore-mass fragments, the Asteroxylon rooting system and Givetian Metzgeriothallus body fossils.
- Kept modelled crown divergence, dispersed spores, sporangial fragments and body fossils as separate evidence objects rather than collapsing them into one land-plant origin date.
- Preserved source-reported and legacy chronostratigraphic boundaries explicitly: the Dapingian numerical age remains source-reported, while the Oman Caradoc occurrence uses a deliberately broad Sandbian–Katian display window.
- Published a five-step bilingual evidence trail linking every story step to claim-level locators and stating where species-level exemplars cannot support phylum-wide traits or first appearances.
- Advanced the early-land-plant package to structured maturity; rich taxon profiles remain withheld until plant-appropriate fields and complete entity-level evidence are available.

## 2026.08-static-v5-rc12 — 2026-08-30

- Generalized the existing rich-profile projection so any static resource package can publish a package-local `profiles.source.json` without being hidden by Perissodactyla-only build, runtime, search, translation or static-page imports.
- Added one generated aggregate profile registry while preserving package-local projections, package isolation and the existing Perissodactyla topology, calibration and complete-occurrence boundaries.
- Applied the existing visible-field-to-claim-link contract to every profile-bearing package and included those links in package review packets.
- Corrected topology availability to describe nodes actually present in the published Perissodactyla hypothesis rather than unrelated ancestors in the navigation ontology.
- Removed Perissodactyla-only wording and trait-overlay leakage from interfaces that now consume profiles across packages.

## 2026.08-static-v5-rc11 — 2026-08-30

- Corrected the Magallón et al. angiosperm time-tree citation to New Phytologist DOI 10.1111/nph.13264 and limited its claim to model-dependent 135–130 Ma crown-lineage estimates.
- Reframed the Cerling et al. record as a regionally asynchronous 8–6 Ma increase in isotope-inferred C4 biomass, without treating it as direct evidence for open grassland, phytoliths or faunal adaptation.
- Replaced the composite land-colonization event with the narrower Morris et al. fossil-calibrated molecular-clock estimate, removing unsupported cryptospore, macrofossil, rooting and soil evidence labels.
- Removed unsupported pollen, leaf, insect-association, soil and dental-turnover evidence labels from the affected event cards and added precise page, figure and section locators.
- Defined explicit bilingual evidence boundaries for early land plants, gymnosperms and angiosperms, separating provider navigation nodes, living crown groups, fossil first appearances, modelled divergence and ecological dominance.
- Renamed the early-land-plant package so bryophytes and seed-free vascular plants are visible in its public scope.

## 2026.08-static-v5-rc10 — 2026-08-30

- Assigned every one of the 2,183,133 strictly accepted species in pinned Catalogue of Life release COL26.8 to exactly one release-scoped resource owner using exact ancestor usage IDs.
- Published 24 static package owners plus eight catalogue-only partitions for viruses, archaea, bacteria, fungi, protists/chromists and residual eukaryote groups, with zero unmatched species and zero broken parent lineages.
- Kept the complete mapping compact by publishing deterministic ownership rules and counts instead of duplicating 2.18 million species records; runtime resolution reuses the existing lazy CoL lineage shards.
- Added resource ownership and its evidence boundary to exact taxon pages, package manifests and the Data coverage dashboard, explicitly separating nomenclatural placement from curated dossier maturity.
- Narrowed broad plant routing to exact class/phylum usages and labelled teaching or residual collections that do not represent natural monophyletic clades.

## 2026.08-static-v5-rc9 — 2026-08-29

- Replaced the 12-period-only map payload with 1,889 checksum-addressed CAO2024 v2.4 frames spanning the complete documented 0–1,800 Ma model range.
- Added disclosed layer-specific sampling: 5/10 Myr coastlines; 1/5/10 Myr dynamic topology; 10/20 Myr continental extent and COBs; and 20/40 Myr rigid static partitions.
- Added 162 representative ages to each dynamic topology series so 287 short-lived source topology records are not skipped by the baseline grid.
- Reconstructed every frame offline from all 11 byte-verified immutable Zenodo source files with pyGPlates, deterministic antimeridian wrapping and compressed-file checksums.
- Made runtime selection independent per layer, with nearest-frame selection, younger-frame tie breaking, explicit requested/selected age deltas, no interpolation and no out-of-range clamping.
- Reused canonical compressed frames for the retained period anchors, removing 72 duplicate uncompressed map files while keeping the six scientific layer roles distinct.

## 2026.08-static-v5-rc8 — 2026-08-29

- Expanded all 12 CAO2024 period-midpoint snapshots from three to six layer families by adding modelled continental-crust extent, filtered continent–ocean transition boundaries and rigid static reconstruction partitions.
- Kept coastline, dynamic topological plates, continental crust, COBs and static plate-ID partitions scientifically distinct in both the interface and provenance; none is presented as paleoelevation, bathymetry or terrain relief.
- Added independent checksum-verified lazy loading for optional detailed layers, so one unavailable technical layer cannot hide the other verified map evidence.
- Pinned the official CAO2024 v2.4 Zenodo record and source payload hashes while separately recording the mutable GWS descriptor/mirror metadata and its known time-range inconsistency.
- Split 41 date-line-crossing features with spherical antimeridian clipping and recorded the per-period split counts, preventing false world-spanning polygon or boundary segments.

## 2026.08-static-v5-rc7 — 2026-08-29

- Added an exact-ID Catalogue of Life hierarchy with all 2,183,133 accepted species and the 245,959 accepted or provisionally accepted higher taxa needed for their complete ancestor closure.
- Published 2,429,088 direct parent-child edges, including every accepted-species parent edge, in checksum-addressed SHA-256-routed node and children shards.
- Preserved true intermediate ranks such as domain, realm, infraphylum, subclass, infraorder, parvorder and botanical/zoological sections instead of reconstructing identifiers from flattened classification strings.
- Kept all hierarchy data lazy and outside the app-shell precache; exact-ID and direct-child runtime loaders fetch one routed shard family on demand.
- Added release-scoped internal taxon pages with root-to-node lineage, direct-child browsing, source-checklist attribution and an explicit handoff to the immutable upstream ChecklistBank record.

## 2026.08-static-v5-rc6 — 2026-08-29

- Pinned Catalogue of Life Base Release COL26.8 / ChecklistBank dataset 316115 and its exact official DwCA response SHA-256.
- Published all 2,183,133 strictly accepted species names, excluding and disclosing 82,483 provisionally accepted names.
- Retained 1,931,136 synonyms, 130,689 ambiguous synonyms and 3,611 misapplied names with their accepted usage targets and source-checklist lineage.
- Added 730 checksum-addressed, hotspot-split name-prefix shards (125.75 MiB) and demand-loaded global search without expanding the initial application payload.
- Added 256 SHA-256-routed target shards (49.19 MiB) so every resolving name can be dereferenced locally while preserving the target's actual rank and accepted or provisionally accepted status.
- Bound result links to immutable ChecklistBank dataset 316115, exposed the release date and true total-match count, and separated registry verification failures from genuine no-match responses.
- Kept the nomenclatural registry separate from 191 curated Atlas entities, dossier maturity and evidence-review status; documented that CoL usage IDs may change across source-sector resynchronizations.

## 2026.08-static-v5-rc5 — 2026-08-29

- Expanded each CAO2024 period snapshot from coastlines alone to three checksum-addressed layers: unsimplified coastlines, topological plate polygons and typed plate boundaries.
- Preserved GPlates boundary classifications for ridges, subduction zones, transforms, rifts, terrane boundaries and other modelled tectonic features.
- Retained left/right subduction polarity, added bilingual boundary labels and exposed layer/type counts in the map's text alternative.
- Added explicit disclosure that these layers do not contain or imply paleoelevation, bathymetry or terrain relief.
- Completed the five living echinoderm classes in the navigation package by adding Ophiuroidea and Holothuroidea with pinned PBDB concepts.
- Replaced the former 540 Ma echinoderm display bound with a literature-linked 510 Ma articulated-fauna record, while keeping 520–525 Ma isolated stereom and contested older affinities as separate claims; corrected the class-level ranges and added precise bilingual evidence locators.

## 2026.08-static-v5-rc4 — 2026-08-29

- Replaced the withdrawn provenance-unknown map series with 12 checksum-addressed CAO2024 v2.4 coastline snapshots, reconstructed at ICS 2026/06 period midpoints under CC BY 4.0 and linked to a reproducible GPlates import ledger.
- Kept land-model geometry, PBDB reconstructed coordinates and modern collection coordinates as three explicitly separate evidence layers; no cross-model spatial alignment is implied.
- Added lazy, checksum-verified map delivery and visible model/age/attribution/uncertainty context in the Explorer.
- Replaced the promotional home screen with a dashboard-first entry, four geological preset scenes, a first-visit tutorial choice and folded detailed tools on desktop and mobile.
- Corrected high-confidence package defects found in the first full audit: the Cerling DOI, overlapping package roots, Lissamphibia/Lepidosauria labels, Mosasauridae placement, Graptolithina extant range and Ptychopariida historical-grade semantics.

## 2026.08-static-v5-rc3 — 2026-08-20

- Added a validated query ledger to every package. Perissodactyla records complete pinned PBDB pagination and profile subqueries; all legacy package partitions explicitly retain their bounded, non-random coverage status.
- Replaced ambiguous scientific-stage labels with the public ladder `generated-scaffold → structured → source-linked → curated-draft → published`.
- Added explicit automated-only review decisions, reviewed dataset versions and per-reviewer decisions without claiming human scientific review.
- Added content-origin labels to every visible Perissodactyla profile field and a release gate for the flagship story’s step-to-claim-to-reference chain.
- Added bilingual static knowledge pages, canonical and social metadata, structured data, sitemap/feed output and public evidence-correction context.

## 2026.08-static-v5-rc2 — 2026-08-20

- Split direct entity links from broad higher-classification placement and made zero-sample package coverage explicit.
- Added evidence levels for canonical ranges, source/generated separation, typed field claims and source-metadata review gates.
- Added complete paginated Perissodactyla occurrence queries with checksums and concept-review query gating.
- Added relationship kinds, separate automated and human PBDB decisions, Myriapoda coverage and an explicit non-whole-life scope statement.
- Made release-history retention checksum-first, failure-blocking, atomic and byte-budgeted.

## 2026.08-static-v5-rc1 — 2026-08-20

- Separated canonical `entityKind`, `contentLevel` and PBDB `externalResolutionStatus`; unresolved biological taxa remain taxa.
- Added lineage-aware PBDB concept diagnostics, corrected Meganeura, Tetrapodomorpha, Bryophyta and Graptolithina navigation semantics, and introduced a canonical range-evidence ledger.
- Replaced the PBDB-keyed occurrence index with a stable entity-ID index, disjoint match-method counts, frozen global/package regression gates and a public quality dashboard.
- Added field- and evidence-item claim links, mandatory supporting sources for scientific claims, source-role/fitness metadata and non-bypassable human-review requirements for Gold.
- Added generated-file drift checks, retained release inventories, stale-cache activation cleanup and full ICS boundary metadata in the Data page.

## 2026.08-static-v4-rc1 — 2026-08-19

- Moved every runtime payload and manifest under an immutable dataset-versioned release path; `current.json` remains the only mutable bootstrap.
- Added checksums for package, occurrence and map manifests, enforced package/dataset coherence in the client, and added one cache-evicting network retry after checksum failure.
- Versioned Workbox runtime caches by dataset and made “Clear offline data” remove both explicit package caches and runtime data caches.
- Replaced the forced `core | gold-v2` flag with separate platform maturity, scientific maturity, automated review and scientific review axes under candidate package schema v4.
- Migrated Perissodactyla to `curated-draft`, the other 22 scientific packages to `generated-scaffold`, and removed the misleading 23/23 Gold claim.

## 2026.08-static-v3 — 2026-08-19

- Rebuilt the geological-time table against the official ICS 2026/06 chart, retaining boundary uncertainty, approximation status, definition type and source locator instead of presenting every boundary as an unqualified float.
- Reconciled all 179 navigation entities against the pinned PBDB 2026-07-19 full taxon snapshot: 127 exact accepted-name/rank matches now publish verified IDs and 52 unresolved concepts explicitly withhold external IDs.
- Rebuilt descendant linkage with accepted IDs plus retained PBDB classification names. The explicit coverage report links 11,673 of 13,600 bounded occurrence rows (85.83%); zero-result UI states remain labeled as sample observations rather than biological absence.
- Corrected the Hipparionini range and separated North American range, Old World dispersal and regional last-appearance windows; revised Teleoceras to contested locality/species-dependent ecology and separated Coelodonta fossil-range and genomic evidence.
- Made event confidence and references derive from claim IDs, split early Homo dispersal from later Homo sapiens/archaic admixture, and converted story steps to claim-level evidence links. Four stories publish with limitations; six evidence-incomplete stories are withheld from runtime packages and search.
- Added explicit media creator, rights, caption, alternative-text, subject-scope and review fields; removed the unused contradictory vertebrate cladogram; and added semantic validation for source fitness, parent/child ranges, story coverage, external-ID resolution and orphan data.
- Added a complete 179-entity bilingual registry with stable IDs, entity types, definitions, composition scopes, evidence status, explicit availability, review scope and package ownership.
- Froze Static Package schema v3 after the Cetartiodactyla, Dinosauria and Angiospermae pilots, then brought all 23 scientific ownership packages to the Gold v2 dossier baseline. Perissodactyla retains the richer flagship profile, claim-link, topology and calibration extensions.
- Migrated Perissodactyla profiles, topology and calibrations into `data/packages/mammalia/perissodactyla/` while retaining shared claims, references, events and stories as single canonical sources.
- Added canonical-to-runtime generation for Core data, package knowledge, two-level search indexes, package × period occurrence shards, per-package ZIP downloads and map manifests.
- Replaced Vite JSON occurrence chunks with checksum-verified static fetches and Worker decompression/parsing.
- Added explicit offline package controls and limited the default PWA precache to the shell and Core data.
- Added registry, package, claims, translation, provenance, review, source-size, Pages-size and static-reachability release gates.
- Retained all 13,600 existing occurrence rows and enriched the unchanged identifiers with PBDB higher classification. Exact registry IDs plus explicit classification rules assign 12,064 rows to scientific packages; 1,536 unresolved rows remain clearly labeled in `atlas-core` rather than being assigned speculatively.

## 2026.08-m2 — 2026-08-19

- Removed all 12 provenance-unknown paleogeographic GeoJSON snapshots from the repository and build; the continental layer is withheld until source and redistribution provenance is complete.
- Split application version `0.8.0`, dataset version `2026.08-m2`, schema version and commit provenance into distinct manifest fields.
- Separated three curation choices into `editorial-decisions.json` and upgraded scientific claims with kind, evidence relation and confidence rationale.
- Marked two rhinoceros divergence estimates as unmapped instead of attaching them to broader topology nodes.
- Kept exact and descendant taxon query results in independent caches and exposed index fallback semantics.

## 2026.08-m1 — 2026-08-18

- Added a versioned 4,567 Ma time scale derived from ICS 2026/06 display boundaries.
- Retained 13,600 bounded, non-random PBDB API-prefix rows across 12 period chunks and enriched them without changing row membership or order.
- Added 10 curated taxon profiles, 18 evolution events and 10 guided stories.
- Added a reference registry and explicit evidence/uncertainty fields.
- Separated the atlas navigation ontology from a scoped Perissodactyla topology hypothesis and added first/last-appearance interpretation guardrails.
- Added a 17-node perissodactyl subtree linked to all ten flagship profiles.
- Added three study-specific divergence estimates with reported uncertainty kept separate from fossil ranges.
- Added ten museum media/source records and a 20-place bilingual search index.
- Added claim-level evidence, domain references, schema validation, scientific regression assertions, descendant indexes and per-file SHA-256 checksums.
- Added an offline PWA shell with lazy runtime data caching and a browser-local IndexedDB query workspace.

This changelog describes the bundled atlas snapshot, not upstream database release history.
## App 0.20.15 / 2026.08-static-v5-rc64 — 2026-08-31

- Added the release-pinned CC BY 4.0 AviList `v2025b` authority crosswalk to `crocodylomorphs-birds`. Of 11,044 strict accepted COL26.8 Aves, 10,444 match an accepted AviList name exactly, 78 follow an official protonym plus exact authority-year redirect, one remains ambiguous and 521 remain unmatched. Another 609 accepted AviList species remain explicit upstream-only records; the package's 27 Crocodylia species are non-applicable and excluded from bird counts.
- Added explicit `web-light` and `native-full` runtime profiles. Pages publishes the complete AviList source, licence, scope, counts, limitations and canonical hash inventory without row shards. Android and iOS build `18` bundle byte-identical copies of all three non-overlapping COL-ID shards and the upstream-only shard; a row lookup selects at most one COL range shard.
- Kept all 109 PaleoDEM ages in both profiles: Web remains on the 0.5° preview series and both native apps retain all 109 full 0.1° grids. Package ZIPs remain native/local-only, and Pages continues current-release-only retention.

## App 0.20.16 / 2026.08-static-v5-rc65 — 2026-08-31

- Added the official CC0 ITIS monthly SQLite snapshot dated 2026-08-26 as an exact nomenclatural authority sidecar for all 8,923 strict accepted COL26.8 Amphibia species. Results are 8,909 current valid-name links, 14 explicit ambiguities, zero synonym redirects and zero unmatched names; eight additional current ITIS species remain upstream-only with null COL ownership.
- Replaced the temporary monolithic projection with seven deterministic, non-overlapping `colUsageId` JSONL gzip ranges plus one ITIS-only shard. Matching preserves case, diacritics and punctuation and does not use fuzzy, edit-distance, phonetic, token-reordered or taxon-substituted guesses.
- Kept Pages deployable through `web-light`: the Amphibia manifest publishes the exact source/method/counts/limitations and all eight canonical byte/SHA-256 records, but no row shard. Android and iOS build `19` use `native-full`, contain byte-identical copies of all eight files and verify them against the release inventory.
- Added a generic ITIS range-shard client path and a narrowly scoped automated-claim version stamper, avoiding unrelated ontology, range or PBDB rewrites during release advancement. All 109 PaleoDEM ages and the complete native AviList collection remain unchanged.

## App 0.20.17 / 2026.08-static-v5-rc66 — 2026-08-31

- Added the release-pinned CC BY 4.0 World Foraminifera Database `2026-08-01` identifier projection for all 47,975 strict accepted COL26.8 Foraminifera species. Every row follows the official ChecklistBank dataset `1157` source-record relationship; all 47,975 resolve as accepted, with zero ambiguous, unmatched or withheld outcomes and no fuzzy matching.
- Preserved the complete 86,094-record, 87-page WFD nameusage acquisition ledger and the 47,975 source-record response hashes. The 179 observed accepted WFD records without a COL source relationship remain an audit count only and are explicitly not asserted as a complete upstream-only inventory because no immutable complete upstream archive was available.
- Added five deterministic, non-overlapping COL-ID JSONL gzip ranges totalling 4,046,631 bytes. Pages `web-light` publishes the full descriptor and canonical hash inventory but no row shard; Android and iOS build `20` use `native-full`, contain byte-identical copies of all five files and verify them against the release inventory. A species lookup reads at most one range shard.
- Kept the complete 109-frame native PaleoDEM series, AviList birds and Amphibia ITIS authority rows unchanged in both native applications while retaining the bounded Pages deployment profile.
