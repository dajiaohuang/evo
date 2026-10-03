---
schemaVersion: 1
kind: evidence
records:
  amphibio-source-reader:
    scientificName: Pseudophilautus rus
    sourceRowId: Anf5226
    sourceClassification:
      order: Anura
      family: Rhacophoridae
      genus: Pseudophilautus
    name:
      en: Pseudophilautus rus
      zh: Pseudophilautus rus
    checkedAt: 2026-10-02
    reviewStatus: source-linked
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
    originalBibliography: NA
    bibliographyAlignment:
      status: unique-within-source-tuple
      method: Exact Order, Family, Genus and Species fields within the same deposited dataset; original row IDs retained separately.
      dataRowId: Anf5226
      bibliographyRowId: Anf5229
      sameIdNameMismatch: true
      originalSameIdScientificName: Pseudophilautus regius
      candidateBibliographyRowIds:
        - Anf5229
    originalValues:
      id: Anf5226
      Order: Anura
      Family: Rhacophoridae
      Genus: Pseudophilautus
      Species: Pseudophilautus rus
      Fos: NA
      Ter: NA
      Aqu: NA
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
      Age_at_maturity_min_y: NA
      Age_at_maturity_max_y: NA
      Body_size_mm: NA
      Size_at_maturity_min_mm: NA
      Size_at_maturity_max_mm: NA
      Longevity_max_y: NA
      Litter_size_min_n: NA
      Litter_size_max_n: NA
      Reproductive_output_y: NA
      Offspring_size_min_mm: NA
      Offspring_size_max_mm: NA
      Dir: NA
      Lar: NA
      Viv: NA
      OBS: NA
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4P74F
      method: Exact scientific name, family and order candidate selection only; no equivalence asserted.
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibio-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibio-source-reader/limitations/zh
---

# Pseudophilautus rus — AmphiBIO v1

## referenceBindings / usage / locator

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/0/usage/locator -->
AmphiBIO_v1.csv row id Anf5226; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf5229 (exact within-source classification/name tuple)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/0/usage/scope/en -->
The Frost 2011 source concept, compilation-wide variable definitions and deposited values. Current species-concept equivalence unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibio-source-reader/sources/referenceBindings/0/usage/scope/zh -->
Frost 2011 来源概念、汇编的变量定义及存档值；与当前物种概念的等同性未确定。
<!-- /evo:text -->

## amphibio-source-reader / limitations

<!-- evo:text /records/amphibio-source-reader/limitations/en -->
This is a reader for a deposited trait compilation. NA remains missing data; unlisted categories are not inferred absent. Per-trait primary citations, modern taxonomic reconciliation and seven-facet scientific dossier review remain incomplete. No external expert review.
<!-- /evo:text -->

## amphibio-source-reader / limitations

<!-- evo:text /records/amphibio-source-reader/limitations/zh -->
本页是存档性状汇编的读本。NA 保留为缺失数据；未列出的类别不能据此推断为不存在。逐性状原始出处、现代分类概念核对及七主题科学档案审阅尚未完成；没有外部专家审评。
<!-- /evo:text -->
