---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hesperotestudo turgida
    rank: species
    sourceDatasetId: null
    name:
      zh: Hesperotestudo turgida
      en: Hesperotestudo turgida
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbPantestudinesTaxonomy20261002
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesTaxonomy20261002
          usage:
            title: PBDB accepted record — Hesperotestudo turgida
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=121672&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:121672; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:121672
            selectedOccurrenceIds:
              - occ:256292
              - occ:256409
              - occ:287906
              - occ:289269
              - occ:648852
              - occ:648853
              - occ:751345
              - occ:898198
              - occ:898199
              - occ:898200
              - occ:1083773
              - occ:1196088
              - occ:1197026
              - occ:1391461
              - occ:1393421
              - occ:1393422
              - occ:1414073
            selectedCollectionIds:
              - col:20604
              - col:20613
              - col:20289
              - col:19954
              - col:18560
              - col:18545
              - col:20033
              - col:99818
              - col:99819
              - col:18076
              - col:20491
              - col:154722
              - col:154805
              - col:191451
              - col:191910
              - col:19963
              - col:195410
            sourceReferenceIds:
              - ref:1962
              - ref:767
              - ref:777
              - ref:23540
              - ref:27051
              - ref:36696
              - ref:34314
              - ref:43539
              - ref:50316
              - ref:50394
              - ref:64597
              - ref:64778
              - ref:64327
            originalIdentificationMappings:
              - occurrenceId: occ:256292
                originalIdentifiedName: Hesperotestudo incisa
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:256409
                originalIdentifiedName: Hesperotestudo incisa
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:287906
                originalIdentifiedName: Geochelone mlynarskii n. sp.
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:289269
                originalIdentifiedName: Geochelone oelrichi
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:648852
                originalIdentifiedName: Geochelone alleni n. sp.
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:648853
                originalIdentifiedName: Geochelone alleni
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:751345
                originalIdentifiedName: Geochelone (Hesperotestudo) johnstoni n. sp.
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:898198
                originalIdentifiedName: Testudo turgida n. sp.
                acceptedName: Hesperotestudo turgida
                difference: recombined as
              - occurrenceId: occ:898199
                originalIdentifiedName: Testudo riggsi
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:898200
                originalIdentifiedName: Testudo riggsi
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:1083773
                originalIdentifiedName: Geochelone incisa
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:1196088
                originalIdentifiedName: Hesperotestudo incisa
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:1197026
                originalIdentifiedName: Geochelone incisa
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:1391461
                originalIdentifiedName: Testudo turgida
                acceptedName: Hesperotestudo turgida
                difference: recombined as
              - occurrenceId: occ:1393421
                originalIdentifiedName: Geochelone (Hesperotestudo) oelrichi
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:1393422
                originalIdentifiedName: Geochelone (Hesperotestudo) oelrichi
                acceptedName: Hesperotestudo turgida
                difference: null
              - occurrenceId: occ:1414073
                originalIdentifiedName: Testudo incisa n. sp.
                acceptedName: Hesperotestudo turgida
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

# Hesperotestudo turgida
