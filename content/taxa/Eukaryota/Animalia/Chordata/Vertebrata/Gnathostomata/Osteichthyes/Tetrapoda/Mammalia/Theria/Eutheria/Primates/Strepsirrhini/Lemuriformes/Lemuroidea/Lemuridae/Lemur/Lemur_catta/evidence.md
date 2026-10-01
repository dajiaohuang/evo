---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Lemur catta Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 环尾狐猴
      en: Ring-tailed lemur
    reviewStatus: source-linked
    checkedAt: 2026-09-29
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-694b549d-3fba-8e0d-a712-a4490c14deb7
          metadataVariant: 0
          sourceKey: chandrashekar2020
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3T528
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Lemur catta Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
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
        - chandrashekar2020
    lifeStatusScope:
      wild: The selected primary study concerns wild sampled animals; claims retain its sample and locality limits.
      domesticated: Domestication and captive history have not been assessed.
      fossil: Fossil evidence has not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3T528
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:3T528@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3T528.
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
        - referenceId: ref-b784498c-c447-81e0-a2c3-8d16a36241d2
          metadataVariant: 0
          sourceKey: chandrashekar2020
          usage:
            licenseAppliesTo: The published article text; no third-party material or supplementary dataset is reused.
            stableId: doi:10.1002/ece3.6337
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
            accessedAt: 2026-09-24
          originalFields:
            - id
            - title
            - url
            - version
            - publishedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - stableId
            - accessedAt
    facets:
      morphology:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: not-assessed
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
              - chandrashekar2020
            locator: Abstract; Results 3.2 Population genetic structure
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            sourceIds:
              - chandrashekar2020
            locator: Methods 2.1 Sample collection and Table 1; Figure 2
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
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
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Lemur catta

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
马达加斯加九个地点采集 106 只成年个体；遗传结构结论限于研究使用的多位点标记和样本。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
106 adults sampled at nine sites in Madagascar; genetic-structure findings are limited to the study's multilocus markers and sample.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage verified from ChecklistBank dataset 316115, including verbatim name/authorship, rank, status, sourceDatasetId and classification.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted usage 3T528. Biological statements below are limited to the 2020 paper's sampled adult individuals and localities; the paper's background citations are not treated as newly assessed evidence.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 3T528; exact scientific name, authorship, rank, accepted status, sourceDatasetId 2144 and full classification chain
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: pinned COL26.8 taxonomic record and classification.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Methods 2.1 Sample collection and Table 1; Results 3.2 Population genetic structure; Discussion 4.1 Genetic diversity and population structure
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary population-genetic study using multilocus genotypes from 106 adult ring-tailed lemurs at nine localities in southern Madagascar. Claims are paraphrased and bounded to those samples, markers, analyses and collection period. No figures, tables, datasets or supplementary files are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Chandrashekar A, Knierim JA, Khan S, Raboin DL, Venkatesh S, Clarke TA, Cuozzo FP, LaFleur M, Lawler RR, Parga JA, Rasamimanana HR, Reuter KE, Sauther ML, Baden AL (2020). Genetic population structure of endangered ring-tailed lemurs (Lemur catta) from nine sites in southern Madagascar. Ecology and Evolution 10(15):8030-8043. https://doi.org/10.1002/ece3.6337. Claims paraphrased under CC BY 4.0.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
No direct, scope-bounded morphology evidence was assessed in the selected source.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No direct, scope-bounded lifeHistory evidence was assessed in the selected source.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
No direct, scope-bounded ecology evidence was assessed in the selected source.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The study's multilocus analyses found moderate genetic differentiation among sampled localities, with geographically structured northern, southern, western and potentially central clusters. This describes population structure inferred from the study's markers and nine sites; it is not a species-level phylogeny or a complete evolutionary history.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
106 adult individuals sampled at nine geographically representative localities; analyses and marker set reported in the 2020 study.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild adult samples only.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The selected paper supports only the bounded claim above; no comprehensive evolution assessment was performed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The paper sampled nine localities across the authors' stated existing range in southern Madagascar, including northeastern, central, southeastern and western sites. The locality list is a study sample and does not establish a complete or current range boundary.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Locality records selected for the 2020 study; not an exhaustive occurrence inventory.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild locality samples.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The selected paper supports only the bounded claim above; no comprehensive distribution assessment was performed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No direct, scope-bounded fossil evidence was assessed in the selected source.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No direct, scope-bounded conservation evidence was assessed in the selected source.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one selected primary study was assessed; unsupported facets remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic current-literature search or independent expert review has been completed.
<!-- /evo:text -->
