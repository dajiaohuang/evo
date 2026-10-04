---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Palaeolagus temnodon
    rank: species
    sourceDatasetId: null
    name:
      zh: Palaeolagus temnodon
      en: Palaeolagus temnodon
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
            title: PBDB accepted record — Palaeolagus temnodon
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49664&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49664; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49664
            selectedOccurrenceIds:
              - occ:177962
              - occ:178073
              - occ:178083
              - occ:178115
              - occ:178126
              - occ:178164
              - occ:178188
              - occ:178241
              - occ:178285
              - occ:178311
              - occ:178384
              - occ:178393
              - occ:178405
              - occ:178408
              - occ:178427
              - occ:178543
              - occ:178593
              - occ:178633
              - occ:178660
              - occ:178678
              - occ:178824
              - occ:178933
              - occ:179027
              - occ:179095
              - occ:179203
              - occ:179229
              - occ:179248
              - occ:179300
              - occ:1450153
            selectedCollectionIds:
              - col:16917
              - col:16919
              - col:16920
              - col:16924
              - col:16925
              - col:16928
              - col:16930
              - col:16935
              - col:16940
              - col:16941
              - col:16950
              - col:16952
              - col:16955
              - col:16956
              - col:16959
              - col:16962
              - col:16963
              - col:16964
              - col:16965
              - col:16966
              - col:16988
              - col:16996
              - col:17010
              - col:17014
              - col:17028
              - col:17031
              - col:17033
              - col:17041
              - col:45640
            sourceReferenceIds:
              - ref:2716
              - ref:3318
              - ref:3479
              - ref:3637
              - ref:1585
              - ref:3359
              - ref:2280
              - ref:1442
              - ref:1381
              - ref:3727
              - ref:2813
              - ref:69342
            originalIdentificationMappings:
              - occurrenceId: occ:178824
                originalIdentifiedName: Palaeolagus temnodon n. sp.
                acceptedName: Palaeolagus temnodon
                difference: null
              - occurrenceId: occ:179027
                originalIdentifiedName: Palaeolagus temnodon n. sp.
                acceptedName: Palaeolagus temnodon
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

# Palaeolagus temnodon
