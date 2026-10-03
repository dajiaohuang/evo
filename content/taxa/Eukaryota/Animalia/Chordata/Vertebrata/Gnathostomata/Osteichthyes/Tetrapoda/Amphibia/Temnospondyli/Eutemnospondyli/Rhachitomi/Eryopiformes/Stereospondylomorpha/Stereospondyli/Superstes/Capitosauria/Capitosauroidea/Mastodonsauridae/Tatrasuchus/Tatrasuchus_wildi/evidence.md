---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Tatrasuchus wildi
    rank: species
    sourceTaxonId: txn:179402
    name:
      en: Tatrasuchus wildi
      zh: Tatrasuchus wildi
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
    originalBibliography:
      markdown: evidence.md
      field: /records/pbdb-fossil-reader/originalBibliography
    occurrenceEvidence:
      - occurrenceId: occ:929777
        collectionId: col:101873
        acceptedTaxonId: txn:179402
        identifiedTaxonId: var:179402
        identifiedName: Kupferzellia wildi n. gen. n. sp.
        taxonomicDifference: recombined as
        referenceId: ref:35492
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Hohenlohekreis
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Upper Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:1419642
        collectionId: col:106350
        acceptedTaxonId: txn:179402
        identifiedTaxonId: var:179402
        identifiedName: Kupferzellia wildi
        taxonomicDifference: recombined as
        referenceId: ref:67041
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Schwäbisch Hall
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:1419643
        collectionId: col:101875
        acceptedTaxonId: txn:179402
        identifiedTaxonId: var:179402
        identifiedName: Kupferzellia wildi
        taxonomicDifference: recombined as
        referenceId: ref:67041
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Schwäbisch Hall
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Upper Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:1419644
        collectionId: col:106349
        acceptedTaxonId: txn:179402
        identifiedTaxonId: var:179402
        identifiedName: Kupferzellia wildi
        taxonomicDifference: recombined as
        referenceId: ref:67041
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Schwäbisch Hall
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Upper Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Tatrasuchus wildi
      zh: Tatrasuchus wildi
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
        id: txn:179402
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/228
          queryName: Tatrasuchus wildi
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

# Tatrasuchus wildi

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:179402; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
R. R. Schoch. 1997. A new capitosaur amphibian from the Upper Lettenkeuper (Triassic: Ladinian) of Kupferzell (Southern Germany). Neues Jahrbuch für Geologie und Paläontologie 203(2):239-272
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
R. R. Schoch. 1997. A new capitosaur amphibian from the Upper Lettenkeuper (Triassic: Ladinian) of Kupferzell (Southern Germany). Neues Jahrbuch für Geologie und Paläontologie 203(2):239-272
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
R. R. Schoch and R. Werneburg. 1999. The Triassic labyrinthodonts from Germany. Zentralblatt für Geologie und Paläontologie Teil I 7-8:629-650
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
