---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Palaeolagus hypsodus
    rank: species
    sourceDatasetId: null
    name:
      zh: Palaeolagus hypsodus
      en: Palaeolagus hypsodus
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
            title: PBDB accepted record — Palaeolagus hypsodus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49658&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49658; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49658
            selectedOccurrenceIds:
              - occ:181241
              - occ:181250
              - occ:181254
              - occ:181257
              - occ:181370
              - occ:181390
              - occ:181479
              - occ:181658
              - occ:181739
              - occ:181778
              - occ:181887
              - occ:181953
              - occ:182047
              - occ:182078
              - occ:182101
              - occ:182128
              - occ:182140
              - occ:182182
              - occ:182222
              - occ:182244
              - occ:182269
              - occ:182277
              - occ:182283
              - occ:182301
              - occ:182326
              - occ:647041
              - occ:1207881
              - occ:2063819
            selectedCollectionIds:
              - col:17465
              - col:17467
              - col:17469
              - col:17471
              - col:17494
              - col:17495
              - col:17509
              - col:17535
              - col:17542
              - col:17544
              - col:17567
              - col:17590
              - col:17610
              - col:17626
              - col:17630
              - col:17633
              - col:17634
              - col:17636
              - col:17638
              - col:17641
              - col:17642
              - col:17643
              - col:17644
              - col:17645
              - col:17654
              - col:17709
              - col:156729
              - col:278678
            sourceReferenceIds:
              - ref:3345
              - ref:1335
              - ref:3041
              - ref:1078
              - ref:3500
              - ref:2356
              - ref:19303
              - ref:51382
              - ref:2421
            originalIdentificationMappings:
              - occurrenceId: occ:181254
                originalIdentifiedName: Palaeolagus hypsodus n. sp.
                acceptedName: Palaeolagus hypsodus
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

# Palaeolagus hypsodus
