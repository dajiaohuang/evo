---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Scaldicetus grandis
    rank: species
    sourceDatasetId: null
    name:
      zh: Scaldicetus grandis
      en: Scaldicetus grandis
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
            title: PBDB accepted record — Scaldicetus grandis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=64626&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:64626; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:64626
            selectedOccurrenceIds:
              - occ:475069
              - occ:478772
              - occ:478773
              - occ:478774
              - occ:478775
              - occ:481526
              - occ:486172
              - occ:536811
              - occ:538389
              - occ:695836
              - occ:695837
              - occ:695838
              - occ:699749
              - occ:787639
              - occ:810427
            selectedCollectionIds:
              - col:47125
              - col:47465
              - col:48093
              - col:48656
              - col:55597
              - col:52152
              - col:74896
              - col:74897
              - col:32040
              - col:75152
              - col:85069
              - col:37599
            sourceReferenceIds:
              - ref:12475
              - ref:12768
              - ref:12874
              - ref:12984
              - ref:15014
              - ref:15247
              - ref:25229
              - ref:18970
              - ref:29775
            originalIdentificationMappings:
              - occurrenceId: occ:478772
                originalIdentifiedName: Palaeodelphis grandis n. sp.
                acceptedName: Scaldicetus grandis
                difference: recombined as
              - occurrenceId: occ:478773
                originalIdentifiedName: Palaeodelphis minutus n. sp.
                acceptedName: Scaldicetus grandis
                difference: null
              - occurrenceId: occ:478774
                originalIdentifiedName: Palaeodelphis annulatus n. sp.
                acceptedName: Scaldicetus grandis
                difference: null
              - occurrenceId: occ:478775
                originalIdentifiedName: Palaeodelphis coronatus n. sp.
                acceptedName: Scaldicetus grandis
                difference: null
              - occurrenceId: occ:481526
                originalIdentifiedName: Physodon grandis
                acceptedName: Scaldicetus grandis
                difference: recombined as
              - occurrenceId: occ:787639
                originalIdentifiedName: Physodon lorteti n. sp.
                acceptedName: Scaldicetus grandis
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

# Scaldicetus grandis
