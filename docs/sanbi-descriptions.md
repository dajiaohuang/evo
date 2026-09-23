# SANBI regional biological descriptions

This source adds attributed biological text, not another names-only authority
crosswalk. The current canonical projection contains 65,139 descriptions for
15,211 accepted COL26.8 species: 14,684 Angiospermae, 473 Early land plants and
54 Gymnosperms. These are source coverage counts, not global completion or
independent scientific review. Full-Web runtime generation and the catalogue
detail loader are implemented; deployment and real-browser acceptance remain
pending.

## Source and rights

SANBI's *e-Flora of South Africa*, version 1.36, issued 2022-06-06, is supplied
through the [World Flora Online archive](https://files.worldfloraonline.org/Files/South_Africa/dwca-flora_descriptions.zip).
Its embedded EML declares CC BY 4.0 and permission from copyright holders to
reuse published descriptive extracts. This specific archive's declaration is
the reuse basis; it is not a blanket license for other WFO archives or linked
publications. Preserve SANBI attribution and each record's publication citation.
The software MIT license does not apply to these source texts.

The original 10,338,944-byte ZIP has SHA-256
`2f9b6784d8bdd4b427f10bddec14f41eb42e3cac0e26c5225b7b17eff3064465`.
Original bytes are retained separately from the repository; the checked-in
projection and import ledger pin the derived bytes. No images or linked full
publications are copied.

## Selection and identity

The archive contains 106,112 description rows. Import selection keeps nonempty
Morphology, Diagnostic and Habitat text only. It joins the description's core
ID and source identifier to the reference extension's core ID and identifier,
preserving that exact citation, not any citation associated with the taxon.
Distribution rows are not included in this batch.

The existing pinned WFO-to-COL crosswalk must expose exactly one COL ID for the
WFO identifier, with an accepted matching record. Ambiguous, redirected-only
and unmatched outcomes are not filled by inference. A unique link does not
establish that SANBI's 2022 concept, WFO's 2026 concept and COL's 2026 concept
have identical circumscriptions. The text remains attributed to its original
regional source rather than presented as a globally universal description.

The corrected eligible export had 65,216 rows. Removing 77 exact duplicates
of COL ID, WFO ID, type, text, source identifier and citation leaves 65,139.
The first original description row number is retained for duplicate rows.
Grouping by species changes storage only: it does not synthesize statements,
translate text, resolve conflicting publications, or infer missing traits.

## Reproduction

With the retained, reviewed `import-candidate.jsonl` available:

```sh
node scripts/import-sanbi-descriptions.mjs /absolute/path/import-candidate.jsonl
```

The explicit offline importer checks the pinned candidate hash and existing
accepted links, writes `data/sources/sanbi-descriptions.jsonl.br`, and records
source and output hashes in `sanbi-descriptions-import-ledger.json`. Normal
builds must consume the committed projection without a live upstream request.
Build-time storage now uses Brotli quality 11, with the decoded 46,438,841-byte
stream verified identical to the previous gzip source (SHA-256
`8f7146b680b51676fe2cbd899212c0b1feabe99b47580b6f3f3f2daa1238fd7b`).
The earlier gzip-to-Brotli quality-5 migration saved 1,621,821 bytes; quality 11
saves a further 1,280,419 bytes. Published runtime shards still use gzip.
Runtime delivery and rendering
must be verified separately before reporting this as user-accessible coverage.

## RC156 locator and rights audit

The checked-in projection contains 30,951 Morphology and 27,186 Habitat text
records for 15,211 and 14,214 COL IDs, respectively. Every record has a
`sourceId`, its citation string, and the original description `rowNumber`. The
citation includes a page range for 28,826 Morphology rows and 25,490 Habitat
rows. The source row number identifies the imported Darwin Core record; where
the citation lacks pagination, it does not substitute for a locator in the
publication. Those rows need individual source resolution before use as
page-located dossier claims. The separate 7,002 Diagnostic records are not
automatically classified as morphology evidence.

The SANBI e-Flora EML declares CC BY 4.0, while individual bibliographic
citations use `[CC BY]`; the exact license version of every underlying work has
not been independently checked. Preserve the archive's attribution and the
record's own citation, and paraphrase rather than republish the original text
when a claim is linked without an independently checked item-level license.
This license finding applies to this SANBI archive only.

One record was promoted to a deliberately incomplete dossier as a provenance
trace: COL `3254C`, *Ctenium concinnum* Nees, maps to WFO `wfo-0000860837` by
the pinned WFO 2026-06 exact accepted-name and authorship match. Moeaha's 2015
Strelitzia 36 account identifies the species on pp. 182-183; the archived
Habitat and Morphology fields point to rows 80373 and 80653, both source ID
`15446.0`. The official SANBI account page independently displays the same
taxon and page citations. The dossier records only paraphrased morphology and
habitat claims as partial, leaves the other five facets unassessed, and does
not treat the page-range locator as proof of a globally exhaustive account.
See `data/knowledge/catalogue-dossiers.json` for the exact identity, source
versions, rights note, scope and claims.

## RC157–RC158 source triage

A reproducible metadata screen found 4,960 distinct COL taxa / 6,149
source-ID pairs where the imported SANBI record has both Morphology and
Habitat rows with the same exact citation string and a parsed page range no
longer than four pages. This is a triage queue only: it does not verify the
publication's concept against COL, item-level rights, the exact passage, or
whether the text supports a complete dossier facet. These pairs must not be
counted as reviewed claims or completed species. Recompute the queue from the
pinned projection with `rtk node scripts/sanbi-locator-triage.mjs`; add
`--list` to emit each candidate taxon/source/citation tuple. The final numeric
page range is only a locator heuristic and still requires inspecting the
actual page.

One exact one-page account was inspected directly: COL `32DNH`, *Cullumia
cirsioides* DC., maps to WFO `wfo-0000077220` by the pinned 2026-06 exact
accepted-name-and-authorship crosswalk. Manning & Goldblatt's 2012 *Strelitzia
29* account is on p. 367; archive rows 11352 and 25918 share source ID
`14129.0` and the same citation. The account supports partial morphology,
flowering period, sandstone-slope habitat and a southeastern Cape locality
summary. The dossier retains those narrow regional scopes, leaves evolution,
fossil and conservation unassessed, and does not infer native status. The
official [SANBI Strelitzia 29 PDF](https://www.sanbi.org/wp-content/uploads/2024/05/2012_Strelitzia29.pdf)
was checked at the cited account. The archive EML declares CC BY 4.0, but the
individual publication's license version has not been independently
inspected; only attributed paraphrases are recorded.

The same page contains four further species accounts promoted only after
checking each exact WFO crosswalk and its separate species entry: *Cullumia
decurrens* (COL `32DNJ`, rows 11353/25919), *C. floccosa* (`32DNK`, rows
11354/25920), *C. reticulata* (`32DNV`, rows 9242/25923) and *C. rigida*
(`32DNW`, rows 11357/25924). Their archive records share source ID `14129.0`
and the p. 367 citation. The printed account independently supplies each
species' morphology, flowering months, habitat and regional locality codes.
Those four facets are partial only; evolution, fossil and conservation remain
unassessed. As with the other dossier, the archive EML's CC BY 4.0 declaration
does not independently establish the item-level license version of the book.

The broad genus chapter entry for *Cullen tomentosum* was excluded: the cited
page actually describes *C. obtusifolia*. A shared chapter citation alone did
not establish species-level identity.

## Runtime delivery

Full-Web data generation emits 256 SHA-256 COL-ID-prefix shards, keeping each
species' original descriptions together. The generated files total 11,872,071
compressed bytes, with a largest shard of 69,887 bytes. The catalogue manifest
routes lookups to one prefix shard; the existing windowed cache reuses it.
Every generated shard is recorded in `release-files.json`, so the explicit
complete-Atlas offline action includes it. Saving an individual rich package
is a different action and does not promise this catalogue-level collection.
The Pages-preview edition omits the full collection. Source text is never
compiled into Core or added to default precache.


Three additional exact accounts on p. 367 were verified against separate archive rows and pinned accepted-name crosswalks: *Cullumia selago* (COL `32DNX`, WFO `wfo-0000085810`, rows 11358/25925), *C. aculeata* (COL `6BPSJ`, WFO `wfo-0000059420`, rows 11360/25915), and *C. carlinoides* (COL `6BQ4J`, WFO `wfo-0000069829`, rows 11351/25917). Each has four partial regional facets only; evolution, fossil and conservation remain unassessed.

The archive also maps COL `32DNP` *Cullumia micracantha* to WFO `wfo-0000080801`, but the printed p. 367 account spells the name *micrantha* (without “c”). Because the accepted-name mapping and printed account are not reconciled, this candidate is excluded from the dossiers pending resolution. The page and archive records are not treated as proof that these sources exhaust any species-level topic.


Two *Metalasia* species were additionally checked against their individual printed accounts in the official Strelitzia 29 PDF: *M. divergens* (COL `6RCXR`, WFO `wfo-0000029921`, p. 397, archive rows 10336/26238) and *M. cymbifolia* (COL `6RCXS`, WFO `wfo-0000030968`, p. 395, rows 10299/26235). The printed accounts give morphology, flowering months, habitat and regional distribution; all four facets remain partial. The SANBI Opus item record states CC BY-SA 4.0 while the e-Flora archive citation labels the treatment [CC BY]; the dossier follows the stricter item-level license and records only attributed paraphrases.


A third *Metalasia* account is *M. acuta* (COL `6RCXW`, WFO `wfo-0000065668`, Strelitzia 29 p. 395, archive rows 10286/26222). The printed page directly supports partial morphology, flowering months, habitat/elevation and regional distribution. Its source licensing is recorded under the same stricter CC BY-SA 4.0 item-level metadata noted above.


Nine more individual *Metalasia* accounts on p. 395 were checked against the official PDF and separate archive rows: *M. erubescens* (COL `6RCY2`, WFO `wfo-0000029616`, rows 10304/26241), *M. serrata* (`6RCYV`, `wfo-0000040930`, 10327/26267), *M. serrulata* (`6RCZ7`, `wfo-0000133359`, 10328/26268), *M. albescens* (`73CXW`, `wfo-0000072560`, 10289/26225), *M. brevifolia* (`73CY7`, `wfo-0000045950`, 10293/26229), *M. seriphiifolia* (`73CYW`, `wfo-0000043535`, 10326/26266), *M. rogersii* (`73CYX`, `wfo-0000034131`, 10325/26265), *M. phillipsii* (`73CZD`, `wfo-0000116290`, 10337/26257), and *M. erectifolia* (`73D9R`, `wfo-0000040983`, 10303/26240). Each dossier keeps morphology, flowering time, habitat and regional distribution partial; evolution, fossil and conservation remain unassessed.


Twelve more individually named *Metalasia* accounts on Strelitzia 29 p. 396 were checked against the official PDF, the accepted COL/WFO crosswalk and separate archive rows: *M. tenuifolia* (COL `73CZ6`, WFO `wfo-0000068620`, 10330/26270), *M. tenuis* (`6RCYT`, `wfo-0000066131`, 10331/26271), *M. adunca* (`6RCY8`, `wfo-0000082350`, 10287/26223), *M. agathosmoides* (`6RD9W`, `wfo-0000015914`, 10288/26224), *M. alfredii* (`73CY8`, `wfo-0000034534`, 10290/26226), *M. aurea* (`6RCXV`, `wfo-0000091123`, 10291/26227), *M. bodkinii* (`6RD9V`, `wfo-0000019525`, 10292/26228), *M. calcicola* (`6RCY6`, `wfo-0000003929`, 10294/26230), *M. cephalotes* (`6RCXT`, `wfo-0000074899`, 10296/26232), *M. compacta* (`6RD9T`, `wfo-0000124159`, 10297/26233), *M. confusa* (`73CY5`, `wfo-0000067543`, 10298/26234), and *M. densa* (`73CXS`, `wfo-0000037543`, 10300/26236). Each dossier treats its four source-backed facets as partial and leaves evolution, fossil and conservation unassessed.

Thirteen more individual *Metalasia* accounts on Strelitzia 29 p. 397 were checked against the printed account, exact accepted COL/WFO crosswalk rows and separate archive rows: *M. dregeana* (COL `6RD9R`, WFO `wfo-0000014608`, 10302/26239), *M. fastigiata* (`73CXQ`, `wfo-0000009042`, 10305/26242), *M. galpinii* (`73D9Q`, `wfo-0000004514`, 10306/26243), *M. humilis* (`6RCZP`, `wfo-0000039895`, 10307/26245), *M. inversa* (`6RCZM`, `wfo-0000124891`, 10308/26246), *M. juniperoides* (`73CZM`, `wfo-0000029632`, 10309/26247), *M. lichtensteinii* (`6RCZK`, `wfo-0000070301`, 10310/26248), *M. luteola* (`73CZK`, `wfo-0000115861`, 10311/26249), *M. massonii* (`6RCZJ`, `wfo-0000091621`, 10312/26250), *M. montana* (`73CZJ`, `wfo-0000032991`, 10313/26251), *M. oligocephala* (`73CZF`, `wfo-0000027352`, 10317/26255), *M. pallida* (`6RCZD`, `wfo-0000035716`, 10318/26256), and *M. octoflora* (`6RCZF`, `wfo-0000059441`, 10316/26254). All keep four regional facets partial, with evolution, fossil and conservation unassessed. The printed p. 397 entry, not the neighboring archive row order, is the authority for flowering months and distribution. Claims are paraphrased and linked to the item-specific CC BY-SA 4.0 publication metadata.
