---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bunophorus macropternus
    rank: species
    sourceDatasetId: null
    name:
      zh: Bunophorus macropternus
      en: Bunophorus macropternus
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
            title: PBDB accepted record — Bunophorus macropternus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50311&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50311; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50311
            selectedOccurrenceIds:
              - occ:170227
              - occ:170266
              - occ:170325
              - occ:170349
              - occ:170371
              - occ:170410
              - occ:170426
              - occ:172998
              - occ:638358
              - occ:1303177
              - occ:1303178
              - occ:1303179
              - occ:1303180
              - occ:1303181
              - occ:1303182
              - occ:1303183
              - occ:1303184
              - occ:1303185
            selectedCollectionIds:
              - col:15557
              - col:15558
              - col:15560
              - col:15563
              - col:15564
              - col:15566
              - col:15567
              - col:15964
              - col:15454
              - col:15973
              - col:15927
              - col:15965
              - col:15975
              - col:15978
              - col:15981
              - col:15966
              - col:15941
              - col:15988
            sourceReferenceIds:
              - ref:3021
              - ref:1760
              - ref:19815
              - ref:3335
            originalIdentificationMappings:
              - occurrenceId: occ:170227
                originalIdentifiedName: '"Bunophorus" macropternus'
                acceptedName: Bunophorus macropternus
                difference: null
              - occurrenceId: occ:170266
                originalIdentifiedName: '"Bunophorus" macropternus'
                acceptedName: Bunophorus macropternus
                difference: null
              - occurrenceId: occ:170325
                originalIdentifiedName: '"Bunophorus" macropternus'
                acceptedName: Bunophorus macropternus
                difference: null
              - occurrenceId: occ:170349
                originalIdentifiedName: '"Bunophorus" macropternus'
                acceptedName: Bunophorus macropternus
                difference: null
              - occurrenceId: occ:170371
                originalIdentifiedName: '"Bunophorus" macropternus'
                acceptedName: Bunophorus macropternus
                difference: null
              - occurrenceId: occ:170410
                originalIdentifiedName: '"Bunophorus" macropternus'
                acceptedName: Bunophorus macropternus
                difference: null
              - occurrenceId: occ:170426
                originalIdentifiedName: '"Bunophorus" macropternus'
                acceptedName: Bunophorus macropternus
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

# Bunophorus macropternus
