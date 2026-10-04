---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leptalestes cooki
    rank: species
    sourceDatasetId: null
    name:
      zh: Leptalestes cooki
      en: Leptalestes cooki
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
            title: PBDB accepted record — Leptalestes cooki
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50062&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50062; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50062
            selectedOccurrenceIds:
              - occ:163044
              - occ:163085
              - occ:163128
              - occ:163151
              - occ:163217
              - occ:163331
              - occ:163346
              - occ:163423
              - occ:163480
              - occ:163545
              - occ:163672
              - occ:467140
              - occ:1292681
              - occ:1292701
            selectedCollectionIds:
              - col:14505
              - col:14515
              - col:14519
              - col:14523
              - col:14538
              - col:14566
              - col:14570
              - col:14585
              - col:14598
              - col:14612
              - col:14641
              - col:14616
              - col:172642
              - col:172644
            sourceReferenceIds:
              - ref:1241
              - ref:960
              - ref:3705
              - ref:13103
              - ref:56083
            originalIdentificationMappings:
              - occurrenceId: occ:163044
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163085
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163128
                originalIdentifiedName: Pediomys cooki n. sp.
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163151
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163217
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163331
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163346
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163423
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163480
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163545
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:163672
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:467140
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:1292681
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
                difference: recombined as
              - occurrenceId: occ:1292701
                originalIdentifiedName: Pediomys cooki
                acceptedName: Leptalestes cooki
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

# Leptalestes cooki
