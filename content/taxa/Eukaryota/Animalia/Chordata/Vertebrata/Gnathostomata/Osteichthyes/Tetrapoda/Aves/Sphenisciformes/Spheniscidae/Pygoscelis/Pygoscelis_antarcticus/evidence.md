---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: "Pygoscelis antarcticus (J. R. Forster, 1781)"
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-10-02
    name:
      en: "Chinstrap Penguin"
      zh: "帽带企鹅"
    reviewStatus: source-linked
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/1
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/1
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: COL26.8 ChecklistBank accepted species usage 4QPKS
            url: https://www.checklistbank.org/dataset/316115/taxon/4QPKS
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
            - scope
        - referenceId: strycker2020-chinstrap-global-population
          metadataVariant: 0
          sourceKey: chinstrapGlobal2020
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
            license: CC BY 4.0
            licenseEvidenceLocator: "Article copyright and licence statement specifies Creative Commons Attribution 4.0 International."
            licenseAppliesTo: "Article text; no figures or third-party materials are reused."
            licenseUrl: https://creativecommons.org/licenses/by/4.0/
            licenseAssessment: item-level-verified
            attribution: "Strycker, N. et al. (2020), A global population assessment of the Chinstrap penguin (Pygoscelis antarctica), https://doi.org/10.1038/s41598-020-76479-3"
          originalFields:
            - id
            - title
            - url
            - scope
            - license
            - licenseAppliesTo
            - attribution
            - licenseEvidenceLocator
            - licenseUrl
            - licenseAssessment
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
---

# Pygoscelis antarcticus (J. R. Forster, 1781)

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pins the COL26.8 accepted scientific name, authorship, rank and parent identity for this reader page.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定本页采用的 COL26.8 接受名、作者、等级与父分类身份。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Combines field counts, drone and satellite imagery, and historical records to compile 398 sites; estimates 3.42 million breeding pairs across 375 extant colonies. Trend comparisons remain unavailable for about 35% of colonies, and the estimate mixes survey dates and precision levels.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
综合地面计数、无人机与卫星影像及历史记录，整理 398 个地点；估计 375 个现存繁殖群共有 342 万对。约 35% 的繁殖群缺少可用趋势比较，估值的调查年份与精度并不一致。
<!-- /evo:text -->
