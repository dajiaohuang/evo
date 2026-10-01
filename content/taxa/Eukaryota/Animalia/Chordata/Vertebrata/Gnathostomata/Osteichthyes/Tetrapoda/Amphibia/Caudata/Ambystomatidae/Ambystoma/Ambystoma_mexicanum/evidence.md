---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Ambystoma mexicanum (Shaw & Nodder, 1798)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-26
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
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Laboratory breeding is not treated as domestication; domestication history has not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 8
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/CQ4M
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:CQ4M@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage CQ4M; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage CQ4M. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-62ad50f3-355b-884e-a9ab-2a108a62cbd4
          metadataVariant: 0
          sourceKey: nowoshilow2018
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1038/nature25458
            accessedAt: 2026-09-24
            locator: "Abstract; Methods: genomic DNA preparation; Results: Reduced Pax-family complement"
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
        - referenceId: ref-bb06778b-4d70-8271-a63a-4a34eb321f1f
          metadataVariant: 0
          sourceKey: ramos2025axolotlmovement
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0314257
            accessedAt: 2026-09-26
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0314257
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
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - scope
    facets:
      morphology:
        status: not-assessed
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - ramos2025axolotlmovement
            locator: Abstract; Methods, Study areas and Data collection; Results, Home range size.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            sourceIds:
              - nowoshilow2018
            locator: Abstract; Methods, genomic DNA preparation; Results, Reduced Pax-family complement
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
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
---

# Ambystoma mexicanum

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, source dataset and Amphibia classification verified against the pinned registry search record.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 usage CQ4M only. The evolutionary evidence is a single laboratory genome and its associated experiments; the ecology evidence is a short VHF post-release study of 18 captive-bred axolotls at two aquatic sites in southern Mexico City. These observations do not constitute a species-wide or range-wide synthesis.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The ecology study released captive-bred animals and followed them for short periods at an artificial wetland and a restored chinampa in southern Mexico City. Those post-release observations are not treated as wild-born population traits or evidence of long-term establishment. The genomic source used laboratory material.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article content except third-party material identified as excluded in individual credit lines; claims paraphrase the article text, not figures or excluded media.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Whole-genome assembly and comparative/evolutionary analysis from a three-year-old d/d adult male axolotl, with follow-up Pax7 gene-editing results; not a survey of population variation.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Nowoshilow S, Schloissnig S, Fei JF, et al. (2018). The axolotl genome and the evolution of key tissue formation regulators. Nature 554: 50–55. https://doi.org/10.1038/nature25458. Claims here are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article content covered by its license; any third-party exclusions remain governed by individual credit lines. This record paraphrases article text and reproduces no figures or tables.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract for site-level mean home-range comparison; Methods §§Study areas, Ethics statement, Study species and transmitters, and Data collection for locations, captive origin, sample sizes and telemetry dates; Results §Home range size for method and estimates.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Ramos AG, Mena H, Schneider D, Zambrano L (2025). Movement ecology of captive-bred axolotls in restored and artificial wetlands: Conservation insights for amphibian reintroductions and translocations. PLoS ONE 20(4):e0314257. https://doi.org/10.1371/journal.pone.0314257. Claim paraphrased; no figures or tables reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
VHF telemetry study of 18 laboratory-born and captive-raised axolotls released to two aquatic sites in southern Mexico City. The claim is limited to post-release home-range estimates at these sites and study windows; it is not a range-wide ecology estimate or evidence of a self-sustaining wild population.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
After release of 18 captive-bred axolotls into two aquatic sites in southern Mexico City, VHF telemetry produced total MCP home-range estimates averaging 2,747 m² for the eight tracked at the artificial La Cantera Oriente wetland and 382 m² for the ten tracked at a restored chinampa in Lake Xochimilco; the difference was statistically significant (p < 0.001).
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
18 只圈养繁殖的美西螈被放归到墨西哥城南部两处水域后，VHF 遥测所得总 MCP 家域估计值中，拉坎特拉东方人工湿地 8 只个体的平均值为 2,747 m²，索奇米尔科湖一处修复 chinampa（水上农田湿地）10 只个体的平均值为 382 m²；差异具有统计学显著性（p < 0.001）。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Two aquatic sites in southern Mexico City. Eight animals at La Cantera Oriente were tracked from 2017-10-27 to 2017-12-07; ten animals at a restored Lake Xochimilco chinampa were released on 2018-03-12 and monitored through 2018-04-20. VHF telemetry; sites and seasons differed.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
All 18 study animals were born and raised in captivity before release into the study wetlands. The short post-release monitoring does not establish wild-born ecology, long-term establishment, or a self-sustaining population.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This short, small-sample post-release study does not establish range-wide habitat use, seasonal or geographic variation, a wild-born baseline, long-term survival and reproduction, or whether site differences caused the home-range contrast.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The authors reported that the assembled axolotl genome lacks Pax3, and that mutation of its Pax7 paralogue produced a phenotype similar to Pax3- or Pax7-mutant mice; the genomic sample came from one three-year-old d/d adult male.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
A single laboratory-bred d/d male supplied genomic DNA; the 2018 article presents comparative genomic and gene-editing results, not a population survey.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
The source concerns laboratory material and experimental mutants; it does not establish the frequency of these genomic traits across wild populations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
One genome assembly and associated experiments do not resolve genomic variation across the species, the evolutionary timing of the reported changes, or broader evolutionary history.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The record combines a single-individual laboratory-genomics study and short-term post-release ecology from two captive-bred samples; morphology, life history, distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Systematic literature coverage, wild-born ecology, long-term population outcomes and variation across the accepted species concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
