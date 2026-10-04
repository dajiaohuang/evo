---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Lestodon armatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Lestodon armatus
      en: Lestodon armatus
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
            title: PBDB accepted record — Lestodon armatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=83807&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:83807; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:83807
            selectedOccurrenceIds:
              - occ:598076
              - occ:654780
              - occ:661558
              - occ:661609
              - occ:661694
              - occ:661959
              - occ:998106
              - occ:1038495
              - occ:1118493
              - occ:1153821
              - occ:1429529
              - occ:1460990
              - occ:1461431
              - occ:1461487
              - occ:1516282
              - occ:1521290
              - occ:1543397
              - occ:1600057
              - occ:1632400
              - occ:1637893
              - occ:1639805
              - occ:1639806
              - occ:1639807
              - occ:1639808
              - occ:1639809
              - occ:1639810
              - occ:1639811
              - occ:1640024
              - occ:1640053
              - occ:1640086
              - occ:2063773
            selectedCollectionIds:
              - col:63335
              - col:70673
              - col:71274
              - col:71279
              - col:71292
              - col:71316
              - col:120884
              - col:127174
              - col:142016
              - col:147609
              - col:198875
              - col:147598
              - col:203952
              - col:203955
              - col:211646
              - col:212684
              - col:217137
              - col:226121
              - col:211638
              - col:203956
              - col:151539
              - col:124715
              - col:54181
              - col:149143
              - col:223843
              - col:189982
              - col:223944
              - col:212469
              - col:213470
              - col:232458
              - col:231913
            sourceReferenceIds:
              - ref:17632
              - ref:85519
              - ref:24014
              - ref:24011
              - ref:85618
              - ref:23892
              - ref:38600
              - ref:41346
              - ref:46109
              - ref:47532
              - ref:67741
              - ref:69906
              - ref:73160
              - ref:73453
              - ref:75326
              - ref:81938
              - ref:85619
              - ref:86158
              - ref:86610
              - ref:86702
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

# Lestodon armatus
