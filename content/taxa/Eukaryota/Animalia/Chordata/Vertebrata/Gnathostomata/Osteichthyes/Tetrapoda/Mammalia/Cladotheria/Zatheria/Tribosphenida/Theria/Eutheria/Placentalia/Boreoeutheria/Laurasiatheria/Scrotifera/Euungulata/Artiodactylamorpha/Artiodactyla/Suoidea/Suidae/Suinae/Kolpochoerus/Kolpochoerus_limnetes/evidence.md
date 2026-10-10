---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Kolpochoerus limnetes
    rank: species
    sourceDatasetId: null
    name:
      zh: Kolpochoerus limnetes
      en: Kolpochoerus limnetes
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
            title: PBDB accepted record — Kolpochoerus limnetes
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=133593&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:133593; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:133593
            selectedOccurrenceIds:
              - occ:212015
              - occ:212714
              - occ:212760
              - occ:212772
              - occ:212815
              - occ:212820
              - occ:216761
              - occ:216812
              - occ:217310
              - occ:217386
              - occ:217407
              - occ:217512
              - occ:218136
              - occ:218710
              - occ:219577
              - occ:219698
              - occ:219778
              - occ:219789
              - occ:219859
              - occ:219879
              - occ:221395
              - occ:221466
              - occ:221478
              - occ:221489
              - occ:221510
              - occ:221523
              - occ:221542
              - occ:221563
              - occ:221578
              - occ:221673
              - occ:221694
              - occ:221716
              - occ:221736
              - occ:221776
              - occ:221797
              - occ:221808
              - occ:221828
              - occ:221860
              - occ:221897
              - occ:221909
              - occ:221922
              - occ:221962
              - occ:221992
              - occ:222011
              - occ:222045
              - occ:222061
              - occ:222068
              - occ:222079
              - occ:222085
              - occ:222114
              - occ:222146
              - occ:222159
              - occ:222232
              - occ:222265
              - occ:222302
              - occ:222438
              - occ:222454
              - occ:222464
              - occ:222472
              - occ:222515
              - occ:222527
              - occ:222536
              - occ:222558
              - occ:222586
              - occ:222608
              - occ:222617
              - occ:222648
              - occ:222676
              - occ:222688
              - occ:222706
              - occ:222721
              - occ:222731
              - occ:222746
              - occ:222761
              - occ:222771
              - occ:222794
              - occ:222807
              - occ:222811
              - occ:222906
              - occ:222916
              - occ:222923
              - occ:222940
              - occ:222989
              - occ:223017
              - occ:223068
              - occ:223101
              - occ:223131
              - occ:223179
              - occ:223201
              - occ:223321
              - occ:223351
              - occ:223365
              - occ:223378
              - occ:223389
              - occ:223394
              - occ:223399
              - occ:223416
              - occ:223434
              - occ:223446
              - occ:223492
              - occ:223499
              - occ:223505
              - occ:223514
              - occ:223528
              - occ:223532
              - occ:223534
              - occ:223543
              - occ:223545
              - occ:223548
              - occ:223560
              - occ:223563
              - occ:223568
              - occ:223591
              - occ:223639
              - occ:223663
              - occ:223686
              - occ:223696
              - occ:223723
              - occ:223730
              - occ:223760
              - occ:223773
              - occ:223791
              - occ:223811
              - occ:223828
              - occ:223855
              - occ:223866
              - occ:223914
              - occ:223942
              - occ:223973
              - occ:224007
              - occ:224023
              - occ:224031
              - occ:224078
              - occ:224137
              - occ:224151
              - occ:224189
              - occ:224196
              - occ:224222
              - occ:224239
              - occ:224257
              - occ:224283
              - occ:224921
              - occ:226262
              - occ:226277
              - occ:226296
              - occ:226359
              - occ:226373
              - occ:226383
              - occ:226418
              - occ:226445
              - occ:226458
              - occ:226466
              - occ:226477
              - occ:226482
              - occ:226500
              - occ:226521
              - occ:226532
              - occ:226546
              - occ:226565
              - occ:226572
              - occ:226615
              - occ:228339
              - occ:229124
              - occ:388505
              - occ:388529
              - occ:395195
              - occ:396991
              - occ:656692
              - occ:1589514
              - occ:1589537
              - occ:1589571
            selectedCollectionIds:
              - col:21294
              - col:21526
              - col:21532
              - col:21533
              - col:21539
              - col:21544
              - col:22041
              - col:22064
              - col:22169
              - col:22177
              - col:22178
              - col:22197
              - col:22267
              - col:22327
              - col:22557
              - col:22582
              - col:22594
              - col:22595
              - col:22627
              - col:22628
              - col:21282
              - col:21286
              - col:21288
              - col:21289
              - col:21291
              - col:21292
              - col:21296
              - col:21301
              - col:21303
              - col:21342
              - col:21343
              - col:21344
              - col:21345
              - col:21347
              - col:21348
              - col:21350
              - col:21352
              - col:21354
              - col:21356
              - col:21360
              - col:21367
              - col:21368
              - col:21369
              - col:21370
              - col:21376
              - col:21377
              - col:21378
              - col:21395
              - col:21396
              - col:21398
              - col:21399
              - col:21402
              - col:21410
              - col:21415
              - col:21420
              - col:21446
              - col:21448
              - col:21449
              - col:21451
              - col:21454
              - col:21455
              - col:21456
              - col:21457
              - col:21458
              - col:21460
              - col:21461
              - col:21462
              - col:21463
              - col:21464
              - col:21466
              - col:21468
              - col:21471
              - col:21472
              - col:21473
              - col:21474
              - col:21476
              - col:21477
              - col:21478
              - col:21486
              - col:21488
              - col:21489
              - col:21495
              - col:21498
              - col:21500
              - col:21503
              - col:21504
              - col:21506
              - col:21514
              - col:21515
              - col:21547
              - col:21552
              - col:21553
              - col:21554
              - col:21555
              - col:21556
              - col:21557
              - col:21562
              - col:21565
              - col:21566
              - col:21573
              - col:21576
              - col:21578
              - col:21581
              - col:21585
              - col:21586
              - col:21587
              - col:21589
              - col:21590
              - col:21591
              - col:21595
              - col:21596
              - col:21598
              - col:21607
              - col:21610
              - col:21614
              - col:21618
              - col:21619
              - col:21621
              - col:21622
              - col:21625
              - col:21626
              - col:21627
              - col:21628
              - col:21631
              - col:21632
              - col:21633
              - col:21640
              - col:21646
              - col:21652
              - col:21656
              - col:21657
              - col:21658
              - col:21667
              - col:21673
              - col:21675
              - col:21682
              - col:21684
              - col:21740
              - col:21742
              - col:21745
              - col:21751
              - col:21817
              - col:21964
              - col:21966
              - col:21970
              - col:21983
              - col:21986
              - col:21987
              - col:21994
              - col:21999
              - col:22000
              - col:22001
              - col:22003
              - col:22005
              - col:22008
              - col:22012
              - col:22014
              - col:22015
              - col:22018
              - col:22019
              - col:22025
              - col:22342
              - col:22617
              - col:22492
              - col:22494
              - col:22498
              - col:21523
              - col:70907
              - col:224654
              - col:224655
              - col:224657
            sourceReferenceIds:
              - ref:4454
              - ref:10217
              - ref:4768
              - ref:4478
              - ref:4442
              - ref:5386
              - ref:5366
              - ref:5571
              - ref:5481
              - ref:5638
              - ref:5271
              - ref:4659
              - ref:5653
              - ref:5596
              - ref:4447
              - ref:4769
              - ref:4486
              - ref:4763
              - ref:5263
              - ref:4730
              - ref:4451
              - ref:5269
              - ref:4771
              - ref:5281
              - ref:4764
              - ref:4773
              - ref:4774
              - ref:4468
              - ref:9955
              - ref:23775
              - ref:80990
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

# Kolpochoerus limnetes
