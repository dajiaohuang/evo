---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Occidozyga obscura (Gray, 1831)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Occidozyga obscura
      zh: Occidozyga obscura
    checkedAt: 2026-10-02
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/3/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/4/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/4/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
      - topic: overview
        readerSectionKind: amphibia-collection-placeholder
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
        sourceIds:
          - amphibia-collection-status
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/QT69T
            locator: Complete paginated accepted-species search under Amphibia PH; recorded classification chain.
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
        - referenceId: ref-a9cf3397-9b36-4f89-8a88-a16bfcb71030
          metadataVariant: 0
          sourceKey: lyu-2022
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-amphibia-collection-index-2026-10-03
          metadataVariant: 0
          sourceKey: amphibia-collection-status
          usage:
            locator: docs/amphibia-content/reference-index.md
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
    primaryStudyScopes:
      - doi: 10.3897/vz.72.e80019
        sourceFile: data/sources/snapshots/occidozyga-taxonomy-2022-2026-10-02/article.pdf
        sourceConcept: Occidozyga obscura (Gray, 1831), as redescribed by Lyu et al. (2022)
        evidenceRead: full-primary-taxonomic-account
        contemporaryConceptEquivalence: not-independently-certified
        specimenCount: 10
  amphibia-collection-placeholder:
    name:
      en: Occidozyga obscura
      zh: Occidozyga obscura
    sections:
      - topic: overview
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
    collectionLedgerPath: docs/amphibia-content/full-roster-literature-collection.json
    concepts:
      - authority: COL26.8
        id: QT69T
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00010.json.gz
          field: /records/469
          queryName: Occidozyga obscura
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00030.json.gz
          field: /records/185
          queryName: Houlema obscura
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00030.json.gz
          field: /records/192
          queryName: Osteosternum amoyense
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00045.json.gz
          field: /records/13
          queryName: Oxyglossa lima chinens
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Occidozyga obscura

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Occidozyga obscura
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Accepted name, rank, recorded classification and descendant roster in the pinned catalogue. No biological species synthesis or equivalence with PBDB.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定目录中的接受名称、等级、所记分类和后代名录；没有进行生物学物种综合，也不声明与 PBDB 记录等同。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/locator -->
Taxonomic account of Occidozyga obscura, pp. 504–506; Diagnosis, Re-description, Ecology, Distribution and Conservation status
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Ten examined adults and a dated regional account; historical O. lima records require separate concept reconciliation.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
十只检查成体及有年代限定的区域记述；历史 O. lima 记录需单独核对概念。
<!-- /evo:text -->
