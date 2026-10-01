---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Perissodactyla Owen, 1848
    rank: order
    sourceDatasetId: "2144"
    name:
      zh: 奇蹄目
      en: Odd-toed ungulates
    reviewStatus: source-linked
    checkedAt: 2026-09-22
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/1
    sources:
      referenceBindings:
        - referenceId: ref-3ae96ce3-6be5-8848-a866-47fbb5c76278
          metadataVariant: 0
          sourceKey: account
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
            url: https://www.checklistbank.org/dataset/316115/taxon/623DW
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
  atlas-node:
    name: Perissodactyla
    commonName: Odd-toed Ungulates
    commonNameZh: 奇蹄类
    rank: order
    taxonId: txn:106418
    firstAppearance: 56
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: full-profile
  classification-support:
    - support: moderate
      groupingBasis:
        markdown: evidence.md
        field: /records/classification-support/0/groupingBasis
      conflicts:
        markdown: evidence.md
        field: /records/classification-support/0/conflicts
      references:
        - pnas-2026-perissodactyls
        - amnh-perissodactyl-evolution
        - open-tree
---

# Perissodactyla

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
仅支持本条目选用的形态、生境或取食概述；不导入来源中的旧保育数字或全部分类。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Supports the selected morphology, habitat or feeding overview only; older conservation numbers and the source’s full classification are not imported.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的名称、作者、等级与父子关系；不是系统发育分歧证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned names, authorship, ranks and parent links; not evidence of phylogenetic divergence.
<!-- /evo:text -->

## classification-support / groupingBasis

<!-- evo:text /records/classification-support/0/groupingBasis -->
Order-level navigation synthesis; the positions of several extinct early lineages remain analysis-dependent.
<!-- /evo:text -->

## classification-support / conflicts

<!-- evo:text /records/classification-support/0/conflicts -->
The displayed branching order is intentionally non-exhaustive and must not be read as a fully resolved binary consensus tree.
<!-- /evo:text -->
