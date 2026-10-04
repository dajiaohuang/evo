---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Piliocolobus lulindicus Matschie, 1914
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Ulindi River Red Colobus
      zh: 乌林迪河红疣猴
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: nameBearingMaterial
        sourceIds:
          - turni2024RedColobusTypes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: additionalMaterialStatus
        sourceIds:
          - turni2024RedColobusTypes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: conceptCorrespondence
        sourceIds:
          - turni2024RedColobusTypes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: taxonomy
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
        sourceIds:
          - taxonomy
          - lulindicus2020
          - mdd_foai
      - topic: distribution and habitat
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
        sourceIds:
          - lulindicus2020
      - topic: population evidence in the 2020 assessment
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
        sourceIds:
          - lulindicus2020
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4HTQS
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
        - referenceId: ref-b9d59fca-4510-8466-a9bc-968419593267
          metadataVariant: 0
          sourceKey: lulindicus2020
          usage:
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
            - url
            - scope
        - referenceId: ref-5f129834-d83a-8638-a32d-de034fb5bfc4
          metadataVariant: 0
          sourceKey: mdd_foai
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-fb75c3a3-0864-4560-8710-e3fee33c755d
          metadataVariant: 0
          sourceKey: turni2024RedColobusTypes
          usage:
            title: Type specimens of Primates (Mammalia) in the collections of the Museum für Naturkunde Berlin
            url: https://mapress.com/zt/article/download/zootaxa.5543.2.1/54941/69264
            accessedAt: 2026-10-03
            locator: PDF pp. 1–3 front matter/collector table/methods; red-colobus accounts PDF pp. 27–28, printed pp. 177–178. Layouts viewed pp. 27–28. No full 44-page or current physical inventory audit.
            scope:
              zh: 六种红疣猴的限定模式身份、历史原名归属与材料边界；属与族为比较入口。
              en: Bounded type identity, historical-name placement and material limits for six red-colobus species; genus and tribe offer comparisons.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - pages
            - publishedYear
            - publishedAt
            - url
            - sourceVersion
            - accessedAt
            - locator
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
---

# Piliocolobus lulindicus

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Piliocolobus lulindicus Matschie, 1914
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 name, authorship, rank and parent identity; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8 中的名称、作者、等级和分类父链；不提供生物学证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Global 2020 Red List assessment under a separate-species treatment. It summarizes historical range boundaries, habitat observations, survey reports, threats, and an inferred decline; some cited 2018 survey data were unpublished, and its taxonomic concept is not resolved against the current MDD treatment or pinned COL26.8 ID.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
以独立种处理该名称的 2020 年全球《红色名录》评估。评估汇总了历史分布界限、栖地观察、调查报告、威胁和下降推断；部分 2018 年调查数据未发表，其分类概念与当前 MDD 处理及固定 COL26.8 ID 的关系尚未解决。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Current crosswalk source listing lulindicus among names treated under P. foai; this documents a classification difference from the pinned COL26.8 species record.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
当前名称交叉表将 lulindicus 列在 P. foai 的相关名称中；此处用于记录它与固定 COL26.8 种级条目的分类差异。
<!-- /evo:text -->
