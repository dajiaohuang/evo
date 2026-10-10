---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Psephophorus polygonus
    rank: species
    sourceDatasetId: null
    name:
      zh: Psephophorus polygonus
      en: Psephophorus polygonus
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
            title: PBDB accepted record — Psephophorus polygonus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=317849&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:317849; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:317849
            selectedOccurrenceIds:
              - occ:1034765
              - occ:1155929
              - occ:1372042
              - occ:1372182
              - occ:1388408
              - occ:1388414
              - occ:1506027
              - occ:1633376
              - occ:1633377
              - occ:1633378
              - occ:1633379
              - occ:1633380
              - occ:1633381
              - occ:1633382
            selectedCollectionIds:
              - col:71648
              - col:73137
              - col:79793
              - col:152251
              - col:190853
              - col:47125
              - col:190169
              - col:70817
              - col:71810
              - col:70818
              - col:71533
              - col:97475
              - col:219172
              - col:221449
            sourceReferenceIds:
              - ref:39929
              - ref:65672
              - ref:62831
              - ref:64633
              - ref:64157
              - ref:72450
              - ref:85705
            originalIdentificationMappings:
              - occurrenceId: occ:1034765
                originalIdentifiedName: Psephophorus calvertensis
                acceptedName: Psephophorus polygonus
                difference: null
              - occurrenceId: occ:1372042
                originalIdentifiedName: Psephophorus calvertensis
                acceptedName: Psephophorus polygonus
                difference: null
              - occurrenceId: occ:1372182
                originalIdentifiedName: Psephophorus calvertensis
                acceptedName: Psephophorus polygonus
                difference: null
              - occurrenceId: occ:1633376
                originalIdentifiedName: Psephophorus calvertensis n. sp.
                acceptedName: Psephophorus polygonus
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

# Psephophorus polygonus
