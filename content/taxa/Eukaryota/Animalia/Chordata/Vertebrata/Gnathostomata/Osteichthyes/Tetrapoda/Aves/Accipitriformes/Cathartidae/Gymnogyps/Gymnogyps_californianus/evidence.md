---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Gymnogyps californianus (Shaw, 1797)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 加州神鹫
      en: California condor
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
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/3/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-aa80bd53-be80-8dee-a17d-f2687c2c8b27
          metadataVariant: 0
          sourceKey: usfws2025
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
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/3HSM2
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
    scientificName: Gymnogyps californianus (Shaw, 1797)
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
        - col26
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication has not been assessed; captive breeding is not treated as domestication.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 12
          sourceKey: col26
          usage:
            licenseAppliesTo: Identity and classification metadata only; no biological prose is copied.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3HSM2
            stableId: COL26.8:3HSM2
            version: COL26.8 release 2026-08-20; ChecklistBank dataset 316115; source dataset ITIS version 2026-07-28
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            attribution: Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, taxon usage 3HSM2; underlying source dataset ITIS 2144.
            licenseAssessment: identity-only
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
        - referenceId: ref-40a24bcf-58b6-8f25-a3b5-255d956a2755
          metadataVariant: 0
          sourceKey: usfws2025
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: "FWS media record: 2025-california-condor-population-status-report"
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            attribution: U.S. Fish and Wildlife Service, California Condor Recovery Program. 2025 Annual Population Status. Published 2026-02-25.
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
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
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
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
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - usfws2025
            locator: PDF p. 1, lines 0-15 and 39-42
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
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

# Gymnogyps californianus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
恢复计划截至 2025-12-31 的全球管理种群统计，包括野外自由飞行和圈养个体、各区域计数、年度繁殖／放归／死亡与历史死因。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Recovery-program counts as of 2025-12-31, including free-flying wild and captive birds, regional totals, annual fledging/releases/deaths, and historical causes of death.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank, and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 pinned registry search row checked for usage ID, verbatim accepted scientific name including authorship, species rank, accepted status, source dataset ID, and Aves classification.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal accepted species usage 3HSM2 in COL26.8. The federal recovery report names Gymnogyps californianus and reports its managed world population; this record does not reconcile every external species concept or infer a current legal or global extinction-risk category.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The 2025 population report separates the reported wild free-flying total from captive birds; the claim preserves that distinction and its December 31, 2025 reference date.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source dataset 2144 ITIS
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Pinned registry search row 3HSM2: exact scientificName, rank species, status accepted, sourceDatasetId 2144, classification includes Aves
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted-name identity, authorship, rank, status, source dataset, and Aves classification only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Report text and tabulated population figures as listed on the USFWS media record; excludes any third-party material if separately identified.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
PDF p. 1, lines 0-15: total world population 607 and wild population 392 as of 2025-12-31; p. 1, lines 39-42: captive population 215 and its scope
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Recovery-program population accounting across the world population, including free-flying wild and captive birds; dated 2025-12-31. Counts are not a formal threat-category assessment.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
No species-level morphology or identification evidence was assessed in this bounded batch.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No life-history or reproductive evidence was assessed in this bounded batch.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Population accounting alone does not assess ecological interactions, habitat, or diet.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-level evolutionary or phylogenetic study was assessed in this bounded batch.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The report's management totals do not establish a complete geographic range or locality inventory.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No bounded fossil-record search was conducted.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
The California Condor Recovery Program's annual status report counted 607 birds in the world population, including 392 wild free-flying birds and 215 captive birds, as of December 31, 2025. These are dated program counts, not a formal extinction-risk assessment or a current legal-listing conclusion.
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
World population managed by the recovery program; reference date 2025-12-31. The report separately identifies wild free-flying birds and captive birds.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Mixed global program total: 392 wild free-flying and 215 captive birds; not a domesticated population claim.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
A current formal global or national extinction-risk assessment, criteria, and assessment date have not been reviewed; the report is population monitoring, not a status-category assessment.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only bounded population-monitoring evidence was assessed for conservation; six facets remain not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
A systematic literature search and external expert review have not been completed.
<!-- /evo:text -->
