---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyopsodus powellianus
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyopsodus powellianus
      en: Hyopsodus powellianus
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
            title: PBDB accepted record — Hyopsodus powellianus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47183&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47183; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47183
            selectedOccurrenceIds:
              - occ:167809
              - occ:168019
              - occ:168062
              - occ:168080
              - occ:168084
              - occ:168099
              - occ:168101
              - occ:168113
              - occ:168116
              - occ:168120
              - occ:168127
              - occ:168132
              - occ:168138
              - occ:168142
              - occ:168153
              - occ:168162
              - occ:168383
              - occ:168391
              - occ:168412
              - occ:168433
              - occ:168436
              - occ:168441
              - occ:168446
              - occ:168460
              - occ:168483
              - occ:168490
              - occ:168778
              - occ:168868
              - occ:170124
              - occ:170153
              - occ:170189
              - occ:170224
              - occ:170264
              - occ:170293
              - occ:170324
              - occ:170347
              - occ:170369
              - occ:170382
              - occ:170406
              - occ:170695
              - occ:170876
              - occ:172670
              - occ:172672
              - occ:172674
              - occ:172685
              - occ:172689
              - occ:172811
              - occ:172849
              - occ:172852
              - occ:172854
              - occ:172856
              - occ:172986
              - occ:173004
              - occ:173007
              - occ:173010
              - occ:173012
              - occ:173014
              - occ:173016
              - occ:173019
              - occ:173021
              - occ:173024
              - occ:173027
              - occ:173029
              - occ:173031
              - occ:173034
              - occ:173037
              - occ:173039
              - occ:173041
              - occ:173043
              - occ:173045
              - occ:173047
              - occ:173050
              - occ:173052
              - occ:173055
              - occ:173058
              - occ:173061
              - occ:173886
              - occ:456870
              - occ:458695
              - occ:469588
              - occ:469840
              - occ:469849
              - occ:469855
              - occ:1370080
              - occ:1370149
            selectedCollectionIds:
              - col:15225
              - col:15289
              - col:15302
              - col:15310
              - col:15311
              - col:15318
              - col:15319
              - col:15325
              - col:15326
              - col:15327
              - col:15329
              - col:15331
              - col:15333
              - col:15334
              - col:15338
              - col:15341
              - col:15388
              - col:15391
              - col:15398
              - col:15408
              - col:15409
              - col:15410
              - col:15412
              - col:15414
              - col:15420
              - col:15422
              - col:15459
              - col:15479
              - col:15554
              - col:15555
              - col:15556
              - col:15557
              - col:15558
              - col:15559
              - col:15560
              - col:15563
              - col:15564
              - col:15565
              - col:15566
              - col:15597
              - col:15661
              - col:15919
              - col:15920
              - col:15921
              - col:15927
              - col:15928
              - col:15934
              - col:15938
              - col:15939
              - col:15940
              - col:15941
              - col:15964
              - col:15965
              - col:15966
              - col:15967
              - col:15968
              - col:15969
              - col:15970
              - col:15971
              - col:15972
              - col:15973
              - col:15974
              - col:15975
              - col:15976
              - col:15977
              - col:15978
              - col:15979
              - col:15980
              - col:15981
              - col:15982
              - col:15983
              - col:15984
              - col:15985
              - col:15986
              - col:15987
              - col:15988
              - col:16198
              - col:15680
              - col:15707
              - col:46692
              - col:46712
              - col:46713
              - col:46714
              - col:186931
              - col:186943
            sourceReferenceIds:
              - ref:6223
              - ref:2078
              - ref:2283
              - ref:6294
              - ref:3021
              - ref:6214
              - ref:6196
              - ref:1760
              - ref:11717
              - ref:62695
            originalIdentificationMappings: []
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

# Hyopsodus powellianus
