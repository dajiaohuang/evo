---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dicerorhinus Gloger, 1841
    rank: genus
    sourceDatasetId: "2144"
    name:
      zh: 双角犀属
      en: Sumatran rhinoceros genus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - account
          - taxonomy
      - topic: readingPath
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - taxonomy
          - vonSeth2021
      - topic: interpretation
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - vonSeth2021
          - taxonomy
    sources:
      referenceBindings:
        - referenceId: ref-edde093c-1db7-837f-a916-f94b7fbc5fb5
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
            title: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/44JW
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
        - referenceId: ref-de23e9a3-d32f-861c-ac86-253d47d1924a
          metadataVariant: 0
          sourceKey: vonSeth2021
          usage:
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  reader-roster:
    classificationAuthority: Catalogue of Life
    release: COL26.8
    publishedAt: 2026-08-20
    genusUsage: 44JW
    sourceUrl: https://www.checklistbank.org/dataset/316115/taxon/44JW
    enumeratedAt: 2026-10-02
    method: Recursively followed every child whose parentId matches the selected usage in the release-pinned hierarchy children registry. Included accepted descendants only; genus 44JW has childCount=1 and species 35JV8 has childCount=0.
    acceptedSpeciesCount: 1
    acceptedSubgenusCount: 0
    acceptedSpecies:
      - colUsage: 35JV8
        scientificName: Dicerorhinus sumatrensis (G. Fischer [von Waldheim], 1814)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
        sourceUrl: https://www.checklistbank.org/dataset/316115/taxon/35JV8
        contentPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Dicerorhinus/Dicerorhinus_sumatrensis
    scope: Pinned accepted descendants only; no PBDB equivalence, global fossil roster or current wild-population count inferred.
---

# Dicerorhinus

## 来源范围

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
仅支持本条目选用的形态、生境或取食概述；不导入来源中的旧保育数字或全部分类。
<!-- /evo:text -->

## 来源范围

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Supports the selected morphology, habitat or feeding overview only; older conservation numbers and the source’s full classification are not imported.
<!-- /evo:text -->

## 来源范围

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的名称、作者、等级与父子关系；不是系统发育分歧证据。
<!-- /evo:text -->

## 来源范围

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned names, authorship, ranks and parent links; not evidence of phylogenetic divergence.
<!-- /evo:text -->

## 来源范围

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
支持2021年论文对21份历史及现代基因组所作的成对距离树、主成分与聚类分析。定位：Results “Population structure and demographic history”首段、Fig. 1b、Methods “Population structure”。仅限所采样种群结构，不建立物种级祖先关系、正式管理单元、完整分布或当前数量。
<!-- /evo:text -->

## 来源范围

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Supports the 2021 pairwise-distance tree, principal-component and clustering analyses of 21 historical and modern genomes. Locators: Results, “Population structure and demographic history,” first paragraph; Fig. 1b; Methods, “Population structure.” Limited to sampled population structure; not species-level ancestry, formal management units, a complete range or current numbers.
<!-- /evo:text -->
