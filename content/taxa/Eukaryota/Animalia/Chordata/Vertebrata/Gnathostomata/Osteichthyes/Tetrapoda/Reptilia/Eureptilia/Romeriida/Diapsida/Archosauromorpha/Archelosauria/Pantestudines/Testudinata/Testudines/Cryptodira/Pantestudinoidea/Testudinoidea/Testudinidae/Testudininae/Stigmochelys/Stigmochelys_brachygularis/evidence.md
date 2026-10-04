---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Stigmochelys brachygularis
    rank: species
    sourceDatasetId: null
    name:
      zh: Stigmochelys brachygularis
      en: Stigmochelys brachygularis
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesTaxonomy20261002
          usage:
            title: PBDB accepted record — Stigmochelys brachygularis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=374269&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:374269; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:374269
            selectedOccurrenceIds:
              - occ:224583
              - occ:224619
              - occ:224642
              - occ:224668
              - occ:224828
              - occ:224877
              - occ:224896
              - occ:224916
              - occ:225376
              - occ:339224
            selectedCollectionIds:
              - col:21795
              - col:21798
              - col:21799
              - col:21800
              - col:21810
              - col:21812
              - col:21813
              - col:21816
              - col:21831
              - col:32050
            sourceReferenceIds:
              - ref:4451
            originalIdentificationMappings:
              - occurrenceId: occ:224583
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:224619
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:224642
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:224668
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:224828
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:224877
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:224896
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:224916
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:225376
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
                difference: recombined as
              - occurrenceId: occ:339224
                originalIdentifiedName: Geochelone brachygularis
                acceptedName: Stigmochelys brachygularis
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

# Stigmochelys brachygularis
