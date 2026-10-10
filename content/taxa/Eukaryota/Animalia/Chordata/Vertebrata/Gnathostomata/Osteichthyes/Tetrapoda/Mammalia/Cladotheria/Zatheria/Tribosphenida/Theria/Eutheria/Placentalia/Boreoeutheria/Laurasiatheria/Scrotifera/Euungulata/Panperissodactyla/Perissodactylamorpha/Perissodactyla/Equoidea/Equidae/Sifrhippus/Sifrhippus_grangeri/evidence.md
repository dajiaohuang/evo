---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sifrhippus grangeri
    rank: species
    sourceDatasetId: null
    name:
      zh: Sifrhippus grangeri
      en: Sifrhippus grangeri
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
            title: PBDB accepted record — Sifrhippus grangeri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47315&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47315; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47315
            selectedOccurrenceIds:
              - occ:169041
              - occ:169078
              - occ:169104
              - occ:169130
              - occ:169156
              - occ:169181
              - occ:169217
              - occ:169247
              - occ:169291
              - occ:169341
              - occ:169382
              - occ:169414
              - occ:169707
              - occ:169763
              - occ:169788
              - occ:169803
              - occ:169816
              - occ:169838
              - occ:169863
              - occ:169877
              - occ:169899
              - occ:169910
              - occ:169942
              - occ:169964
              - occ:169975
              - occ:170006
              - occ:170075
              - occ:170115
              - occ:170146
              - occ:170181
              - occ:170215
              - occ:170253
              - occ:170318
              - occ:170402
              - occ:170424
              - occ:170435
              - occ:171040
              - occ:171280
              - occ:171289
              - occ:171307
              - occ:171338
              - occ:171355
              - occ:171365
              - occ:171372
              - occ:171382
              - occ:171388
              - occ:171392
              - occ:171401
              - occ:171413
              - occ:171416
              - occ:171420
              - occ:171453
              - occ:171464
              - occ:171472
              - occ:171478
              - occ:171480
              - occ:171482
              - occ:171486
              - occ:171498
              - occ:171508
              - occ:171527
              - occ:171591
              - occ:171607
              - occ:171619
              - occ:171625
              - occ:171628
              - occ:171636
              - occ:171638
              - occ:171674
              - occ:171684
              - occ:171690
              - occ:171697
              - occ:171700
              - occ:171721
              - occ:171731
              - occ:171753
              - occ:171759
              - occ:171775
              - occ:171806
              - occ:171815
              - occ:171849
              - occ:171859
              - occ:171862
              - occ:171880
              - occ:171887
              - occ:171956
              - occ:171958
              - occ:171971
              - occ:171985
              - occ:171987
              - occ:171996
              - occ:172003
              - occ:172010
              - occ:172013
              - occ:172019
              - occ:172025
              - occ:172028
              - occ:172173
              - occ:172215
              - occ:172219
              - occ:172375
              - occ:172905
              - occ:286235
              - occ:462548
              - occ:462580
              - occ:462590
              - occ:462603
              - occ:462633
              - occ:463024
              - occ:469064
              - occ:469078
              - occ:469082
              - occ:469094
              - occ:469102
              - occ:469127
              - occ:469135
              - occ:469149
              - occ:469161
              - occ:469172
              - occ:469180
              - occ:469189
              - occ:469204
              - occ:469222
              - occ:469252
              - occ:469275
              - occ:469285
              - occ:469290
              - occ:469299
              - occ:469309
              - occ:469333
              - occ:469340
              - occ:469348
              - occ:469353
              - occ:469433
              - occ:469437
              - occ:469476
              - occ:469487
              - occ:469554
              - occ:469573
              - occ:469590
              - occ:469941
              - occ:469948
              - occ:469962
              - occ:470178
              - occ:470485
              - occ:470563
              - occ:470621
              - occ:470635
              - occ:470662
              - occ:470680
              - occ:470694
              - occ:470710
              - occ:470722
              - occ:470750
              - occ:470801
              - occ:470937
              - occ:470953
              - occ:470983
              - occ:470998
              - occ:471018
              - occ:471048
              - occ:471100
              - occ:471116
              - occ:471252
              - occ:471264
              - occ:471273
              - occ:471282
              - occ:1262643
              - occ:1262644
              - occ:1262645
              - occ:1262647
              - occ:1262648
              - occ:1262650
              - occ:1262651
            selectedCollectionIds:
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
              - col:15514
              - col:15515
              - col:15532
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
              - col:15550
              - col:15551
              - col:15553
              - col:15554
              - col:15555
              - col:15556
              - col:15557
              - col:15558
              - col:15560
              - col:15566
              - col:15567
              - col:15568
              - col:15679
              - col:15725
              - col:15726
              - col:15727
              - col:15729
              - col:15730
              - col:15731
              - col:15732
              - col:15733
              - col:15734
              - col:15735
              - col:15737
              - col:15738
              - col:15739
              - col:15740
              - col:15746
              - col:15748
              - col:15749
              - col:15750
              - col:15751
              - col:15752
              - col:15753
              - col:15754
              - col:15755
              - col:15756
              - col:15759
              - col:15761
              - col:15762
              - col:15763
              - col:15764
              - col:15765
              - col:15766
              - col:15772
              - col:15774
              - col:15775
              - col:15777
              - col:15778
              - col:15779
              - col:15781
              - col:15786
              - col:15787
              - col:15788
              - col:15791
              - col:15792
              - col:15793
              - col:15794
              - col:15795
              - col:15796
              - col:15797
              - col:15808
              - col:15809
              - col:15813
              - col:15815
              - col:15816
              - col:15818
              - col:15819
              - col:15820
              - col:15821
              - col:15822
              - col:15824
              - col:15825
              - col:15845
              - col:15854
              - col:15855
              - col:15887
              - col:15944
              - col:15458
              - col:15586
              - col:15587
              - col:15588
              - col:15589
              - col:15590
              - col:15594
              - col:46636
              - col:46637
              - col:46638
              - col:46639
              - col:46640
              - col:46642
              - col:46643
              - col:46644
              - col:46645
              - col:46646
              - col:46647
              - col:46648
              - col:46650
              - col:46652
              - col:46657
              - col:46659
              - col:46660
              - col:46661
              - col:46662
              - col:46664
              - col:46668
              - col:46669
              - col:46670
              - col:46671
              - col:46680
              - col:46681
              - col:46684
              - col:46685
              - col:46690
              - col:46691
              - col:46692
              - col:46725
              - col:46726
              - col:46727
              - col:46744
              - col:46768
              - col:46774
              - col:46780
              - col:46781
              - col:46783
              - col:46785
              - col:46786
              - col:46787
              - col:46788
              - col:46790
              - col:46793
              - col:46803
              - col:46804
              - col:46806
              - col:46807
              - col:46808
              - col:46809
              - col:46812
              - col:46813
              - col:46821
              - col:46822
              - col:46823
              - col:46824
              - col:15736
              - col:15747
              - col:15773
              - col:15450
              - col:15480
              - col:15497
              - col:15489
            sourceReferenceIds:
              - ref:6294
              - ref:1660
              - ref:3021
              - ref:53105
              - ref:3801
              - ref:1657
              - ref:3714
              - ref:2235
              - ref:7530
              - ref:11717
            originalIdentificationMappings:
              - occurrenceId: occ:169041
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169078
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169104
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169130
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169156
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169181
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169217
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169247
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169291
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169341
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169382
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169414
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169707
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169763
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169788
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169803
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169816
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169838
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169863
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169877
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169899
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169910
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169942
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169964
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:169975
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170006
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170075
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170115
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170146
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170181
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170215
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170253
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170318
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170402
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170424
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:170435
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171040
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171280
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171289
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171307
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171338
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171355
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171365
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171372
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171382
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171388
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171392
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171401
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171413
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171416
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171420
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171453
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171464
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171472
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171478
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171480
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171482
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171486
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171498
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171508
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171527
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171591
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171607
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171619
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171625
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171628
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171636
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171638
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171674
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171684
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171690
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171697
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171700
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171721
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171731
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171753
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171759
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171775
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171806
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171815
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171849
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171859
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171862
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171880
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171887
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171956
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171958
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171971
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171985
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171987
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:171996
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172003
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172010
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172013
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172019
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172025
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172028
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172173
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172215
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172219
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172375
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:172905
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:286235
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:462548
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:462580
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:462590
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:462603
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:462633
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:463024
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469064
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469078
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469082
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469094
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469102
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469127
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469135
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469149
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469161
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469172
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469180
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469189
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469204
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469222
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469252
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469275
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469285
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469290
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469299
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469309
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469333
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469340
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469348
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469353
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469433
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469437
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469476
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469487
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469554
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469573
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469590
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469941
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469948
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:469962
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470178
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470485
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470563
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470621
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470635
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470662
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470680
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470694
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470710
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470722
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470750
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470801
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470937
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470953
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470983
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:470998
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:471018
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:471048
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:471100
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:471116
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:471252
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:471264
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:471273
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:471282
                originalIdentifiedName: Hyracotherium grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:1262643
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:1262644
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:1262645
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:1262647
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:1262648
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:1262650
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
                difference: recombined as
              - occurrenceId: occ:1262651
                originalIdentifiedName: Arenahippus grangeri
                acceptedName: Sifrhippus grangeri
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

# Sifrhippus grangeri
