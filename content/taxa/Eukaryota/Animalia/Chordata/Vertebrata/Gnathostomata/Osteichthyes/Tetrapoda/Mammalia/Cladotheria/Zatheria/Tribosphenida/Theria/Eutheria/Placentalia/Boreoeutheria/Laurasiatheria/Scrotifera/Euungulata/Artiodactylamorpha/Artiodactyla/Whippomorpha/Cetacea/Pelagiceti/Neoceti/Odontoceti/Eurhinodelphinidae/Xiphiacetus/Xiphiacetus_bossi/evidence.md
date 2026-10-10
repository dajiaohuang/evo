---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Xiphiacetus bossi
    rank: species
    sourceDatasetId: null
    name:
      zh: Xiphiacetus bossi
      en: Xiphiacetus bossi
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
            title: PBDB accepted record — Xiphiacetus bossi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=66353&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:66353; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:66353
            selectedOccurrenceIds:
              - occ:461107
              - occ:666760
              - occ:666766
              - occ:666779
              - occ:666780
              - occ:666814
              - occ:666907
              - occ:666908
              - occ:666909
              - occ:787578
              - occ:787579
              - occ:848396
              - occ:969054
              - occ:1372056
              - occ:1372101
              - occ:1634973
              - occ:1634974
              - occ:1634978
              - occ:1634980
              - occ:1634981
              - occ:1634982
              - occ:1634983
              - occ:1634984
            selectedCollectionIds:
              - col:45493
              - col:45509
              - col:48884
              - col:45498
              - col:71801
              - col:71799
              - col:71615
              - col:57785
              - col:45506
              - col:51680
              - col:114830
              - col:79793
              - col:187324
              - col:70819
              - col:231819
              - col:71810
              - col:45511
              - col:231780
              - col:231820
              - col:168458
              - col:70818
            sourceReferenceIds:
              - ref:11905
              - ref:24251
              - ref:15550
              - ref:13748
              - ref:37209
              - ref:62831
              - ref:85660
            originalIdentificationMappings:
              - occurrenceId: occ:461107
                originalIdentifiedName: Eurhinodelphis bossi n. sp.
                acceptedName: Xiphiacetus bossi
                difference: recombined as
              - occurrenceId: occ:666760
                originalIdentifiedName: Eurhinodelphis bossi
                acceptedName: Xiphiacetus bossi
                difference: recombined as
              - occurrenceId: occ:666766
                originalIdentifiedName: Eurhinodelphis bossi
                acceptedName: Xiphiacetus bossi
                difference: recombined as
              - occurrenceId: occ:666779
                originalIdentifiedName: Eurhinodelphis bossi
                acceptedName: Xiphiacetus bossi
                difference: recombined as
              - occurrenceId: occ:666780
                originalIdentifiedName: Eurhinodelphis vaughni
                acceptedName: Xiphiacetus bossi
                difference: null
              - occurrenceId: occ:666814
                originalIdentifiedName: Eurhinodelphis vaughni
                acceptedName: Xiphiacetus bossi
                difference: null
              - occurrenceId: occ:666907
                originalIdentifiedName: Eurhinodelphis bossi
                acceptedName: Xiphiacetus bossi
                difference: recombined as
              - occurrenceId: occ:666908
                originalIdentifiedName: Eurhinodelphis bossi
                acceptedName: Xiphiacetus bossi
                difference: recombined as
              - occurrenceId: occ:666909
                originalIdentifiedName: Eurhinodelphis bossi
                acceptedName: Xiphiacetus bossi
                difference: recombined as
              - occurrenceId: occ:787578
                originalIdentifiedName: Eurhinodelphis morrisi n. sp.
                acceptedName: Xiphiacetus bossi
                difference: null
              - occurrenceId: occ:787579
                originalIdentifiedName: Eurhinodelphis vaughni n. sp.
                acceptedName: Xiphiacetus bossi
                difference: null
              - occurrenceId: occ:848396
                originalIdentifiedName: Eurhinodelphis bossi
                acceptedName: Xiphiacetus bossi
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

# Xiphiacetus bossi
