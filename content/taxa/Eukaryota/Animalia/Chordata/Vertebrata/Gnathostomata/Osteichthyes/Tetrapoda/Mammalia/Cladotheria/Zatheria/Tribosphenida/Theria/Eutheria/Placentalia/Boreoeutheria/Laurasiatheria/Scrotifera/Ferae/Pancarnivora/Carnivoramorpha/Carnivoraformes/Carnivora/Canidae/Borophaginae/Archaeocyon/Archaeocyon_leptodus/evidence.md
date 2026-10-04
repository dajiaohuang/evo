---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Archaeocyon leptodus
    rank: species
    sourceDatasetId: null
    name:
      zh: Archaeocyon leptodus
      en: Archaeocyon leptodus
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
            title: PBDB accepted record — Archaeocyon leptodus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49212&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49212; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49212
            selectedOccurrenceIds:
              - occ:180728
              - occ:181011
              - occ:181244
              - occ:181264
              - occ:181324
              - occ:181549
              - occ:181640
              - occ:181900
              - occ:181915
              - occ:181983
              - occ:181996
              - occ:182030
              - occ:182043
              - occ:182089
              - occ:182095
              - occ:182113
              - occ:182135
              - occ:182146
              - occ:182166
              - occ:182195
              - occ:182217
              - occ:182292
              - occ:182320
              - occ:182331
              - occ:182539
              - occ:182560
              - occ:182569
            selectedCollectionIds:
              - col:17335
              - col:17377
              - col:17465
              - col:17472
              - col:17479
              - col:17524
              - col:17532
              - col:17568
              - col:17574
              - col:17598
              - col:17602
              - col:17605
              - col:17607
              - col:17627
              - col:17629
              - col:17630
              - col:17633
              - col:17634
              - col:17635
              - col:17636
              - col:17637
              - col:17644
              - col:17651
              - col:17654
              - col:17724
              - col:17727
              - col:17729
            sourceReferenceIds:
              - ref:3558
              - ref:6294
              - ref:2356
            originalIdentificationMappings:
              - occurrenceId: occ:182095
                originalIdentifiedName: Hesperocyon leptodus
                acceptedName: Archaeocyon leptodus
                difference: recombined as
              - occurrenceId: occ:182166
                originalIdentifiedName: Hesperocyon leptodus
                acceptedName: Archaeocyon leptodus
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

# Archaeocyon leptodus
