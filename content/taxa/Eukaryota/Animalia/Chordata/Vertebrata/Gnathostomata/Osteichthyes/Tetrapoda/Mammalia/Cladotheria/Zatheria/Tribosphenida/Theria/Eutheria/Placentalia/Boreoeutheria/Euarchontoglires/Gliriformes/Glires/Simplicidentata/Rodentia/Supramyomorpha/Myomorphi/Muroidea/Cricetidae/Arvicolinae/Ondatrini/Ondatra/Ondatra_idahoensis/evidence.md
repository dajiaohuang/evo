---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ondatra idahoensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Ondatra idahoensis
      en: Ondatra idahoensis
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
            title: PBDB accepted record — Ondatra idahoensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49335&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49335; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49335
            selectedOccurrenceIds:
              - occ:193149
              - occ:193319
              - occ:193817
              - occ:193821
              - occ:193825
              - occ:193829
              - occ:193831
              - occ:193836
              - occ:193845
              - occ:193850
              - occ:193858
              - occ:193865
              - occ:193867
              - occ:193876
              - occ:193885
              - occ:194140
              - occ:194148
              - occ:194157
              - occ:194167
              - occ:194189
              - occ:194196
              - occ:194523
              - occ:194544
              - occ:194556
              - occ:194574
              - occ:194602
              - occ:194744
              - occ:195795
              - occ:197150
              - occ:197277
              - occ:197433
              - occ:197838
              - occ:198530
              - occ:295260
              - occ:888611
              - occ:1237479
              - occ:1487187
            selectedCollectionIds:
              - col:19646
              - col:19658
              - col:19769
              - col:19771
              - col:19773
              - col:19774
              - col:19775
              - col:19777
              - col:19780
              - col:19783
              - col:19786
              - col:19789
              - col:19790
              - col:19795
              - col:19798
              - col:19910
              - col:19911
              - col:19912
              - col:19913
              - col:19915
              - col:19916
              - col:19942
              - col:19943
              - col:19944
              - col:19945
              - col:19951
              - col:19964
              - col:20124
              - col:20308
              - col:20319
              - col:20341
              - col:20385
              - col:20479
              - col:28223
              - col:98313
              - col:206956
            sourceReferenceIds:
              - ref:2040
              - ref:1584
              - ref:2878
              - ref:6294
              - ref:1883
              - ref:3009
              - ref:1460
              - ref:2431
              - ref:1186
              - ref:2615
              - ref:938
              - ref:3872
              - ref:1628
              - ref:7718
              - ref:33964
              - ref:53045
              - ref:71195
            originalIdentificationMappings:
              - occurrenceId: occ:194157
                originalIdentifiedName: Ondatra idahoensis n. sp.
                acceptedName: Ondatra idahoensis
                difference: null
              - occurrenceId: occ:198530
                originalIdentifiedName: Anaptogonia hiatidens n. sp.
                acceptedName: Ondatra idahoensis
                difference: null
              - occurrenceId: occ:1237479
                originalIdentifiedName: Anaptogonia cloacina n. sp.
                acceptedName: Ondatra idahoensis
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

# Ondatra idahoensis
