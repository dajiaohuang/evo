---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protostega gigas
    rank: species
    sourceDatasetId: null
    name:
      zh: Protostega gigas
      en: Protostega gigas
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
            title: PBDB accepted record — Protostega gigas
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=96952&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:96952; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:96952
            selectedOccurrenceIds:
              - occ:767568
              - occ:767569
              - occ:767570
              - occ:767571
              - occ:767572
              - occ:767573
              - occ:1459710
              - occ:1459711
              - occ:1459713
              - occ:1595565
              - occ:1700590
            selectedCollectionIds:
              - col:81927
              - col:81930
              - col:81931
              - col:81932
              - col:81933
              - col:81934
              - col:203740
              - col:93225
              - col:203741
              - col:157353
              - col:240983
            sourceReferenceIds:
              - ref:786
              - ref:42113
              - ref:23676
              - ref:14442
              - ref:81716
              - ref:92265
            originalIdentificationMappings:
              - occurrenceId: occ:767568
                originalIdentifiedName: Protostega dixie n. sp.
                acceptedName: Protostega gigas
                difference: null
              - occurrenceId: occ:767569
                originalIdentifiedName: Protostega dixie
                acceptedName: Protostega gigas
                difference: null
              - occurrenceId: occ:767571
                originalIdentifiedName: Protostega dixie
                acceptedName: Protostega gigas
                difference: null
              - occurrenceId: occ:767572
                originalIdentifiedName: Protostega dixie
                acceptedName: Protostega gigas
                difference: null
              - occurrenceId: occ:767573
                originalIdentifiedName: Protostega dixie
                acceptedName: Protostega gigas
                difference: null
              - occurrenceId: occ:1459710
                originalIdentifiedName: Protostega gigas n. gen. n. sp.
                acceptedName: Protostega gigas
                difference: null
              - occurrenceId: occ:1459713
                originalIdentifiedName: Protostega potens n. sp.
                acceptedName: Protostega gigas
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

# Protostega gigas
