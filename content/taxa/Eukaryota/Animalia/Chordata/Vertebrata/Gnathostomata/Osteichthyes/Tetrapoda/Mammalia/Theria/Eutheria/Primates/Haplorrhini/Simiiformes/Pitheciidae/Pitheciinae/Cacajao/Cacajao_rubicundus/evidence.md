---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cacajao rubicundus (I. Geoffroy Saint-Hilaire & Deville, 1848)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Red Bald Uacari
      zh: 红秃乌卡里
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: taxonomy
        sourceIds:
          - silva2022cacajao
          - iucn2021rubicundus
          - salve2025rubicundus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: molecular-sampling
        sourceIds:
          - silva2022cacajao
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: reported-distribution
        sourceIds:
          - salve2025rubicundus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: conservation-assessment
        sourceIds:
          - salve2025rubicundus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: ecology
        sourceIds:
          - vieira2008Mamiraua
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - vieira2008Mamiraua
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: behavior
        sourceIds:
          - vieira2008Mamiraua
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: taxonomy
        sourceIds:
          - vieira2008Mamiraua
          - heymann2025UcayaliiBoundary
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              en: Catalogue of Life COL26.8 — Cacajao rubicundus (I. Geoffroy Saint-Hilaire & Deville, 1848)
              zh: 生命名录 COL26.8 — Cacajao rubicundus (I. Geoffroy Saint-Hilaire & Deville, 1848)
            url: https://www.checklistbank.org/dataset/316115/taxon/BSCWK
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
        - referenceId: ref-9d7c14a9-0155-83d4-ac9b-4d2a5928b1a5
          metadataVariant: 0
          sourceKey: mdd_name
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
        - referenceId: ref-7c364ba2-5000-8633-adff-de1e59e59fb1
          metadataVariant: 0
          sourceKey: silva2022cacajao
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
        - referenceId: ref-5e7f2936-e3c6-89c5-a04e-7334e54017fc
          metadataVariant: 0
          sourceKey: iucn2021rubicundus
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-f625f3eb-6401-45a2-ad4d-ec5c9720bc39
          metadataVariant: 0
          sourceKey: salve2025rubicundus
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d01c55bb-bcd3-4014-aef5-f79ddfb0dc71
          metadataVariant: 0
          sourceKey: vieira2008Mamiraua
          usage:
            locator: Printed pp45–49, methods, results and Figure 4; PDF pages 5–9.
            accessedAt: 2026-10-03
            scope:
              zh: Mamirauá 巴西红色型的访谈、定向搜索、直接取食与接触观察；不作全年生态或密度推断。
              en: Interviews, targeted searches and direct feeding/contact observations of the Brazilian Mamirauá red form; not annual ecology or density.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-42153e14-b23d-4348-9acd-7831595de2c6
          metadataVariant: 0
          sourceKey: heymann2025UcayaliiBoundary
          usage:
            locator: Introduction, paragraph identifying earlier C. calvus rubicundus and C. calvus ucayalii names.
            accessedAt: 2026-10-03
            scope:
              zh: 只用于解释秘鲁旧名资料不能自动归属巴西现行物种；本批不引入其季节性数据。
              en: Only the Peruvian older-name boundary is used; no seasonal data from that study are imported in this batch.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
---

# Cacajao rubicundus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned accepted name, rank and genus link; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定接受名、等级和属级父链；不作为生物学证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Supports the selected English common name and MDD taxonomic context only; not a complete range.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
仅支持所选英文普通名和 MDD 分类语境；不代表完整分布。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Systematic comparison using cytochrome-b, ddRAD and museum pelage evidence. The eight cytochrome-b and six ddRAD samples labelled C. calvus rubicundus follow the paper-era subspecies assignment; these counts are not abundance estimates or a field census.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
研究结合细胞色素 b、ddRAD 与博物馆皮毛证据；标记为 C. calvus rubicundus 的 8 条细胞色素 b 序列和 6 个 ddRAD 样本沿用论文当时的亚种归属，这些数字不是丰度估计或野外普查结果。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
A 2021 assessment using the subspecies treatment C. calvus rubicundus; it states that field ecology data were unavailable at that time.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
2021 年评估采用亚种处理 C. calvus rubicundus，并说明当时缺少野外生态数据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Official ICMBio SALVE species assessment published in 2025; category date is 2019. Supports the assessment's three separated Amazonas occurrence areas, reported Jacurapá floodplain records, conservation rationale and unknown population metrics. It does not provide a species-specific ecological study or population census.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
ICMBio SALVE 官方种级评估，2025 年发布；类别日期为 2019 年。支持该评估报告的亚马孙州三个分隔出现区域、Jacurapá 洪泛林记录、保护评估依据和未知种群指标；不构成该种的专门生态学研究或种群普查。
<!-- /evo:text -->
