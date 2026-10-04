---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hadrianus corsoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Hadrianus corsoni
      en: Hadrianus corsoni
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
            title: PBDB accepted record — Hadrianus corsoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=116705&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:116705; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:116705
            selectedOccurrenceIds:
              - occ:1238838
              - occ:1317297
              - occ:1317303
              - occ:1364162
              - occ:1364168
              - occ:1389215
              - occ:1389216
              - occ:1389523
              - occ:1389524
              - occ:1390663
              - occ:1393429
              - occ:1393448
              - occ:1477573
              - occ:2069774
              - occ:2069775
              - occ:2069776
            selectedCollectionIds:
              - col:130809
              - col:16240
              - col:15650
              - col:185689
              - col:185693
              - col:16228
              - col:128447
              - col:16211
              - col:16589
              - col:206092
              - col:16657
            sourceReferenceIds:
              - ref:53110
              - ref:58369
              - ref:26380
              - ref:60456
              - ref:63673
              - ref:11982
              - ref:53285
              - ref:53109
              - ref:70707
              - ref:95678
            originalIdentificationMappings:
              - occurrenceId: occ:1238838
                originalIdentifiedName: Testudo hadriana n. sp.
                acceptedName: Hadrianus corsoni
                difference: null
              - occurrenceId: occ:1364162
                originalIdentifiedName: Hadrianus utahensis n. sp.
                acceptedName: Hadrianus corsoni
                difference: null
              - occurrenceId: occ:1389215
                originalIdentifiedName: Testudo corsoni n. sp.
                acceptedName: Hadrianus corsoni
                difference: recombined as
              - occurrenceId: occ:1389216
                originalIdentifiedName: Emys carteri n. sp.
                acceptedName: Hadrianus corsoni
                difference: null
              - occurrenceId: occ:1389523
                originalIdentifiedName: Testudo corsoni
                acceptedName: Hadrianus corsoni
                difference: recombined as
              - occurrenceId: occ:1389524
                originalIdentifiedName: Testudo corsoni
                acceptedName: Hadrianus corsoni
                difference: recombined as
              - occurrenceId: occ:1390663
                originalIdentifiedName: Hadrianus octonarius
                acceptedName: Hadrianus corsoni
                difference: null
              - occurrenceId: occ:1393429
                originalIdentifiedName: Hadrianus quadratus n. sp.
                acceptedName: Hadrianus corsoni
                difference: null
              - occurrenceId: occ:1393448
                originalIdentifiedName: Hadrianus robustus n. sp.
                acceptedName: Hadrianus corsoni
                difference: null
              - occurrenceId: occ:2069775
                originalIdentifiedName: Hadrianus utahensis
                acceptedName: Hadrianus corsoni
                difference: null
              - occurrenceId: occ:2069776
                originalIdentifiedName: Hadrianus robustus
                acceptedName: Hadrianus corsoni
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

# Hadrianus corsoni
