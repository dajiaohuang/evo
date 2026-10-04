---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Platygonus compressus
    rank: species
    sourceDatasetId: null
    name:
      zh: Platygonus compressus
      en: Platygonus compressus
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
            title: PBDB accepted record — Platygonus compressus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50408&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50408; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50408
            selectedOccurrenceIds:
              - occ:196031
              - occ:196766
              - occ:198623
              - occ:199314
              - occ:199418
              - occ:199433
              - occ:199812
              - occ:199848
              - occ:219958
              - occ:598050
              - occ:598150
              - occ:599283
              - occ:599309
              - occ:709224
              - occ:740605
              - occ:740949
              - occ:740985
              - occ:799823
              - occ:800136
              - occ:800137
              - occ:838781
              - occ:841246
              - occ:841756
              - occ:842519
              - occ:919323
              - occ:919415
              - occ:935929
              - occ:937213
              - occ:1028311
              - occ:1028840
              - occ:1028960
              - occ:1033854
              - occ:1196161
              - occ:1196900
              - occ:1196950
              - occ:1515323
              - occ:1515332
              - occ:1551360
              - occ:1578524
            selectedCollectionIds:
              - col:20143
              - col:20285
              - col:20491
              - col:20573
              - col:20593
              - col:20594
              - col:20634
              - col:20636
              - col:22643
              - col:63381
              - col:63387
              - col:63567
              - col:63566
              - col:75995
              - col:79634
              - col:79667
              - col:79683
              - col:87059
              - col:93103
              - col:93256
              - col:93334
              - col:93526
              - col:104662
              - col:104673
              - col:107875
              - col:108252
              - col:125941
              - col:93332
              - col:124319
              - col:123875
              - col:154722
              - col:154804
              - col:154805
              - col:195112
              - col:93373
              - col:20495
              - col:222868
            sourceReferenceIds:
              - ref:2419
              - ref:69885
              - ref:3580
              - ref:3567
              - ref:5667
              - ref:18224
              - ref:18196
              - ref:18288
              - ref:25717
              - ref:26754
              - ref:26766
              - ref:26776
              - ref:29305
              - ref:3185
              - ref:31530
              - ref:31580
              - ref:31645
              - ref:1461
              - ref:35863
              - ref:35918
              - ref:40888
              - ref:40141
              - ref:40654
              - ref:50316
              - ref:50371
              - ref:2451
              - ref:73089
              - ref:73090
              - ref:75881
              - ref:78409
            originalIdentificationMappings:
              - occurrenceId: occ:799823
                originalIdentifiedName: Platygonus compressus n. gen. n. sp.
                acceptedName: Platygonus compressus
                difference: null
              - occurrenceId: occ:800136
                originalIdentifiedName: Hyops depressifrons n. gen. n. sp.
                acceptedName: Platygonus compressus
                difference: null
              - occurrenceId: occ:800137
                originalIdentifiedName: Protochoerus prismaticus n. gen. n. sp.
                acceptedName: Platygonus compressus
                difference: null
              - occurrenceId: occ:842519
                originalIdentifiedName: Dicotyles compressus
                acceptedName: Platygonus compressus
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

# Platygonus compressus
