---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Notharctus tenebrosus
    rank: species
    sourceDatasetId: null
    name:
      zh: Notharctus tenebrosus
      en: Notharctus tenebrosus
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
            title: PBDB accepted record — Notharctus tenebrosus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49200&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49200; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49200
            selectedOccurrenceIds:
              - occ:173717
              - occ:173900
              - occ:173901
              - occ:173953
              - occ:173954
              - occ:174049
              - occ:174085
              - occ:174221
              - occ:174222
              - occ:174603
              - occ:174604
              - occ:175901
              - occ:219902
              - occ:1389212
              - occ:1599695
            selectedCollectionIds:
              - col:16136
              - col:16201
              - col:16205
              - col:16210
              - col:16218
              - col:16228
              - col:16284
              - col:16587
              - col:22631
              - col:226067
            sourceReferenceIds:
              - ref:1623
              - ref:2917
              - ref:1698
              - ref:1638
              - ref:1441
              - ref:3605
              - ref:5779
              - ref:53108
              - ref:81902
            originalIdentificationMappings:
              - occurrenceId: occ:173717
                originalIdentifiedName: Notharctus tenebrosus n. sp.
                acceptedName: Notharctus tenebrosus
                difference: null
              - occurrenceId: occ:173901
                originalIdentifiedName: Notharctus pugnax
                acceptedName: Notharctus tenebrosus
                difference: null
              - occurrenceId: occ:173954
                originalIdentifiedName: Notharctus pugnax
                acceptedName: Notharctus tenebrosus
                difference: null
              - occurrenceId: occ:174222
                originalIdentifiedName: Notharctus pugnax
                acceptedName: Notharctus tenebrosus
                difference: null
              - occurrenceId: occ:174604
                originalIdentifiedName: Notharctus pugnax n. sp.
                acceptedName: Notharctus tenebrosus
                difference: null
              - occurrenceId: occ:1389212
                originalIdentifiedName: Tomitherium rostratum n. gen. n. sp.
                acceptedName: Notharctus tenebrosus
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

# Notharctus tenebrosus
