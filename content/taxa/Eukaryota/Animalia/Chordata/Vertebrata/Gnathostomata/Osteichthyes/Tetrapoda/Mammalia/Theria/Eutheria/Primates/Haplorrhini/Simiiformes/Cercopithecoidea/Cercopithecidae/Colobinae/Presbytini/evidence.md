---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Presbytini
    rank: tribe
    sourceDatasetId: "2144"
    name:
      zh: Presbytini
      en: Presbytini
    checkedAt: 2026-10-03
    sections:
      - topic: originalSampleProvenance
        sourceIds:
          - liu2020LimestoneGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - liu2020LimestoneGenomics
          - zhang2024CatBaGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: sampleComparison
        sourceIds:
          - zhang2024CatBaGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - zhang2024CatBaGenomics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: morphology
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
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
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pantheriaLimitedWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: overview
        sourceIds:
          - pantheriaLimitedWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: interpretation
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
      - topic: overview
        sourceIds:
          - ernestLifeHistories2003
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
            title: Catalogue of Life COL26.8 — Presbytini
            url: https://www.checklistbank.org/dataset/316115/taxon/L6B
            locator: Pinned name, rank and accepted ancestry.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-2bbbd988-b0a6-4105-b535-f1d77d8eda57
          metadataVariant: 0
          sourceKey: pantheriaWR05
          usage:
            locator: PanTHERIA WR05 August 2008; 11 authored entries grouped under Presbytini by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            licenseAssessment: CC0-archive-attributed-summary
            scope:
              zh: 仅概括本批有内容的历史条目，不代表完整后代覆盖。
              en: Only this batch’s authored historical entries; no complete descendant coverage.
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
        - referenceId: ref-c9ca5cd3-8f21-4b65-b2d1-9f76dd3b9a8b
          metadataVariant: 0
          sourceKey: pantheriaConsolidation2009
          usage:
            locator: Ecological Archives E090-184-D1 metadata.htm; Class IV Table 1 (variable scope), Table 2 (consolidation), Class V B–C (source handling and derived fields).
            accessedAt: 2026-10-02
            licenseAssessment: paraphrase-only
            scope:
              zh: 仅解释历史汇总、中位数、部分 GLM 调整及字段边界；不证明 COL26.8 物种概念等同。
              en: Historical consolidation, medians, partial GLM adjustment and variable scopes; not proof of equivalent COL26.8 species concepts.
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
            locator: August 2015 archive; 33 authored same-name records placed under Presbytini by pinned COL ancestry.
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
            locator: EltonTraits 1.0; 41 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 29
              foraging: 41
              activity: 41
            readingTargets:
              - name: Nasalis larvatus
                colId: 45QBH
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Nasalis/Nasalis_larvatus
              - name: Presbytis frontata
                colId: 4MBB3
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_frontata
              - name: Presbytis thomasi
                colId: 4MBBP
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_thomasi
              - name: Presbytis siamensis
                colId: 4MBBK
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_siamensis
              - name: Presbytis rubicunda
                colId: 4MBBG
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_rubicunda
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
        - referenceId: ref-2bbbd988-b0a6-4105-b535-f1d77d8eda57
          metadataVariant: 0
          sourceKey: pantheriaLimitedWR05
          usage:
            locator: PanTHERIA WR05 August 2008; 1 authored entries grouped under Presbytini by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            licenseAssessment: CC0-archive-attributed-summary
            scope:
              zh: 仅概括本批有内容的历史条目，不代表完整后代覆盖。
              en: Only this batch’s authored historical entries; no complete descendant coverage.
            readingTargets:
              - colId: 4MBB3
                name: Presbytis frontata
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_frontata
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
            - readingTargets
        - referenceId: ref-c9ca5cd3-8f21-4b65-b2d1-9f76dd3b9a8b
          metadataVariant: 0
          sourceKey: pantheriaConsolidation2009
          usage:
            locator: Ecological Archives E090-184-D1 metadata.htm; Class IV Table 1 (variable scope), Table 2 (consolidation), Class V B–C (source handling and derived fields).
            accessedAt: 2026-10-02
            licenseAssessment: paraphrase-only
            scope:
              zh: 仅解释历史汇总、中位数、部分 GLM 调整及字段边界；不证明 COL26.8 物种概念等同。
              en: Historical consolidation, medians, partial GLM adjustment and variable scopes; not proof of equivalent COL26.8 species concepts.
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
        - referenceId: ref-1948a24d-679d-4e46-ac0d-16ed62cf4201
          metadataVariant: 0
          sourceKey: ernestLifeHistories2003
          usage:
            locator: Mammal_lifehistories_v2.txt; 8 authored records grouped under pinned COL ancestry.
            accessedAt: 2026-10-03
            readingTargets:
              - colId: 45QBH
                name: Nasalis larvatus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Nasalis/Nasalis_larvatus
              - colId: 7899P
                name: Presbytis comata
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_comata
              - colId: 4MBBG
                name: Presbytis rubicunda
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_rubicunda
              - colId: 4MBBF
                name: Presbytis potenziani
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_potenziani
              - colId: 4MBB9
                name: Presbytis melalophos
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Colobinae/Presbytini/Presbytis/Presbytis_melalophos
            fieldAccountCounts:
              gestation(mo): 3
              newborn(g): 2
              weaning(mo): 3
              wean mass(g): 1
              AFR(mo): 2
              max. life(mo): 1
              litter size: 8
              litters/year: 3
            scope:
              zh: 只覆盖本批资料页；未声称全部后代内容已完成。
              en: This batch’s accounts only; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - readingTargets
            - fieldAccountCounts
            - scope
        - referenceId: ref-4b36e3a9-de16-48d2-874d-aa8230120ac4
          metadataVariant: 0
          sourceKey: zhang2024CatBaGenomics
          usage:
            title: Genomic adaptation to small population size and saltwater consumption in the critically endangered Cat Ba langur
            url: https://www.nature.com/articles/s41467-024-52811-7
            accessedAt: 2026-10-03
            locator: Selected abstract/results (sampling, phylogeny, diversity/ROH, selection/variants), northern-phylogeny and calcium/saltwater discussion, and corresponding methods; no full genetic-load/supplement/raw-read/figure/video audit.
            scope:
              zh: 四个 Cat Ba 个体的限定基因组研究与单个复用 ebenus 比较样本；属／族为证据边界比较。
              en: Bounded genomics from four Cat Ba individuals and one reused ebenus comparison sample; genus/tribe compare evidence limits.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - articleNumber
            - publishedYear
            - publishedAt
            - url
            - sourceVersion
            - accessedAt
            - locator
            - scope
        - referenceId: ref-b59b8513-7bc4-4dac-8b34-309a0ed1d970
          metadataVariant: 0
          sourceKey: liu2020LimestoneGenomics
          usage:
            title: Genomic Mechanisms of Physiological and Morphological Adaptations of Limestone Langurs to Karst Habitats
            url: https://academic.oup.com/mbe/article/37/4/952/5679778
            accessedAt: 2026-10-03
            locator: Main-text sampling/resequencing and CACNA1C functional results/methods; supplementary PDF pages 3, 18 and 19, full Table S16 and page-19 pixels.
            scope:
              zh: 原重测序样本来源及细胞功能证据的限定比较；不裁定 ebenus 野外概念。
              en: Bounded original resequencing provenance and cellular-function comparison; no resolution of the ebenus field concept.
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
            - firstPublishedOnlineAt
            - url
            - sourceVersion
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Presbytini
