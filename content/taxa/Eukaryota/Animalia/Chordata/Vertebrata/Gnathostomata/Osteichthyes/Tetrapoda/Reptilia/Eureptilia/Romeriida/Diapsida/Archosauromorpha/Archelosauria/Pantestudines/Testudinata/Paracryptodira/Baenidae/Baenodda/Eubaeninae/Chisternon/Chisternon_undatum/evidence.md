---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chisternon undatum
    rank: species
    sourceDatasetId: null
    name:
      zh: Chisternon undatum
      en: Chisternon undatum
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
            title: PBDB accepted record — Chisternon undatum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=238247&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:238247; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:238247
            selectedOccurrenceIds:
              - occ:1045390
              - occ:1045391
              - occ:1045392
              - occ:1045393
              - occ:1058844
              - occ:1058845
              - occ:1369970
              - occ:1369983
              - occ:1369988
              - occ:1389236
              - occ:1389530
              - occ:1389531
              - occ:1390665
              - occ:1390668
              - occ:1416809
              - occ:1578112
            selectedCollectionIds:
              - col:128447
              - col:16228
              - col:16646
              - col:16226
              - col:130809
              - col:186887
              - col:186890
              - col:186894
              - col:131861
              - col:81455
              - col:106325
              - col:16211
              - col:186896
            sourceReferenceIds:
              - ref:704
              - ref:53110
              - ref:14442
              - ref:62682
              - ref:64379
              - ref:11982
              - ref:53285
              - ref:78403
            originalIdentificationMappings:
              - occurrenceId: occ:1045390
                originalIdentifiedName: Baena undata n. sp.
                acceptedName: Chisternon undatum
                difference: recombined as
              - occurrenceId: occ:1045392
                originalIdentifiedName: Baena gigantea n. sp.
                acceptedName: Chisternon undatum
                difference: null
              - occurrenceId: occ:1058844
                originalIdentifiedName: Baena hebraica n. sp.
                acceptedName: Chisternon undatum
                difference: null
              - occurrenceId: occ:1389236
                originalIdentifiedName: Baena undata
                acceptedName: Chisternon undatum
                difference: recombined as
              - occurrenceId: occ:1390665
                originalIdentifiedName: Baena undata
                acceptedName: Chisternon undatum
                difference: recombined as
              - occurrenceId: occ:1390668
                originalIdentifiedName: Baena undata
                acceptedName: Chisternon undatum
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

# Chisternon undatum
