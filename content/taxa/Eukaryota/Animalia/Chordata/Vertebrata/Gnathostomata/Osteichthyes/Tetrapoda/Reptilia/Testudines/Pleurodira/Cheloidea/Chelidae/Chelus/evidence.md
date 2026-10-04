---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chelus
    rank: genus
    sourceDatasetId: "1008"
    name:
      zh: Chelus 属
      en: Chelus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - taxonomy
        topic: overview
      - text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - chelusNeuroanatomy
        topic: morphology
      - topic: overview
        sourceIds:
          - taxonomy
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: overview
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Chelus
            url: https://www.checklistbank.org/dataset/316115/taxon/87DY8
            locator: Accepted COL26.8 genus usage and parent classification.
            scope:
              zh: 固定 COL26.8 接受名称、阶元与父级分类；不推断现生状态或后代覆盖完整性。
              en: Pinned COL26.8 accepted name, rank and parent classification; no inference about living status or complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
        - referenceId: ref-12a1495c-e3a3-4bd2-b122-6f1a95a588f6
          metadataVariant: 0
          sourceKey: chelusNeuroanatomy
          usage:
            locator: Methods and comparative description of Chelus fimbriata specimen MNHN.ZA.AC A9940; CT scanning and cranial neuroanatomy.
            licenseAssessment: paraphrase-only
            accessedAt: 2026-10-02
            scope:
              zh: 仅支持一具 Chelus fimbriata 比较标本的 CT 扫描、重建及文中描述；不外推为属级特征。
              en: Supports CT scanning, reconstruction and descriptions of one comparative Chelus fimbriata specimen only; not genus-wide generalization.
          originalFields:
            - id
            - title
            - url
            - version
            - publishedAt
            - license
            - licenseEvidenceUrl
            - locator
            - licenseAssessment
            - accessedAt
            - scope
        - referenceId: ref-dcd4aa7d-e2ca-478b-b714-1c8c28b388f3
          metadataVariant: 0
          sourceKey: reptTraitsV12
          usage:
            locator: ReptTraits v1-2; 2 authored records grouped under Chelus by COL26.8 ancestry; per-species source rows preserved in source archive.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            scope:
              zh: 仅概括本批已写入的性状资料，不代表完整后代覆盖。
              en: Only this batch’s authored trait records; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
        - referenceId: ref-d075eefb-2767-428c-ae91-9d089b535c8d
          metadataVariant: 0
          sourceKey: reptTraitsProtocol2024
          usage:
            locator: Methods; Data Records (maximum size, source aggregation, length-to-mass estimates); Usage Notes; workbook Trait definitions and Changes sheets.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-paraphrase
            scope:
              zh: 性状定义、汇总方式与资料缺口；不证明历史名称与固定 COL26.8 概念完全等同。
              en: Trait definitions, aggregation and gaps; not proof of concept equivalence between historical names and pinned COL26.8.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Chelus
