---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Herpetotherium youngi
    rank: species
    sourceDatasetId: null
    name:
      zh: Herpetotherium youngi
      en: Herpetotherium youngi
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
            title: PBDB accepted record — Herpetotherium youngi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50145&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50145; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50145
            selectedOccurrenceIds:
              - occ:181367
              - occ:181383
              - occ:181514
              - occ:181555
              - occ:181776
              - occ:181820
              - occ:181839
              - occ:181841
              - occ:181877
              - occ:181884
              - occ:181896
              - occ:181971
              - occ:182099
              - occ:182138
              - occ:182177
              - occ:182873
              - occ:182955
              - occ:183191
              - occ:647084
              - occ:648282
              - occ:648709
              - occ:648726
            selectedCollectionIds:
              - col:17494
              - col:17495
              - col:17516
              - col:17526
              - col:17544
              - col:17561
              - col:17563
              - col:17564
              - col:17566
              - col:17567
              - col:17568
              - col:17597
              - col:17630
              - col:17634
              - col:17636
              - col:17802
              - col:17816
              - col:17862
              - col:67638
              - col:17843
              - col:69806
              - col:69807
            sourceReferenceIds:
              - ref:6294
              - ref:3345
              - ref:7360
              - ref:2121
              - ref:2362
              - ref:2356
              - ref:2115
              - ref:2507
              - ref:19303
            originalIdentificationMappings:
              - occurrenceId: occ:181383
                originalIdentifiedName: Peratherium spindleri
                acceptedName: Herpetotherium youngi
                difference: null
              - occurrenceId: occ:181841
                originalIdentifiedName: Peratherium youngi
                acceptedName: Herpetotherium youngi
                difference: recombined as
              - occurrenceId: occ:181896
                originalIdentifiedName: Peratherium spindleri
                acceptedName: Herpetotherium youngi
                difference: null
              - occurrenceId: occ:181971
                originalIdentifiedName: Peratherium spindleri
                acceptedName: Herpetotherium youngi
                difference: null
              - occurrenceId: occ:182138
                originalIdentifiedName: Peratherium spindleri
                acceptedName: Herpetotherium youngi
                difference: null
              - occurrenceId: occ:183191
                originalIdentifiedName: Peratherium youngi n. sp.
                acceptedName: Herpetotherium youngi
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

# Herpetotherium youngi
