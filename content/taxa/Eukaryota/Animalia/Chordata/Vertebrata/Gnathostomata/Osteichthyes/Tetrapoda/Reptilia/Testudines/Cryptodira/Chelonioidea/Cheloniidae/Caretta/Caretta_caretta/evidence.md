---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: "Caretta caretta (Linnaeus, 1758)"
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: "Caretta caretta"
      en: "Caretta caretta"
    reviewStatus: source-linked
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
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/69BHK
            locator: Accepted usage, full accepted parent chain, and exhaustive descendant traversal in the local COL26.8 hierarchy.
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
        - referenceId: joyce-2007-mesozoic-turtle-phylogeny
          metadataVariant: 0
          sourceKey: joyce2007
          usage:
            locator: Appendix 1, p. 77, Caretta caretta specimen list; character 65 and Figure 8, p. 30; Appendix 3 legend and Caretta caretta row, p. 80.
            rightsEvidenceUrl: https://www.researchgate.net/publication/232688227_Phylogenetic_Relationships_of_Mesozoic_Turtles
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Caretta caretta

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Caretta caretta
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 identity, rank, accepted parent chain and complete strict accepted-species descendants. No extant flag; no identity inference from matching PBDB names.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8 的身份、等级、接受父链和全部严格接受种后代；没有现生标志，也不从同名 PBDB 记录推导身份。
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Joyce (2007): C. caretta museum material, peripheral-bone comparison and matrix legend. The specimen list gives no collecting-locality or date series for this page. Paraphrase only; no figures or matrix reproduced.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
Joyce（2007）：C. caretta 馆藏材料、周缘骨比较与矩阵图例。本页所用标本清单没有采集地点或日期序列。仅转述，不复制图版或矩阵。
<!-- /evo:text -->
