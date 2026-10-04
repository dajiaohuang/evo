---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Haplomylus speirianus
    rank: species
    sourceDatasetId: null
    name:
      zh: Haplomylus speirianus
      en: Haplomylus speirianus
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
            title: PBDB accepted record — Haplomylus speirianus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47187&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47187; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47187
            selectedOccurrenceIds:
              - occ:167765
              - occ:167782
              - occ:167951
              - occ:168209
              - occ:168222
              - occ:168241
              - occ:168275
              - occ:168656
              - occ:168728
              - occ:168807
              - occ:168824
              - occ:168833
              - occ:168903
              - occ:168957
              - occ:169038
              - occ:169074
              - occ:169105
              - occ:169133
              - occ:169152
              - occ:169186
              - occ:169223
              - occ:169249
              - occ:169300
              - occ:169346
              - occ:169367
              - occ:169390
              - occ:169411
              - occ:169454
              - occ:169474
              - occ:169496
              - occ:169508
              - occ:169536
              - occ:169548
              - occ:169576
              - occ:169604
              - occ:169634
              - occ:169682
              - occ:171100
              - occ:171190
              - occ:171224
              - occ:171276
              - occ:171331
              - occ:171522
              - occ:171717
              - occ:171844
              - occ:172168
              - occ:172239
              - occ:172242
              - occ:172256
              - occ:172270
              - occ:172280
              - occ:172304
              - occ:172318
              - occ:172324
              - occ:172371
              - occ:172388
              - occ:172402
              - occ:172556
              - occ:172767
              - occ:172782
              - occ:173071
              - occ:173162
              - occ:173165
              - occ:173175
              - occ:173190
              - occ:173196
              - occ:173199
              - occ:173206
              - occ:173213
              - occ:173218
              - occ:173220
              - occ:173223
              - occ:173228
              - occ:173232
              - occ:173241
              - occ:173243
              - occ:173247
              - occ:173250
              - occ:173252
              - occ:173257
              - occ:173258
              - occ:173260
              - occ:173262
              - occ:173263
              - occ:173265
              - occ:173266
              - occ:173291
              - occ:456735
              - occ:456893
              - occ:457745
              - occ:462546
              - occ:462588
              - occ:462601
              - occ:462657
              - occ:463022
              - occ:469062
              - occ:469092
              - occ:469112
              - occ:469125
              - occ:469146
              - occ:469179
              - occ:469240
              - occ:469250
              - occ:469273
              - occ:469320
              - occ:469331
              - occ:469338
              - occ:469377
              - occ:469485
              - occ:469500
              - occ:469526
              - occ:469552
              - occ:469604
              - occ:469619
              - occ:469645
              - occ:469656
              - occ:469915
              - occ:469926
              - occ:469933
              - occ:469946
              - occ:469960
              - occ:470177
              - occ:470483
              - occ:470508
              - occ:470516
              - occ:470533
              - occ:470546
              - occ:470561
              - occ:470568
              - occ:470588
              - occ:470598
              - occ:470619
              - occ:470643
              - occ:470661
              - occ:470668
              - occ:470678
              - occ:470691
              - occ:470709
              - occ:470720
              - occ:470748
              - occ:470774
              - occ:470799
              - occ:470815
              - occ:470832
              - occ:470843
              - occ:470856
              - occ:470878
              - occ:470887
              - occ:470897
              - occ:470935
              - occ:470951
              - occ:470966
              - occ:470995
              - occ:471015
              - occ:471044
              - occ:471099
              - occ:471114
              - occ:471133
              - occ:471156
              - occ:471163
              - occ:471177
              - occ:471193
              - occ:471211
              - occ:471262
              - occ:471271
              - occ:471280
              - occ:471316
              - occ:471333
              - occ:471347
              - occ:471363
              - occ:471386
              - occ:471435
              - occ:471446
              - occ:471488
              - occ:1247164
              - occ:1314854
            selectedCollectionIds:
              - col:15220
              - col:15222
              - col:15267
              - col:15350
              - col:15353
              - col:15357
              - col:15366
              - col:15450
              - col:15455
              - col:15468
              - col:15471
              - col:15472
              - col:15480
              - col:15485
              - col:15491
              - col:15493
              - col:15495
              - col:15503
              - col:15504
              - col:15505
              - col:15507
              - col:15509
              - col:15510
              - col:15512
              - col:15513
              - col:15514
              - col:15515
              - col:15516
              - col:15517
              - col:15518
              - col:15519
              - col:15520
              - col:15521
              - col:15522
              - col:15523
              - col:15524
              - col:15531
              - col:15699
              - col:15717
              - col:15721
              - col:15725
              - col:15729
              - col:15756
              - col:15779
              - col:15793
              - col:15845
              - col:15863
              - col:15864
              - col:15865
              - col:15868
              - col:15870
              - col:15878
              - col:15883
              - col:15884
              - col:15887
              - col:15889
              - col:15891
              - col:15912
              - col:15932
              - col:15933
              - col:15994
              - col:16018
              - col:16020
              - col:16021
              - col:16024
              - col:16025
              - col:16027
              - col:16028
              - col:16029
              - col:16030
              - col:16031
              - col:16032
              - col:16033
              - col:16034
              - col:16038
              - col:16039
              - col:16040
              - col:16041
              - col:16042
              - col:16045
              - col:16046
              - col:16048
              - col:16049
              - col:16050
              - col:16051
              - col:16052
              - col:16055
              - col:15679
              - col:15683
              - col:15586
              - col:15588
              - col:15589
              - col:15592
              - col:15594
              - col:46636
              - col:46639
              - col:46641
              - col:46642
              - col:46644
              - col:46647
              - col:46656
              - col:46657
              - col:46659
              - col:46667
              - col:46668
              - col:46669
              - col:46673
              - col:46685
              - col:46686
              - col:46688
              - col:46690
              - col:46693
              - col:46694
              - col:46697
              - col:46698
              - col:46721
              - col:46722
              - col:46724
              - col:46726
              - col:46727
              - col:46744
              - col:46768
              - col:46770
              - col:46771
              - col:46772
              - col:46773
              - col:46774
              - col:46775
              - col:46777
              - col:46778
              - col:46780
              - col:46782
              - col:46783
              - col:46784
              - col:46785
              - col:46786
              - col:46787
              - col:46788
              - col:46790
              - col:46792
              - col:46793
              - col:46794
              - col:46795
              - col:46796
              - col:46797
              - col:46798
              - col:46799
              - col:46800
              - col:46803
              - col:46804
              - col:46805
              - col:46807
              - col:46808
              - col:46809
              - col:46812
              - col:46813
              - col:46814
              - col:46815
              - col:46816
              - col:46817
              - col:46818
              - col:46819
              - col:46822
              - col:46823
              - col:46824
              - col:46828
              - col:46830
              - col:46831
              - col:46832
              - col:46834
              - col:46838
              - col:46839
              - col:46844
              - col:15673
              - col:118482
            sourceReferenceIds:
              - ref:2078
              - ref:2528
              - ref:1618
              - ref:1333
              - ref:1112
              - ref:2953
              - ref:3021
              - ref:11717
              - ref:1656
              - ref:3714
              - ref:1375
              - ref:2929
              - ref:1616
              - ref:1358
              - ref:6196
              - ref:53736
              - ref:58065
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

# Haplomylus speirianus
