---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Primates
    commonName: Crown Primates
    commonNameZh: 灵长类冠群
    rank: order
    taxonId: txn:40700
    firstAppearance: 79.2
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - relation: supports
          referenceId: dos-reis-2018-primate-clock
          pages: 604–608
          figure: Figures 1 and 5
          quoteLocator: Supplementary time-estimate spreadsheet; calibration strategies A and B
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates
      rangeKind: global-composite
      taxonomicConcept: crown Primates model interval and living continuation
      geographicScope: 372-species phylogeny; global living continuation
      olderMa: 79.2
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 9.2
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Crown-primate_relaxed-clock_interval/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: dos-reis-2018-primate-clock
          locator: pp. 604–608; Figures 1 and 5; Supplementary time-estimate spreadsheet
  catalogue-profile:
    scientificName: Primates
    rank: order
    sourceDatasetId: "2144"
    name:
      zh: Primates
      en: Primates
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
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
      - topic: overview
        sourceIds:
          - taxonomy
          - pantheriaLimitedWR05
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
          - pantheriaLimitedWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: overview
        sourceIds:
          - pantheriaLimitedWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: interpretation
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: overview
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Primates
            url: https://www.checklistbank.org/dataset/316115/taxon/3W7
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
            locator: PanTHERIA WR05 August 2008; 78 authored entries grouped under Primates by pinned COL26.8 ancestry.
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
            locator: August 2015 archive; 231 authored same-name records placed under Primates by pinned COL ancestry.
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
            locator: EltonTraits 1.0; 267 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 230
              foraging: 267
              activity: 265
            readingTargets:
              - name: Allocebus trichotis
                colId: BVDB
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Lemuriformes/Cheirogaleoidea/Cheirogaleidae/Allocebus/Allocebus_trichotis
              - name: Cheirogaleus crossleyi
                colId: 5XRNW
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Lemuriformes/Cheirogaleoidea/Cheirogaleidae/Cheirogaleus/Cheirogaleus_crossleyi
              - name: Cheirogaleus major
                colId: 69RNW
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Lemuriformes/Cheirogaleoidea/Cheirogaleidae/Cheirogaleus/Cheirogaleus_major
              - name: Cheirogaleus medius
                colId: 5XRNX
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Lemuriformes/Cheirogaleoidea/Cheirogaleidae/Cheirogaleus/Cheirogaleus_medius
              - name: Cheirogaleus minusculus
                colId: 5Y3NY
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Lemuriformes/Cheirogaleoidea/Cheirogaleidae/Cheirogaleus/Cheirogaleus_minusculus
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
            locator: PanTHERIA WR05 August 2008; 9 authored entries grouped under Primates by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            licenseAssessment: CC0-archive-attributed-summary
            scope:
              zh: 仅概括本批有内容的历史条目，不代表完整后代覆盖。
              en: Only this batch’s authored historical entries; no complete descendant coverage.
            readingTargets:
              - colId: J8NW
                name: Ateles chamek
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Atelidae/Atelinae/Ateles/Ateles_chamek
              - colId: STGF
                name: Cercopithecus sclateri
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Cercopithecini/Cercopithecus/Cercopithecus_sclateri
              - colId: 3CHNM
                name: Euoticus pallidus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Lorisiformes/Galagidae/Euoticus/Euoticus_pallidus
              - colId: 3F2D4
                name: Galago gallarum
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Lorisiformes/Galagidae/Galago/Galago_gallarum
              - colId: 4JBGS
                name: Pithecia aequatorialis
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Pithecia/Pithecia_aequatorialis
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
            locator: Mammal_lifehistories_v2.txt; 47 authored records grouped under pinned COL ancestry.
            accessedAt: 2026-10-03
            readingTargets:
              - colId: PQG3
                name: Callimico goeldii
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Callimico/Callimico_goeldii
              - colId: 5WVNT
                name: Callithrix flaviceps
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Callithrix/Callithrix_flaviceps
              - colId: 697NS
                name: Callithrix jacchus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Callithrix/Callithrix_jacchus
              - colId: 3T6ZV
                name: Leontopithecus rosalia
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Leontopithecus/Leontopithecus_rosalia
              - colId: RYZ5
                name: Cebus capucinus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cebidae/Cebinae/Cebus/Cebus_capucinus
            fieldAccountCounts:
              gestation(mo): 34
              newborn(g): 32
              weaning(mo): 32
              wean mass(g): 19
              AFR(mo): 28
              max. life(mo): 19
              litter size: 46
              litters/year: 27
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Primates

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 372-species relaxed-clock analysis estimates crown Primates at 79.2–70.0 Ma under its selected autocorrelated model and calibration strategy A, whereas another calibration strategy is younger; neither posterior interval is a fossil occurrence or exact crown-origin observation.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The model, calibration strategy and posterior interval are explicit in the primary study. Medium confidence reflects strategy sensitivity rather than poor execution.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究明确给出模型、校准策略与后验区间；中等置信度反映策略敏感性，而非研究执行不足。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项覆盖 372 个物种的松弛时钟分析，在所选自相关模型与校准策略 A 下估计冠群灵长类为 7920 万—7000 万年前，而另一校准策略更年轻；两个后验区间都不是化石出现记录或冠群起源的精确观测。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is the upper end of one model posterior. Calibration strategy B spans 71.4–63.9 Ma; neither interval is a fossil occurrence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Bayesian relaxed-clock posterior under the selected autocorrelated model and calibration strategy A, combined with living crown membership.
<!-- /evo:text -->
