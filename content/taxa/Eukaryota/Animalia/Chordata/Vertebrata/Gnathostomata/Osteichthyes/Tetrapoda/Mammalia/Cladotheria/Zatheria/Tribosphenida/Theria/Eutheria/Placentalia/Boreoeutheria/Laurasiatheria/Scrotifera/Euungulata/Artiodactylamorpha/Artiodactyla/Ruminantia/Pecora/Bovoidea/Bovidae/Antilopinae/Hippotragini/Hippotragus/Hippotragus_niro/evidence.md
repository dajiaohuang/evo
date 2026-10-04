---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hippotragus niro
    rank: species
    sourceDatasetId: null
    name:
      zh: Hippotragus niro
      en: Hippotragus niro
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
            title: PBDB accepted record — Hippotragus niro
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=374724&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:374724; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:374724
            selectedOccurrenceIds:
              - occ:214264
              - occ:219156
              - occ:219243
              - occ:219537
              - occ:219658
              - occ:221050
              - occ:227506
              - occ:229191
              - occ:388518
              - occ:395141
            selectedCollectionIds:
              - col:21968
              - col:22490
              - col:22499
              - col:22552
              - col:22577
              - col:21954
              - col:22168
              - col:22627
              - col:22494
              - col:22491
            sourceReferenceIds:
              - ref:4948
              - ref:5627
              - ref:5636
              - ref:5232
              - ref:5365
              - ref:4478
              - ref:9955
            originalIdentificationMappings:
              - occurrenceId: occ:214264
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:219156
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:219243
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:219537
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:219658
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:221050
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:227506
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:229191
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:388518
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
                difference: recombined as
              - occurrenceId: occ:395141
                originalIdentifiedName: Damaliscus niro
                acceptedName: Hippotragus niro
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

# Hippotragus niro
