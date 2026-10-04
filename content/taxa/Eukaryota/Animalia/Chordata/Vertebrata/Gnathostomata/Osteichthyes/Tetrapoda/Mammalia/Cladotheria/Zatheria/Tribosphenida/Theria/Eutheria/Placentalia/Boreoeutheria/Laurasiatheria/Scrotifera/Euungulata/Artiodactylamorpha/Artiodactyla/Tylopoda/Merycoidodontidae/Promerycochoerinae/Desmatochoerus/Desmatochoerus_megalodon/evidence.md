---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Desmatochoerus megalodon
    rank: species
    sourceDatasetId: null
    name:
      zh: Desmatochoerus megalodon
      en: Desmatochoerus megalodon
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
            title: PBDB accepted record — Desmatochoerus megalodon
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48417&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48417; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48417
            selectedOccurrenceIds:
              - occ:181274
              - occ:181277
              - occ:181287
              - occ:181291
              - occ:181337
              - occ:181495
              - occ:181550
              - occ:181649
              - occ:181699
              - occ:182151
              - occ:182380
              - occ:183002
              - occ:1640004
            selectedCollectionIds:
              - col:17472
              - col:17473
              - col:17474
              - col:17485
              - col:17511
              - col:17524
              - col:17532
              - col:17539
              - col:17634
              - col:17667
              - col:17819
              - col:17509
            sourceReferenceIds:
              - ref:3065
              - ref:2271
              - ref:3345
              - ref:3041
              - ref:2751
              - ref:2356
              - ref:6198
              - ref:86699
            originalIdentificationMappings:
              - occurrenceId: occ:181274
                originalIdentifiedName: Merycoides giganteus n. sp.
                acceptedName: Desmatochoerus megalodon
                difference: null
              - occurrenceId: occ:181277
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:181287
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:181291
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:181337
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:181495
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:181550
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:181649
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:181699
                originalIdentifiedName: Mesoreodon megalodon n. sp.
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:182151
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:182380
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:183002
                originalIdentifiedName: Mesoreodon megalodon
                acceptedName: Desmatochoerus megalodon
                difference: recombined as
              - occurrenceId: occ:1640004
                originalIdentifiedName: Mesoreodon wheeleri n. sp.
                acceptedName: Desmatochoerus megalodon
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

# Desmatochoerus megalodon
