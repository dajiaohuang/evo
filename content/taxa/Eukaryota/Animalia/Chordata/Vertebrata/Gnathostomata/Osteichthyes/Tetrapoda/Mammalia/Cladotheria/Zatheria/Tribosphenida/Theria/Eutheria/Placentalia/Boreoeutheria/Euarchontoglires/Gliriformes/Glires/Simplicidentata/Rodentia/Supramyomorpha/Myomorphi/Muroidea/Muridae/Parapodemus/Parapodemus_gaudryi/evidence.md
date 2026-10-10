---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Parapodemus gaudryi
    rank: species
    sourceDatasetId: null
    name:
      zh: Parapodemus gaudryi
      en: Parapodemus gaudryi
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
            title: PBDB accepted record — Parapodemus gaudryi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=108920&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:108920; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:108920
            selectedOccurrenceIds:
              - occ:341585
              - occ:373006
              - occ:373017
              - occ:373021
              - occ:373037
              - occ:373048
              - occ:373062
              - occ:373069
              - occ:373078
              - occ:373092
              - occ:373096
              - occ:373101
              - occ:373106
              - occ:373111
              - occ:373118
              - occ:373311
              - occ:373321
              - occ:419612
              - occ:429243
              - occ:1443002
              - occ:1470360
              - occ:1470505
            selectedCollectionIds:
              - col:32190
              - col:35315
              - col:35312
              - col:35313
              - col:35316
              - col:35317
              - col:35318
              - col:35319
              - col:35320
              - col:35324
              - col:35325
              - col:35326
              - col:35327
              - col:35328
              - col:35329
              - col:35339
              - col:35340
              - col:40758
              - col:41930
              - col:201499
              - col:195562
              - col:182750
            sourceReferenceIds:
              - ref:8408
              - ref:9527
              - ref:10999
              - ref:11202
              - ref:68425
              - ref:26555
              - ref:70463
            originalIdentificationMappings:
              - occurrenceId: occ:419612
                originalIdentifiedName: Apodemus primaevus
                acceptedName: Parapodemus gaudryi
                difference: null
              - occurrenceId: occ:429243
                originalIdentifiedName: Apodemus primaevus
                acceptedName: Parapodemus gaudryi
                difference: null
              - occurrenceId: occ:1443002
                originalIdentifiedName: Apodemus primaevus
                acceptedName: Parapodemus gaudryi
                difference: null
              - occurrenceId: occ:1470505
                originalIdentifiedName: Parapodemus schaubi
                acceptedName: Parapodemus gaudryi
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

# Parapodemus gaudryi
