---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protocyon troglodytes
    rank: species
    sourceDatasetId: null
    name:
      zh: Protocyon troglodytes
      en: Protocyon troglodytes
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
            title: PBDB accepted record — Protocyon troglodytes
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=250733&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:250733; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:250733
            selectedOccurrenceIds:
              - occ:654800
              - occ:654893
              - occ:661923
              - occ:662077
              - occ:840445
              - occ:1074839
              - occ:1089563
              - occ:1107717
              - occ:1156361
              - occ:1460984
              - occ:1519626
              - occ:1631018
              - occ:1631019
              - occ:1631020
              - occ:1631021
              - occ:1631022
              - occ:1631023
              - occ:1631024
              - occ:1631025
              - occ:1631026
              - occ:1631027
              - occ:1631028
            selectedCollectionIds:
              - col:70673
              - col:70704
              - col:71313
              - col:71332
              - col:63515
              - col:133630
              - col:92814
              - col:140159
              - col:148309
              - col:147598
              - col:212361
              - col:231068
              - col:213204
              - col:231069
              - col:231070
              - col:78581
              - col:142142
              - col:183973
              - col:231071
              - col:142327
              - col:231072
              - col:231073
            sourceReferenceIds:
              - ref:19694
              - ref:24122
              - ref:23910
              - ref:46993
              - ref:43044
              - ref:43780
              - ref:45265
              - ref:47592
              - ref:69878
              - ref:73372
              - ref:85524
            originalIdentificationMappings:
              - occurrenceId: occ:1074839
                originalIdentifiedName: Protocyon orcesi n. sp.
                acceptedName: Protocyon troglodytes
                difference: null
              - occurrenceId: occ:1631018
                originalIdentifiedName: Protocyon troglodytes n. sp.
                acceptedName: Protocyon troglodytes
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

# Protocyon troglodytes
