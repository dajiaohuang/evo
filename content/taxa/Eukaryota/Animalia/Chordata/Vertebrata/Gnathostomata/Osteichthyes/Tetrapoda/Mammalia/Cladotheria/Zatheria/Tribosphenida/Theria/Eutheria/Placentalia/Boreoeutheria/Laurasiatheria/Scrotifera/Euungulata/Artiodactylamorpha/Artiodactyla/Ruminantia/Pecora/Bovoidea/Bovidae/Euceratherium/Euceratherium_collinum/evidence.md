---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Euceratherium collinum
    rank: species
    sourceDatasetId: null
    name:
      zh: Euceratherium collinum
      en: Euceratherium collinum
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
            title: PBDB accepted record — Euceratherium collinum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46363&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46363; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46363
            selectedOccurrenceIds:
              - occ:194911
              - occ:194922
              - occ:197082
              - occ:841207
              - occ:841242
              - occ:841245
              - occ:841456
              - occ:841457
              - occ:841965
              - occ:842286
              - occ:1034073
              - occ:1201217
              - occ:1201328
              - occ:1597514
            selectedCollectionIds:
              - col:20010
              - col:20012
              - col:20302
              - col:93250
              - col:93254
              - col:93255
              - col:93281
              - col:93374
              - col:93486
              - col:155393
              - col:155409
              - col:225801
            sourceReferenceIds:
              - ref:2066
              - ref:6294
              - ref:31524
              - ref:31527
              - ref:31528
              - ref:31547
              - ref:31595
              - ref:31631
              - ref:40636
              - ref:50712
              - ref:50720
              - ref:81795
            originalIdentificationMappings:
              - occurrenceId: occ:841242
                originalIdentifiedName: Euceratherium bizzelli n. sp.
                acceptedName: Euceratherium collinum
                difference: null
              - occurrenceId: occ:841457
                originalIdentifiedName: Preptoceras sinclairi
                acceptedName: Euceratherium collinum
                difference: null
              - occurrenceId: occ:842286
                originalIdentifiedName: Taurotragus americanus
                acceptedName: Euceratherium collinum
                difference: null
              - occurrenceId: occ:1034073
                originalIdentifiedName: Euceratherium americanum
                acceptedName: Euceratherium collinum
                difference: null
              - occurrenceId: occ:1201217
                originalIdentifiedName: Euceratherium collinum n. gen. n. sp.
                acceptedName: Euceratherium collinum
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

# Euceratherium collinum
