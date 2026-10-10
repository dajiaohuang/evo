---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Viverravus acutus
    rank: species
    sourceDatasetId: null
    name:
      zh: Viverravus acutus
      en: Viverravus acutus
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
            title: PBDB accepted record — Viverravus acutus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52659&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52659; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52659
            selectedOccurrenceIds:
              - occ:167035
              - occ:167275
              - occ:167676
              - occ:168651
              - occ:168849
              - occ:168865
              - occ:168899
              - occ:168954
              - occ:169081
              - occ:169159
              - occ:169416
              - occ:169733
              - occ:170279
              - occ:170458
              - occ:170557
              - occ:170590
              - occ:170649
              - occ:171050
              - occ:171055
              - occ:171058
              - occ:171060
              - occ:171064
              - occ:171067
              - occ:171072
              - occ:171075
              - occ:171077
              - occ:171079
              - occ:171083
              - occ:171088
              - occ:171092
              - occ:171094
              - occ:171102
              - occ:171109
              - occ:171111
              - occ:171114
              - occ:171118
              - occ:171124
              - occ:171126
              - occ:171274
              - occ:171287
              - occ:171302
              - occ:171343
              - occ:171370
              - occ:171409
              - occ:171419
              - occ:171423
              - occ:171436
              - occ:171443
              - occ:171460
              - occ:171462
              - occ:171493
              - occ:171506
              - occ:171532
              - occ:171550
              - occ:171574
              - occ:171616
              - occ:171635
              - occ:171649
              - occ:171656
              - occ:171680
              - occ:171695
              - occ:171714
              - occ:171741
              - occ:171746
              - occ:171757
              - occ:171770
              - occ:171797
              - occ:171812
              - occ:171836
              - occ:171877
              - occ:171908
              - occ:171916
              - occ:171929
              - occ:171940
              - occ:171948
              - occ:171954
              - occ:171959
              - occ:171964
              - occ:171970
              - occ:172012
              - occ:172032
              - occ:172037
              - occ:172163
              - occ:172255
              - occ:172365
              - occ:462611
              - occ:462673
              - occ:469120
              - occ:469153
              - occ:469326
              - occ:469402
              - occ:469435
              - occ:469520
              - occ:469696
              - occ:469891
              - occ:470108
              - occ:470251
              - occ:470281
              - occ:470702
              - occ:470795
              - occ:471029
              - occ:471063
              - occ:471361
              - occ:471442
              - occ:471539
              - occ:1193906
              - occ:1193907
              - occ:1193908
              - occ:1193909
              - occ:1193910
            selectedCollectionIds:
              - col:15097
              - col:15132
              - col:15199
              - col:15450
              - col:15477
              - col:15479
              - col:15480
              - col:15485
              - col:15493
              - col:15504
              - col:15515
              - col:15534
              - col:15559
              - col:15573
              - col:15577
              - col:15578
              - col:15586
              - col:15682
              - col:15683
              - col:15684
              - col:15685
              - col:15687
              - col:15688
              - col:15690
              - col:15691
              - col:15692
              - col:15693
              - col:15694
              - col:15695
              - col:15696
              - col:15697
              - col:15700
              - col:15701
              - col:15702
              - col:15703
              - col:15705
              - col:15707
              - col:15708
              - col:15725
              - col:15726
              - col:15727
              - col:15729
              - col:15732
              - col:15738
              - col:15740
              - col:15741
              - col:15743
              - col:15744
              - col:15747
              - col:15748
              - col:15754
              - col:15755
              - col:15756
              - col:15758
              - col:15759
              - col:15762
              - col:15765
              - col:15768
              - col:15769
              - col:15773
              - col:15776
              - col:15779
              - col:15784
              - col:15785
              - col:15787
              - col:15788
              - col:15790
              - col:15792
              - col:15793
              - col:15796
              - col:15802
              - col:15803
              - col:15805
              - col:15806
              - col:15807
              - col:15808
              - col:15810
              - col:15811
              - col:15813
              - col:15821
              - col:15826
              - col:15828
              - col:15845
              - col:15865
              - col:15887
              - col:15589
              - col:15592
              - col:46641
              - col:46644
              - col:46667
              - col:46675
              - col:46680
              - col:46687
              - col:46699
              - col:46718
              - col:46736
              - col:46749
              - col:46753
              - col:46786
              - col:46792
              - col:46808
              - col:46809
              - col:46831
              - col:46838
              - col:46847
              - col:154254
              - col:154259
              - col:154262
              - col:154263
              - col:154276
            sourceReferenceIds:
              - ref:2787
              - ref:2953
              - ref:2528
              - ref:1618
              - ref:6214
              - ref:3714
              - ref:11717
              - ref:49988
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

# Viverravus acutus
