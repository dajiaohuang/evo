---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Allohippus stenonis
    rank: species
    sourceDatasetId: null
    name:
      zh: Allohippus stenonis
      en: Allohippus stenonis
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
            title: PBDB accepted record — Allohippus stenonis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=364378&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:364378; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:364378
            selectedOccurrenceIds:
              - occ:340892
              - occ:363038
              - occ:363047
              - occ:363558
              - occ:363582
              - occ:363668
              - occ:365121
              - occ:365137
              - occ:365309
              - occ:365339
              - occ:365925
              - occ:367511
              - occ:367518
              - occ:367537
              - occ:367693
              - occ:367718
              - occ:367987
              - occ:369041
              - occ:369255
              - occ:369378
              - occ:369387
              - occ:370115
              - occ:370536
              - occ:371527
              - occ:371841
              - occ:374294
              - occ:374361
              - occ:374392
              - occ:376052
              - occ:387086
              - occ:408507
              - occ:408561
              - occ:412077
              - occ:412084
              - occ:412267
              - occ:412413
              - occ:416637
              - occ:417584
              - occ:418298
              - occ:418317
              - occ:421590
              - occ:429253
              - occ:429279
              - occ:435354
              - occ:443127
              - occ:443156
              - occ:443185
              - occ:443411
              - occ:450364
              - occ:475103
              - occ:475120
              - occ:475125
              - occ:475197
              - occ:475270
              - occ:478743
              - occ:479829
              - occ:479844
              - occ:479856
              - occ:487564
              - occ:488510
              - occ:489224
              - occ:489307
              - occ:489364
              - occ:489965
              - occ:498806
              - occ:498821
              - occ:643951
              - occ:699348
              - occ:713694
              - occ:724099
              - occ:724100
              - occ:724101
              - occ:872758
              - occ:1434268
              - occ:1434278
              - occ:1465660
              - occ:1488703
              - occ:1554245
            selectedCollectionIds:
              - col:32145
              - col:34394
              - col:34396
              - col:34441
              - col:34444
              - col:34459
              - col:34593
              - col:34594
              - col:34614
              - col:34617
              - col:34651
              - col:34762
              - col:34763
              - col:34764
              - col:34782
              - col:34783
              - col:34812
              - col:34911
              - col:34929
              - col:34941
              - col:34942
              - col:35038
              - col:35078
              - col:35182
              - col:35229
              - col:35373
              - col:35374
              - col:35381
              - col:35475
              - col:36975
              - col:39321
              - col:39322
              - col:39847
              - col:39850
              - col:39866
              - col:39882
              - col:40397
              - col:40500
              - col:40564
              - col:36112
              - col:40986
              - col:41931
              - col:41933
              - col:42241
              - col:43645
              - col:43649
              - col:43650
              - col:43664
              - col:44231
              - col:47131
              - col:47132
              - col:47133
              - col:47150
              - col:47188
              - col:47624
              - col:47828
              - col:47829
              - col:47830
              - col:48989
              - col:49087
              - col:49212
              - col:49240
              - col:49254
              - col:49414
              - col:50466
              - col:50342
              - col:69541
              - col:56733
              - col:76530
              - col:77767
              - col:77750
              - col:58421
              - col:96739
              - col:200083
              - col:200084
              - col:204662
              - col:207130
              - col:219198
            sourceReferenceIds:
              - ref:8655
              - ref:9043
              - ref:9073
              - ref:9135
              - ref:9372
              - ref:10965
              - ref:9388
              - ref:9442
              - ref:9580
              - ref:9534
              - ref:9888
              - ref:10617
              - ref:7584
              - ref:10818
              - ref:10898
              - ref:10917
              - ref:10949
              - ref:10948
              - ref:11202
              - ref:12548
              - ref:11465
              - ref:12578
              - ref:12802
              - ref:13054
              - ref:13140
              - ref:13150
              - ref:13155
              - ref:13151
              - ref:13532
              - ref:13519
              - ref:23350
              - ref:25340
              - ref:24838
              - ref:26261
              - ref:32997
              - ref:68076
              - ref:70230
              - ref:61193
              - ref:76159
            originalIdentificationMappings:
              - occurrenceId: occ:340892
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:363038
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:363047
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:363558
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:363582
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:363668
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:365121
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:365137
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:365309
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:365339
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:365925
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:367511
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:367518
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:367537
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:367693
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:367718
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:367987
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:369041
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:369255
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:369378
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:369387
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:370115
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:370536
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:371527
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:371841
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:374294
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:374361
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:374392
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:376052
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:387086
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:408507
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:408561
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:412077
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:412084
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:412267
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:412413
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:416637
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:417584
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:418298
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:418317
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:421590
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:429253
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:429279
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:435354
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:443127
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:443156
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:443185
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:443411
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:450364
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:475103
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:475120
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:475125
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:475197
                originalIdentifiedName: Equus (Hippotigris) stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:475270
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:478743
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:479829
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:479844
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:479856
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:487564
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:488510
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:489224
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:489307
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:489364
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:489965
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:498806
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:498821
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:643951
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:699348
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:713694
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:724099
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:724100
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:724101
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:872758
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:1434268
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:1434278
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:1465660
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:1488703
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
                difference: recombined as
              - occurrenceId: occ:1554245
                originalIdentifiedName: Equus stenonis
                acceptedName: Allohippus stenonis
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

# Allohippus stenonis
