---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Acdestis oweni
    rank: species
    sourceDatasetId: null
    name:
      zh: Acdestis oweni
      en: Acdestis oweni
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
            title: PBDB accepted record — Acdestis oweni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=243664&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:243664; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:243664
            selectedOccurrenceIds:
              - occ:1315693
              - occ:1315694
              - occ:1315699
              - occ:1315723
              - occ:1316290
              - occ:1479025
              - occ:1512693
              - occ:1512704
              - occ:1514714
              - occ:1514715
              - occ:1514716
              - occ:1514721
              - occ:1514722
              - occ:1514723
              - occ:1514724
              - occ:1514725
              - occ:1514726
              - occ:1514727
              - occ:1514728
              - occ:1514729
              - occ:1514730
              - occ:1514731
            selectedCollectionIds:
              - col:59333
              - col:59334
              - col:176563
              - col:176570
              - col:176578
              - col:176571
              - col:210638
              - col:210786
              - col:59319
              - col:59321
              - col:59323
              - col:59320
              - col:59332
              - col:59133
              - col:144940
              - col:176576
              - col:176580
              - col:87314
              - col:176582
              - col:176565
              - col:176590
              - col:176594
            sourceReferenceIds:
              - ref:58179
              - ref:58227
              - ref:70760
              - ref:72910
              - ref:73037
            originalIdentificationMappings:
              - occurrenceId: occ:1315693
                originalIdentifiedName: Acdestis owenii
                acceptedName: Acdestis oweni
                difference: misspelling of
              - occurrenceId: occ:1315694
                originalIdentifiedName: Acdestis owenii
                acceptedName: Acdestis oweni
                difference: misspelling of
              - occurrenceId: occ:1315699
                originalIdentifiedName: Acdestis owenii
                acceptedName: Acdestis oweni
                difference: misspelling of
              - occurrenceId: occ:1315723
                originalIdentifiedName: Acdestis owenii
                acceptedName: Acdestis oweni
                difference: misspelling of
              - occurrenceId: occ:1316290
                originalIdentifiedName: Acdestis owenii
                acceptedName: Acdestis oweni
                difference: misspelling of
              - occurrenceId: occ:1479025
                originalIdentifiedName: Acdestis owenii
                acceptedName: Acdestis oweni
                difference: misspelling of
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

# Acdestis oweni
