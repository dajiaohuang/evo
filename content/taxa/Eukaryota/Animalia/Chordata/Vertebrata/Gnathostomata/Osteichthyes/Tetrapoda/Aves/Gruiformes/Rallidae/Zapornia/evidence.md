---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Zapornia
    rank: genus
    sourceDatasetId: "2144"
    name:
      zh: Zapornia
      en: Zapornia
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetZaporniaHistoricalV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: sampleComparison
        sourceIds:
          - avonetZaporniaHistoricalV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: ecologicalComparison
        sourceIds:
          - avonetZaporniaHistoricalV7
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
          - avonetZaporniaHistoricalV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Zapornia
            url: https://www.checklistbank.org/dataset/316115/taxon/CPPD8
            locator: Pinned accepted name and recorded ancestry; source-specific older combinations preserved separately.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetZaporniaHistoricalV7
          usage:
            title: AVONET v7 — selected Zapornia historical records
            url: https://figshare.com/articles/dataset/16586228/7
            accessedAt: 2026-10-03
            locator: 8 selected AVONET1_BirdLife rows within 2731–2740; each eBird and BirdTree crosswalk, za/po/am COL name shards and relevant Metadata definitions retained in receipt.
            scope:
              zh: 八条历史行：旧 Porzana／Amaurornis 组合、形态样本、独立文献体重与生态类别分开。
              en: "Eight historical rows: retain older Porzana or Amaurornis combinations, morphology samples, separately compiled mass and ecological categories."
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

# Zapornia
