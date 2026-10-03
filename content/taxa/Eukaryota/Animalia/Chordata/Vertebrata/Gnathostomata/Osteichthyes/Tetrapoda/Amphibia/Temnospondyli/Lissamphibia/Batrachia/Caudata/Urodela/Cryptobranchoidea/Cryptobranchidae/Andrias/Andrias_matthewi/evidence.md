---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Andrias matthewi
    rank: species
    sourceTaxonId: txn:110604
    name:
      en: Andrias matthewi
      zh: Andrias matthewi
    reviewStatus: source-linked
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
    originalBibliography: B. G. Naylor. 1981. Cryptobranchid salamanders from the Paleocene and Miocene of Saskatchewan. Copeia 1981(1):76-86
    occurrenceEvidence:
      - occurrenceId: occ:286986
        collectionId: col:18284
        acceptedTaxonId: txn:110604
        identifiedTaxonId: txn:110625
        identifiedName: Cryptobranchus mccalli n. sp.
        taxonomicDifference: null
        referenceId: ref:25657
        bibliography: J. A. Tihen and C. J. Chantell. 1963. Urodele remains from the Valentine Formation of Nebraska. Copeia 1963(3):505-510
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Brown
        stratigraphy:
          group: Ogallala
          formation: Valentine
          member: Cornell Dam
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:287361
        collectionId: col:17965
        acceptedTaxonId: txn:110604
        taxonomicDifference: null
        referenceId: ref:7566
        bibliography: C. Meszoely. 1966. North American fossil cryptobranchid salamanders. American Midland Naturalist 75(2):495-515
        locality:
          countryCode: US
          stateProvince: Colorado
          county: Logan
        stratigraphy:
          group: null
          formation: Pawnee Creek
          member: null
        olderAgeMa: 18.5
        youngerAgeMa: 16.3
      - occurrenceId: occ:287363
        collectionId: col:17923
        acceptedTaxonId: txn:110604
        taxonomicDifference: null
        referenceId: ref:7566
        bibliography: C. Meszoely. 1966. North American fossil cryptobranchid salamanders. American Midland Naturalist 75(2):495-515
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Box Butte
        stratigraphy:
          group: null
          formation: Runningwater
          member: null
        olderAgeMa: 18.5
        youngerAgeMa: 16.3
      - occurrenceId: occ:287370
        collectionId: col:17969
        acceptedTaxonId: txn:110604
        taxonomicDifference: null
        referenceId: ref:7566
        bibliography: C. Meszoely. 1966. North American fossil cryptobranchid salamanders. American Midland Naturalist 75(2):495-515
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Sioux
        stratigraphy:
          group: null
          formation: Snake Creek
          member: subcycle 3
        olderAgeMa: 18.5
        youngerAgeMa: 16.3
      - occurrenceId: occ:287379
        collectionId: col:27418
        acceptedTaxonId: txn:110604
        taxonomicDifference: null
        referenceId: ref:7566
        bibliography: C. Meszoely. 1966. North American fossil cryptobranchid salamanders. American Midland Naturalist 75(2):495-515
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Sioux
        stratigraphy:
          group: null
          formation: Runningwater
          member: null
        olderAgeMa: 18.5
        youngerAgeMa: 16.3
      - occurrenceId: occ:707290
        collectionId: col:75873
        acceptedTaxonId: txn:110604
        identifiedTaxonId: var:110605
        identifiedName: Cryptobranchus matthewi
        taxonomicDifference: recombined as
        referenceId: ref:25656
        bibliography: B. G. Naylor. 1981. Cryptobranchid salamanders from the Paleocene and Miocene of Saskatchewan. Copeia 1981(1):76-86
        locality:
          countryCode: CA
          stateProvince: Saskatchewan
          county: null
        stratigraphy:
          group: null
          formation: Wood Mountain
          member: null
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Andrias matthewi
      zh: Andrias matthewi
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
        id: txn:110604
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/110
          queryName: Andrias matthewi
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

# Andrias matthewi

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:110604; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
