---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Prodesmodon copei
    rank: species
    sourceTaxonId: txn:67754
    name:
      en: Prodesmodon copei
      zh: Prodesmodon copei
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
      - occurrenceId: occ:149314
        collectionId: col:13142
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:4381
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
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
      - occurrenceId: occ:149340
        collectionId: col:13142
        acceptedTaxonId: txn:67754
        identifiedTaxonId: txn:63645
        identifiedName: Cuttysarkus mcnallyi
        taxonomicDifference: null
        referenceId: ref:4381
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
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
      - occurrenceId: occ:382974
        collectionId: col:36449
        acceptedTaxonId: txn:67754
        identifiedName: Prodesmodon ? copei
        taxonomicDifference: null
        referenceId: ref:9765
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: San Juan
        stratigraphy:
          group: null
          formation: Fruitland
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:383939
        collectionId: col:36543
        acceptedTaxonId: txn:67754
        identifiedName: Prodesmodon ? copei
        taxonomicDifference: null
        referenceId: ref:9765
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: San Juan
        stratigraphy:
          group: null
          formation: Fruitland
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:383941
        collectionId: col:36543
        acceptedTaxonId: txn:67754
        identifiedTaxonId: txn:63645
        identifiedName: Cuttysarkus mcnallyi
        taxonomicDifference: null
        referenceId: ref:9765
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: San Juan
        stratigraphy:
          group: null
          formation: Fruitland
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:464131
        collectionId: col:14585
        acceptedTaxonId: txn:67754
        identifiedName: Prodesmodon copei n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
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
      - occurrenceId: occ:464158
        collectionId: col:14585
        acceptedTaxonId: txn:67754
        identifiedTaxonId: txn:63645
        identifiedName: Cuttysarkus mcnallyi n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
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
      - occurrenceId: occ:464356
        collectionId: col:14514
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:1129
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
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
      - occurrenceId: occ:468934
        collectionId: col:14446
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:3008
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Chouteau
        stratigraphy:
          group: Montana
          formation: Judith River
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:480366
        collectionId: col:14458
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Natrona
        stratigraphy:
          group: null
          formation: Mesaverde
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:483641
        collectionId: col:14505
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:487845
        collectionId: col:14519
        acceptedTaxonId: txn:67754
        identifiedTaxonId: txn:63645
        identifiedName: Cuttysarkus mcnallyi
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
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
      - occurrenceId: occ:487850
        collectionId: col:14519
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
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
      - occurrenceId: occ:487856
        collectionId: col:14524
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
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
      - occurrenceId: occ:488013
        collectionId: col:14538
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
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
      - occurrenceId: occ:488176
        collectionId: col:14566
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
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
      - occurrenceId: occ:488195
        collectionId: col:14566
        acceptedTaxonId: txn:67754
        identifiedTaxonId: txn:63645
        identifiedName: Cuttysarkus mcnallyi
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
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
      - occurrenceId: occ:488261
        collectionId: col:14577
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488906
        collectionId: col:14598
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488977
        collectionId: col:14596
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography
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
      - occurrenceId: occ:488981
        collectionId: col:14596
        acceptedTaxonId: txn:67754
        identifiedTaxonId: txn:63645
        identifiedName: Cuttysarkus mcnallyi
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography
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
      - occurrenceId: occ:521326
        collectionId: col:14766
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:3489
        bibliography: L. M. Van Valen and R. E. Sloan. 1965. The earliest primates. Science 150(3697):743-745
        locality:
          countryCode: US
          stateProvince: Montana
          county: McCone
        stratigraphy:
          group: null
          formation: Tullock
          member: Collins Ranch
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:790038
        collectionId: col:85498
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:28887
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
      - occurrenceId: occ:790063
        collectionId: col:85499
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:28887
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
      - occurrenceId: occ:1147405
        collectionId: col:14655
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:1535
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography
        locality:
          countryCode: CA
          stateProvince: Saskatchewan
          county: null
        stratigraphy:
          group: null
          formation: Frenchman
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395726
        collectionId: col:14666
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Fort Union
          member: Tullock
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1395738
        collectionId: col:14792
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography
        locality:
          countryCode: US
          stateProvince: Colorado
          county: Elbert
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1395763
        collectionId: col:144499
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/27/bibliography
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
      - occurrenceId: occ:1395802
        collectionId: col:45144
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/28/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Slope
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395860
        collectionId: col:14498
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/29/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: San Juan
        stratigraphy:
          group: null
          formation: Kirtland
          member: Hunter Wash
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1548607
        collectionId: col:218649
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/30/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Fort Union
          member: Tullock
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1709211
        collectionId: col:227221
        acceptedTaxonId: txn:67754
        taxonomicDifference: null
        referenceId: ref:820
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/31/bibliography
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
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Prodesmodon copei
      zh: Prodesmodon copei
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
        id: txn:67754
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/64
          queryName: Prodesmodon copei
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

# Prodesmodon copei

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:67754; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
R. Estes, P. Berberian, and C. A. M. Meszoely. 1969. Lower vertebrates from the Late Cretaceous Hell Creek Formation, McCone County, Montana. Breviora 337:1-33
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. Estes, P. Berberian, and C. A. M. Meszoely. 1969. Lower vertebrates from the Late Cretaceous Hell Creek Formation, McCone County, Montana. Breviora 337:1-33
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
J. G. Armstrong-Ziegler. 1978. An aniliid snake and associated vertebrates from the Campanian of New Mexico. Journal of Paleontology 52(2):480-483
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
J. G. Armstrong-Ziegler. 1978. An aniliid snake and associated vertebrates from the Campanian of New Mexico. Journal of Paleontology 52(2):480-483
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
J. G. Armstrong-Ziegler. 1978. An aniliid snake and associated vertebrates from the Campanian of New Mexico. Journal of Paleontology 52(2):480-483
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
B. H. Breithaupt. 1982. Paleontology and paleoecology of the Lance Formation (Maastrichtian), east flank of Rock Springs Uplift, Sweetwater County, Wyoming. Contributions to Geology, University of Wyoming 21(2):123-151
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
A. Sahni. 1972. The vertebrate fauna of the Judith River Formation, Montana. Bulletin of the American Museum of Natural History 147(6):321-412
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography -->
L. E. Wilson. 2008. Comparative taphonomy and paleoecological reconstruction of two microvertebrate accumulations from the Late Cretaceous Hell Creek Formation (Maastrichtian), eastern Montana. Palaios 23:289-297
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography -->
L. E. Wilson. 2008. Comparative taphonomy and paleoecological reconstruction of two microvertebrate accumulations from the Late Cretaceous Hell Creek Formation (Maastrichtian), eastern Montana. Palaios 23:289-297
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography -->
R. C. Fox. 1989. The Wounded Knee local fauna and mammalian evolution near the Cretaceous-Tertiary boundary, Saskatchewan, Canada. Palaeontographica Abteilung A 208(1-3):11-59
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
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/29/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/30/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/31/bibliography -->
L. J. Bryant. 1989. Non-dinosaurian lower vertebrates across the Cretaceous-Tertiary boundary in northeastern Montana. University of California Publications in Geological Sciences 134:1-107
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
