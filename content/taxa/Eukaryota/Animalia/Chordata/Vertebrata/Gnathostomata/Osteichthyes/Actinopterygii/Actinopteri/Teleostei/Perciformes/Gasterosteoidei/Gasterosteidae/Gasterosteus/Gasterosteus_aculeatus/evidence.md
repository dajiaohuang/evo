---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Gasterosteus aculeatus Linnaeus, 1758
    authorship: Linnaeus, 1758
    rank: species
    sourceDatasetId: "1010"
    checkedAt: 2026-09-25
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
    lifeStatusScope:
      wild: Breeding adult fish of both ecotypes were collected from a North Uist saltwater lagoon in 2023.
      domesticated: Domestication was not assessed.
      captive: Embryos were incubated and observed in laboratory dishes at 14 degrees Celsius; no captive adult population was studied.
      fossil: No fossil occurrence or geological age was assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3FCKT
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:3FCKT@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3FCKT. https://doi.org/10.48580/dgywk
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-e31c6049-bde5-87bb-ad0b-ad3598271b53
          metadataVariant: 0
          sourceKey: barnes2024
          usage:
            licenseAppliesTo: Article text under its article-level CC BY 4.0 notice; separately credited third-party material is excluded.
            stableId: doi:10.1371/journal.pone.0295485
            accessedAt: 2026-09-25
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
    systematicSearch:
      date: 2026-09-25
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 dataset 316115 usage 3FCKT; PLOS ONE DOI 10.1371/journal.pone.0295485.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      searcher: Evo source audit
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - barnes2024
            locator: Results > Development of embryos, days 5 and 7; Figures 3–4; embryos staged from fertilisation at daily intervals.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            sourceIds:
              - barnes2024
            locator: Methods > Fish collection and crosses; Results > Hatching success and time to hatch; Figure 1; Table 1.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - barnes2024
            locator: Methods > Fish collection and crosses; Abstract, description of two sympatric saltwater ecotypes.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
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
      - id: PC
        scientificName: Perciformes
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "1010"
      - id: KVB4B
        scientificName: Gasterosteoidei
        authorship: null
        rank: suborder
        status: accepted
        sourceDatasetId: "1010"
      - id: KV98H
        scientificName: Gasterosteidae Bonaparte, 1831
        authorship: Bonaparte, 1831
        rank: family
        status: accepted
        sourceDatasetId: "1010"
      - id: KVB4C
        scientificName: Gasterosteus Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: genus
        status: accepted
        sourceDatasetId: "1010"
      - id: 3FCKT
        scientificName: Gasterosteus aculeatus Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: species
        status: accepted
        sourceDatasetId: "1010"
---

# Gasterosteus aculeatus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage 3FCKT verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species represented by COL26.8 accepted usage 3FCKT. The cited study used wild-bred North Uist ecotypes, then incubated their embryos under a specified laboratory temperature; results are not species-wide developmental constants.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1010
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 3FCKT; exact name, authorship, rank, status, sourceDatasetId 1010, and full accepted parent chain.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Methods > Fish collection and crosses; Results > Hatching success and time to hatch; Results > Development of embryos; Figures 1, 3–5; Tables 1–2.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary embryo-development study of migratory and lagoon-resident North Uist ecotypes; the article text is paraphrased, without reusing figures or third-party material.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Barnes M, Chakrabarti L, MacColl ADC (2024). PLOS ONE 19(7):e0295485. https://doi.org/10.1371/journal.pone.0295485. Claims paraphrased from article text.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and a focused review of one primary study describing North Uist stickleback embryos and hatching at 14 degrees Celsius; this is not a seven-facet literature review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified accepted COL26.8 usage and parent chain in the pinned registry. Read the publisher article's collection, incubation, results, limitations and item-level rights notice. No multi-database or facet-by-facet species review was completed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary article naming Gasterosteus aculeatus and reporting the fish source, ecotypes, laboratory temperature, embryo observations, hatching results and item-level reuse terms.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Species-wide developmental constants, unstudied populations, causal explanation, global distribution, phylogeny, fossil, and conservation claims; secondary-source claims not independently verified at their originals.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
In the North Uist lagoon-resident clutches incubated at 14 degrees Celsius, daily observations recorded a visible heartbeat by day 5; by day 7 yolk-sac circulation and developing pectoral fins could be seen. This is an embryo-stage description under the study's incubation conditions, not a diagnostic description of adult morphology.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Laboratory observations of embryos from breeding crosses made with North Uist saltwater-lagoon fish collected 30 April–19 May 2023; incubation at 14 degrees Celsius.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild-bred parents; embryos incubated in laboratory dishes.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only selected embryonic stages under one temperature and source population are described; adult diagnostic morphology, sexes, age classes, variation across populations, and identification limits remain unassessed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
At 14 degrees Celsius, embryos from six migratory and six lagoon-resident North Uist crosses hatched earlier in the migratory ecotype: mean first hatch was 11.7 versus 13.2 days after fertilisation, and mean 50-percent-clutch hatch was 12.2 versus 13.7 days. Hatching success did not differ significantly in this small clutch experiment; these timings do not establish a species-wide rate.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Crosses using breeding fish collected at Loch an Duin, North Uist, Scotland, 30 April–19 May 2023; embryos raised at 14 degrees Celsius; six clutches per ecotype.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild-bred parents; eggs and embryos were maintained under laboratory conditions.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The study covers embryonic development to hatching in two local ecotypes only; other life stages, reproduction in natural nests, survival, lifespan, and replication across environments remain unassessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The study collected breeding migratory and lagoon-resident three-spined stickleback from the same North Uist saltwater lagoon, Loch an Duin, during the 2023 breeding season, and established separate crosses for each ecotype. This establishes local co-occurrence at the collection site and period only; it is not a distribution estimate.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Loch an Duin, a saltwater lagoon in northeast North Uist, Scotland; fieldwork 30 April–19 May 2023.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild breeding adults were caught for crosses; embryos were subsequently incubated in laboratory dishes.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
One breeding-season collection does not describe habitat breadth, diet, species interactions, migration routes, or other populations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-specific phylogenetic or comparative evolutionary analysis was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The collection site is not a global or range-wide distribution assessment.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence or bounded fossil-record search was assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current assessment, population trend, or threat analysis was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One primary study supports only selected embryonic, hatching, and collection-site facts.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Four facets remain not assessed; results are limited to two local ecotypes and a laboratory temperature.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No multi-source species review or independent external expert review has been completed.
<!-- /evo:text -->
