---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pygoscelis Wagler, 1832
    rank: genus
    sourceDatasetId: "2144"
    checkedAt: 2026-10-03
    name:
      en: Brush-tailed penguin genus
      zh: 刷尾企鹅属
    sections:
      - topic: evolutionaryComparison
        sourceIds:
          - cole2022PenguinGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - cole2022PenguinGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: readingPath
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
        sourceIds:
          - taxonomy
          - gentooWinter2009
          - chinstrapGlobal2020
          - mclatchie2024
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: COL26.8 ChecklistBank accepted genus usage 75VG
            url: https://www.checklistbank.org/dataset/316115/taxon/75VG
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
        - referenceId: xavier2017-gentoo-winter-foraging
          metadataVariant: 0
          sourceKey: gentooWinter2009
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
            license: CC BY 4.0
            licenseEvidenceLocator: Article copyright and licence statement specifies Creative Commons Attribution 4.0 International.
            licenseAppliesTo: Article text; no figures or third-party materials are reused.
            licenseUrl: https://creativecommons.org/licenses/by/4.0/
            licenseAssessment: item-level-verified
            attribution: Xavier, J. C. et al. (2017), Sexual and individual foraging segregation in Gentoo penguins Pygoscelis papua from the Southern Ocean during an abnormal winter, https://doi.org/10.1371/journal.pone.0174850
          originalFields:
            - id
            - title
            - url
            - scope
            - license
            - licenseAppliesTo
            - attribution
            - licenseEvidenceLocator
            - licenseUrl
            - licenseAssessment
        - referenceId: strycker2020-chinstrap-global-population
          metadataVariant: 0
          sourceKey: chinstrapGlobal2020
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
            license: CC BY 4.0
            licenseEvidenceLocator: Article copyright and licence statement specifies Creative Commons Attribution 4.0 International.
            licenseAppliesTo: Article text; no figures or third-party materials are reused.
            licenseUrl: https://creativecommons.org/licenses/by/4.0/
            licenseAssessment: item-level-verified
            attribution: Strycker, N. et al. (2020), A global population assessment of the Chinstrap penguin (Pygoscelis antarctica), https://doi.org/10.1038/s41598-020-76479-3
          originalFields:
            - id
            - title
            - url
            - scope
            - license
            - licenseAppliesTo
            - attribution
            - licenseEvidenceLocator
            - licenseUrl
            - licenseAssessment
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
            license: CC BY 4.0
            licenseEvidenceLocator: Article license statement identifies Creative Commons Attribution 4.0 International.
            licenseAppliesTo: Article text; no figures or third-party materials are reused.
            licenseUrl: https://creativecommons.org/licenses/by/4.0/
            licenseAssessment: item-level-verified
            attribution: McLatchie, M. J. et al. (2024), Ecology and Evolution 14:e10988, https://doi.org/10.1002/ece3.10988
          originalFields:
            - id
            - title
            - url
            - scope
            - license
            - licenseAppliesTo
            - attribution
            - licenseEvidenceLocator
            - licenseUrl
            - licenseAssessment
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetV7
          usage:
            locator: AVONET1_BirdLife; the 3 selected measured records placed under Pygoscelis in pinned COL26.8.
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
            locator: August 2015 archive; 3 authored same-name records placed under Pygoscelis by pinned COL ancestry.
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
            locator: EltonTraits 1.0; 3 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 3
              foraging: 3
              activity: 0
            readingTargets:
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
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
---

# Pygoscelis Wagler, 1832

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pins the COL26.8 accepted scientific name, authorship, rank and parent identity for this reader page.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定本页采用的 COL26.8 接受名、作者、等级与父分类身份。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Examines winter 2009 diet and stable isotopes at Bird Island, South Georgia, during unusually warm conditions. Stomach contents were obtained from 55 birds; 43 samples with food residue informed diet comparisons. Findings are one colony-season result, not a general species diet or mortality cause.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
研究南乔治亚岛 Bird Island 在 2009 年异常偏暖冬季的食性与稳定同位素。共取得 55 只个体的胃含物，其中 43 份含有可分析食物残留并用于食性比较。结论仅适用于一个繁殖地和一个季节，不代表普遍食谱，也未确定死亡原因。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Combines field counts, drone and satellite imagery, and historical records to compile 398 sites; estimates 3.42 million breeding pairs across 375 extant colonies. Trend comparisons remain unavailable for about 35% of colonies, and the estimate mixes survey dates and precision levels.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
综合地面计数、无人机与卫星影像及历史记录，整理 398 个地点；估计 375 个现存繁殖群共有 342 万对。约 35% 的繁殖群缺少可用趋势比较，估值的调查年份与精度并不一致。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Reports breeding success and nest-survival associations from 450 monitored nests, five camera sites and ten breeding seasons at the Windmill Islands.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
报告 Windmill Islands 450 个受监测巢、五个相机点位和十个繁殖季的繁殖成功率及巢存活关联。
<!-- /evo:text -->
