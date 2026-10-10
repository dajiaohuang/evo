---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leiothrichidae
    rank: family
    sourceDatasetId: "2144"
    name:
      zh: Leiothrichidae
      en: Leiothrichidae
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetArgyaHistoricalV7
          - avonetTurdoidesHistoricalV7
          - avonetTrochalopteronHistoricalV7
          - amnioteLifeHistory2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - avonetArgyaHistoricalV7
          - avonetTurdoidesHistoricalV7
          - avonetTrochalopteronHistoricalV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetTurdoidesHistoricalV7
          - avonetTrochalopteronHistoricalV7
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - avonetTurdoidesHistoricalV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetTrochalopteronHistoricalV7
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
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
          - avonetTrochalopteronHistoricalV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Leiothrichidae
            url: https://www.checklistbank.org/dataset/316115/taxon/624XT
            locator: Pinned name, rank and ancestor closure.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: August 2015 archive; 5 authored same-name records placed under Leiothrichidae by pinned COL ancestry.
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
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetTrochalopteronHistoricalV7
          usage:
            title: AVONET v7 — selected Trochalopteron historical records
            url: https://figshare.com/articles/dataset/16586228/7
            accessedAt: 2026-10-03
            locator: 14 selected AVONET1_BirdLife rows within 4918–4935; individual BirdLife–eBird and BirdLife–BirdTree rows and relevant Metadata definitions in receipt.
            scope:
              zh: 十四条历史行；保留来源科名 Leiotrichidae 与目录 Leiothrichidae 的拼写差异及旧 Garrulax 名称。
              en: Fourteen historical rows; retain source family spelling Leiotrichidae versus catalogue Leiothrichidae and older Garrulax names.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - accessedAt
            - locator
            - scope
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetTurdoidesHistoricalV7
          usage:
            title: AVONET v7 — selected Turdoides historical records
            url: https://figshare.com/articles/dataset/16586228/7
            accessedAt: 2026-10-03
            locator: 12 selected AVONET1_BirdLife rows within 4939–4954; each full eBird/BirdTree crosswalk, tu COL name shard and relevant Metadata definitions retained in receipt.
            scope:
              zh: 十二条历史行；保留 Leiotrichidae／Leiothrichidae 和 reinwardii／reinwardtii 拼写，以及样本、体重和生态字段边界。
              en: Twelve historical rows; retain Leiotrichidae/Leiothrichidae and reinwardii/reinwardtii spellings, plus sampling, mass and ecological field boundaries.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - accessedAt
            - locator
            - scope
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetArgyaHistoricalV7
          usage:
            title: AVONET v7 — selected Argya historical records
            url: https://figshare.com/articles/dataset/16586228/7
            accessedAt: 2026-10-03
            locator: 8 selected AVONET1_BirdLife rows within 4819–4827; each eBird and BirdTree crosswalk, ar/tu COL name shards and relevant Metadata definitions retained in receipt.
            scope:
              zh: 八条历史行：保留来源科名 Leiotrichidae 与目录 Leiothrichidae；旧 Turdoides 组合、形态样本、独立文献体重与生态类别分开。
              en: "Eight historical rows: retain source family Leiotrichidae and catalogue Leiothrichidae; retain older Turdoides combinations, morphology samples, separately compiled mass and ecological categories."
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Leiothrichidae
