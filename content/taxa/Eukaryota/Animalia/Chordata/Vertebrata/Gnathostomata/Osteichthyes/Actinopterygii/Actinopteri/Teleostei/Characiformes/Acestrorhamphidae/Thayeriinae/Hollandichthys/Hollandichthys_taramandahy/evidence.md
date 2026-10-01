---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Hollandichthys taramandahy Bertaco & Malabarba, 2013
    authorship: Bertaco & Malabarba, 2013
    rank: species
    sourceDatasetId: "1010"
    checkedAt: 2026-09-27
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: N
        scientificName: Animalia
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CH2
        scientificName: Chordata
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V3
        scientificName: Vertebrata
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V5
        scientificName: Gnathostomata
        authorship: null
        rank: infraphylum
        status: accepted
        sourceDatasetId: null
      - id: 8VVWB
        scientificName: Osteichthyes
        authorship: null
        rank: parvphylum
        status: accepted
        sourceDatasetId: null
      - id: 8VR36
        scientificName: Actinopterygii
        authorship: null
        rank: gigaclass
        status: accepted
        sourceDatasetId: "1010"
      - id: KTWM8
        scientificName: Actinopteri
        authorship: null
        rank: superclass
        status: accepted
        sourceDatasetId: "1010"
      - id: 8V4VD
        scientificName: Teleostei
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "1010"
      - id: X2
        scientificName: Characiformes
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "1010"
      - id: DDF58
        scientificName: Acestrorhamphidae Eigenmann, 1907
        authorship: Eigenmann, 1907
        rank: family
        status: accepted
        sourceDatasetId: "1010"
      - id: V94ML
        scientificName: Thayeriinae Ota, Reia & Benine, 2024
        authorship: Ota, Reia & Benine, 2024
        rank: subfamily
        status: accepted
        sourceDatasetId: "1010"
      - id: KVGD5
        scientificName: Hollandichthys Eigenmann, 1910
        authorship: Eigenmann, 1910
        rank: genus
        status: accepted
        sourceDatasetId: "1010"
      - id: 3M86Z
        scientificName: Hollandichthys taramandahy Bertaco & Malabarba, 2013
        authorship: Bertaco & Malabarba, 2013
        rank: species
        status: accepted
        sourceDatasetId: "1010"
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
        - plazi_archive_3m86z
        - bertaco_malabarba_2013
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Captive, domesticated, and escaped occurrences were not assessed by this source slice.
      fossil: Fossil occurrence and geological age were not assessed by this source slice.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 1
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3M86Z
            stableId: col:3M86Z@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage 3M86Z; exact name, authorship, rank, status, sourceDatasetId, and complete accepted parent chain.
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3M86Z. https://doi.org/10.48580/dgywk.
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - scope
        - referenceId: ref-87f4c298-50f7-82e9-ab50-674ba16b4d05
          metadataVariant: 0
          sourceKey: plazi_archive_3m86z
          usage:
            licenseAppliesTo: Extracted Plazi archive description records only; not the cited journal article, DOI page, PDF, or figures.
            stableId: PlaziArchiveSha256:4b4c7d3cc01622331792cca5ac524ff0bf497472ac43123de5873cf7d495a01f
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: aggregate-declaration-only
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - licenseAssessment
            - attribution
            - scope
        - referenceId: ref-bd6f1725-99b2-88bf-a9a3-487d47bf40da
          metadataVariant: 0
          sourceKey: bertaco_malabarba_2013
          usage:
            licenseAppliesTo: Bibliographic citation only; no article prose, PDF, or figures are redistributed.
            stableId: doi:10.1590/S1679-62252013000400004
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: unknown
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - locator
            - license
            - licenseAssessment
            - licenseAppliesTo
            - attribution
            - scope
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - bertaco_malabarba_2013
              - plazi_archive_3m86z
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - bertaco_malabarba_2013
              - plazi_archive_3m86z
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/3
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Hollandichthys taramandahy

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
The Plazi projection's direct COL identifier 3M86Z was matched to exactly one accepted COL26.8 species usage and checked against its exact name, authorship, source dataset, and accepted parent chain. The projection has no sourceColUsageId or synonym redirect for this record; no fuzzy match was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Accepted COL26.8 identity 3M86Z; source article treatment B865879AFFCAC57BFC5E29ADFAF7F974; this linkage does not establish full scientific-concept equivalence across all literature.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims concern taxonomic specimens, collection records, or habitat observations described in the cited treatment; broader population status and coverage are not assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1010
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Description-extension rows 4, 5, 8 for direct COL26.8 usage 3M86Z; source ZIP is absent and embedded EML was not rechecked.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Plazi TreatmentBank, selected fish treatment rows; archive declaration and import hashes are retained in data/sources/plazi-descriptions-import-ledger.json.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Article-scoped extracted treatment records; not a complete species dossier.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Taxon diagnosis p. 769 (Plazi row 4); morphology and sexual dimorphism pp. 770-774 (row 5); ecological notes p. 774 (row 8). Material examined and locality/date for lot MCP 24621 are on p. 769.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Bertaco, Vinicius A., Malabarba, Luiz R. (2013): A new species of the characid genus Hollandichthys Eigenmann from coastal rivers of southern Brazil (Teleostei: Characiformes) with a discussion on the diagnosis of the genus. Neotropical Ichthyology 11 (4): 767-778.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Cited taxonomic article; item-level reuse rights remain unknown.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The treatment distinguishes Hollandichthys taramandahy from H. multifasciatus by a small black spot at the base of the median caudal-fin rays, lack of distinctive adipose-fin marks, and absence of a humeral spot in specimens over 60 mm SL. In the comparative diagnosis, dorsal and ventral procurrent caudal-fin ray counts were 8-11 (mode 10, n=20) and 7-8 (mode 8, n=20), respectively, versus 10-15 (mode 12, n=72) and 9-12 (mode 10, n=72) for H. multifasciatus. The description also reports retrorse bony hooks on the anal and pelvic fins of sexually mature males. Counts and traits are limited to the treatment's examined specimens and stated comparison samples.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Plazi description-extension row 4 (diagnosis), row 5 (description); treatment https://treatment.plazi.org/id/B865879AFFCAC57BFC5E29ADFAF7F974; original article p. 769 (Plazi row 4) and pp. 770-774 (row 5); DOI 10.1590/S1679-62252013000400004; source archive 033dea15-2311-43cb-8a89-cbb8e73e7988.zip; archive SHA-256 4b4c7d3cc01622331792cca5ac524ff0bf497472ac43123de5873cf7d495a01f. Source ZIP absent from checkout; embedded EML not rechecked. Article item-level reuse rights unknown.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Comparative diagnosis on p. 769 and specimen description on pp. 770-774 in the 2013 treatment. Ray counts are the diagnosis's stated samples (n=20 for H. taramandahy and n=72 for H. multifasciatus); no population-wide variation estimate is inferred.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Morphology of specimens described in the taxonomic treatment; the male hook character is explicitly reported for sexually mature males. No universal claim about all individuals or life stages is made.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Selected diagnostic and descriptive characters come from one taxonomic treatment and its stated comparative or examined samples; neither dossier assesses variation across all populations or life stages. The Microglanis lundbergi article's morphometric table reports n=9 while its listed type series totals 10 specimens; that difference is unresolved.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No systematic reproductive, developmental, lifespan, or full behavioral life-history search was performed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
For specimens reported in this treatment, the authors describe captures in lateral river puddles and very small tributaries with shallow, still black water, muddy and leaf-covered bottoms, and dense riparian vegetation. They report larger specimens (70-80 mm SL) found alone and smaller specimens (30-40 mm SL) collected in groups of 3-6. Stomach contents from three MCP 24621 specimens contained spiders, ants, beetles, and insect parts. These observations are limited to the article's collection and stomach-content samples, not a species-wide habitat or diet rule.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Plazi description-extension row 8 (biology_ecology); treatment https://treatment.plazi.org/id/B865879AFFCAC57BFC5E29ADFAF7F974; original article p. 774 (Plazi row 8); material and locality/date for MCP 24621 on p. 769; DOI 10.1590/S1679-62252013000400004; source archive 033dea15-2311-43cb-8a89-cbb8e73e7988.zip; archive SHA-256 4b4c7d3cc01622331792cca5ac524ff0bf497472ac43123de5873cf7d495a01f. Source ZIP absent from checkout; embedded EML not rechecked. Article item-level reuse rights unknown.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Ecological notes on p. 774 refer to the paper's examined collections. The three stomach-content specimens are lot MCP 24621, listed on p. 769 from the rio do Ouro tributary at Maquiné, Rio Grande do Sul (type locality), collected 31 August 1999. Habitat observations are not extrapolated to unreported sites or all populations.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild collection observations and contents from three prepared specimens only; no species-wide trophic or behavioral inference is made.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Habitat and diet claims are limited to the selected treatment notes, collection labels, localities, and sample sizes. Sampling completeness, seasonal ecology, trophic importance, and species-wide habitat preferences remain unassessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic or population-genetic evidence is assessed in this source slice.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Taxonomic article localities are retained only as reported collection context and do not establish a current, complete range or trend.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No conservation assessment, population trend, or threat evaluation is assessed in this source slice.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only morphology and ecology are partially supported by one taxonomic treatment; five facets remain not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Claims are limited to the treatment rows, stated comparative samples, examined specimens, collection localities, and label-derived observations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The article-level text reuse license is unknown; the ledger CC0 declaration applies only to extracted Plazi rows.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
The source ZIP is absent from this checkout and its embedded EML was not rechecked; no independent external review has been completed.
<!-- /evo:text -->
