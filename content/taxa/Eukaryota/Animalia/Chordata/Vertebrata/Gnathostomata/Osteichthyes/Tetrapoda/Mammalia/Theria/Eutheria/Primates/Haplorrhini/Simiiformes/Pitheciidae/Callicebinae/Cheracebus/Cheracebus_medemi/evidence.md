---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cheracebus medemi (Hershkovitz, 1963)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 梅德姆跳猴
      en: Medem's Titi
    checkedAt: 2026-10-03
    sections:
      - topic: taxonomyAndTypeLocality
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - taxonomy
          - hershkovitz1963
          - mdd_name
      - topic: regionalFieldEvidence
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - palaciosperes2005
      - topic: conservation
        sourceIds:
          - colombiaNational2025
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - byrne2020MedemiMorphology
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: taxonomy
        sourceIds:
          - byrne2020MedemiMorphology
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-e54b4486-482f-826d-a6da-e1419dc434f7
          metadataVariant: 0
          sourceKey: taxonomy
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
        - referenceId: ref-69aeeffb-ca61-8ba7-a624-a20adaa8a3db
          metadataVariant: 0
          sourceKey: hershkovitz1963
          usage:
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
        - referenceId: ref-3ef35676-a66d-893a-a7f9-0b3fada70008
          metadataVariant: 0
          sourceKey: palaciosperes2005
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
        - referenceId: ref-ca70f3b9-52eb-8a4a-a947-a5ecd08e3528
          metadataVariant: 0
          sourceKey: mdd_name
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-e7435841-2e9e-4566-9d80-ef27f2c68184
          metadataVariant: 0
          sourceKey: colombiaNational2025
          usage:
            locator: Categoria; Justificación; Author; Published; Citation; CC BY 4.0 footer
            accessedAt: 2026-10-02
            scope:
              zh: 有明确日期的哥伦比亚国家评估及其不确定性；不确立实测种群趋势或全球状态。
              en: Dated Colombian national assessment and its uncertainty; does not establish measured population trends or global status.
            readerBoundaries:
              - National assessment, not a new global assessment.
              - Suspected reduction is not a measured time series.
              - No assignment of older Callicebus torquatus survey numbers.
              - GBIF points, photo caption and BioModelo label not used as verified occurrences.
          originalFields:
            - id
            - title
            - url
            - date
            - locator
            - accessedAt
            - scope
            - readerBoundaries
        - referenceId: ref-1a602e13-7772-4a2a-a5c2-98c248a0b0d1
          metadataVariant: 0
          sourceKey: byrne2020MedemiMorphology
          usage:
            locator: Printed p14 (methods), p46 (Distinction between medemi and lucifer); PDF pages 2 and 34.
            accessedAt: 2026-10-03
            scope:
              zh: 2020 年馆藏比较及单一颜色诊断的限制；不提供本种野外丰度或正式并种结论。
              en: Museum comparisons and limits of a colour diagnosis; no medemi abundance estimate or formal synonymy.
          originalFields:
            - id
            - title
            - authors
            - url
            - version
            - locator
            - accessedAt
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Cheracebus medemi

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定接受种名、作者、等级和属级父链；不提供生物学证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pins the accepted name, authorship, rank and genus parent; it is not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
原始名称组合 Callicebus torquatus medemi 与类型材料的名称学来源；不单独确立当前属级处理。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Nomenclatural source for the original combination Callicebus torquatus medemi and its type material; it does not by itself establish the current generic treatment.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
报告下游卡克塔河与阿帕波里斯河三个调查地点的样线和密度；当时使用 Callicebus torquatus，不能不经复核便重命名为当前单一种的估值。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Reports transect-based estimates at three lower Caquetá and Apaporis sites under Callicebus torquatus; these cannot be relabeled as estimates for one current species without reassessment.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
提供英文普通名、正模编号、模式产地、国家分布和列出的 IUCN 类别；中文名为编辑译名。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Provides the English common name, holotype number, type locality, country listing and displayed IUCN category; the Chinese name is an editorial translation.
<!-- /evo:text -->
