---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ignacius frugivorus
    rank: species
    sourceDatasetId: null
    name:
      zh: Ignacius frugivorus
      en: Ignacius frugivorus
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
            title: PBDB accepted record — Ignacius frugivorus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47353&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47353; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47353
            selectedOccurrenceIds:
              - occ:165551
              - occ:165570
              - occ:165600
              - occ:165630
              - occ:165742
              - occ:165800
              - occ:165807
              - occ:165825
              - occ:165853
              - occ:165887
              - occ:165915
              - occ:165973
              - occ:166053
              - occ:166165
              - occ:166202
              - occ:166353
              - occ:166485
              - occ:166519
              - occ:166588
              - occ:166681
              - occ:623952
              - occ:1127584
              - occ:1303049
              - occ:1376993
              - occ:1384118
              - occ:1386111
              - occ:1386391
              - occ:2047227
            selectedCollectionIds:
              - col:14931
              - col:14934
              - col:14936
              - col:14937
              - col:14944
              - col:14952
              - col:14953
              - col:14954
              - col:14956
              - col:14959
              - col:14962
              - col:14967
              - col:14978
              - col:14992
              - col:14995
              - col:15017
              - col:15034
              - col:15036
              - col:15048
              - col:15064
              - col:14928
              - col:143202
              - col:174227
              - col:15024
              - col:15018
              - col:15059
              - col:190473
              - col:14997
            sourceReferenceIds:
              - ref:1929
              - ref:1534
              - ref:1731
              - ref:3717
              - ref:1375
              - ref:3716
              - ref:2363
              - ref:1536
              - ref:6294
              - ref:1526
              - ref:2953
              - ref:2536
              - ref:2164
              - ref:19168
              - ref:46405
              - ref:56865
              - ref:63104
              - ref:93727
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

# Ignacius frugivorus
