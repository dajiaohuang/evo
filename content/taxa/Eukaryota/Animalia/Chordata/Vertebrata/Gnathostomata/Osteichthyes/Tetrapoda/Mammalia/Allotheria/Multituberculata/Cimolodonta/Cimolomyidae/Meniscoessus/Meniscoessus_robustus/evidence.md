---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Meniscoessus robustus
    rank: species
    sourceDatasetId: null
    name:
      zh: Meniscoessus robustus
      en: Meniscoessus robustus
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
            title: PBDB accepted record — Meniscoessus robustus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45847&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45847; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45847
            selectedOccurrenceIds:
              - occ:163022
              - occ:163037
              - occ:163050
              - occ:163063
              - occ:163071
              - occ:163082
              - occ:163103
              - occ:163114
              - occ:163122
              - occ:163147
              - occ:163154
              - occ:163157
              - occ:163167
              - occ:163178
              - occ:163186
              - occ:163215
              - occ:163237
              - occ:163249
              - occ:163268
              - occ:163271
              - occ:163272
              - occ:163273
              - occ:163297
              - occ:163301
              - occ:163304
              - occ:163313
              - occ:163326
              - occ:163339
              - occ:163350
              - occ:163353
              - occ:163357
              - occ:163371
              - occ:163377
              - occ:163381
              - occ:163395
              - occ:163417
              - occ:163436
              - occ:163440
              - occ:163442
              - occ:163443
              - occ:163445
              - occ:163448
              - occ:163450
              - occ:163455
              - occ:163460
              - occ:163466
              - occ:163477
              - occ:163499
              - occ:163514
              - occ:163520
              - occ:163532
              - occ:163540
              - occ:163556
              - occ:163566
              - occ:163582
              - occ:163586
              - occ:163599
              - occ:163600
              - occ:163603
              - occ:163661
              - occ:163671
              - occ:163676
              - occ:163681
              - occ:163682
              - occ:163683
              - occ:163685
              - occ:163694
              - occ:163703
              - occ:163711
              - occ:163712
              - occ:163715
              - occ:163718
              - occ:163725
              - occ:163740
              - occ:457899
              - occ:457982
              - occ:457994
              - occ:458023
              - occ:458131
              - occ:458187
              - occ:534750
              - occ:820779
              - occ:989258
              - occ:1171239
              - occ:1171240
              - occ:1171241
              - occ:1171242
              - occ:1171243
              - occ:1171263
              - occ:1171264
              - occ:1171268
              - occ:1171282
              - occ:1171293
              - occ:1171294
              - occ:1171295
              - occ:1171296
              - occ:1171297
              - occ:1171308
              - occ:1292676
              - occ:1292699
              - occ:1350465
            selectedCollectionIds:
              - col:14502
              - col:14505
              - col:14506
              - col:14511
              - col:14514
              - col:14515
              - col:14516
              - col:14517
              - col:14519
              - col:14523
              - col:14524
              - col:14525
              - col:14527
              - col:14532
              - col:14534
              - col:14538
              - col:14546
              - col:14549
              - col:14550
              - col:14552
              - col:14553
              - col:14554
              - col:14559
              - col:14561
              - col:14562
              - col:14565
              - col:14566
              - col:14568
              - col:14571
              - col:14572
              - col:14575
              - col:14576
              - col:14577
              - col:14580
              - col:14583
              - col:14585
              - col:14587
              - col:14588
              - col:14589
              - col:14590
              - col:14591
              - col:14592
              - col:14594
              - col:14595
              - col:14596
              - col:14597
              - col:14598
              - col:14604
              - col:14606
              - col:14608
              - col:14611
              - col:14612
              - col:14616
              - col:14618
              - col:14623
              - col:14624
              - col:14625
              - col:14626
              - col:14629
              - col:14639
              - col:14641
              - col:14642
              - col:14644
              - col:14645
              - col:14646
              - col:14647
              - col:14649
              - col:14650
              - col:14651
              - col:14652
              - col:14653
              - col:14654
              - col:14655
              - col:14656
              - col:45111
              - col:45128
              - col:45130
              - col:45102
              - col:45099
              - col:45124
              - col:55326
              - col:14610
              - col:119007
              - col:14567
              - col:14586
              - col:172642
              - col:172644
              - col:183109
            sourceReferenceIds:
              - ref:2237
              - ref:3880
              - ref:2255
              - ref:14177
              - ref:1129
              - ref:3198
              - ref:962
              - ref:6294
              - ref:1239
              - ref:960
              - ref:3640
              - ref:1985
              - ref:3705
              - ref:1247
              - ref:3708
              - ref:1987
              - ref:1535
              - ref:11749
              - ref:14811
              - ref:38233
              - ref:56083
              - ref:61095
            originalIdentificationMappings:
              - occurrenceId: occ:163063
                originalIdentifiedName: Halodon sculptus
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:163082
                originalIdentifiedName: Meniscoessus borealis
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:163326
                originalIdentifiedName: Dipriodon robustus n. sp.
                acceptedName: Meniscoessus robustus
                difference: recombined as
              - occurrenceId: occ:163436
                originalIdentifiedName: Dipriodon robustus
                acceptedName: Meniscoessus robustus
                difference: recombined as
              - occurrenceId: occ:163540
                originalIdentifiedName: Meniscoessus greeni
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:989258
                originalIdentifiedName: Meniscoessus borealis n. sp.
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171239
                originalIdentifiedName: Tripriodon coelatus n. sp.
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171240
                originalIdentifiedName: Selenacodon fragilis n. sp.
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171241
                originalIdentifiedName: Dipriodon lunatus n. sp.
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171242
                originalIdentifiedName: Dipriodon robustus
                acceptedName: Meniscoessus robustus
                difference: recombined as
              - occurrenceId: occ:1171243
                originalIdentifiedName: Halodon sculptus n. sp.
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171263
                originalIdentifiedName: Dipriodon lunatus
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171264
                originalIdentifiedName: Halodon sculptus
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171268
                originalIdentifiedName: Halodon sculptus
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171282
                originalIdentifiedName: Oracodon anceps
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171293
                originalIdentifiedName: Selenacodon fragilis
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171294
                originalIdentifiedName: Dipriodon lunatus
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171295
                originalIdentifiedName: Halodon sculptus
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171296
                originalIdentifiedName: Oracodon anceps
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171297
                originalIdentifiedName: Halodon sculptus
                acceptedName: Meniscoessus robustus
                difference: null
              - occurrenceId: occ:1171308
                originalIdentifiedName: Oracodon anceps
                acceptedName: Meniscoessus robustus
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

# Meniscoessus robustus
