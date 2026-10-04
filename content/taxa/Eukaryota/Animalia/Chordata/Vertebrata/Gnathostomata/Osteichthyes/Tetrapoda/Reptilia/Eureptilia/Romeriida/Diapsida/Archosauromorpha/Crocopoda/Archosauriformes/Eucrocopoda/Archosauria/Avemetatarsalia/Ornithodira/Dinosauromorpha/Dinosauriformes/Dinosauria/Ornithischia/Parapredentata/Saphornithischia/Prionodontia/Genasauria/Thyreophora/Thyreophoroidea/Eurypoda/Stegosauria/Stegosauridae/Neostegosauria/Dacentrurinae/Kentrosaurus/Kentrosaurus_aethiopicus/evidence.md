---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Kentrosaurus aethiopicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Kentrosaurus aethiopicus
      en: Kentrosaurus aethiopicus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Kentrosaurus aethiopicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=56490&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:56490; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:56490
            selectedOccurrenceIds:
              - occ:475149
              - occ:475152
              - occ:475159
              - occ:475241
              - occ:475261
              - occ:475262
              - occ:475263
              - occ:483398
              - occ:483400
              - occ:483401
              - occ:483403
              - occ:483405
              - occ:483406
              - occ:483407
              - occ:483409
              - occ:483413
              - occ:483415
              - occ:483416
              - occ:483417
              - occ:483418
              - occ:483420
              - occ:483421
              - occ:483422
              - occ:483439
              - occ:483498
              - occ:483510
            selectedCollectionIds:
              - col:47143
              - col:47144
              - col:47145
              - col:47151
              - col:47155
              - col:47147
              - col:47146
              - col:48342
              - col:48343
              - col:48344
              - col:48345
              - col:48346
              - col:48347
              - col:48348
              - col:48349
              - col:48350
              - col:48351
              - col:48352
              - col:48353
              - col:48354
              - col:48355
              - col:48356
              - col:48357
              - col:48358
              - col:48378
              - col:48387
            sourceReferenceIds:
              - ref:12607
              - ref:12562
              - ref:12611
              - ref:12612
            originalIdentificationMappings:
              - occurrenceId: occ:475241
                originalIdentifiedName: Kentrosaurus aethiopicus n. gen. n. sp.
                acceptedName: Kentrosaurus aethiopicus
                difference: null
              - occurrenceId: occ:475261
                originalIdentifiedName: Kentrurosaurus aethiopicus
                acceptedName: Kentrosaurus aethiopicus
                difference: recombined as
              - occurrenceId: occ:475262
                originalIdentifiedName: Kentrurosaurus aethiopicus
                acceptedName: Kentrosaurus aethiopicus
                difference: recombined as
              - occurrenceId: occ:475263
                originalIdentifiedName: Kentrurosaurus aethiopicus
                acceptedName: Kentrosaurus aethiopicus
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

# Kentrosaurus aethiopicus
