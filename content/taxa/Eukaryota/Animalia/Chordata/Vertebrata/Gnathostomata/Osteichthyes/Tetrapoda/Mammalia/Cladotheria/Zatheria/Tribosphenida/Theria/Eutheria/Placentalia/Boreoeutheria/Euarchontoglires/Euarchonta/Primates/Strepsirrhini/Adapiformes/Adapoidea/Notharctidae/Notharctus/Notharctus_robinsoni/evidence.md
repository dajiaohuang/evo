---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Notharctus robinsoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Notharctus robinsoni
      en: Notharctus robinsoni
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
            title: PBDB accepted record — Notharctus robinsoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49198&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49198; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49198
            selectedOccurrenceIds:
              - occ:173447
              - occ:173455
              - occ:173505
              - occ:173525
              - occ:173554
              - occ:173572
              - occ:174347
              - occ:174538
              - occ:174547
              - occ:174554
              - occ:174674
              - occ:174678
              - occ:174690
              - occ:174717
              - occ:174725
              - occ:174743
              - occ:174753
              - occ:174757
              - occ:174769
              - occ:174782
              - occ:174803
              - occ:174856
              - occ:174881
              - occ:174887
              - occ:174895
              - occ:174903
              - occ:174906
              - occ:174925
              - occ:174940
              - occ:174953
              - occ:286332
              - occ:286374
            selectedCollectionIds:
              - col:16090
              - col:16091
              - col:16098
              - col:16100
              - col:16105
              - col:16107
              - col:16240
              - col:16271
              - col:16273
              - col:16274
              - col:16301
              - col:16302
              - col:16305
              - col:16307
              - col:16309
              - col:16310
              - col:16312
              - col:16313
              - col:16314
              - col:16315
              - col:16319
              - col:16341
              - col:16348
              - col:16351
              - col:16355
              - col:16356
              - col:16357
              - col:16366
              - col:16372
              - col:16384
              - col:15837
              - col:27269
            sourceReferenceIds:
              - ref:1737
              - ref:1638
              - ref:1248
              - ref:7542
            originalIdentificationMappings:
              - occurrenceId: occ:174940
                originalIdentifiedName: Notharctus robinsoni n. sp.
                acceptedName: Notharctus robinsoni
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

# Notharctus robinsoni
