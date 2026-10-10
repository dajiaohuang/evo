---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Branchierpeton saalense
    rank: species
    sourceTaxonId: txn:336840
    name:
      en: Branchierpeton saalense
      zh: Branchierpeton saalense
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
        title:
          en: Fossil occurrence evidence
          zh: 化石出现记录
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/1/text/zh
        sourceIds:
          - pbdb
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
    occurrenceEvidence:
      - occurrenceId: occ:1315480
        collectionId: col:176536
        acceptedTaxonId: txn:336840
        identifiedName: Branchierpeton saalense n. sp.
        taxonomicDifference: null
        referenceId: ref:58149
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: DE
          stateProvince: Sachsen-Anhalt
          county: null
        stratigraphy:
          group: null
          formation: Wettin
          member: null
        olderAgeMa: 307.4
        youngerAgeMa: 300.3
      - occurrenceId: occ:1315481
        collectionId: col:176537
        acceptedTaxonId: txn:336840
        taxonomicDifference: null
        referenceId: ref:58149
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: DE
          stateProvince: Saxony-Anhalt
          county: null
        stratigraphy:
          group: null
          formation: Wettin
          member: null
        olderAgeMa: 307.4
        youngerAgeMa: 283.3
      - occurrenceId: occ:1315482
        collectionId: col:176538
        acceptedTaxonId: txn:336840
        taxonomicDifference: null
        referenceId: ref:58149
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: DE
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Mohrenbach
          member: null
        olderAgeMa: 307.4
        youngerAgeMa: 300.3
      - occurrenceId: occ:1315483
        collectionId: col:176539
        acceptedTaxonId: txn:336840
        taxonomicDifference: null
        referenceId: ref:58151
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: CZ
          stateProvince: Bohemian Region
          county: null
        stratigraphy:
          group: null
          formation: Line
          member: null
        olderAgeMa: 300.9
        youngerAgeMa: 300.3
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Branchierpeton saalense
      zh: Branchierpeton saalense
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
        id: txn:336840
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/55
          queryName: Branchierpeton saalense
          queryKind: accepted-name
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

# Branchierpeton saalense

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:336840; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
R. Werneburg. 1990. Dissorophoiden (Amphibia) aus dem Grenzbereich Karbon/Perm der Saale-Senke und des Ilfelder Beckens (DDR). Zeitschrift fur geologische Wissenschaften Berlin 18:665-677
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
R. Werneburg. 1990. Dissorophoiden (Amphibia) aus dem Grenzbereich Karbon/Perm der Saale-Senke und des Ilfelder Beckens (DDR). Zeitschrift fur geologische Wissenschaften Berlin 18:665-677
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. Werneburg. 1990. Dissorophoiden (Amphibia) aus dem Grenzbereich Karbon/Perm der Saale-Senke und des Ilfelder Beckens (DDR). Zeitschrift fur geologische Wissenschaften Berlin 18:665-677
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
R. Werneburg. 1990. Dissorophoiden (Amphibia) aus dem Grenzbereich Karbon/Perm der Saale-Senke und des Ilfelder Beckens (DDR). Zeitschrift fur geologische Wissenschaften Berlin 18:665-677
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
J. A. Zajic, A. R. Milner, and J. Klembara. 1990. The first partially articulated amphibian (Temnospondlyi: Dissorophoidea) from the Line Formation (Stephanian C, central Bohemia). Vestnik Ustredniho Ustavu Geologickeho 65:329-337
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
