---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thisbemys corrugatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Thisbemys corrugatus
      en: Thisbemys corrugatus
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
            title: PBDB accepted record — Thisbemys corrugatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52268&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52268; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52268
            selectedOccurrenceIds:
              - occ:173511
              - occ:173592
              - occ:173609
              - occ:173743
              - occ:173852
              - occ:173895
              - occ:173933
              - occ:174163
              - occ:174230
              - occ:174556
              - occ:174598
              - occ:174661
              - occ:174700
              - occ:174713
              - occ:174751
              - occ:174764
              - occ:174772
              - occ:174789
              - occ:174840
              - occ:174855
              - occ:174875
              - occ:174884
              - occ:175181
              - occ:175363
              - occ:175887
              - occ:175903
              - occ:176437
            selectedCollectionIds:
              - col:16098
              - col:16108
              - col:16109
              - col:16137
              - col:16192
              - col:16200
              - col:16203
              - col:16223
              - col:16228
              - col:16275
              - col:16283
              - col:16294
              - col:16305
              - col:16306
              - col:16311
              - col:16313
              - col:16314
              - col:16315
              - col:16334
              - col:16340
              - col:16345
              - col:16350
              - col:16418
              - col:16488
              - col:16586
              - col:16587
              - col:16651
            sourceReferenceIds:
              - ref:6294
              - ref:1404
              - ref:3731
              - ref:1115
              - ref:1623
              - ref:2523
              - ref:2640
            originalIdentificationMappings:
              - occurrenceId: occ:174230
                originalIdentifiedName: Thisbemys plicatus n. sp.
                acceptedName: Thisbemys corrugatus
                difference: null
              - occurrenceId: occ:174661
                originalIdentifiedName: Thisbemys corrugatus n. sp.
                acceptedName: Thisbemys corrugatus
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

# Thisbemys corrugatus
