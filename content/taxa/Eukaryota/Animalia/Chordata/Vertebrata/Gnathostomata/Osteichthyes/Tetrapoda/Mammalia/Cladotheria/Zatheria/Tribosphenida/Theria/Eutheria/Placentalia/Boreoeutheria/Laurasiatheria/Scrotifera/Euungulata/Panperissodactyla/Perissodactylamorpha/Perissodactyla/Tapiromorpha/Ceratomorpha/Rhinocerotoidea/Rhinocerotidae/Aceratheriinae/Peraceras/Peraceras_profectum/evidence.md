---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Peraceras profectum
    rank: species
    sourceDatasetId: null
    name:
      zh: Peraceras profectum
      en: Peraceras profectum
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
            title: PBDB accepted record — Peraceras profectum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43707&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43707; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43707
            selectedOccurrenceIds:
              - occ:183768
              - occ:185607
              - occ:189593
              - occ:189666
              - occ:190851
              - occ:192475
              - occ:192878
              - occ:1220553
              - occ:1220554
              - occ:1220555
              - occ:1220556
              - occ:1220557
              - occ:1220558
              - occ:1220559
              - occ:1220562
              - occ:1220563
              - occ:1220564
              - occ:1220565
              - occ:1220566
              - occ:1220567
              - occ:1220568
            selectedCollectionIds:
              - col:17965
              - col:18209
              - col:18874
              - col:18894
              - col:19103
              - col:19535
              - col:19611
              - col:17952
              - col:19339
              - col:17972
              - col:17995
              - col:18284
              - col:18153
              - col:18144
              - col:19286
              - col:19547
              - col:19531
              - col:19274
              - col:19287
              - col:19470
              - col:19484
            sourceReferenceIds:
              - ref:3703
              - ref:6328
              - ref:2764
              - ref:1080
              - ref:2807
              - ref:1014
              - ref:51726
            originalIdentificationMappings:
              - occurrenceId: occ:183768
                originalIdentifiedName: Aphelops profectus n. sp.
                acceptedName: Peraceras profectum
                difference: recombined as
              - occurrenceId: occ:189593
                originalIdentifiedName: Aphelops ceratorhinus
                acceptedName: Peraceras profectum
                difference: null
              - occurrenceId: occ:189666
                originalIdentifiedName: Aphelops montanus
                acceptedName: Peraceras profectum
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

# Peraceras profectum
