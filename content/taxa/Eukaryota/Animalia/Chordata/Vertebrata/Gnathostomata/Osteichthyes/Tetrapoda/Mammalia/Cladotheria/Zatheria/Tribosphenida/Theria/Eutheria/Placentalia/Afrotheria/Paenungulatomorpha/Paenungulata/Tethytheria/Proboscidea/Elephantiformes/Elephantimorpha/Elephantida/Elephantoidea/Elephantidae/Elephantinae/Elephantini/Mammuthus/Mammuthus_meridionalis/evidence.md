---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mammuthus meridionalis
    rank: species
    sourceDatasetId: null
    name:
      zh: Mammuthus meridionalis
      en: Mammuthus meridionalis
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
            title: PBDB accepted record — Mammuthus meridionalis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46026&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46026; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46026
            selectedOccurrenceIds:
              - occ:363564
              - occ:363666
              - occ:367536
              - occ:367679
              - occ:367970
              - occ:367985
              - occ:369003
              - occ:369040
              - occ:369635
              - occ:374358
              - occ:374386
              - occ:374391
              - occ:374932
              - occ:379635
              - occ:381210
              - occ:387481
              - occ:408503
              - occ:410304
              - occ:412047
              - occ:412049
              - occ:412059
              - occ:412076
              - occ:412083
              - occ:412251
              - occ:412256
              - occ:412260
              - occ:412264
              - occ:412279
              - occ:412412
              - occ:414519
              - occ:414524
              - occ:414535
              - occ:416635
              - occ:417597
              - occ:418315
              - occ:421584
              - occ:421593
              - occ:421597
              - occ:421608
              - occ:421652
              - occ:421676
              - occ:421687
              - occ:421703
              - occ:421712
              - occ:429194
              - occ:429292
              - occ:436664
              - occ:439049
              - occ:439168
              - occ:443183
              - occ:443407
              - occ:448621
              - occ:450363
              - occ:475119
              - occ:475200
              - occ:475268
              - occ:478742
              - occ:479836
              - occ:487568
              - occ:488489
              - occ:488492
              - occ:489179
              - occ:489222
              - occ:489306
              - occ:489964
              - occ:492279
              - occ:494602
              - occ:494719
              - occ:497083
              - occ:498809
              - occ:614665
              - occ:643950
              - occ:699347
              - occ:713147
              - occ:713148
              - occ:713670
              - occ:713677
              - occ:713692
              - occ:713702
              - occ:713706
              - occ:713712
              - occ:724177
              - occ:725898
              - occ:725900
              - occ:872708
              - occ:872729
              - occ:872744
              - occ:872751
              - occ:872754
              - occ:872765
              - occ:872767
              - occ:872769
              - occ:872867
              - occ:872880
              - occ:945355
              - occ:1381612
              - occ:1381621
              - occ:1383208
              - occ:1383229
              - occ:1434270
              - occ:1434280
              - occ:1465664
              - occ:1466138
              - occ:1466140
              - occ:1466151
              - occ:1466155
              - occ:1466557
              - occ:1466563
              - occ:1488704
              - occ:1584420
              - occ:1708175
            selectedCollectionIds:
              - col:34443
              - col:34459
              - col:34764
              - col:34781
              - col:34809
              - col:34812
              - col:34898
              - col:34911
              - col:34943
              - col:35374
              - col:35380
              - col:35381
              - col:34583
              - col:35906
              - col:36206
              - col:37024
              - col:39321
              - col:36007
              - col:39844
              - col:39845
              - col:39846
              - col:39847
              - col:39850
              - col:39858
              - col:39861
              - col:39865
              - col:39866
              - col:39869
              - col:39882
              - col:40108
              - col:40109
              - col:40112
              - col:40397
              - col:40502
              - col:36112
              - col:40986
              - col:40987
              - col:40989
              - col:40993
              - col:40999
              - col:41002
              - col:41004
              - col:41006
              - col:41007
              - col:41920
              - col:41932
              - col:42673
              - col:42241
              - col:42867
              - col:43650
              - col:43664
              - col:44146
              - col:44231
              - col:47132
              - col:47150
              - col:47188
              - col:47624
              - col:47828
              - col:48989
              - col:49086
              - col:49087
              - col:49197
              - col:49212
              - col:49240
              - col:49414
              - col:32105
              - col:49989
              - col:50000
              - col:50198
              - col:50342
              - col:65174
              - col:69541
              - col:56733
              - col:76509
              - col:76510
              - col:76527
              - col:76529
              - col:76530
              - col:76531
              - col:76533
              - col:76534
              - col:77773
              - col:48093
              - col:78016
              - col:96723
              - col:96725
              - col:96729
              - col:96737
              - col:96738
              - col:96743
              - col:96744
              - col:96747
              - col:96763
              - col:96772
              - col:109704
              - col:188681
              - col:189026
              - col:189573
              - col:189574
              - col:200083
              - col:200084
              - col:204662
              - col:204740
              - col:204742
              - col:204750
              - col:204754
              - col:204804
              - col:204808
              - col:207130
              - col:197943
              - col:242160
            sourceReferenceIds:
              - ref:7584
              - ref:9073
              - ref:9135
              - ref:9343
              - ref:9372
              - ref:9388
              - ref:9643
              - ref:9913
              - ref:10617
              - ref:10805
              - ref:11201
              - ref:10720
              - ref:10873
              - ref:13795
              - ref:10948
              - ref:11051
              - ref:11202
              - ref:11350
              - ref:11379
              - ref:11380
              - ref:11465
              - ref:9580
              - ref:12548
              - ref:12578
              - ref:13054
              - ref:7009
              - ref:13140
              - ref:13150
              - ref:13151
              - ref:13340
              - ref:13425
              - ref:13519
              - ref:15045
              - ref:23350
              - ref:25341
              - ref:24838
              - ref:26265
              - ref:26261
              - ref:32997
              - ref:36257
              - ref:63318
              - ref:63501
              - ref:63715
              - ref:68076
              - ref:70230
              - ref:70266
              - ref:70268
              - ref:70270
              - ref:70273
              - ref:70295
              - ref:70296
              - ref:61193
              - ref:78892
              - ref:92927
            originalIdentificationMappings:
              - occurrenceId: occ:412047
                originalIdentifiedName: Mammuthus (Archidiskodon) meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:418315
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:421597
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:421608
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:421652
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:421676
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:421687
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:421703
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:421712
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:429194
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:443407
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:450363
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:475119
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:475200
                originalIdentifiedName: Elephas (Archidiskodon) meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:475268
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:478742
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:479836
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:487568
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:489222
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:489306
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:489964
                originalIdentifiedName: Mammuthus (Archidiskodon) meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:492279
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:494602
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:643950
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:699347
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:713147
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:713148
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:713670
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:713677
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:713692
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:713702
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:713706
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:713712
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:725898
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:725900
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872708
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872729
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872744
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872751
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872754
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872765
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872767
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872769
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872867
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:872880
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:945355
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1381612
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1434270
                originalIdentifiedName: Mammuthus (Archidiskodon) meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1434280
                originalIdentifiedName: Mammuthus (Archidiskodon) meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1465664
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1466138
                originalIdentifiedName: Elephas (Archidiskodon) meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1466140
                originalIdentifiedName: Elephas (Archidiscodon) meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1466155
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1466557
                originalIdentifiedName: Elephas meridionalis
                acceptedName: Mammuthus meridionalis
                difference: recombined as
              - occurrenceId: occ:1466563
                originalIdentifiedName: Archidiskodon meridionalis
                acceptedName: Mammuthus meridionalis
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

# Mammuthus meridionalis
