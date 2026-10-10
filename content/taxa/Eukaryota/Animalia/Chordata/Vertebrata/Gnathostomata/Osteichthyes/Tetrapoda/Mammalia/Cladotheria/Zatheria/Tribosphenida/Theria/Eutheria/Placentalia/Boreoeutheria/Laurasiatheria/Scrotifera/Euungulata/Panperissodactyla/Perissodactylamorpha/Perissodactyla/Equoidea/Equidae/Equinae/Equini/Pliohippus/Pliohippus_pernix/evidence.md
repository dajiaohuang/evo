---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pliohippus pernix
    rank: species
    sourceDatasetId: null
    name:
      zh: Pliohippus pernix
      en: Pliohippus pernix
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
            title: PBDB accepted record — Pliohippus pernix
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50550&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50550; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50550
            selectedOccurrenceIds:
              - occ:184209
              - occ:184459
              - occ:184617
              - occ:184964
              - occ:185296
              - occ:185739
              - occ:185844
              - occ:185879
              - occ:186068
              - occ:186378
              - occ:186384
              - occ:186614
              - occ:186788
              - occ:187162
              - occ:187525
              - occ:1227254
              - occ:1281563
              - occ:1353106
              - occ:1353109
              - occ:1353142
              - occ:1353143
              - occ:1353144
              - occ:1353145
              - occ:1353146
              - occ:1379514
              - occ:1388660
              - occ:1438366
            selectedCollectionIds:
              - col:18042
              - col:18077
              - col:18092
              - col:18130
              - col:18179
              - col:18222
              - col:18233
              - col:18236
              - col:18260
              - col:18295
              - col:18297
              - col:18324
              - col:18347
              - col:18428
              - col:18483
              - col:161374
              - col:170181
              - col:18242
              - col:18466
              - col:18176
              - col:18334
              - col:18217
              - col:18204
              - col:110829
              - col:188779
              - col:18610
              - col:18640
            sourceReferenceIds:
              - ref:1952
              - ref:3564
              - ref:3510
              - ref:3082
              - ref:2218
              - ref:6294
              - ref:6207
              - ref:3174
              - ref:1706
              - ref:52569
              - ref:55527
              - ref:61275
              - ref:63362
              - ref:56476
              - ref:68632
            originalIdentificationMappings:
              - occurrenceId: occ:1388660
                originalIdentifiedName: Dinohippus subvenus n. sp.
                acceptedName: Pliohippus pernix
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

# Pliohippus pernix
