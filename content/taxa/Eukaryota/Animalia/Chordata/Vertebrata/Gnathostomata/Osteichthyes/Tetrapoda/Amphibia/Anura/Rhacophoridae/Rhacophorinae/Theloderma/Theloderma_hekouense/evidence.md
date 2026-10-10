---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Theloderma hekouense Du, Wang, Liu & Yu, 2022
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Theloderma hekouense
      zh: Theloderma hekouense
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
            url: https://www.checklistbank.org/dataset/316115/taxon/TCQ44
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
        - referenceId: ref-a9796ba9-b050-4514-a3f5-d8610f65f9da
          metadataVariant: 0
          sourceKey: primary-pmc9848745-tcq44
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
      - doi: 10.3897/zookeys.1099.80390
        referenceId: ref-a9796ba9-b050-4514-a3f5-d8610f65f9da
        sourceKey: primary-pmc9848745-tcq44
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC9848745/article.xml
        sourceConcept: Theloderma hekouense
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
            topic: distribution
            heading:
              en: Hekou specimens and a Vietnamese molecular attribution
              zh: 河口标本与越南分子归属
            referenceId: ref-a9796ba9-b050-4514-a3f5-d8610f65f9da
            sourceKey: primary-pmc9848745-tcq44
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/locator
            locatorPrecision: recorded-study-reading-scope; not a certified paragraph-by-paragraph locator
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
            topic: reproduction
            heading:
              en: Water-filled cavities and artificial traps
              zh: 蓄水腔体与人工诱捕设施
            referenceId: ref-a9796ba9-b050-4514-a3f5-d8610f65f9da
            sourceKey: primary-pmc9848745-tcq44
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/locator
            locatorPrecision: recorded-study-reading-scope; not a certified paragraph-by-paragraph locator
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
  amphibia-collection-placeholder:
    name:
      en: Theloderma hekouense
      zh: Theloderma hekouense
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
        id: TCQ44
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00017.json.gz
          field: /records/12
          queryName: Theloderma hekouense
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Theloderma hekouense

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Theloderma hekouense
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
Theloderma hekouense: Species distribution account including habitat and trapping context; no figures or deposited datasets reproduced
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Limited study sample; population-wide biology and contemporary concept equivalence are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
有限研究样本；种群整体生物学与当代概念等同性未经独立认证。
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / evidenceRead

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/evidenceRead -->
Theloderma hekouense: Species distribution account including habitat and trapping context; no figures or deposited datasets reproduced
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / locator

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/locator -->
Theloderma hekouense: Species distribution account including habitat and trapping context; no figures or deposited datasets reproduced
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / locator

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/locator -->
Theloderma hekouense: Species distribution account including habitat and trapping context; no figures or deposited datasets reproduced
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->
