---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Cryptobranchoidea
    rank: unranked clade
    sourceTaxonId: txn:37348
    name:
      en: Cryptobranchoidea
      zh: Cryptobranchoidea
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
    originalBibliography: K.-Q. Gao and N. H. Shubin. 2003. Earliest known crown-group salamanders. Nature 422:424-428
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
        - txn:371246
        - txn:137502
        - txn:415410
        - txn:414212
        - txn:264801
        - txn:110599
        - txn:110598
        - txn:110619
        - txn:110604
        - txn:64153
        - txn:161671
        - txn:213927
      exactOccurrenceCount: 39
      datedOccurrenceCount: 39
      collectionIntervalBoundsMa:
        older: 168.2
        younger: 0.0117
      conceptEquivalenceCertified: false
  amphibia-collection-placeholder:
    name:
      en: Cryptobranchoidea
      zh: Cryptobranchoidea
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
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00052.json.gz
          field: /records/345
          queryName: Cryptobranchoidea
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 48
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Cryptobranchoidea

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:37348; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en -->
PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh -->
PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
Supplementary fossil-source reader. Collection intervals, database ancestry and source concepts remain distinct from lineage origin, a resolved phylogeny and current species. This is.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是补充化石来源读本。采集区间、数据库分类路径及来源概念，与谱系起源、已解析系统发育和当前物种分别保留。
<!-- /evo:text -->
