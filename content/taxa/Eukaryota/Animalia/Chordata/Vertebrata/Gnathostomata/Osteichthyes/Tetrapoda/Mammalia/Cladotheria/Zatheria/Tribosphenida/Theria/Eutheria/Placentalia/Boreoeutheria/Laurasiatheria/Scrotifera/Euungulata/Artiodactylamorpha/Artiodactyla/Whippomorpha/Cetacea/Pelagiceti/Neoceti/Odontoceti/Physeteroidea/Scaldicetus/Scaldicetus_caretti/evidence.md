---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Scaldicetus caretti
    rank: species
    sourceDatasetId: null
    name:
      zh: Scaldicetus caretti
      en: Scaldicetus caretti
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
            title: PBDB accepted record — Scaldicetus caretti
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=64596&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:64596; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:64596
            selectedOccurrenceIds:
              - occ:478294
              - occ:478776
              - occ:478777
              - occ:478778
              - occ:478779
              - occ:481523
              - occ:481524
              - occ:622620
              - occ:695818
              - occ:790199
              - occ:810428
              - occ:1383265
              - occ:1383303
              - occ:1467315
            selectedCollectionIds:
              - col:47465
              - col:48093
              - col:67024
              - col:53889
              - col:37599
              - col:189574
              - col:189573
              - col:204940
            sourceReferenceIds:
              - ref:12761
              - ref:12768
              - ref:12874
              - ref:19106
              - ref:25229
              - ref:29777
              - ref:63715
              - ref:70326
            originalIdentificationMappings:
              - occurrenceId: occ:478294
                originalIdentifiedName: Eucetus amblyodon n. gen. n. sp.
                acceptedName: Scaldicetus caretti
                difference: null
              - occurrenceId: occ:478776
                originalIdentifiedName: Palaeodelphis arcuatus n. sp.
                acceptedName: Scaldicetus caretti
                difference: null
              - occurrenceId: occ:478777
                originalIdentifiedName: Palaeodelphis fusiformis n. sp.
                acceptedName: Scaldicetus caretti
                difference: null
              - occurrenceId: occ:478778
                originalIdentifiedName: Palaeodelphis zonatus n. sp.
                acceptedName: Scaldicetus caretti
                difference: null
              - occurrenceId: occ:478779
                originalIdentifiedName: Palaeodelphis pachyodon n. sp.
                acceptedName: Scaldicetus caretti
                difference: null
              - occurrenceId: occ:481523
                originalIdentifiedName: Eucetus amblyodon
                acceptedName: Scaldicetus caretti
                difference: null
              - occurrenceId: occ:481524
                originalIdentifiedName: Homocetus villersi
                acceptedName: Scaldicetus caretti
                difference: null
              - occurrenceId: occ:790199
                originalIdentifiedName: Homaeocetus villersii n. gen. n. sp.
                acceptedName: Scaldicetus caretti
                difference: null
              - occurrenceId: occ:1467315
                originalIdentifiedName: Scaldicetus caretti n. gen. n. sp.
                acceptedName: Scaldicetus caretti
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

# Scaldicetus caretti
