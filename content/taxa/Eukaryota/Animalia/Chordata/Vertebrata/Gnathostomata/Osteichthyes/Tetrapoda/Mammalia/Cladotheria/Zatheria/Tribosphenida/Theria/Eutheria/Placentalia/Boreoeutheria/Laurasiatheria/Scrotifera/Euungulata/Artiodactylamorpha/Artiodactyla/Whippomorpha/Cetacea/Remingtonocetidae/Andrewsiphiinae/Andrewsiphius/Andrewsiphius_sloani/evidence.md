---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Andrewsiphius sloani
    rank: species
    sourceDatasetId: null
    name:
      zh: Andrewsiphius sloani
      en: Andrewsiphius sloani
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
            title: PBDB accepted record — Andrewsiphius sloani
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63120&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:63120; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:63120
            selectedOccurrenceIds:
              - occ:300637
              - occ:440389
              - occ:462064
              - occ:462066
              - occ:462073
              - occ:462340
              - occ:462341
              - occ:462342
              - occ:829246
              - occ:829247
              - occ:829248
              - occ:829249
              - occ:829250
              - occ:829251
            selectedCollectionIds:
              - col:28938
              - col:43029
              - col:45590
              - col:45591
              - col:45592
              - col:91427
              - col:45583
              - col:88644
              - col:48074
              - col:91428
              - col:91429
            sourceReferenceIds:
              - ref:7933
              - ref:11408
              - ref:11991
              - ref:11997
              - ref:30795
            originalIdentificationMappings:
              - occurrenceId: occ:440389
                originalIdentifiedName: Protocetus sloani n. sp.
                acceptedName: Andrewsiphius sloani
                difference: recombined as
              - occurrenceId: occ:462064
                originalIdentifiedName: Protocetus sloani
                acceptedName: Andrewsiphius sloani
                difference: recombined as
              - occurrenceId: occ:462066
                originalIdentifiedName: Andrewsiphius minor n. gen. n. sp.
                acceptedName: Andrewsiphius sloani
                difference: null
              - occurrenceId: occ:462073
                originalIdentifiedName: Andrewsiphius kutchensis n. gen. n. sp.
                acceptedName: Andrewsiphius sloani
                difference: null
              - occurrenceId: occ:462340
                originalIdentifiedName: Andrewsiphius kutchensis
                acceptedName: Andrewsiphius sloani
                difference: null
              - occurrenceId: occ:462341
                originalIdentifiedName: Remingtonocetus sloani
                acceptedName: Andrewsiphius sloani
                difference: recombined as
              - occurrenceId: occ:462342
                originalIdentifiedName: Andrewsiphius kutchensis
                acceptedName: Andrewsiphius sloani
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

# Andrewsiphius sloani
