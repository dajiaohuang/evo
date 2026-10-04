---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protohippus supremus
    rank: species
    sourceDatasetId: null
    name:
      zh: Protohippus supremus
      en: Protohippus supremus
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
            title: PBDB accepted record — Protohippus supremus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51037&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51037; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51037
            selectedOccurrenceIds:
              - occ:184210
              - occ:184358
              - occ:184460
              - occ:184660
              - occ:184981
              - occ:185254
              - occ:185453
              - occ:185668
              - occ:185740
              - occ:185935
              - occ:185964
              - occ:186069
              - occ:186787
              - occ:187777
              - occ:188279
              - occ:188289
              - occ:188390
              - occ:1304305
              - occ:1320297
              - occ:1320299
              - occ:1353147
            selectedCollectionIds:
              - col:18042
              - col:18066
              - col:18077
              - col:18095
              - col:18134
              - col:18171
              - col:18200
              - col:18217
              - col:18222
              - col:18242
              - col:18244
              - col:18260
              - col:18347
              - col:18536
              - col:18610
              - col:18611
              - col:18623
              - col:18346
              - col:18282
              - col:18087
              - col:110829
            sourceReferenceIds:
              - ref:1952
              - ref:6294
              - ref:3564
              - ref:1949
              - ref:1951
              - ref:3098
              - ref:56476
              - ref:58688
              - ref:61275
            originalIdentificationMappings:
              - occurrenceId: occ:188289
                originalIdentifiedName: Hippotigris sellardsi n. sp.
                acceptedName: Protohippus supremus
                difference: null
              - occurrenceId: occ:1304305
                originalIdentifiedName: Hippotigris clarendonensis n. sp.
                acceptedName: Protohippus supremus
                difference: null
              - occurrenceId: occ:1320297
                originalIdentifiedName: Protohippus simus
                acceptedName: Protohippus supremus
                difference: null
              - occurrenceId: occ:1320299
                originalIdentifiedName: Protohippus simus n. sp.
                acceptedName: Protohippus supremus
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

# Protohippus supremus
