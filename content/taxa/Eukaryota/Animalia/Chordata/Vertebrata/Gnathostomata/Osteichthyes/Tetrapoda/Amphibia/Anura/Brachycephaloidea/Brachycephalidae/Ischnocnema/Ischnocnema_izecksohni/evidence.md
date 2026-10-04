---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ischnocnema izecksohni (Caramaschi & Kisteumacher, 1989)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Ischnocnema izecksohni
      zh: Ischnocnema izecksohni
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/3/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/4/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/4/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
      - topic: overview
        readerSectionKind: amphibia-collection-placeholder
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
        sourceIds:
          - amphibia-collection-status
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/6N9T3
            locator: Complete paginated accepted-species search under Amphibia PH; recorded classification chain.
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
            - locator
            - scope
        - referenceId: ref-4fd739aa-35c7-48aa-ac52-21765270fb85
          metadataVariant: 0
          sourceKey: primary-pmc10688756-6n9t3
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/locator
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
            - authors
            - year
            - doi
            - url
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - attribution
            - locator
            - scope
        - referenceId: ref-amphibia-collection-index-2026-10-03
          metadataVariant: 0
          sourceKey: amphibia-collection-status
          usage:
            locator: docs/amphibia-content/reference-index.md
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
    primaryStudyScopes:
      - doi: 10.1371/journal.pone.0291644
        referenceId: ref-4fd739aa-35c7-48aa-ac52-21765270fb85
        sourceKey: primary-pmc10688756-6n9t3
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10688756/article.xml
        sourceConcept:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/0/sourceConcept
        evidenceRead:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/0/evidenceRead
        contemporaryConceptEquivalence: not-independently-certified
        rightsBoundary:
          license: CC BY 4.0
          licenseUrl: https://creativecommons.org/licenses/by/4.0/
          attribution: Own factual synthesis and Chinese translation of the original study; no figures reproduced.
        sectionEvidence:
          - sectionOrdinal: 0
            topic: ecology
            heading:
              en: A source-coded development mode and oviposition environment
              zh: 来源编码的发育方式与产卵环境
            referenceId: ref-4fd739aa-35c7-48aa-ac52-21765270fb85
            sourceKey: primary-pmc10688756-6n9t3
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/locator
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/zh
          - sectionOrdinal: 1
            topic: ecology
            heading:
              en: Juvenile habitat and egg-site categories have defined scope
              zh: 幼体生境及卵位点类别有明确范围
            referenceId: ref-4fd739aa-35c7-48aa-ac52-21765270fb85
            sourceKey: primary-pmc10688756-6n9t3
            locator: PMC10688756 S3 File Traits row 202 Ischnocnema_izecksohni habitat/site columns; XML Functional diversity
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/zh
          - sectionOrdinal: 2
            topic: morphology
            heading:
              en: Compiled lengths retain inference and measurement limits
              zh: 汇编长度保留推断及测量限制
            referenceId: ref-4fd739aa-35c7-48aa-ac52-21765270fb85
            sourceKey: primary-pmc10688756-6n9t3
            locator: PMC10688756 S3 File Traits row 202 Ischnocnema_izecksohni length/Observation columns; XML Functional diversity
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/scope/zh
  amphibia-collection-placeholder:
    name:
      en: Ischnocnema izecksohni
      zh: Ischnocnema izecksohni
    sections:
      - topic: overview
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
    collectionLedgerPath: docs/amphibia-content/full-roster-literature-collection.json
    concepts:
      - authority: COL26.8
        id: 6N9T3
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00008.json.gz
          field: /records/23
          queryName: Ischnocnema izecksohni
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00023.json.gz
          field: /records/389
          queryName: Eleutherodactylus izecksohni
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Ischnocnema izecksohni

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Ischnocnema izecksohni
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Accepted name, rank, recorded classification and descendant roster in the pinned catalogue. No biological species synthesis or equivalence with PBDB.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定目录中的接受名称、等级、所记分类和后代名录；没有进行生物学物种综合，也不声明与 PBDB 记录等同。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/locator -->
Ischnocnema izecksohni: XML Methods, Results and Discussion subsections read; S3 workbook Traits464rows and References140entries extracted with row/inference flags; original upstream trait studies, voucher identity, site records, fitted chains and causal mechanisms not independently examined; no figures or deposited datasets reproduced
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Limited study sample; population-wide biology and contemporary concept equivalence are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
有限研究样本；种群整体生物学与当代概念等同性未经独立认证。
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / sourceConcept

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sourceConcept -->
2023 workbook Ischnocnema_izecksohni, source taxonomy and compiled biological traits; exact-name candidate, not cross-revision concept certification
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / evidenceRead

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/evidenceRead -->
Ischnocnema izecksohni: XML Methods, Results and Discussion subsections read; S3 workbook Traits464rows and References140entries extracted with row/inference flags; original upstream trait studies, voucher identity, site records, fitted chains and causal mechanisms not independently examined; no figures or deposited datasets reproduced
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / locator

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/locator -->
PMC10688756 S3 File Traits row 202 Ischnocnema_izecksohni; XML Functional diversity; upstream reference numbers 1, 2, 3, 69
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->
