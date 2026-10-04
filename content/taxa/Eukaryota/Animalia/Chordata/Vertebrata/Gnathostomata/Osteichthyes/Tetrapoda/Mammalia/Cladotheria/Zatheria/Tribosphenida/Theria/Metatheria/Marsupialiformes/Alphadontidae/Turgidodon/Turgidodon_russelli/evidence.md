---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Turgidodon russelli
    rank: species
    sourceDatasetId: null
    name:
      zh: Turgidodon russelli
      en: Turgidodon russelli
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
            title: PBDB accepted record — Turgidodon russelli
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43926&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43926; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43926
            selectedOccurrenceIds:
              - occ:162703
              - occ:162746
              - occ:162759
              - occ:162769
              - occ:162797
              - occ:162810
              - occ:162816
              - occ:162838
              - occ:162888
              - occ:162939
              - occ:162954
              - occ:162956
              - occ:162980
              - occ:464531
              - occ:464552
              - occ:464573
              - occ:464576
              - occ:464594
              - occ:464832
              - occ:871892
              - occ:900921
              - occ:900922
              - occ:900926
            selectedCollectionIds:
              - col:14433
              - col:14446
              - col:14449
              - col:14451
              - col:14458
              - col:14461
              - col:14463
              - col:14465
              - col:14470
              - col:14482
              - col:14486
              - col:14487
              - col:14491
              - col:45671
              - col:45822
              - col:45670
              - col:45561
              - col:45566
              - col:45899
              - col:96603
              - col:70454
              - col:70453
              - col:70269
            sourceReferenceIds:
              - ref:6294
              - ref:1205
              - ref:4218
              - ref:1517
              - ref:2602
              - ref:11931
              - ref:32794
              - ref:2237
            originalIdentificationMappings:
              - occurrenceId: occ:162816
                originalIdentifiedName: Alphadon russelli n. sp.
                acceptedName: Turgidodon russelli
                difference: recombined as
              - occurrenceId: occ:162888
                originalIdentifiedName: Alphadon russelli
                acceptedName: Turgidodon russelli
                difference: recombined as
              - occurrenceId: occ:162939
                originalIdentifiedName: Alphadon russelli
                acceptedName: Turgidodon russelli
                difference: recombined as
              - occurrenceId: occ:162980
                originalIdentifiedName: Alphadon russelli
                acceptedName: Turgidodon russelli
                difference: recombined as
              - occurrenceId: occ:900921
                originalIdentifiedName: Alphadon russelli
                acceptedName: Turgidodon russelli
                difference: recombined as
              - occurrenceId: occ:900922
                originalIdentifiedName: Alphadon russelli
                acceptedName: Turgidodon russelli
                difference: recombined as
              - occurrenceId: occ:900926
                originalIdentifiedName: Alphadon russelli
                acceptedName: Turgidodon russelli
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

# Turgidodon russelli
