---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Cyclotosaurus buechneri
    rank: species
    sourceTaxonId: txn:367485
    name:
      en: Cyclotosaurus buechneri
      zh: Cyclotosaurus buechneri
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
      - occurrenceId: occ:1396074
        collectionId: col:192319
        acceptedTaxonId: txn:367485
        identifiedName: Cyclotosaurus buechneri n. sp.
        taxonomicDifference: null
        referenceId: ref:65069
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: DE
          stateProvince: North Rhine-Westphalia
          county: Sieker,
        stratigraphy:
          group: null
          formation: Stuttgart
          member: null
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:2041646
        collectionId: col:275897
        acceptedTaxonId: txn:367485
        taxonomicDifference: null
        referenceId: ref:93452
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: null
        stratigraphy:
          group: null
          formation: "Stuttgart (reg.: Schilfsandstein)"
          member: null
        olderAgeMa: 237
        youngerAgeMa: 227.3
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Cyclotosaurus buechneri
      zh: Cyclotosaurus buechneri
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
        id: txn:367485
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/176
          queryName: Cyclotosaurus buechneri
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

# Cyclotosaurus buechneri

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:367485; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
F. Witzmann, S. Sachs, and C. J. Nyhuis. 2016. A new species of Cyclotosaurus (Stereospondyli, Capitosauria) from the Late Triassic of Bielefeld, NW Germany, and the intrarelationships of the genus. Fossil Record 19:83-100
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
F. Witzmann, S. Sachs, and C. J. Nyhuis. 2016. A new species of Cyclotosaurus (Stereospondyli, Capitosauria) from the Late Triassic of Bielefeld, NW Germany, and the intrarelationships of the genus. Fossil Record 19:83-100
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. R. Schoch, F. Witzmann, and I. Werneburg, R. Werneburg, E. Mujal, R. Moreno. 2025. The morphology and evolutionary history of the temnospondyl genus Cyclotosaurus with a focus on material from Germany. PalZ 99(3):319-337
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
