---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chelus colombiana
    rank: species
    sourceDatasetId: null
    name:
      zh: Chelus colombiana
      en: Chelus colombiana
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
            title: PBDB accepted record — Chelus colombiana
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=358388&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:358388; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:358388
            selectedOccurrenceIds:
              - occ:624978
              - occ:624979
              - occ:1370640
              - occ:1374272
              - occ:1374313
              - occ:1374349
              - occ:1386001
              - occ:1386025
              - occ:1388511
              - occ:1388512
              - occ:1546535
              - occ:1546536
              - occ:1546537
              - occ:1546538
              - occ:1546554
              - occ:1546555
              - occ:1585139
              - occ:2066501
              - occ:2066502
            selectedCollectionIds:
              - col:55602
              - col:175185
              - col:187592
              - col:187594
              - col:187595
              - col:190374
              - col:190377
              - col:63520
              - col:136777
              - col:217872
              - col:217873
              - col:217874
              - col:217875
              - col:217881
              - col:224013
              - col:107993
              - col:166768
            sourceReferenceIds:
              - ref:19222
              - ref:62750
              - ref:62972
              - ref:64031
              - ref:64033
              - ref:64172
              - ref:75568
              - ref:78963
              - ref:95142
            originalIdentificationMappings:
              - occurrenceId: occ:624978
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
              - occurrenceId: occ:624979
                originalIdentifiedName: Chelus lewisi
                acceptedName: Chelus colombiana
                difference: null
              - occurrenceId: occ:1370640
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
              - occurrenceId: occ:1374272
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
              - occurrenceId: occ:1374313
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
              - occurrenceId: occ:1374349
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
              - occurrenceId: occ:1386001
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
              - occurrenceId: occ:1388511
                originalIdentifiedName: Chelus lewisi
                acceptedName: Chelus colombiana
                difference: null
              - occurrenceId: occ:1388512
                originalIdentifiedName: Chelus lewisi
                acceptedName: Chelus colombiana
                difference: null
              - occurrenceId: occ:1546537
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
              - occurrenceId: occ:1546538
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
              - occurrenceId: occ:1546555
                originalIdentifiedName: Chelus lewisi
                acceptedName: Chelus colombiana
                difference: null
              - occurrenceId: occ:1585139
                originalIdentifiedName: Chelus colombianus
                acceptedName: Chelus colombiana
                difference: corrected to
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

# Chelus colombiana
