---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nanotragulus loomisi
    rank: species
    sourceDatasetId: null
    name:
      zh: Nanotragulus loomisi
      en: Nanotragulus loomisi
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
            title: PBDB accepted record — Nanotragulus loomisi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48997&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48997; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48997
            selectedOccurrenceIds:
              - occ:181249
              - occ:181282
              - occ:181316
              - occ:181527
              - occ:182044
              - occ:182051
              - occ:182069
              - occ:182074
              - occ:182097
              - occ:182123
              - occ:182137
              - occ:182152
              - occ:182175
              - occ:182208
              - occ:182220
              - occ:182236
              - occ:182266
              - occ:182300
              - occ:182304
              - occ:182321
              - occ:182336
              - occ:182340
              - occ:182384
              - occ:182566
              - occ:182707
              - occ:1207896
              - occ:1315160
            selectedCollectionIds:
              - col:17466
              - col:17472
              - col:17476
              - col:17517
              - col:17607
              - col:17610
              - col:17621
              - col:17623
              - col:17629
              - col:17630
              - col:17633
              - col:17634
              - col:17635
              - col:17636
              - col:17637
              - col:17638
              - col:17641
              - col:17644
              - col:17645
              - col:17651
              - col:17657
              - col:17658
              - col:17667
              - col:17727
              - col:17764
              - col:156729
              - col:17743
            sourceReferenceIds:
              - ref:3041
              - ref:2327
              - ref:4229
              - ref:2356
              - ref:6294
              - ref:6222
              - ref:1544
              - ref:51382
              - ref:24877
            originalIdentificationMappings:
              - occurrenceId: occ:181249
                originalIdentifiedName: Nanotragulus intermedius n. sp.
                acceptedName: Nanotragulus loomisi
                difference: null
              - occurrenceId: occ:181282
                originalIdentifiedName: Nanotragulus loomisi n. sp.
                acceptedName: Nanotragulus loomisi
                difference: null
              - occurrenceId: occ:181527
                originalIdentifiedName: Nanotragulus intermedius
                acceptedName: Nanotragulus loomisi
                difference: null
              - occurrenceId: occ:182152
                originalIdentifiedName: Nanotragulus intermedius
                acceptedName: Nanotragulus loomisi
                difference: null
              - occurrenceId: occ:182300
                originalIdentifiedName: Nanotragulus intermedius
                acceptedName: Nanotragulus loomisi
                difference: null
              - occurrenceId: occ:182384
                originalIdentifiedName: Nanotragulus intermedius
                acceptedName: Nanotragulus loomisi
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

# Nanotragulus loomisi
