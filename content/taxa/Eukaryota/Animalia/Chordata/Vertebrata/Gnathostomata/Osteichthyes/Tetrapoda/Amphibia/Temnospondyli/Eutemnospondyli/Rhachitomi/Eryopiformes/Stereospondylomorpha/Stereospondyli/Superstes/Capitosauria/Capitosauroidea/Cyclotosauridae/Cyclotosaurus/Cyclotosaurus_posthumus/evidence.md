---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Cyclotosaurus posthumus
    rank: species
    sourceTaxonId: txn:57084
    name:
      en: Cyclotosaurus posthumus
      zh: Cyclotosaurus posthumus
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
      - occurrenceId: occ:1104091
        collectionId: col:139488
        acceptedTaxonId: txn:57084
        identifiedName: aff. Cyclotosaurus posthumus
        taxonomicDifference: null
        referenceId: ref:44850
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: DE
          stateProvince: Sachsen-Anhalt
          county: null
        stratigraphy:
          group: Keuper
          formation: Trossingen
          member: Knollenmergel
        olderAgeMa: 205.7
        youngerAgeMa: 201.4
      - occurrenceId: occ:1419650
        collectionId: col:47800
        acceptedTaxonId: txn:57084
        identifiedName: Cyclotosaurus posthumus n. sp.
        taxonomicDifference: null
        referenceId: ref:67041
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: null
        stratigraphy:
          group: null
          formation: Löwenstein
          member: null
        olderAgeMa: 215.38
        youngerAgeMa: 211.18
      - occurrenceId: occ:1419651
        collectionId: col:138914
        acceptedTaxonId: txn:57084
        taxonomicDifference: null
        referenceId: ref:67041
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Wurttemberg
          county: Stuttgart
        stratigraphy:
          group: Keuper
          formation: Löwenstein
          member: Lower Stubensandstein
        olderAgeMa: 227.3
        youngerAgeMa: 205.7
      - occurrenceId: occ:2041648
        collectionId: col:275899
        acceptedTaxonId: txn:57084
        taxonomicDifference: null
        referenceId: ref:93452
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: null
        stratigraphy:
          group: null
          formation: "Löwenstein (reg.: Stubensandstein)"
          member: null
        olderAgeMa: 227.3
        youngerAgeMa: 205.7
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Cyclotosaurus posthumus
      zh: Cyclotosaurus posthumus
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
        id: txn:57084
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/183
          queryName: Cyclotosaurus posthumus
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

# Cyclotosaurus posthumus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:57084; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
D. M. S. Watson. 1958. A new labyrinthodont (Paracyclotosaurus) from the upper Trias of New South Wales. Bulletin of the British Museum (Natural History) Geology 3(7):233-262
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
O. Kuhn. 1939. Beiträge zur Keuperfauna von Halberstadt [Contributions to the Keuper fauna of Halberstadt]. Palaeontologische Zeitschrift 21:258-286
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. R. Schoch and R. Werneburg. 1999. The Triassic labyrinthodonts from Germany. Zentralblatt für Geologie und Paläontologie Teil I 7-8:629-650
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
R. R. Schoch and R. Werneburg. 1999. The Triassic labyrinthodonts from Germany. Zentralblatt für Geologie und Paläontologie Teil I 7-8:629-650
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
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
