---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pelobates vespertinus (Pallas, 1771)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Pelobates vespertinus
      zh: Pelobates vespertinus
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
            url: https://www.checklistbank.org/dataset/316115/taxon/76CZM
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
        - referenceId: ref-6778d646-8dca-4e63-a5b2-9983d8f20715
          metadataVariant: 0
          sourceKey: dufresnes-2019
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
            - license
            - licenseUrl
            - licenseAssessment
            - rightsEvidenceUrl
            - accessedAt
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
      - doi: 10.3897/zookeys.859.33634
        sourceFile: data/sources/snapshots/pelobates-taxonomy-2019-2026-10-02/article.xml
        sourceConcept: Pelobates vespertinus (Pallas, 1771)
        evidenceRead: full-primary-taxonomic-account
        dataScope:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/0/dataScope
        contemporaryConceptEquivalence: not-independently-certified
  amphibia-collection-placeholder:
    name:
      en: Pelobates vespertinus
      zh: Pelobates vespertinus
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
        id: 76CZM
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00011.json.gz
          field: /records/442
          queryName: Pelobates vespertinus
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 11
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00032.json.gz
          field: /records/415
          queryName: Pelobates campestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00043.json.gz
          field: /records/284
          queryName: Rana vespertina
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 10
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00043.json.gz
          field: /records/285
          queryName: Bufo vespertinus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00045.json.gz
          field: /records/207
          queryName: Pelobates fuscus orientalis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00048.json.gz
          field: /records/396
          queryName: Pelobates fuscus vespertinus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/323
          queryName: Pelobates borkini
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

# Pelobates vespertinus

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Pelobates vespertinus
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
Pelobates vespertinus account: Diagnosis, Diversity; Supplementary Table S1; original measurements and phylogeographic studies cited within the account
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
A dated population-based measurement compilation and synthesis of cited hybrid-zone studies; not invariant species limits or a contemporary conservation assessment.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
有年代限定的种群测量汇编与所引杂交带研究综合；不是不变的物种极限或当代保护评估。
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / dataScope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/dataScope -->
Population-based literature compilation, not a new individual-level body-size dataset; hybrid-zone conclusion summarizes cited genetic studies
<!-- /evo:text -->
