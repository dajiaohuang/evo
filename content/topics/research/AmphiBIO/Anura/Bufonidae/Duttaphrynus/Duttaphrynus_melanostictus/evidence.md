---
schemaVersion: 1
kind: evidence
records:
  amphibio-source-reader:
    scientificName: Duttaphrynus melanostictus
    sourceRowId: Anf0587
    sourceClassification:
      order: Anura
      family: Bufonidae
      genus: Duttaphrynus
    name:
      en: Duttaphrynus melanostictus
      zh: Duttaphrynus melanostictus
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        title:
          en: The source concept
          zh: 来源中的研究概念
        sourceIds:
          - amphibio
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/0/text/zh
      - topic: ecology
        title:
          en: Foraging strata
          zh: 觅食层位
        sourceIds:
          - amphibio
          - tetrapodtraits-revisions
        sourceFields:
          - Ter
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/1/text/zh
        sourceRevisionReview:
          sourceUrl: https://zenodo.org/records/21815609
          sourceVersion: 3.0.0, 5 August 2026; revision history dated 9 March 2026
          status: later-compilation-revisions-require-row-level-review
          affectedFieldScope:
            - Body_mass_g
            - Fos
            - Ter
            - Aqu
            - Arb
          speciesLevelCorrectionsCaptured: false
          correctedValuesSubstituted: false
          allOriginalValuesDeclaredWrong: false
      - topic: ecology
        title:
          en: Activity periods
          zh: 活动时段
        sourceIds:
          - amphibio
        sourceFields:
          - Noc
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/2/text/zh
      - topic: ecology
        title:
          en: Seasonal activity
          zh: 季节活动
        sourceIds:
          - amphibio
        sourceFields:
          - Wet_warm
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/3/text/zh
      - topic: morphology
        title:
          en: Compiled adult dimensions
          zh: 汇编的成体尺寸
        sourceIds:
          - amphibio
          - tetrapodtraits-revisions
        sourceFields:
          - Body_mass_g
          - Body_size_mm
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/4/text/zh
        sourceRevisionReview:
          sourceUrl: https://zenodo.org/records/21815609
          sourceVersion: 3.0.0, 5 August 2026; revision history dated 9 March 2026
          status: later-compilation-revisions-require-row-level-review
          affectedFieldScope:
            - Body_mass_g
            - Fos
            - Ter
            - Aqu
            - Arb
          speciesLevelCorrectionsCaptured: false
          correctedValuesSubstituted: false
          allOriginalValuesDeclaredWrong: false
      - topic: lifeHistory
        title:
          en: Compiled life history
          zh: 汇编的生活史
        sourceIds:
          - amphibio
        sourceFields:
          - Age_at_maturity_min_y
          - Age_at_maturity_max_y
          - Longevity_max_y
          - Reproductive_output_y
          - Offspring_size_min_mm
          - Offspring_size_max_mm
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/5/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/5/text/zh
      - topic: lifeHistory
        title:
          en: Developmental strategy
          zh: 发育方式
        sourceIds:
          - amphibio
        sourceFields:
          - Lar
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/6/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/6/text/zh
    sources:
      referenceBindings:
        - referenceId: ref-6db7bceb-2df2-46ef-90e7-a43ed817725b
          metadataVariant: 0
          sourceKey: amphibio
          usage:
            locator:
              markdown: evidence.md
              field: /records/amphibio-source-reader/sources/referenceBindings/0/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/amphibio-source-reader/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/amphibio-source-reader/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - doi
            - url
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-b166b4d8-6e5a-4441-9e79-0b1afb15e5ba
          metadataVariant: 0
          sourceKey: tetrapodtraits-revisions
          usage:
            locator: Version 2.0.1 (9 March 2026), body mass and microhabitat revision notice
            scope:
              en:
                markdown: evidence.md
                field: /records/amphibio-source-reader/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/amphibio-source-reader/sources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - doi
            - url
            - version
            - accessedAt
            - licenseAssessment
            - licenseAppliesTo
            - locator
            - scope
    originalBibliography: Dixit et al. 2010;Zhang and Lu 2012;Sawarkar and Kasambe 2009;Ohler et al. 2000;Foden et al. 2013;Han and Fu 2013
    bibliographyAlignment:
      status: unique-within-source-tuple
      method: Exact Order, Family, Genus and Species fields within the same deposited dataset; original row IDs retained separately.
      dataRowId: Anf0587
      bibliographyRowId: Anf0587
      sameIdNameMismatch: false
      originalSameIdScientificName: Duttaphrynus melanostictus
      candidateBibliographyRowIds:
        - Anf0587
    originalValues:
      id: Anf0587
      Order: Anura
      Family: Bufonidae
      Genus: Duttaphrynus
      Species: Duttaphrynus melanostictus
      Fos: NA
      Ter: "1"
      Aqu: NA
      Arb: NA
      Leaves: NA
      Flowers: NA
      Seeds: NA
      Fruits: NA
      Arthro: NA
      Vert: NA
      Diu: NA
      Noc: "1"
      Crepu: NA
      Wet_warm: "1"
      Wet_cold: NA
      Dry_warm: NA
      Dry_cold: NA
      Body_mass_g: "122.3"
      Age_at_maturity_min_y: "1"
      Age_at_maturity_max_y: "1"
      Body_size_mm: "160"
      Size_at_maturity_min_mm: NA
      Size_at_maturity_max_mm: NA
      Longevity_max_y: "4"
      Litter_size_min_n: NA
      Litter_size_max_n: NA
      Reproductive_output_y: "2"
      Offspring_size_min_mm: "1.4"
      Offspring_size_max_mm: "1.4"
      Dir: "0"
      Lar: "1"
      Viv: "0"
      OBS: NA
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6DQ3T
      method: Exact scientific name, family and order candidate selection only; no equivalence asserted.
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibio-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibio-source-reader/limitations/zh
---

# Duttaphrynus melanostictus — AmphiBIO v1

## referenceBindings / usage / locator

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/0/usage/locator -->
AmphiBIO_v1.csv row id Anf0587; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf0587 (exact within-source classification/name tuple)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/0/usage/scope/en -->
The Frost 2011 source concept, compilation-wide variable definitions and deposited values. Current species-concept equivalence unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/0/usage/scope/zh -->
Frost 2011 来源概念、汇编的变量定义及存档值；与当前物种概念的等同性未确定。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/1/usage/scope/en -->
Dataset-wide revision notice; affected original rows remain unverified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/1/usage/scope/zh -->
数据集层级修订说明；受影响原始行尚未核定。
<!-- /evo:text -->

## amphibio-source-reader / limitations

<!-- evo:text /records/amphibio-source-reader/limitations/en -->
This is a reader for a deposited trait compilation. NA remains missing data; unlisted categories are not inferred absent. Per-trait primary citations, modern taxonomic reconciliation and seven-facet scientific dossier review remain incomplete.
<!-- /evo:text -->

## amphibio-source-reader / limitations

<!-- evo:text /records/amphibio-source-reader/limitations/zh -->
本页是存档性状汇编的读本。NA 保留为缺失数据；未列出的类别不能据此推断为不存在。逐性状原始出处、现代分类概念核对及七主题科学档案审阅尚未完成。
<!-- /evo:text -->
