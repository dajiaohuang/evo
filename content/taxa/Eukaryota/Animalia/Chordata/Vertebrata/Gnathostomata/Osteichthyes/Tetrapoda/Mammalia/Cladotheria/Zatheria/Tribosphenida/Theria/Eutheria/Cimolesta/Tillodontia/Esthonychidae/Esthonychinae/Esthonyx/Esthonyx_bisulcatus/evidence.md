---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Esthonyx bisulcatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Esthonyx bisulcatus
      en: Esthonyx bisulcatus
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
            title: PBDB accepted record — Esthonyx bisulcatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46335&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46335; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46335
            selectedOccurrenceIds:
              - occ:167802
              - occ:167949
              - occ:167960
              - occ:168024
              - occ:168078
              - occ:168191
              - occ:168200
              - occ:168341
              - occ:168356
              - occ:168362
              - occ:168379
              - occ:168396
              - occ:168511
              - occ:168688
              - occ:169470
              - occ:169489
              - occ:169527
              - occ:169547
              - occ:169567
              - occ:169597
              - occ:169625
              - occ:169673
              - occ:169705
              - occ:169724
              - occ:169742
              - occ:169759
              - occ:169783
              - occ:169801
              - occ:169812
              - occ:169837
              - occ:169858
              - occ:169872
              - occ:169897
              - occ:169907
              - occ:169938
              - occ:169961
              - occ:170001
              - occ:170040
              - occ:170071
              - occ:170110
              - occ:170144
              - occ:170178
              - occ:170213
              - occ:170250
              - occ:170316
              - occ:170343
              - occ:170363
              - occ:170378
              - occ:170400
              - occ:170422
              - occ:170714
              - occ:170723
              - occ:170935
              - occ:172981
              - occ:456865
              - occ:456892
              - occ:457576
              - occ:457604
              - occ:457628
              - occ:457652
              - occ:457692
              - occ:457707
              - occ:457717
              - occ:457744
              - occ:457775
              - occ:458605
              - occ:458630
              - occ:458643
              - occ:458658
              - occ:458679
              - occ:458692
              - occ:458737
              - occ:458749
              - occ:462656
              - occ:463011
              - occ:469111
              - occ:469239
              - occ:469314
              - occ:469376
              - occ:469394
              - occ:469442
              - occ:469512
              - occ:469583
              - occ:469603
              - occ:469618
              - occ:469675
              - occ:469722
              - occ:469734
              - occ:469753
              - occ:469799
              - occ:469827
              - occ:469838
              - occ:469848
              - occ:469866
              - occ:469886
              - occ:469892
              - occ:469914
              - occ:469986
              - occ:469997
              - occ:470047
              - occ:470067
              - occ:470080
              - occ:470095
              - occ:470116
              - occ:470130
              - occ:470147
              - occ:470186
              - occ:470199
              - occ:470226
              - occ:470240
              - occ:470288
              - occ:470322
              - occ:470331
              - occ:470348
              - occ:470367
              - occ:470390
              - occ:470409
              - occ:470429
              - occ:470459
              - occ:470499
              - occ:470597
              - occ:470734
              - occ:470773
              - occ:470814
              - occ:470831
              - occ:470842
              - occ:470855
              - occ:470877
              - occ:470965
              - occ:471072
              - occ:471083
              - occ:471132
              - occ:471162
              - occ:471192
              - occ:471210
              - occ:471230
              - occ:471291
              - occ:471302
              - occ:471332
              - occ:471346
              - occ:471384
              - occ:471409
              - occ:471423
              - occ:471434
              - occ:471463
              - occ:471487
              - occ:471500
              - occ:471512
              - occ:471528
              - occ:471552
              - occ:471562
              - occ:471567
              - occ:471578
            selectedCollectionIds:
              - col:15225
              - col:15267
              - col:15272
              - col:15290
              - col:15310
              - col:15349
              - col:15350
              - col:15379
              - col:15383
              - col:15384
              - col:15388
              - col:15392
              - col:15430
              - col:15452
              - col:15517
              - col:15518
              - col:15520
              - col:15521
              - col:15522
              - col:15523
              - col:15524
              - col:15531
              - col:15532
              - col:15533
              - col:15534
              - col:15536
              - col:15538
              - col:15540
              - col:15541
              - col:15542
              - col:15543
              - col:15544
              - col:15546
              - col:15547
              - col:15548
              - col:15549
              - col:15551
              - col:15552
              - col:15553
              - col:15554
              - col:15555
              - col:15556
              - col:15557
              - col:15558
              - col:15560
              - col:15563
              - col:15564
              - col:15565
              - col:15566
              - col:15567
              - col:15610
              - col:15613
              - col:15663
              - col:15964
              - col:15680
              - col:15683
              - col:15684
              - col:15687
              - col:15692
              - col:15694
              - col:15695
              - col:15696
              - col:15697
              - col:15699
              - col:15701
              - col:15702
              - col:15703
              - col:15704
              - col:15705
              - col:15706
              - col:15707
              - col:15690
              - col:15693
              - col:15592
              - col:15593
              - col:46641
              - col:46656
              - col:46666
              - col:46673
              - col:46675
              - col:46682
              - col:46687
              - col:46692
              - col:46693
              - col:46694
              - col:46699
              - col:46701
              - col:46702
              - col:46704
              - col:46707
              - col:46711
              - col:46712
              - col:46713
              - col:46715
              - col:46718
              - col:46719
              - col:46721
              - col:46729
              - col:46730
              - col:46733
              - col:46734
              - col:46735
              - col:46736
              - col:46738
              - col:46739
              - col:46740
              - col:46745
              - col:46746
              - col:46748
              - col:46749
              - col:46754
              - col:46757
              - col:46758
              - col:46759
              - col:46760
              - col:46761
              - col:46763
              - col:46765
              - col:46767
              - col:46769
              - col:46778
              - col:46789
              - col:46792
              - col:46794
              - col:46795
              - col:46796
              - col:46797
              - col:46798
              - col:46805
              - col:46810
              - col:46811
              - col:46814
              - col:46816
              - col:46818
              - col:46819
              - col:46820
              - col:46825
              - col:46826
              - col:46830
              - col:46831
              - col:46834
              - col:46836
              - col:46837
              - col:46838
              - col:46841
              - col:46844
              - col:46845
              - col:46846
              - col:46847
              - col:46849
              - col:46850
              - col:46851
              - col:46852
            sourceReferenceIds:
              - ref:2078
              - ref:1668
              - ref:6294
              - ref:3021
              - ref:6214
              - ref:3202
              - ref:2311
              - ref:1760
              - ref:11717
            originalIdentificationMappings:
              - occurrenceId: occ:168511
                originalIdentifiedName: Esthonyx acer n. sp.
                acceptedName: Esthonyx bisulcatus
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

# Esthonyx bisulcatus
