---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chelydropsis murchisoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Chelydropsis murchisoni
      en: Chelydropsis murchisoni
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
            title: PBDB accepted record — Chelydropsis murchisoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=235430&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:235430; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:235430
            selectedOccurrenceIds:
              - occ:472483
              - occ:1338670
              - occ:1380258
              - occ:1380259
              - occ:1388900
              - occ:1388905
              - occ:1402672
              - occ:1408766
              - occ:1409064
              - occ:1427968
              - occ:1427975
              - occ:1427979
              - occ:1431369
              - occ:1538694
            selectedCollectionIds:
              - col:46955
              - col:32191
              - col:49520
              - col:34534
              - col:190946
              - col:42596
              - col:73696
              - col:194682
              - col:49101
              - col:106003
              - col:198614
              - col:175587
              - col:144047
            sourceReferenceIds:
              - ref:12479
              - ref:60872
              - ref:62897
              - ref:64285
              - ref:64330
              - ref:76478
              - ref:66150
              - ref:67646
              - ref:67851
              - ref:74675
            originalIdentificationMappings:
              - occurrenceId: occ:1338670
                originalIdentifiedName: Trionyx sansaniensis n. sp.
                acceptedName: Chelydropsis murchisoni
                difference: null
              - occurrenceId: occ:1380259
                originalIdentifiedName: Chelydra murchisoni n. sp.
                acceptedName: Chelydropsis murchisoni
                difference: recombined as
              - occurrenceId: occ:1388900
                originalIdentifiedName: Chelydra allingensis n. sp.
                acceptedName: Chelydropsis murchisoni
                difference: null
              - occurrenceId: occ:1388905
                originalIdentifiedName: Chelydropsis staeschei n. sp.
                acceptedName: Chelydropsis murchisoni
                difference: null
              - occurrenceId: occ:1538694
                originalIdentifiedName: Chelydropsis carinata n. sp.
                acceptedName: Chelydropsis murchisoni
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

# Chelydropsis murchisoni
