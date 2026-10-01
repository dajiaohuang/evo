---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Paenibacillus hubeiensis Kong et al., 2025
    rank: species
    sourceDatasetId: "2015"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
        - lpsn
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: No domesticated or captive populations were studied or inferred.
      fossil: Fossil evidence was not assessed; no fossil-presence or fossil-absence claim is made.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 26
          sourceKey: col
          usage:
            licenseAppliesTo: COL26.8 nomenclatural usage only
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            version: COL26.8 pinned 2026-08-20; accepted usage checked 2026-09-24
            attribution: Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            url: https://www.checklistbank.org/dataset/316115/taxon/VQ56S
            stableId: VQ56S
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
          originalFields:
            - id
            - title
            - version
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - url
            - stableId
            - locator
        - referenceId: ref-bd22fc82-86ef-850d-a4ce-ef5fceff7ccc
          metadataVariant: 0
          sourceKey: lpsn
          usage:
            licenseAppliesTo: LPSN nomenclatural source data and pinned crosswalk only
            stableId: "66675"
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
          originalFields:
            - id
            - title
            - version
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - url
            - stableId
            - locator
        - referenceId: ref-ea4a3480-be4c-8a3e-a3e8-bd602d3d6661
          metadataVariant: 0
          sourceKey: paper
          usage:
            stableId: 10.3390/microorganisms13071559
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAssessment
            - scope
            - attribution
    systematicSearch:
      date: 2026-09-24
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: ChecklistBank dataset 316115 taxon VQ56S; data/sources/bacteria-lpsn-crosswalk-col26.8.json.gz; LPSN record 66675; DOI 10.3390/microorganisms13071559; PMCID PMC12300063
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
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - paper
            locator: Species description, section ‘Description of Paenibacillus hubeiensis sp. nov.’; type strain ES5-4T
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
              - paper
            locator: Abstract; species description and strain isolation account
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - paper
            locator: Abstract; phylogenetic and genomic comparison sections; bac120 tree and ANI/dDDH results
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - paper
            locator: Abstract; strain isolation account
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
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
---

# Paenibacillus hubeiensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage VQ56S was checked by API fields for full scientific name Paenibacillus hubeiensis Kong et al., 2025, authorship Kong et al., 2025, species rank, accepted status and source dataset 2015. The pinned COL26.8 LPSN source-record crosswalk maps this exact COL ID to LPSN record 66675; the linked LPSN record was checked for matching name usage and nomenclatural status. No name-only or fuzzy join was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
This establishes a nomenclatural usage crosswalk only; it does not establish full biological species-concept equivalence.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Biological observations refer only to the wild-origin type strain and observations reported in the cited species description; no field population generalization is made.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Name usage identity fields only: taxon ID, accepted scientific name, authorship, rank, status, and source dataset ID. No biological claims are derived from COL.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Pinned COL26.8 accepted usage VQ56S; API fields name, authorship, species rank, accepted status, and sectorDatasetKey 2015
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Freese et al. (2026), List of Prokaryotic names with Standing in Nomenclature (LPSN), https://doi.org/10.1093/nar/gkaf1110
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
The exact release-pinned COL ID to LPSN ID mapping and name usage nomenclature only; no biological claims or complete species-concept equivalence are inferred.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Release-pinned exact crosswalk row COL VQ56S -> LPSN record 66675; row response SHA-256 6315e7d456581879a3a48ffedb89826c0a61874884bb56434c638cea49231cfd; linked LPSN item record 66675 supplies matching name usage and nomenclatural status
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Taxon-specific species account and sections named in each facet claim; original article and item-level license metadata linked by DOI/PMCID
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Article text and original article material under the article's stated CC BY 4.0 license; third-party material may have separate terms. Claims here are paraphrases with attribution.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Kong et al. (2025), Paenibacillus hubeiensis sp. nov.: A Novel Selenium-Resistant Bacterium Isolated from the Rhizosphere of Galinsoga parviflora in a Selenium-Rich Region of Enshi, Hubei Province, DOI 10.3390/microorganisms13071559
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Bounded identity check for COL26.8 usage VQ56S and its LPSN source record, plus claim extraction from the single cited peer-reviewed species description.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Queried the pinned ChecklistBank COL26.8 API for the exact COL ID and compared scientific name, authorship, rank, accepted status and source dataset ID. Checked the release-pinned COL-ID-to-LPSN-ID crosswalk and linked LPSN taxon record. Biological statements are restricted to the item-level species account and its cited section/table locators. No systematic multi-database, fossil, life-history, conservation or global-distribution search was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Only exact accepted COL26.8 identity fields, release-pinned LPSN crosswalk identity, and statements expressly reported in this species account.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only joins; general genus or family claims; observations from other species; inferred global range, fossil, conservation or life-history claims; unsearched facets.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The type strain ES5-4T is described as Gram-positive, motile, aerobic and rod-shaped. The authors also report milky, circular, moist, smooth colonies after three days on TSA at 28 °C.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
The cultured type strain and the conditions stated in the species description.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This is a bounded type-strain description, not a survey of morphology across populations, developmental states or environmental conditions.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The cited taxonomic treatment is not a life-history study. Reproductive, developmental, behavioral and lifespan claims were not assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The type strain was isolated from the rhizosphere of Galinsoga parviflora in a selenium-rich ore area of Enshi, Hubei Province, China. The paper reports laboratory tolerance of selenite up to 5000 mg/L; that assay result is not evidence of a field threshold or ecological function.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
One cultured type strain and the paper's stated collection context; the selenite value is an in-vitro assay result.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
No population ecology, interaction network, abundance, field exposure distribution or complete habitat survey was assessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The authors place ES5-4T within Paenibacillus using 16S rRNA and a bac120 phylogenomic tree, and report ANI and dDDH values below their stated species-level cutoffs against close type strains. This records the authors' taxonomic evidence, not a comprehensive or independently reviewed species-tree conclusion.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The strains, markers, genome comparisons and methods analyzed in this 2025 paper.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Alternative taxon sampling, later revisions, gene-tree discordance and independent phylogenomic review were not assessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The paper reports the type strain from the Galinsoga parviflora rhizosphere in the selenium-rich ore area of Enshi, Hubei Province, China.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
The reported type-strain collection locality only; this is not a global range claim.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No additional localities, native or introduced range, georeferenced boundary or sampling completeness were established.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No paleontological or fossil database search was conducted; no fossil-presence or fossil-absence conclusion is made.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No conservation assessment or current formal Red List record was assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one bounded species description was assessed; several biological facets remain not-assessed or locally scoped.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The exact nomenclatural crosswalk does not independently establish full biological species-concept equivalence.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review or comprehensive multi-source search has been completed.
<!-- /evo:text -->
