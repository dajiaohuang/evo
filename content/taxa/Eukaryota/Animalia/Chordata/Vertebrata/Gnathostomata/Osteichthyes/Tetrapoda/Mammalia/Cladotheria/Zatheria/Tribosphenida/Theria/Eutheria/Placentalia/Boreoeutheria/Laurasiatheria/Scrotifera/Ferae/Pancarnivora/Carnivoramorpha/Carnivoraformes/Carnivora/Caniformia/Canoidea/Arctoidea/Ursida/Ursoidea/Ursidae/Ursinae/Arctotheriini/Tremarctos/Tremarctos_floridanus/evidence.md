---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Tremarctos floridanus
    rank: species
    sourceDatasetId: null
    name:
      zh: Tremarctos floridanus
      en: Tremarctos floridanus
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
            title: PBDB accepted record — Tremarctos floridanus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44274&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44274; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44274
            selectedOccurrenceIds:
              - occ:195554
              - occ:197037
              - occ:197979
              - occ:198608
              - occ:198874
              - occ:199414
              - occ:199839
              - occ:199999
              - occ:398246
              - occ:610352
              - occ:662217
              - occ:745059
              - occ:745060
              - occ:841788
              - occ:841789
              - occ:841790
              - occ:1196136
              - occ:1196400
              - occ:1196543
              - occ:1196891
              - occ:1196941
              - occ:1198028
              - occ:1198030
              - occ:1198031
              - occ:1515301
              - occ:1593096
            selectedCollectionIds:
              - col:20113
              - col:20302
              - col:20398
              - col:20491
              - col:20520
              - col:20593
              - col:20636
              - col:20650
              - col:13066
              - col:65405
              - col:71345
              - col:79920
              - col:79757
              - col:93344
              - col:93345
              - col:93346
              - col:154722
              - col:154771
              - col:74292
              - col:154804
              - col:154805
              - col:154936
              - col:20573
              - col:154773
              - col:195112
              - col:225289
            sourceReferenceIds:
              - ref:1186
              - ref:1725
              - ref:2611
              - ref:3580
              - ref:3567
              - ref:10274
              - ref:18853
              - ref:24078
              - ref:26822
              - ref:31584
              - ref:50316
              - ref:50335
              - ref:50339
              - ref:50371
              - ref:2451
              - ref:50467
              - ref:73089
              - ref:81276
            originalIdentificationMappings:
              - occurrenceId: occ:662217
                originalIdentifiedName: Tremarctos mexicanus
                acceptedName: Tremarctos floridanus
                difference: null
              - occurrenceId: occ:1196400
                originalIdentifiedName: Arctodus floridanus
                acceptedName: Tremarctos floridanus
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

# Tremarctos floridanus
