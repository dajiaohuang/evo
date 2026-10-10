---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ursus etruscus
    rank: species
    sourceDatasetId: null
    name:
      zh: Ursus etruscus
      en: Ursus etruscus
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
            title: PBDB accepted record — Ursus etruscus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=366707&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:366707; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:366707
            selectedOccurrenceIds:
              - occ:340889
              - occ:356217
              - occ:365134
              - occ:365924
              - occ:367728
              - occ:368995
              - occ:369645
              - occ:374342
              - occ:382558
              - occ:387458
              - occ:387486
              - occ:412066
              - occ:417580
              - occ:417604
              - occ:418308
              - occ:421600
              - occ:421607
              - occ:421637
              - occ:421675
              - occ:421698
              - occ:421709
              - occ:439048
              - occ:439174
              - occ:448615
              - occ:474735
              - occ:475113
              - occ:475176
              - occ:478752
              - occ:479849
              - occ:489317
              - occ:489369
              - occ:492285
              - occ:497776
              - occ:498811
              - occ:699341
              - occ:1384763
              - occ:1394196
              - occ:1413751
              - occ:1413765
              - occ:1708181
            selectedCollectionIds:
              - col:32145
              - col:33973
              - col:34594
              - col:34651
              - col:34784
              - col:34898
              - col:34943
              - col:35374
              - col:36373
              - col:37024
              - col:37026
              - col:39846
              - col:40500
              - col:40502
              - col:36112
              - col:40990
              - col:40993
              - col:40997
              - col:41002
              - col:41006
              - col:41007
              - col:42241
              - col:42867
              - col:44146
              - col:47100
              - col:47131
              - col:47150
              - col:47624
              - col:47829
              - col:49240
              - col:49254
              - col:32105
              - col:50274
              - col:50342
              - col:56733
              - col:189976
              - col:192004
              - col:185859
              - col:195290
              - col:242160
            sourceReferenceIds:
              - ref:8655
              - ref:9135
              - ref:9343
              - ref:63873
              - ref:9534
              - ref:9754
              - ref:9913
              - ref:11025
              - ref:10917
              - ref:13795
              - ref:11051
              - ref:12548
              - ref:11380
              - ref:11585
              - ref:12578
              - ref:12802
              - ref:13150
              - ref:13155
              - ref:13340
              - ref:8651
              - ref:13519
              - ref:25340
              - ref:63872
              - ref:64861
              - ref:66506
              - ref:92927
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

# Ursus etruscus
