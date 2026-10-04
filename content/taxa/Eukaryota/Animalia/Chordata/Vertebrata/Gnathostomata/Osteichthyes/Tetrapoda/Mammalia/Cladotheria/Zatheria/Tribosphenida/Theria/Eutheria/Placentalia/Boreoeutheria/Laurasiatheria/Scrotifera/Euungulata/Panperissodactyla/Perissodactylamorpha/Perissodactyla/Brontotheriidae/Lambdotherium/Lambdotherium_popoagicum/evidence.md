---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Lambdotherium popoagicum
    rank: species
    sourceDatasetId: null
    name:
      zh: Lambdotherium popoagicum
      en: Lambdotherium popoagicum
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Lambdotherium popoagicum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47471&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:47471; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47471
            selectedOccurrenceIds:
              - occ:168124
              - occ:168130
              - occ:168134
              - occ:168144
              - occ:168146
              - occ:168155
              - occ:168165
              - occ:168439
              - occ:168445
              - occ:168456
              - occ:168464
              - occ:168465
              - occ:168476
              - occ:168480
              - occ:168487
              - occ:168747
              - occ:168872
              - occ:168983
              - occ:170388
              - occ:170415
              - occ:170431
              - occ:170437
              - occ:170794
              - occ:170817
              - occ:170843
              - occ:170922
              - occ:170959
              - occ:170965
              - occ:170967
              - occ:171155
              - occ:171166
              - occ:171177
              - occ:172097
              - occ:172111
              - occ:172194
              - occ:172210
              - occ:172467
              - occ:172470
              - occ:172484
              - occ:172498
              - occ:172509
              - occ:172518
              - occ:172601
              - occ:172661
              - occ:172732
              - occ:172817
              - occ:172827
              - occ:172880
              - occ:172911
              - occ:173084
              - occ:173093
              - occ:173098
              - occ:173122
              - occ:173322
              - occ:173328
              - occ:173354
              - occ:173360
              - occ:173401
              - occ:286276
              - occ:469776
              - occ:638367
              - occ:930367
              - occ:1357187
              - occ:1357188
              - occ:1370084
            selectedCollectionIds:
              - col:15328
              - col:15330
              - col:15331
              - col:15335
              - col:15337
              - col:15338
              - col:15342
              - col:15409
              - col:15411
              - col:15413
              - col:15414
              - col:15415
              - col:15418
              - col:15419
              - col:15421
              - col:15456
              - col:15479
              - col:15486
              - col:15565
              - col:15566
              - col:15567
              - col:15568
              - col:15649
              - col:15650
              - col:15654
              - col:15662
              - col:15664
              - col:15665
              - col:15666
              - col:15710
              - col:15711
              - col:15714
              - col:15839
              - col:15841
              - col:15848
              - col:15852
              - col:15901
              - col:15902
              - col:15903
              - col:15905
              - col:15906
              - col:15908
              - col:15915
              - col:15917
              - col:15930
              - col:15934
              - col:15935
              - col:15942
              - col:15945
              - col:15996
              - col:15997
              - col:15998
              - col:16005
              - col:16067
              - col:16068
              - col:16073
              - col:16074
              - col:16078
              - col:27268
              - col:46705
              - col:15454
              - col:15999
              - col:186931
            sourceReferenceIds:
              - ref:2078
              - ref:3596
              - ref:1618
              - ref:6294
              - ref:2921
              - ref:1616
              - ref:1693
              - ref:1248
              - ref:1931
              - ref:3329
              - ref:2149
              - ref:3636
              - ref:3336
              - ref:6196
              - ref:2056
              - ref:1749
              - ref:2055
              - ref:7542
              - ref:11717
              - ref:19815
              - ref:2701
              - ref:62695
            originalIdentificationMappings:
              - occurrenceId: occ:1357187
                originalIdentifiedName: Lambdotherium priscum
                acceptedName: Lambdotherium popoagicum
                difference: null
              - occurrenceId: occ:1357188
                originalIdentifiedName: Lambdotherium magnum n. sp.
                acceptedName: Lambdotherium popoagicum
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

# Lambdotherium popoagicum
