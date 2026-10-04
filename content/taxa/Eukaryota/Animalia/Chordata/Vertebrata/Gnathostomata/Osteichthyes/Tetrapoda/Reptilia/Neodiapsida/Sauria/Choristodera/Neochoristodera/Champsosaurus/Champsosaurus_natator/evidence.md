---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Champsosaurus natator
    rank: species
    sourceDatasetId: null
    name:
      zh: Champsosaurus natator
      en: Champsosaurus natator
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherReptiliaTaxonomy20261002
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherReptiliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Champsosaurus natator
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=67587&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherReptiliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:67587; original response record indices retained in data/sources/other-reptilia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:67587
            selectedOccurrenceIds:
              - occ:362039
              - occ:362143
              - occ:362175
              - occ:362350
              - occ:362390
              - occ:362553
              - occ:362581
              - occ:362611
              - occ:362632
              - occ:362679
              - occ:362735
              - occ:362790
              - occ:363226
              - occ:363655
              - occ:459315
              - occ:459339
              - occ:459500
              - occ:459524
              - occ:459552
              - occ:459579
              - occ:479406
              - occ:479454
              - occ:479481
              - occ:479506
              - occ:479585
              - occ:479620
              - occ:479650
              - occ:479675
              - occ:479709
              - occ:479738
              - occ:479772
              - occ:479798
              - occ:480294
              - occ:480332
              - occ:480371
              - occ:487974
              - occ:488062
              - occ:488284
              - occ:488391
              - occ:488575
              - occ:488620
              - occ:819357
              - occ:983904
              - occ:983912
              - occ:983913
              - occ:983914
              - occ:983915
              - occ:1382897
            selectedCollectionIds:
              - col:34302
              - col:34303
              - col:34305
              - col:34307
              - col:34309
              - col:34310
              - col:34311
              - col:34312
              - col:34313
              - col:34315
              - col:34319
              - col:34320
              - col:34321
              - col:34322
              - col:45238
              - col:45240
              - col:45260
              - col:45261
              - col:45262
              - col:45264
              - col:47784
              - col:47793
              - col:47794
              - col:47795
              - col:47807
              - col:47809
              - col:47811
              - col:47812
              - col:47814
              - col:47816
              - col:22698
              - col:22695
              - col:22697
              - col:22696
              - col:14458
              - col:14533
              - col:14549
              - col:14582
              - col:14654
              - col:14639
              - col:14615
              - col:14552
              - col:117923
              - col:117927
              - col:117928
              - col:117929
              - col:117930
              - col:189515
            sourceReferenceIds:
              - ref:9017
              - ref:5929
              - ref:13103
              - ref:37894
              - ref:37901
              - ref:15355
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

# Champsosaurus natator
