---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Titanochelon bolivari
    rank: species
    sourceDatasetId: null
    name:
      zh: Titanochelon bolivari
      en: Titanochelon bolivari
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
            title: PBDB accepted record — Titanochelon bolivari
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=268040&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:268040; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:268040
            selectedOccurrenceIds:
              - occ:419482
              - occ:1135763
              - occ:1135764
              - occ:1357180
              - occ:1357182
              - occ:1372446
              - occ:1372447
              - occ:1372448
              - occ:1372449
              - occ:1372451
              - occ:1372452
              - occ:1372453
              - occ:1372454
              - occ:1372455
              - occ:1372456
              - occ:1372457
              - occ:1372458
              - occ:1494416
              - occ:1497234
              - occ:1497236
              - occ:1638048
            selectedCollectionIds:
              - col:40747
              - col:144666
              - col:144667
              - col:35986
              - col:184304
              - col:187336
              - col:187337
              - col:187338
              - col:187339
              - col:187340
              - col:187341
              - col:187342
              - col:187343
              - col:187344
              - col:187345
              - col:187346
              - col:187347
              - col:197674
              - col:68914
              - col:208187
              - col:65912
            sourceReferenceIds:
              - ref:10996
              - ref:64553
              - ref:46814
              - ref:61639
              - ref:60876
              - ref:71661
              - ref:71915
              - ref:71916
              - ref:86091
            originalIdentificationMappings:
              - occurrenceId: occ:419482
                originalIdentifiedName: Geochelone bolivari
                acceptedName: Titanochelon bolivari
                difference: recombined as
              - occurrenceId: occ:1135763
                originalIdentifiedName: Testudo bolivari n. sp.
                acceptedName: Titanochelon bolivari
                difference: recombined as
              - occurrenceId: occ:1135764
                originalIdentifiedName: Cheirogaster bolivari
                acceptedName: Titanochelon bolivari
                difference: recombined as
              - occurrenceId: occ:1357182
                originalIdentifiedName: Testudo bolivari
                acceptedName: Titanochelon bolivari
                difference: recombined as
              - occurrenceId: occ:1494416
                originalIdentifiedName: Cheirogaster bolivari
                acceptedName: Titanochelon bolivari
                difference: recombined as
              - occurrenceId: occ:1497234
                originalIdentifiedName: Cheirogaster bolivari
                acceptedName: Titanochelon bolivari
                difference: recombined as
              - occurrenceId: occ:1497236
                originalIdentifiedName: Cheirogaster bolivari
                acceptedName: Titanochelon bolivari
                difference: recombined as
              - occurrenceId: occ:1638048
                originalIdentifiedName: Testudo bolivari
                acceptedName: Titanochelon bolivari
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

# Titanochelon bolivari
