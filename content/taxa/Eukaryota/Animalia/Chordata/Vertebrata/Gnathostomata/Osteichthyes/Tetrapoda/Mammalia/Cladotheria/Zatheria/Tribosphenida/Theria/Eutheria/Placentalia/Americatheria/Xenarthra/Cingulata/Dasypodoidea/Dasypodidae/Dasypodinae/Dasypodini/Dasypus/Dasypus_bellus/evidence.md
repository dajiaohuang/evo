---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dasypus bellus
    rank: species
    sourceDatasetId: null
    name:
      zh: Dasypus bellus
      en: Dasypus bellus
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
            title: PBDB accepted record — Dasypus bellus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52084&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52084; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52084
            selectedOccurrenceIds:
              - occ:193684
              - occ:193700
              - occ:193721
              - occ:193741
              - occ:193771
              - occ:194609
              - occ:196077
              - occ:196704
              - occ:196799
              - occ:197134
              - occ:197237
              - occ:197533
              - occ:197567
              - occ:197774
              - occ:197814
              - occ:197985
              - occ:198025
              - occ:198039
              - occ:198112
              - occ:198277
              - occ:198426
              - occ:198585
              - occ:198646
              - occ:198861
              - occ:198956
              - occ:199261
              - occ:199286
              - occ:199358
              - occ:199410
              - occ:199420
              - occ:199445
              - occ:199467
              - occ:199516
              - occ:199579
              - occ:199619
              - occ:199800
              - occ:199854
              - occ:199989
              - occ:200009
              - occ:367673
              - occ:558969
              - occ:608446
              - occ:610336
              - occ:708983
              - occ:709223
              - occ:740944
              - occ:742156
              - occ:742157
              - occ:781514
              - occ:838757
              - occ:888550
              - occ:963701
              - occ:963711
              - occ:1196124
              - occ:1196408
              - occ:1196523
              - occ:1198025
              - occ:1200552
              - occ:1515287
              - occ:1607359
            selectedCollectionIds:
              - col:19750
              - col:19752
              - col:19753
              - col:19754
              - col:19758
              - col:19954
              - col:20151
              - col:20281
              - col:20289
              - col:20308
              - col:20318
              - col:20350
              - col:20351
              - col:20384
              - col:20385
              - col:20400
              - col:20402
              - col:20403
              - col:20415
              - col:20440
              - col:20475
              - col:20491
              - col:20494
              - col:20520
              - col:20530
              - col:20572
              - col:20573
              - col:20584
              - col:20593
              - col:20594
              - col:20595
              - col:20598
              - col:20604
              - col:20608
              - col:20613
              - col:20634
              - col:20638
              - col:20650
              - col:20653
              - col:13066
              - col:58089
              - col:20636
              - col:65405
              - col:75974
              - col:75995
              - col:79667
              - col:79759
              - col:79760
              - col:84189
              - col:93103
              - col:98313
              - col:113275
              - col:113276
              - col:154722
              - col:154771
              - col:74292
              - col:154936
              - col:20616
              - col:195112
              - col:227368
            sourceReferenceIds:
              - ref:2615
              - ref:3567
              - ref:2621
              - ref:3507
              - ref:1907
              - ref:2254
              - ref:2436
              - ref:1302
              - ref:3580
              - ref:3872
              - ref:1960
              - ref:1391
              - ref:2050
              - ref:6202
              - ref:1962
              - ref:9267
              - ref:15601
              - ref:18730
              - ref:18853
              - ref:25710
              - ref:25717
              - ref:26766
              - ref:26822
              - ref:28182
              - ref:3185
              - ref:33964
              - ref:50316
              - ref:50335
              - ref:50339
              - ref:10101
              - ref:50695
              - ref:73089
              - ref:82811
            originalIdentificationMappings:
              - occurrenceId: occ:1196408
                originalIdentifiedName: Tatu bellus n. sp.
                acceptedName: Dasypus bellus
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

# Dasypus bellus
