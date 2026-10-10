---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Puppigerus camperi
    rank: species
    sourceDatasetId: null
    name:
      zh: Puppigerus camperi
      en: Puppigerus camperi
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
            title: PBDB accepted record — Puppigerus camperi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=313939&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:313939; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:313939
            selectedOccurrenceIds:
              - occ:287830
              - occ:833117
              - occ:1253931
              - occ:1259195
              - occ:1259403
              - occ:1259404
              - occ:1331947
              - occ:1377880
              - occ:1559767
              - occ:1559771
              - occ:1664057
            selectedCollectionIds:
              - col:15595
              - col:92426
              - col:77613
              - col:124192
              - col:167274
              - col:165976
              - col:91363
              - col:124459
              - col:165979
              - col:236310
            sourceReferenceIds:
              - ref:812
              - ref:15587
              - ref:54216
              - ref:54562
              - ref:54576
              - ref:54190
              - ref:29875
              - ref:63677
              - ref:67602
              - ref:89517
            originalIdentificationMappings:
              - occurrenceId: occ:1253931
                originalIdentifiedName: Emys camperi n. sp.
                acceptedName: Puppigerus camperi
                difference: recombined as
              - occurrenceId: occ:1259403
                originalIdentifiedName: Chelone longiceps n. sp.
                acceptedName: Puppigerus camperi
                difference: null
              - occurrenceId: occ:1259404
                originalIdentifiedName: Chelone longiceps
                acceptedName: Puppigerus camperi
                difference: null
              - occurrenceId: occ:1377880
                originalIdentifiedName: Emys camperi
                acceptedName: Puppigerus camperi
                difference: recombined as
              - occurrenceId: occ:1559767
                originalIdentifiedName: Emys parkinsonii n. sp.
                acceptedName: Puppigerus camperi
                difference: null
              - occurrenceId: occ:1559771
                originalIdentifiedName: Chelone trigoniceps n. sp.
                acceptedName: Puppigerus camperi
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

# Puppigerus camperi
