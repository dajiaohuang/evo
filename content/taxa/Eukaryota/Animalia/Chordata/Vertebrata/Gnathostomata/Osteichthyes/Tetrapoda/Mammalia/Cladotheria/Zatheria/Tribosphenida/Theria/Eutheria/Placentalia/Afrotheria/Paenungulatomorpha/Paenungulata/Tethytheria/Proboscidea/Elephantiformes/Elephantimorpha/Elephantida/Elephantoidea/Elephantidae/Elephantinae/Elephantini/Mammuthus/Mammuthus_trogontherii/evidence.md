---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mammuthus trogontherii
    rank: species
    sourceDatasetId: null
    name:
      zh: Mammuthus trogontherii
      en: Mammuthus trogontherii
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
            title: PBDB accepted record — Mammuthus trogontherii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=159796&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:159796; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:159796
            selectedOccurrenceIds:
              - occ:151450
              - occ:220232
              - occ:358622
              - occ:363618
              - occ:369701
              - occ:376045
              - occ:381182
              - occ:381222
              - occ:381408
              - occ:381482
              - occ:415446
              - occ:415450
              - occ:417437
              - occ:417521
              - occ:417522
              - occ:418961
              - occ:443341
              - occ:485011
              - occ:493141
              - occ:493160
              - occ:493172
              - occ:493215
              - occ:494720
              - occ:495906
              - occ:497029
              - occ:497053
              - occ:497084
              - occ:497476
              - occ:497587
              - occ:838603
              - occ:1348302
              - occ:1384736
              - occ:1465330
              - occ:1466150
              - occ:1466152
              - occ:1500817
              - occ:1582835
              - occ:1630527
            selectedCollectionIds:
              - col:13490
              - col:22728
              - col:34105
              - col:34449
              - col:34985
              - col:35474
              - col:36205
              - col:36207
              - col:36214
              - col:36219
              - col:40258
              - col:40259
              - col:40485
              - col:40492
              - col:40493
              - col:40695
              - col:43657
              - col:48555
              - col:49813
              - col:49814
              - col:49815
              - col:49816
              - col:50000
              - col:50056
              - col:50196
              - col:34400
              - col:50198
              - col:50247
              - col:50257
              - col:76844
              - col:182678
              - col:189963
              - col:204561
              - col:204749
              - col:204751
              - col:208974
              - col:223635
              - col:197069
            sourceReferenceIds:
              - ref:10567
              - ref:5674
              - ref:8978
              - ref:9043
              - ref:9390
              - ref:7584
              - ref:9643
              - ref:10873
              - ref:10958
              - ref:11465
              - ref:12957
              - ref:13378
              - ref:13380
              - ref:13430
              - ref:31443
              - ref:70269
              - ref:63866
              - ref:70156
              - ref:70270
              - ref:72131
              - ref:78653
              - ref:85447
            originalIdentificationMappings:
              - occurrenceId: occ:151450
                originalIdentifiedName: Elephas trogontherii
                acceptedName: Mammuthus trogontherii
                difference: recombined as
              - occurrenceId: occ:838603
                originalIdentifiedName: Mammuthus armeniacus taiwanicus
                acceptedName: Mammuthus trogontherii
                difference: subspecies not entered
              - occurrenceId: occ:1500817
                originalIdentifiedName: Mammuthus armeniacus
                acceptedName: Mammuthus trogontherii
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

# Mammuthus trogontherii
