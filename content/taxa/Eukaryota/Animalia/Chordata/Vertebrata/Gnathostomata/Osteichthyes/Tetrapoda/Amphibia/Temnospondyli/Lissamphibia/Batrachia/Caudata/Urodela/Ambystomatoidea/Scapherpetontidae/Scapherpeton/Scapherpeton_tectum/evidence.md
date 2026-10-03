---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Scapherpeton tectum
    rank: species
    sourceTaxonId: txn:63049
    name:
      en: Scapherpeton tectum
      zh: Scapherpeton tectum
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
      - occurrenceId: occ:149313
        collectionId: col:13142
        acceptedTaxonId: txn:63049
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
      - occurrenceId: occ:220117
        collectionId: col:22695
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:220123
        collectionId: col:22698
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:287922
        collectionId: col:14557
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:774
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
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
      - occurrenceId: occ:289590
        collectionId: col:14906
        acceptedTaxonId: txn:63049
        identifiedName: cf. Scapherpeton tectum
        taxonomicDifference: null
        referenceId: ref:7598
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Sweetgrass
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 63.4
        youngerAgeMa: 60.9
      - occurrenceId: occ:291024
        collectionId: col:14640
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:717
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
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
      - occurrenceId: occ:291040
        collectionId: col:15049
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:709
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Park
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:291047
        collectionId: col:15065
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:709
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Park
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:362032
        collectionId: col:34302
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362140
        collectionId: col:34303
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362170
        collectionId: col:34305
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362344
        collectionId: col:34307
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362384
        collectionId: col:34309
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362547
        collectionId: col:34310
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362578
        collectionId: col:34311
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362609
        collectionId: col:34312
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362630
        collectionId: col:34313
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362675
        collectionId: col:34315
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362733
        collectionId: col:34319
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:362783
        collectionId: col:34320
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:363220
        collectionId: col:34321
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:363648
        collectionId: col:34322
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:9017
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:457885
        collectionId: col:45110
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:457932
        collectionId: col:45117
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:457970
        collectionId: col:45124
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:458004
        collectionId: col:45112
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:458017
        collectionId: col:45102
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:458031
        collectionId: col:45111
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/27/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:458057
        collectionId: col:45109
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/28/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:458070
        collectionId: col:45133
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/29/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:458095
        collectionId: col:45136
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/30/bibliography
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
      - occurrenceId: occ:458120
        collectionId: col:45099
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/31/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:458160
        collectionId: col:14610
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/32/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:458175
        collectionId: col:45130
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/33/bibliography
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
      - occurrenceId: occ:458195
        collectionId: col:45137
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/34/bibliography
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
      - occurrenceId: occ:458210
        collectionId: col:45141
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/35/bibliography
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
      - occurrenceId: occ:458238
        collectionId: col:45144
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/36/bibliography
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
      - occurrenceId: occ:458272
        collectionId: col:45145
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/37/bibliography
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
      - occurrenceId: occ:459310
        collectionId: col:45238
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/38/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:459333
        collectionId: col:45240
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/39/bibliography
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
      - occurrenceId: occ:459495
        collectionId: col:45260
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/40/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:459518
        collectionId: col:45261
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/41/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:459546
        collectionId: col:45262
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/42/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:459573
        collectionId: col:45264
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/43/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:459973
        collectionId: col:45312
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/44/bibliography
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
      - occurrenceId: occ:461712
        collectionId: col:45560
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/45/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Foremost
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:461759
        collectionId: col:45561
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/46/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Foremost
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:461822
        collectionId: col:45564
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/47/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Foremost
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:461856
        collectionId: col:45565
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/48/bibliography
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
      - occurrenceId: occ:461896
        collectionId: col:45566
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/49/bibliography
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
      - occurrenceId: occ:461930
        collectionId: col:45567
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/50/bibliography
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
      - occurrenceId: occ:462888
        collectionId: col:45670
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/51/bibliography
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
      - occurrenceId: occ:462920
        collectionId: col:45671
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/52/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Upper
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:462958
        collectionId: col:45674
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/53/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Upper
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:463035
        collectionId: col:45675
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:12049
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/54/bibliography
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
      - occurrenceId: occ:463800
        collectionId: col:45819
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/55/bibliography
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
      - occurrenceId: occ:463858
        collectionId: col:45820
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/56/bibliography
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
      - occurrenceId: occ:463900
        collectionId: col:45821
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/57/bibliography
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
      - occurrenceId: occ:463938
        collectionId: col:45822
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/58/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Upper
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:464129
        collectionId: col:14585
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/59/bibliography
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
      - occurrenceId: occ:464354
        collectionId: col:14514
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:1129
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/60/bibliography
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
      - occurrenceId: occ:464620
        collectionId: col:45892
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/61/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Middle
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:464658
        collectionId: col:45893
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/62/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Upper
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:464691
        collectionId: col:45894
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/63/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Middle
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:464737
        collectionId: col:45897
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/64/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Upper
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:464776
        collectionId: col:45898
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/65/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Upper
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:464810
        collectionId: col:45899
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11964
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/66/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Oldman
          member: Upper
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:479399
        collectionId: col:47784
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/67/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:479449
        collectionId: col:47793
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/68/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:479475
        collectionId: col:47794
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/69/bibliography
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
      - occurrenceId: occ:479501
        collectionId: col:47795
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/70/bibliography
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
      - occurrenceId: occ:479580
        collectionId: col:47807
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/71/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:479615
        collectionId: col:47809
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/72/bibliography
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
      - occurrenceId: occ:479645
        collectionId: col:47811
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/73/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:479670
        collectionId: col:47812
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/74/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:479703
        collectionId: col:47814
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/75/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:479732
        collectionId: col:47816
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:15455
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/76/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:480287
        collectionId: col:22697
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/77/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:480326
        collectionId: col:22696
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:5929
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/78/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:480364
        collectionId: col:14458
        acceptedTaxonId: txn:63049
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
      - occurrenceId: occ:483532
        collectionId: col:14508
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:483599
        collectionId: col:14513
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:483643
        collectionId: col:14505
        acceptedTaxonId: txn:63049
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
      - occurrenceId: occ:487852
        collectionId: col:14519
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/83/bibliography
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
      - occurrenceId: occ:487869
        collectionId: col:14525
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:487889
        collectionId: col:14534
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:487905
        collectionId: col:14535
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:487947
        collectionId: col:14536
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:487976
        collectionId: col:14533
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488014
        collectionId: col:14538
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/89/bibliography
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
      - occurrenceId: occ:488029
        collectionId: col:14546
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488048
        collectionId: col:14548
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:488083
        collectionId: col:14549
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:820
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/92/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:488110
        collectionId: col:14559
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488153
        collectionId: col:14563
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488174
        collectionId: col:14566
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/95/bibliography
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
      - occurrenceId: occ:488233
        collectionId: col:14570
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/96/bibliography
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
      - occurrenceId: occ:488240
        collectionId: col:14574
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:488281
        collectionId: col:14582
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:488393
        collectionId: col:14654
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:488407
        collectionId: col:14653
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:488571
        collectionId: col:14639
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488617
        collectionId: col:14615
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:488869
        collectionId: col:14613
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488875
        collectionId: col:14614
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:488985
        collectionId: col:14596
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/105/bibliography
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
      - occurrenceId: occ:520518
        collectionId: col:14912
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:14358
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/106/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Park
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 63.4
        youngerAgeMa: 60.9
      - occurrenceId: occ:520969
        collectionId: col:14805
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:829
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/107/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Hot Springs/Washakie
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:521027
        collectionId: col:14621
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:1921
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/108/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Morton
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:521323
        collectionId: col:14766
        acceptedTaxonId: txn:63049
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
      - occurrenceId: occ:545139
        collectionId: col:14524
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/110/bibliography
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
      - occurrenceId: occ:545140
        collectionId: col:14527
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/111/bibliography
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
      - occurrenceId: occ:545968
        collectionId: col:57161
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/112/bibliography
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
      - occurrenceId: occ:649695
        collectionId: col:14874
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:23573
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/113/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Carter
        stratigraphy:
          group: null
          formation: Fort Union
          member: Ekalaka
        olderAgeMa: 63.4
        youngerAgeMa: 60.9
      - occurrenceId: occ:650675
        collectionId: col:14540
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:2236
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/114/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Carbon
        stratigraphy:
          group: null
          formation: Ferris
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:790036
        collectionId: col:85498
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:28887
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/115/bibliography
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
      - occurrenceId: occ:790061
        collectionId: col:85499
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:28887
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/116/bibliography
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
      - occurrenceId: occ:819356
        collectionId: col:14552
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:13103
        bibliography: M. T. Carrano. 2005. Fossil Vertebrate Collections, University of California Museum of Paleontology. Berkeley.
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
      - occurrenceId: occ:820670
        collectionId: col:45118
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:11749
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/118/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Bowman
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1147403
        collectionId: col:14655
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:1535
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/119/bibliography
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
      - occurrenceId: occ:1395718
        collectionId: col:14798
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/120/bibliography
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
      - occurrenceId: occ:1395735
        collectionId: col:105890
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/121/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Slope
        stratigraphy:
          group: null
          formation: Fort Union
          member: Ludlow
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1395736
        collectionId: col:192238
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/122/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Slope
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1395746
        collectionId: col:14886
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/123/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Carbon
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 63.4
        youngerAgeMa: 60.9
      - occurrenceId: occ:1395754
        collectionId: col:59714
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/124/bibliography
        locality:
          countryCode: CA
          stateProvince: Saskatchewan
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 66
      - occurrenceId: occ:1395757
        collectionId: col:144499
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/125/bibliography
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
      - occurrenceId: occ:1395834
        collectionId: col:14463
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/126/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1409239
        collectionId: col:14537
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:66164
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/127/bibliography
        locality:
          countryCode: US
          stateProvince: South Dakota
          county: Harding
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1409279
        collectionId: col:192251
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:66164
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/128/bibliography
        locality:
          countryCode: US
          stateProvince: South Dakota
          county: Harding
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1606335
        collectionId: col:227125
        acceptedTaxonId: txn:63049
        identifiedTaxonId: txn:54492
        identifiedName: Hedronchus sternbergii
        taxonomicDifference: null
        referenceId: ref:82581
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/129/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: null
          formation: Wapiti
          member: Unit 3
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1625128
        collectionId: col:229975
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:84522
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/130/bibliography
        locality:
          countryCode: CA
          stateProvince: Saskatchewan
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1632782
        collectionId: col:192242
        acceptedTaxonId: txn:63049
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/131/bibliography
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
      en: Scapherpeton tectum
      zh: Scapherpeton tectum
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
        id: txn:63049
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/154
          queryName: Scapherpeton tectum
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Scapherpeton tectum

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:63049; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
E. D. Cope. 1876. On some extinct reptiles and Batrachia from the Judith River and Fox Hills Beds of Montana. Proceedings of the Academy of Natural Sciences of Philadelphia 28:340-359
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
R. Estes, P. Berberian, and C. A. M. Meszoely. 1969. Lower vertebrates from the Late Cretaceous Hell Creek Formation, McCone County, Montana. Breviora 337:1-33
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
J. L. Whitmore and J. E. Martin. 1986. Vertebrate fossils from the Greasewood Creek locality in the Late Cretaceous Lance Formation of Niobrara County, Wyoming. Proceedings of the South Dakota Academy of Sciences 65:33-50
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. M. Sullivan. 1991. Paleocene Caudata and Squamata from Gidley and Silberling quarries, Montana. Journal of Vertebrate Paleontology 11(3):293-301
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
K. Carpenter. 1979. Vertebrate fauna of the Laramie Formation (Maestrichtian), Weld County, Colorado. Contributions to Geology, University of Wyoming 17(1):37-49
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
R. Estes. 1975. Lower vertebrates from the Fort Union Formation, Late Paleocene, Big Horn Basin, Wyoming. Herpetologica 31(4):365-385
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
R. Estes. 1975. Lower vertebrates from the Fort Union Formation, Late Paleocene, Big Horn Basin, Wyoming. Herpetologica 31(4):365-385
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography -->
D. A. Eberth and D. B. Brinkman. 1997. Paleoecology of an estuarine, incised-valley fill in the Dinosaur Park Formation (Judith River Group, Upper Cretaceous) of southern Alberta, Canada. Palaios 12:43-58
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/27/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/28/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/29/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/30/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/31/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/32/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/33/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/34/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/35/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/36/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/37/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/38/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/39/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/40/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/41/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/42/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/43/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/44/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/45/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/46/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/47/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/48/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/49/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/50/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/51/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/52/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/53/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/54/bibliography -->
C. M. Sternberg. 1924. Report on a collection of vertebrates from Wood Mountain, southern Saskatchewan, collected by C. M. Sternberg, 1921. Canada Department of Mines Geological Survey Bulletin (Geological Series) 38(43):27-28
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/55/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/56/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/57/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/58/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/59/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/60/bibliography -->
B. H. Breithaupt. 1982. Paleontology and paleoecology of the Lance Formation (Maastrichtian), east flank of Rock Springs Uplift, Sweetwater County, Wyoming. Contributions to Geology, University of Wyoming 21(2):123-151
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/61/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/62/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/63/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/64/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/65/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/66/bibliography -->
J. Peng, A. P. Russell, and D. B. Brinkman. 2001. Vertebrate microsite assemblages (exclusive of mammals) from the Foremost and Oldman Formations of the Judith River Group (Campanian) of southeastern Alberta: an illustrated guide. Provincial Museum of Alberta, Natural History Occasional Paper 25:1-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/67/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/68/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/69/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/70/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/71/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/72/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/73/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/74/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/75/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/76/bibliography -->
D. A. Eberth, D. B. Brinkman, and P. A. Johnston. 1988. Bonebed 31. In D. A. Eberth (ed.), Palaeoecology of Upper Cretaceous Judith River Formation at Dinosaur Provincial Park, Alberta, Canada. Society of Vertebrate Paleontology 48th Annual Meeting, Field Trip "B" (October 12, 1988). Occasional Paper of theTyrrell Museum of Palaeontology 7:23-26
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/77/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/78/bibliography -->
D. B. Brinkman. 1990. Paleontology of the Judith River Formation (Campanian) of Dinosaur National Park, Alberta, Canada: evidence from vertebrate microfossil locality. Palaeogeography, Palaeoclimatology, Palaeoecology 78:37-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/83/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/89/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/92/bibliography -->
L. J. Bryant. 1989. Non-dinosaurian lower vertebrates across the Cretaceous-Tertiary boundary in northeastern Montana. University of California Publications in Geological Sciences 134:1-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/95/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/96/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/105/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/106/bibliography -->
D. W. Krause. 1980. Early Tertiary amphibians from the Bighorn Basin, Wyoming. University of Michigan Papers on Paleontology 243:69-71
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/107/bibliography -->
J. E. Hartman. 1986. Paleontology and biostratigraphy of lower part of Polecat Bench Formation, southern Bighorn Basin, Wyoming. Contributions to Geology, University of Wyoming 24(1):11-63
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/108/bibliography -->
J. W. Hoganson, J. M. Campbell, and E. C. Murphy. 1994. Stratigraphy and paleontology of the Cretaceous Hell Creek Formation, Stumpf site, Morton County, North Dakota. Proceedings of the North Dakota Academy of Sciences 48:95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/110/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/111/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/112/bibliography -->
R. Estes. 1964. Fossil vertebrates from the Late Cretaceous Lance Formation, eastern Wyoming. University of California Publications in Geological Sciences 49:1-187
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/113/bibliography -->
R. Estes. 1976. Middle Paleocene lower vertebrates from the Tongue River Formation, southeastern Montana. Journal of Paleontology 50(3):500-520
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/114/bibliography -->
J. A. Lillegraven and J. J. Eberle. 1999. Vertebrate faunal changes through Lancian and Puercan time in southern Wyoming. Journal of Paleontology 73(4):691-710
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/115/bibliography -->
L. E. Wilson. 2008. Comparative taphonomy and paleoecological reconstruction of two microvertebrate accumulations from the Late Cretaceous Hell Creek Formation (Maastrichtian), eastern Montana. Palaios 23:289-297
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/116/bibliography -->
L. E. Wilson. 2008. Comparative taphonomy and paleoecological reconstruction of two microvertebrate accumulations from the Late Cretaceous Hell Creek Formation (Maastrichtian), eastern Montana. Palaios 23:289-297
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/118/bibliography -->
D. A. Pearson, T. Schaefer, and K. R. Johnson, D. J. Nichols, J. P. Hunter. 2002. Vertebrate biostratigraphy of the Hell Creek Formation in southwestern North Dakota and northwestern South Dakota.  In J. H. Hartman, J. R. Johnson, and D. J. Nichols (eds.), The Hell Creek Formation and the Cretaceous-Tertiary Boundary in the Northern Great Plains: An Integrated Continental Record of the End of the Cretaceous, Geological Society of America Special Paper 361:145-167
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/119/bibliography -->
R. C. Fox. 1989. The Wounded Knee local fauna and mammalian evolution near the Cretaceous-Tertiary boundary, Saskatchewan, Canada. Palaeontographica Abteilung A 208(1-3):11-59
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/120/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/121/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/122/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/123/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/124/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/125/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/126/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/127/bibliography -->
M. T. Greenwald. 1971. The Lower Vertebrates of the Hell Creek Formation, Harding County, South Dakota.. Rapid City: South Dakota School of Mines and Technoology.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/128/bibliography -->
M. T. Greenwald. 1971. The Lower Vertebrates of the Hell Creek Formation, Harding County, South Dakota.. Rapid City: South Dakota School of Mines and Technoology.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/129/bibliography -->
F. Fanti, P. R. Bell, and M. J. Vavrek, D. W. Larson, E. B. Koppelhus, R. L. Sissons, A. Langone, N. E. Campione, C. Sullivan. 2022. Filling the Bearpaw gap: evidence for palaeoenvironment-driven taxon distribution in a diverse, non-marine ecosystem from the late Campanian of west-central Alberta, Canada. Palaeogeography, Palaeoclimatology, Palaeoecology 592:110923
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/130/bibliography -->
M. M. Gilbert, E. L. Bamforth, and L. A. Buatois, R. W. Renaut. 2018. Paleoecology and sedimentology of a vertebrate microfossil assemblage from the easternmost Dinosaur Park Formation (Late Cretaceous, Upper Campanian,) Saskatchewan, Canada: reconstructing diversity in a coastal ecosystem. Palaeogeography, Palaeoclimatology, Palaeoecology 495:227-244
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/131/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
