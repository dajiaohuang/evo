---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Helopanoplia beecheri
    rank: species
    sourceDatasetId: null
    name:
      zh: Helopanoplia beecheri
      en: Helopanoplia beecheri
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbPantestudinesTaxonomy20261002
          - pbdbPantestudinesOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: occurrences
        sourceIds:
          - pbdbPantestudinesOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: timeline
        sourceIds:
          - pbdbPantestudinesOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: evidence
        sourceIds:
          - pbdbPantestudinesOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: sources
        sourceIds:
          - pbdbPantestudinesOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesTaxonomy20261002
          usage:
            title: PBDB accepted record — Helopanoplia beecheri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=69094&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:69094; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:69094
            selectedOccurrenceIds:
              - occ:458037
              - occ:458101
              - occ:458125
              - occ:458149
              - occ:458166
              - occ:458177
              - occ:458199
              - occ:458246
              - occ:458279
              - occ:459855
              - occ:459959
              - occ:460435
              - occ:460451
              - occ:460477
              - occ:460491
              - occ:460512
              - occ:464137
              - occ:483547
              - occ:487816
              - occ:487857
              - occ:488012
              - occ:521011
              - occ:521032
              - occ:545464
              - occ:545963
              - occ:650710
              - occ:820656
              - occ:1066439
              - occ:1093335
              - occ:1093347
              - occ:1093419
              - occ:1093450
              - occ:1093477
              - occ:1093562
              - occ:1262359
              - occ:1380742
              - occ:1387299
              - occ:1387300
              - occ:1387301
              - occ:1387302
              - occ:1387303
              - occ:1387304
              - occ:1387305
              - occ:1484798
              - occ:2065800
            selectedCollectionIds:
              - col:45111
              - col:45136
              - col:45099
              - col:45128
              - col:14610
              - col:45130
              - col:45137
              - col:45144
              - col:45145
              - col:45299
              - col:45309
              - col:45381
              - col:45382
              - col:45389
              - col:45390
              - col:45391
              - col:14585
              - col:14508
              - col:14519
              - col:14525
              - col:14538
              - col:14620
              - col:14621
              - col:14579
              - col:57159
              - col:70343
              - col:45119
              - col:123098
              - col:137704
              - col:137705
              - col:137712
              - col:137715
              - col:137718
              - col:137730
              - col:26766
              - col:189003
              - col:190693
              - col:190694
              - col:190695
              - col:190696
              - col:190697
              - col:190698
              - col:190699
              - col:141582
            sourceReferenceIds:
              - ref:11749
              - ref:803
              - ref:13103
              - ref:1921
              - ref:2236
              - ref:64197
              - ref:42536
              - ref:54744
              - ref:63480
              - ref:64098
              - ref:70995
              - ref:14442
            originalIdentificationMappings:
              - occurrenceId: occ:458037
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:458101
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:458125
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:458149
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:458166
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:458177
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:458199
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:458246
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:458279
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:459855
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:459959
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:460435
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:460451
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:460477
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:460491
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:460512
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:464137
                originalIdentifiedName: Aspideretes beecheri
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:483547
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:487816
                originalIdentifiedName: Aspideretes beecheri
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:487857
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:488012
                originalIdentifiedName: Aspideretes beecheri
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:521011
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:521032
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:545464
                originalIdentifiedName: Aspideretes beecheri
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:545963
                originalIdentifiedName: Aspideretes beecheri
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:650710
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:820656
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1066439
                originalIdentifiedName: Aspideretes beecheri n. sp.
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:1093335
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1093347
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1093419
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1093450
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1093477
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1093562
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1262359
                originalIdentifiedName: Aspideretes beecheri
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:1380742
                originalIdentifiedName: Trionyx beecheri
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:1387299
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1387300
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1387301
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1387302
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1387303
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1387304
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1387305
                originalIdentifiedName: Helopanoplia distincta
                acceptedName: Helopanoplia beecheri
                difference: null
              - occurrenceId: occ:1484798
                originalIdentifiedName: '"Trionyx" beecheri'
                acceptedName: Helopanoplia beecheri
                difference: recombined as
              - occurrenceId: occ:2065800
                originalIdentifiedName: Helopanoplia distincta n. sp.
                acceptedName: Helopanoplia beecheri
                difference: null
            scope:
              zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
              en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - responseSha256
            - pbdbTaxonId
            - selectedOccurrenceIds
            - selectedCollectionIds
            - sourceReferenceIds
            - originalIdentificationMappings
            - scope
        - referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
          metadataVariant: 0
          sourceKey: pbdbOccurrenceFields20261002
          usage:
            locator: "occs/list_doc.html: accepted_no/name; identified_name/modifiers; max_ma/min_ma; collection fields; env, strat and ctaph output blocks; taxa/list_doc.html: parent and app fields."
            accessedAt: 2026-10-02
            scope:
              zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
              en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Helopanoplia beecheri
