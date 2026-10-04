---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pachycetus paulsonii
    rank: species
    sourceDatasetId: null
    name:
      zh: Pachycetus paulsonii
      en: Pachycetus paulsonii
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
            title: PBDB accepted record — Pachycetus paulsonii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63087&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:63087; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:63087
            selectedOccurrenceIds:
              - occ:465625
              - occ:480952
              - occ:480953
              - occ:480954
              - occ:557553
              - occ:666958
              - occ:719665
              - occ:773714
              - occ:967023
              - occ:1034770
              - occ:1069242
              - occ:1069243
              - occ:1069245
              - occ:1069248
              - occ:1069250
              - occ:1069252
              - occ:1093634
              - occ:1112649
              - occ:1112650
              - occ:1512423
              - occ:1512424
              - occ:1512436
              - occ:1512445
              - occ:1512446
              - occ:1512452
              - occ:1609867
              - occ:1609868
              - occ:1609869
            selectedCollectionIds:
              - col:46086
              - col:48026
              - col:48027
              - col:48028
              - col:57767
              - col:71821
              - col:77227
              - col:82994
              - col:114208
              - col:123876
              - col:132383
              - col:132385
              - col:132386
              - col:132389
              - col:132391
              - col:132393
              - col:137757
              - col:132381
              - col:211071
              - col:211074
              - col:211078
              - col:211080
              - col:211075
              - col:211084
              - col:227706
              - col:168386
            sourceReferenceIds:
              - ref:82775
              - ref:11981
              - ref:29257
              - ref:26362
              - ref:15532
              - ref:26143
              - ref:45798
            originalIdentificationMappings:
              - occurrenceId: occ:480952
                originalIdentifiedName: Zeuglodon paulsonii n. sp.
                acceptedName: Pachycetus paulsonii
                difference: recombined as
              - occurrenceId: occ:480953
                originalIdentifiedName: Platyosphys paulsonii n. gen.
                acceptedName: Pachycetus paulsonii
                difference: recombined as
              - occurrenceId: occ:480954
                originalIdentifiedName: Zeuglodon paulsonii
                acceptedName: Pachycetus paulsonii
                difference: recombined as
              - occurrenceId: occ:557553
                originalIdentifiedName: Platyosphys einori n. sp.
                acceptedName: Pachycetus paulsonii
                difference: null
              - occurrenceId: occ:719665
                originalIdentifiedName: Zeuglodon paulsonii
                acceptedName: Pachycetus paulsonii
                difference: recombined as
              - occurrenceId: occ:1112650
                originalIdentifiedName: Basilotritus uheni n. gen. n. sp.
                acceptedName: Pachycetus paulsonii
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

# Pachycetus paulsonii
