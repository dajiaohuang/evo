---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Schizodelphis sulcatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Schizodelphis sulcatus
      en: Schizodelphis sulcatus
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
            title: PBDB accepted record — Schizodelphis sulcatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63687&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:63687; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:63687
            selectedOccurrenceIds:
              - occ:460983
              - occ:467893
              - occ:467905
              - occ:478724
              - occ:486174
              - occ:493541
              - occ:541721
              - occ:541722
              - occ:545076
              - occ:557671
              - occ:557672
              - occ:557673
              - occ:557674
              - occ:610365
              - occ:794917
              - occ:796322
              - occ:810450
              - occ:968844
              - occ:1156862
              - occ:1156892
              - occ:1156909
              - occ:1698769
            selectedCollectionIds:
              - col:18579
              - col:46474
              - col:46525
              - col:47623
              - col:48656
              - col:47425
              - col:56685
              - col:57060
              - col:48884
              - col:57784
              - col:57785
              - col:65161
              - col:85338
              - col:75152
              - col:114719
              - col:148396
              - col:148401
              - col:142149
              - col:240623
            sourceReferenceIds:
              - ref:12196
              - ref:12186
              - ref:12880
              - ref:13196
              - ref:28565
              - ref:51871
              - ref:15266
              - ref:15409
              - ref:18854
              - ref:12198
              - ref:29146
              - ref:29779
              - ref:37188
              - ref:47649
              - ref:15322
              - ref:86091
            originalIdentificationMappings:
              - occurrenceId: occ:493541
                originalIdentifiedName: Delphinus canaliculatus n. sp.
                acceptedName: Schizodelphis sulcatus
                difference: null
              - occurrenceId: occ:541721
                originalIdentifiedName: Delphinus pseudodelphis n. sp.
                acceptedName: Schizodelphis sulcatus
                difference: null
              - occurrenceId: occ:541722
                originalIdentifiedName: Delphinus dationum
                acceptedName: Schizodelphis sulcatus
                difference: null
              - occurrenceId: occ:794917
                originalIdentifiedName: Delphinus sulcatus n. sp.
                acceptedName: Schizodelphis sulcatus
                difference: recombined as
              - occurrenceId: occ:796322
                originalIdentifiedName: Delphinus dationum n. sp.
                acceptedName: Schizodelphis sulcatus
                difference: null
              - occurrenceId: occ:810450
                originalIdentifiedName: Cyrtodelphis sulcatus
                acceptedName: Schizodelphis sulcatus
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

# Schizodelphis sulcatus
