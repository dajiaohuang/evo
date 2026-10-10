---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Lepidochelys
    rank: genus
    sourceDatasetId: "1008"
    name:
      zh: Lepidochelys 属
      en: Lepidochelys
    checkedAt: 2026-10-02
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/1
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
      - topic: readingPath
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/5CG2
            locator: Accepted COL26.8 usage, parent classification and complete strict accepted-species roster.
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
            - locator
        - referenceId: ref-08bc898f-6f33-462e-8689-689fc6d94552
          metadataVariant: 0
          sourceKey: yoshida2022seaTurtles
          usage:
            locator: Materials and Methods, NSM-H6187 micro-CT sample and reconstructed image description.
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9353092/
            licenseAssessment: paraphrase-only
            accessedAt: 2026-10-02
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
            - locator
        - referenceId: ref-1a0e59c8-619e-4b75-9208-0f437b34a917
          metadataVariant: 0
          sourceKey: jones2012headNeckSeaTurtles
          usage:
            locator: Abstract; Materials, Micro-Computed Tomography; Results, head and neck anatomy.
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0047852
            licenseAssessment: paraphrase-only
            accessedAt: 2026-10-02
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
            - locator
        - referenceId: ref-dcd4aa7d-e2ca-478b-b714-1c8c28b388f3
          metadataVariant: 0
          sourceKey: reptTraitsV12
          usage:
            locator: ReptTraits v1-2; 2 authored records grouped under Lepidochelys by COL26.8 ancestry; per-species source rows preserved in source archive.
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
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: August 2015 archive; 2 authored same-name records placed under Lepidochelys by pinned COL ancestry.
            accessedAt: 2026-10-02
            scope:
              zh: 仅本批已写入资料条目的阅读路线，不代表完整后代覆盖。
              en: Route through this batch’s authored records only; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
        - referenceId: ref-50d83663-5d53-4d60-83a3-2b2a8461aa64
          metadataVariant: 0
          sourceKey: amnioteLifeHistoryMethods2015
          usage:
            locator: "Ecological Archives E096-269-D1 metadata: Methods, Class IV definitions; Supplemental Table 9 field definitions."
            accessedAt: 2026-10-02
            scope:
              zh: 中位数、最长寿命最大记录、历史种／亚种数据继承和字段定义。
              en: Medians, maximum longevity, historical species/subspecies inheritance and field definitions.
            sourceRetrievalUrl: https://www.esapubs.org/archive/ecol/E096/269/metadata.php
            sourceVersion: August 2015 archive
            readerBoundaries:
              - No field values treated as independent individual measurements.
              - No guarantee of present taxonomic concept equivalence.
              - Original input papers not individually reviewed.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
            - sourceRetrievalUrl
            - sourceVersion
            - readerBoundaries
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Lepidochelys

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Lepidochelys
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 genus identity, accepted parent chain and complete strict accepted roster. No extant status inferred from PBDB.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8 的属级身份、接受父链和完整严格接受名录；不从 PBDB 推断现生状态。
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Yoshida, Motokawa and Endo (2022): one identified L. olivacea specimen used for micro-CT. No species-level claims are assigned to L. kempii from this study.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Jones et al. (2012) directly describe two immature L. kempii specimens and micro-CT work on M009/08. Claims remain limited to those specimens and the study's comparative framework.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
Jones 等（2012）直接描述两件未成熟 L. kempii 标本，并对 M009/08 开展微型 CT 研究；所有主张均限于这些标本和论文的比较框架。
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
Yoshida、Motokawa 和 Endo（2022）：一份用于微型 CT 的 L. olivacea 具名标本；不依据这项研究对 L. kempii 作种级主张。
<!-- /evo:text -->

