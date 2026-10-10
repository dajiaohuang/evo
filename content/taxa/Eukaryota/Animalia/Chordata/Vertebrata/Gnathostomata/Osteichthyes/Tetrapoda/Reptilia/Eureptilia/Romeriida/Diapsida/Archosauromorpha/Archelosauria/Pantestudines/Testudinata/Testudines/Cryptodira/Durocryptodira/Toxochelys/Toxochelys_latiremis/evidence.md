---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Toxochelys latiremis
    rank: species
    sourceDatasetId: null
    name:
      zh: Toxochelys latiremis
      en: Toxochelys latiremis
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
            title: PBDB accepted record — Toxochelys latiremis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=128338&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:128338; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:128338
            selectedOccurrenceIds:
              - occ:211642
              - occ:211695
              - occ:211706
              - occ:211857
              - occ:266547
              - occ:385666
              - occ:606693
              - occ:767898
              - occ:768004
              - occ:1011638
              - occ:1390207
              - occ:1392182
              - occ:1419475
              - occ:1459706
              - occ:1459708
            selectedCollectionIds:
              - col:23307
              - col:23321
              - col:23323
              - col:23337
              - col:25071
              - col:36746
              - col:7515
              - col:81970
              - col:81996
              - col:107676
              - col:191172
              - col:18282
              - col:196802
              - col:203738
              - col:203739
            sourceReferenceIds:
              - ref:735
              - ref:692
              - ref:9799
              - ref:787
              - ref:60504
              - ref:39763
              - ref:64475
              - ref:64476
              - ref:63647
              - ref:14442
              - ref:37042
            originalIdentificationMappings:
              - occurrenceId: occ:385666
                originalIdentifiedName: Toxochelys browni
                acceptedName: Toxochelys latiremis
                difference: null
              - occurrenceId: occ:606693
                originalIdentifiedName: Toxochelys weeksi
                acceptedName: Toxochelys latiremis
                difference: null
              - occurrenceId: occ:768004
                originalIdentifiedName: Phyllemys barberi n. gen. n. sp.
                acceptedName: Toxochelys latiremis
                difference: null
              - occurrenceId: occ:1011638
                originalIdentifiedName: Toxochelys browni
                acceptedName: Toxochelys latiremis
                difference: null
              - occurrenceId: occ:1392182
                originalIdentifiedName: Toxochelys latiremis n. gen. n. sp.
                acceptedName: Toxochelys latiremis
                difference: null
              - occurrenceId: occ:1419475
                originalIdentifiedName: Toxochelys serrifer n. sp.
                acceptedName: Toxochelys latiremis
                difference: null
              - occurrenceId: occ:1459706
                originalIdentifiedName: Toxochelys brachyrhinus n. sp.
                acceptedName: Toxochelys latiremis
                difference: null
              - occurrenceId: occ:1459708
                originalIdentifiedName: Porthochelys browni n. sp.
                acceptedName: Toxochelys latiremis
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

# Toxochelys latiremis
