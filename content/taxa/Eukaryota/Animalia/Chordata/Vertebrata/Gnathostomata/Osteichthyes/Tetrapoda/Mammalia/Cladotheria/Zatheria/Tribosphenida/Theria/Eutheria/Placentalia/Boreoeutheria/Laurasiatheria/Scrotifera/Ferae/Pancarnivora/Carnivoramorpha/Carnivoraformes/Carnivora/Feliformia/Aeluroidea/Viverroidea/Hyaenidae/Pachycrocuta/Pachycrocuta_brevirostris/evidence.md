---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pachycrocuta brevirostris
    rank: species
    sourceDatasetId: null
    name:
      zh: Pachycrocuta brevirostris
      en: Pachycrocuta brevirostris
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
            title: PBDB accepted record — Pachycrocuta brevirostris
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=366708&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:366708; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:366708
            selectedOccurrenceIds:
              - occ:224538
              - occ:228464
              - occ:358556
              - occ:363601
              - occ:363676
              - occ:365336
              - occ:367534
              - occ:369001
              - occ:369052
              - occ:381233
              - occ:381501
              - occ:409296
              - occ:409346
              - occ:412081
              - occ:415243
              - occ:415530
              - occ:416650
              - occ:420017
              - occ:421612
              - occ:421651
              - occ:421692
              - occ:421710
              - occ:448617
              - occ:479838
              - occ:487502
              - occ:489314
              - occ:489578
              - occ:498813
              - occ:502567
              - occ:658994
              - occ:699346
              - occ:724196
              - occ:842465
              - occ:1350251
              - occ:1378817
              - occ:1380643
              - occ:1434276
              - occ:1448709
              - occ:1465637
              - occ:1601094
              - occ:1630811
              - occ:1632213
              - occ:1660728
              - occ:1708180
            selectedCollectionIds:
              - col:21791
              - col:22356
              - col:34104
              - col:34446
              - col:34459
              - col:34617
              - col:34764
              - col:34898
              - col:34911
              - col:22728
              - col:36220
              - col:39409
              - col:13304
              - col:39848
              - col:40266
              - col:40398
              - col:40808
              - col:40994
              - col:40999
              - col:41005
              - col:41007
              - col:44146
              - col:47828
              - col:39847
              - col:49240
              - col:49306
              - col:50342
              - col:51100
              - col:71060
              - col:56733
              - col:77773
              - col:93522
              - col:183092
              - col:188674
              - col:189000
              - col:200084
              - col:202122
              - col:197943
              - col:226365
              - col:231023
              - col:231233
              - col:230994
              - col:242160
            sourceReferenceIds:
              - ref:4867
              - ref:5537
              - ref:8649
              - ref:9043
              - ref:9073
              - ref:9147
              - ref:9135
              - ref:9343
              - ref:9372
              - ref:9643
              - ref:10647
              - ref:10899
              - ref:10904
              - ref:11028
              - ref:11051
              - ref:11585
              - ref:13067
              - ref:13150
              - ref:9580
              - ref:13519
              - ref:13623
              - ref:23807
              - ref:85450
              - ref:26265
              - ref:31625
              - ref:61081
              - ref:63308
              - ref:68076
              - ref:69234
              - ref:67464
              - ref:68936
              - ref:85493
              - ref:84296
              - ref:89067
              - ref:92927
            originalIdentificationMappings:
              - occurrenceId: occ:367534
                originalIdentifiedName: Hyaena brevirostris
                acceptedName: Pachycrocuta brevirostris
                difference: recombined as
              - occurrenceId: occ:498813
                originalIdentifiedName: Hyaena brevirostris
                acceptedName: Pachycrocuta brevirostris
                difference: recombined as
              - occurrenceId: occ:502567
                originalIdentifiedName: Hyaena sinensis
                acceptedName: Pachycrocuta brevirostris
                difference: null
              - occurrenceId: occ:658994
                originalIdentifiedName: Hyaena brevirostris
                acceptedName: Pachycrocuta brevirostris
                difference: recombined as
              - occurrenceId: occ:842465
                originalIdentifiedName: Hyaena brevirostris
                acceptedName: Pachycrocuta brevirostris
                difference: recombined as
              - occurrenceId: occ:1601094
                originalIdentifiedName: Hyaena sinensis
                acceptedName: Pachycrocuta brevirostris
                difference: null
              - occurrenceId: occ:1630811
                originalIdentifiedName: Hyaena sinensis
                acceptedName: Pachycrocuta brevirostris
                difference: null
              - occurrenceId: occ:1632213
                originalIdentifiedName: Hyaena sinensis
                acceptedName: Pachycrocuta brevirostris
                difference: null
              - occurrenceId: occ:1660728
                originalIdentifiedName: Hyaena brevirostris
                acceptedName: Pachycrocuta brevirostris
                difference: recombined as
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

# Pachycrocuta brevirostris
