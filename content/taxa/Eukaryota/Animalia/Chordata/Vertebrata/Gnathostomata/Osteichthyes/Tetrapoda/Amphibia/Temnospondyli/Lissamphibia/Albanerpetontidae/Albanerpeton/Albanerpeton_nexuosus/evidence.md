---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Albanerpeton nexuosus
    rank: species
    sourceTaxonId: txn:67753
    name:
      en: Albanerpeton nexuosus
      zh: Albanerpeton nexuosus
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
      - occurrenceId: occ:247985
        collectionId: col:14399
        acceptedTaxonId: txn:67753
        identifiedName: Albanerpeton cf. nexuosus
        taxonomicDifference: null
        referenceId: ref:6845
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: Emery
        stratigraphy:
          group: Dakota
          formation: Cedar Mountain
          member: Mussentuchit
        olderAgeMa: 100.5
        youngerAgeMa: 93.9
      - occurrenceId: occ:247986
        collectionId: col:14396
        acceptedTaxonId: txn:67753
        identifiedName: Albanerpeton cf. nexuosus
        taxonomicDifference: null
        referenceId: ref:6845
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: Emery
        stratigraphy:
          group: Dakota
          formation: Cedar Mountain
          member: Mussentuchit
        olderAgeMa: 100.5
        youngerAgeMa: 93.9
      - occurrenceId: occ:291026
        collectionId: col:14640
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: US
          stateProvince: Colorado
          county: Weld
        stratigraphy:
          group: null
          formation: Laramie
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:972213
        collectionId: col:45437
        acceptedTaxonId: txn:67753
        identifiedTaxonId: var:300575
        identifiedName: Albanerpeton aff. nexuosum
        taxonomicDifference: variant of
        referenceId: ref:37367
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: ES
          stateProvince: Aragón
          county: Huesca
        stratigraphy:
          group: Tremp
          formation: La Posa
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1070825
        collectionId: col:14585
        acceptedTaxonId: txn:67753
        identifiedName: Albanerpeton nexuosus n. sp.
        taxonomicDifference: null
        referenceId: ref:42765
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Niobrara
        stratigraphy:
          group: null
          formation: Lance
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1070826
        collectionId: col:45566
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Lower
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1070827
        collectionId: col:14466
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: Kane
        stratigraphy:
          group: null
          formation: Kaiparowits
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1070828
        collectionId: col:75846
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: Garfield
        stratigraphy:
          group: null
          formation: Kaiparowits
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1070829
        collectionId: col:14489
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Brewster
        stratigraphy:
          group: null
          formation: Aguja
          member: Alto Shale
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1070830
        collectionId: col:56627
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: San Juan
        stratigraphy:
          group: null
          formation: Fruitland/Kirtland
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1070834
        collectionId: col:14519
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Niobrara
        stratigraphy:
          group: null
          formation: Lance
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1070837
        collectionId: col:14514
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Sweetwater
        stratigraphy:
          group: null
          formation: Lance
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1146991
        collectionId: col:14422
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: null
          formation: Milk River
          member: Deadhorse Coulee
        olderAgeMa: 85.7
        youngerAgeMa: 83.6
      - occurrenceId: occ:1146993
        collectionId: col:14423
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: null
          formation: Milk River
          member: Deadhorse Coulee
        olderAgeMa: 85.7
        youngerAgeMa: 83.6
      - occurrenceId: occ:1146996
        collectionId: col:14425
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: null
          formation: Milk River
          member: Deadhorse Coulee
        olderAgeMa: 85.7
        youngerAgeMa: 83.6
      - occurrenceId: occ:1146997
        collectionId: col:14426
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: null
          formation: Milk River
          member: Deadhorse Coulee
        olderAgeMa: 85.7
        youngerAgeMa: 83.6
      - occurrenceId: occ:1146999
        collectionId: col:14427
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: null
          formation: Milk River
          member: Deadhorse Coulee
        olderAgeMa: 85.7
        youngerAgeMa: 83.6
      - occurrenceId: occ:1147001
        collectionId: col:14428
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: null
          formation: Milk River
          member: Deadhorse Coulee
        olderAgeMa: 85.7
        youngerAgeMa: 83.6
      - occurrenceId: occ:1147004
        collectionId: col:13142
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: McCone County
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1292590
        collectionId: col:146190
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: County of Warner
        stratigraphy:
          group: null
          formation: Milk River
          member: Deadhorse Coulee
        olderAgeMa: 85.7
        youngerAgeMa: 83.6
      - occurrenceId: occ:1350445
        collectionId: col:183109
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:61095
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Powder River
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1390584
        collectionId: col:47794
        acceptedTaxonId: txn:67753
        taxonomicDifference: null
        referenceId: ref:42675
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1395755
        collectionId: col:144499
        acceptedTaxonId: txn:67753
        identifiedTaxonId: var:300575
        identifiedName: Albanerpeton nexuosum
        taxonomicDifference: variant of
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395767
        collectionId: col:144505
        acceptedTaxonId: txn:67753
        identifiedTaxonId: var:300575
        identifiedName: Albanerpeton nexuosum
        taxonomicDifference: variant of
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395768
        collectionId: col:144506
        acceptedTaxonId: txn:67753
        identifiedTaxonId: var:300575
        identifiedName: Albanerpeton nexuosum
        taxonomicDifference: variant of
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395862
        collectionId: col:14489
        acceptedTaxonId: txn:67753
        identifiedTaxonId: var:300575
        identifiedName: Albanerpeton nexuosum
        taxonomicDifference: variant of
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Brewster
        stratigraphy:
          group: null
          formation: Aguja
          member: Alto Shale
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1395863
        collectionId: col:14385
        acceptedTaxonId: txn:67753
        identifiedTaxonId: var:300575
        identifiedName: cf. Albanerpeton nexuosum
        taxonomicDifference: variant of
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: Garfield
        stratigraphy:
          group: null
          formation: Naturita
          member: null
        olderAgeMa: 100.5
        youngerAgeMa: 93.9
      - occurrenceId: occ:1395882
        collectionId: col:181388
        acceptedTaxonId: txn:67753
        identifiedTaxonId: var:300575
        identifiedName: cf. Albanerpeton nexuosum
        taxonomicDifference: variant of
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/27/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: Garfield
        stratigraphy:
          group: null
          formation: Straight Cliffs
          member: John Henry
        olderAgeMa: 85.7
        youngerAgeMa: 83.6
      - occurrenceId: occ:1592201
        collectionId: col:200385
        acceptedTaxonId: txn:67753
        identifiedTaxonId: var:300575
        identifiedName: Albanerpeton nexuosum
        taxonomicDifference: variant of
        referenceId: ref:81443
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/28/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Brewster
        stratigraphy:
          group: null
          formation: Aguja
          member: Abajo Shale
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Albanerpeton nexuosus
      zh: Albanerpeton nexuosus
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
        id: txn:67753
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/368
          queryName: Albanerpeton nexuosus
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

# Albanerpeton nexuosus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:67753; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
R. Estes. 1981. Handbuch der Paläoherpetologie/Encyclopedia of Paleoherpetology. Part 2. Gymnophiona, Caudata. Gustav Fischer Verlag, Stuttgart
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
J. D. Gardner. 1999. New albanerpetontid amphibians from the Albian to Coniacian of Utah, USA—bridging the gap. Journal of Vertebrate Paleontology 19(4):632-638
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
J. D. Gardner. 1999. New albanerpetontid amphibians from the Albian to Coniacian of Utah, USA—bridging the gap. Journal of Vertebrate Paleontology 19(4):632-638
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
H.-A. Blain, J.-I. Canudo, and G. Cuenca-Bescós, N. López-Martínez. 2010. Amphibians and squamate reptiles from the latest Maastrichtian (Upper Cretaceous) of Blasi 2 (Huesca, Spain). Cretaceous Research 31(4):433-446
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. Estes. 1981. Handbuch der Paläoherpetologie/Encyclopedia of Paleoherpetology. Part 2. Gymnophiona, Caudata. Gustav Fischer Verlag, Stuttgart
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography -->
T. S. Kelly. 2014. Preliminary report on the mammals form Lane's Little Jaw Site Quarry: a latest Cretaceous (earliest Puercan?) local fauna, Hell Creek Formation, southeastern Montana. Paludicola 10(1):50-91
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography -->
J. D. Gardner. 2000. Albanerpetontid amphibians from the Upper Cretaceous (Campanian and Maastrichtian) of North America. Geodiversitas 22(3):349-388
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/27/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/28/bibliography -->
S. L. Wick. 2021. Albanerpetontids (Lissamphibia, Albanerpetontidae) from the Aguja Formation (lower Campanian) of West Texas, USA. Canadian Journal of Earth Sciences 58(2)
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
