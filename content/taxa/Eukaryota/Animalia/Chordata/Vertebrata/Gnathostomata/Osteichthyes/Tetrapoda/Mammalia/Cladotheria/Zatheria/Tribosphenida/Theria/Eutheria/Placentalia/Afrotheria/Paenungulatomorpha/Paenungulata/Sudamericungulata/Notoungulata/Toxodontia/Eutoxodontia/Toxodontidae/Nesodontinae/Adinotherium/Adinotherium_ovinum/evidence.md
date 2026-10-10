---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Adinotherium ovinum
    rank: species
    sourceDatasetId: null
    name:
      zh: Adinotherium ovinum
      en: Adinotherium ovinum
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
            title: PBDB accepted record — Adinotherium ovinum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=240094&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:240094; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:240094
            selectedOccurrenceIds:
              - occ:1124816
              - occ:1316223
              - occ:1316224
              - occ:1316225
              - occ:1316226
              - occ:1316227
              - occ:1316228
              - occ:1316229
              - occ:1316230
              - occ:1316231
              - occ:1316232
              - occ:1316244
              - occ:1464953
              - occ:1478323
              - occ:1479730
              - occ:1479779
              - occ:1479780
              - occ:1492974
              - occ:1512026
              - occ:1595676
            selectedCollectionIds:
              - col:142533
              - col:176590
              - col:142529
              - col:176581
              - col:176603
              - col:176578
              - col:176585
              - col:176576
              - col:176586
              - col:176574
              - col:27313
              - col:176635
              - col:206237
              - col:207604
              - col:210638
              - col:176591
            sourceReferenceIds:
              - ref:58227
              - ref:58224
              - ref:70111
              - ref:70729
              - ref:70785
              - ref:71577
              - ref:72896
              - ref:81723
            originalIdentificationMappings:
              - occurrenceId: occ:1316224
                originalIdentifiedName: Adinotherium ferum n. sp.
                acceptedName: Adinotherium ovinum
                difference: null
              - occurrenceId: occ:1316225
                originalIdentifiedName: Adinotherium ferum
                acceptedName: Adinotherium ovinum
                difference: null
              - occurrenceId: occ:1316232
                originalIdentifiedName: Adinotherium robustum
                acceptedName: Adinotherium ovinum
                difference: null
              - occurrenceId: occ:1316244
                originalIdentifiedName: Adinotherium robustum
                acceptedName: Adinotherium ovinum
                difference: null
              - occurrenceId: occ:1479730
                originalIdentifiedName: Adinotherium robustum
                acceptedName: Adinotherium ovinum
                difference: null
              - occurrenceId: occ:1479780
                originalIdentifiedName: Adinotherium robustum
                acceptedName: Adinotherium ovinum
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

# Adinotherium ovinum
