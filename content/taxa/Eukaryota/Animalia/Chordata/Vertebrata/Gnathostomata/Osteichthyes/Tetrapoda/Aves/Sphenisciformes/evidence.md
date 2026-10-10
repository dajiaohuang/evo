---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sphenisciformes
    rank: order
    sourceDatasetId: "2144"
    checkedAt: 2026-10-03
    name:
      en: Penguins
      zh: 企鹅目
    sections:
      - topic: huddleCase
        sourceIds:
          - zitterbart2011EmperorHuddle
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - zitterbart2011EmperorHuddle
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: researchScope
        sourceIds:
          - cole2022PenguinGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - cole2022PenguinGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: aquaticTransition
        sourceIds:
          - cole2022PenguinGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: order identity
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
        sourceIds:
          - taxonomy
      - topic: emperor penguin population connection
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
        sourceIds:
          - cristofari2016
      - topic: emperor penguin conservation assessment
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
        sourceIds:
          - iucn2026
      - topic: selected Pygoscelis studies
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
        sourceIds:
          - mclatchie2024
          - chinstrapGlobal2020
          - gentooWinter2009
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: COL26.8 ChecklistBank accepted order 44K
            url: https://www.checklistbank.org/dataset/316115/taxon/44K
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
        - referenceId: ref-0bbed3a8-d515-89c1-a714-5a1db5a15675
          metadataVariant: 0
          sourceKey: cristofari2016
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
        - referenceId: ref-3bbf7114-5345-8b88-a1b0-e68a720f121c
          metadataVariant: 0
          sourceKey: iucn2026
          usage:
            locator: Assessment Information; Red List Category & Criteria; Date Assessed; Justification
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
            - version
        - referenceId: ref-7038596b-52b8-8b0a-a455-fbc40ba72f61
          metadataVariant: 0
          sourceKey: mclatchie2024
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
        - referenceId: strycker2020-chinstrap-global-population
          metadataVariant: 0
          sourceKey: chinstrapGlobal2020
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
        - referenceId: xavier2017-gentoo-winter-foraging
          metadataVariant: 0
          sourceKey: gentooWinter2009
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
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetV7
          usage:
            locator: AVONET1_BirdLife; the 18 selected measured records placed under Sphenisciformes in pinned COL26.8.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            scope:
              zh: 仅概括本批已写入的历史数据记录，不推断完整后代覆盖。
              en: Only this batch’s authored historical records; no complete descendant coverage inferred.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
        - referenceId: ref-43f38f21-86d6-45b9-a255-7b157984216b
          metadataVariant: 0
          sourceKey: avonetProtocol2022
          usage:
            locator: Measurement protocol, taxonomic harmonization and species-average data; workbook Metadata sheet defines field meanings.
            accessedAt: 2026-10-02
            licenseAssessment: paraphrase-only
            scope:
              zh: 支持测量定义、取样与物种均值的解释；不证明 2020 历史分类概念与 COL26.8 完全等同。
              en: Measurement definitions, sampling and species-average interpretation; not proof that historical 2020 species concepts equal COL26.8 concepts.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: August 2015 archive; 18 authored same-name records placed under Sphenisciformes by pinned COL ancestry.
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
            locator: EltonTraits 1.0; 17 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 17
              foraging: 17
              activity: 0
            readingTargets:
              - name: Aptenodytes patagonicus
                colId: 67QCM
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Sphenisciformes/Spheniscidae/Aptenodytes/Aptenodytes_patagonicus
              - name: Aptenodytes forsteri
                colId: FYD9
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Sphenisciformes/Spheniscidae/Aptenodytes/Aptenodytes_forsteri
              - name: Pygoscelis papua
                colId: 78R2P
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Sphenisciformes/Spheniscidae/Pygoscelis/Pygoscelis_papua
              - name: Pygoscelis adeliae
                colId: 4QPKQ
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Sphenisciformes/Spheniscidae/Pygoscelis/Pygoscelis_adeliae
              - name: Pygoscelis antarcticus
                colId: 4QPKS
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Sphenisciformes/Spheniscidae/Pygoscelis/Pygoscelis_antarcticus
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
        - referenceId: ref-404fedb0-197c-4345-80d9-8e1df1b377d1
          metadataVariant: 0
          sourceKey: cole2022PenguinGenomics
          usage:
            title: Genomic insights into the secondary aquatic transition of penguins
            url: https://doi.org/10.1038/s41467-022-31508-9
            accessedAt: 2026-10-03
            locator: "PMC9296559 main text: Table 1, phylogeny and demographic Results, comparative adaptation discussion, genomic sampling and effective-size Methods; captions read, figures and supplementary matrices not independently inspected"
            publishedStudyTaxa: []
            scope:
              zh: 所列种、亚种和地区谱系的比较导读，不等同固定名录分母。
              en: Comparison route through study species, subspecies and regional lineages, distinct from the pinned catalogue denominator.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - publishedYear
            - articleNumber
            - sourceVersion
            - url
            - accessedAt
            - locator
            - publishedStudyTaxa
            - scope
        - referenceId: ref-af57d394-4451-4b3b-9a84-f6da100f1fb2
          metadataVariant: 0
          sourceKey: zitterbart2011EmperorHuddle
          usage:
            title: Coordinated Movements Prevent Jamming in an Emperor Penguin Huddle
            url: https://epic.awi.de/30920/1/PLOS-zitterbart2011.pdf
            accessedAt: 2026-10-03
            locator: "Published PDF pp. 1–3: all main text, Figure 1 caption, supporting-movie descriptions and bibliographic metadata. Pixels viewed on pp. 1–2; no movies/raw trajectories rerun."
            scope:
              zh: 2008 年 Neumayer 附近帝企鹅四小时群聚观察；类群仅为比较入口。
              en: Four-hour 2008 Neumayer-area emperor-penguin huddle observation; group pages are comparison routes.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - pages
            - publishedYear
            - publishedAt
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

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pins the COL26.8 accepted order name, rank and parent identity used for this route.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定本阅读路径采用的 COL26.8 接受目名、分类等级与父级身份。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
RAD-SNP population-genetic study of 110 emperor penguins sampled at six East Antarctic colonies; results are limited to this sampling and coalescent model.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
基于东南极六个繁殖群 110 只皇帝企鹅 RAD-SNP 数据的人口遗传研究；结论受该样本与共祖模型范围限制。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
BirdLife International global emperor-penguin assessment accepted for IUCN Red List 2026(2) pre-publication; it supports assessment-era population-index and projection statements for Aptenodytes forsteri only.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
BirdLife International 的全球皇帝企鹅评估已获接受，等待收入 IUCN 红色名录 2026(2)；仅支持 Aptenodytes forsteri 的评估期种群指数与模型预测内容。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Reports breeding success and nest-survival associations from 450 monitored nests, five camera sites and ten breeding seasons at the Windmill Islands.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
报告 Windmill Islands 450 个受监测巢、五个相机点位和十个繁殖季的繁殖成功率及巢存活关联。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Compiles 398 sites and estimates breeding pairs across 375 extant Chinstrap colonies using mixed survey methods; site dates and trend coverage vary.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
以多种调查方法汇集 398 个地点并估计 375 个现存帽带企鹅繁殖群的繁殖对数；各地点调查年份及趋势覆盖不一。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en -->
Examines winter 2009 diet and stable isotopes at Bird Island, South Georgia, during unusually warm conditions; findings are one colony-season result.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh -->
研究南乔治亚岛 Bird Island 在 2009 年异常偏暖冬季的食性与稳定同位素；结论仅适用于一个繁殖地和一个季节。
<!-- /evo:text -->
