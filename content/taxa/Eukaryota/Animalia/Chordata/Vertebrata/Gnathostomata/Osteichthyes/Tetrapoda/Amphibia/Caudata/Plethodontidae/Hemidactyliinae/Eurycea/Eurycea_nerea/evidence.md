---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Eurycea nerea (Bishop, 1944)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Eurycea nerea
      zh: Eurycea nerea
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6HF6M
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
        - referenceId: ref-7c723eb2-2d25-4035-a0fe-348e7d84eea6
          metadataVariant: 0
          sourceKey: primary-pmc10658874-6hf6m
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
      - doi: 10.1645/23-6
        referenceId: ref-7c723eb2-2d25-4035-a0fe-348e7d84eea6
        sourceKey: primary-pmc10658874-6hf6m
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10658874/article.xml
        sourceConcept:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/0/sourceConcept
        evidenceRead:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/0/evidenceRead
        contemporaryConceptEquivalence: not-independently-certified
        rightsBoundary:
          license: CC BY-NC-ND 4.0
          licenseUrl: https://creativecommons.org/licenses/by-nc-nd/4.0/
          attribution:
            markdown: evidence.md
            field: /records/catalogue-profile/primaryStudyScopes/0/rightsBoundary/attribution
        sectionEvidence:
          - sectionOrdinal: 0
            topic: ecology
            heading:
              en: Adult tapeworm associations in a historical North American checklist
              zh: 北美历史清单中的成体绦虫关联
            referenceId: ref-7c723eb2-2d25-4035-a0fe-348e7d84eea6
            sourceKey: primary-pmc10658874-6hf6m
            locator: PMC10658874 XML s3j direct-child rows163,164; s3a direct-child row10 namedEurycea nerea
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
            topic: range
            heading:
              en: Reported parasite localities retain their historical scope
              zh: 寄生记录地点保留历史范围
            referenceId: ref-7c723eb2-2d25-4035-a0fe-348e7d84eea6
            sourceKey: primary-pmc10658874-6hf6m
            locator: PMC10658874 XML s3j direct-child rows163,164; s3a direct-child row10 namedEurycea nerea
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
            topic: methods
            heading:
              en: How to interpret the compiled parasite evidence
              zh: 如何理解汇编的寄生证据
            referenceId: ref-7c723eb2-2d25-4035-a0fe-348e7d84eea6
            sourceKey: primary-pmc10658874-6hf6m
            locator: PMC10658874 XML s2 methods; s3a introduction; s3j introduction/Amphibia hostlabels; s5 source totals
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
      en: Eurycea nerea
      zh: Eurycea nerea
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
        id: 6HF6M
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00005.json.gz
          field: /records/426
          queryName: Eurycea nerea
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00021.json.gz
          field: /records/52
          queryName: Typhlotriton nereus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Eurycea nerea

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Eurycea nerea
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
Eurycea nerea: XML s2 methods; s3a checklist scope and amphibian Bothriocephalus/Schyzocotyle entries; s3c–s3i numbered parasite headings and named amphibian host/locality paragraphs; s3j Amphibia entries through Siren lacertina before Reptilia; s4 correction/larval-scope discussion and s5 conclusions inspected. Own factual summaries only; no source prose/table/key/illustrations reproduced or translated; no original cited studies/vouchers/sequences independently read or reidentified. Identification key and figures not independently reviewed.; no figures or deposited datasets reproduced
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
Historical compiled hostlabel Eurycea nerea; exact pinned-name link only, not originalvoucher/currentconcept authentication
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / evidenceRead

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/evidenceRead -->
Eurycea nerea: XML s2 methods; s3a checklist scope and amphibian Bothriocephalus/Schyzocotyle entries; s3c–s3i numbered parasite headings and named amphibian host/locality paragraphs; s3j Amphibia entries through Siren lacertina before Reptilia; s4 correction/larval-scope discussion and s5 conclusions inspected. Own factual summaries only; no source prose/table/key/illustrations reproduced or translated; no original cited studies/vouchers/sequences independently read or reidentified. Identification key and figures not independently reviewed.; no figures or deposited datasets reproduced
<!-- /evo:text -->

## primaryStudyScopes / rightsBoundary / attribution

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/rightsBoundary/attribution -->
Original bilingual factual summaries of a compiled literature checklist; no source prose, tables, identification key or illustrations reproduced, adapted or translated.
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
