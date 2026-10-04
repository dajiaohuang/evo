---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Plesiochelys etalloni
    rank: species
    sourceDatasetId: null
    name:
      zh: Plesiochelys etalloni
      en: Plesiochelys etalloni
    reviewStatus: source-linked
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
            title: PBDB accepted record — Plesiochelys etalloni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=253592&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:253592; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:253592
            selectedOccurrenceIds:
              - occ:1093712
              - occ:1093713
              - occ:1093714
              - occ:1094382
              - occ:1094383
              - occ:1094384
              - occ:1094385
              - occ:1094392
              - occ:1094572
              - occ:1338578
              - occ:1368985
              - occ:1368989
              - occ:1368992
            selectedCollectionIds:
              - col:137799
              - col:137800
              - col:137749
              - col:90875
              - col:138029
              - col:140709
              - col:154715
              - col:154714
              - col:154716
            sourceReferenceIds:
              - ref:44041
              - ref:44127
              - ref:44124
              - ref:54781
              - ref:44146
              - ref:60036
              - ref:62616
            originalIdentificationMappings:
              - occurrenceId: occ:1093712
                originalIdentifiedName: Plesiochelys etalloni n. sp.
                acceptedName: Plesiochelys etalloni
                difference: null
              - occurrenceId: occ:1093714
                originalIdentifiedName: Plesiochelys solodurensis
                acceptedName: Plesiochelys etalloni
                difference: null
              - occurrenceId: occ:1094382
                originalIdentifiedName: Plesiochelys solodurensis n. sp.
                acceptedName: Plesiochelys etalloni
                difference: null
              - occurrenceId: occ:1094383
                originalIdentifiedName: Plesiochelys sanctaverenae n. sp.
                acceptedName: Plesiochelys etalloni
                difference: misspelling of
              - occurrenceId: occ:1094384
                originalIdentifiedName: Plesiochelys langii n. sp.
                acceptedName: Plesiochelys etalloni
                difference: null
              - occurrenceId: occ:1094385
                originalIdentifiedName: Plesiochelys solodurensis
                acceptedName: Plesiochelys etalloni
                difference: null
              - occurrenceId: occ:1094392
                originalIdentifiedName: Plesiochelys solodurensis
                acceptedName: Plesiochelys etalloni
                difference: null
              - occurrenceId: occ:1094572
                originalIdentifiedName: Plesiochelys hannoverana n. sp.
                acceptedName: Plesiochelys etalloni
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

# Plesiochelys etalloni
