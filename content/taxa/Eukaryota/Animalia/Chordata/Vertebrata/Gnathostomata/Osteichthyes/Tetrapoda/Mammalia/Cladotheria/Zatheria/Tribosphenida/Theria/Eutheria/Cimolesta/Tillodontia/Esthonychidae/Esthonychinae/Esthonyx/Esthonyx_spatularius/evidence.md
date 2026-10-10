---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Esthonyx spatularius
    rank: species
    sourceDatasetId: null
    name:
      zh: Esthonyx spatularius
      en: Esthonyx spatularius
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
            title: PBDB accepted record — Esthonyx spatularius
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46341&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46341; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46341
            selectedOccurrenceIds:
              - occ:168649
              - occ:168892
              - occ:168943
              - occ:169020
              - occ:169077
              - occ:169101
              - occ:169155
              - occ:169178
              - occ:169211
              - occ:169244
              - occ:169283
              - occ:169314
              - occ:169335
              - occ:169361
              - occ:169380
              - occ:169413
              - occ:169441
              - occ:170871
              - occ:171033
              - occ:171268
              - occ:171337
              - occ:171526
              - occ:171563
              - occ:171828
              - occ:172159
              - occ:172381
              - occ:172770
              - occ:172896
              - occ:173168
              - occ:173294
              - occ:458719
              - occ:462545
              - occ:462578
              - occ:462587
              - occ:462600
              - occ:462631
              - occ:463021
              - occ:469061
              - occ:469077
              - occ:469091
              - occ:469178
              - occ:469272
              - occ:469330
              - occ:469347
              - occ:469430
              - occ:469484
              - occ:469551
              - occ:469570
              - occ:469940
              - occ:470482
              - occ:470560
              - occ:470618
              - occ:470660
              - occ:470690
              - occ:470719
              - occ:470747
              - occ:470934
              - occ:470950
              - occ:470994
              - occ:471014
              - occ:471043
              - occ:471113
              - occ:471250
              - occ:471261
              - occ:471270
              - occ:1193840
            selectedCollectionIds:
              - col:15450
              - col:15480
              - col:15485
              - col:15491
              - col:15493
              - col:15495
              - col:15504
              - col:15505
              - col:15507
              - col:15509
              - col:15510
              - col:15511
              - col:15512
              - col:15513
              - col:15514
              - col:15515
              - col:15516
              - col:15660
              - col:15679
              - col:15725
              - col:15729
              - col:15756
              - col:15759
              - col:15793
              - col:15845
              - col:15889
              - col:15932
              - col:15943
              - col:16020
              - col:16055
              - col:15682
              - col:15586
              - col:15587
              - col:15588
              - col:15589
              - col:15590
              - col:15594
              - col:46636
              - col:46637
              - col:46639
              - col:46647
              - col:46659
              - col:46668
              - col:46670
              - col:46680
              - col:46685
              - col:46690
              - col:46691
              - col:46725
              - col:46768
              - col:46774
              - col:46780
              - col:46783
              - col:46786
              - col:46788
              - col:46790
              - col:46803
              - col:46804
              - col:46807
              - col:46808
              - col:46809
              - col:46813
              - col:46821
              - col:46822
              - col:46823
              - col:154260
            sourceReferenceIds:
              - ref:1730
              - ref:6294
              - ref:2953
              - ref:3021
              - ref:3801
              - ref:1657
              - ref:3714
              - ref:1668
              - ref:2536
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

# Esthonyx spatularius
