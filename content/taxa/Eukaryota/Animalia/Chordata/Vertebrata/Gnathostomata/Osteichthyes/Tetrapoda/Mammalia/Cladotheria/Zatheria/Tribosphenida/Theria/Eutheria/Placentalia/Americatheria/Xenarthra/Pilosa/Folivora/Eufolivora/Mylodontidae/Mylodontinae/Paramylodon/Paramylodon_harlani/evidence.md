---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paramylodon harlani
    rank: species
    sourceDatasetId: null
    name:
      zh: Paramylodon harlani
      en: Paramylodon harlani
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
            title: PBDB accepted record — Paramylodon harlani
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48020&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48020; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48020
            selectedOccurrenceIds:
              - occ:194184
              - occ:194194
              - occ:195877
              - occ:196000
              - occ:196196
              - occ:196727
              - occ:196919
              - occ:196979
              - occ:197123
              - occ:197187
              - occ:197349
              - occ:197448
              - occ:197491
              - occ:197536
              - occ:197716
              - occ:197746
              - occ:197779
              - occ:197816
              - occ:197850
              - occ:197903
              - occ:197988
              - occ:198027
              - occ:198130
              - occ:198304
              - occ:198354
              - occ:198375
              - occ:198376
              - occ:198429
              - occ:198571
              - occ:198588
              - occ:198670
              - occ:198686
              - occ:199060
              - occ:199174
              - occ:199201
              - occ:199404
              - occ:199518
              - occ:199548
              - occ:199609
              - occ:199707
              - occ:199780
              - occ:199926
              - occ:295263
              - occ:558972
              - occ:661601
              - occ:774128
              - occ:788274
              - occ:788286
              - occ:839011
              - occ:839108
              - occ:842272
              - occ:888562
              - occ:1196126
              - occ:1196576
              - occ:1196889
              - occ:1197788
              - occ:1197879
              - occ:1201324
              - occ:1353018
              - occ:1353034
              - occ:1385048
              - occ:1385062
              - occ:1386046
              - occ:1394612
              - occ:1418247
              - occ:1491084
              - occ:1543280
              - occ:1607361
              - occ:1629190
              - occ:1679951
              - occ:1679954
            selectedCollectionIds:
              - col:19915
              - col:19916
              - col:20127
              - col:20143
              - col:20165
              - col:20283
              - col:20295
              - col:20299
              - col:20307
              - col:20310
              - col:20327
              - col:20342
              - col:20347
              - col:20350
              - col:20375
              - col:20382
              - col:20384
              - col:20385
              - col:20387
              - col:20390
              - col:20400
              - col:20402
              - col:20417
              - col:20443
              - col:20454
              - col:20455
              - col:20456
              - col:20475
              - col:20487
              - col:20491
              - col:20498
              - col:20499
              - col:20556
              - col:20565
              - col:20569
              - col:20591
              - col:20604
              - col:20605
              - col:20612
              - col:20623
              - col:20630
              - col:20642
              - col:28225
              - col:58089
              - col:71278
              - col:83072
              - col:85144
              - col:85145
              - col:93137
              - col:93143
              - col:93483
              - col:98313
              - col:154722
              - col:154773
              - col:154804
              - col:154910
              - col:154921
              - col:155409
              - col:183455
              - col:183460
              - col:190088
              - col:190089
              - col:190387
              - col:192043
              - col:191915
              - col:85142
              - col:217136
              - col:227368
              - col:230753
              - col:238063
              - col:238065
            sourceReferenceIds:
              - ref:6294
              - ref:2499
              - ref:3081
              - ref:2607
              - ref:1907
              - ref:2615
              - ref:4222
              - ref:1400
              - ref:1899
              - ref:3872
              - ref:1912
              - ref:1200
              - ref:2725
              - ref:1936
              - ref:1962
              - ref:2501
              - ref:7718
              - ref:15601
              - ref:54381
              - ref:27902
              - ref:28649
              - ref:6221
              - ref:31473
              - ref:31627
              - ref:33964
              - ref:50316
              - ref:3131
              - ref:50371
              - ref:50427
              - ref:50430
              - ref:50720
              - ref:61266
              - ref:63929
              - ref:24940
              - ref:64914
              - ref:64797
              - ref:71494
              - ref:75322
              - ref:82811
              - ref:85310
              - ref:90299
            originalIdentificationMappings:
              - occurrenceId: occ:197349
                originalIdentifiedName: Glossotherium harlani
                acceptedName: Paramylodon harlani
                difference: recombined as
              - occurrenceId: occ:839011
                originalIdentifiedName: Glossotherium harlani
                acceptedName: Paramylodon harlani
                difference: recombined as
              - occurrenceId: occ:839108
                originalIdentifiedName: Glossotherium harlani
                acceptedName: Paramylodon harlani
                difference: recombined as
              - occurrenceId: occ:1196576
                originalIdentifiedName: Mylodon harlani
                acceptedName: Paramylodon harlani
                difference: recombined as
              - occurrenceId: occ:1201324
                originalIdentifiedName: Mylodon harlani
                acceptedName: Paramylodon harlani
                difference: recombined as
              - occurrenceId: occ:1386046
                originalIdentifiedName: Mylodon harlani
                acceptedName: Paramylodon harlani
                difference: recombined as
              - occurrenceId: occ:1394612
                originalIdentifiedName: Glossotherium harlani
                acceptedName: Paramylodon harlani
                difference: recombined as
              - occurrenceId: occ:1418247
                originalIdentifiedName: Mylodon harlani
                acceptedName: Paramylodon harlani
                difference: recombined as
              - occurrenceId: occ:1491084
                originalIdentifiedName: Mylodon harlani
                acceptedName: Paramylodon harlani
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

# Paramylodon harlani
