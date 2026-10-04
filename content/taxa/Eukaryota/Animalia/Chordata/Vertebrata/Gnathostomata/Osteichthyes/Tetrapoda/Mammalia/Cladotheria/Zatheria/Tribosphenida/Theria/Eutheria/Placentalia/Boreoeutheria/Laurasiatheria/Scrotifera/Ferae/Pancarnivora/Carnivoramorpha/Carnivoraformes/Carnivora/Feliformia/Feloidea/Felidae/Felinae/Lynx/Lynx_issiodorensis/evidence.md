---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Lynx issiodorensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Lynx issiodorensis
      en: Lynx issiodorensis
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
            title: PBDB accepted record — Lynx issiodorensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=370346&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:370346; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:370346
            selectedOccurrenceIds:
              - occ:217700
              - occ:362884
              - occ:365112
              - occ:365972
              - occ:367732
              - occ:382557
              - occ:409297
              - occ:412055
              - occ:412070
              - occ:416595
              - occ:418297
              - occ:418312
              - occ:448604
              - occ:474712
              - occ:474738
              - occ:475100
              - occ:475116
              - occ:475181
              - occ:497024
              - occ:497126
              - occ:1380888
              - occ:1384767
              - occ:1427552
              - occ:1630554
            selectedCollectionIds:
              - col:22222
              - col:34370
              - col:34592
              - col:34655
              - col:34784
              - col:36373
              - col:39409
              - col:39845
              - col:39846
              - col:40392
              - col:40564
              - col:36112
              - col:44145
              - col:47099
              - col:47100
              - col:47129
              - col:47131
              - col:47150
              - col:50196
              - col:50199
              - col:189026
              - col:189976
              - col:198590
              - col:56733
            sourceReferenceIds:
              - ref:5423
              - ref:9032
              - ref:9135
              - ref:9754
              - ref:10647
              - ref:10805
              - ref:10898
              - ref:9580
              - ref:13795
              - ref:11584
              - ref:12548
              - ref:11001
              - ref:12578
              - ref:9643
              - ref:63501
              - ref:63872
              - ref:67604
              - ref:85450
            originalIdentificationMappings:
              - occurrenceId: occ:217700
                originalIdentifiedName: Felis issiodorensis
                acceptedName: Lynx issiodorensis
                difference: recombined as
              - occurrenceId: occ:416595
                originalIdentifiedName: Felis (Lynx) issiodorensis
                acceptedName: Lynx issiodorensis
                difference: recombined as
              - occurrenceId: occ:418312
                originalIdentifiedName: Felis (Lynx) issiodorensis
                acceptedName: Lynx issiodorensis
                difference: recombined as
              - occurrenceId: occ:475100
                originalIdentifiedName: Felis issiodorensis
                acceptedName: Lynx issiodorensis
                difference: recombined as
              - occurrenceId: occ:475181
                originalIdentifiedName: Felis (Lynx) issiodorensis
                acceptedName: Lynx issiodorensis
                difference: recombined as
              - occurrenceId: occ:497126
                originalIdentifiedName: Felis (Lynx) issiodorensis
                acceptedName: Lynx issiodorensis
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

# Lynx issiodorensis
