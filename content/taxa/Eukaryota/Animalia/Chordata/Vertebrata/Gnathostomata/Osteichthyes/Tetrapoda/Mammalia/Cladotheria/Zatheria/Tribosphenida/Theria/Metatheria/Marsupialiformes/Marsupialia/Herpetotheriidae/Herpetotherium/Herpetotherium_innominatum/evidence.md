---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Herpetotherium innominatum
    rank: species
    sourceDatasetId: null
    name:
      zh: Herpetotherium innominatum
      en: Herpetotherium innominatum
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
            title: PBDB accepted record — Herpetotherium innominatum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50133&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50133; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50133
            selectedOccurrenceIds:
              - occ:168765
              - occ:168995
              - occ:169048
              - occ:169433
              - occ:170969
              - occ:171256
              - occ:172609
              - occ:172695
              - occ:172858
              - occ:173334
              - occ:173445
              - occ:173498
              - occ:173520
              - occ:173973
              - occ:174106
              - occ:174470
              - occ:174601
              - occ:174775
              - occ:174815
              - occ:174984
              - occ:175005
              - occ:175123
              - occ:175475
              - occ:175505
              - occ:175536
              - occ:175555
              - occ:175571
              - occ:176148
              - occ:176205
              - occ:177414
              - occ:177801
              - occ:752593
              - occ:1193518
              - occ:1370174
            selectedCollectionIds:
              - col:15458
              - col:15491
              - col:15493
              - col:15516
              - col:15668
              - col:15725
              - col:15917
              - col:15930
              - col:15942
              - col:16073
              - col:16090
              - col:16098
              - col:16100
              - col:16207
              - col:16219
              - col:16254
              - col:16284
              - col:16315
              - col:16323
              - col:16393
              - col:16396
              - col:16415
              - col:16513
              - col:16514
              - col:16515
              - col:16516
              - col:16517
              - col:16623
              - col:16626
              - col:16826
              - col:16884
              - col:80580
              - col:154254
              - col:186946
            sourceReferenceIds:
              - ref:7530
              - ref:6294
              - ref:1248
              - ref:2179
              - ref:1623
              - ref:2180
              - ref:27112
              - ref:49988
              - ref:62695
            originalIdentificationMappings:
              - occurrenceId: occ:168765
                originalIdentifiedName: Peratherium innominatum
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:168995
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:169048
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:169433
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:170969
                originalIdentifiedName: Peratherium innominatum
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:171256
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:172609
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:172695
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:172858
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:173334
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:173445
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:173498
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:173520
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:173973
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:174106
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:174470
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:174601
                originalIdentifiedName: Peratherium innominatum n. sp.
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:174775
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:174815
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:174984
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:175005
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:175123
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:175475
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:175505
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:175536
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:175555
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:175571
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:176148
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:176205
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:177414
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:177801
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:752593
                originalIdentifiedName: Peratherium innominatum
                acceptedName: Herpetotherium innominatum
                difference: recombined as
              - occurrenceId: occ:1370174
                originalIdentifiedName: Copedelphys innominata
                acceptedName: Herpetotherium innominatum
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

# Herpetotherium innominatum
