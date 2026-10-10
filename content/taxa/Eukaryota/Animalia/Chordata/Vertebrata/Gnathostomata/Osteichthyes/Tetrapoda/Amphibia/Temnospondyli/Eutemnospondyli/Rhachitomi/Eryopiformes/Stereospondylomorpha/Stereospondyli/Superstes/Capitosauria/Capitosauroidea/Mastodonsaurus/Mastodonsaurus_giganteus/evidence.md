---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Mastodonsaurus giganteus
    rank: species
    sourceTaxonId: txn:150364
    name:
      en: Mastodonsaurus giganteus
      zh: Mastodonsaurus giganteus
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
      - occurrenceId: occ:906412
        collectionId: col:101875
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
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
      - occurrenceId: occ:929766
        collectionId: col:106349
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:35488
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
          member: Upper Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:929782
        collectionId: col:101873
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
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
      - occurrenceId: occ:929799
        collectionId: col:106350
        acceptedTaxonId: txn:150364
        identifiedTaxonId: txn:150362
        identifiedName: Mastodonsaurus jaegeri n. sp.
        taxonomicDifference: null
        referenceId: ref:23491
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
          member: Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:929800
        collectionId: col:106350
        acceptedTaxonId: txn:150364
        identifiedTaxonId: var:150364
        identifiedName: Salamandroides giganteus n. gen. n. sp.
        taxonomicDifference: recombined as
        referenceId: ref:30405
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
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
      - occurrenceId: occ:929801
        collectionId: col:106356
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Ludwigsburg
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Lower Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:929802
        collectionId: col:106357
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Ludwigsburg
        stratigraphy:
          group: null
          formation: Erfurt
          member: Upper Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:929803
        collectionId: col:106358
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Ludwigsburg
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Lower Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:929804
        collectionId: col:57781
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: DE
          stateProvince: null
          county: null
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Untere Graue Mergel
        olderAgeMa: 241.464
        youngerAgeMa: 237
      - occurrenceId: occ:929808
        collectionId: col:106359
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: DE
          stateProvince: Thuringia
          county: Erfurt
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Upper Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:929809
        collectionId: col:106360
        acceptedTaxonId: txn:150364
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: DE
          stateProvince: Thuringia
          county: null
        stratigraphy:
          group: Keuper
          formation: Erfurt
          member: Upper Lettenkeuper
        olderAgeMa: 239.48
        youngerAgeMa: 237
      - occurrenceId: occ:929812
        collectionId: col:106361
        acceptedTaxonId: txn:150364
        identifiedTaxonId: txn:179480
        identifiedName: Mastodonsaurus acuminatus
        taxonomicDifference: null
        referenceId: ref:33823
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: DE
          stateProvince: Thuringia
          county: Hildburghausen
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
      en: Mastodonsaurus giganteus
      zh: Mastodonsaurus giganteus
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
        id: txn:150364
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/222
          queryName: Mastodonsaurus giganteus
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 12
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Mastodonsaurus giganteus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:150364; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
G. F. Jaeger. 1828. Über die Fossile Reptilien, Welche in Württemberg Aufgefunden Sind [On the Fossil Reptiles That Are Found in Württemberg]. Verlag der Metzler'schen Buchhandlung, Stuttgart
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. S. Schoch. 2006. A complete trematosaurid amphibian from the Middle Triassic of Germany. Journal of Vertebrate Paleontology 26(1):29-43
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
F. Holl. 1829. Handbuch der Petrefactenkunde, mit einer Einleitung über die Vorwelt der organischen Wesen auf der Erde von Dr. Ludwig Choulant 1:1-115
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
G. F. Jaeger. 1828. Über die Fossile Reptilien, Welche in Württemberg Aufgefunden Sind [On the Fossil Reptiles That Are Found in Württemberg]. Verlag der Metzler'schen Buchhandlung, Stuttgart. Stuttgart: J. B. Metzler.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
R. R. Schoch. 1999. Comparative osteology of Mastodonsaurus giganteus (Jaeger, 1828) from the Middle Triassic (Lettenkeuper: Longobardian) of Germany (Baden-Württemberg, Bayern, Thüringen). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 278:1-170
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
