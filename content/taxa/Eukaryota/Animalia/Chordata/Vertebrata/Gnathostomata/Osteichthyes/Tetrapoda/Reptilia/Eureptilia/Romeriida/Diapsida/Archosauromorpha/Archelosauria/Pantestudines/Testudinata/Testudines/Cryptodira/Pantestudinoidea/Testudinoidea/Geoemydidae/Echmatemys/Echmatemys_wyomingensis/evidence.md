---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Echmatemys wyomingensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Echmatemys wyomingensis
      en: Echmatemys wyomingensis
    reviewStatus: source-linked
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
            title: PBDB accepted record — Echmatemys wyomingensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=96552&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:96552; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:96552
            selectedOccurrenceIds:
              - occ:172072
              - occ:650010
              - occ:650012
              - occ:1353413
              - occ:1364164
              - occ:1364172
              - occ:1364174
              - occ:1471887
              - occ:1578111
              - occ:1578122
              - occ:1578143
              - occ:1578180
              - occ:1578201
              - occ:1578214
              - occ:2069773
            selectedCollectionIds:
              - col:15837
              - col:16265
              - col:16267
              - col:15997
              - col:185689
              - col:185696
              - col:185688
              - col:205622
              - col:186896
              - col:213059
              - col:213066
              - col:109203
              - col:186894
              - col:186888
              - col:16657
            sourceReferenceIds:
              - ref:7542
              - ref:3806
              - ref:3438
              - ref:26380
              - ref:14442
              - ref:78403
              - ref:95678
            originalIdentificationMappings:
              - occurrenceId: occ:1364164
                originalIdentifiedName: Echmatemys uintensis
                acceptedName: Echmatemys wyomingensis
                difference: null
              - occurrenceId: occ:1364172
                originalIdentifiedName: Echmatemys uintensis
                acceptedName: Echmatemys wyomingensis
                difference: null
              - occurrenceId: occ:1364174
                originalIdentifiedName: Echmatemys uintensis
                acceptedName: Echmatemys wyomingensis
                difference: null
              - occurrenceId: occ:1471887
                originalIdentifiedName: Echmatemys uintensis n. sp.
                acceptedName: Echmatemys wyomingensis
                difference: null
              - occurrenceId: occ:2069773
                originalIdentifiedName: Echmatemys uintensis
                acceptedName: Echmatemys wyomingensis
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

# Echmatemys wyomingensis
