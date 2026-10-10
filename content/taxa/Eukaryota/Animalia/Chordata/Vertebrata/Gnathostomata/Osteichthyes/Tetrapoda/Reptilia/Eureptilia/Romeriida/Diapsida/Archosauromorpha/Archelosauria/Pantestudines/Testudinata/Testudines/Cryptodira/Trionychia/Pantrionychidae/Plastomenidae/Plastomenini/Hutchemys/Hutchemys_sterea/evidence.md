---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hutchemys sterea
    rank: species
    sourceDatasetId: null
    name:
      zh: Hutchemys sterea
      en: Hutchemys sterea
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
            title: PBDB accepted record — Hutchemys sterea
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=337284&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:337284; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:337284
            selectedOccurrenceIds:
              - occ:467135
              - occ:1066784
              - occ:1093705
              - occ:1316637
              - occ:1316638
              - occ:1316639
              - occ:1316642
              - occ:1316643
              - occ:1316644
              - occ:1316651
              - occ:1316661
              - occ:1340586
              - occ:1554591
            selectedCollectionIds:
              - col:14616
              - col:14579
              - col:137798
              - col:176678
              - col:14671
              - col:168338
              - col:176680
              - col:176681
              - col:176682
              - col:176689
              - col:176698
              - col:144499
              - col:48235
            sourceReferenceIds:
              - ref:58298
              - ref:70995
            originalIdentificationMappings:
              - occurrenceId: occ:467135
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1066784
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1093705
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1316637
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1316638
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1316639
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1316642
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1316643
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1316644
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1316651
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1316661
                originalIdentifiedName: Derrisemys sterea n. gen. n. sp.
                acceptedName: Hutchemys sterea
                difference: recombined as
              - occurrenceId: occ:1340586
                originalIdentifiedName: Derrisemys sterea
                acceptedName: Hutchemys sterea
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

# Hutchemys sterea
