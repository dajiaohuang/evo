---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Miopanthera lorteti
    rank: species
    sourceDatasetId: null
    name:
      zh: Miopanthera lorteti
      en: Miopanthera lorteti
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
            title: PBDB accepted record — Miopanthera lorteti
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=96582&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:96582; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:96582
            selectedOccurrenceIds:
              - occ:435577
              - occ:640891
              - occ:641108
              - occ:645352
              - occ:1156820
              - occ:1156841
              - occ:1156879
              - occ:1374053
              - occ:1392916
              - occ:1574415
              - occ:1574418
              - occ:1589101
            selectedCollectionIds:
              - col:42596
              - col:69099
              - col:69116
              - col:69712
              - col:148395
              - col:148396
              - col:148401
              - col:187580
              - col:142149
              - col:69106
              - col:181641
              - col:180192
            sourceReferenceIds:
              - ref:11342
              - ref:19926
              - ref:23390
              - ref:47649
              - ref:62965
              - ref:64717
              - ref:78243
              - ref:80834
            originalIdentificationMappings:
              - occurrenceId: occ:435577
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:640891
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:641108
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:645352
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:1156820
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:1156841
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:1156879
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:1374053
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:1392916
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:1574415
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:1574418
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
                difference: recombined as
              - occurrenceId: occ:1589101
                originalIdentifiedName: Pseudaelurus lorteti
                acceptedName: Miopanthera lorteti
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

# Miopanthera lorteti
