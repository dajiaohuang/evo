---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Dvinosauroidea
    rank: superfamily
    sourceTaxonId: txn:150301
    name:
      en: Dvinosauroidea
      zh: Dvinosauroidea
    checkedAt: 2026-10-02
    sections:
      - topic: taxonomy
        title:
          en: Recorded fossil concept
          zh: 来源记载的化石概念
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/0/text/zh
        sourceIds:
          - pbdb
      - topic: fossil
        sourceIds:
          - pbdb
        readerSectionKind: pbdb-descendant-material
        title:
          en: Material in the captured fossil roster
          zh: 捕获化石名录中的材料
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/1/text/zh
      - topic: overview
        sourceIds:
          - pbdb
        readerSectionKind: pbdb-child-route
        title:
          en: Read the recorded PBDB descendants
          zh: 阅读所记 PBDB 后代
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/2/text/zh
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
        - referenceId: ref-f1e3d50c-c9eb-48f1-8ba8-098589af8953
          metadataVariant: 0
          sourceKey: pbdb
          usage:
            locator:
              markdown: evidence.md
              field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - version
            - url
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
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
    originalBibliography:
      markdown: evidence.md
      field: /records/pbdb-fossil-reader/originalBibliography
    occurrenceEvidence: []
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
    descendantMaterialSummary:
      sourceConceptIds:
        - txn:349295
        - txn:56905
        - txn:349286
        - txn:349285
        - txn:349879
        - txn:242829
        - txn:251471
        - txn:120928
        - txn:172842
        - txn:255216
        - txn:436423
        - txn:137370
        - txn:255215
      exactOccurrenceCount: 42
      datedOccurrenceCount: 42
      collectionIntervalBoundsMa:
        older: 312.8
        younger: 247
      conceptEquivalenceCertified: false
  amphibia-collection-placeholder:
    name:
      en: Dvinosauroidea
      zh: Dvinosauroidea
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
      - authority: PBDB snapshot2026-10-02
        id: null
        rank: group
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00051.json.gz
          field: /records/369
          queryName: Dvinosauroidea
          queryKind: archived-synonym-or-higher-taxon
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

# Dvinosauroidea

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:150301; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en -->
PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh -->
PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。
<!-- /evo:text -->

## pbdb-fossil-reader / originalBibliography

<!-- evo:text /records/pbdb-fossil-reader/originalBibliography -->
A. M. Yates and A. Warren. 2000. The phylogeny of the ‘higher’ temnospondyls (Vertebrata: Choanata) and its implications for the monophyly and origins of the Stereospondyli. Zoological Journal of the Linnean Society 128(1):77-121
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
Supplementary fossil-source reader. Collection intervals, database ancestry and source concepts remain distinct from lineage origin, a resolved phylogeny and current species. This is.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是补充化石来源读本。采集区间、数据库分类路径及来源概念，与谱系起源、已解析系统发育和当前物种分别保留。
<!-- /evo:text -->
