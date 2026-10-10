---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Eumysops chapalmalensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Eumysops chapalmalensis
      en: Eumysops chapalmalensis
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
            title: PBDB accepted record — Eumysops chapalmalensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=279730&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:279730; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:279730
            selectedOccurrenceIds:
              - occ:1429233
              - occ:1429236
              - occ:1429237
              - occ:1429238
              - occ:1429240
              - occ:1429241
              - occ:1429242
              - occ:1429243
              - occ:1429244
              - occ:1429245
              - occ:1429248
              - occ:1429249
              - occ:1429250
              - occ:1429253
              - occ:1429255
              - occ:1429256
              - occ:1429258
              - occ:1429259
              - occ:1429260
              - occ:1429261
              - occ:1429262
              - occ:1429264
              - occ:1429266
              - occ:1429267
              - occ:1429268
              - occ:1429270
              - occ:1429272
              - occ:1429274
              - occ:1429275
              - occ:1429277
              - occ:1429279
              - occ:1429280
              - occ:1429282
              - occ:1595581
            selectedCollectionIds:
              - col:198823
              - col:198825
              - col:198826
              - col:198827
              - col:198828
              - col:198829
              - col:198830
              - col:198831
              - col:198832
              - col:198833
              - col:198834
              - col:198835
              - col:198836
              - col:198837
              - col:198838
              - col:198839
              - col:198840
              - col:198841
              - col:198842
              - col:198843
              - col:198844
              - col:198845
              - col:198846
              - col:198847
              - col:198848
              - col:198849
              - col:198850
              - col:198851
              - col:198852
              - col:198853
              - col:198854
              - col:198855
              - col:198856
              - col:225604
            sourceReferenceIds:
              - ref:67738
              - ref:81719
            originalIdentificationMappings: []
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

# Eumysops chapalmalensis
