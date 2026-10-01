---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Crocodylus halli Murray, Russo, Zorrilla & Mcmahan, 2019
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: 霍尔新几内亚鳄
      en: Hall's New Guinea crocodile
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
    sources:
      referenceBindings:
        - referenceId: ref-edc101a5-b053-8d47-a843-765672dc637a
          metadataVariant: 0
          sourceKey: murray2019
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
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/8GRXJ
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
---

# Crocodylus halli

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
对新几内亚南北种群头骨和外部形态的比较及新种描述；支持采样群体间的形态诊断，不支持完整种群生态或全域数量推断。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Comparison of cranial and external morphology among northern and southern New Guinea populations, with a new-species description; supports diagnosis of sampled groups, not complete population ecology or range-wide abundance.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 1008
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->
