---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Merychippus gunteri
    rank: species
    sourceDatasetId: null
    name:
      zh: Merychippus gunteri
      en: Merychippus gunteri
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
            title: PBDB accepted record — Merychippus gunteri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48182&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48182; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48182
            selectedOccurrenceIds:
              - occ:187638
              - occ:187792
              - occ:187840
              - occ:187967
              - occ:188118
              - occ:188256
              - occ:188262
              - occ:188308
              - occ:188340
              - occ:188352
              - occ:188420
              - occ:188451
              - occ:188471
              - occ:188524
              - occ:188532
              - occ:188538
              - occ:188560
              - occ:188667
              - occ:188672
              - occ:188678
              - occ:188687
              - occ:188691
              - occ:188698
              - occ:188709
              - occ:1317494
            selectedCollectionIds:
              - col:18503
              - col:18538
              - col:18549
              - col:18561
              - col:18582
              - col:18607
              - col:18608
              - col:18614
              - col:18619
              - col:18620
              - col:18627
              - col:18632
              - col:18637
              - col:18646
              - col:18648
              - col:18650
              - col:18658
              - col:18677
              - col:18680
              - col:18682
              - col:18688
              - col:18691
              - col:18695
              - col:18704
              - col:176936
            sourceReferenceIds:
              - ref:1146
              - ref:1145
              - ref:3135
              - ref:1504
              - ref:4152
              - ref:58392
            originalIdentificationMappings:
              - occurrenceId: occ:187638
                originalIdentifiedName: '"Merychippus" gunteri'
                acceptedName: Merychippus gunteri
                difference: null
              - occurrenceId: occ:187792
                originalIdentifiedName: '"Merychippus" gunteri'
                acceptedName: Merychippus gunteri
                difference: null
              - occurrenceId: occ:187840
                originalIdentifiedName: '"Merychippus" gunteri'
                acceptedName: Merychippus gunteri
                difference: null
              - occurrenceId: occ:187967
                originalIdentifiedName: Merychippus gunteri n. sp.
                acceptedName: Merychippus gunteri
                difference: null
              - occurrenceId: occ:188118
                originalIdentifiedName: '"Merychippus" gunteri'
                acceptedName: Merychippus gunteri
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

# Merychippus gunteri
