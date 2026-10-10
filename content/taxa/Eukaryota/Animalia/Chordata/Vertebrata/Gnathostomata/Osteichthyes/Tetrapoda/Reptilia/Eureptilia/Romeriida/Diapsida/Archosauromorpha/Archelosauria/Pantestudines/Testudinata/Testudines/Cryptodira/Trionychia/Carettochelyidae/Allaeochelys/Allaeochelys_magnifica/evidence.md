---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Allaeochelys magnifica
    rank: species
    sourceDatasetId: null
    name:
      zh: Allaeochelys magnifica
      en: Allaeochelys magnifica
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
            title: PBDB accepted record — Allaeochelys magnifica
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=58165&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:58165; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:58165
            selectedOccurrenceIds:
              - occ:424755
              - occ:424756
              - occ:424816
              - occ:424827
              - occ:424830
              - occ:424832
              - occ:424834
              - occ:424836
              - occ:424848
              - occ:424852
              - occ:424861
              - occ:424865
              - occ:424870
            selectedCollectionIds:
              - col:41310
              - col:41307
              - col:41455
              - col:41456
              - col:41320
              - col:41457
              - col:41331
              - col:41459
              - col:41460
              - col:41461
              - col:41462
              - col:41463
              - col:41466
            sourceReferenceIds:
              - ref:11108
            originalIdentificationMappings:
              - occurrenceId: occ:424755
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424756
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424816
                originalIdentifiedName: Burmemys magnifica n. gen. n. sp.
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424827
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424830
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424832
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424834
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424836
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424848
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424852
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424861
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424865
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
                difference: recombined as
              - occurrenceId: occ:424870
                originalIdentifiedName: Burmemys magnifica
                acceptedName: Allaeochelys magnifica
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

# Allaeochelys magnifica
