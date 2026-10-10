---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mirza Gray, 1870
    rank: genus
    sourceDatasetId: "2144"
    checkedAt: 2026-10-02
    name:
      en: Mirza genus guide
      zh: 巨鼠狐猴属导读
    sections:
      - topic: overview
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
        sourceIds:
          - taxonomy
          - coquereliTaxonomy
          - zazaTaxonomy
      - topic: readingPath
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
        sourceIds:
          - hending2021
          - kappeler2002
          - zombitse2026
          - rode2013
          - hending2024
      - topic: readingPath
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
    sources:
      referenceBindings:
        - referenceId: ref-a17b469e-f40a-8b65-a1a8-3de042d884db
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
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
        - referenceId: ref-404ef744-2a92-8f97-ad7c-5fc6ca33f1c4
          metadataVariant: 0
          sourceKey: coquereliTaxonomy
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
        - referenceId: ref-35a4cdc4-9dc4-8f29-aea4-d52c913f53a6
          metadataVariant: 0
          sourceKey: zazaTaxonomy
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
        - referenceId: ref-6754a722-06ff-83d0-a1ea-54a66ab45395
          metadataVariant: 0
          sourceKey: kappeler2002
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
        - referenceId: ref-c18d8934-e959-8773-a91d-1dab4d53f29d
          metadataVariant: 0
          sourceKey: zombitse2026
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
        - referenceId: ref-18ceac68-0eeb-88f2-a9bb-78b4400e81e1
          metadataVariant: 0
          sourceKey: rode2013
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-bdee28a2-752e-8157-ac9b-35d552f9dd2a
          metadataVariant: 0
          sourceKey: hending2024
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d046b5ca-5b9c-89cd-a089-e2cfb6edb6de
          metadataVariant: 0
          sourceKey: hending2021
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/7/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/7/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: August 2015 archive; 1 authored same-name records placed under Mirza by pinned COL ancestry.
            accessedAt: 2026-10-02
            scope:
              zh: 仅本批已写入资料条目的阅读路线，不代表完整后代覆盖。
              en: Route through this batch’s authored records only; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
        - referenceId: ref-50d83663-5d53-4d60-83a3-2b2a8461aa64
          metadataVariant: 0
          sourceKey: amnioteLifeHistoryMethods2015
          usage:
            locator: "Ecological Archives E096-269-D1 metadata: Methods, Class IV definitions; Supplemental Table 9 field definitions."
            accessedAt: 2026-10-02
            scope:
              zh: 中位数、最长寿命最大记录、历史种／亚种数据继承和字段定义。
              en: Medians, maximum longevity, historical species/subspecies inheritance and field definitions.
            sourceRetrievalUrl: https://www.esapubs.org/archive/ecol/E096/269/metadata.php
            sourceVersion: August 2015 archive
            readerBoundaries:
              - No field values treated as independent individual measurements.
              - No guarantee of present taxonomic concept equivalence.
              - Original input papers not individually reviewed.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
            - sourceRetrievalUrl
            - sourceVersion
            - readerBoundaries
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraits2014
          usage:
            locator: EltonTraits 1.0; 1 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 1
              foraging: 1
              activity: 1
            readingTargets:
              - name: Mirza coquereli
                colId: 43MKJ
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Lemuriformes/Cheirogaleoidea/Cheirogaleidae/Mirza/Mirza_coquereli
            scope:
              zh: 本批资料阅读路线，不是整个类群的生态总结。
              en: Route through this batch, not an ecological summary for the entire group.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - authoredFieldGroupCounts
            - readingTargets
            - scope
        - referenceId: ref-23d71769-a573-4f3c-8284-3271a2ef8b53
          metadataVariant: 0
          sourceKey: eltonTraitsMethods2014
          usage:
            locator: Ecological Archives E095-178-D1 metadata.php; Class II B translation/interpolation/limitations; Class IV Tables 1–4.
            accessedAt: 2026-10-02
            scope:
              zh: 文献描述的半定量转换、字段代码、插补与历史分类边界；未读底层文献。
              en: Semiquantitative translation, field codes, interpolation and historical taxonomy; underlying literature not read.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
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

# Mirza

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pins accepted genus ID 5TQ2 and its COL26.8 classification.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定接受属 ID 5TQ2 及其 COL26.8 分类。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pins the accepted COL26.8 species identity, authorship, rank and parent genus.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定 COL26.8 接受种身份、作者、等级与父属。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Pins the accepted COL26.8 species identity, authorship, rank and parent genus.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
固定 COL26.8 接受种身份、作者、等级与父属。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Genetic and behavioral analysis of one Mirza coquereli population; findings concern that sampled population.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
对一个 Mirza coquereli 种群开展遗传与行为分析；结论仅限该样本种群。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Nocturnal line-transect surveys in accessible parts of Zombitse-Vohibasia National Park, December 2021–June 2022; not a range-wide survey.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
2021 年 12 月至 2022 年 6 月在 Zombitse-Vohibasia 国家公园可达区域开展的夜间样线调查；不是全分布区调查。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en -->
Radio-tracking and nest observations of eight animals at Ankarafa Forest during 2.5 dry-season months.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh -->
在 Ankarafa 森林对八只动物进行 2.5 个月旱季无线电跟踪与巢点观察。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en -->
Transect-based local density estimates from two Sahamalaza forests, March 2019–May 2022; repeated detections may occur.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh -->
2019 年 3 月至 2022 年 5 月对 Sahamalaza 两片森林进行样线密度估算；可能重复记录同一动物。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/en -->
Literature-based meta-analysis and models of density at genus level across Madagascar; associations are not species-specific causal effects.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/zh -->
基于文献的马达加斯加鼠狐猴科属级密度元分析与模型；相关性不是种级因果效应。
<!-- /evo:text -->
