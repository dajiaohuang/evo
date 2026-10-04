---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Xenocyon lycaonoides
    rank: species
    sourceDatasetId: null
    name:
      zh: Xenocyon lycaonoides
      en: Xenocyon lycaonoides
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Xenocyon lycaonoides
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=301921&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:301921; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:301921
            selectedOccurrenceIds:
              - occ:199163
              - occ:358554
              - occ:360260
              - occ:367726
              - occ:369046
              - occ:381396
              - occ:381500
              - occ:487353
              - occ:487409
              - occ:488547
              - occ:489591
              - occ:658991
              - occ:1220351
              - occ:1425300
              - occ:1629646
              - occ:1630543
              - occ:1630550
              - occ:1630551
              - occ:1630552
              - occ:1630630
            selectedCollectionIds:
              - col:20563
              - col:34104
              - col:34127
              - col:34784
              - col:34911
              - col:36214
              - col:36220
              - col:48891
              - col:48910
              - col:49092
              - col:49239
              - col:71060
              - col:159681
              - col:197958
              - col:230805
              - col:230980
              - col:50342
              - col:230981
              - col:56733
              - col:230989
            sourceReferenceIds:
              - ref:52058
              - ref:10946
              - ref:8650
              - ref:85341
              - ref:9910
              - ref:9643
              - ref:12802
              - ref:13054
              - ref:85451
              - ref:23807
              - ref:67485
              - ref:85448
              - ref:85449
              - ref:85450
              - ref:85456
            originalIdentificationMappings:
              - occurrenceId: occ:367726
                originalIdentifiedName: Lycaon lycaonoides
                acceptedName: Xenocyon lycaonoides
                difference: recombined as
              - occurrenceId: occ:369046
                originalIdentifiedName: Canis (Xenocyon) lycaonoides
                acceptedName: Xenocyon lycaonoides
                difference: recombined as
              - occurrenceId: occ:381396
                originalIdentifiedName: Xenocyon spelaeoides
                acceptedName: Xenocyon lycaonoides
                difference: null
              - occurrenceId: occ:487353
                originalIdentifiedName: Cuon stehlini
                acceptedName: Xenocyon lycaonoides
                difference: null
              - occurrenceId: occ:487409
                originalIdentifiedName: Cuon stehlini
                acceptedName: Xenocyon lycaonoides
                difference: null
              - occurrenceId: occ:488547
                originalIdentifiedName: Cuon stehlini
                acceptedName: Xenocyon lycaonoides
                difference: null
              - occurrenceId: occ:1425300
                originalIdentifiedName: Canis (Xenocyon) lycaonoides
                acceptedName: Xenocyon lycaonoides
                difference: recombined as
              - occurrenceId: occ:1629646
                originalIdentifiedName: Xenocyon lycaonoides n. sp.
                acceptedName: Xenocyon lycaonoides
                difference: null
              - occurrenceId: occ:1630630
                originalIdentifiedName: Lycaon lycaonoides
                acceptedName: Xenocyon lycaonoides
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

# Xenocyon lycaonoides
