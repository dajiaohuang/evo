---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Baena arenosa
    rank: species
    sourceDatasetId: null
    name:
      zh: Baena arenosa
      en: Baena arenosa
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
            title: PBDB accepted record — Baena arenosa
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=67590&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:67590; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:67590
            selectedOccurrenceIds:
              - occ:286358
              - occ:649986
              - occ:649987
              - occ:649991
              - occ:1045328
              - occ:1045336
              - occ:1045338
              - occ:1045339
              - occ:1045340
              - occ:1058842
              - occ:1058843
              - occ:1317256
              - occ:1364139
              - occ:1364141
              - occ:1364147
              - occ:1364148
              - occ:1364149
              - occ:1369968
              - occ:1369969
              - occ:1369971
              - occ:1369972
              - occ:1369982
              - occ:1369984
              - occ:1369985
              - occ:1369986
              - occ:1369987
              - occ:1369989
              - occ:1369990
              - occ:1369991
              - occ:1380065
              - occ:1389237
              - occ:1389525
              - occ:1389529
              - occ:1402283
              - occ:1402284
              - occ:1578293
              - occ:1578322
              - occ:2069767
            selectedCollectionIds:
              - col:27269
              - col:16262
              - col:16265
              - col:70257
              - col:16255
              - col:16228
              - col:16647
              - col:16253
              - col:128443
              - col:16589
              - col:176881
              - col:185685
              - col:16646
              - col:185687
              - col:185688
              - col:185689
              - col:16572
              - col:109207
              - col:186888
              - col:186889
              - col:186890
              - col:186891
              - col:186892
              - col:186893
              - col:186894
              - col:186895
              - col:186896
              - col:186897
              - col:185691
              - col:131861
              - col:16201
              - col:81455
              - col:15661
              - col:193357
              - col:222799
              - col:222805
              - col:16657
            sourceReferenceIds:
              - ref:7542
              - ref:3806
              - ref:704
              - ref:14442
              - ref:58368
              - ref:26380
              - ref:62682
              - ref:64379
              - ref:11982
              - ref:14410
              - ref:78403
              - ref:95678
            originalIdentificationMappings:
              - occurrenceId: occ:1045328
                originalIdentifiedName: Baena sima n. sp.
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:1058842
                originalIdentifiedName: Baena sima
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:1058843
                originalIdentifiedName: Baena emiliae
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:1364141
                originalIdentifiedName: Baena emiliae
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:1364147
                originalIdentifiedName: Baena emiliae
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:1364148
                originalIdentifiedName: Baena emiliae
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:1364149
                originalIdentifiedName: Baena emiliae
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:1380065
                originalIdentifiedName: Baena emiliae n. sp.
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:1402284
                originalIdentifiedName: Baena arenosa n. gen. n. sp.
                acceptedName: Baena arenosa
                difference: null
              - occurrenceId: occ:2069767
                originalIdentifiedName: Baena emiliae
                acceptedName: Baena arenosa
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

# Baena arenosa
