---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Aotus brumbacki Hershkovitz, 1983
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Brumback's Night Monkey
      zh: 布鲁姆巴克夜猴
    checkedAt: 2026-10-03
    sections:
      - topic: sequenceIdentity
        sourceIds:
          - menezes2010SpecimenIdentification
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: taxonomicHistory
        sourceIds:
          - montilla2025AbstractBoundary
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: studyAssociation
        sourceIds:
          - defler2007TypeMaterialPass
          - brumbacki2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: sleep-sites
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
        sourceIds:
          - brumbacki2024
      - topic: evidence-boundary
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
        sourceIds:
          - brumbacki2024
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/F6F8
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
        - referenceId: ref-37d9ec8a-9105-8531-a739-79b261a792fa
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
        - referenceId: ref-9dc11369-44bb-83db-a111-0b21cef7c022
          metadataVariant: 0
          sourceKey: brumbacki2024
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
        - referenceId: ref-ebe52da6-626f-845c-aa44-e0b68fad820e
          metadataVariant: 0
          sourceKey: defler2007TypeMaterialPass
          usage:
            title: Aotus Diversity and the Species Problem
            url: https://doi.org/10.1896/052.022.0104
            accessedAt: 2026-10-03
            locator: "Primate Conservation 22: selected printed pages 55 and 59–61; type account, Table 2 text and figure captions; pixels and original 1998 paper not examined"
            scope:
              zh: 模式材料、作者的生殖隔离推断与跨研究样本限制。
              en: Type material, authors’ reproductive-isolation inference and limits of combining studies.
          originalFields:
            - id
            - title
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-decedec4-f10a-8ee9-af26-51be8776dd44
          metadataVariant: 0
          sourceKey: montilla2025AbstractBoundary
          usage:
            title: Aotus jorgehernandezi Defler & Bueno, 2007, a synonym of Aotus brumbacki Hershkovitz, 1983 (Mammalia, Primates)
            url: https://doi.org/10.11646/bionomina.43.3.3
            accessedAt: 2026-10-03
            locator: Publisher abstract and citation metadata only; full article explicitly marked Requires Subscription or Fee
            scope:
              zh: 仅摘要中的名称可用性和异名主张，不声称完整方法或图表复核。
              en: Abstract statements on name availability and synonymy only, not full methods or figure reassessment.
          originalFields:
            - id
            - title
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-2599ce54-8a12-622d-a163-84ab2fca2575
          metadataVariant: 0
          sourceKey: menezes2010SpecimenIdentification
          usage:
            title: Identification, classification and evolution of Owl Monkeys (Aotus, Illiger 1811)
            url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2931504/
            accessedAt: 2026-10-03
            locator: "Main article: Methods/Samples and Karyotypic analyses; Tables 1–2; Results/Karyotypic analyses; Discussion/Molecular markers and Evolutionary, karyological and taxonomic considerations; Conclusions"
            scope:
              zh: 本批实际读取 2010 年主文的样本表、方法、结果及讨论；未检查图像像素、补充文件、馆藏实物或原始序列，也未重跑分析。八个历史分类单元不直接对应全部固定 COL26.8 接受种概念。TR1 的核型、表 1 样本与外部序列分别保留；未提供 A. jorgehernandezi 的新增野外生态材料，其资料缺口仍开。
              en: This pass read the 2010 main article’s sample tables, methods, results and discussion, without examining figure pixels, supplementary files, museum material or raw sequences, or rerunning analyses. Eight historical taxa do not directly represent every pinned COL26.8 accepted-species concept. TR1’s karyotype, Table 1 specimens and external sequences remain distinct. No new wild ecological material for A. jorgehernandezi was obtained.
          originalFields:
            - id
            - title
            - authors
            - publishedYear
            - publishedAt
            - publicationDatePrecision
            - journal
            - volume
            - articleNumber
            - doi
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

# Aotus brumbacki

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Aotus brumbacki Hershkovitz, 1983
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 accepted name, authorship, rank and parent identity; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8 中的接受名、作者、等级和分类父链；不提供生物学证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Supports the English common-name crosswalk; not occurrence, ecology or a complete range.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
支持英文普通名交叉表；不作为出现记录、生态或完整分布证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
A site-bounded study characterizing 24 sleeping sites using censuses and interview-assisted searches in four landscapes.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
一项限于具体地点的研究，在四个景观中以普查和访谈辅助搜索描述了 24 处睡眠地点。
<!-- /evo:text -->
