---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Polydolops thomasi
    rank: species
    sourceDatasetId: null
    name:
      zh: Polydolops thomasi
      en: Polydolops thomasi
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
            title: PBDB accepted record — Polydolops thomasi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=188006&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:188006; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:188006
            selectedOccurrenceIds:
              - occ:493724
              - occ:493733
              - occ:1309779
              - occ:1309780
              - occ:1309781
              - occ:1309783
              - occ:1309784
              - occ:1312729
              - occ:1312730
              - occ:1312815
              - occ:1312816
              - occ:1313797
              - occ:1313829
              - occ:1313830
              - occ:1314471
              - occ:1316616
              - occ:1316617
            selectedCollectionIds:
              - col:49898
              - col:49900
              - col:13779
              - col:141758
              - col:44956
              - col:176170
              - col:176171
              - col:176185
              - col:176186
              - col:175742
              - col:176285
              - col:176167
              - col:176674
              - col:176492
            sourceReferenceIds:
              - ref:57557
              - ref:36444
              - ref:54480
              - ref:54855
              - ref:57836
              - ref:10369
              - ref:57989
              - ref:57760
            originalIdentificationMappings:
              - occurrenceId: occ:1309779
                originalIdentifiedName: Polydolops thomasi n. gen. n. sp.
                acceptedName: Polydolops thomasi
                difference: null
              - occurrenceId: occ:1309781
                originalIdentifiedName: Polydolops fur n. sp.
                acceptedName: Polydolops thomasi
                difference: null
              - occurrenceId: occ:1309783
                originalIdentifiedName: Polydolops simplex n. sp.
                acceptedName: Polydolops thomasi
                difference: null
              - occurrenceId: occ:1313830
                originalIdentifiedName: Orthodolops sciurinus n. sp.
                acceptedName: Polydolops thomasi
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

# Polydolops thomasi
