---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paratomarctus euthos
    rank: species
    sourceDatasetId: null
    name:
      zh: Paratomarctus euthos
      en: Paratomarctus euthos
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
            title: PBDB accepted record — Paratomarctus euthos
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45458&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45458; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45458
            selectedOccurrenceIds:
              - occ:184200
              - occ:184263
              - occ:184448
              - occ:184562
              - occ:184651
              - occ:184811
              - occ:184974
              - occ:184985
              - occ:185092
              - occ:185272
              - occ:185444
              - occ:185660
              - occ:185800
              - occ:185929
              - occ:185948
              - occ:185970
              - occ:186145
              - occ:186259
              - occ:186351
              - occ:186418
              - occ:186475
              - occ:186698
              - occ:186832
              - occ:187150
              - occ:187407
              - occ:187584
            selectedCollectionIds:
              - col:18042
              - col:18056
              - col:18077
              - col:18087
              - col:18095
              - col:18113
              - col:18134
              - col:18135
              - col:18150
              - col:18176
              - col:18200
              - col:18217
              - col:18227
              - col:18242
              - col:18244
              - col:18245
              - col:18268
              - col:18283
              - col:18291
              - col:18302
              - col:18306
              - col:18333
              - col:18355
              - col:18425
              - col:18458
              - col:18496
            sourceReferenceIds:
              - ref:3558
              - ref:3564
              - ref:6294
              - ref:1710
              - ref:6207
            originalIdentificationMappings:
              - occurrenceId: occ:184448
                originalIdentifiedName: Tomarctus euthos
                acceptedName: Paratomarctus euthos
                difference: recombined as
              - occurrenceId: occ:186145
                originalIdentifiedName: Tomarctus euthos
                acceptedName: Paratomarctus euthos
                difference: recombined as
              - occurrenceId: occ:186259
                originalIdentifiedName: Tomarctus euthos
                acceptedName: Paratomarctus euthos
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

# Paratomarctus euthos
