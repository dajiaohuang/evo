---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Simimys simplex
    rank: species
    sourceDatasetId: null
    name:
      zh: Simimys simplex
      en: Simimys simplex
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
            title: PBDB accepted record — Simimys simplex
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46418&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46418; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46418
            selectedOccurrenceIds:
              - occ:175633
              - occ:175639
              - occ:175664
              - occ:175862
              - occ:175953
              - occ:176015
              - occ:176115
              - occ:176258
              - occ:176660
              - occ:176664
              - occ:176671
              - occ:177091
              - occ:177109
              - occ:177120
              - occ:177129
              - occ:177131
              - occ:177134
              - occ:177137
              - occ:177142
              - occ:177144
              - occ:177146
              - occ:177148
              - occ:177150
              - occ:177152
              - occ:177162
              - occ:177201
              - occ:177220
              - occ:177231
              - occ:177250
              - occ:177327
              - occ:177350
              - occ:177377
              - occ:1635402
            selectedCollectionIds:
              - col:16529
              - col:16530
              - col:16533
              - col:16585
              - col:16590
              - col:16603
              - col:16615
              - col:16629
              - col:16694
              - col:16695
              - col:16696
              - col:16763
              - col:16764
              - col:16765
              - col:16766
              - col:16767
              - col:16768
              - col:16770
              - col:16771
              - col:16773
              - col:16775
              - col:16776
              - col:16777
              - col:16778
              - col:16780
              - col:16786
              - col:16789
              - col:16790
              - col:16791
              - col:16806
              - col:16810
              - col:16813
              - col:167831
            sourceReferenceIds:
              - ref:3537
              - ref:3538
              - ref:1681
              - ref:3540
              - ref:3541
              - ref:2072
              - ref:3680
              - ref:2059
              - ref:54866
            originalIdentificationMappings:
              - occurrenceId: occ:177231
                originalIdentifiedName: Eumysops vetus n. sp.
                acceptedName: Simimys simplex
                difference: null
              - occurrenceId: occ:177350
                originalIdentifiedName: Eumysops simplex n. gen. n. sp.
                acceptedName: Simimys simplex
                difference: recombined as
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

# Simimys simplex
