---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mammut americanum
    rank: species
    sourceDatasetId: null
    name:
      zh: Mammut americanum
      en: Mammut americanum
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
            title: PBDB accepted record — Mammut americanum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46016&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46016; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46016
            selectedOccurrenceIds:
              - occ:194240
              - occ:194365
              - occ:194887
              - occ:195300
              - occ:196740
              - occ:196787
              - occ:197128
              - occ:197162
              - occ:197190
              - occ:197632
              - occ:197736
              - occ:197805
              - occ:198015
              - occ:198503
              - occ:198537
              - occ:198620
              - occ:198880
              - occ:199076
              - occ:199273
              - occ:199354
              - occ:199407
              - occ:199500
              - occ:199513
              - occ:199545
              - occ:199606
              - occ:199629
              - occ:199675
              - occ:199755
              - occ:199844
              - occ:199871
              - occ:199973
              - occ:200022
              - occ:361734
              - occ:508166
              - occ:558980
              - occ:596013
              - occ:596643
              - occ:596698
              - occ:596720
              - occ:596762
              - occ:596763
              - occ:596764
              - occ:596775
              - occ:596786
              - occ:596794
              - occ:596795
              - occ:596819
              - occ:596820
              - occ:596831
              - occ:596832
              - occ:596833
              - occ:596840
              - occ:596841
              - occ:596842
              - occ:596843
              - occ:596844
              - occ:596855
              - occ:596859
              - occ:596860
              - occ:596861
              - occ:596862
              - occ:596863
              - occ:596864
              - occ:596865
              - occ:596866
              - occ:596867
              - occ:596868
              - occ:596869
              - occ:596870
              - occ:596871
              - occ:596872
              - occ:596873
              - occ:596874
              - occ:596875
              - occ:596876
              - occ:596877
              - occ:596878
              - occ:596879
              - occ:596880
              - occ:598201
              - occ:598229
              - occ:598290
              - occ:598291
              - occ:598292
              - occ:598296
              - occ:598297
              - occ:598298
              - occ:598299
              - occ:598300
              - occ:598301
              - occ:598302
              - occ:598303
              - occ:598304
              - occ:598305
              - occ:598306
              - occ:598307
              - occ:598375
              - occ:598685
              - occ:598686
              - occ:598687
              - occ:598688
              - occ:598689
              - occ:598690
              - occ:598691
              - occ:598700
              - occ:598701
              - occ:598705
              - occ:598706
              - occ:598707
              - occ:598708
              - occ:598709
              - occ:598725
              - occ:598726
              - occ:598727
              - occ:598728
              - occ:598730
              - occ:598731
              - occ:598732
              - occ:598733
              - occ:598734
              - occ:598735
              - occ:598738
              - occ:598739
              - occ:598740
              - occ:598741
              - occ:598742
              - occ:598743
              - occ:598744
              - occ:598745
              - occ:598746
              - occ:598747
              - occ:598748
              - occ:598749
              - occ:598750
              - occ:598751
              - occ:598752
              - occ:598753
              - occ:598754
              - occ:599209
              - occ:599210
              - occ:599211
              - occ:599212
              - occ:599404
              - occ:599405
              - occ:599406
              - occ:599407
              - occ:599408
              - occ:599409
              - occ:599410
              - occ:599411
              - occ:599412
              - occ:599413
              - occ:599414
              - occ:599415
              - occ:599416
              - occ:599427
              - occ:599428
              - occ:599438
              - occ:599440
              - occ:599441
              - occ:599442
              - occ:599443
              - occ:599444
              - occ:599445
              - occ:599446
              - occ:599447
              - occ:599448
              - occ:599449
              - occ:599450
              - occ:599451
              - occ:599452
              - occ:599453
              - occ:599454
              - occ:599455
              - occ:599456
              - occ:599457
              - occ:599458
              - occ:599459
              - occ:599460
              - occ:599461
              - occ:599462
              - occ:599463
              - occ:599464
              - occ:599465
              - occ:599466
              - occ:599467
              - occ:599468
              - occ:599469
              - occ:599470
              - occ:599471
              - occ:599472
              - occ:599473
              - occ:599474
              - occ:599475
              - occ:599476
              - occ:599477
              - occ:599478
              - occ:599479
              - occ:599494
              - occ:599495
              - occ:599496
              - occ:599497
              - occ:599498
              - occ:599499
              - occ:599500
              - occ:599501
              - occ:599502
              - occ:599503
              - occ:599504
              - occ:599505
              - occ:599506
              - occ:599507
              - occ:599508
              - occ:599509
              - occ:599510
              - occ:599511
              - occ:599512
              - occ:599513
              - occ:599514
              - occ:599515
              - occ:599516
              - occ:599517
              - occ:599518
              - occ:599520
              - occ:599521
              - occ:599522
              - occ:599523
              - occ:599526
              - occ:599527
              - occ:599528
              - occ:599529
              - occ:599530
              - occ:599535
              - occ:599536
              - occ:599537
              - occ:599552
              - occ:599553
              - occ:599554
              - occ:599747
              - occ:599748
              - occ:599749
              - occ:610357
              - occ:689845
              - occ:690427
              - occ:690431
              - occ:690451
              - occ:690455
              - occ:690481
              - occ:698943
              - occ:740567
              - occ:750046
              - occ:768230
              - occ:768231
              - occ:774085
              - occ:774121
              - occ:788258
              - occ:788259
              - occ:838779
              - occ:839088
              - occ:841166
              - occ:841982
              - occ:842288
              - occ:842420
              - occ:842429
              - occ:843315
              - occ:843322
              - occ:874095
              - occ:874103
              - occ:903345
              - occ:903346
              - occ:903351
              - occ:903352
              - occ:915382
              - occ:915920
              - occ:919158
              - occ:919265
              - occ:919280
              - occ:919303
              - occ:919345
              - occ:919413
              - occ:919418
              - occ:919550
              - occ:919605
              - occ:919622
              - occ:919625
              - occ:919639
              - occ:935470
              - occ:935928
              - occ:935981
              - occ:936223
              - occ:937212
              - occ:937267
              - occ:937268
              - occ:937269
              - occ:938110
              - occ:938111
              - occ:938112
              - occ:938128
              - occ:938129
              - occ:938130
              - occ:938131
              - occ:938132
              - occ:938133
              - occ:938134
              - occ:938135
              - occ:938136
              - occ:938137
              - occ:938138
              - occ:938139
              - occ:938142
              - occ:938143
              - occ:938144
              - occ:938146
              - occ:1012850
              - occ:1013396
              - occ:1016358
              - occ:1018606
              - occ:1020743
              - occ:1033532
              - occ:1033704
              - occ:1034072
              - occ:1038003
              - occ:1183550
              - occ:1196167
              - occ:1196425
              - occ:1196556
              - occ:1196582
              - occ:1196905
              - occ:1196948
              - occ:1197790
              - occ:1197871
              - occ:1208221
              - occ:1242310
              - occ:1385005
              - occ:1385127
              - occ:1385179
              - occ:1385195
              - occ:1404225
              - occ:1416821
              - occ:1437894
              - occ:1437905
              - occ:1490851
              - occ:1491074
              - occ:1539087
              - occ:1539091
              - occ:1578383
              - occ:1578384
              - occ:1578385
              - occ:1578386
              - occ:1578387
              - occ:1578388
              - occ:1578389
              - occ:1578390
              - occ:1578391
              - occ:1578392
              - occ:1578393
              - occ:1578394
              - occ:1578478
              - occ:1578479
              - occ:1578480
              - occ:1578482
              - occ:1578483
              - occ:1578484
              - occ:1578507
              - occ:1593102
              - occ:1607380
              - occ:1608565
              - occ:1608577
              - occ:1628535
              - occ:1635421
              - occ:1667058
              - occ:1679957
              - occ:1683616
              - occ:1686759
              - occ:1697666
              - occ:1700844
            selectedCollectionIds:
              - col:19923
              - col:19932
              - col:20001
              - col:20063
              - col:20283
              - col:20288
              - col:20307
              - col:20308
              - col:20310
              - col:20354
              - col:20377
              - col:20384
              - col:20400
              - col:20478
              - col:20479
              - col:20491
              - col:20520
              - col:20556
              - col:20572
              - col:20583
              - col:20591
              - col:20601
              - col:20603
              - col:20604
              - col:20610
              - col:20613
              - col:20618
              - col:20626
              - col:20636
              - col:20638
              - col:20647
              - col:20653
              - col:34269
              - col:51592
              - col:58089
              - col:63150
              - col:63216
              - col:63219
              - col:63223
              - col:63232
              - col:63233
              - col:63234
              - col:63235
              - col:63237
              - col:63238
              - col:63239
              - col:63241
              - col:63243
              - col:63244
              - col:63245
              - col:63246
              - col:63247
              - col:63248
              - col:63249
              - col:63250
              - col:63252
              - col:63253
              - col:63254
              - col:63255
              - col:63256
              - col:63257
              - col:63258
              - col:63259
              - col:63260
              - col:63261
              - col:63262
              - col:63263
              - col:63264
              - col:63265
              - col:63266
              - col:63267
              - col:63268
              - col:63269
              - col:63270
              - col:63271
              - col:63272
              - col:63273
              - col:63274
              - col:63275
              - col:63395
              - col:63397
              - col:63404
              - col:63405
              - col:63406
              - col:63410
              - col:63411
              - col:63412
              - col:63413
              - col:63414
              - col:63415
              - col:63416
              - col:63417
              - col:63418
              - col:63419
              - col:63420
              - col:63421
              - col:63429
              - col:63449
              - col:63450
              - col:63451
              - col:63452
              - col:63453
              - col:63454
              - col:63456
              - col:63457
              - col:63458
              - col:63459
              - col:63461
              - col:63462
              - col:63463
              - col:63464
              - col:63479
              - col:63480
              - col:63481
              - col:63482
              - col:63484
              - col:63485
              - col:63486
              - col:63487
              - col:63488
              - col:63489
              - col:63490
              - col:63491
              - col:63492
              - col:63493
              - col:63494
              - col:63495
              - col:63496
              - col:63497
              - col:63498
              - col:63499
              - col:63500
              - col:63501
              - col:63502
              - col:63503
              - col:63504
              - col:63505
              - col:63506
              - col:63554
              - col:63555
              - col:63556
              - col:63557
              - col:63572
              - col:63573
              - col:63574
              - col:63575
              - col:63576
              - col:63577
              - col:63578
              - col:63579
              - col:63580
              - col:63581
              - col:63582
              - col:63583
              - col:63584
              - col:63585
              - col:63586
              - col:63587
              - col:63589
              - col:63590
              - col:63591
              - col:63592
              - col:63593
              - col:63594
              - col:63595
              - col:63596
              - col:63597
              - col:63598
              - col:63599
              - col:63600
              - col:63601
              - col:63602
              - col:63603
              - col:63604
              - col:63605
              - col:63606
              - col:63607
              - col:63608
              - col:63609
              - col:63610
              - col:63611
              - col:63612
              - col:63613
              - col:63614
              - col:63615
              - col:63616
              - col:63617
              - col:63618
              - col:63619
              - col:63620
              - col:63621
              - col:63622
              - col:63623
              - col:63624
              - col:63626
              - col:63627
              - col:63628
              - col:63629
              - col:63630
              - col:63631
              - col:63632
              - col:63633
              - col:63634
              - col:63635
              - col:63636
              - col:63637
              - col:63638
              - col:63639
              - col:63640
              - col:63641
              - col:63642
              - col:63643
              - col:63644
              - col:63645
              - col:63646
              - col:63647
              - col:63648
              - col:63649
              - col:63650
              - col:63651
              - col:63652
              - col:63653
              - col:63655
              - col:63656
              - col:63657
              - col:63658
              - col:63659
              - col:63661
              - col:63662
              - col:63663
              - col:63664
              - col:63665
              - col:63666
              - col:63668
              - col:63669
              - col:63670
              - col:63671
              - col:63672
              - col:63705
              - col:63706
              - col:63707
              - col:65405
              - col:74142
              - col:74236
              - col:74239
              - col:74241
              - col:74243
              - col:74246
              - col:75053
              - col:79632
              - col:80234
              - col:82056
              - col:82057
              - col:83056
              - col:83069
              - col:85137
              - col:93103
              - col:93142
              - col:93246
              - col:93377
              - col:93486
              - col:93507
              - col:93516
              - col:93676
              - col:93677
              - col:77596
              - col:96899
              - col:101393
              - col:101394
              - col:101395
              - col:101396
              - col:104046
              - col:104797
              - col:104032
              - col:104039
              - col:104042
              - col:104045
              - col:104665
              - col:104673
              - col:104674
              - col:103358
              - col:104697
              - col:104701
              - col:104702
              - col:104710
              - col:73691
              - col:107875
              - col:107908
              - col:107994
              - col:108251
              - col:108274
              - col:73684
              - col:108275
              - col:108416
              - col:108417
              - col:108418
              - col:108419
              - col:108420
              - col:108421
              - col:108422
              - col:108423
              - col:108424
              - col:108425
              - col:108426
              - col:108427
              - col:108428
              - col:108429
              - col:108430
              - col:108431
              - col:108432
              - col:108433
              - col:108434
              - col:123871
              - col:123965
              - col:124388
              - col:124709
              - col:124950
              - col:126593
              - col:126595
              - col:20302
              - col:127111
              - col:152596
              - col:154722
              - col:154771
              - col:74292
              - col:154773
              - col:154804
              - col:154805
              - col:154910
              - col:154921
              - col:156789
              - col:163685
              - col:190076
              - col:190115
              - col:190114
              - col:190116
              - col:193842
              - col:195939
              - col:200629
              - col:200637
              - col:85140
              - col:85142
              - col:216259
              - col:216261
              - col:222822
              - col:222823
              - col:222824
              - col:222825
              - col:222826
              - col:222827
              - col:222828
              - col:222829
              - col:222830
              - col:222831
              - col:222832
              - col:222833
              - col:222845
              - col:222846
              - col:222847
              - col:222848
              - col:222850
              - col:222852
              - col:222849
              - col:225289
              - col:227368
              - col:216271
              - col:230672
              - col:231903
              - col:236636
              - col:238068
              - col:238514
              - col:239049
              - col:240612
            sourceReferenceIds:
              - ref:6294
              - ref:2062
              - ref:1751
              - ref:2607
              - ref:6202
              - ref:1558
              - ref:2615
              - ref:4222
              - ref:1727
              - ref:3099
              - ref:3580
              - ref:1960
              - ref:3567
              - ref:1628
              - ref:2896
              - ref:1785
              - ref:1962
              - ref:1786
              - ref:2784
              - ref:24950
              - ref:9009
              - ref:13727
              - ref:15601
              - ref:18185
              - ref:18194
              - ref:18196
              - ref:31830
              - ref:18240
              - ref:18184
              - ref:18245
              - ref:18302
              - ref:18303
              - ref:18304
              - ref:18853
              - ref:24885
              - ref:24936
              - ref:25319
              - ref:26749
              - ref:26822
              - ref:27182
              - ref:1846
              - ref:27902
              - ref:28647
              - ref:3185
              - ref:31473
              - ref:31522
              - ref:31597
              - ref:31631
              - ref:31642
              - ref:31763
              - ref:31764
              - ref:33085
              - ref:34581
              - ref:34583
              - ref:15425
              - ref:35005
              - ref:1461
              - ref:25320
              - ref:35841
              - ref:35863
              - ref:35865
              - ref:35918
              - ref:39859
              - ref:39920
              - ref:40133
              - ref:40346
              - ref:40496
              - ref:41075
              - ref:41085
              - ref:40636
              - ref:35435
              - ref:48853
              - ref:50316
              - ref:50335
              - ref:50339
              - ref:3131
              - ref:50371
              - ref:2451
              - ref:50427
              - ref:50430
              - ref:51404
              - ref:53381
              - ref:63917
              - ref:63932
              - ref:63840
              - ref:53651
              - ref:41104
              - ref:12687
              - ref:71494
              - ref:71453
              - ref:74695
              - ref:74697
              - ref:78419
              - ref:78410
              - ref:78412
              - ref:78409
              - ref:78408
              - ref:81276
              - ref:82811
              - ref:41113
              - ref:85254
              - ref:85881
              - ref:89615
              - ref:35474
              - ref:90631
              - ref:90967
              - ref:90651
              - ref:92286
            originalIdentificationMappings:
              - occurrenceId: occ:196740
                originalIdentifiedName: Mammut americanus
                acceptedName: Mammut americanum
                difference: misspelling of, recombined as
              - occurrenceId: occ:197736
                originalIdentifiedName: Mammut americanus
                acceptedName: Mammut americanum
                difference: misspelling of, recombined as
              - occurrenceId: occ:508166
                originalIdentifiedName: Mastodon giganteus
                acceptedName: Mammut americanum
                difference: null
              - occurrenceId: occ:774085
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:788258
                originalIdentifiedName: Elephas imperator
                acceptedName: Mammut americanum
                difference: null
              - occurrenceId: occ:788259
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:838779
                originalIdentifiedName: Mammut americanus
                acceptedName: Mammut americanum
                difference: misspelling of, recombined as
              - occurrenceId: occ:841166
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:841982
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:842420
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:842429
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:903351
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:903352
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1013396
                originalIdentifiedName: Mastodon giganteus
                acceptedName: Mammut americanum
                difference: null
              - occurrenceId: occ:1038003
                originalIdentifiedName: Elephas americanus
                acceptedName: Mammut americanum
                difference: null
              - occurrenceId: occ:1196425
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1196582
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1490851
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1491074
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578384
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578385
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578386
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578387
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578388
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578389
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578391
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578392
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578393
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578394
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578478
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578479
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578480
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578482
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578483
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578484
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1578507
                originalIdentifiedName: Mastodon americanus
                acceptedName: Mammut americanum
                difference: recombined as
              - occurrenceId: occ:1608565
                originalIdentifiedName: Elephas imperator
                acceptedName: Mammut americanum
                difference: null
              - occurrenceId: occ:1635421
                originalIdentifiedName: Pliomastodon adamsi
                acceptedName: Mammut americanum
                difference: null
              - occurrenceId: occ:1697666
                originalIdentifiedName: Elephas imperator
                acceptedName: Mammut americanum
                difference: null
              - occurrenceId: occ:1700844
                originalIdentifiedName: Tetracaulodon mastodontoideum
                acceptedName: Mammut americanum
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

# Mammut americanum
