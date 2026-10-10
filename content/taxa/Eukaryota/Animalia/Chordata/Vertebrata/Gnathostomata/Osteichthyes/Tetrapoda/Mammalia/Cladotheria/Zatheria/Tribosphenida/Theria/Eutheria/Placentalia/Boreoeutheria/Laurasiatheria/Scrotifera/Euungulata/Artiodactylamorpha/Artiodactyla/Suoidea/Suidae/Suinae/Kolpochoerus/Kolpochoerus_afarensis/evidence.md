---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Kolpochoerus afarensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Kolpochoerus afarensis
      en: Kolpochoerus afarensis
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
            title: PBDB accepted record — Kolpochoerus afarensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=375001&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:375001; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:375001
            selectedOccurrenceIds:
              - occ:214255
              - occ:217342
              - occ:217376
              - occ:217520
              - occ:218156
              - occ:218657
              - occ:219287
              - occ:219318
              - occ:223338
              - occ:223484
              - occ:223617
              - occ:223684
              - occ:224314
              - occ:224340
              - occ:224364
              - occ:224393
              - occ:224396
              - occ:224406
              - occ:224408
              - occ:224412
              - occ:224414
              - occ:224430
              - occ:224446
              - occ:224454
              - occ:226652
              - occ:226655
            selectedCollectionIds:
              - col:21962
              - col:22174
              - col:22176
              - col:22197
              - col:22267
              - col:22321
              - col:22505
              - col:22506
              - col:21549
              - col:21571
              - col:21608
              - col:21618
              - col:21754
              - col:21755
              - col:21762
              - col:21771
              - col:21773
              - col:21775
              - col:21776
              - col:21779
              - col:21780
              - col:21783
              - col:21785
              - col:21786
              - col:22037
              - col:22038
            sourceReferenceIds:
              - ref:5264
              - ref:5366
              - ref:4442
              - ref:5571
              - ref:5479
              - ref:4486
              - ref:4763
              - ref:4769
              - ref:4447
              - ref:4782
              - ref:4850
              - ref:4847
              - ref:4770
              - ref:4771
            originalIdentificationMappings:
              - occurrenceId: occ:218657
                originalIdentifiedName: Potamochoerus afarensis
                acceptedName: Kolpochoerus afarensis
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

# Kolpochoerus afarensis
