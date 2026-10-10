---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Scotiophryne pustulosa
    rank: species
    sourceTaxonId: txn:63611
    name:
      en: Scotiophryne pustulosa
      zh: Scotiophryne pustulosa
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
    originalBibliography: R. Estes. 1969. A new fossil discoglossid frog from Montana and Wyoming. Breviora 328:1-7
    occurrenceEvidence:
      - occurrenceId: occ:149316
        collectionId: col:13142
        acceptedTaxonId: txn:63611
        identifiedName: Scotiophryne pustulosa n. gen. n. sp.
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
      - occurrenceId: occ:382973
        collectionId: col:36449
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:9765
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
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
      - occurrenceId: occ:464132
        collectionId: col:14585
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:12168
        bibliography: R. Estes. 1969. A new fossil discoglossid frog from Montana and Wyoming. Breviora 328:1-7
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
      - occurrenceId: occ:488216
        collectionId: col:14568
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:820
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
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
      - occurrenceId: occ:1147400
        collectionId: col:14655
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:1535
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
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
      - occurrenceId: occ:1358898
        collectionId: col:14430
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:61882
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: Iron
        stratigraphy:
          group: null
          formation: Wahweap
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1385900
        collectionId: col:14458
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:64015
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
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
      - occurrenceId: occ:1385902
        collectionId: col:14467
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:64015
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
      - occurrenceId: occ:1385903
        collectionId: col:75846
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:64015
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
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
      - occurrenceId: occ:1385909
        collectionId: col:61844
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:64015
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: null
        stratigraphy:
          group: null
          formation: Wahweap
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1385927
        collectionId: col:190353
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:64015
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: null
        stratigraphy:
          group: null
          formation: Wahweap
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1385928
        collectionId: col:190354
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:64015
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: null
        stratigraphy:
          group: null
          formation: Fruitland
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1395795
        collectionId: col:192250
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
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
      - occurrenceId: occ:1395856
        collectionId: col:75836
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
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
      - occurrenceId: occ:1395887
        collectionId: col:181388
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
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
      - occurrenceId: occ:1395918
        collectionId: col:192261
        acceptedTaxonId: txn:63611
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: null
        stratigraphy:
          group: null
          formation: Wahweap
          member: null
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
      en: Scotiophryne pustulosa
      zh: Scotiophryne pustulosa
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
        id: txn:63611
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/470
          queryName: Scotiophryne pustulosa
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

# Scotiophryne pustulosa

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:63611; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en -->
PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh -->
PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
R. Estes, P. Berberian, and C. A. M. Meszoely. 1969. Lower vertebrates from the Late Cretaceous Hell Creek Formation, McCone County, Montana. Breviora 337:1-33
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
J. G. Armstrong-Ziegler. 1978. An aniliid snake and associated vertebrates from the Campanian of New Mexico. Journal of Paleontology 52(2):480-483
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
L. J. Bryant. 1989. Non-dinosaurian lower vertebrates across the Cretaceous-Tertiary boundary in northeastern Montana. University of California Publications in Geological Sciences 134:1-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. C. Fox. 1989. The Wounded Knee local fauna and mammalian evolution near the Cretaceous-Tertiary boundary, Saskatchewan, Canada. Palaeontographica Abteilung A 208(1-3):11-59
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
A. L. Titus, J. G. Eaton, and J. J. W. Sertich. 2016. Late Cretaceous stratigraphy and vertebrate faunas of the Markagunt, Paunsaugunt, and Kaiparowits plateaus, southern Utah. Geology of the Intermountain West 3:229-291
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
J. D. Gardner, C. M. Redman, and R. L. Cifelli. 2016. The hopping dead: Late Cretaceous frogs from the middle-late Campanian (Judithian) of western North America. Fossil Imprint 72(1-2):78-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
J. D. Gardner, C. M. Redman, and R. L. Cifelli. 2016. The hopping dead: Late Cretaceous frogs from the middle-late Campanian (Judithian) of western North America. Fossil Imprint 72(1-2):78-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
J. D. Gardner, C. M. Redman, and R. L. Cifelli. 2016. The hopping dead: Late Cretaceous frogs from the middle-late Campanian (Judithian) of western North America. Fossil Imprint 72(1-2):78-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
J. D. Gardner, C. M. Redman, and R. L. Cifelli. 2016. The hopping dead: Late Cretaceous frogs from the middle-late Campanian (Judithian) of western North America. Fossil Imprint 72(1-2):78-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
J. D. Gardner, C. M. Redman, and R. L. Cifelli. 2016. The hopping dead: Late Cretaceous frogs from the middle-late Campanian (Judithian) of western North America. Fossil Imprint 72(1-2):78-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
J. D. Gardner, C. M. Redman, and R. L. Cifelli. 2016. The hopping dead: Late Cretaceous frogs from the middle-late Campanian (Judithian) of western North America. Fossil Imprint 72(1-2):78-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
