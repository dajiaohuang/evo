# Dataset changelog

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
