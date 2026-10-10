---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bison antiquus
    rank: species
    sourceDatasetId: null
    name:
      zh: Bison antiquus
      en: Bison antiquus
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
            title: PBDB accepted record — Bison antiquus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44508&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44508; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44508
            selectedOccurrenceIds:
              - occ:198628
              - occ:199319
              - occ:199351
              - occ:614657
              - occ:690966
              - occ:690967
              - occ:690977
              - occ:740490
              - occ:740880
              - occ:768233
              - occ:774123
              - occ:774137
              - occ:799822
              - occ:839711
              - occ:841163
              - occ:841167
              - occ:841168
              - occ:841458
              - occ:841980
              - occ:842809
              - occ:842848
              - occ:1148311
              - occ:1196165
              - occ:1196903
              - occ:1197878
              - occ:1304294
              - occ:1304298
              - occ:1304301
              - occ:1378801
              - occ:1380632
              - occ:1380639
              - occ:1385013
              - occ:1491079
              - occ:1515336
              - occ:1519112
              - occ:1607389
              - occ:1629020
              - occ:1629212
              - occ:1654778
              - occ:1667171
              - occ:1671917
              - occ:1679950
              - occ:1679955
            selectedCollectionIds:
              - col:20491
              - col:20573
              - col:20581
              - col:66063
              - col:74360
              - col:74361
              - col:74365
              - col:79625
              - col:79653
              - col:82058
              - col:83069
              - col:83073
              - col:87059
              - col:93178
              - col:93246
              - col:93247
              - col:93248
              - col:93281
              - col:93377
              - col:93554
              - col:93556
              - col:146403
              - col:154722
              - col:154804
              - col:154921
              - col:174511
              - col:174512
              - col:174513
              - col:188667
              - col:188795
              - col:188999
              - col:190077
              - col:85142
              - col:211489
              - col:212303
              - col:227368
              - col:226032
              - col:230753
              - col:231727
              - col:236673
              - col:237076
              - col:238063
              - col:238066
            sourceReferenceIds:
              - ref:3580
              - ref:2504
              - ref:18912
              - ref:24971
              - ref:24972
              - ref:24976
              - ref:26728
              - ref:26756
              - ref:27182
              - ref:27902
              - ref:29294
              - ref:31481
              - ref:31522
              - ref:31547
              - ref:31597
              - ref:31683
              - ref:31686
              - ref:47308
              - ref:50316
              - ref:50371
              - ref:50430
              - ref:56934
              - ref:63304
              - ref:63919
              - ref:71494
              - ref:73091
              - ref:73332
              - ref:82811
              - ref:85291
              - ref:85310
              - ref:88428
              - ref:89633
              - ref:2588
              - ref:90299
            originalIdentificationMappings:
              - occurrenceId: occ:690977
                originalIdentifiedName: Bison kansensis n. sp.
                acceptedName: Bison antiquus
                difference: null
              - occurrenceId: occ:839711
                originalIdentifiedName: Bison occidentalis
                acceptedName: Bison antiquus
                difference: null
              - occurrenceId: occ:842809
                originalIdentifiedName: Bison occidentalis
                acceptedName: Bison antiquus
                difference: null
              - occurrenceId: occ:842848
                originalIdentifiedName: Bison occidentalis
                acceptedName: Bison antiquus
                difference: null
              - occurrenceId: occ:1148311
                originalIdentifiedName: Bison occidentalis
                acceptedName: Bison antiquus
                difference: null
              - occurrenceId: occ:1304294
                originalIdentifiedName: Bison occidentalis
                acceptedName: Bison antiquus
                difference: null
              - occurrenceId: occ:1304298
                originalIdentifiedName: Bison occidentalis
                acceptedName: Bison antiquus
                difference: null
              - occurrenceId: occ:1304301
                originalIdentifiedName: Bison occidentalis
                acceptedName: Bison antiquus
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

# Bison antiquus
