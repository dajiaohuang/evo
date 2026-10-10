---
schemaVersion: 1
kind: evidence
records:
  amphibio-source-reader:
    scientificName: Desmognathus marmoratus
    sourceRowId: Anf6373
    sourceClassification:
      order: Caudata
      family: Plethodontidae
      genus: Desmognathus
    name:
      en: Desmognathus marmoratus
      zh: Desmognathus marmoratus
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
          - Aqu
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
      - topic: morphology
        title:
          en: Compiled adult dimensions
          zh: 汇编的成体尺寸
        sourceIds:
          - amphibio
        sourceFields:
          - Body_size_mm
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/2/text/zh
      - topic: lifeHistory
        title:
          en: Compiled life history
          zh: 汇编的生活史
        sourceIds:
          - amphibio
        sourceFields:
          - Age_at_maturity_min_y
          - Age_at_maturity_max_y
          - Size_at_maturity_min_mm
          - Size_at_maturity_max_mm
          - Longevity_max_y
          - Litter_size_min_n
          - Litter_size_max_n
          - Reproductive_output_y
          - Offspring_size_min_mm
          - Offspring_size_max_mm
        text:
          en:
            markdown: page.en.md
            field: /records/amphibio-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/3/text/zh
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
            field: /records/amphibio-source-reader/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibio-source-reader/sections/4/text/zh
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
    originalBibliography: Wells 2007;Conant and Collins 1998;Tilley and Berbardo 1993;AmphibiaWeb 2015;Foden et al. 2013
    bibliographyAlignment:
      status: unique-within-source-tuple
      method: Exact Order, Family, Genus and Species fields within the same deposited dataset; original row IDs retained separately.
      dataRowId: Anf6373
      bibliographyRowId: Anf6368
      sameIdNameMismatch: true
      originalSameIdScientificName: Desmognathus organi
      candidateBibliographyRowIds:
        - Anf6368
    originalValues:
      id: Anf6373
      Order: Caudata
      Family: Plethodontidae
      Genus: Desmognathus
      Species: Desmognathus marmoratus
      Fos: NA
      Ter: NA
      Aqu: "1"
      Arb: NA
      Leaves: NA
      Flowers: NA
      Seeds: NA
      Fruits: NA
      Arthro: NA
      Vert: NA
      Diu: NA
      Noc: NA
      Crepu: NA
      Wet_warm: NA
      Wet_cold: NA
      Dry_warm: NA
      Dry_cold: NA
      Body_mass_g: NA
      Age_at_maturity_min_y: "4"
      Age_at_maturity_max_y: "5"
      Body_size_mm: "114.5"
      Size_at_maturity_min_mm: "47"
      Size_at_maturity_max_mm: "52.5"
      Longevity_max_y: "13"
      Litter_size_min_n: "20"
      Litter_size_max_n: "65"
      Reproductive_output_y: "1"
      Offspring_size_min_mm: "3.5"
      Offspring_size_max_mm: "4.1"
      Dir: "0"
      Lar: "1"
      Viv: "0"
      OBS: NA
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 353MN
      method: Exact scientific name, family and order candidate selection only; no equivalence asserted.
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibio-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibio-source-reader/limitations/zh
---

# Desmognathus marmoratus — AmphiBIO v1

## referenceBindings / usage / locator

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/0/usage/locator -->
AmphiBIO_v1.csv row id Anf6373; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf6368 (exact within-source classification/name tuple)
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
